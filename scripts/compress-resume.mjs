import { readFileSync, writeFileSync } from 'node:fs';
let h = readFileSync('scripts/resume-graphical.html', 'utf8');

const reps = [
  ['.body{padding:6mm 8mm 7mm 8mm;}', '.body{padding:3.5mm 8mm 3mm 8mm;}'],
  ['padding:8mm 8mm 6.5mm 8mm;', 'padding:5mm 8mm 4mm 8mm;'],
  ['font-size:28px;font-weight:700;letter-spacing:.08em;margin:0;line-height:1.05;', 'font-size:23px;font-weight:700;letter-spacing:.08em;margin:0;line-height:1.05;'],
  ['margin:2.2mm 0 3.4mm 0;font-weight:600;', 'margin:1.4mm 0 2.2mm 0;font-weight:600;'],
  ['.roles{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:3mm;}', '.roles{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:1.8mm;}'],
  ['gap:2.6mm;\n    margin:0 0 2.8mm 0;', 'gap:2.6mm;\n    margin:0 0 1.6mm 0;'],
  ['.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:3mm;margin-bottom:5.5mm;}', '.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:3mm;margin-bottom:3mm;}'],
  ['padding:3.6mm 3.2mm 3.2mm 3.2mm;', 'padding:2.4mm 3mm 2.2mm 3mm;'],
  ['.kpi-lbl{font-size:8.6px;color:var(--sub);margin-top:2mm;font-weight:700;letter-spacing:.02em;}', '.kpi-lbl{font-size:8.6px;color:var(--sub);margin-top:1.2mm;font-weight:700;letter-spacing:.02em;}'],
  ['.comp-wrap{display:grid;grid-template-columns:1fr 1fr;gap:7mm;margin-bottom:2.6mm;}', '.comp-wrap{display:grid;grid-template-columns:1fr 1fr;gap:7mm;margin-bottom:1.4mm;}'],
  ['.comp-row{display:flex;align-items:center;gap:2.6mm;margin-bottom:1.9mm;}', '.comp-row{display:flex;align-items:center;gap:2.6mm;margin-bottom:1mm;}'],
  ['.comp-bar{flex:1;height:4.4mm;', '.comp-bar{flex:1;height:3.4mm;'],
  ['color:var(--navy);margin:0 0 2.4mm 0;letter-spacing:.04em;', 'color:var(--navy);margin:0 0 1.4mm 0;letter-spacing:.04em;'],
  ['.badge-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3.5mm;margin-bottom:5.5mm;}', '.badge-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3.5mm;margin-bottom:3mm;}'],
  ['padding:3mm 3mm 2.4mm 3mm;', 'padding:2.2mm 3mm 1.8mm 3mm;'],
  ['.badge-body{padding:2.6mm 3mm 3mm 3mm;', '.badge-body{padding:2mm 3mm 2.2mm 3mm;'],
  ['line-height:1.5;margin-top:auto;\n    padding-top:2mm;', 'line-height:1.5;margin-top:auto;\n    padding-top:1.6mm;'],
  ['.tl-wrap{margin-bottom:5mm;}', '.tl-wrap{margin-bottom:2.5mm;}'],
  ['.p2-body{padding:9mm 9mm 9mm 9mm;}', '.p2-body{padding:7mm 8mm 6mm 8mm;}'],
  ['padding-bottom:3mm;margin-bottom:6mm;', 'padding-bottom:2.4mm;margin-bottom:4mm;'],
  ['.blk{margin-bottom:6mm;}', '.blk{margin-bottom:4mm;}'],
  ['.blk-h{display:flex;align-items:center;gap:2.6mm;margin-bottom:3mm;}', '.blk-h{display:flex;align-items:center;gap:2.6mm;margin-bottom:2mm;}'],
];

const miss = [];
for (const [a, b] of reps) {
  if (h.includes(a)) h = h.split(a).join(b);
  else miss.push(a.slice(0, 34));
}

const before = h.length;
h = h.replace(/<!-- 代表案件詳細 -->[\s\S]*?(?=<!-- 専門知識 -->)/, '');
const removed = before - h.length;

writeFileSync('scripts/resume-graphical.html', h, 'utf8');
console.log('misses:', miss.length ? miss : 'none', '| removed dup chars:', removed);
