# IsoLog Landing Page

Marketing landing page for [IsoLog](https://apps.apple.com/app/id6756465278) — an isotretinoin (Accutane) medication tracker. Built with Next.js + Tailwind CSS, deployed on Vercel at **https://isolog.app**.

## Pages

- `/` — landing page (hero, features, download CTA)
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build (all pages are static)
```

## Deploy (Vercel)

1. Push this repo to GitHub.
2. In Vercel, **Add New Project** → import the repo (zero config needed — Next.js is auto-detected).
3. Project → **Settings → Domains** → add `isolog.app` and follow the DNS instructions (A record `76.76.21.21` or nameserver delegation at your registrar).

## Reddit Pixel

Tracking is prepared but disabled. To enable:

1. Reddit Ads Manager → **Events Manager** → copy your Pixel ID (looks like `a2_xxxxxxxx`).
2. Paste it into `REDDIT_PIXEL_ID` in `lib/constants.ts`.
3. Redeploy.

Once enabled, the site fires `PageVisit` on load and a `Custom` event named `Download` when a store badge is clicked (see `lib/track.ts`).

## Key files

- `lib/constants.ts` — store URLs, support email, site URL, developer URL, pixel ID
- `lib/seo.ts` — `OG_BASE`, the shared Open Graph fields
- `app/page.tsx` — landing page sections
- `components/` — Header, Footer, StoreBadges, RedditPixel, LegalLayout

### Metadata conventions

Next merges `metadata` **shallowly**, so a page that declares `openGraph` replaces
the root layout's object entirely. Two rules follow:

- Any page with its own `openGraph` must spread `OG_BASE` from `lib/seo.ts` first,
  or it silently loses `og:site_name`, `og:locale`, and `og:image`.
- Every page declares its own `alternates.canonical`. The root layout deliberately
  does not set one — it would be inherited, and a page that forgot to override it
  would self-canonicalize to the homepage and drop out of the index.
