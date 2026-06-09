import sharp from 'sharp';

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#102a4c"/>
  <rect x="0" y="0" width="1200" height="10" fill="#a87d3f"/>
  <text x="84" y="246" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#a87d3f" letter-spacing="7">PMO  PORTFOLIO</text>
  <text x="80" y="350" font-family="Arial, Helvetica, sans-serif" font-size="84" font-weight="700" fill="#ffffff">Chonan Takanori</text>
  <text x="84" y="418" font-family="Arial, Helvetica, sans-serif" font-size="33" fill="#aec4de">Senior PMO / Strategy / Crisis Management</text>
  <text x="84" y="544" font-family="Arial, Helvetica, sans-serif" font-size="25" fill="#7e9cc4">10+ years in PMO   ·   NTT DOCOMO   ·   IPA / Digital Agency Committee</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');
console.log('OG image generated: public/og-default.png');
