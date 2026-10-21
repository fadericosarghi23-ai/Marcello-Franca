import type { Img } from '../lib/img';

// Foto di sezione non legate a un progetto (testate di pagina, foto di corredo).
const sezione = (nome: string, w: number, h: number, alt: string, altEn?: string): Img => ({ base: `/img/sezioni/${nome}`, w, h, alt, altEn });

export const studioTestata = sezione('studio-testata', 2400, 580, 'Lo Studio di Design e Architettura d’interni Telemaco di Pesaro', "The Telemaco design and interior architecture studio in Pesaro");
export const studioFoto = [
  sezione('studio-foto-1', 1056, 1519, 'Allestimento di una vetrina con ceramiche ai Musei Civici di Pesaro', "Display case with ceramics at the Pesaro Civic Museums"),
  sezione('studio-foto-2', 1559, 1023, 'Studio cromatico di una facciata per il Piano del Colore di Pesaro', "Colour study of a façade for the Pesaro Colour Plan"),
];
export const serviziTestata = sezione('servizi-testata', 1942, 1348, 'Palazzo Ajmonino a Pesaro dopo il restyling cromatico', "Palazzo Ajmonino in Pesaro after its colour restyling");

/** Immagini Open Graph (1200×630) delle pagine principali, oltre a quelle dei progetti (/img/og/<slug>.jpg) */
export const ogPagine = ['sito', 'studio', 'servizi', 'metodo'];

/** Numeri di /studio/. auto: 'team' (persone), 'progetti', oppure un ruolo del team ('Architetto'…) da contare. */
export const numeriStudio: { n?: string; label: string; labelEn?: string; auto?: string }[] = [
  { n: '1985', label: 'Architetto dal' },
  { auto: 'progetti', label: 'Progetti in portfolio' },
  { n: '6', label: 'Ambiti di progetto' },
  { n: '40+', label: 'Committenti pubblici e privati' },
];

// Versione inglese (/en/), nello stesso ordine
const numeriEn = ["Architect since","Projects in the portfolio","Fields of work","Public and private clients"];
numeriStudio.forEach((n, i) => (n.labelEn = numeriEn[i]));
