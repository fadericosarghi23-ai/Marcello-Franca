import type { Img } from '../lib/img';

const sezione = (nome: string, w: number, h: number, alt: string, altEn?: string): Img => ({ base: `/img/sezioni/${nome}`, w, h, alt, altEn });

/** Slide dell'hero in home: progetto collegato (titolo e luogo in didascalia) + foto a tutta pagina. */
export const slides: { progetto: string; img: Img }[] = [
  { progetto: 'ingresso-onore-fiera-pesaro', img: sezione('home-slide-1', 2000, 1199, 'Ingresso d’Onore del Quartiere Fieristico di Pesaro: facciata curva con vetrate e portico', "Main Entrance of the Pesaro Exhibition Centre: curved façade with glazing and portico") },
  { progetto: 'motomuseo-morbidelli', img: sezione('home-slide-2', 2400, 1598, 'Le moto d’epoca sulle pedane del Motomuseo Morbidelli a Pesaro', "Vintage motorcycles on the platforms of the Morbidelli Motorcycle Museum in Pesaro") },
  { progetto: 'piazza-gradara', img: sezione('home-slide-3', 2400, 1800, 'La piazza del Municipio di Gradara con il borgo e la rocca', "The Town Hall square in Gradara with the old village and the fortress") },
  { progetto: 'stabilimento-balneare-ponente', img: sezione('home-slide-4', 2044, 1363, 'Piscina e pergolato dello stabilimento balneare Baronciani a Pesaro', "Pool and pergola of the Baronciani beach club in Pesaro") },
  { progetto: 'bocciodromo-pesaro', img: sezione('home-slide-5', 2400, 1350, 'Il nuovo Bocciodromo della Città di Pesaro', "The new bocce hall of the City of Pesaro") },
];

/** Foto verticale accanto alla presentazione in home */
export const fotoStudio: Img = sezione('home-studio', 1536, 2048, 'Villa a Pesaro ristrutturata da Marcello Franca', "Villa in Pesaro renovated by Marcello Franca");

/** Numeri della home. auto = calcolato (persone del team / progetti in portfolio). */
export const numeriHome: { n: string | null; label: string; labelEn?: string; auto?: 'team' | 'progetti' }[] = [
  { n: '1985', label: 'Architetto dal' },
  { n: null, auto: 'progetti', label: 'Progetti in portfolio' },
  { n: '6', label: 'Ambiti di progetto' },
  { n: '40+', label: 'Committenti pubblici e privati' },
];

/** Progetti in evidenza in home (slug) */
export const inEvidenza = [
  'ingresso-onore-fiera-pesaro',
  'motomuseo-morbidelli',
  'piazza-gradara',
  'piano-del-colore-pesaro',
  'bocciodromo-pesaro',
  'restyling-cromatico-palazzo-ajmonino',
];

/** Aree di lavoro (sezione scura in home) */
export const aree: { conteggio: string; nome: string; luoghi: string; en?: { conteggio: string; nome: string; luoghi: string } }[] = [
  { conteggio: 'Sede dello studio', nome: 'Pesaro', luoghi: 'Centro storico, Campanara, Santa Veneranda, Borgo Santa Maria, Pantano, Montegranaro, Zona Porto, spiaggia di Ponente' },
  { conteggio: 'Progetti e consulenze', nome: 'Provincia di Pesaro e Urbino', luoghi: 'Gradara, Montelabbate, Fano, Fratterosa, Fermignano, Mondolfo, Cartoceto, Monteciccardo' },
  { conteggio: 'Consulenze sul colore', nome: 'Romagna', luoghi: 'Santarcangelo di Romagna, Rimini, Forlì' },
  { conteggio: '1 concorso', nome: 'Repubblica di San Marino', luoghi: 'Concorso di idee “Risalire la Città”, 1994' },
  { conteggio: '1 allestimento', nome: 'Stati Uniti', luoghi: 'Birmingham (Alabama), Barber Vintage Motorsports Museum' },
  { conteggio: '1 progetto d’interni', nome: 'Emirati Arabi Uniti', luoghi: 'Dubai' },
];

/** Domande frequenti (home + JSON-LD FAQPage). Metà nella colonna sinistra, la prima aperta. */
export const faq: { d: string; r: string; en?: { d: string; r: string } }[] = [
  {
    d: 'Di cosa si occupa lo Studio di Architettura Marcello Franca?',
    r: 'Da oltre trent’anni lo studio si occupa di architettura, arredamento d’interni, allestimenti museali e fieristici, disegno industriale, urbanistica e Piani del Colore, con una visione progettuale globale e una grande attenzione al processo di sviluppo delle idee e alle esigenze della committenza.',
  },
  {
    d: 'Dove si trova lo studio?',
    r: 'Lo studio ha sede a Pesaro (PU). Puoi contattare l’architetto Marcello Franca al numero 347 338 8121 o all’indirizzo architetto@marcellofranca.it per fissare un incontro.',
  },
  {
    d: 'In quali zone lavori?',
    r: 'Principalmente a Pesaro e nella provincia di Pesaro e Urbino, con consulenze in Romagna e progetti a San Marino, a Dubai e a Birmingham, in Alabama, dove ho progettato il “Morbidelli Corner” del Barber Vintage Motorsports Museum.',
  },
  {
    d: 'Chi è Marcello Franca?',
    r: 'Sono nato a Pesaro nel 1959 e lavoro come architetto dal 1985, dopo la laurea al Politecnico di Torino con una tesi sul colore nel paesaggio urbano lungo il mare; il mio maestro è stato Michele Provinciali.',
  },
  {
    d: 'Lavori per privati o per enti pubblici?',
    r: 'Entrambi. Ho lavorato per Comuni come Pesaro, Gradara, Montelabbate e Santarcangelo di Romagna, per la CCIAA di Pesaro e Urbino, i Musei Civici e il Rossini Opera Festival, per aziende come Berloni, Akzo Nobel Sikkens e Biesse e per molti committenti privati.',
  },
  {
    d: 'Che cos’è un Piano del Colore?',
    r: 'È uno strumento che crea un quadro di riferimento unitario per le tinteggiature delle facciate, in relazione alla storia, allo stile e ai materiali delle diverse epoche, per salvaguardare la memoria cromatica della città. Ho curato il Piano del Colore del centro storico di Pesaro.',
  },
  {
    d: 'Ti occupi anche di allestimenti?',
    r: 'Sì: musei, mostre, stand fieristici, palchi e scenografie, dal Motomuseo Morbidelli al Museo della Bicicletta di Pesaro, dagli eventi del Quartiere Fieristico di Campanara alle edizioni del Rossini Opera Festival.',
  },
  {
    d: 'Collabori con altri professionisti?',
    r: 'Sì, a seconda del progetto coordino gruppi di lavoro con architetti, ingegneri e geometri: da anni collaboro con gli architetti Massimo D’Agnillo e Andrea Pagnetti e con lo Studio di Design e Architettura d’interni Telemaco di Pesaro.',
  },
  {
    d: 'Come posso contattarti?',
    r: 'Il modo più semplice è chiamare il 347 338 8121 o scrivere ad architetto@marcellofranca.it; puoi anche usare il modulo nella pagina Contatti. Ti ricontatterò per fissare un primo incontro.',
  },
];

// Versione inglese (/en/), nello stesso ordine
const numeriEn = ["Architect since","Projects in the portfolio","Fields of work","Public and private clients"];
numeriHome.forEach((n, i) => (n.labelEn = numeriEn[i]));
const areeEn = [
  {
    "conteggio": "Studio base",
    "nome": "Pesaro",
    "luoghi": "Historic centre, Campanara, Santa Veneranda, Borgo Santa Maria, Pantano, Montegranaro, Port area, Ponente beach"
  },
  {
    "conteggio": "Projects and consultancy",
    "nome": "Province of Pesaro and Urbino",
    "luoghi": "Gradara, Montelabbate, Fano, Fratterosa, Fermignano, Mondolfo, Cartoceto, Monteciccardo"
  },
  {
    "conteggio": "Colour consultancy",
    "nome": "Romagna",
    "luoghi": "Santarcangelo di Romagna, Rimini, Forlì"
  },
  {
    "conteggio": "1 competition",
    "nome": "Republic of San Marino",
    "luoghi": "Ideas competition “Risalire la Città”, 1994"
  },
  {
    "conteggio": "1 exhibition design",
    "nome": "United States",
    "luoghi": "Birmingham (Alabama), Barber Vintage Motorsports Museum"
  },
  {
    "conteggio": "1 interior project",
    "nome": "United Arab Emirates",
    "luoghi": "Dubai"
  }
];
aree.forEach((a, i) => (a.en = areeEn[i]));
const faqEn = [
  {
    "d": "What does the Marcello Franca architecture studio do?",
    "r": "For over thirty years the studio has worked in architecture, interior design, museum and trade fair design, industrial design, urban planning and Colour Plans, with a comprehensive approach to design and close attention to how ideas develop and to clients’ needs."
  },
  {
    "d": "Where is the studio?",
    "r": "The studio is based in Pesaro (PU), Italy. You can reach architect Marcello Franca on +39 347 338 8121 or at architetto@marcellofranca.it to arrange a meeting."
  },
  {
    "d": "Where do you work?",
    "r": "Mainly in Pesaro and the province of Pesaro and Urbino, with consultancy in Romagna and projects in San Marino, Dubai and Birmingham, Alabama, where I designed the “Morbidelli Corner” at the Barber Vintage Motorsports Museum."
  },
  {
    "d": "Who is Marcello Franca?",
    "r": "I was born in Pesaro in 1959 and have worked as an architect since 1985, after graduating from the Politecnico di Torino with a thesis on colour in the seaside urban landscape; my mentor was Michele Provinciali."
  },
  {
    "d": "Do you work for private clients or public bodies?",
    "r": "Both. I have worked for municipalities such as Pesaro, Gradara, Montelabbate and Santarcangelo di Romagna, for the Pesaro and Urbino Chamber of Commerce, the Civic Museums and the Rossini Opera Festival, for companies such as Berloni, Akzo Nobel Sikkens and Biesse, and for many private clients."
  },
  {
    "d": "What is a Colour Plan?",
    "r": "It is a tool that sets a single frame of reference for painting façades, based on the history, style and materials of different periods, to safeguard the chromatic memory of the city. I oversaw the Colour Plan for the historic centre of Pesaro."
  },
  {
    "d": "Do you also design exhibitions?",
    "r": "Yes: museums, exhibitions, trade fair stands, stages and sets, from the Morbidelli Motorcycle Museum to the Bicycle Museum in Pesaro, and from events at the Campanara Exhibition Centre to the Rossini Opera Festival productions."
  },
  {
    "d": "Do you work with other professionals?",
    "r": "Yes, depending on the project I coordinate teams of architects, engineers and surveyors: for years I have worked with architects Massimo D’Agnillo and Andrea Pagnetti and with the Telemaco design and interior architecture studio in Pesaro."
  },
  {
    "d": "How can I contact you?",
    "r": "The easiest way is to call +39 347 338 8121 or write to architetto@marcellofranca.it; you can also use the form on the Contact page. I will get back to you to arrange a first meeting."
  }
];
faq.forEach((f, i) => (f.en = faqEn[i]));
