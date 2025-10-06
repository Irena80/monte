import type { APIRoute } from 'astro';
import { headerData, footerData } from '~/navigation';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

type Item = { title: string; excerpt: string; url: string };
type MenuEntry = { text?: string; href?: string; links?: MenuEntry[] };

function flattenMenu(menu: unknown): Array<{ text: string; href: string }> {
  const out: Array<{ text: string; href: string }> = [];
  const walk = (node: unknown): void => {
    if (!node) return;
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    if (typeof node === 'object') {
      const obj = node as Record<string, unknown>;
      const text = typeof obj.text === 'string' ? obj.text : undefined;
      const href = typeof obj.href === 'string' ? obj.href : undefined;
      if (text && href) out.push({ text, href });
      const links = Array.isArray((obj as MenuEntry).links) ? (obj as MenuEntry).links : undefined;
      if (links) walk(links as unknown);
    }
  };
  walk(menu);
  return out;
}

const extras: Array<Item> = [
  { url: '/contact', title: 'Kontakt', excerpt: 'Kontakta MediteranoBay för offert eller frågor.' },
  { url: '/boka', title: 'Boka', excerpt: 'Intresseanmälan och färdiga resepaket.' },
  { url: '/utflykter', title: 'Utflykter', excerpt: 'Aktiviteter och dagsutflykter i Montenegro.' },
  { url: '/aktiviteter', title: 'Aktiviteter', excerpt: 'Sport, äventyr och upplevelser för grupper.' },
  { url: '/reseinfo', title: 'Reseinfo', excerpt: 'Praktisk information inför resan.' },
  { url: '/resevillkor', title: 'Resevillkor', excerpt: 'Villkor och viktig information.' },
  // Experience landing pages
  { url: '/yahting', title: 'Yachting i Montenegro', excerpt: 'Seglingsresor i Adriatiska havet – från sunset tours till heldag i Blue Cave och privat katamaran.' },
  { url: '/yahting/events', title: '8 skäl att segla i Montenegro', excerpt: 'Åtta skäl för segling i Montenegro: rutter, vindar, öar, städer, läge och värde.' },
  { url: '/upplevelser/tva-upplevelser-pa-en-dag', title: 'Två upplevelser på en dag', excerpt: 'Kombinera hav och berg samma dag: förmiddag till havs, eftermiddag i bergen. Perfekt för företagsgrupper.' },
  // Offer pages
  { url: '/erbjudanden/konferensresa-kotor-bay', title: 'Konferensresa Kotor Bay', excerpt: 'Konferensresa till Kotor med boende, program, och skräddarsytt upplägg.' },
  { url: '/erbjudanden/foretagsresa-budva', title: 'Företagsresa Budva', excerpt: 'Sensommar i Budva – hotell, aktiviteter och gastronomi.' },
  { url: '/erbjudanden/teambuilding-durmitor', title: 'Teambuilding Durmitor', excerpt: 'Teambuilding i Durmitor nationalpark med aktiviteter och konferens.' },
  { url: '/erbjudanden/hostlov-herceg-novi', title: 'Höstlov Herceg Novi', excerpt: 'Höstlovserbjudande med Lazure Hotel & Marina, aktiviteter och utflykter.' },
  { url: '/erbjudanden/sensommar-budva', title: 'Sensommar Budva', excerpt: 'Sensommarpaket i Budva med boende på Hotel Budva och utvalda aktiviteter.' },
  { url: '/erbjudanden/jullov-tivat', title: 'Jullov Tivat', excerpt: 'Fira jul i Tivat – boende, aktiviteter och skräddarsytt program.' },
];

export const GET: APIRoute = async () => {
  const navItems = [...flattenMenu(headerData?.links), ...flattenMenu(footerData?.links)];
  const map = new Map<string, Item>();

  for (const it of navItems) {
    if (!it?.href) continue;
    const url = String(it.href);
    const title = String(it.text || url.replace(/\/+/, ''));
    if (!map.has(url)) map.set(url, { url, title, excerpt: '' });
  }

  for (const ex of extras) {
    if (!map.has(ex.url)) map.set(ex.url, ex);
  }

  // Add blog posts
  try {
    const posts = await fetchPosts();
    for (const p of posts) {
      const url = getPermalink(p.permalink, 'post');
      const title = p.title;
      const excerpt = p.excerpt || '';
      if (!map.has(url)) {
        map.set(url, { url, title, excerpt });
      }
    }
  } catch {
    // fail-soft: if fetching posts fails, keep nav-based items only
  }

  const items = Array.from(map.values());
  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=600' },
  });
};
