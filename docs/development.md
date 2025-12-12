# Developer Guide

## Adding a New Page

1.  **Create the Directory**:
    Create a new folder inside `src/app/[locale]/` with the name of your route (e.g., `about`).

2.  **Create the Page Component**:
    Inside the new folder, create a `page.tsx` file.

    ```tsx
    // src/app/[locale]/about/page.tsx
    import { useTranslations } from 'next-intl';

    export default function AboutPage() {
      const t = useTranslations('AboutPage');

      return (
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">{t('title')}</h1>
          <p>{t('description')}</p>
        </main>
      );
    }
    ```

3.  **Add Translations**:
    Add the corresponding keys to `messages/en.json` and `messages/fr.json`.

    ```json
    // messages/en.json
    {
      "AboutPage": {
        "title": "About Us",
        "description": "Learn more about our community."
      }
    }
    ```

## Internationalization (i18n)

- **Hook**: Use `useTranslations('Namespace')` to retrieve translated strings.
- **Routing**: Links should generally use the `Link` component from `next/link` or `navigation` (if configured with `next-intl`'s navigation wrapper) to preserve the locale. *Note: Check `src/components/Menu.tsx` for examples.*
- **Locale Switching**: The middleware automatically handles locale detection. To switch locales, link to `/fr/...` or `/en/...`.

## Styling

The project uses **Tailwind CSS** for styling.

### Colors
Custom colors are defined in `tailwind.config.ts` and `src/app/globals.css` using CSS variables.
- **Primary**: `bg-primary`, `text-primary` (Blue-ish)
- **Secondary**: `bg-secondary`, `text-secondary` (Gold/Yellow-ish)
- **Custom Brand Colors**:
    - `#865B5B` (Brown/Reddish) - Used for buttons and accents.
    - `#FBFAF6` (Off-white) - Used for backgrounds.
    - `#A5BEC3` (Blue-Grey) - Used for section backgrounds.

### Fonts
Fonts are configured in `src/app/layout.tsx` and exposed as CSS variables:
- **Martel**: `--font-martel` (Serif, used for headings)
- **Geist Sans**: `--font-geist-sans` (Sans-serif, used for body text)

### Animations
**Framer Motion** is used for animations.
Example:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Icons
SVGs are often used directly as components (e.g., `src/components/BahaiStar.tsx`) or imported from `public/`.
