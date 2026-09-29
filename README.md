# Sankalp Vats — Portfolio

Personal portfolio built with TypeScript, React, Next.js-compatible Vinext, Tailwind CSS, Radix tabs and Lucide icons. Configured for deployment on Vercel. The original Sites deployment remains separate.

## Content

- `lib/portfolio.ts`: project descriptions, repository URLs, contact links and skill groups.
- `app/page.tsx`: responsive portfolio sections and small client-side interactions.
- `app/globals.css`: dark theme, layouts, CSS visualizations and reduced-motion support.
- `app/layout.tsx`: metadata and Person structured data.
- `app/robots.ts` / `app/sitemap.ts`: SEO endpoints.

## Development

Install using the selected pnpm lockfile. `pnpm dev` starts development; `pnpm build` produces the Next.js production application; `pnpm start` serves it locally. `pnpm exec tsc --noEmit` checks types. The Vercel build uses the Next.js framework preset and the settings in `vercel.json`.

## Updating the portfolio

The supplied original resume is available at `public/Sankalp-Vats-Resume.pdf`; all four resume links download this file. CPI is 8.80 and expected graduation is 2028, as corrected by the owner. Add confirmed LeetCode and Codeforces URLs in `lib/portfolio.ts` and wire them into the profile areas. Missing project repositories are visibly marked. No nonexistent links are emitted.

All professional and academic statistics come from the provided portfolio brief and are labeled as previously recorded, not live. Project previews are conceptual HTML/CSS/SVG interfaces. The forecasting line chart is illustrative, not an evaluation chart. StudyForge is explicitly in development. The Taxi-demand repository was not associated with the forecasting metrics because its README describes a different dataset. Whispr, CodeSync and Car Price Predictor source links were checked using GitHub.

Native navigation, expandable project details, accessible category tabs, email/copy controls and reduced-motion handling work without any external API or persistence. No trackers or contact-form backend are included. The CodeSync demo URL is the link published by its repository, rather than an uptime guarantee.

## Deploy on Vercel

1. Import `sankalpvats/Portfolio` from GitHub in Vercel.
2. Use the repository root and Next.js framework preset.
3. Keep the build/install settings from `vercel.json`. No API keys or database configuration are required.
4. Deploy. Canonical links, the sitemap and structured metadata use Vercel's production hostname automatically.

The repository includes the original hosting helpers for reference, but the standard dev/build/start scripts now run Next.js directly. The uploaded resume is bundled as a static PDF.
