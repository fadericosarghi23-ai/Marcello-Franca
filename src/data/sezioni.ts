import type { Img } from '../lib/img';

// Foto di sezione non legate a un progetto (testate di pagina, foto di corredo).
const sezione = (nome: string, w: number, h: number, alt: string): Img => ({ base: `/img/sezioni/${nome}`, w, h, alt });

export const studioTestata = sezione('studio-testata', 2400, 580, 'Lo Studio di Design e Architettura d’interni Telemaco di Pesaro');
export const studioFoto = [
  sezione('studio-foto-1', 1056, 1519, 'Allestimento di una vetrina con ceramiche ai Musei Civici di Pesaro'),
  sezione('studio-foto-2', 1216, 1695, 'Copertina della pubblicazione “Colori della Romagna”'),
];
export const serviziTestata = sezione('servizi-testata', 1942, 1348, 'Palazzo Ajmonino a Pesaro dopo il restyling cromatico');

/** Immagini Open Graph (1200×630) delle pagine principali, oltre a quelle dei progetti (/img/og/<slug>.jpg) */
export const ogPagine = ['sito', 'studio', 'servizi', 'metodo'];

/** Numeri di /studio/. auto: 'team' (persone), 'progetti', oppure un ruolo del team ('Architetto'…) da contare. */
export const numeriStudio: { n?: string; label: string; auto?: string }[] = [
  { n: '1985', label: 'Architetto dal' },
  { auto: 'progetti', label: 'Progetti in portfolio' },
  { n: '6', label: 'Ambiti di progetto' },
  { n: '40+', label: 'Committenti pubblici e privati' },
];
