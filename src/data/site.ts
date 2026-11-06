// EDIT THIS FILE FIRST. Anything left empty is hidden from the site.
export const site = {
  name: 'Web Design Nairobi',
  url: 'https://webdesignnairobi.co.ke',
  whatsapp: '254700009945',
  phone: '+254700009945',
  email: 'info@webdesignnairobi.co.ke',
  timeline: '2–4 weeks', // typical delivery for a business site, once content is ready
  // Prices are in KES and shown as "From KES X". Set a tier's `from` to null to show "Fixed quote" instead.
  tiers: [
    { name: 'Landing Page', who: 'Campaigns, events, freelancers and new offers', scope: 'One-page website', from: 9999 as number | null, popular: false,
      includes: ['One custom, mobile-first page', 'WhatsApp button and contact form', 'Fast hosting set-up and basic SEO'] },
    { name: 'Starter', who: 'Small businesses, personal and portfolio sites', scope: 'Up to 5 pages', from: 24999 as number | null, popular: false,
      includes: ['Custom mobile-first design', 'Contact form and WhatsApp button', 'Basic on-page SEO and sitemap'] },
    { name: 'Business', who: 'Companies, schools, clinics, law firms, hotels', scope: 'Up to 15 pages', from: 49999 as number | null, popular: true,
      includes: ['Everything in Starter', 'Editable CMS', 'Blog or news section', 'Analytics and Search Console set-up'] },
    { name: 'Ecommerce', who: 'Online shops and booking sites', scope: 'Catalogue and checkout', from: 89999 as number | null, popular: false,
      includes: ['Product catalogue and cart', 'M-Pesa and card payments', 'Order emails and delivery options'] },
  ],
  // Price list for individual services. `unit` is shown under the amount (e.g. "per year").
  services: [
    { name: 'Landing page design', note: 'One focused page built to turn visitors into enquiries', from: 9999 },
    { name: 'Starter website', note: 'Up to 5 pages, custom design', from: 24999 },
    { name: 'Business website', note: 'Up to 15 pages with CMS and blog', from: 49999 },
    { name: 'Ecommerce website', note: 'Catalogue, cart, M-Pesa and card checkout', from: 89999 },
    { name: 'Custom web system', note: 'Marketplaces, portals, multi-vendor shops', from: 120000 },
    { name: 'Website redesign', note: 'New look, speed and SEO clean-up for your current site', from: 19999 },
    { name: 'SEO set-up', note: 'Keyword plan, on-page SEO, schema and Search Console', from: 14999 },
    { name: 'Booking system', note: 'Appointments, reservations or hotel enquiries', from: 29999 },
    { name: 'M-Pesa and card payments', note: 'Add checkout or donations to an existing site', from: 19999 },
    { name: 'Website care plan', note: 'Updates, backups, security checks and small edits', from: 14999, unit: 'per year' },
    { name: 'Hosting and domain', note: '.co.ke or .com, SSL and managed hosting', from: 9999, unit: 'per year' },
  ] as { name: string; note: string; from: number; unit?: string }[],
};

export const kes = (n: number) => `KES ${n.toLocaleString('en-KE')}`;

export const quoteLink = (kw: string) =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi, I found you searching for "${kw}". I'd like a quote.`)}`
    : '/contact/';
