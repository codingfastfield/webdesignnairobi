export type ClusterId = 'services' | 'agencies' | 'local' | 'pricing' | 'industries' | 'audiences';
export interface Page { slug: string; kw: string; cluster: ClusterId; variants: string[]; ind?: string; home: boolean; hub: boolean }

export const clusters: Record<ClusterId, { label: string; hub: string; blurb: string }> = {
  services: { label: 'Services', hub: 'website-design-services-nairobi', blurb: 'Design, development, redesign and maintenance.' },
  agencies: { label: 'Companies & designers', hub: 'website-design-company-nairobi', blurb: 'Comparing agencies, companies, designers and developers.' },
  local: { label: 'Near me & Kenya', hub: 'website-designer-near-me', blurb: 'Local help in Nairobi and across Kenya.' },
  pricing: { label: 'Prices & packages', hub: 'website-design-prices-nairobi', blurb: 'What a website costs in Kenya, and how to keep it affordable.' },
  industries: { label: 'By industry', hub: 'business-website-design-nairobi', blurb: 'Websites built for specific kinds of business.' },
  audiences: { label: 'Small business & startups', hub: 'website-designer-for-small-business-nairobi', blurb: 'For people who need a site built and are choosing who to trust.' },
};

// [keyword, cluster, variant keywords (shown as "also searched" + used as varied anchor text), industry key]
// Slug = kebab-case keyword. Add a line here and the page, links, sitemap and schema generate themselves.
const raw: [string, ClusterId, string[]?, string?][] = [
  ['website design Nairobi', 'services'],
  ['web design Nairobi', 'services'],
  ['website development Nairobi', 'services'],
  ['web development Nairobi', 'services'],
  ['website design services Nairobi', 'services', ['web design services Nairobi']],
  ['website development services Nairobi', 'services', ['web development services Nairobi']],
  ['custom website design Nairobi', 'services'],
  ['professional website design Nairobi', 'services'],
  ['website creation Nairobi', 'services'],
  ['website redesign services Nairobi', 'services'],
  ['website maintenance services Nairobi', 'services'],

  ['website design company Nairobi', 'agencies', ['website design companies in Nairobi']],
  ['web design company Nairobi', 'agencies'],
  ['website development company Nairobi', 'agencies', ['website development companies in Nairobi']],
  ['web development company Nairobi', 'agencies'],
  ['website agency Nairobi', 'agencies', ['website agency in Nairobi']],
  ['web design agency Nairobi', 'agencies'],
  ['website designers Nairobi', 'agencies', ['website designers in Nairobi']],
  ['web developers Nairobi', 'agencies', ['web developers in Nairobi']],
  ['website developer Nairobi', 'agencies'],
  ['web developer Nairobi', 'agencies'],
  ['best web designers Nairobi', 'agencies', ['best website designers Nairobi', 'web designers in Nairobi']],
  ['best web development company Nairobi', 'agencies'],
  ['top web design companies Nairobi', 'agencies'],

  ['website designer near me', 'local'],
  ['web designer near me', 'local'],
  ['website developer near me', 'local'],
  ['web developer near me', 'local'],
  ['website company near me', 'local'],
  ['website developers Kenya', 'local'],
  ['website designers Kenya', 'local'],

  ['website design prices Nairobi', 'pricing', ['website design price Nairobi']],
  ['website design packages Nairobi', 'pricing', ['website design packages Kenya']],
  ['website design cost Kenya', 'pricing', ['website design cost Nairobi', 'website design prices Kenya']],
  ['website development cost Nairobi', 'pricing', ['website development cost Kenya', 'website developer prices Kenya']],
  ['how much does a website cost in Kenya', 'pricing'],
  ['how much does a website cost in Nairobi', 'pricing'],
  ['affordable website design Nairobi', 'pricing', ['affordable web designers Nairobi']],
  ['cheap website design Nairobi', 'pricing', ['cheap web design Nairobi', 'cheap website designers Nairobi', 'cheap website development Nairobi']],
  ['affordable website design Kenya', 'pricing'],
  ['website quotation Nairobi', 'pricing', ['website design quote Nairobi']],

  ['business website design Nairobi', 'industries', [], 'company'],
  ['company website design Nairobi', 'industries', [], 'company'],
  ['ecommerce website design Nairobi', 'industries', ['online shop website Nairobi'], 'ecommerce'],
  ['ecommerce website development Nairobi', 'industries', [], 'ecommerce'],
  ['ecommerce website developer Nairobi', 'industries', [], 'ecommerce'],
  ['affordable ecommerce website Nairobi', 'industries', [], 'ecommerce'],
  ['restaurant website design Nairobi', 'industries', [], 'restaurant'],
  ['hotel website design Nairobi', 'industries', [], 'hotel'],
  ['real estate website design Nairobi', 'industries', ['property website development Nairobi'], 'realestate'],
  ['school website design Nairobi', 'industries', [], 'school'],
  ['hospital website design Nairobi', 'industries', [], 'hospital'],
  ['law firm website design Nairobi', 'industries', [], 'lawfirm'],
  ['construction company website design Nairobi', 'industries', [], 'construction'],
  ['NGO website design Nairobi', 'industries', [], 'ngo'],
  ['church website design Nairobi', 'industries', [], 'church'],
  ['portfolio website design Nairobi', 'industries', [], 'portfolio'],
  ['personal website design Nairobi', 'industries', [], 'personal'],

  ['website designer for small business Nairobi', 'audiences'],
  ['affordable website designer for small business Nairobi', 'audiences'],
  ['affordable business website design Nairobi', 'audiences'],
  ['website design for small businesses Kenya', 'audiences'],
  ['professional website designer for business Nairobi', 'audiences'],
  ['website developer for small business Kenya', 'audiences'],
  ['website designer for startups Nairobi', 'audiences'],
  ['website developer for startups Kenya', 'audiences'],
  ['someone to build a website in Nairobi', 'audiences'],
  ['company to build a website in Nairobi', 'audiences'],
  ['where to get a website made in Nairobi', 'audiences'],
];

export const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const pages: Page[] = raw.map(([kw, cluster, variants = [], ind]) => {
  const slug = slugify(kw);
  return { slug, kw, cluster, variants, ind, home: slug === 'website-design-nairobi', hub: clusters[cluster].hub === slug };
});
export const bySlug: Record<string, Page> = {};
for (const p of pages) {
  if (bySlug[p.slug]) throw new Error(`Duplicate slug: ${p.slug}`);
  bySlug[p.slug] = p;
}
for (const c of Object.values(clusters)) if (!bySlug[c.hub]) throw new Error(`Missing hub page: ${c.hub}`);

export const url = (p: Page) => (p.home ? '/' : `/${p.slug}/`);
export const children = (id: ClusterId) => pages.filter((p) => p.cluster === id && !p.hub && !p.home);

// Your cluster path, in order. Each page in it links forward and back.
export const chain = [
  'website-design-nairobi', 'website-design-prices-nairobi', 'affordable-website-design-nairobi',
  'business-website-design-nairobi', 'ecommerce-website-design-nairobi', 'website-development-nairobi', 'website-designers-nairobi',
];

const hash = (s: string) => [...s].reduce((a, c) => a + c.charCodeAt(0), 0);
// Rotate anchor text between the keyword and its variants so links to one page are not all identical.
export const anchor = (to: Page, from: Page) => {
  const opts = [to.kw, ...to.variants];
  return cap(opts[hash(from.slug) % opts.length]);
};

const STOP = new Set(['in', 'for', 'a', 'the', 'to', 'of', 'how', 'much', 'does', 'nairobi', 'kenya', 'me', 'near', 'where', 'get', 'made', 'build', 'someone']);
const tokens = (p: Page) =>
  new Set(p.kw.toLowerCase().split(/\s+/).filter((t) => !STOP.has(t)).map((t) => t.replace(/ies$/, 'y').replace(/s$/, '')));

export function related(p: Page) {
  const seen = new Set([p.slug]);
  const take = (x?: Page) => (x && !seen.has(x.slug) ? (seen.add(x.slug), x) : undefined);
  const hub = take(bySlug[clusters[p.cluster].hub]);
  const i = chain.indexOf(p.slug);
  const next = take(i > -1 ? bySlug[chain[i + 1]] : bySlug['website-design-prices-nairobi']);
  const prev = i > 0 ? take(bySlug[chain[i - 1]]) : undefined;
  // Siblings: the next 4 pages in the cluster, wrapping round, so every page gets evenly spread inbound links.
  const group = children(p.cluster);
  const at = group.findIndex((x) => x.slug === p.slug);
  const siblings: Page[] = [];
  for (let k = 1; k <= group.length && siblings.length < 4; k++) {
    const s = take(group[(at + k + group.length) % group.length]);
    if (s) siblings.push(s);
  }
  // Similar pages from other clusters, by shared keyword tokens.
  const mine = tokens(p);
  const similar = pages
    .filter((x) => !seen.has(x.slug) && x.cluster !== p.cluster)
    .map((x) => ({ x, s: [...tokens(x)].filter((t) => mine.has(t)).length }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s || hash(a.x.slug + p.slug) - hash(b.x.slug + p.slug))
    .slice(0, 4)
    .map((r) => r.x);
  return { hub, next, prev, siblings, similar };
}
