import type { ClusterId } from './pages';
// One brand palette sitewide. a = electric jacaranda, b = hot sunset pink.
// Gold and teal accents (--c, --d) live in src/styles/global.css.
const brand = { a: '#7B4DFF', b: '#FF3D81' };
export const themes: Record<ClusterId, { a: string; b: string }> = {
  services: brand, agencies: brand, local: brand, pricing: brand, industries: brand, audiences: brand,
};
