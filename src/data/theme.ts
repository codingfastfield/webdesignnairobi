import type { ClusterId } from './pages';
// One brand palette sitewide, taken from the WebDesignNairobi logo.
// a = electric brand blue, b = bright sky cyan.
// Gold and mint accents (--c, --d) live in src/styles/global.css.
const brand = { a: '#0A6CFF', b: '#22B8FF' };
export const themes: Record<ClusterId, { a: string; b: string }> = {
  services: brand, agencies: brand, local: brand, pricing: brand, industries: brand, audiences: brand,
};
