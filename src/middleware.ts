import { defineMiddleware } from 'astro:middleware';
import { site } from './data/site';

// Pagine inglesi (/en/…): i link interni dei componenti sono scritti in italiano ("/progetti/…");
// qui, alla generazione della pagina, ricevono il prefisso /en. Restano invariati i file statici
// e i link marcati data-lingua (il selettore di lingua).
const STATICI = /^\/(en(\/|$)|img\/|file\/|_astro\/|favicon|apple-touch-icon|icon-|site\.webmanifest|sitemap|llms|robots)/;
const DOMINIO = site.dominio.replace(/\/$/, '');
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// URL di pagina nel JSON-LD (non la radice "/#organizzazione" / "/#sito", che identificano lo studio in entrambe le lingue)
const URL_LD = new RegExp(`"${esc(DOMINIO)}(/[^"#]*)(#[^"]*)?"`, 'g');

export const onRequest = defineMiddleware(async (ctx, next) => {
  const res = await next();
  const inglese = ctx.url.pathname === '/en' || ctx.url.pathname.startsWith('/en/');
  if (!inglese || !(res.headers.get('content-type') ?? '').includes('text/html')) return res;
  const testo = await res.text();
  // Scritto disponibile solo in italiano: il JSON-LD resta in it-IT
  const soloItaliano = /class="prose corpo[^"]*"[^>]*lang="it"|lang="it"[^>]*class="prose corpo/.test(testo);
  const html = testo
    .replace(/<a\b[^>]*>/g, (tag) => {
      if (tag.includes('data-lingua')) return tag;
      return tag.replace(/\shref="(\/[^"]*)"/, (m, href: string) => (STATICI.test(href) ? m : ` href="/en${href}"`));
    })
    .replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g, (_m, a: string, json: string, c: string) => {
      const out = json
        .replace(URL_LD, (m, p: string, hash = '') => (p === '/' && /^#(organizzazione|sito)$/.test(hash) ? m : STATICI.test(p) ? m : `"${DOMINIO}/en${p}${hash}"`))
        .replace(/"inLanguage":"it-IT"/g, soloItaliano ? '"inLanguage":"it-IT"' : '"inLanguage":"en-GB"');
      return a + out + c;
    });
  return new Response(html, { status: res.status, headers: res.headers });
});
