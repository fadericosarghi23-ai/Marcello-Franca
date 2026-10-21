import type { Img } from '../lib/img';

// Foto di sezione non legate a un progetto (testate di pagina, foto di corredo).
const sezione = (nome: string, w: number, h: number, alt: string): Img => ({ base: `/img/sezioni/${nome}`, w, h, alt });

export const studioTestata = sezione('studio-testata', 2400, 1800, 'DA COMPILARE: descrizione foto di testata dello studio');
export const studioFoto = [
  sezione('studio-foto-1', 2400, 3682, 'DA COMPILARE: descrizione foto 1 della sezione approccio'),
  sezione('studio-foto-2', 2400, 1800, 'DA COMPILARE: descrizione foto 2 della sezione approccio'),
];
export const serviziTestata = sezione('servizi-testata', 2400, 3200, 'DA COMPILARE: descrizione foto di testata dei servizi');

/** Immagini Open Graph (1200×630) delle pagine principali, oltre a quelle dei progetti (/img/og/<slug>.jpg) */
export const ogPagine = ['sito', 'studio', 'servizi', 'metodo'];

/** Numeri di /studio/. auto: 'team' (persone), 'progetti', oppure un ruolo del team ('Architetto'…) da contare. */
export const numeriStudio: { n?: string; label: string; auto?: string }[] = [
  { auto: 'team', label: 'Professionisti' },
  { auto: 'Architetto', label: 'Architetti' },
  { auto: 'Ingegnere', label: 'Ingegneri' },
  { auto: 'Geometra', label: 'Geometri' },
];
