// Reputazione: committenti, pubblicazioni e riconoscimenti, il maestro, l'attività artistica.
// Fonti: pagine About, Editorial publishing, Michele Provinciali e Artistic activity di marcellofranca.it.
import type { Img } from '../lib/img';

const sezione = (nome: string, w: number, h: number, alt: string): Img => ({ base: `/img/sezioni/${nome}`, w, h, alt });

/** Committenti per cui ha lavorato come progettista e consulente (pagina About) */
export const committenti: { gruppo: string; nomi: string[] }[] = [
  {
    gruppo: 'Enti pubblici',
    nomi: [
      'Comune di Pesaro',
      'Comune di Gradara',
      'Comune di Montelabbate',
      'Comune di Fermignano',
      'Comune di Santarcangelo di Romagna',
      'Comune di Monteciccardo',
      'Comune di Mondolfo',
      'Comune di Cartoceto',
      'C.C.I.A.A. Pesaro e Urbino',
      'Centro Estero delle C.C.I.A.A. delle Marche',
      'Fondazione Patrimonio Fiere di Pesaro',
      'Azienda Speciale “Pesaro Promozione”',
    ],
  },
  {
    gruppo: 'Cultura e associazioni',
    nomi: [
      'Rossini Opera Festival',
      'Musei Civici di Pesaro',
      'Morbidelli Moto Museo',
      'Italia Nostra, sezione di Pesaro-Fano',
      'Confartigianato Pesaro',
      'C.N.A. di Pesaro',
      'A.R.H. Urbino',
      'A.I.A.S. Pesaro',
      'A.M.N.I.C. Pesaro',
      'Maggioli Editore, Rimini',
    ],
  },
  {
    gruppo: 'Aziende',
    nomi: [
      'Akzo Nobel Sikkens',
      'Berloni',
      'Mulazzani Italino',
      'Colorificio M.P., Rimini',
      'Colorificio Adriatico, Cartoceto',
      'Surya, Monsummano Terme',
      'Frank Soriano, Montecatini Terme',
      'Telemaco, Pesaro',
      'Tomoca',
      'Idrotecno, Pesaro',
      'Cox Insurance, Londra',
      'Hotel dei Galli, Senigallia',
      'Paradise Beach, Pesaro',
      'Intercontact, Pesaro',
      'Skooter, Pesaro',
      'Acanto, Pesaro',
      'Tornasole Comunicazione, Pesaro',
      'BBC Comunication, Pesaro',
      'L’Enigma, Forlì',
    ],
  },
];

/** Selezione per la home */
export const committentiInEvidenza = [
  'Comune di Pesaro',
  'Rossini Opera Festival',
  'Musei Civici di Pesaro',
  'C.C.I.A.A. Pesaro e Urbino',
  'Comune di Gradara',
  'Comune di Santarcangelo di Romagna',
  'Morbidelli Moto Museo',
  'Italia Nostra, sezione di Pesaro-Fano',
  'Akzo Nobel Sikkens',
  'Berloni',
  'Colorificio M.P., Rimini',
  'Fondazione Patrimonio Fiere di Pesaro',
];

/** Pubblicazioni, mostre e riconoscimenti, in ordine di tempo (anno vuoto = non indicato sul sito) */
export const traguardi: { anno: string; titolo: string; testo: string; link?: { testo: string; href: string } }[] = [
  {
    anno: '1983',
    titolo: '“Ricerca Colore”, prima mostra fotografica personale',
    testo: 'A Palazzo Toschi Mosca di Pesaro, con la supervisione di Michele Provinciali e Massimo Dolcini.',
  },
  {
    anno: '1985',
    titolo: 'Inizio dell’attività di architetto a Pesaro',
    testo: 'Dopo la laurea al Politecnico di Torino con la tesi “Pesaro-Colore, contributo ad un progetto di Michele Provinciali”, sul colore nel paesaggio urbano lungo il mare.',
  },
  {
    anno: '1986',
    titolo: 'Rossini Opera Festival',
    testo: 'Collaborazione agli allestimenti di “Bianca e Falliero” e “Il turco in Italia”; allestimento di Piazza del Popolo per i concerti del 1986 e 1987.',
  },
  {
    anno: '1988',
    titolo: 'Concorso internazionale del Centro Studi OIKOS',
    testo: 'Progetto di arredo-bagno per persone con disabilità segnalato e pubblicato sulla rivista “Bagno & Accessori”.',
  },
  {
    anno: '1990',
    titolo: 'Piano del Colore del centro storico di Pesaro',
    testo: 'Incarico dell’amministrazione comunale, presentato con una mostra e un dibattito pubblico.',
  },
  {
    anno: '1994',
    titolo: 'Concorso “Risalire la Città”, San Marino',
    testo: 'Tavole di progetto pubblicate nella mostra e nel libro del concorso.',
  },
  {
    anno: '',
    titolo: '“Morbidelli Corner”, Barber Vintage Motorsports Museum',
    testo: 'Progetto dello spazio dedicato alle moto Morbidelli nel museo di Birmingham, in Alabama (USA).',
  },
  {
    anno: '',
    titolo: '“Cold Ground”, film di Guido Sainti',
    testo: 'Collaborazione al film girato a Los Angeles per la University of Southern California, Cinema & Television.',
  },
  {
    anno: '',
    titolo: 'Scritti sul colore nell’ambiente costruito',
    testo: 'Articoli per riviste e pubblicazioni, come redattore o collaboratore di numerosi Piani del Colore; “Colori della Romagna” per il 50° anniversario del Colorificio MP di Viserba.',
  },
  {
    anno: '2002',
    titolo: 'Mostre d’arte con l’Associazione “La Ginestra”',
    testo: 'Da “Rimini Luce e Colore” a “Rimini allo Specchio” a Castel Sismondo, fino a “La Città dell’Uomo” a Olomouc, Brno e Praga.',
  },
  {
    anno: '2011',
    titolo: 'Incontro con i Giovani Architetti di A+',
    testo: 'Oltre all’intervista sul colore per “Blog d’O”, promosso da OIKOS industria colori e vernici.',
    link: { testo: 'Scarica il resoconto (PDF)', href: '/file/marcello-franca-incontra-giovani-architetti-a-piu-2011.pdf' },
  },
];

/** Copertine delle pubblicazioni */
export const copertine: Img[] = [
  sezione('pubblicazione-1', 1212, 1729, 'Copertina di “Recupero Edilizio” n. 10: il colore dell’ambiente costruito'),
  sezione('pubblicazione-2', 1216, 1695, 'Copertina di “Colori della Romagna. Architettura e Paesaggio Urbano” di Marcello Franca'),
];

/** Il maestro: Michele Provinciali */
export const maestro = {
  foto: sezione('provinciali', 1173, 1490, 'Michele Provinciali con il Compasso d’Oro'),
  testo: [
    'Michele Provinciali (1923-2009), graphic designer e docente all’ISIA di Urbino, è stato per me amico e maestro. Dal suo progetto “Pesaro Colore” è nata la mia tesi di laurea; dai lunghi colloqui e dai viaggi insieme, lezioni di storia, di colore e di sguardo sulle cose.',
    'Da lui ho imparato ad amare i colori della natura, della storia e dei materiali, per un’architettura in armonia con l’ambiente, e la capacità di vedere oltre il visibile: quello che negli ultimi anni lui stesso chiamava “il Cuore pensante”.',
  ],
};

/** Arte e fotografia */
export const arte = {
  foto: sezione('arte', 2040, 1406, 'Pagina del catalogo della mostra “Rimini Luce e Colore”'),
  testo:
    'Osservare il mondo con gli occhi della macchina fotografica, nel tentativo di coglierne l’essenza: inquadrare nel rettangolo dell’immagine i particolari di un quadro più ampio, per comprendere meglio ciò che ci circonda.',
  mostre: [
    '“Ricerca Colore”, Palazzo Toschi Mosca, Pesaro (1983)',
    '“Barche dell’Adriatico”, ricerca sul colore lungo il litorale',
    '“Rimini allo Specchio”, Castel Sismondo, Rimini',
    '“La Città dell’Uomo”, Olomouc, Brno e Praga',
  ],
};

/** Video (pagina studio): solo quelli ancora disponibili su YouTube */
export const video = {
  tipo: 'youtube' as const,
  id: '1W6QnraA-48',
  titolo: '“I colori sono come figli”: intervista sul colore per Blog d’O (OIKOS)',
  poster: sezione('video-blogdo', 480, 360, 'Anteprima dell’intervista a Marcello Franca per Blog d’O'),
};
