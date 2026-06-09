import { readFileSync } from 'node:fs';
const b = readFileSync(process.argv[2], 'latin1');
const counts = [...b.matchAll(/\/Count\s+(\d+)/g)].map((m) => Number(m[1]));
const pages = (b.match(/\/Type\s*\/Page[^s]/g) || []).length;
console.log(Math.max(pages, ...counts, 0));
