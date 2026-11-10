# Qodiriy Aqlliev

Personal website built with Next.js 15, React 19 and Tailwind CSS 4. No other runtime dependencies.

## Design

Cream `#F3EEE3`, ink `#111111` and burnt orange `#D9541E`. Editorial typography, the original portrait and responsive layouts.

## Local development

```sh
npm ci
npm run dev
```

Use the localhost address printed by Next.js. Run `npm run build` to check the production build.

## Content

Edit `content/site.ts` for the hero line, background, work history, education, the learning block and contact links. The portrait is `public/portrait.jpg`.

To show LinkedIn, set `site.linkedin` to the profile URL. To show a CV link, add `public/cv.pdf` and set `site.cv` to `"/cv.pdf"`. Empty values are hidden.

## Features

- One page: hero, background, learning, contact
- Copy-email button and mailto/social links
- Keyboard focus styles, a skip link and reduced-motion support
- Social preview image and structured metadata

## Deployment

The existing Vercel project is `aura-web`. The public URL is https://aura-web-murex.vercel.app/.
No environment variables or paid services are required by the app.
