export const SITE = {
  name: 'CustomerSuccess.cx',
  description: 'Conor Pendergrast helps B2B SaaS companies make Intercom and Fin actually work.',
  contactEmail: 'hello@customersuccess.cx',
  bentoSiteKey: 'b2d0f0f5a177368d705877190a23c112',
  intercomAppId: 'uq9fbojb',
  ga4Id: 'G-6WX8JC9XG8',
  timeZone: 'Europe/London',
};

// Third-party scripts (GA4, Intercom, Bento tracking) only load when this is set,
// so the proof of concept doesn't pollute real analytics. Set PUBLIC_THIRD_PARTY=true
// in the production build.
export const THIRD_PARTY = import.meta.env.PUBLIC_THIRD_PARTY === 'true';

export const NAV = [
  { label: 'Daily List', href: '/daily' },
  { label: 'Support Stack', href: '/support-stack' },
];

/** Prefix an internal path with the deploy base (e.g. /claude-code on GitHub Pages). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: SITE.timeZone });
}
