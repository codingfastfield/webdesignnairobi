import { site } from './site';
import { cap, type Page, type ClusterId } from './pages';

interface Ind { noun: string; job: string; features: string[]; q: string; a: string }
const industries: Record<string, Ind> = {
  company: { noun: 'company', job: 'make a new visitor trust you enough to call, WhatsApp or request a quote', features: ['Service pages that each target a search customers actually make', 'Team, credentials and client logos that build trust fast', 'Quote and enquiry forms that reach your phone and inbox', 'Careers and news pages you can edit yourself'], q: 'Can the site grow as the company grows?', a: 'Yes. We build on a structure that lets you add service pages, locations, a blog or an online shop later without starting over.' },
  ecommerce: { noun: 'online shop', job: 'turn a product search into a paid order', features: ['Product catalogue with search, filters and clear photos', 'M-Pesa (STK push) and card checkout', 'Delivery zones and fees for Nairobi and countrywide', 'Order emails and WhatsApp order alerts', 'Stock management you can run from your phone'], q: 'Can customers pay with M-Pesa?', a: 'Yes. We integrate M-Pesa checkout alongside card payments, so customers can pay the way they already do.' },
  restaurant: { noun: 'restaurant', job: 'turn a "where should we eat" search into a booking or an order', features: ['Menu that loads fast on mobile and is easy to update', 'Table reservations or WhatsApp ordering', 'Google Maps, opening hours and directions', 'Photo galleries and event or offer pages'], q: 'Can customers book a table or order from the site?', a: 'Yes. We can add reservations, WhatsApp ordering or a full online ordering flow, depending on how your kitchen works.' },
  hotel: { noun: 'hotel', job: 'win the direct booking before a travel platform takes its commission', features: ['Room pages with galleries and clear rates', 'Booking enquiry or booking engine integration', 'Local guides and experiences pages that earn search traffic', 'Deposit payments by M-Pesa or card'], q: 'Can the site take direct bookings?', a: 'Yes. We can connect a booking engine or build a simple enquiry-to-confirmation flow, with deposits by M-Pesa or card.' },
  realestate: { noun: 'real estate', job: 'put the right listing in front of a buyer or tenant and capture the lead', features: ['Searchable listings with filters, maps and photo galleries', 'Agent profiles and enquiry forms on every listing', 'Fast pages for listings that change often', 'Area pages that bring in neighbourhood searches'], q: 'Can agents upload listings themselves?', a: 'Yes. Listings are managed from an admin area, so your agents add, edit and remove properties without a developer.' },
  school: { noun: 'school', job: 'give parents the answers that decide an admission', features: ['Admissions information, fee structures and application forms', 'News, events calendar and term dates', 'Staff and curriculum pages', 'Links to portals or payment options'], q: 'Can the school update news and term dates itself?', a: 'Yes. We set up simple editing so a staff member can post news and events without technical help.' },
  hospital: { noun: 'hospital and clinic', job: 'help a worried patient find the right service and book it', features: ['Departments, services and doctor profiles', 'Appointment requests or booking', 'Clear emergency and contact details', 'Fast, accessible pages that work on weak mobile connections'], q: 'Do you handle patient privacy properly?', a: 'We keep patient data out of the website unless a secure booking or records system is specifically required, and we scope that with you first.' },
  lawfirm: { noun: 'law firm', job: 'turn a stressed search into a consultation request', features: ['Practice-area pages that match how clients search', 'Lawyer profiles that show experience', 'Consultation booking and confidential enquiry forms', 'Insights and articles that build authority'], q: 'Will the site meet professional-conduct expectations?', a: 'We keep the content factual and measured. You approve all wording on practice areas and results before launch.' },
  construction: { noun: 'construction company', job: 'win the tender or the private client by showing finished work', features: ['Project portfolio with photos and scope', 'Services and certifications pages', 'Request-a-quote and tender enquiry forms', 'Case studies that answer "have you built this before?"'], q: 'Can we show completed projects by category?', a: 'Yes. Projects are organised by type and location, so each one can be shared and found on its own page.' },
  ngo: { noun: 'NGO', job: 'show impact clearly enough to earn donors, partners and volunteers', features: ['Programme and impact pages with stories and numbers', 'Donations by M-Pesa and card', 'Reports and downloads', 'Volunteer and partnership forms'], q: 'Can we accept donations online?', a: 'Yes. We can add M-Pesa and card donations, one-off or recurring, with receipts by email.' },
  church: { noun: 'church', job: 'welcome newcomers and keep the congregation connected', features: ['Service times, location and directions', 'Sermons, live-stream and events pages', 'Ministries and leadership pages', 'Giving by M-Pesa and card'], q: 'Can the church take offerings and tithes online?', a: 'Yes. We add giving by M-Pesa and card, with a simple page that explains the options.' },
  portfolio: { noun: 'portfolio', job: 'show your best work fast and make hiring you easy', features: ['Case studies and galleries that load quickly', 'About page and clear services', 'Contact and booking links', 'A look that is yours, not a template'], q: 'Can I add new projects myself?', a: 'Yes. Adding a project is a short form or a markdown file, whichever you prefer.' },
  personal: { noun: 'personal', job: 'present who you are and what you do in one clear place', features: ['A short, clear bio and CV', 'Blog or writing section', 'Links to your socials and contact', 'Your own domain and professional email'], q: 'Can I get a professional email with my domain?', a: 'Yes. We can set up email on your domain so you are not using a free address on your CV.' },
};

const base = [
  'Custom design planned around mobile first, because most Kenyan visitors arrive on a phone',
  'Hosting, SSL and domain set-up, with the account in your name',
  'On-page SEO: page titles, headings, schema, sitemap and Search Console set-up',
  'WhatsApp click-to-chat, contact forms and, where needed, M-Pesa payments',
  'An editor you can use yourself, plus a short training session',
  'Analytics and post-launch support',
];
const steps = [
  ['Brief', 'A short call or WhatsApp chat about your business, customers and goals.'],
  ['Quote', 'A written, fixed quote with scope, price and timeline before any work starts.'],
  ['Design', 'You see the design on desktop and mobile and give feedback.'],
  ['Build', 'We build, load your content and test on real devices.'],
  ['Launch', 'We go live, submit the site to Google and stay available for support.'],
];

export function build(p: Page) {
  const K = cap(p.kw);
  const ind = p.ind ? industries[p.ind] : undefined;
  const cheap = /cheap|affordable/.test(p.kw);
  const how = /^(how|where|someone|company to)/.test(p.kw);

  const leads: Record<ClusterId, string> = {
    services: `Looking for ${p.kw}? We design and build fast, mobile-friendly websites for businesses in Nairobi and across Kenya, structured around the searches your customers actually make so the site gets found as well as admired.`,
    agencies: `Comparing options for ${p.kw}? Here is what working with us looks like: one team for design, development and SEO set-up, a fixed written quote, and a site you own outright.`,
    local: `Searching "${p.kw}"? We are a Nairobi web design and development team. Talk to us on WhatsApp or by phone, and we also build for clients across Kenya remotely.`,
    pricing: cheap
      ? `Affordable should not mean a template nobody can find. This is how to keep the cost of ${p.kw} down without cutting the parts that bring in customers.`
      : /how much/.test(p.kw)
        ? `Short answer: it depends on scope. Longer answer: five things move the price of a website, and once you know them you can judge any quote you receive.`
        : `A clear guide to ${p.kw}: what drives the price of a website in Kenya, what is normally included, and how to get a fixed quote before you commit.`,
    industries: ind
      ? `A ${ind.noun} website in Nairobi has one job: ${ind.job}. If you are looking for ${p.kw}, this is how we approach it.`
      : '',
    audiences: how
      ? `If you searched "${p.kw}", you probably want a straight answer: your options, what each costs in time and money, and who can do it well.`
      : `If you searched "${p.kw}", you want someone who understands a small team's budget and deadlines. That is the work we do.`,
  };

  const sections: { h2: string; intro?: string; items: string[] }[] = [
    { h2: `What you get with ${p.kw}`, items: base },
  ];
  if (ind) sections.push({ h2: `What a ${ind.noun} website needs`, items: ind.features });
  if (p.cluster === 'pricing') sections.push({ h2: 'What moves the price of a website in Kenya', items: [
    'Number of pages and how much content needs writing or photographing',
    'Custom design versus a lightly edited template',
    'Online payments, bookings, member areas or other functions',
    'Integrations such as M-Pesa, a CRM or booking engine',
    'Yearly costs: .co.ke or .com domain renewal, hosting and maintenance',
  ] });
  if (p.cluster === 'agencies') sections.push({ h2: 'What to check before you hire a web designer or developer', items: [
    'Live websites they built, which you can open and test on your phone',
    'Who owns the domain, hosting account and source code after launch',
    'Whether SEO set-up is included or sold separately',
    'A written quote that lists scope, price, timeline and revisions',
    'Who you call when something breaks, and how fast they reply',
  ] });
  if (p.cluster === 'local') sections.push({ h2: 'Working with clients across Nairobi and Kenya', items: [
    'Businesses in Westlands, Kilimani, Upper Hill, Karen, Lavington, Ruaka and the CBD',
    'Clients in Mombasa, Kisumu, Nakuru, Eldoret and beyond, by video call and WhatsApp',
    'Google Business Profile guidance so you also appear in local map results',
  ] });
  if (p.cluster === 'audiences') sections.push({ h2: 'Freelancer, agency or DIY builder?', items: [
    'Freelancer: lower cost and direct contact, but one person covers design, build, SEO and support',
    'Agency or studio: a team and a process, and usually a higher price',
    'DIY builder: cheapest to start, but limited design and SEO control, and you do the work',
  ] });

  const faqs = [
    { q: 'How much does a website cost in Nairobi?', a: 'It depends on the number of pages, whether you need online payments or bookings, and how much content must be written. After a short brief we give a fixed written quote so there are no surprises.' },
    { q: 'How long does it take to build a website?', a: `A typical business website takes ${site.timeline} once your content is ready. Online shops and custom systems take longer, and we confirm the timeline in your quote.` },
    { q: 'Will my website show up on Google?', a: 'We build the technical SEO foundations: fast pages, clean structure, titles, schema and a sitemap. No honest agency can guarantee a ranking, but a well-built site targeting the right searches gives you the best chance.' },
    { q: 'Can I update the website myself?', a: 'Yes. We set up an editor for text, images and, where relevant, products or listings, and show you how to use it.' },
    ind ? { q: ind.q, a: ind.a } : { q: 'Do you work with clients outside Nairobi?', a: 'Yes. We work with businesses across Kenya by WhatsApp, phone and video call.' },
  ];

  const titleSuffix = p.home ? ' | Professional Web Designers' : ` | ${site.name}`;
  const desc = `${K}: custom, mobile-friendly, SEO-ready websites for Kenyan businesses. Fixed quotes and M-Pesa-ready. Get your quote.`;
  return {
    title: K + titleSuffix,
    description: desc.slice(0, 158),
    h1: K + (how && /^(how|where)/.test(p.kw) ? '?' : ''),
    lead: leads[p.cluster],
    sections, steps, faqs,
  };
}
