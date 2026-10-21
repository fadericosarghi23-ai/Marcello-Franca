// Titoli, descrizioni e grafo JSON-LD (schema.org) generati dai dati.
import { site, url } from '../data/site';
import { team } from '../data/team';
import { servizi } from '../data/servizi';
import { slides } from '../data/home';
import { fallbackSrc } from './img';

const MAX_TITLE = 65;
const SUFFISSO = ` | ${site.nome}`;

/** Per ogni candidato in ordine: prima con " | Nome" in coda (se il nome non c'è già), poi da solo; il primo che sta in 65 caratteri. */
export function titolo(...candidati: string[]): string {
  for (const c of candidati) {
    if (!c.includes(site.nome) && (c + SUFFISSO).length <= MAX_TITLE) return c + SUFFISSO;
    if (c.length <= MAX_TITLE) return c;
  }
  return candidati[candidati.length - 1];
}

/** Taglia a max caratteri sull'ultimo spazio, toglie la punteggiatura debole finale e aggiunge … */
export function tronca(testo: string, max = 156): string {
  if (testo.length <= max) return testo;
  const t = testo.slice(0, max);
  return t.slice(0, t.lastIndexOf(' ')).replace(/[,:;\s]+$/, '') + '…';
}

export const ogPath = (slug: string) => `/img/og/${slug}.jpg`;

const ORG = `${site.dominio}/#organizzazione`;
const SITO = `${site.dominio}/#sito`;

export function organizzazione() {
  return {
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': ORG,
    name: site.nome,
    legalName: site.ragioneSociale,
    alternateName: site.altriNomi,
    description: site.descrizione,
    slogan: site.slogan,
    url: url('/'),
    logo: { '@type': 'ImageObject', url: url(site.logo.scuro), caption: site.logo.didascalia },
    image: [...new Set(slides.map((s) => s.progetto))].slice(0, 3).map((slug) => {
      const s = slides.find((x) => x.progetto === slug)!;
      return url(fallbackSrc(s.img));
    }),
    email: site.email,
    telephone: site.telefono.href,
    address: {
      '@type': 'PostalAddress',
      ...(site.indirizzo.via ? { streetAddress: site.indirizzo.via } : {}),
      ...(site.indirizzo.cap ? { postalCode: site.indirizzo.cap } : {}),
      addressLocality: site.indirizzo.citta,
      addressRegion: site.indirizzo.provincia,
      addressCountry: site.indirizzo.paese,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsUrl,
    areaServed: site.areeServite.map((a) => ({ '@type': a.tipo, name: a.nome })),
    knowsAbout: site.competenze,
    ...(site.piva ? { vatID: site.piva } : {}),
    sameAs: site.social.map((s) => s.url),
    employee: team.map((m) => ({
      '@type': 'Person',
      '@id': url(`/studio/#${m.id}`),
      name: m.nome,
      jobTitle: m.ruolo,
      image: url(fallbackSrc(m.foto)),
      worksFor: { '@id': ORG },
    })),
    numberOfEmployees: { '@type': 'QuantitativeValue', value: team.length },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Servizi di ${site.nome}`,
      itemListElement: servizi.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.nome, description: s.breve, url: url(`/servizi/#${s.id}`) },
      })),
    },
  };
}

export function sitoWeb() {
  return { '@type': 'WebSite', '@id': SITO, url: url('/'), name: site.nome, inLanguage: ['it-IT', 'en-GB'], publisher: { '@id': ORG } };
}

export type Briciola = { nome: string; path: string };

export function pagina(opts: { tipo?: string; path: string; titolo: string; descrizione: string; og: string; briciole?: boolean }) {
  return {
    '@type': opts.tipo ?? 'WebPage',
    '@id': url(`${opts.path}#pagina`),
    url: url(opts.path),
    name: opts.titolo,
    description: opts.descrizione,
    inLanguage: 'it-IT',
    isPartOf: { '@id': SITO },
    about: { '@id': ORG },
    primaryImageOfPage: { '@type': 'ImageObject', url: url(opts.og) },
    ...(opts.briciole ? { breadcrumb: { '@id': url(`${opts.path}#breadcrumb`) } } : {}),
  };
}

export function briciole(path: string, voci: Briciola[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': url(`${path}#breadcrumb`),
    itemListElement: voci.map((v, i) => ({ '@type': 'ListItem', position: i + 1, name: v.nome, item: url(v.path) })),
  };
}
