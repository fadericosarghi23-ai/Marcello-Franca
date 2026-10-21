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

export const servizi: Servizio[] = [
  {
    id: 'architettura',
    nome: 'Architettura',
    breve: 'Edifici pubblici e privati, residenze e spazi per la collettività, in dialogo con il luogo, il paesaggio e la storia.',
    icona: 'architettura',
    testo: [
      'Fare architettura significa osservare e studiare i fenomeni che ci circondano, ripensare il rapporto tra società e ambiente e cercare un punto d’equilibrio tra forma e funzione, recuperando il valore della memoria e l’uso sapiente dei materiali.',
      'Dai quartieri residenziali all’Ingresso d’Onore del Quartiere Fieristico di Pesaro, cerco soluzioni semplici e precise per funzionalità ed estetica, con attenzione ai costi, al risparmio energetico e ai materiali a basso impatto ambientale.',
    ],
    voci: [
      'Progettazione architettonica',
      'Residenze uni e plurifamiliari',
      'Edifici pubblici e sportivi',
      'Direzione lavori e direzione artistica',
      'Pratiche edilizie',
      'Rendering e simulazioni per la valutazione dei costi',
    ],
    foto: 'ingresso-onore-fiera-pesaro',
    correlati: ['ingresso-onore-fiera-pesaro', 'bocciodromo-pesaro', 'architettura-residenziale'],
    categoria: 'architettura',
  },
  {
    id: 'interni',
    nome: 'Architettura d’interni',
    breve: 'Case, ville e appartamenti: spazi, arredi, luce, materiali e colori pensati per chi li abita.',
    icona: 'interni',
    testo: [
      'La casa è il nostro rifugio, il luogo più intimo dove ritrovare se stessi e le persone che amiamo: per questo ogni progetto d’interni parte dall’ascolto di chi lo vivrà e ne rispecchia il carattere.',
      'Da oltre vent’anni collaboro con lo Studio di Design e Architettura d’interni Telemaco di Pesaro alla progettazione e direzione lavori di ville private, curando ogni dettaglio costruttivo, i materiali, i colori e i complementi d’arredo.',
    ],
    voci: [
      'Progetto d’arredo su misura',
      'Ristrutturazione di appartamenti e ville',
      'Materiali, finiture e colori',
      'Progetto della luce',
      'Direzione lavori degli interni',
    ],
    foto: 'spazio-vissuto-interni',
    correlati: ['spazio-vissuto-interni', 'villa-dubai', 'architettura-residenziale'],
    categoria: 'interni',
  },
  {
    id: 'allestimenti',
    nome: 'Allestimenti museali, fieristici e teatrali',
    breve: 'Musei, mostre, stand, palchi e scenografie: spazi temporanei e permanenti per raccontare collezioni ed eventi.',
    icona: 'allestimenti',
    testo: [
      'L’allestimento dello spazio, stabile o per un solo giorno, permette di sperimentare forme e funzioni che nella realtà del costruire sono spesso negate: per me è stato una vera palestra di progettazione.',
      'Dagli eventi del Quartiere Fieristico di Campanara alle edizioni del Rossini Opera Festival in Piazza del Popolo, dai Musei Civici di Pesaro al Motomuseo Morbidelli e al Museo della Bicicletta.',
    ],
    voci: [
      'Allestimenti museali e mostre',
      'Stand e spazi fieristici',
      'Palchi, scenografie e sfilate',
      'Teatri e spazi per lo spettacolo',
      'Supporti espositivi su misura',
    ],
    foto: 'motomuseo-morbidelli',
    correlati: ['motomuseo-morbidelli', 'museo-della-bicicletta', 'teatro-dei-bambini'],
    categoria: 'allestimenti',
  },
  {
    id: 'colore',
    nome: 'Colore e Piani del Colore',
    breve: 'Piani del Colore, restyling cromatici e consulenze sul colore nell’ambiente costruito, per città, enti e aziende.',
    icona: 'colore',
    testo: [
      'Non esiste realtà senza colore perché il colore è luce: lo studio delle cromie storico-originarie salvaguarda la memoria cromatica della città e del territorio.',
      'Ho curato il Piano del Colore del centro storico di Pesaro e collaborato a numerosi Piani del Colore di città italiane, oltre a restyling cromatici, pubblicazioni e consulenze per aziende come Akzo Nobel Sikkens e il Colorificio MP di Rimini.',
    ],
    voci: [
      'Piani del Colore per centri storici',
      'Restyling cromatico di edifici',
      'Rilievo e analisi delle cromie storiche',
      'Consulenza sul colore per aziende',
      'Pubblicazioni e incontri sul colore',
    ],
    foto: 'piano-del-colore-pesaro',
    correlati: ['piano-del-colore-pesaro', 'restyling-cromatico-palazzo-ajmonino', 'spazio-colorato'],
    categoria: 'colore',
  },
  {
    id: 'urbanistica',
    nome: 'Spazio urbano e urbanistica',
    breve: 'Piazze, giardini, quartieri e ipotesi di trasformazione urbana, con cura per l’immagine della città.',
    icona: 'urbanistica',
    testo: [
      'Pianificare significa prevedere e anticipare, ma soprattutto indirizzare i comportamenti sociali ed economici verso un equilibrio con la natura: una pianificazione che ha come parola d’ordine “sottrazione”, per aumentare la qualità e non la quantità degli spazi costruiti.',
      'Prendersi cura dell’immagine della città è più di una semplice collocazione di arredi: richiede attenzione agli edifici pubblici, alla sicurezza e al rispetto della storia e della cultura dei luoghi.',
    ],
    voci: [
      'Riqualificazione di piazze e spazi pubblici',
      'Verde urbano attrezzato',
      'Pianificazione di quartieri residenziali',
      'Ipotesi progettuali e simulazioni',
      'Concorsi di idee',
    ],
    foto: 'piazza-gradara',
    correlati: ['piazza-gradara', 'verde-urbano-montelabbate', 'quartiere-borgo-verde'],
    categoria: 'spazio-urbano',
  },
  {
    id: 'design',
    nome: 'Disegno industriale e segnaletica',
    breve: 'Segnaletica urbana e aziendale, componenti d’arredo, illuminazione e oggetti d’uso quotidiano.',
    icona: 'design',
    testo: [
      'Nel 1987-88 ho svolto per Frank Soriano e Surya Illuminazione una ricerca sui sistemi di illuminazione degli spazi esterni, lavorando poi a stretto contatto con progettisti come Enzo Mari.',
      'Ho progettato la segnaletica per il centro storico di Pesaro, totem aziendali, ringhiere, chioschi e componenti d’arredo-bagno per persone con disabilità, pubblicati su riviste di settore.',
    ],
    voci: [
      'Segnaletica urbana e aziendale',
      'Componenti d’arredo e dettagli',
      'Illuminazione',
      'Grafica e comunicazione',
      'Modelli e prototipi',
    ],
    foto: 'design-e-segnaletica',
    correlati: ['design-e-segnaletica', 'altri-lavori'],
    categoria: 'design',
  },
];
