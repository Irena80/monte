import type { APIRoute } from 'astro';

// Placeholder data tills riktig content finns
const posts = [
  { slug: 'mat-vin-i-montenegro', title: 'Mat & Vin i Montenegro', excerpt: 'Upptäck kulinariska traditioner och vingårdar.', url: '/blog/mat-vin-i-montenegro' },
  { slug: 'aventyr-vid-kusten', title: 'Äventyr vid kusten', excerpt: 'Vandring, cykling och aktiviteter längs Adriatiska havet.', url: '/blog/aventyr-vid-kusten' },
  { slug: 'kultur-historia', title: 'Kultur & Historia', excerpt: 'Kuststäder, historia och kulturupplevelser.', url: '/blog/kultur-historia' },
];

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
  });
};
