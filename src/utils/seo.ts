import type { MetaData } from '~/types';

const TITLE_MAP: Record<string, string> = {
  '/': 'MediteranoBay — Aktiva resor för grupper och företag',
  '/resor': 'Resor – Företag, grupper och sport',
  '/resor/foretagsresor': 'Företagsresor – Teambuilding och konferens',
  '/resor/gruppresor': 'Gruppresor – Skräddarsydda upplevelser',
  '/resor/sportresor': 'Sportresor – Aktivitet och gemenskap',
  '/kusten': 'Kusten – Adriatiska upplevelser',
  '/inlandet': 'Inlandet – Nationalparker och berg',
  '/aktiviteter': 'Aktiviteter – Vandring, cykel, hav',
  '/hotell': 'Hotell – Utvalt boende',
  '/boka': 'Boka – Resepaket och utflykter',
  '/utflykter': 'Utflykter – Guidad inspiration',
  '/kontakt': 'Kontakt – Hör av dig',
  '/contact': 'Kontakt – Hör av dig',
  '/om': 'Om oss – MediteranoBay',
  '/reseinfo': 'Reseinfo – Praktiskt inför resan',
  '/resevillkor': 'Resevillkor',
  '/blogg': 'Blogg – Inspiration och guider',
};

const DESC_MAP: Record<string, string> = {
  '/': 'Aktiva resor för grupper och företag i Montenegro. Skapa rum för utveckling – från kusten till bergen.',
  '/resor/foretagsresor': 'Skräddarsydda företagsresor med teambuilding, workshops och upplevelser i Montenegro.',
  '/resor/gruppresor': 'Planera er nästa gruppresa med natur, kultur och smakupplevelser – helt anpassat efter er.',
  '/kusten': 'Upptäck Montenegros kust med städer som Budva, Kotor och Herceg Novi – hav, historia och puls.',
  '/inlandet': 'Vandra i nationalparker, besök kanjoner och berg. Montenegro bortom kusten.',
  '/aktiviteter': 'Vandring, cykel, kajak, båt och matupplevelser – välj dina favoriter.',
  '/hotell': 'Vårt urval av hotell vid kusten och i städer – kvalitet och lägen vi själva gillar.',
  '/boka': 'Färdiga paket och utflykter. Snabb offert och lokal expertis.',
  '/utflykter': 'Guidad inspiration för halvdag och heldag – kust, kultur och natur.',
  '/kontakt': 'Kontakta MediteranoBay för offert eller frågor om resor till Montenegro.',
  '/contact': 'Kontakta MediteranoBay för offert eller frågor om resor till Montenegro.',
  '/om': 'Vi bygger broar mellan Montenegro och Skandinavien – lokalt nätverk och premiumservice.',
  '/blogg': 'Guider, tips och berättelser från Montenegro – natur, kultur och mat.',
};

export function getDefaultPageMeta(pathname: string): MetaData {
  const path = normalize(pathname);
  // Try exact match, then first segment base
  const title = TITLE_MAP[path] || TITLE_MAP['/' + firstSegment(path)] || 'MediteranoBay';
  const description = DESC_MAP[path] || DESC_MAP['/' + firstSegment(path)] || 'Aktiva resor för grupper och företag i Montenegro.';
  return {
    title,
    description,
  } as MetaData;
}

function normalize(p: string) {
  if (!p) return '/';
  try {
    const u = new URL(p, 'https://example.com');
    p = u.pathname;
  } catch {
    // ignore URL parse
  }
  if (!p.startsWith('/')) p = '/' + p;
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p;
}

function firstSegment(p: string) {
  const seg = normalize(p).split('/').filter(Boolean);
  return seg[0] || '';
}
