# Next.js v15+ Caching Demo

This repository demonstrates the four core caching mechanisms in Next.js v15+:

1. **Request Memoization** – Deduped fetches within a single render on `/products`.
2. **Data Cache** – Time-based revalidation on `/blog`.
3. **Full Route Cache** – Static/ISR pages on `/blog/[id]`.
4. **Router Cache** – Client-side prefetch & in-memory payloads on `/pokemon`.

## Tech Stack

- Next.js v15 App Router
- React 18+ (Server & Client Components)
- Tailwind CSS v4 (with Typography plugin)

## Getting Started

1. **Clone & Install**
   \`\`\`bash
   git clone <repo-url>
   cd <repo-dir>
   npm install
   \`\`\`

2. **Run Locally**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Build**
   \`\`\`bash
   npm run build
   npm start
   \`\`\`

## Caching Mechanisms Explained

### Request Memoization
- **Where:** `/products` page
- **How it works:** Multiple calls to the same fetch function within a single render are deduped
- **Test:** Check network tab to see only one API call despite multiple function calls

### Data Cache
- **Where:** `/blog` list page
- **How it works:** Server-side cache with time-based revalidation (120 seconds)
- **Test:** Refresh within 120 seconds to see cached data, after to see fresh fetch

### Full Route Cache
- **Where:** `/blog/[id]` detail pages
- **How it works:** Static rendering at build time (or via ISR)
- **Test:** Pages are rendered once and served from cache with no per-request rendering

### Router Cache
- **Where:** `/pokemon` list and detail pages
- **How it works:** Client-side prefetching and in-memory caching of RSC payloads
- **Test:** Hover links to prefetch, click for instant navigation, use refresh button to invalidate

## License

MIT
