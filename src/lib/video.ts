import type { Img } from './img';

/** Video: YouTube (si carica al clic) o file del sito (in public/file/) */
export type VideoDati =
  | { tipo: 'youtube'; id: string; titolo: string; titoloEn?: string; poster: Img }
  | { tipo: 'file'; src: string; titolo: string; titoloEn?: string; poster: Img };
