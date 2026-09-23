#!/usr/bin/env node
/**
 * Export Squarespace blog posts from customersuccess.cx into Markdown content files.
 *
 * Usage:
 *   node scripts/export-squarespace.mjs support-stack/<slug> [support-stack/<slug> ...]
 *   node scripts/export-squarespace.mjs --all support-stack        # every published post in a collection
 *
 * Reads the public ?format=json endpoint (no login needed), so it only sees published posts.
 * Writes src/content/<collection>/<slug>.md and tries to download the featured image into
 * public/images/. If the image download fails (e.g. a network policy blocks the CDN), the
 * remote URL is kept in the front matter so the page still renders.
 *
 * Set NODE_USE_ENV_PROXY=1 if you are behind an HTTPS proxy.
 */
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.customersuccess.cx';

// ---------- tiny HTML → Markdown helpers (Squarespace bodies are simple: p, h3, a, strong, em) ----------
const entities = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#39': "'" };
const unescape = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    return entities[e] ?? m;
  });

function inline(html) {
  return unescape(
    html
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<a\s[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gis, (_, href, text) => `[${strip(text)}](${href})`)
      .replace(/<(strong|b)>(.*?)<\/\1>/gis, '**$2**')
      .replace(/<(em|i)>(.*?)<\/\1>/gis, '*$2*')
      .replace(/<[^>]+>/g, '')
  ).trim();
}
const strip = (html) => unescape(html.replace(/<[^>]+>/g, '')).trim();

/** Walk the body in document order and return [{tag, html}] for the block elements we care about. */
function blocks(body) {
  const out = [];
  const re = /<(h[1-6]|p|ul|ol|blockquote)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(body))) out.push({ tag: m[1].toLowerCase(), html: m[2] });
  return out;
}

function listToMarkdown(tag, html) {
  const items = [...html.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map((x) => inline(x[1]));
  return items.map((t, i) => `${tag === 'ol' ? `${i + 1}.` : '-'} ${t.replace(/\n/g, ' ')}`).join('\n');
}

// ---------- episode-specific parsing ----------
const SPEAKER = /^(.{1,60}?)\s\((\d{1,2}:\d{2}(?::\d{2})?)\)$/;

function parseEpisode(item) {
  const bs = blocks(item.body);
  const summary = [];
  const resources = [];
  const transcript = [];
  let mode = 'summary';

  for (const b of bs) {
    const text = inline(b.html);
    if (!text) continue;
    if (mode !== 'transcript' && b.tag === 'h3' && /episode transcript/i.test(text)) { mode = 'transcript'; continue; }
    if (mode === 'summary' && /^🔗?\s*Resources mentioned/i.test(text)) { mode = 'resources'; continue; }
    if (mode === 'resources') {
      if (/Subscribe to my daily email list/i.test(text)) { mode = 'after-cta'; continue; }
      const link = text.match(/^\[(.+?)\]\((.+?)\)$/);
      resources.push(link ? { label: link[1], url: link[2] } : { label: text });
      continue;
    }
    if (mode === 'after-cta') continue; // the video embed sits here; we take the id from the iframe instead
    if (mode === 'transcript') {
      const sp = text.match(SPEAKER);
      if (sp) transcript.push({ speaker: sp[1], time: sp[2], text: '' });
      else if (transcript.length) transcript[transcript.length - 1].text += (transcript[transcript.length - 1].text ? '\n\n' : '') + text;
      else transcript.push({ speaker: '', time: '', text });
      continue;
    }
    // summary
    if (b.tag === 'ul' || b.tag === 'ol') summary.push(listToMarkdown(b.tag, b.html));
    else if (b.tag.startsWith('h')) summary.push(`${'#'.repeat(Number(b.tag[1]))} ${text}`);
    else summary.push(text);
  }

  const yt = item.body.match(/youtube(?:-nocookie)?\.com\/embed\/([A-Za-z0-9_-]{6,})/);
  const title = strip(item.title);
  const solo = title.match(/Solo Ep\.?\s*0?(\d+)/i);
  const guestEp = title.match(/\bE(?:p\.?|pisode)?\s*0?(\d+)\b/i);
  const guest = title.match(/with ([^()]+?)(?:\s\(Fin\))?\s*$/i);

  return {
    title,
    slug: item.urlId,
    publishDate: new Date(item.publishOn).toISOString(),
    episode: solo ? Number(solo[1]) : guestEp ? Number(guestEp[1]) : undefined,
    format: solo ? 'solo' : 'guest',
    guest: !solo && guest ? guest[1].trim() : undefined,
    youtubeId: yt?.[1],
    thumbnailRemote: item.assetUrl,
    excerpt: strip(item.excerpt || ''),
    categories: item.categories || [],
    squarespaceUrl: `${SITE}${item.fullUrl}`,
    summary,
    resources,
    transcript,
  };
}

const yaml = (v) => JSON.stringify(v); // JSON is valid YAML for scalars/arrays/objects

function toMarkdown(ep, thumbnail) {
  const fm = [
    `title: ${yaml(ep.title)}`,
    `publishDate: ${yaml(ep.publishDate)}`,
    ep.episode !== undefined ? `episode: ${ep.episode}` : null,
    `format: ${ep.format}`,
    ep.guest ? `guest: ${yaml(ep.guest)}` : null,
    ep.youtubeId ? `youtubeId: ${yaml(ep.youtubeId)}` : null,
    `thumbnail: ${yaml(thumbnail)}`,
    `excerpt: ${yaml(ep.excerpt)}`,
    ep.categories.length ? `categories: ${yaml(ep.categories)}` : null,
    `resources:`,
    ...(ep.resources.length
      ? ep.resources.map((r) => `  - ${yaml(r)}`)
      : ['  []']),
    `squarespaceUrl: ${yaml(ep.squarespaceUrl)}`,
  ].filter(Boolean);

  const transcript = ep.transcript
    .map((t) => (t.speaker ? `**${t.speaker} (${t.time})**\n${t.text}` : t.text))
    .join('\n\n');

  return `---\n${fm.join('\n')}\n---\n\n${ep.summary.join('\n\n')}\n\n## Episode transcript\n\n${transcript}\n`;
}

// ---------- IO ----------
async function fetchJson(path) {
  const res = await fetch(`${SITE}/${path}?format=json`, { headers: { 'user-agent': 'Mozilla/5.0 (export script)' } });
  if (!res.ok) throw new Error(`${res.status} fetching ${path}`);
  return res.json();
}

async function downloadImage(url, dest) {
  try {
    const res = await fetch(`${url}?format=1500w`);
    if (!res.ok) throw new Error(String(res.status));
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    return true;
  } catch (e) {
    console.warn(`  ! could not download ${url} (${e.message}); keeping the remote URL`);
    return false;
  }
}

async function exportPost(path) {
  const data = await fetchJson(path);
  const collection = data.collection.urlId;
  const ep = parseEpisode(data.item);
  const ext = (ep.thumbnailRemote?.match(/\.(png|jpe?g|webp)/i)?.[1] || 'png').toLowerCase();
  const localImage = `/images/${collection}/${ep.slug}.${ext}`;
  const ok = ep.thumbnailRemote ? await downloadImage(ep.thumbnailRemote, join(ROOT, 'public', localImage)) : false;
  const outDir = join(ROOT, 'src/content', collection);
  await mkdir(outDir, { recursive: true });
  const outFile = join(outDir, `${ep.slug}.md`);
  await writeFile(outFile, toMarkdown(ep, ok ? localImage : ep.thumbnailRemote));
  console.log(`✓ ${collection}/${ep.slug}.md  (${ep.summary.length} summary blocks, ${ep.resources.length} resources, ${ep.transcript.length} transcript turns)`);
}

async function listCollection(collection) {
  const slugs = [];
  let offset;
  for (;;) {
    const data = await fetchJson(`${collection}${offset ? `?offset=${offset}&` : '?'}`.replace(/\?$/, ''));
    for (const it of data.items) slugs.push(`${collection}/${it.urlId}`);
    if (!data.pagination?.nextPage) break;
    offset = data.pagination.nextPageOffset;
  }
  return slugs;
}

const args = process.argv.slice(2);
if (!args.length) {
  console.error('Usage: node scripts/export-squarespace.mjs support-stack/<slug> ... | --all support-stack');
  process.exit(1);
}
const targets = args[0] === '--all' ? await listCollection(args[1]) : args;
for (const t of targets) {
  try { await exportPost(t); } catch (e) { console.error(`✗ ${t}: ${e.message}`); process.exitCode = 1; }
}
