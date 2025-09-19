// Lightweight client-side search utility with optional Fuse.js lazy loading
export interface SearchItem { title: string; excerpt: string; url: string; slug?: string }

let cache: SearchItem[] | null = null;
let fuse: any = null;

async function loadIndex(): Promise<SearchItem[]> {
  if (cache) return cache;
  const res = await fetch('/blog-index.json');
  if (!res.ok) return [];
  cache = await res.json();
  return cache as SearchItem[];
}

function basicFilter(items: SearchItem[], q: string): SearchItem[] {
  const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];
  return items.filter(it => {
    const hay = (it.title + ' ' + it.excerpt).toLowerCase();
    return tokens.every(t => hay.includes(t));
  }).slice(0, 12);
}

export async function search(q: string): Promise<SearchItem[]> {
  if (!q.trim()) return [];
  const items = await loadIndex();
  // Try fuse for fuzziness if loaded
  if (!fuse && (await maybeLoadFuse())) {
    fuse = new (window as any).Fuse(items, { keys: ['title', 'excerpt'], threshold: 0.4, ignoreLocation: true });
  }
  if (fuse) {
    return fuse.search(q).slice(0, 12).map((r: any) => r.item);
  }
  return basicFilter(items, q);
}

async function maybeLoadFuse(): Promise<boolean> {
  if ((window as any).Fuse) return true;
  try {
    await import('https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js');
    return !!(window as any).Fuse;
  } catch {
    return false;
  }
}
