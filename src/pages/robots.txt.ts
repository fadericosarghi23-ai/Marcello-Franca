import type { APIRoute } from 'astro';
import { site, url } from '../data/site';

// Motori generativi e assistenti AI: accesso consentito (GEO)
const botAI = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'CCBot'];

export const GET: APIRoute = () => {
  const righe = [
    `# ${site.nome} — ${new URL(site.dominio).host}`,
    'User-agent: *',
    'Allow: /',
    'Disallow: /grazie/',
    'Disallow: /en/grazie/',
    '',
    '# Motori generativi e assistenti AI: accesso consentito (GEO)',
    ...botAI.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${url('/sitemap-index.xml')}`,
    '',
  ];
  return new Response(righe.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
