import { readFileSync, writeFileSync } from 'node:fs';
import QRCode from 'qrcode';

const url = 'https://pmo-portfolio.pages.dev';
let svg = await QRCode.toString(url, { type: 'svg', margin: 0, errorCorrectionLevel: 'M' });
svg = svg.replace(/\swidth="[^"]*"/, '').replace(/\sheight="[^"]*"/, '');
svg = svg.replace('<svg', '<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="display:block"');

let html = readFileSync('scripts/resume-graphical.html', 'utf8');
const before = html;
html = html.replace(/<div class="qr-inner">[\s\S]*?<\/div>/, `<div class="qr-inner">${svg}</div>`);
writeFileSync('scripts/resume-graphical.html', html, 'utf8');
console.log('qr svg len:', svg.length, '/ replaced:', html !== before);
