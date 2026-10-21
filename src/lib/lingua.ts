// Lingue del sito: italiano (radice) e inglese (/en/). La lingua si ricava dall'indirizzo della pagina,
// così ogni componente la conosce senza doverla ricevere come prop.
export type Lingua = 'it' | 'en';

export const lingua = (url: URL): Lingua => (url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'it');

/** tr('testo italiano', 'English text') */
export const traduttore = (L: Lingua) => (it: string, en: string) => (L === 'en' ? en : it);

/** Sovrappone i campi .en di un oggetto dati quando la lingua è inglese */
export function loc<T extends object>(o: T, L: Lingua): T {
  const en = (o as { en?: Partial<T> }).en;
  return L === 'en' && en ? { ...o, ...en } : o;
}

/** Percorso della stessa pagina nell'altra lingua */
export const percorsoIn = (path: string, verso: Lingua) => {
  const it = path.replace(/^\/en(?=\/|$)/, '') || '/';
  return verso === 'en' ? (it === '/' ? '/en/' : `/en${it}`) : it;
};

/** Ruoli del team in inglese */
export const ruoloEn: Record<string, string> = { Architetto: 'Architect', Ingegnere: 'Engineer', Geometra: 'Surveyor' };

export const dataEstesa = (iso: string, L: Lingua = 'it') =>
  new Date(`${iso}T12:00:00`).toLocaleDateString(L === 'en' ? 'en-GB' : 'it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
