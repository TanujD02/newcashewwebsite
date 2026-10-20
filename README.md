# Kaju — Cashews From Kokan’s

A responsive, one-page Next.js website built from the supplied desktop and mobile artwork. Uses TypeScript, Tailwind CSS 4, local fonts and local image assets. No environment variables, database, payment integration or API keys are needed.

## Run locally

Install Node.js 22 or newer, extract this project, then open a terminal in the `kaju-website` folder:

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

To check and run the production version:

```bash
npm run build
npm run typecheck
npm start
```

## Deploy to Vercel

### Directly from your computer

In the project folder, run:

```bash
npx vercel@latest login
npx vercel@latest --prod
```

Follow the login link and sign in to your Vercel account. At the deployment prompts:

1. Set up and deploy this folder: **Yes**.
2. Choose your own account or the intended team.
3. Link to an existing project: **No**, unless you already created the correct Kaju project.
4. Project name: **kaju-kokan-cashews**, or another available name you prefer.
5. Code directory: **./**.
6. Keep the detected **Next.js** settings. Do not select a static HTML framework or override the output directory.
7. No environment variables are required.

Vercel uploads the code, installs the locked dependencies, builds it, and returns the production URL. For future changes, run the same `npx vercel@latest --prod` command in this folder.

### From a Git repository

1. Create a repository in your Git provider and upload the contents of this folder, including `package-lock.json`. Exclude `node_modules`, `.next`, `.vercel` and local secrets; `.gitignore` covers these.
2. Visit https://vercel.com/new and import that repository.
3. Select **Next.js**. Root directory is **./** if `package.json` is at the repository root, otherwise select the folder containing it.
4. Install command: **npm ci**. Build command: **npm run build**. Leave output directory at its Next.js default.
5. Set Node.js to **22.x** or a newer supported version. No environment variables are needed.
6. Click **Deploy**.

Reference: https://vercel.com/docs/cli/deploy and https://vercel.com/docs/frameworks/full-stack/nextjs

## Content and behavior

- Six requested areas: hero, purpose, products, brand story, WhatsApp help, footer.
- The three available products use the exact weights and prices supplied. White cashews have no order button and are marked **Currently out of Stock**.
- Mobile cards use native horizontal scrolling, CSS scroll snap and four working pagination buttons; no autoplay or carousel library.
- Arrow keys also move between products when the product strip is focused.
- The menu links to the existing sections. It closes on selection, an outside click, or Escape.
- All order links open `https://wa.me/917208654862?text=I%20want%20to%20purchase%20this`.
- The help and footer WhatsApp links open the same number with `Hi` prefilled.
- Phone links use `tel:`; the address opens Google Maps search.
- Smooth section scrolling and subtle reveal transitions respect `prefers-reduced-motion`.
- Content remains visible if JavaScript is unavailable. No scroll effects hide content by default.

## Edit the website

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Page sections and copy |
| `app/globals.css` | Colors, sizing and responsive layouts |
| `lib/site.ts` | Products, prices, phone, address and links |
| `components/site-header.tsx` | Navigation menu |
| `components/product-slider.tsx` | Product cards and mobile slider |
| `components/scroll-reveal.tsx` | Reduced-motion-aware reveal behavior |
| `app/layout.tsx` | Metadata and local fonts |
| `public/images/` | All production images |
| `reference-designs/` | Original desktop and mobile design attachments |

## Image fidelity and limitations

The supplied product, logo and illustration PNGs are copied unchanged. No generated or substitute stock images are used. The hero and brand-story photographs were downloaded from the exact Unsplash links supplied.

The two supplied orchard links could not be retrieved. `orchard-heritage.jpg` and `orchard-harvest.jpg` are crops from the supplied desktop design, preserving the same imagery. They are only 159×179 and 158×179 pixels, so they will be softer on large screens. For full-resolution orchard photos, replace these two files with the originals at the same filenames; no code changes are needed. `ASSETS.md` records the corresponding source links.

The supplied Figma prototype could not be opened, so the attached desktop and mobile images are the visual references. No exact font file was provided: locally bundled Plus Jakarta Sans and Kalam approximate the bold and handwritten styles. The logo remains the supplied image.

The cream is `#FFFDE5`. Header/footer cream matches the supplied logo background, and the help section yellow matches the supplied illustration, preventing visible image rectangles.

## Verification

- `npm run build`: passed, with the home route statically prerendered.
- `npm run typecheck`: passed.
- Audited the generated HTML for the four products, exact prices, stock state, section order, all order links, Hi links, phone and map links, and image-file references.
- Confirmed that all four supplied production PNGs remain byte-for-byte identical to their original attachments.
- Browser-based desktop/mobile visual and gesture testing was not available in the build environment. Responsive rules, accessibility hooks and reduced-motion behavior are implemented, but visual equivalence and live touch interactions have not been browser-verified.

The Vercel plugin installation was confirmed, but no callable Vercel deployment tools were exposed to this build session. This handoff does not claim a live deployment.
