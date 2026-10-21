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

const foto = (id: string, h: number): Img => ({ base: `/img/team/${id}`, w: 1000, h, alt: `DA COMPILARE: ritratto di nome e cognome, ruolo`, serie: 'team' });

/** Ruolo: le statistiche di /studio/ contano 'Architetto', 'Ingegnere', 'Geometra' */
export const team: Membro[] = [
  { id: "persona-01", nome: "[[DA COMPILARE: nome e cognome persona 01]]", ruolo: "Geometra", titolo: "geom.", foto: foto("persona-01", 1500) },
  { id: "persona-02", nome: "[[DA COMPILARE: nome e cognome persona 02]]", ruolo: "Geometra", titolo: "geom.", foto: foto("persona-02", 1500) },
  { id: "persona-03", nome: "[[DA COMPILARE: nome e cognome persona 03]]", ruolo: "Ingegnere", titolo: "ing.", foto: foto("persona-03", 1324) },
  { id: "persona-04", nome: "[[DA COMPILARE: nome e cognome persona 04]]", ruolo: "Architetto", titolo: "arch.", foto: foto("persona-04", 1500) },
  { id: "persona-05", nome: "[[DA COMPILARE: nome e cognome persona 05]]", ruolo: "Ingegnere", titolo: "ing.", foto: foto("persona-05", 1275) },
  { id: "persona-06", nome: "[[DA COMPILARE: nome e cognome persona 06]]", ruolo: "Architetto", titolo: "arch.", foto: foto("persona-06", 1500) },
  { id: "persona-07", nome: "[[DA COMPILARE: nome e cognome persona 07]]", ruolo: "Ingegnere", titolo: "ing.", foto: foto("persona-07", 1500) },
  { id: "persona-08", nome: "[[DA COMPILARE: nome e cognome persona 08]]", ruolo: "Geometra", titolo: "geom.", foto: foto("persona-08", 1500) },
  { id: "persona-09", nome: "[[DA COMPILARE: nome e cognome persona 09]]", ruolo: "Ingegnere", titolo: "ing.", foto: foto("persona-09", 1500) },
  { id: "persona-10", nome: "[[DA COMPILARE: nome e cognome persona 10]]", ruolo: "Architetto", titolo: "arch.", foto: foto("persona-10", 1500) },
  { id: "persona-11", nome: "[[DA COMPILARE: nome e cognome persona 11]]", ruolo: "Architetto", titolo: "arch.", foto: foto("persona-11", 1500) },
  { id: "persona-12", nome: "[[DA COMPILARE: nome e cognome persona 12]]", ruolo: "Ingegnere", titolo: "ing.", foto: foto("persona-12", 1500) },
  { id: "persona-13", nome: "[[DA COMPILARE: nome e cognome persona 13]]", ruolo: "Ingegnere", titolo: "ing.", foto: foto("persona-13", 1500) },
  { id: "persona-14", nome: "[[DA COMPILARE: nome e cognome persona 14]]", ruolo: "Architetto", titolo: "arch.", foto: foto("persona-14", 1486) },
];

export const membro = (id: string) => team.find((m) => m.id === id);
