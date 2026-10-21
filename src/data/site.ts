// Identità dello studio: unica fonte per header, footer, contatti, SEO, JSON-LD, robots, llms.txt.

export const site = {
  nome: 'Marcello Franca',
  /** Nome corto (manifest) */
  nomeBreve: 'M. Franca',
  ragioneSociale: 'Studio di Architettura Marcello Franca',
  altriNomi: ['Marcello Franca architetto', 'Studio di Architettura Marcello Franca'],
  /** Sigla in grassetto nei testi di presentazione */
  sigla: 'Marcello Franca',
  slogan: 'Il colore è luce.',
  /** Descrizione lunga (JSON-LD, llms.txt) */
  descrizione:
    'Lo Studio di Architettura Marcello Franca a Pesaro si occupa da oltre trent’anni di architettura, arredamento d’interni, allestimenti, disegno industriale, urbanistica e Piani del Colore, con una visione progettuale globale.',
  /** Descrizione breve (manifest) */
  descrizioneBreve: 'Architetto a Pesaro: architettura, interni e colore',
  /** Riga sotto il logo nel footer */
  descrizioneFooter: 'Architetto a Pesaro dal 1985: architettura, interni, allestimenti, design e Piani del Colore. Il colore è luce.',
  /** Dominio canonico, senza slash finale */
  dominio: 'https://www.marcellofranca.it',
  lingua: 'it',
  locale: 'it_IT',
  indirizzo: {
    /** Via e civico, CAP, zona: lasciare '' se non pubblicati (le righe relative spariscono) */
    via: '',
    /** Forma breve (titoli, mappa) */
    viaBreve: '',
    cap: '',
    citta: 'Pesaro',
    provincia: 'PU',
    /** Codice ISO 3166-2 della provincia */
    regioneIso: 'IT-PU',
    paese: 'IT',
    /** Completa la frase "Lo studio si trova in <via>, ..." */
    zona: '',
  },
  /** Centro di Pesaro: l'indirizzo dello studio non è pubblicato. [[DA COMPILARE: coordinate della sede se si pubblica l'indirizzo]] */
  geo: { lat: 43.9098, lng: 12.9131 },
  /** Link "Indicazioni stradali" */
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pesaro%20PU',
  telefono: { testo: '347 338 8121', href: '+393473388121' },
  email: 'architetto@marcellofranca.it',
  /** Vuoti = non mostrati */
  pec: '',
  piva: '00998090419',
  /** nome = chiave dell'icona in icone.ts (es. Facebook) */
  social: [{ nome: 'Facebook', url: 'https://www.facebook.com/architettomarcellofranca/' }],
  ricevimento: 'Contattami per fissare un incontro.',
  logo: {
    scuro: '/img/logo/logo.png',
    chiaro: '/img/logo/logo-chiaro.png',
    w: 882,
    h: 182,
    alt: 'Marcello Franca architetto — architettura, interni, allestimenti, design e colore',
    didascalia: 'Logo Marcello Franca architetto',
  },
  /** Colore della barra del browser (= --accent in global.css) */
  themeColor: '#222222',
  areeServite: [
    { tipo: 'City', nome: 'Pesaro' },
    { tipo: 'AdministrativeArea', nome: 'Provincia di Pesaro e Urbino' },
    { tipo: 'AdministrativeArea', nome: 'Provincia di Rimini' },
    { tipo: 'State', nome: 'Marche' },
    { tipo: 'State', nome: 'Emilia-Romagna' },
  ],
  competenze: [
    'progettazione architettonica',
    'architettura d’interni',
    'arredamento',
    'allestimenti museali',
    'allestimenti fieristici',
    'scenografie',
    'Piani del Colore',
    'restyling cromatico',
    'colore nell’ambiente costruito',
    'urbanistica',
    'arredo urbano',
    'disegno industriale',
    'segnaletica',
    'direzione lavori',
  ],
  /** Immagine Open Graph predefinita (1200×630) */
  og: { src: '/img/og/sito.jpg', alt: 'Marcello Franca, architetto a Pesaro: architettura, interni e colore' },
  /** Modulo contatti: con attivo=false non invia nulla. Attivare quando il sito è pubblicato su Netlify. */
  form: { attivo: false, netlify: true, nome: 'contatti', grazie: '/grazie/' },
};

export const telHref = `tel:${site.telefono.href}`;
export const mailHref = `mailto:${site.email}`;
/** Via (se c'è), CAP e città: "Via Roma 1, 00100 Città" o solo "Città" */
export const indirizzoRiga = [site.indirizzo.via, [site.indirizzo.cap, site.indirizzo.citta].filter(Boolean).join(' ')].filter(Boolean).join(', ');
/** CAP, città e provincia: "00100 Città (PR)" */
export const localitaRiga = `${[site.indirizzo.cap, site.indirizzo.citta].filter(Boolean).join(' ')} (${site.indirizzo.provincia})`;
export const url = (path = '/') => site.dominio + path;
