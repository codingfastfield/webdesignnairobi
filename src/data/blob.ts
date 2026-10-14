// Generates smooth closed blob paths (same command structure, so SVG <animate> can morph between them).
export function blobPath(cx: number, cy: number, radii: number[]): string {
  const n = radii.length;
  const pts = radii.map((r, i) => {
    const t = (i / n) * Math.PI * 2 - Math.PI / 2;
    return [cx + Math.cos(t) * r, cy + Math.sin(t) * r];
  });
  const f = (v: number) => v.toFixed(1);
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return d + 'Z';
}

// Everything <animate> needs to loop through several shapes and land back on the first.
export function blobMorph(cx: number, cy: number, sets: number[][]) {
  const all = [...sets, sets[0]];
  const n = all.length - 1;
  return {
    d: blobPath(cx, cy, sets[0]),
    values: all.map((r) => blobPath(cx, cy, r)).join(';'),
    keyTimes: all.map((_, i) => (i / n).toFixed(3)).join(';'),
    keySplines: Array.from({ length: n }, () => '.45 0 .55 1').join(';'),
  };
}
