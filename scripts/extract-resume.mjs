import { readFileSync, writeFileSync } from 'node:fs';

const p = process.argv[2];
const raw = readFileSync(p, 'utf8');
let result;
try {
  result = JSON.parse(raw).result;
} catch {
  result = raw;
}
let html = typeof result === 'string' ? result : JSON.stringify(result);

const lc = html.toLowerCase();
let s = lc.indexOf('<!doctype html>');
if (s < 0) s = lc.indexOf('<html');
const e = lc.lastIndexOf('</html>');
html = html.slice(s, e + 7);

writeFileSync('scripts/resume-graphical.html', html, 'utf8');
console.log('extracted chars:', html.length);
const qi = html.indexOf('qr-inner');
console.log('qr-region:', qi >= 0 ? html.slice(Math.max(0, qi - 60), qi + 140).replace(/\n/g, ' ') : 'NOT FOUND');
