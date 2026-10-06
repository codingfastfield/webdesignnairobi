import type { ClusterId } from './pages';
// Each cluster gets its own vibrant pair: a = main (white text passes on it), b = bright accent.
export const themes: Record<ClusterId, { a: string; b: string }> = {
  services: { a: '#5B3DF5', b: '#FF4D8D' },
  agencies: { a: '#2563EB', b: '#00C2FF' },
  local: { a: '#D93A15', b: '#FFB020' },
  pricing: { a: '#00875A', b: '#A3E635' },
  industries: { a: '#7C22D4', b: '#FF7A18' },
  audiences: { a: '#00877A', b: '#3B82F6' },
};
