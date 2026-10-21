import type { Img } from '../lib/img';
import { progetti } from './progetti.ts';

/** Foto n (da 1) della galleria di un progetto; disegno = da mostrare intera su fondo chiaro */
const foto = (slug: string, n: number) => {
  const g = progetti.find((p) => p.slug === slug)!.galleria[n - 1];
  return { img: g.img, disegno: g.classe.includes('drawing') };
};

/** Le 4 card del processo (home + /metodo/). La foto della card 4 è anche la testata di /metodo/. */
export const processo: { titolo: string; testo: string; img: Img; en?: { titolo: string; testo: string } }[] = [
  {
    titolo: 'Osservare i luoghi',
    testo:
      'Ogni progetto parte dall’osservazione: ripresa fotografica, analisi metrica e ottico-percettiva, ricerca sulla storia e sulla cultura del luogo e ascolto di chi lo vivrà.',
    img: { base: '/img/sezioni/metodo-1', w: 2400, h: 1378, alt: 'Il percorso lungo i chioschi della piazza di Gradara', altEn: "The path along the kiosks of the square in Gradara" },
  },
  {
    titolo: 'Idee e simulazioni',
    testo:
      'Schizzi, modelli, rendering e simulazioni permettono alla committenza di valutare il risultato, i costi di realizzazione e i tempi prima di scegliere la soluzione.',
    img: { base: '/img/sezioni/metodo-2', w: 2400, h: 3392, alt: 'Schizzo di studio per gli interni di una villa a Dubai', altEn: "Study sketch for the interiors of a villa in Dubai" },
  },
  {
    titolo: 'Colore e materia',
    testo:
      'Luce, colore e materia sono al centro di ogni scelta: materiali sani e a basso impatto, cromie che rispettano la memoria dei luoghi e il ritmo dell’architettura.',
    img: { base: '/img/sezioni/metodo-3', w: 2400, h: 2975, alt: 'Le cartelle dei grigi proposte per il restyling cromatico di Palazzo Ajmonino', altEn: "The grey colour cards proposed for the colour restyling of Palazzo Ajmonino" },
  },
  {
    titolo: 'Realizzazione e direzione lavori',
    testo:
      'Pratiche edilizie, direzione dei lavori e direzione artistica: seguo il cantiere coordinando i gruppi di lavoro fino alla consegna dell’opera.',
    img: { base: '/img/sezioni/metodo-4', w: 2400, h: 1594, alt: 'Vista notturna dell’Ingresso d’Onore del Quartiere Fieristico di Pesaro', altEn: "Night view of the Main Entrance of the Pesaro Exhibition Centre" },
  },
];

/** Le fasi nel dettaglio (/metodo/, JSON-LD HowTo), ognuna con una foto */
export const fasi: { titolo: string; testo: string; foto?: { img: Img; disegno: boolean }; en?: { titolo: string; testo: string } }[] = [
  { titolo: 'Primo incontro', testo: 'Mi racconti lo spazio, l’edificio o l’evento, le tue esigenze, i tempi e il budget: capiamo insieme quale intervento è possibile.', foto: foto('spazio-vissuto-interni', 3) },
  { titolo: 'Sopralluogo e rilievo', testo: 'Un’ampia ripresa fotografica dei luoghi e un’analisi metrica e ottico-percettiva dello stato di fatto, raccogliendo il materiale grafico esistente.', foto: foto('piazza-gradara', 5) },
  { titolo: 'Analisi del contesto', testo: 'Studio la storia, la tradizione e la cultura del luogo, i vincoli e le cromie storiche, per un progetto in dialogo con il paesaggio e con la memoria.', foto: foto('piano-del-colore-pesaro', 2) },
  { titolo: 'Ipotesi e simulazioni', testo: 'Elaboro ipotesi progettuali, rendering e simulazioni che permettono di valutare il risultato, i costi di realizzazione e i tempi di costruzione.', foto: foto('ipotesi-progettuali', 1) },
  { titolo: 'Colore e materiali', testo: 'Scelgo colori, materiali e finiture in armonia con l’architettura e con l’ambiente, preferendo materiali naturali a basso impatto ambientale.', foto: foto('restyling-cromatico-palazzo-ajmonino', 1) },
  { titolo: 'Progetto definitivo ed esecutivo', testo: 'Sviluppo il progetto in ogni dettaglio, dalla distribuzione degli spazi agli arredi su misura, coordinando gli altri professionisti coinvolti.', foto: foto('villa-dubai', 5) },
  { titolo: 'Pratiche e autorizzazioni', testo: 'Seguo le pratiche edilizie e il dialogo con gli enti e gli uffici tecnici necessari all’avvio dei lavori.', foto: foto('piazza-gradara', 7) },
  { titolo: 'Direzione lavori e direzione artistica', testo: 'Seguo il cantiere e la realizzazione, controllando qualità, tempi e costi e curando la coerenza del progetto in ogni dettaglio.', foto: foto('ingresso-onore-fiera-pesaro', 2) },
  { titolo: 'Consegna', testo: 'Chiudo l’intervento con la consegna dell’opera e della documentazione, restando un riferimento anche dopo la fine dei lavori.', foto: foto('ingresso-onore-fiera-pesaro', 1) },
];

// Versione inglese (/en/), nello stesso ordine
const processoEn = [
  {
    "titolo": "Observing the place",
    "testo": "Every project starts with observation: photographic survey, metric and visual-perceptual analysis, research into the history and culture of the place, and listening to those who will live there."
  },
  {
    "titolo": "Ideas and simulations",
    "testo": "Sketches, models, renderings and simulations let clients assess the result, the construction costs and the timeline before choosing a solution."
  },
  {
    "titolo": "Colour and material",
    "testo": "Light, colour and material are at the heart of every choice: healthy, low-impact materials and colours that respect the memory of places and the rhythm of the architecture."
  },
  {
    "titolo": "Construction and site supervision",
    "testo": "Building permits, site supervision and artistic direction: I follow the building site, coordinating the teams through to completion."
  }
];
processo.forEach((p, i) => (p.en = processoEn[i]));
const fasiEn = [
  {
    "titolo": "First meeting",
    "testo": "You tell me about the space, the building or the event, your needs, timing and budget: together we work out what is possible."
  },
  {
    "titolo": "Site visit and survey",
    "testo": "A thorough photographic survey of the site and a metric and visual-perceptual analysis of its current state, gathering the existing drawings."
  },
  {
    "titolo": "Context analysis",
    "testo": "I study the history, tradition and culture of the place, its constraints and historic colours, for a project in dialogue with the landscape and with memory."
  },
  {
    "titolo": "Proposals and simulations",
    "testo": "I develop design proposals, renderings and simulations to assess the result, the construction costs and the building time."
  },
  {
    "titolo": "Colour and materials",
    "testo": "I choose colours, materials and finishes in harmony with the architecture and the environment, favouring natural, low-impact materials."
  },
  {
    "titolo": "Final and detailed design",
    "testo": "I develop the project in every detail, from the layout of the spaces to bespoke furniture, coordinating the other professionals involved."
  },
  {
    "titolo": "Permits and approvals",
    "testo": "I handle the building permits and liaise with the authorities and technical offices needed to start work."
  },
  {
    "titolo": "Site supervision and artistic direction",
    "testo": "I follow the building site and the construction, monitoring quality, time and cost and keeping the project consistent in every detail."
  },
  {
    "titolo": "Handover",
    "testo": "I close the work by handing over the building and its documentation, and remain a point of reference after the work is finished."
  }
];
fasi.forEach((f, i) => (f.en = fasiEn[i]));
