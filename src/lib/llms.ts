// Testi per i motori generativi (/llms.txt e /llms-full.txt), generati dai dati del sito.
import { site, url, indirizzoRiga } from '../data/site';
import { team, membro } from '../data/team';
import { servizi } from '../data/servizi';
import { faq } from '../data/home';
import { fasi } from '../data/metodo';
import { categorie, progetti, type Progetto } from '../data/progetti';
import { diCategoria, nomiCategorie, testoPiano } from './progetti';

const sedeRiga = `${indirizzoRiga} (${site.indirizzo.provincia}), Italia`;

const schedaBreve = (p: Progetto) =>
  `- [${p.titolo}](${url(`/progetti/${p.slug}/`)}): ${p.intervento}. ${p.luogo}.${p.importo ? ` Importo lavori: ${p.importo}.` : ''}`;

export function llms(): string {
  const r: string[] = [];
  r.push(`# ${site.nome}`, '', `> ${site.descrizione}`, '', '## Dati essenziali', '');
  r.push(`- Nome: ${site.nome} (${site.ragioneSociale})`, `- Sito: ${url('/')}`, `- Sede: ${sedeRiga}`);
  r.push(`- Telefono: ${site.telefono.testo}`, `- Email: ${site.email}`);
  if (site.pec) r.push(`- PEC: ${site.pec}`);
  if (site.piva) r.push(`- P.IVA: ${site.piva}`);
  site.social.forEach((s) => r.push(`- ${s.nome}: ${s.url}`));
  r.push(`- Aree servite: ${site.areeServite.map((a) => a.nome).join(', ')}`);
  r.push(`- Team: ${team.length} professionisti — ${team.map((m) => `${m.nome} (${m.ruolo})`).join(', ')}`);
  r.push(`- Portfolio: ${progetti.length} progetti documentati`, '');
  r.push('## Pagine principali', '');
  r.push(
    `- [Home](${url('/')}): panoramica dello studio, servizi, metodo, progetti in evidenza, FAQ e contatti.`,
    `- [Lo studio](${url('/studio/')}): chi siamo, approccio e team.`,
    `- [Servizi](${url('/servizi/')}): ${servizi.map((s) => s.nome.toLowerCase()).join(', ')}.`,
    `- [Metodo](${url('/metodo/')}): le ${fasi.length} fasi di lavoro, dal primo incontro al collaudo.`,
    `- [Progetti](${url('/progetti/')}): portfolio completo, filtrabile per categoria.`,
    `- [Contatti](${url('/contatti/')}): recapiti, mappa e modulo di contatto.`,
    `- [Versione estesa per LLM](${url('/llms-full.txt')}): testi completi di tutti i progetti.`,
    '',
  );
  r.push('## Servizi', '');
  servizi.forEach((s) => r.push(`- [${s.nome}](${url(`/servizi/#${s.id}`)}): ${s.breve}`));
  r.push('');
  categorie.forEach((c) => {
    r.push(`## Progetti — ${c.nome}`, '');
    diCategoria(c.id).forEach((p) => r.push(schedaBreve(p)));
    r.push('');
  });
  r.push('## Domande frequenti', '');
  faq.forEach((f) => r.push(`### ${f.d}`, '', f.r, ''));
  return r.join('\n');
}

export function llmsFull(): string {
  const r: string[] = [];
  r.push(`# ${site.nome} — testi completi`, '', `> ${site.descrizione}`, '');
  r.push(`Sede: ${indirizzoRiga} · Tel. ${site.telefono.testo} · ${site.email}`, '', '## Servizi', '');
  servizi.forEach((s) => {
    r.push(`### ${s.nome}`, '', ...s.testo, '', ...s.voci.map((v) => `- ${v}`), '');
  });
  r.push('## Progetti', '');
  progetti.forEach((p) => {
    const ref = membro(p.referente);
    r.push(`### ${p.titolo}`, '', `- URL: ${url(`/progetti/${p.slug}/`)}`, `- Intervento: ${p.intervento}`, `- Luogo: ${p.luogo}`);
    r.push(`- Categoria: ${nomiCategorie(p).join(', ')}`);
    if (p.progettisti) r.push(`- Progettisti e ruoli: ${p.progettisti.join('; ')}`);
    if (p.importo) r.push(`- Importo lavori: ${p.importo}`);
    if (ref) r.push(`- Referente in studio: ${ref.nome} (${ref.ruolo})`);
    r.push(`- Temi: ${p.tag.join(', ')}`, '', testoPiano(p.testo), '');
  });
  return r.join('\n');
}
