// Rewrap — English copy. Source of truth for structure: every other language file must
// expose the same keys and the same array lengths (see src/i18n/index.js and README.md).
export default {
    meta_title: 'Rewrap — read PDFs the way small screens deserve',
    meta_desc: 'Rewrap is a PDF reader for Android and iPhone, made for small screens. Text is enlarged and re-laid out in place, never sideways. 100% on your phone: no cloud, no account, no generative AI. Reading works offline.',

    nav_features: 'Features', nav_gallery: 'Screens', nav_pricing: 'Pricing', nav_privacy: 'Privacy', nav_faq: 'Questions',
    nav_home: 'Home', nav_policy: 'Policy', nav_contact: 'Contact',
    theme_dark: 'Night', theme_sepia: 'Sepia', theme_light: 'Light',

    hero_pill: 'PDF reader for Android and iPhone',
    hero_title_a: 'Read PDFs the way ', hero_title_b: 'small screens deserve.',
    hero_sub: 'The page never grows wider than your display — text is enlarged and re-laid out in place, so nothing ever scrolls sideways. Everything runs 100% on your phone.',
    cta_play: 'Get it on Google Play', cta_ios: 'Join the iPhone beta (TestFlight)',
    hero_note: 'Free to read, always. Works fully offline. On iPhone, Rewrap is in public beta through Apple’s TestFlight app.',
    qp_reflow: 'Reflow in place', qp_scan: 'Scans read on the phone', qp_offline: 'Works offline', qp_privacy: 'No cloud, no account',

    why_eyebrow: 'Overview', why_title: 'Made for small screens.', why_sub: 'Not classic zoom, not full reflow — something better in between.',
    why: [
          ['columns', 'Reflow without breaking the page', 'Text grows and rewraps in place. Images, tables and figures stay where they belong and scale with the font — nothing scrolls sideways.'],
          ['scan', 'Scans read on the phone', 'Scanned PDFs and photographed pages are recognized right on the device. Angled photos are straightened, faint scans enhanced, errors repaired from evidence in the book itself.'],
          ['type', 'The printed letters, kept', 'Old typefaces, accents and special letters stay exactly as printed — cut from the page and redrawn sharp, not replaced by a phone font.'],
          ['lock', 'Truly private', 'No cloud, no account, no server of ours. Your books, notes and reading positions stay on your phone, and everything works in airplane mode.'],
        ],

    cmp_eyebrow: 'The difference', cmp_title: 'Same page. Readable.',
    cmp_sub: 'On the left, the original two-column page. On the right, the same page reflowed: larger text, the figure kept in place.',
    cmp_alt: 'Rewrap showing the same academic PDF twice on an iPhone: the original two-column page, and the reflowed page with larger text, the figure kept in place.',

    gallery_eyebrow: 'Screens', gallery_title: 'See it on a real book.', gallery_sub: 'Screenshots from the app, on a real phone.',
    themes_eyebrow: 'Themes', themes_title: 'Light, Sepia, Night — and pure black.', themes_sub: 'The themes recolour the real page too, while photos keep their colours. Build your own if you like.',
    gallery_prev: 'Previous', gallery_next: 'Next',
    shots: [
          ['Original', 'The PDF exactly as printed — two columns, tiny type.'],
          ['Reflow', 'Same page width, text enlarged and re-laid out in place.'],
          ['Library', 'Pick up where you stopped — your library stays on your phone.'],
          ['Scanned books', 'Photos and scans are recognized on the device — no upload.'],
          ['Sepia', 'Themes that follow your eyes: light, sepia, night, AMOLED.'],
          ['Night', 'Comfortable in the dark, with your own text size and spacing.'],
        ],

    features_eyebrow: 'Features', features_title: 'Everything it does.', features_sub: 'Built feature by feature, measured on real books and real devices.',
    groups: [
          ['Reading, rewrapped', [
                  ['columns', 'Original | Reflow, one switch', 'A book opens instantly as the original page; one tap shows the reflowed text. Both views share the same controls.'],
                  ['bookOpen', 'Layout that holds', 'Images, tables and figures keep their place and scale with the font.'],
                  ['type', 'The printed letters, kept', 'Reuse the book’s own letters instead of a modern font — old typefaces, accents and special letters stay as printed, sharp at any size. Switch it off any time.'],
                  ['palette', 'Recoloured page', 'Sepia and Night recolour the real page too, while photos keep their colours.'],
                  ['chevronsDown', 'Auto-scroll', 'Tap the page to start, tap again to pause. Speed is yours to set, in both views.'],
                  ['fileText', 'Scroll or turn pages', 'Continuous scrolling or page by page. Any single page can be left exactly as printed.'],
                ]],
          ['Scans & photos', [
                  ['scan', 'Scans read on the device', 'Scanned books and photographed pages are recognized locally — no upload, no waiting for a server.'],
                  ['sparkles', 'Evidence-based repairs', 'Broken fonts, lost diacritics, end-of-line hyphens, bold and italic from the original.'],
                  ['globe', 'Scripts others skip', 'Greek, Cyrillic (Russian, Ukrainian, Bulgarian, Serbian) and Hungarian with a correct ő and ű — offline.'],
                  ['camera', 'Camera scanner', 'Scan pages with the camera, split double-page scans, straighten angled shots.'],
                  ['pencil', 'Fix a word once', 'Correct any word yourself, and the fix becomes a rule for every occurrence in the book.'],
                  ['image', 'Formats', 'PDF, EPUB, TXT and photos — one photo, a whole folder as one book, or several bound into a PDF. Rewrap also shows up in other apps’ “Open with” menu.'],
                ]],
          ['Listen & study', [
                  ['volume', 'Read aloud', 'Natural text-to-speech in the book’s own language. Choose the voice and speed (and the speech engine on Android), follow the spoken word, keep listening with the screen off.'],
                  ['pencil', 'Notes & highlights', 'Highlight passages and write your own notes; a small mark stays in the margin, and both hold when you change the font.'],
                  ['search', 'Search the whole book', 'Accent-insensitive search in Latin, Greek and Cyrillic that finds words in the whole book at once, even on pages not yet prepared.'],
                  ['bookmark', 'Bookmarks & position', 'Bookmarks, and a remembered position for every book.'],
                  ['list', 'Table of contents', 'The book’s own, or one built from its headings. Covers are shown as printed.'],
                  ['info', 'Tap to define', 'Look up a word in your offline dictionary.'],
                ]],
          ['Comfort & accessibility', [
                  ['palette', 'Themes', 'Light, Sepia, Night, pure-black AMOLED and custom themes.'],
                  ['type', 'Size & spacing', 'Text size remembered per book, with line and letter spacing you can adjust.'],
                  ['ruler', 'Reading ruler', 'Dims everything except the lines you are reading.'],
                  ['eye', 'Dyslexia-friendly', 'A dyslexia-friendly font and bionic bold that work even on scanned books, because the text is re-typeset.'],
                  ['globe', 'Your language', '17 interface languages, in portrait or landscape.'],
                ]],
          ['Export, convert & move', [
                  ['share', 'Convert', 'Turn any book into EPUB, TXT or DOCX with real chapters and cleaned text — or save it as a PDF with your highlights and notes as real annotations.'],
                  ['fileText', 'Your notes, exported', 'Export highlights and notes as TXT, Markdown, Anki cards or PDF.'],
                  ['package', 'Rewrap package', 'One file carries the book and all your work — position, bookmarks, highlights, notes, corrections — to another phone, Android or iPhone. A plain ZIP without Rewrap.'],
                  ['rotate', 'Safety nets', 'Automatic on-device backups, an optional cloud backup you control, and portable export and import of your reading data.'],
                  ['shield', 'Honest bug reports', 'The issue reporter attaches nothing technical without your explicit consent.'],
                ]],
        ],

    pricing_eyebrow: 'Pricing', pricing_title: 'Free to read. One unlock for the heavy work.', pricing_sub: 'One purchase, once — no subscription, no ads, no account.',
    plans: [
          ['bookOpen', 'Free, always', 'Reading itself. No page limit, no book limit, no time limit.', [
                  'Digital PDFs, EPUB and TXT, reflowed and enlarged',
                  'All themes, spacing, the dyslexia font and the reading ruler',
                  'Search, bookmarks, table of contents, your position in every book',
                  'Highlights, your own notes, and word corrections',
                  'Exporting your own highlights, notes and reading data',
                ]],
          ['unlock', 'One-time unlock', 'The heavy work, done on your phone.', [
                  'Recognizing scanned books and photographed pages',
                  'The camera scanner and perspective correction',
                  'Read aloud',
                  'Converting to EPUB, TXT, DOCX or PDF',
                  'Clean reading',
                  'Everything you already recognized or converted stays readable',
                ]],
        ],
    pricing_trial_a: '14 days, everything unlocked.', pricing_trial_b: 'New installs on Android start with a full-access trial — try it on your own books. The app tells you a few days before it ends; after that, reading stays free.',
    pricing_ios: 'On iPhone, Apple’s rules ask that you start the 14-day trial yourself: open Settings → Rewrap Premium and tap “Start the free 14-day trial”. Nothing is charged, and after the 14 days reading stays free. In the TestFlight beta, the unlock costs nothing either.',
    pricing_store: 'The unlock is bought in the store of the phone you use. Rewrap has no account and no server, so an unlock bought on Android does not carry over to iPhone, or the other way round.',

    privacy_eyebrow: 'Privacy', privacy_title: 'Private by default.', privacy_sub: 'Your books never leave your phone.',
    privacy_btn: 'Read the privacy policy',
    cards: [
          ['database', 'Local storage', 'Books, notes, highlights and reading positions are kept on your device only.'],
          ['wifiOff', 'Works offline', 'Reading — scans included — needs no internet connection.'],
          ['eyeOff', 'No tracking', 'No analytics and no advertising of our own, and no generative AI.'],
          ['lock', 'No server, no account', 'We run no server and there is nothing to sign up for.'],
          ['shield', 'Honest about exceptions', 'On Android, Google’s text-recognition library sends Google anonymous diagnostics about itself — never your pages or text. The policy lists it in full.'],
          ['fileText', 'Files you choose', 'Rewrap opens only the files you pick through the system document picker.'],
        ],

    faq_eyebrow: 'Questions', faq_title: 'Questions & quick guide.', faq_sub: 'The same questions the in-app guide answers — tap one to see the answer.',
    faqs: [
          ['Is Rewrap free?', 'Reading is free forever: digital PDFs, EPUB and TXT, reflowed and enlarged, with all the themes, search, bookmarks, your highlights, your own notes and your corrections. A one-time unlock adds the heavy work — recognizing scans, the camera scanner, read aloud, converting to other formats and clean reading. On Android, new installs get a 14-day trial with everything open; on iPhone, you start the same 14-day trial yourself, from Settings → Rewrap Premium.'],
          ['Where can I download it?', 'On Android, from Google Play. On iPhone, Rewrap is in public beta through Apple’s TestFlight app — use the “Join the iPhone beta” button on this page.'],
          ['Does it work offline?', 'Yes. Reading — including recognizing scanned books — runs on the phone, so it works in airplane mode.'],
          ['What data do you collect?', 'None of your content: we run no server and have no account system. See the privacy policy for the exact details, including the one diagnostic exception on Android.'],
          ['Which languages does it speak?', 'The app has 17 interface languages, and this site is available in nine of them. Text recognition covers Latin, Greek and Cyrillic scripts, and Hungarian with a correct ő and ű.'],
          ['How do I see the original page?', 'At the top of the screen, the Original | Reflow switch chooses what you see: the page exactly as printed, or the text enlarged and re-laid out. Both views share the same controls. In Original, pinch to zoom into a table or a figure. If a single page is better left as printed — a cover, a plate, a diagram — the left drawer offers “Show this page as the original”: that page stays as printed, remembered for next time, and still searchable.'],
          ['How do I start and stop the automatic scrolling?', 'Tap the page (or the big ▶ button) to start scrolling; tap again to pause. The speed is in the gear settings, on the Reading tab. While it scrolls, everything tucks away except the slim bar with the title and page number — and the Original | Reflow switch at the top.'],
          ['How do I turn pages like in a printed book?', 'Open the right-hand drawer and choose the horizontal arrows under “Turn pages”. Then swipe left or right, or tap the left or right edge of the screen. The vertical arrow brings back continuous scrolling. The setting applies to both Original and Reflow.'],
          ['How do I listen to the book being read aloud?', 'Tap the microphone in the action bar. The voice keeps reading with the screen off, with controls on the lock screen and your headphones. The voice and its speed (and, on Android, the engine) are in the gear settings, on the Voice tab.'],
          ['A word from a scan looks wrong — what can I do?', 'Tap the correction icon in the action bar (a keyboard on Android, an A with a text cursor on iPhone), then tap the word: a selection box appears with handles you can drag over neighbouring characters; tap the selection to correct it. The fix is saved as a rule for the whole book. If a whole scanned book reads badly, turn on “Forced OCR” (right-hand drawer or gear settings, Document tab).'],
          ['Why does the text look like the printed book, not like a phone font?', 'In Reflow, Rewrap can reuse the book’s own letters, cut from the page, instead of redrawing the text in a modern font. Old typefaces, accents and special letters stay as printed — even when the file’s text layer has lost them — and their outlines are redrawn smoothly, so they stay sharp at any size. Turn it off with “Original letters” (Text tab or right-hand drawer). The dyslexia-friendly font, bold word-beginnings and letter spacing switch the book to redrawn text, since they replace the printed letters.'],
          ['Why does a new book take a moment to reflow?', 'A new book opens instantly, showing the original page. Meanwhile the app quietly prepares the text in the background — it detects the language and, on scanned books, recognizes the pages. When you tap Reflow, you only wait for the page you are on; the rest keeps getting ready while you read, with a progress note in the bottom bar. A book you have opened before is ready at once.'],
          ['How do I move my reading to another phone?', 'In Settings, use “Export reading data” to save positions, bookmarks, highlights, notes and corrections to a file, then import it on the other phone. Or pack one book together with everything on it via “Export as → Rewrap package”: opened in Rewrap on another phone — Android or iPhone — the book comes back exactly as you left it.'],
        ],

    footer_tagline: 'A PDF reader for Android and iPhone.',
    footer_links: 'Explore', footer_contact: 'Contact', footer_email: 'Feedback',
    footer_feedback: 'Something not working, or an idea? Write to us — subject “Rewrap feedback”.',
    footer_rights: 'All rights reserved.',
    footer_marks: 'Google Play and the Google Play logo are trademarks of Google LLC. Apple and TestFlight are trademarks of Apple Inc.',

    pp_title: 'Privacy Policy',
    pp_intro: 'Rewrap is built to keep your books on your phone. This policy explains what that means in practice.',
    pp_updated: 'Last updated',
    pp_note_en: '',
    pp_summary_title: 'The short version',
    pp_summary1: 'Your books stay on your phone. Reading works with no internet connection at all — open a scanned book in airplane mode and it is still recognized and re-laid out on the device. There is no account and no advertising, we run no server, and nothing you read, write or highlight is ever uploaded.',
    pp_summary2: 'On Android, the app includes Google’s text-recognition library, and that library sends Google anonymous diagnostics about itself — never your pages and never your text. Details below.',
    pp_sections: [
          ['What we collect', [
                  '<strong>Nothing, unless you send it to us yourself.</strong> We operate no server, we have no account system, and we add no analytics or advertising. Nothing you read, write or highlight is uploaded anywhere by the app.',
                  'There is exactly one way we can see any of your content, and only you can start it. If you use <em>Report an issue</em> and choose <em>Attach journal</em>, the attached file contains the book’s file name and the text the app has recognized so far, so that the problem can be reproduced. Nothing is sent by the app itself: the file is attached in your own email app, where you see it — and can remove it — before anything leaves. Choose <em>Just my message</em> and nothing technical is attached at all.',
                ]],
          ['What stays on your device', [
                  '<strong>Your documents</strong> — opened only through the system document picker (Android’s or iOS’s); Rewrap accesses just the files you choose.',
                  '<strong>Your reading data</strong> — positions, bookmarks, highlights, notes, per-book settings and the on-device text cache.',
                  '<strong>App settings</strong> — themes, fonts and preferences.',
                  'All of this is stored locally in the app’s private storage and is removed when you uninstall the app, except for what a backup keeps (see below).',
                ]],
          ['Backups', [
                  '<strong>Android.</strong> Rewrap has a setting — off by default — that lets Android’s own Auto Backup include the app’s data in your device’s Google backup, so your library and notes can return after a reinstall. This uses Google’s backup service under your Google account and Google’s terms; Rewrap itself still has no server and receives none of your data. <strong>One exception:</strong> the date your free trial started is kept in your device’s Google backup even when the optional backup is off, so that reinstalling does not restart the trial. It is a single date and contains nothing about what you read.',
                  '<strong>iPhone.</strong> Like any iOS app, Rewrap’s data is part of your iPhone’s iCloud backup by default, under your Apple account and Apple’s terms. Rewrap has a switch for this in Settings → Cloud backup. Rewrap itself still has no server and receives none of your data.',
                ]],
          ['Permissions and network', [
                  '<strong>Android.</strong> Rewrap uses a foreground service and a wake lock so Read Aloud can keep going with the screen off, notifications for the lock-screen playback controls, and the billing permission for the one-time purchase, which the Play Store handles. It asks for no storage permission: files are opened only through Android’s document picker.',
                  'The Android app also lists the internet and network-state permissions. We did not add them, and our own code never opens a network connection. They belong to Google’s ML Kit library, which uses them for the diagnostics described below and to fetch the camera-scanner module from Google Play services the first time you use it.',
                  '<strong>iPhone.</strong> Rewrap opens files only through the iOS document picker.',
                  'Reading itself needs no connection: text recognition runs from models built into the app. Only two things involve the network — the camera scanner’s one-time module download on Android, and the store purchase — and neither is reading.',
                ]],
          ['Text recognition', [
                  '<strong>Android.</strong> Rewrap uses Google’s ML Kit to recognize scanned pages, to detect a book’s language, and for the camera scanner. It runs on your device: <strong>page images and the recognized text are never sent to Google.</strong> Google states this in its own <a href="https://developers.google.com/ml-kit/terms">ML Kit terms</a>.',
                  'The library does send Google diagnostics about itself: your device model and Android version, the app’s name and version, an installation identifier, how long recognition took, error codes, and — when a book’s language is detected — which language that was. It is sent over HTTPS and Google does not pass it to third parties. There is no setting to switch it off; if that matters to you, it is the one thing to weigh before installing. Google describes it on its <a href="https://developers.google.com/ml-kit/android-data-disclosure">ML Kit data disclosure page</a>.',
                  '<strong>iPhone.</strong> Recognition is done on the device by Apple’s Vision framework and by Tesseract. Rewrap sends your pages and text nowhere. Any system diagnostics your iPhone shares with Apple are governed by your iOS settings and Apple’s privacy policy.',
                ]],
          ['Purchases', [
                  'The one-time unlock is handled entirely by the store — Google Play on Android, Apple’s App Store on iPhone — and we never see your payment details. On iPhone, the free 14-day trial is also an App Store item, which you take yourself; its start date comes from Apple, and the app keeps a copy of it on the phone to know when the trial ends.',
                  'Rewrap has no account, so an unlock bought on one platform does not carry over to the other.',
                ]],
          ['Children', [
                  'Rewrap is safe for all ages. We collect nothing from anyone, including children, and there is no account, no advertising and no user-to-user content. The only data leaving an Android device is Google’s technical diagnostics described above, which contains nothing personal about the reader.',
                ]],
          ['Changes', [
                  'If this policy ever changes, the new version will appear on this page with an updated date.',
                ]],
        ],
    pp_contact_title: 'Contact', pp_contact_text: 'Questions about privacy? Email',
};
