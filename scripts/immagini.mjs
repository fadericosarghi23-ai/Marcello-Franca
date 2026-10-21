// Genera in public/ tutte le immagini usate dal sito, nelle larghezze e nei formati che il
// componente Picture si aspetta (<base>-<w>.avif|webp + <base>-<fallback>.jpg).
//
// Per ogni slot dichiarato nei file dati (src/data/*.ts):
//   - se esiste una foto sorgente in media/<percorso senza /img/>.(jpg|jpeg|png|webp|tif|tiff)
//     la ridimensiona (le misure w/h nei dati devono avere le sue proporzioni);
//   - altrimenti crea un segnaposto grigio delle stesse misure con etichetta e dimensioni.
// Genera anche logo, favicon, icone e immagini Open Graph (1200×630).
//
//   npm run immagini            rigenera solo ciò che è cambiato
//   npm run immagini -- --tutto rigenera tutto
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUB = path.join(ROOT, 'public');
const MEDIA = path.join(ROOT, 'media');
const TUTTO = process.argv.includes('--tutto');
const imp = (f) => import(pathToFileURL(path.join(ROOT, f)).href);

const { larghezze, fallbackWidth } = await imp('src/lib/img.ts');
const { progetti } = await imp('src/data/progetti.ts');
const { team } = await imp('src/data/team.ts');
const { slides, fotoStudio } = await imp('src/data/home.ts');
const { processo } = await imp('src/data/metodo.ts');
const { studioTestata, studioFoto, serviziTestata, ogPagine } = await imp('src/data/sezioni.ts');
const { site } = await imp('src/data/site.ts');

// ---------- slot ----------
const slots = new Map();
const add = (img) => slots.set(img.base, img);
progetti.forEach((p) => { add(p.copertina); p.galleria.forEach((g) => add(g.img)); });
team.forEach((m) => add(m.foto));
slides.forEach((s) => add(s.img));
add(fotoStudio);
processo.forEach((s) => add(s.img));
[studioTestata, ...studioFoto, serviziTestata].forEach(add);

// ---------- utilità ----------
const EXT = ['jpg', 'jpeg', 'png', 'webp', 'tif', 'tiff', 'svg'];
const sorgente = (rel) => EXT.map((e) => path.join(MEDIA, `${rel}.${e}`)).find(existsSync);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function etichetta(base) {
  const nome = base.split('/').pop();
  const m = nome.match(/^progetto-(\d+)-(\d+)$/);
  if (m) return `PROGETTO ${m[1]} · FOTO ${m[2]}`;
  if (base.startsWith('/img/team/')) return `RITRATTO ${nome.replace(/-/g, ' ').toUpperCase()}`;
  return nome.replace(/-/g, ' ').toUpperCase();
}

function svgSegnaposto(w, h, riga1, riga2 = `${w}×${h} · da sostituire`, fondo = '#d9d5d0', testo = '#5f5a55') {
  const f = Math.max(12, Math.round(Math.min(w, h * 1.6) / 22));
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${fondo}"/>
  <path d="M0 0L${w} ${h}M${w} 0L0 ${h}" stroke="${testo}" stroke-opacity=".18" stroke-width="${Math.max(1, f / 10)}"/>
  <rect x="${f / 2}" y="${f / 2}" width="${w - f}" height="${h - f}" fill="none" stroke="${testo}" stroke-opacity=".35" stroke-width="${Math.max(1, f / 8)}" stroke-dasharray="${f / 2} ${f / 3}"/>
  <rect x="${w / 2 - f * 9}" y="${h / 2 - f * 1.5}" width="${f * 18}" height="${f * 3}" fill="${fondo}"/>
  <text x="50%" y="50%" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="${f}" fill="${testo}">${esc(riga1)}</text>
  <text x="50%" y="50%" dy="${f * 1.25}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${f * 0.7}" fill="${testo}">${esc(riga2)}</text>
</svg>`);
}

// cache: rigenera solo se misure o sorgente cambiano
const CACHE = path.join(PUB, 'img', '.immagini.json');
const cache = !TUTTO && existsSync(CACHE) ? JSON.parse(await fs.readFile(CACHE, 'utf8')) : {};
const nuova = {};
async function firma(key, parti, src) {
  const t = src ? (await fs.stat(src)).mtimeMs : 0;
  const f = JSON.stringify([...parti, src ? path.relative(ROOT, src) : null, t]);
  nuova[key] = f;
  return cache[key] === f;
}

const scrivi = async (file, pipeline) => {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await pipeline.toFile(file);
};

let generate = 0, foto = 0, segnaposto = 0;

async function slot(img) {
  const rel = img.base.replace(/^\/img\//, 'img/');
  const src = sorgente(img.base.replace(/^\/img\//, ''));
  const ws = larghezze(img);
  const fb = fallbackWidth(img);
  if (await firma(img.base, [img.w, img.h, ws], src)) return;
  const input = src ? await sharp(src, { limitInputPixels: false }).rotate().toBuffer() : await sharp(svgSegnaposto(img.w, img.h, etichetta(img.base))).png().toBuffer();
  src ? foto++ : segnaposto++;
  // ritaglio alle proporzioni dichiarate (se la foto le rispetta non cambia nulla)
  const base = sharp(input).resize(img.w, img.h, { fit: 'cover', position: 'attention' });
  const master = await base.toBuffer();
  for (const w of ws) {
    const h = Math.round((img.h * w) / img.w);
    const r = () => sharp(master).resize(w, h);
    await scrivi(path.join(PUB, `${rel}-${w}.avif`), r().avif({ quality: src ? 55 : 40, effort: 4 }));
    await scrivi(path.join(PUB, `${rel}-${w}.webp`), r().webp({ quality: src ? 78 : 60 }));
    if (w === fb) await scrivi(path.join(PUB, `${rel}-${w}.jpg`), r().jpeg({ quality: src ? 80 : 70, mozjpeg: true }));
    generate += w === fb ? 3 : 2;
  }
}

async function og(nome, sorgenteFoto, etich) {
  const out = path.join(PUB, 'img', 'og', `${nome}.jpg`);
  const src = sorgente(`og/${nome}`) ?? sorgenteFoto;
  if ((await firma(`og:${nome}`, [1200, 630], src)) && existsSync(out)) return;
  const input = src ? sharp(src, { limitInputPixels: false }).rotate() : sharp(svgSegnaposto(1200, 630, etich, '1200×630 · immagine di condivisione'));
  await scrivi(out, input.resize(1200, 630, { fit: 'cover', position: 'attention' }).jpeg({ quality: 80, mozjpeg: true }));
  generate++;
}

// ---------- esecuzione ----------
const lista = [...slots.values()];
for (let i = 0; i < lista.length; i += 6) await Promise.all(lista.slice(i, i + 6).map(slot));

for (const p of progetti) {
  const s = sorgente(p.copertina.base.replace(/^\/img\//, ''));
  await og(p.slug, s, `OG ${p.slug.toUpperCase().replace(/-/g, ' ')}`);
}
for (const n of ogPagine) await og(n, null, `OG ${n.toUpperCase()}`);

// logo (scuro e chiaro), alla misura dichiarata in site.logo
for (const [k, chiaro] of [['scuro', false], ['chiaro', true]]) {
  const file = path.join(PUB, site.logo[k]);
  const src = sorgente(`logo/${path.basename(site.logo[k], '.png')}`);
  if ((await firma(`logo:${k}`, [site.logo.w, site.logo.h], src)) && existsSync(file)) continue;
  const input = src
    ? sharp(src, { density: 300 }).resize(site.logo.w, site.logo.h, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    : sharp(svgSegnaposto(site.logo.w, site.logo.h, 'LOGO', `${site.logo.w}×${site.logo.h} · PNG trasparente`, chiaro ? '#3a3735' : '#ece8e4', chiaro ? '#f5f2ee' : '#3a3735'));
  await scrivi(file, input.png());
  generate++;
}

// favicon e icone: da media/favicon.(svg|png) se presente, altrimenti segnaposto
const favSrc = sorgente('favicon');
if (!((await firma('favicon', [1], favSrc)) && existsSync(path.join(PUB, 'favicon.ico')))) {
  const accent = site.themeColor;
  const favSvg = favSrc?.endsWith('.svg')
    ? await fs.readFile(favSrc)
    : Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#fff"/><rect x="8" y="8" width="48" height="48" fill="none" stroke="${accent}" stroke-width="6"/><path d="M8 8l48 48M56 8 8 56" stroke="${accent}" stroke-width="3" opacity=".5"/></svg>`);
  if (!favSrc || favSrc.endsWith('.svg')) await fs.writeFile(path.join(PUB, 'favicon.svg'), favSvg);
  const icona = (n) => sharp(favSrc && !favSrc.endsWith('.svg') ? favSrc : favSvg, { density: 600 }).resize(n, n, { fit: 'contain', background: '#ffffff' }).png();
  await scrivi(path.join(PUB, 'apple-touch-icon.png'), icona(180));
  await scrivi(path.join(PUB, 'icon-192.png'), icona(192));
  await scrivi(path.join(PUB, 'icon-512.png'), icona(512));
  // favicon.ico = contenitore ICO con un PNG 32×32
  const png = await icona(32).toBuffer();
  const ico = Buffer.alloc(22);
  ico.writeUInt16LE(0, 0); ico.writeUInt16LE(1, 2); ico.writeUInt16LE(1, 4);
  ico.writeUInt8(32, 6); ico.writeUInt8(32, 7); ico.writeUInt8(0, 8); ico.writeUInt8(0, 9);
  ico.writeUInt16LE(1, 10); ico.writeUInt16LE(32, 12); ico.writeUInt32LE(png.length, 14); ico.writeUInt32LE(22, 18);
  await fs.writeFile(path.join(PUB, 'favicon.ico'), Buffer.concat([ico, png]));
  generate += 5;
}

// rimuove varianti orfane (slot eliminati o rinominati)
let orfani = 0;
const attesi = new Set();
for (const img of lista) for (const w of larghezze(img)) {
  attesi.add(path.join(PUB, `${img.base}-${w}.avif`));
  attesi.add(path.join(PUB, `${img.base}-${w}.webp`));
  if (w === fallbackWidth(img)) attesi.add(path.join(PUB, `${img.base}-${w}.jpg`));
}
async function* walk(d) { if (!existsSync(d)) return; for (const e of await fs.readdir(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) yield* walk(p); else yield p; } }
for (const dir of ['progetti', 'team', 'sezioni']) {
  for await (const f of walk(path.join(PUB, 'img', dir))) if (!attesi.has(path.normalize(f))) { await fs.rm(f); orfani++; }
}

await fs.mkdir(path.dirname(CACHE), { recursive: true });
await fs.writeFile(CACHE, JSON.stringify(nuova, null, 1));
console.log(`slot: ${lista.length} (da foto: ${foto}, segnaposto: ${segnaposto} rigenerati) · file scritti: ${generate} · orfani rimossi: ${orfani}`);
