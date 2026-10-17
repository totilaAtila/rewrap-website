# rewrap-website

Landing page and privacy policy for **Rewrap**, a PDF reader for Android and iPhone.
Live at **https://rewrap-pdf.vercel.app**

Same architecture as the Arise site: static **HTML + CSS + vanilla JS (ES modules)**, no
framework, no build step, no tracking.

## Layout

```
index.html          static markup (home + privacy are two <main> blocks of one page)
src/styles.css      all styles; three themes via [data-theme]: dark (Night), sepia, light
src/app.js          i18n, theme, language, routing, gallery, FAQ, pricing, scroll indicator
src/i18n/index.js   language list, detection, translations map
src/i18n/<code>.js  copy for one language — en.js is the source of truth for structure
assets/             brand icon + screenshots
hero.jpg/.webp      Original-vs-Reflow banner (also the og:image — keep the URL stable)
vercel.json         rewrites /privacy, /privacy/ and /privacy-policy to index.html
```

CONFIG at the top of `src/app.js` holds the Play and TestFlight URLs, the support e-mail and
the policy date.

## Local development

ES modules do not load over `file://`. Serve the root over HTTP and make `/privacy` fall back
to `index.html`, as Vercel does:

```
npx serve .   # or: python3 -m http.server 8000  (then open /?lang=ro; /privacy needs the rewrite)
```

## Behaviour

- **Theme** — Night / Sepia / Light, persisted in `localStorage['rewrap-theme']`; first visit
  follows `prefers-color-scheme`. An inline script in `<head>` applies it before first paint.
- **Language** — `?lang=xx` → `localStorage['rewrap-lang']` → `navigator.languages` → English.
  Nine languages: `en, de, fr, lv, lt, hu, pl, ro, ru` (the app itself has 17).
- **Routes** — `/` and `/privacy` (also `/privacy/`, `/privacy-policy`). The privacy URL is the
  one published in the stores: it must keep resolving directly to the policy.
- **Scroll indicator** — underlined nav entry + progress bar; feature groups collapse into
  accordions below 700px.

## Translations

Each language file default-exports the same keys and array shapes as `en.js`
(`why[]`, `cards[]` and `groups[][]` entries are `[icon, title, text]`; `plans[]`,
`shots[]`, `faqs[]`). Icon names are structure, not copy and must match across languages.
The full privacy policy (`pp_sections`) exists **only in English**; other languages translate
the summary and show it with a note that the English text prevails.
To add a language: copy `en.js`, drop `pp_sections`, translate, register it in `index.js`.

## A rule for this page

Every claim here must be true of the app as it ships. When a feature or a release track
changes (App Store release, iPhone purchase, new languages), this page changes with it — in
**every** language file.
