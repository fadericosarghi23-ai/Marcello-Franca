import type { Img } from '../lib/img';

/** Le 4 card del processo (home + /metodo/). La foto della card 4 è anche la testata di /metodo/. */
export const processo: { titolo: string; testo: string; img: Img }[] = [
  {
    titolo: '[[DA COMPILARE: fase 1, 2-3 parole]]',
    testo: '[[DA COMPILARE: descrizione fase 1, 1 frase di circa 180 caratteri]]',
    img: { base: '/img/sezioni/metodo-1', w: 1537, h: 2049, alt: 'DA COMPILARE: descrizione foto fase 1' },
  },
  {
    titolo: '[[DA COMPILARE: fase 2, 2 parole]]',
    testo: '[[DA COMPILARE: descrizione fase 2, 1 frase di circa 180 caratteri]]',
    img: { base: '/img/sezioni/metodo-2', w: 800, h: 317, alt: 'DA COMPILARE: descrizione foto fase 2' },
  },
  {
    titolo: '[[DA COMPILARE: fase 3, 3 parole]]',
    testo: '[[DA COMPILARE: descrizione fase 3, 1 frase di circa 180 caratteri]]',
    img: { base: '/img/sezioni/metodo-3', w: 800, h: 444, alt: 'DA COMPILARE: descrizione foto fase 3' },
  },
  {
    titolo: '[[DA COMPILARE: fase 4, 3 parole]]',
    testo: '[[DA COMPILARE: descrizione fase 4, 1 frase di circa 180 caratteri]]',
    img: { base: '/img/sezioni/metodo-4', w: 2400, h: 1109, alt: 'DA COMPILARE: descrizione foto fase 4' },
  },
];

/** Le fasi nel dettaglio (/metodo/, JSON-LD HowTo) */
export const fasi: { titolo: string; testo: string }[] = Array.from({ length: 9 }, (_, i) => ({
  titolo: `[[DA COMPILARE: titolo passaggio ${i + 1}, 2-4 parole]]`,
  testo: `[[DA COMPILARE: descrizione passaggio ${i + 1}, 1-2 frasi (circa 160 caratteri)]]`,
}));
