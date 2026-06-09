import { readFileSync, writeFileSync } from 'node:fs';
const h = readFileSync('scripts/resume-graphical.html', 'utf8');
const parts = h.split('<div class="page">');
// parts[0] = head + <body>, parts[1] = page1 inner + </div>, parts[2] = page2 inner + </div></body></html>
const head = parts[0];
const p1 = head + '<div class="page">' + parts[1] + '</body></html>';
const p2 = head + '<div class="page">' + parts[2];
writeFileSync('scripts/_p1.html', p1, 'utf8');
writeFileSync('scripts/_p2.html', p2, 'utf8');
console.log('wrote _p1.html', p1.length, '_p2.html', p2.length);
