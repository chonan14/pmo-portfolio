import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="40" fill="#102a4c"/>
  <text x="50%" y="54%" dy="0.08em" text-anchor="middle" font-family="Arial, sans-serif" font-size="76" font-weight="700" fill="#cba75a" letter-spacing="2">CT</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/apple-touch-icon.png');
console.log('apple-touch-icon.png generated');
