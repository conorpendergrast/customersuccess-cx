# customersuccess.cx proof of concept

Astro static site. Content is Markdown in `src/content/`, pages are `.astro` files in `src/pages/`,
one layout in `src/layouts/Base.astro`, shared bits in `src/components/`.

## Commands (run in the repo root)

- `npm install` once, then `npm run dev` for a local preview, `npm run build` to produce `dist/`.
- `npm run export -- support-stack/<slug>` pulls a published Squarespace post into
  `src/content/support-stack/<slug>.md` (use `--all support-stack` for the whole collection).
  Behind a proxy set `NODE_USE_ENV_PROXY=1`. Featured images download into `public/images/`
  when the CDN is reachable; otherwise the remote URL is kept in the front matter.

## Adding a Support Stack episode

Create `src/content/support-stack/<slug>.md`:

```md
---
title: "Support Stack E20: …"
publishDate: "2026-10-01T08:00:00.000Z"   # future dates are hidden from the list until they pass
episode: 20
format: guest            # guest | solo | article
guest: "Name"
youtubeId: "xxxxxxxxxxx"
thumbnail: "/images/support-stack/<slug>.png"
excerpt: "One sentence for the card."
resources:
  - { "label": "Link text", "url": "https://…" }
---

Summary paragraphs in Conor's voice.

## Episode transcript

**Conor Pendergrast (00:00)**
First turn…
```

The layout renders summary → resources → subscribe call-to-action → video → transcript
automatically, and generates Article + VideoObject JSON-LD from the front matter.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.
`astro.config.mjs` sets `base: '/customersuccess-cx'` for the Pages URL; change `site`
and `base` when this moves to the real domain.

Third-party scripts (GA4, Intercom, Bento tracking) are off unless `PUBLIC_THIRD_PARTY=true`
is set at build time, so test deployments don't pollute analytics. The Bento subscribe form
works regardless because it posts directly to Bento.
