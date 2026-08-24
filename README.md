# Benjarag.dev

Personal software-development portfolio for Benjamín Ragnar Gunnarsson. The site presents selected projects, technical skills, education, contact information, and a downloadable CV in English and Icelandic.

## Features

- English and Icelandic routes
- Responsive single-page portfolio
- Statically generated project-detail pages
- Project screenshot galleries with an accessible lightbox
- Keyboard navigation for gallery images
- Localized metadata for search engines and sharing
- Downloadable CV
- Automatic redirection from `/` to `/en`

## Technology

- Next.js 16 with the App Router and Turbopack
- React 19
- TypeScript
- CSS Modules and global design tokens
- Motion
- Lucide and React Icons

## Requirements

Install the following before running the project:

- [Node.js](https://nodejs.org/) 20.9 or newer
- npm, which is included with Node.js
- Git, if you want to clone or contribute to the repository

Check your installed versions:

```bash
node --version
npm --version
git --version
```

## Run locally

### 1. Clone the repository

```bash
git clone https://github.com/Benjarag/benjarag-dev.git
cd benjarag-dev
```

If the project is already on your computer, open a terminal in its root directory instead:

```text
C:\Users\benja\Desktop\SaekjaVinnu\benjarag-dev
```

### 2. Install dependencies

```bash
npm install
```

For a completely reproducible installation from `package-lock.json`, use this instead:

```bash
npm ci
```

Use either `npm install` or `npm ci`, not both.

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root URL redirects to the English version.

Direct language routes:

- English: [http://localhost:3000/en](http://localhost:3000/en)
- Icelandic: [http://localhost:3000/is](http://localhost:3000/is)

Changes to the source files are reflected automatically while the development server is running. Press `Ctrl+C` in the terminal to stop it.

### Use a different port

If port 3000 is already occupied:

```bash
npm run dev -- -p 3001
```

Then open [http://localhost:3001](http://localhost:3001).

## Run the production version locally

Create an optimized production build:

```bash
npm run build
```

Start that build:

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run build` again after making changes that you want to test in production mode.

## Available commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server with Turbopack |
| `npm run lint` | Check the code with ESLint |
| `npm run build` | Type-check and create an optimized production build |
| `npm run start` | Serve the previously created production build |

Before committing or deploying changes, run:

```bash
npm run lint
npm run build
```

## Project structure

```text
app/
  [locale]/                 Localized pages and layouts
    projects/[slug]/        Project-detail route
  globals.css               Reset, design tokens, and truly global styles
  icon.svg                  Website favicon
components/
  layout/                   Header and footer
  sections/                 Page sections and project details
  ui/                       Reusable interface components
data/
  projects.ts               Project metadata, technology lists, and screenshots
  skills.ts                 Skill definitions
  contact.ts                Contact and social links
i18n/
  en.ts                     English content
  is.ts                     Icelandic content
  config.ts                 Supported and default locales
  types.ts                  Translation structure
public/
  images/                   Project screenshots
  cv.pdf                    Downloadable CV
types/
  project.ts                Project types, icons, and valid slugs
```

Component-specific styles are kept beside their components in `*.module.css` files. `app/globals.css` is reserved for styles that genuinely apply across the entire website. This keeps styling scoped and follows the single-responsibility principle.

## Update website content

Most visible text is stored in the translation dictionaries:

- English: `i18n/en.ts`
- Icelandic: `i18n/is.ts`

Keep the same keys and content structure in both files. TypeScript reports an error if a required translation is missing.

Other common updates:

- Contact links: `data/contact.ts`
- Skills: `data/skills.ts`
- Project technology and image data: `data/projects.ts`
- CV: replace `public/cv.pdf` while keeping the filename
- Favicon: `app/icon.svg`

## Add project screenshots

1. Place the image files in `public/images/`.
2. Add their public paths to the project in `data/projects.ts`.
3. Set `screenshotLayout` to `phone` or `desktop`.

Example:

```ts
screenshots: [
  "/images/project-home.png",
  "/images/project-details.png",
],
screenshotLayout: "desktop",
```

Files inside `public/` are referenced from the website root, so `public/images/project-home.png` becomes `/images/project-home.png` in code.

## Add a new project

Adding a project requires coordinated changes so that project data, routing, icons, and both languages remain type-safe:

1. Add the slug to `projectSlugs` in `types/project.ts`.
2. Add any new icon name to `ProjectIcon` and connect it in the relevant project components.
3. Add the project metadata to `data/projects.ts`.
4. Add English content under `projects.items` in `i18n/en.ts`.
5. Add matching Icelandic content in `i18n/is.ts`.
6. Run `npm run lint` and `npm run build`.

Project pages are generated automatically for both languages from the registered slugs.

## Localization

Supported locales are defined in `i18n/config.ts`:

```ts
export const locales = ["en", "is"] as const;
export const defaultLocale = "en";
```

The main routes follow this pattern:

```text
/{locale}
/{locale}/projects/{project-slug}
```

The language switch preserves the current page and scroll position where possible.

## Deployment

The recommended deployment platform is [Vercel](https://vercel.com/):

1. Push the finished code to the `main` branch on GitHub.
2. Sign in to Vercel with GitHub.
3. Create a new project and import `Benjarag/benjarag-dev`.
4. Leave the detected Next.js build settings unchanged.
5. Deploy and test the generated `vercel.app` address.
6. In **Project Settings → Domains**, add `benjarag.dev` and `www.benjarag.dev`.
7. Add the exact DNS records shown by Vercel at the domain registrar.
8. Make `benjarag.dev` primary and redirect `www.benjarag.dev` to it.

No environment variables are currently required.

## Troubleshooting

### Port 3000 is already in use

Stop the other development server with `Ctrl+C`, or use another port:

```bash
npm run dev -- -p 3001
```

### Dependencies are missing or imports cannot be resolved

Install the versions recorded in the lockfile:

```bash
npm ci
```

### A newly added image does not appear

Confirm that:

- The file is inside `public/images/`.
- The path starts with `/images/`.
- The filename, capitalization, spaces, and extension match exactly.
- The image path is included in `data/projects.ts`.

### A translation causes a TypeScript error

Ensure the corresponding keys exist in both `i18n/en.ts` and `i18n/is.ts` and match the structure declared in `i18n/types.ts`.

### The production server does not start

`npm run start` requires a completed build first:

```bash
npm run build
npm run start
```
