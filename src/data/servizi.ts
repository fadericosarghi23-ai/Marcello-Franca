import type { CategoriaId } from './progetti';

export type Servizio = {
  /** Ancora in /servizi/#id */
  id: string;
  nome: string;
  /** Una frase: card in home, JSON-LD */
  breve: string;
  /** Chiave dell'icona in src/data/icone.ts */
  icona: string;
  /** Paragrafi della scheda in /servizi/ */
  testo: string[];
  voci: string[];
  /** Progetto la cui copertina illustra il servizio */
  foto: string;
  /** Slug dei progetti correlati */
  correlati: string[];
  /** Categoria del portfolio collegata */
  categoria: CategoriaId;
};

const servizio = (n: number, icona: string, voci: number, foto: string, correlati: string[], categoria: CategoriaId): Servizio => ({
  id: `servizio-${n}`,
  nome: `[[DA COMPILARE: nome servizio ${n}, 2-5 parole]]`,
  breve: `[[DA COMPILARE: servizio ${n} in una frase (circa 115 caratteri)]]`,
  icona,
  testo: [
    `[[DA COMPILARE: servizio ${n}, primo paragrafo, 2 frasi (circa 260 caratteri)]]`,
    `[[DA COMPILARE: servizio ${n}, secondo paragrafo, 1-2 frasi (circa 200 caratteri)]]`,
  ],
  voci: Array.from({ length: voci }, (_, i) => `[[DA COMPILARE: attività ${i + 1} del servizio ${n}, 3-6 parole]]`),
  foto,
  correlati,
  categoria,
});

export const servizi: Servizio[] = [
  servizio(1, 'architettura', 6, 'progetto-01', ['progetto-01', 'progetto-06', 'progetto-10'], 'categoria-1'),
  servizio(2, 'interni', 5, 'progetto-04', ['progetto-04', 'progetto-02', 'progetto-08'], 'categoria-1'),
  servizio(3, 'strutture', 6, 'progetto-07', ['progetto-07', 'progetto-16', 'progetto-19'], 'categoria-2'),
  servizio(4, 'infrastrutture', 5, 'progetto-03', ['progetto-03', 'progetto-44', 'progetto-46'], 'categoria-2'),
  servizio(5, 'sicurezza', 5, 'progetto-14', ['progetto-14', 'progetto-25', 'progetto-30'], 'categoria-3'),
  servizio(6, 'pratiche', 5, 'progetto-32', ['progetto-32', 'progetto-17', 'progetto-36'], 'categoria-1'),
];
