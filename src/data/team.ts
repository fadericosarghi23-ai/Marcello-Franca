import type { Img } from '../lib/img';

export type Membro = {
  /** Usato come ancora (/studio/#id) e come "referente" nei progetti */
  id: string;
  nome: string;
  ruolo: string;
  /** Prefisso nei testi (arch., ing., geom.) */
  titolo: string;
  foto: Img;
};

/** Ruolo: le statistiche di /studio/ contano 'Architetto', 'Ingegnere', 'Geometra' */
export const team: Membro[] = [
  {
    id: 'marcello-franca',
    nome: 'Marcello Franca',
    ruolo: 'Architetto',
    titolo: 'arch.',
    foto: { base: '/img/team/marcello-franca', w: 200, h: 200, alt: 'Marcello Franca, architetto a Pesaro', serie: 'team' },
  },
];

export const membro = (id: string) => team.find((m) => m.id === id);
