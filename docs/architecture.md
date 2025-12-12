# System Architecture

## Directory Structure
The project follows the standard Next.js App Router structure with a `src` directory.

```
src/
├── app/                 # App Router pages and layouts
│   ├── [locale]/        # Localized routes (en, fr)
│   ├── globals.css      # Global styles
│   └── layout.tsx       # Root layout
├── components/          # Reusable UI components
├── lib/                 # Utility functions
├── middleware.ts        # Next.js middleware (for i18n)
└── i18n.ts              # i18n configuration
```

## Routing & Internationalization
The application uses **[next-intl](https://next-intl-docs.vercel.app/)** for internationalization.

- **Middleware**: The `middleware.ts` file handles locale detection and redirection.
- **Locales**: Supported locales are `fr` (default) and `en`.
- **Dynamic Routing**: All pages are nested under `[locale]` to ensure the language is accessible in the URL (e.g., `/fr/vision`, `/en/vision`).
- **Translation Files**: Content strings are stored in `messages/fr.json` and `messages/en.json`.

## Key Components

### Layout (`src/app/[locale]/layout.tsx`)
The root layout for localized pages. It:
- Sets up the `html` tag with the correct `lang` attribute.
- Loads fonts (Geist, Geist Mono, Martel).
- Wraps the application in `NextIntlClientProvider` to make translations available to client components.
- Includes the `Menu` component for navigation.

### Menu (`src/components/Menu.tsx`)
A responsive navigation bar that:
- Handles navigation links.
- Uses `framer-motion` for animations (slide-down on load, mobile menu expand/collapse).
- Supports smooth scrolling for anchor links (e.g., `#section-id`).

### UI Components
Reusable components located in `src/components`:
- **Hero.tsx**: The main hero section with a background image and welcome text.
- **Section.tsx**: A generic section wrapper for consistent spacing and layout.
- **ActivityBox.tsx**: Displays individual activities with a title, description, and image.
- **BahaiStar.tsx**: SVG component for the Bahá'í star icon.
