import type { MetaData } from '~/types';

const TITLE_MAP: Record<string, string> = {
  '/': 'Företagsresor till Montenegro | Mediterano Bay',
  '/resor': 'Resor – Företag, grupper och sport',
  '/resor/foretagsresor': 'Företagsresor – Teambuilding och konferens',
  '/resor/gruppresor': 'Gruppresor & konferensresor till Balkan',
  '/resor/sportresor': 'Sportresor – Aktivitet och gemenskap',
  '/kusten': 'Kusten – Adriatiska upplevelser',
  '/inlandet': 'Inlandet – Nationalparker och berg',
  '/aktiviteter': 'Aktiviteter – Vandring, cykel, hav',
  '/hotell': 'Hotell – Utvalt boende',
  '/boka': 'Boka – Resepaket och utflykter',
  '/utflykter': 'Utflykter – Guidad inspiration',
  '/kontakt': 'Kontakta oss – Mediterano Bay',
  '/contact': 'Kontakta oss – Mediterano Bay',
  '/om': 'Om Mediterano Bay – resebyrå för företag & grupper',
  '/reseinfo': 'Reseinfo – Praktiskt inför resan',
  '/resevillkor': 'Resevillkor',
  '/blogg': 'Reseguider & inspiration från Balkan',
  '/belgrad': 'Företagsresa till Belgrad – kultur, flodliv & konferens',
  '/kotor': 'Företagsresa till Kotor – konferens vid Adriatiska havet',
};

const DESC_MAP: Record<string, string> = {
  '/': 'Skräddarsydda företags- och gruppresor till Montenegro och Balkan. Konferens, teambuilding och upplevelser med lokal expertis och hållbara val.',
  '/resor/foretagsresor': 'Skräddarsydda företagsresor med teambuilding, workshops och upplevelser i Montenegro.',
  '/resor/gruppresor': 'Utforska våra färdiga paket för gruppresor, konferenser och företagsresor i Montenegro, Serbien och Bosnien. Planera nästa resa med Mediterano Bay.',
  '/kusten': 'Upptäck Montenegros kust med städer som Budva, Kotor och Herceg Novi – hav, historia och puls.',
  '/inlandet': 'Vandra i nationalparker, besök kanjoner och berg. Montenegro bortom kusten.',
  '/aktiviteter': 'Vandring, cykel, kajak, båt och matupplevelser – välj dina favoriter.',
  '/hotell': 'Vårt urval av hotell vid kusten och i städer – kvalitet och lägen vi själva gillar.',
  '/boka': 'Färdiga paket och utflykter. Snabb offert och lokal expertis.',
  '/utflykter': 'Guidad inspiration för halvdag och heldag – kust, kultur och natur.',
  '/kontakt': 'Kontakta oss för offert på företags- eller gruppresa till Balkan. Snabb återkoppling, skräddarsydd planering och lokal närvaro i Montenegro.',
  '/contact': 'Kontakta oss för offert på företags- eller gruppresa till Balkan. Snabb återkoppling, skräddarsydd planering och lokal närvaro i Montenegro.',
  '/om': 'Vi är en svensk resebyrå specialiserad på företags- och gruppresor till Balkan. Vi skapar upplevelser som bygger relationer och stärker team.',
  '/blogg': 'Reseguider, tips och inspiration för företagsresor, konferenser och teambuilding i Montenegro och hela Balkan.',
  '/belgrad': 'Upptäck Belgrad med ditt företag. Vi ordnar hotell, aktiviteter och konferenspaket med lokal touch. Perfekt för teambuilding och nätverkande.',
  '/kotor': 'En unik kombination av kust, historia och modern konferensmiljö. Kotor är perfekt för företag som söker inspiration och samhörighet.',
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
