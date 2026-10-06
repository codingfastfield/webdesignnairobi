import type { ClusterId } from './pages';
// One brand palette sitewide (the homepage colours). Change a/b here to re-colour every page.
const brand = { a: '#5B3DF5', b: '#FF4D8D' };
export const themes: Record<ClusterId, { a: string; b: string }> = {
  services: brand, agencies: brand, local: brand, pricing: brand, industries: brand, audiences: brand,
};
