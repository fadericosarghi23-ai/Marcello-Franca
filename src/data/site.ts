// Identità dello studio: unica fonte per header, footer, contatti, SEO, JSON-LD, robots, llms.txt.

export const site = {
  nome: '[[DA COMPILARE: nome dello studio, 2 parole]]',
  /** Nome corto (manifest) */
  nomeBreve: '[[DA COMPILARE: nome corto]]',
  ragioneSociale: '[[DA COMPILARE: ragione sociale]]',
  altriNomi: ['[[DA COMPILARE: variante del nome]]'],
  /** Sigla in grassetto nei testi di presentazione */
  sigla: '[[DA COMPILARE: nome o sigla in grassetto]]',
  slogan: '[[DA COMPILARE: slogan, 3-4 parole]]',
  /** Descrizione lunga (JSON-LD, llms.txt) */
  descrizione: '[[DA COMPILARE: descrizione dello studio, 1 frase di circa 230 caratteri: chi è, dove, cosa fa]]',
  /** Descrizione breve (manifest) */
  descrizioneBreve: '[[DA COMPILARE: attività e città, 5-6 parole]]',
  /** Riga sotto il logo nel footer */
  descrizioneFooter: '[[DA COMPILARE: presentazione nel footer, 2 frasi brevi]]',
  /** Dominio canonico, senza slash finale. [[DA COMPILARE: dominio definitivo]] */
  dominio: 'https://www.example.com',
  lingua: 'it',
  locale: 'it_IT',
  indirizzo: {
    via: '[[DA COMPILARE: via e numero civico]]',
    /** Forma breve (titoli, mappa) */
    viaBreve: '[[DA COMPILARE: via breve]]',
    cap: '[[DA COMPILARE: CAP]]',
    citta: '[[DA COMPILARE: città]]',
    provincia: '[[DA COMPILARE: sigla provincia]]',
    /** Codice ISO 3166-2 della provincia, es. IT-RE. [[DA COMPILARE: codice ISO provincia]] */
    regioneIso: 'IT',
    paese: 'IT',
    /** Completa la frase "Lo studio si trova in <via>, ..." */
    zona: '[[DA COMPILARE: quartiere o zona, es. nel quartiere ...]]',
  },
  /** [[DA COMPILARE: coordinate della sede (mappa, geo meta, JSON-LD)]] */
  geo: { lat: 41.9028, lng: 12.4964 },
  /** Link "Indicazioni stradali". [[DA COMPILARE: link Google Maps della sede]] */
  mapsUrl: 'https://www.google.com/maps',
  /** [[DA COMPILARE: telefono in formato internazionale per href, es. +390000000000]] */
  telefono: { testo: '[[DA COMPILARE: telefono]]', href: '+390000000000' },
  /** [[DA COMPILARE: email]] (deve restare un indirizzo valido per i link mailto) */
  email: 'info@example.com',
  /** Vuoti = non mostrati */
  pec: '[[DA COMPILARE: PEC]]',
  piva: '[[DA COMPILARE: P.IVA]]',
  /** nome = chiave dell'icona in icone.ts (es. Facebook). [[DA COMPILARE: profili social]] */
  social: [{ nome: 'Facebook', url: 'https://www.facebook.com/' }],
  ricevimento: '[[DA COMPILARE: orari o modalità di ricevimento, 1 frase]]',
  logo: {
    scuro: '/img/logo/logo.png',
    chiaro: '/img/logo/logo-chiaro.png',
    w: 882,
    h: 182,
    alt: 'DA COMPILARE: nome dello studio e attività',
    didascalia: 'DA COMPILARE: logo dello studio',
  },
  /** Colore della barra del browser (= --accent in global.css) */
  themeColor: '#931a1d',
  areeServite: [
    { tipo: 'City', nome: '[[DA COMPILARE: città]]' },
    { tipo: 'AdministrativeArea', nome: '[[DA COMPILARE: provincia]]' },
    { tipo: 'AdministrativeArea', nome: '[[DA COMPILARE: provincia]]' },
    { tipo: 'AdministrativeArea', nome: '[[DA COMPILARE: provincia]]' },
    { tipo: 'AdministrativeArea', nome: '[[DA COMPILARE: provincia]]' },
    { tipo: 'State', nome: '[[DA COMPILARE: regione]]' },
  ],
  competenze: [
    '[[DA COMPILARE: competenza 1]]',
    '[[DA COMPILARE: competenza 2]]',
    '[[DA COMPILARE: competenza 3]]',
    '[[DA COMPILARE: competenza 4]]',
    '[[DA COMPILARE: competenza 5]]',
    '[[DA COMPILARE: competenza 6]]',
  ],
  /** Immagine Open Graph predefinita (1200×630) */
  og: { src: '/img/og/sito.jpg', alt: 'DA COMPILARE: nome dello studio e attività' },
  /** Modulo contatti: con attivo=false non invia nulla. [[DA COMPILARE: collegare il modulo (Netlify Forms)]] */
  form: { attivo: false, netlify: true, nome: 'contatti', grazie: '/grazie/' },
};

export const telHref = `tel:${site.telefono.href}`;
export const mailHref = `mailto:${site.email}`;
export const indirizzoRiga = `${site.indirizzo.via}, ${site.indirizzo.cap} ${site.indirizzo.citta}`;
export const url = (path = '/') => site.dominio + path;
