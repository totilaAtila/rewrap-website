# rewrap-website

Landing page and privacy policy for **Rewrap**, a native Android e-book reader
specialised for PDFs — the page never grows wider than your screen; text is
enlarged and re-laid out in place.

Live at **https://rewrap-pdf.vercel.app**

## What is here

```
index.html          the landing page (single file, no build step, no JavaScript)
privacy/index.html  the privacy policy
```

No framework, no dependencies, no tracking. What you see in the source is what
the browser gets.

## How it deploys

Pushing to `main` publishes automatically — the repository is connected to the
Vercel project `rewrap`.

That was not always true, and it cost a silent failure worth recording: the
project used to be linked only at the *folder* level, through a local
`.vercel/project.json`, so deployments had to be made by hand with the CLI. A
push would succeed and publish nothing, and the live page quietly stayed
behind. If the automatic deployment ever stops, check **Settings → Git** in the
Vercel project before assuming the push worked.

To publish manually, from this folder:

```
vercel --prod
```

## A rule for this page

Every claim here must be true of the app as it ships. The page has already been
audited once for statements that had drifted ahead of reality, and once for
promising a Google Play testing track the app was not on. When a feature or a
release track changes, this page changes with it — the app is what makes the
promises honest, not the copy.

The application itself lives in a separate, private repository.
