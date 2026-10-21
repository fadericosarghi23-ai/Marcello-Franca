# Base — Studio tecnico multidisciplinare (architettura / ingegneria / cantiere)

Base riutilizzabile ricostruita in Astro dal sito pubblicato di uno studio multidisciplinare
(sorgente non disponibile: ricostruito dai file pubblicati e verificato pagina per pagina:
65/65 pagine con stessa struttura, classi e attributi). Layout, design system e animazioni
sono quelli originali; ogni contenuto reale è un segnaposto. La versione svuotata è nel tag
git `base-pulita`.

```bash
npm install
npm run dev          # http://localhost:4830
npm run build        # dist/ statico
npm run slots        # slot ancora da compilare (--dettaglio per l'elenco, --dist per pagina)
npm run immagini     # genera foto/segnaposto in tutte le misure + og, logo, favicon
```

## Segnaposto

- **Testi**: `[[DA COMPILARE: cosa va scritto, lunghezza indicativa]]` → `grep -rn "DA COMPILARE" src`.
- **Numeri grandi** delle statistiche in home: `[[N3]]`, `[[N4]]` (un marker lungo romperebbe la griglia).
- **Immagini**: segnaposto grigi con etichetta e misura (es. `PROGETTO 07 · FOTO 03 · 2400×3200`),
  generati da `npm run immagini` con le misure reali delle foto originali, così crop, galleria a
  colonne (`tall` / `wide` / `drawing`) e animazioni restano identici. Alt: `DA COMPILARE: …`.
- **Etichette d'interfaccia** generiche (menu, bottoni, label del form, "Il progetto",
  "Progetti simili") restano: il menu è su una riga sola.

## Dove sta cosa

| File | Contenuto |
| --- | --- |
| `src/data/site.ts` | identità, contatti, indirizzo, coordinate, dominio, social, logo, form |
| `src/data/progetti.ts` | categorie, progetti (scheda, testo, galleria), ordine del portfolio |
| `src/data/team.ts` | persone (ruolo: Architetto / Ingegnere / Geometra per le statistiche) |
| `src/data/servizi.ts` | servizi (testo, voci, foto e progetti correlati) |
| `src/data/home.ts` | slide, numeri, progetti in evidenza, aree, FAQ |
| `src/data/metodo.ts` | 4 card del processo + fasi dettagliate |
| `src/data/sezioni.ts` | foto di testata e di corredo, immagini Open Graph delle pagine |
| `src/pages/*.astro` | titoli e testi propri di ogni pagina, meta title/description |
| `src/styles/global.css` | design system: palette e font nei token di `:root` |

Animazioni (in `src/layouts/Layout.astro`, `src/pages/index.astro`, `src/components/Lightbox.astro`):
header trasparente → solido dopo 40px, comparsa `.reveal` con IntersectionObserver, slideshow
dell'hero (6 s, puntini), lightbox con tastiera e swipe, menu mobile. CSS: transizioni originali.

## Ordine di riempimento

1. `site.ts`: nome, contatti, indirizzo, **coordinate**, **dominio**, social, P.IVA/PEC.
2. Palette: token `--accent*` in `global.css` + `themeColor` in `site.ts`.
3. Progetti e categorie (`progetti.ts`): slug, testi, galleria con le **misure reali** delle foto.
4. Team, servizi, metodo, home (slide, numeri, aree, FAQ), testi delle pagine.
5. Foto: mettile in `media/` con lo stesso percorso dello slot, senza `/img/` e senza suffisso
   (es. slot `/img/progetti/casa/casa-01` → `media/progetti/casa/casa-01.jpg`), poi `npm run immagini`.
   Logo: `media/logo/logo.png` e `media/logo/logo-chiaro.png` (o `.svg`); favicon: `media/favicon.svg`;
   og: `media/og/<nome>.jpg` (altrimenti per i progetti usa la copertina).
6. Modulo contatti: `site.form.attivo = true` (Netlify Forms) solo quando il sito è collegato.
7. Controllo: `npm run slots` deve dare 0, `npm run build` senza errori.
