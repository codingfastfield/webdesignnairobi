// EDIT THIS FILE FIRST. Anything left empty is hidden from the site.
export const site = {
  name: 'Web Design Nairobi',
  url: 'https://webdesignnairobi.co.ke',
  whatsapp: '254700009945',
  phone: '+254700009945',
  email: 'info@gilvon.com',
  timeline: '2–4 weeks', // typical delivery for a business site, once content is ready
  // Set `from` (KES) to show "From KES X". Left null, the site shows "Fixed quote" instead.
  tiers: [
    { name: 'Starter', who: 'Small businesses, personal and portfolio sites', scope: 'Up to 5 pages', from: null as number | null,
      includes: ['Custom mobile-first design', 'Contact form and WhatsApp button', 'Basic on-page SEO and sitemap'] },
    { name: 'Business', who: 'Companies, schools, clinics, law firms, hotels', scope: 'Up to 15 pages', from: null as number | null,
      includes: ['Everything in Starter', 'Editable CMS', 'Blog or news section', 'Analytics and Search Console set-up'] },
    { name: 'Ecommerce', who: 'Online shops and booking sites', scope: 'Catalogue and checkout', from: null as number | null,
      includes: ['Product catalogue and cart', 'M-Pesa and card payments', 'Order emails and delivery options'] },
  ],
};

export const quoteLink = (kw: string) =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi, I found you searching for "${kw}". I'd like a quote.`)}`
    : '/contact/';
