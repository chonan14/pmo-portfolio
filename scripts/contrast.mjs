const pairs = [
  ['本文 ink / 白', '1b2430', 'ffffff'],
  ['補助 ink-soft / 白', '586374', 'ffffff'],
  ['補助 ink-soft / soft地', '586374', 'f6f8fb'],
  ['金 accent / 白', '876326', 'ffffff'],
  ['金 accent / 紺地', '876326', '102a4c'],
  ['紺 primary 見出し / 白', '102a4c', 'ffffff'],
  ['青 primary-400 / 白', '4f73a4', 'ffffff'],
  ['白 / 紺ボタン', 'ffffff', '102a4c'],
];
const lum = (hex) => {
  const v = [0, 2, 4]
    .map((i) => parseInt(hex.substr(i, 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
};
const ratio = (a, b) => {
  const la = lum(a),
    lb = lum(b);
  const hi = Math.max(la, lb),
    lo = Math.min(la, lb);
  return (hi + 0.05) / (lo + 0.05);
};
for (const [n, a, b] of pairs) {
  const r = ratio(a, b);
  const j = r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : r >= 3 ? 'AA(大文字のみ)' : 'FAIL';
  console.log(n.padEnd(24, '　'), r.toFixed(2).padStart(6), ' ', j);
}
