# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

No test suite is configured.

## Architecture

**Next.js 15 App Router** site for the Bahá'í Community of Montreal with dual-language support (French/English).

### Routing

All pages live under `src/app/[locale]/`. French (`fr`) is the default locale. The middleware in `src/middleware.ts` auto-prepends the locale. Navigation helpers (Link, useRouter, usePathname) come from `src/navigation.ts` — always import these instead of Next.js defaults to preserve locale context.

### Internationalization

Uses `next-intl`. Translation files are at `messages/en.json` and `messages/fr.json`, organized hierarchically by page/component (e.g., `HomePage.title`, `Menu.about`).

- **Client components**: `useTranslations('SectionKey')`
- **Server components**: `await getTranslations('SectionKey')`
- **Async params**: Pages receive `params: Promise<{ locale: string }>` (React 19 pattern) — always `await` params before use.

When adding a new string, add it to both `en.json` and `fr.json`.

### CMS (Contentful)

`src/lib/contentful.ts` exports `getNews(locale)` and `getNewsItem(id, locale)`. The locale mapping converts `en` → `en-US` for Contentful queries. News pages use `export const dynamic = 'force-dynamic'` to avoid stale cached data.

Required environment variables: `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN`.

### Contact / Email

`src/app/api/contact/route.ts` handles POST submissions and sends email via **Resend**.

Required environment variables: `RESEND_API_KEY`, `CONTACT_EMAIL`.

### Styling

- **Tailwind CSS** with custom design tokens defined as CSS variables in `src/app/globals.css`
- Key brand colors: background `#F9F7F2`, accent `#865B5B` (rust), secondary `#507371` (teal)
- Font: **Martel** (local variable font, multiple weights) via `--font-martel`
- Use `cn()` from `src/lib/utils.ts` for conditional class merging

### Animations

- **Framer Motion** for page transitions and staggered animations
- **react-intersection-observer** for scroll-triggered reveals (`triggerOnce: true` is standard)
- Most components are `'use client'` due to animation requirements

### Component Patterns

Shared components in `src/components/` are mostly client components. Pages compose server components (data fetching) with client components (interactivity/animation). The `Section` component wraps content blocks with scroll-triggered animation. `ActivityBox` is used for activity/feature cards with staggered delays.
