// Meccanismo immagini: ogni foto vive in public/img/... in più larghezze e formati
// (<base>-<larghezza>.avif|webp + un .jpg di fallback). I file si generano con `npm run immagini`.
// Un'immagine è descritta da base (percorso senza suffisso), misure dell'originale e alt.

export type Img = {
  /** Percorso senza suffisso, es. /img/progetti/casa/casa-01 */
  base: string;
  /** Larghezza dell'immagine più grande disponibile (px) */
  w: number;
  /** Altezza corrispondente (px) */
  h: number;
  alt: string;
  /** Serie di larghezze: 'std' (foto) o 'team' (ritratti) */
  serie?: 'std' | 'team';
};

export const SERIE = {
  std: { larghezze: [480, 800, 1200, 1600, 2400], fallback: 1200 },
  team: { larghezze: [400, 700, 1000], fallback: 1000 },
} as const;

/** Larghezze generate per un'immagine: quelle della serie più piccole dell'originale, più l'originale. */
export function larghezze(img: Img): number[] {
  const s = SERIE[img.serie ?? 'std'];
  const out: number[] = s.larghezze.filter((x) => x < img.w);
  out.push(Math.min(img.w, s.larghezze[s.larghezze.length - 1]));
  return out;
}

export const fallbackWidth = (img: Img) => Math.min(img.w, SERIE[img.serie ?? 'std'].fallback);
export const srcset = (img: Img, ext: string) => larghezze(img).map((w) => `${img.base}-${w}.${ext} ${w}w`).join(', ');
export const fallbackSrc = (img: Img) => `${img.base}-${fallbackWidth(img)}.jpg`;
/** Versione più grande in webp (usata dal lightbox). */
export const fullSrc = (img: Img) => `${img.base}-${larghezze(img).at(-1)}.webp`;
/** Larghezza intermedia in webp (miniature, es. referente del progetto). */
export const sizedSrc = (img: Img, w: number, ext = 'webp') => `${img.base}-${w}.${ext}`;
