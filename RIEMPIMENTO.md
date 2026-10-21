# Riempimento — Marcello Franca architetto

La base svuotata è nel tag git `base-pulita`. Questo commit la riempie con i contenuti del sito
attuale https://www.marcellofranca.it/ (WordPress), riscritti in italiano.

## Fonti

- Identità: footer, homepage e pagina About del sito attuale.
- Progetti: le 23 pagine progetto del menu (Built Space, Urban Space, Set up Space, Colored space,
  Living space, Industrial Design, Urban Plan, Other Works), raggruppate in 6 categorie.
- Testi di studio, servizi e metodo: About, introduzioni delle categorie, "Philosophy",
  "L’immagine della Città", pagina Pubblicazioni.
- Foto: le immagini pubblicate sul sito, nelle misure reali (`media/`, non versionata), convertite
  da `npm run immagini` in `public/img/`.

## Scelte

- Un solo professionista: la sezione team della home non compare (meno di 2 persone); in /studio/ i
  numeri sono `numeriStudio` in `src/data/sezioni.ts`.
- Logo: marchio originale (squadra e voluta) ricolorato + nome in Georgia, alla misura 882×182.
  Favicon "MF" su terracotta. Marchio decorativo della CTA ridisegnato in vettoriale dalla squadra.
- Palette: accento terracotta `#a24a2a` (tema dei Piani del Colore), contrasto AA su bianco (5,9:1).
- Progetti con soli disegni o rendering piccoli: pagina senza foto grande in testa (`hero: false`).

## Dati da chiedere al cliente

- Indirizzo dello studio (via, CAP): non pubblicato. Ora il sito mostra solo "Pesaro (PU)" e la
  mappa è centrata sulla città (`site.geo`, segnato `DA COMPILARE`).
- PEC, numero di iscrizione all’Ordine degli Architetti, codice fiscale: assenti.
- Ritratto in buona risoluzione (ora 200×200 px).
- Conferma della palette e del logo composto.
- Modulo contatti: `site.form.attivo = false` finché il sito non è pubblicato su Netlify.
- Privacy e cookie policy: il sito attuale non le ha; quelle della base vanno verificate.
