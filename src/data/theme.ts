import type { ClusterId } from './pages';
// One brand palette sitewide, taken from the WebDesignNairobi logo.
// a = gold accent, b = soft gold highlight.
// Other colours (--c, --d, text, backgrounds) live in src/styles/global.css.
const brand = { a: '#C9A227', b: '#DDBB55' };
export const themes: Record<ClusterId, { a: string; b: string }> = {
  services: brand, agencies: brand, local: brand, pricing: brand, industries: brand, audiences: brand,
};
