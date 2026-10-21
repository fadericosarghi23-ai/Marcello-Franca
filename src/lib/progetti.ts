import { progetti, categorie, ordinePortfolio, type Progetto, type CategoriaId } from '../data/progetti';

export const perSlug = (slug: string) => {
  const p = progetti.find((x) => x.slug === slug);
  if (!p) throw new Error(`Progetto inesistente: ${slug}`);
  return p;
};
export const categoria = (id: CategoriaId) => categorie.find((c) => c.id === id)!;

/** Progetti nell'ordine del portfolio */
export const portfolio: Progetto[] = [
  ...ordinePortfolio.filter((s) => progetti.some((p) => p.slug === s)).map(perSlug),
  ...progetti.filter((p) => !ordinePortfolio.includes(p.slug)),
];

export const diCategoria = (id: CategoriaId) => portfolio.filter((p) => p.categorie.includes(id));

/** Precedente / successivo nell'ordine di pubblicazione (ciclico) */
export function vicini(p: Progetto) {
  const i = progetti.indexOf(p);
  const n = progetti.length;
  return { prev: progetti[(i - 1 + n) % n], next: progetti[(i + 1) % n] };
}

export function simili(p: Progetto): Progetto[] {
  if (p.simili?.length) return p.simili.map(perSlug);
  return diCategoria(p.categorie[0]).filter((x) => x !== p).slice(0, 3);
}

export const nomiCategorie = (p: Progetto) => p.categorie.map((c) => categoria(c).nome);

/** Testo semplice dalla descrizione HTML */
export const testoPiano = (html: string) =>
  html
    .replace(/<li>/g, ' • ')
    .replace(/<\/(p|li)>/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
