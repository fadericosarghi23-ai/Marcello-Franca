// Elenca gli slot ancora da compilare ([[DA COMPILARE: …]], alt "DA COMPILARE: …", numeri [[N…]]).
//   npm run slots            riepilogo per file + elenco dei testi
//   npm run slots -- --dist  conteggio per pagina generata (dopo npm run build)
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = process.argv.includes('--dist');
const RE = /\[\[DA COMPILARE:[^\]]*\]\]|DA COMPILARE:[^"'`<\n]*|\[\[N\d+\]\]/g;

async function* walk(d) {
  for (const e of await fs.readdir(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

const dir = path.join(ROOT, DIST ? 'dist' : 'src');
const ext = DIST ? /\.(html|txt|xml|webmanifest)$/ : /\.(astro|ts|mjs|css)$/;
let tot = 0, testi = 0, alt = 0, numeri = 0;
const perFile = [];
for await (const f of walk(dir)) {
  if (!ext.test(f)) continue;
  const t = await fs.readFile(f, 'utf8');
  const m = t.match(RE) || [];
  if (!m.length) continue;
  tot += m.length;
  for (const x of m) x.startsWith('[[N') ? numeri++ : x.startsWith('[[') ? testi++ : alt++;
  perFile.push([path.relative(ROOT, f), m]);
}
perFile.sort((a, b) => b[1].length - a[1].length);
for (const [f, m] of perFile) {
  console.log(`${String(m.length).padStart(5)}  ${f}`);
  if (!DIST && process.argv.includes('--dettaglio')) [...new Set(m)].forEach((x) => console.log('         ' + x));
}
console.log(`\nTotale: ${tot} occorrenze (testi ${testi}, alt/descrizioni immagini ${alt}, numeri ${numeri}) in ${perFile.length} file.`);
if (!DIST) console.log('Dettaglio: npm run slots -- --dettaglio   ·   grep -rn "DA COMPILARE" src');
