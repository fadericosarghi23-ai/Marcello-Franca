import type { Img } from '../lib/img';

const sezione = (nome: string, w: number, h: number, alt: string): Img => ({ base: `/img/sezioni/${nome}`, w, h, alt });

/** Slide dell'hero in home: progetto collegato (titolo e luogo in didascalia) + foto a tutta pagina. */
export const slides: { progetto: string; img: Img }[] = [
  { progetto: 'progetto-01', img: sezione('home-slide-1', 2400, 1577, 'DA COMPILARE: descrizione foto slide 1') },
  { progetto: 'progetto-03', img: sezione('home-slide-2', 2400, 1800, 'DA COMPILARE: descrizione foto slide 2') },
  { progetto: 'progetto-04', img: sezione('home-slide-3', 2400, 2107, 'DA COMPILARE: descrizione foto slide 3') },
  { progetto: 'progetto-11', img: sezione('home-slide-4', 2400, 1802, 'DA COMPILARE: descrizione foto slide 4') },
  { progetto: 'progetto-01', img: sezione('home-slide-5', 2400, 1189, 'DA COMPILARE: descrizione foto slide 5') },
];

/** Foto verticale accanto alla presentazione in home */
export const fotoStudio: Img = sezione('home-studio', 2400, 3200, 'DA COMPILARE: descrizione foto accanto alla presentazione');

/** Numeri della home. auto = calcolato (persone del team / progetti in portfolio). */
export const numeriHome: { n: string | null; label: string; auto?: 'team' | 'progetti' }[] = [
  { n: null, auto: 'team', label: 'Professionisti' },
  { n: null, auto: 'progetti', label: 'Progetti in portfolio' },
  { n: '[[N3]]', label: '[[DA COMPILARE: cosa conta il numero 3]]' },
  { n: '[[N4]]', label: '[[DA COMPILARE: cosa conta il numero 4]]' },
];

/** Progetti in evidenza in home (slug) */
export const inEvidenza = ['progetto-01', 'progetto-02', 'progetto-03', 'progetto-04', 'progetto-07', 'progetto-06'];

/** Aree di lavoro (sezione scura in home) */
export const aree: { conteggio: string; nome: string; luoghi: string }[] = [
  { conteggio: '[[DA COMPILARE: n progetti]]', nome: '[[DA COMPILARE: area 1, es. Provincia di ...]]', luoghi: '[[DA COMPILARE: comuni dell’area 1, elenco di 8-10 nomi separati da virgola]]' },
  { conteggio: '[[DA COMPILARE: n progetti]]', nome: '[[DA COMPILARE: area 2]]', luoghi: '[[DA COMPILARE: comuni dell’area 2, 3-4 nomi]]' },
  { conteggio: '[[DA COMPILARE: n progetti]]', nome: '[[DA COMPILARE: area 3]]', luoghi: '[[DA COMPILARE: comuni dell’area 3, 2 nomi]]' },
  { conteggio: '[[DA COMPILARE: n progetti]]', nome: '[[DA COMPILARE: area 4]]', luoghi: '[[DA COMPILARE: comune]]' },
  { conteggio: '[[DA COMPILARE: n progetti]]', nome: '[[DA COMPILARE: area 5]]', luoghi: '[[DA COMPILARE: comune]]' },
  { conteggio: '[[DA COMPILARE: n progetti]]', nome: '[[DA COMPILARE: area 6]]', luoghi: '[[DA COMPILARE: comune]]' },
];

/** Domande frequenti (home + JSON-LD FAQPage). Metà nella colonna sinistra, la prima aperta. */
export const faq: { d: string; r: string }[] = [
  { d: '[[DA COMPILARE: domanda 1 — di cosa si occupa lo studio?]]', r: '[[DA COMPILARE: risposta 1, 2 frasi lunghe (circa 380 caratteri)]]' },
  { d: '[[DA COMPILARE: domanda 2 — dove si trova lo studio?]]', r: '[[DA COMPILARE: risposta 2 con indirizzo, telefono ed email, 2 frasi]]' },
  { d: '[[DA COMPILARE: domanda 3 — in quali zone lavorate?]]', r: '[[DA COMPILARE: risposta 3, 1 frase lunga]]' },
  { d: '[[DA COMPILARE: domanda 4 — chi fa parte del team?]]', r: '[[DA COMPILARE: risposta 4, 1 frase con i nomi principali]]' },
  { d: '[[DA COMPILARE: domanda 5 — privati o enti pubblici?]]', r: '[[DA COMPILARE: risposta 5, 2 frasi]]' },
  { d: '[[DA COMPILARE: domanda 6, su un servizio specialistico]]', r: '[[DA COMPILARE: risposta 6, 2 frasi]]' },
  { d: '[[DA COMPILARE: domanda 7 — seguite tutto dal progetto al cantiere?]]', r: '[[DA COMPILARE: risposta 7, 2 frasi]]' },
  { d: '[[DA COMPILARE: domanda 8, su un altro servizio]]', r: '[[DA COMPILARE: risposta 8, 1 frase lunga]]' },
  { d: '[[DA COMPILARE: domanda 9 — come richiedere un preventivo?]]', r: '[[DA COMPILARE: risposta 9, 1 frase lunga]]' },
];
