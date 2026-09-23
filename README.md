# Arabix Tech

Bilingual (English / Arabic, RTL-aware) marketing website for Arabix Tech, a Dubai-based
manufacturer and supplier of LED and digital display screens.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4 (CSS-based theme in [`src/app/[locale]/globals.css`](src/app/[locale]/globals.css))
- [`next-intl`](https://next-intl.dev) for i18n/routing, with automatic `dir="rtl"` on Arabic
- All product and case-study content lives in `src/data/` for easy swapping

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) (redirects to `/en`). Switch to Arabic
via the language switcher in the header/footer, or visit `/ar` directly.

## Project structure

```
src/
  app/
    icon.tsx              generated mosaic favicon
    [locale]/
      layout.tsx           root layout: fonts, html dir/lang, header/footer
      globals.css          design tokens (colors, fonts, spacing) + base styles
      page.tsx              Home
      products/page.tsx      Our Products (filterable grid)
      products/[slug]/page.tsx   Product detail
      work/page.tsx           Our Work (filterable case studies)
      work/[slug]/page.tsx    Case study detail
      contact/page.tsx         Contact / Request a Quote
  components/               Header, Footer, Button, ProductCard, SpecTable,
                             CaseStudyCard, LanguageSwitcher, icons, etc.
  data/
    products.ts              placeholder product catalogue (swap with real data)
    case-studies.ts           placeholder portfolio (swap with real data)
    types.ts                  shared types
  messages/
    en.json / ar.json         all UI copy, per locale
  i18n/                       next-intl routing/navigation config
```

## Swapping in real content

- **Products & specs**: edit `src/data/products.ts`. Each product has bilingual
  `name`/`tagline`/`description`, an `images` array (currently `picsum.photos` placeholders),
  and a `specs` object rendered in the mono spec table.
- **Case studies**: edit `src/data/case-studies.ts` the same way.
- **UI copy**: edit `src/messages/en.json` and `src/messages/ar.json`.
- **Images**: product/case-study photos currently point to `/public/images/commons/` — real
  (freely licensed, Wikimedia Commons) photos chosen for topical relevance as placeholders. See
  [`public/images/commons/CREDITS.md`](public/images/commons/CREDITS.md) for attribution. Swap
  these for proprietary product photography when available; the `img()` helper in each data file
  is the single place that resolves image paths.
- **Datasheets**: the "Download Datasheet" button on product pages currently links to a
  placeholder path (`/placeholder-datasheet.pdf`) — add real PDFs and update the link.
- **Contact form**: `src/components/ContactForm.tsx` is a placeholder (no backend). Wire it up
  to an API route, form service, or CRM as needed.

## Brand system

Colors, fonts and spacing are defined as Tailwind v4 theme tokens in
[`src/app/[locale]/globals.css`](src/app/[locale]/globals.css) (`@theme` block) — see that file
for the full "Glass Blue" / "Graphite Chrome" / "Foil Gold" palette and the Saira / Tajawal /
IBM Plex Sans / IBM Plex Mono type system.
