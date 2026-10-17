// Rewrap — vanilla site logic (no framework). Copy lives in src/i18n/, one module per language.
import { translations, LANGS, detectLang, storeLang } from './i18n/index.js';

const CONFIG = {
  play: 'https://play.google.com/store/apps/details?id=com.rewrap.app',
  // Public iPhone beta. When the App Store release lands, point this at
  // https://apps.apple.com/app/id6821711498 and update cta_ios / hero_note in every language.
  ios: 'https://testflight.apple.com/join/cNFZfETe',
  // Assembled at runtime so the address is not sitting in the source as plain text.
  email: ['rewrapapp', 'gmail.com'].join('@'),
  updated: '2026-10-17',
};

const GALLERY_SRCS = [
  '/assets/screenshots/original-gs.webp', '/assets/screenshots/reflow-gs.webp',
  '/assets/screenshots/scan.webp', '/assets/screenshots/sepia.webp',
  '/assets/screenshots/night.webp',
];
// [image, i18n key of the theme's name]
const THEME_SHOTS = [
  ['/assets/screenshots/reflow.webp', 'theme_light'],
  ['/assets/screenshots/sepia.webp', 'theme_sepia'],
  ['/assets/screenshots/night.webp', 'theme_dark'],
];
const THEMES = ['dark', 'sepia', 'light'];

/* ---------- Icons ---------- */
const ICONS = {
  bookOpen: [['path', { d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' }], ['path', { d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' }]],
  columns: [['rect', { x: 3, y: 3, width: 18, height: 18, rx: 2 }], ['path', { d: 'M12 3v18' }]],
  scan: [['path', { d: 'M3 7V5a2 2 0 0 1 2-2h2' }], ['path', { d: 'M17 3h2a2 2 0 0 1 2 2v2' }], ['path', { d: 'M21 17v2a2 2 0 0 1-2 2h-2' }], ['path', { d: 'M7 21H5a2 2 0 0 1-2-2v-2' }], ['path', { d: 'M7 12h10' }]],
  type: [['path', { d: 'M4 7V4h16v3' }], ['path', { d: 'M9 20h6' }], ['path', { d: 'M12 4v16' }]],
  pencil: [['path', { d: 'M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z' }]],
  search: [['circle', { cx: 11, cy: 11, r: 8 }], ['path', { d: 'm21 21-4.3-4.3' }]],
  bookmark: [['path', { d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z' }]],
  share: [['path', { d: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' }], ['path', { d: 'm16 6-4-4-4 4' }], ['path', { d: 'M12 2v13' }]],
  camera: [['path', { d: 'M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z' }], ['circle', { cx: 12, cy: 13, r: 3 }]],
  eye: [['path', { d: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z' }], ['circle', { cx: 12, cy: 12, r: 3 }]],
  chevronsDown: [['path', { d: 'm7 6 5 5 5-5' }], ['path', { d: 'm7 13 5 5 5-5' }]],
  list: [['path', { d: 'M8 6h13' }], ['path', { d: 'M8 12h13' }], ['path', { d: 'M8 18h13' }], ['path', { d: 'M3 6h.01' }], ['path', { d: 'M3 12h.01' }], ['path', { d: 'M3 18h.01' }]],
  info: [['circle', { cx: 12, cy: 12, r: 10 }], ['path', { d: 'M12 16v-4' }], ['path', { d: 'M12 8h.01' }]],
  ruler: [['path', { d: 'M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0z' }], ['path', { d: 'm14.5 12.5 2-2' }], ['path', { d: 'm11.5 9.5 2-2' }], ['path', { d: 'm8.5 6.5 2-2' }], ['path', { d: 'm17.5 15.5 2-2' }]],
  package: [['path', { d: 'M16.5 9.4 7.5 4.21' }], ['path', { d: 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' }], ['path', { d: 'M3.27 6.96 12 12.01l8.73-5.05' }], ['path', { d: 'M12 22.08V12' }]],
  image: [['rect', { x: 3, y: 3, width: 18, height: 18, rx: 2 }], ['circle', { cx: 9, cy: 9, r: 2 }], ['path', { d: 'm21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21' }]],
  unlock: [['rect', { x: 3, y: 11, width: 18, height: 11, rx: 2 }], ['path', { d: 'M7 11V7a5 5 0 0 1 9.9-1' }]],
  check: [['path', { d: 'M20 6 9 17l-5-5' }]],
  sparkles: [['path', { d: 'M12 3 10 8l-5 2 5 2 2 5 2-5 5-2-5-2-2-5z' }], ['path', { d: 'M19 15l-1 2-2 1 2 1 1 2 1-2 2-1-2-1-1-2z' }]],
  volume: [['path', { d: 'M11 5 6 9H2v6h4l5 4z' }], ['path', { d: 'M15.5 8.5a5 5 0 0 1 0 7' }], ['path', { d: 'M19 5a10 10 0 0 1 0 14' }]],
  shield: [['path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }]],
  clock: [['circle', { cx: 12, cy: 12, r: 9 }], ['path', { d: 'M12 7v5l3.5 2' }]],
  palette: [['circle', { cx: 13.5, cy: 6.5, r: .6 }], ['circle', { cx: 17.5, cy: 10.5, r: .6 }], ['circle', { cx: 8.5, cy: 7.5, r: .6 }], ['circle', { cx: 6.5, cy: 12.5, r: .6 }], ['path', { d: 'M12 2C6.5 2 2 5.8 2 10.5S6 19 11 19h1.5a2.5 2.5 0 0 0 0-5H11a2 2 0 0 1 0-4h1c5 0 10-1.6 10-4.5C22 3.6 17.5 2 12 2z' }]],
  fileText: [['path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }], ['path', { d: 'M14 2v6h6' }], ['path', { d: 'M8 13h8' }], ['path', { d: 'M8 17h6' }]],
  moon: [['path', { d: 'M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z' }]],
  sun: [['circle', { cx: 12, cy: 12, r: 4 }], ['path', { d: 'M12 2v2' }], ['path', { d: 'M12 20v2' }], ['path', { d: 'm4.9 4.9 1.4 1.4' }], ['path', { d: 'm17.7 17.7 1.4 1.4' }], ['path', { d: 'M2 12h2' }], ['path', { d: 'M20 12h2' }], ['path', { d: 'm6.3 17.7-1.4 1.4' }], ['path', { d: 'm19.1 4.9-1.4 1.4' }]],
  phone: [['rect', { x: 7, y: 2, width: 10, height: 20, rx: 2 }], ['path', { d: 'M12 18h.01' }]],
  rotate: [['path', { d: 'M21 12a9 9 0 1 1-3-6.7' }], ['path', { d: 'M21 3v6h-6' }]],
  database: [['ellipse', { cx: 12, cy: 5, rx: 8, ry: 3 }], ['path', { d: 'M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5' }], ['path', { d: 'M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3' }]],
  wifiOff: [['path', { d: 'M1 1l22 22' }], ['path', { d: 'M16.7 16.7A6 6 0 0 0 7.3 16' }], ['path', { d: 'M12 20h.01' }], ['path', { d: 'M5 12.5a10 10 0 0 1 6-2.5' }], ['path', { d: 'M2 8.8a15 15 0 0 1 4.2-2.1' }], ['path', { d: 'M22 8.8A15 15 0 0 0 10.8 5' }]],
  eyeOff: [['path', { d: 'M3 3l18 18' }], ['path', { d: 'M10.6 10.6A2 2 0 0 0 13.4 13.4' }], ['path', { d: 'M9.9 4.2A10.8 10.8 0 0 1 12 4c5 0 9 4 10 8a11.8 11.8 0 0 1-2.5 4.1' }], ['path', { d: 'M6.2 6.2A11.8 11.8 0 0 0 2 12c1 4 5 8 10 8 1.3 0 2.5-.3 3.6-.8' }]],
  lock: [['rect', { x: 4, y: 11, width: 16, height: 10, rx: 2 }], ['path', { d: 'M8 11V7a4 4 0 0 1 8 0v4' }]],
  globe: [['circle', { cx: 12, cy: 12, r: 10 }], ['path', { d: 'M2 12h20' }], ['path', { d: 'M12 2a15 15 0 0 1 0 20' }], ['path', { d: 'M12 2a15 15 0 0 0 0 20' }]],
  download: [['path', { d: 'M12 3v12' }], ['path', { d: 'm7 10 5 5 5-5' }], ['path', { d: 'M5 21h14' }]],
  mail: [['rect', { x: 3, y: 5, width: 18, height: 14, rx: 2 }], ['path', { d: 'm3 7 9 6 9-6' }]],
  menu: [['path', { d: 'M4 6h16' }], ['path', { d: 'M4 12h16' }], ['path', { d: 'M4 18h16' }]],
  chevronLeft: [['path', { d: 'm15 18-6-6 6-6' }]],
  chevronRight: [['path', { d: 'm9 18 6-6-6-6' }]],
  chevronDown: [['path', { d: 'm6 9 6 6 6-6' }]],
  chevronUp: [['path', { d: 'm18 15-6-6-6 6' }]],
};
function icon(name, size = 22) {
  const parts = (ICONS[name] || ICONS.globe).map(([tag, attrs]) => {
    const a = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ');
    return `<${tag} ${a}></${tag}>`;
  }).join('');
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:block;flex-shrink:0">${parts}</svg>`;
}

/* ---------- State ---------- */
// /privacy and /privacy/ are rewritten to index.html by vercel.json, so the policy has a
// real, linkable URL (the App Store and Google Play both require one that resolves directly).
function routeFromPath() {
  return /^\/privacy(-policy)?\/?$/.test(window.location.pathname) ? 'privacy' : 'home';
}

function initialTheme() {
  try {
    const saved = localStorage.getItem('rewrap-theme');
    if (THEMES.includes(saved)) return saved;
  } catch (e) {}
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

const state = {
  lang: detectLang(),
  theme: initialTheme(),
  page: routeFromPath(),
  gallery: 0,
  faqOpen: { 0: true },
  groupsOpen: { 0: true }, // narrow screens only: which feature groups are expanded
  activeNav: null,
};
let t = translations[state.lang] || translations.en;
const en = translations.en;

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// On narrow screens the feature list is collapsed into accordions — 27 stacked cards
// is a very long scroll on a phone.
const narrow = window.matchMedia('(max-width: 700px)');

/* ---------- Navigation model ---------- */
// Entries are in document order so the scroll indicator only ever moves forward.
// `covers` lists every section id that lights up that entry; sections without a nav
// entry of their own (the hero) intentionally leave the indicator empty.
function navModel() {
  return state.page === 'privacy'
    ? [
        { label: t.nav_home, target: 'home', covers: [] },
        { label: t.nav_policy, target: '#policy', covers: ['policy'] },
        { label: t.nav_contact, target: '#pp-contact', covers: ['pp-contact'] },
      ]
    : [
        { label: t.why_eyebrow, target: '#overview', covers: ['overview', 'compare'] },
        { label: t.nav_gallery, target: '#gallery', covers: ['themes', 'gallery'] },
        { label: t.nav_features, target: '#features', covers: ['features'] },
        { label: t.nav_pricing, target: '#pricing', covers: ['pricing'] },
        { label: t.nav_privacy, target: '#privacy', covers: ['privacy'] },
        { label: t.nav_faq, target: '#faq', covers: ['faq'] },
      ];
}

function headerOffset() {
  const header = $('.site-header');
  return (header ? header.offsetHeight : 70) + 20;
}

/* ---------- Renderers ---------- */
function applyStaticText() {
  $$('[data-i18n]').forEach((el) => {
    const v = t[el.dataset.i18n];
    if (typeof v === 'string') el.textContent = v;
  });
  $$('[data-icon]').forEach((el) => { el.innerHTML = icon(el.dataset.icon, el.classList.contains('shield') ? 34 : 22); });
  document.title = t.meta_title;
  const desc = $('meta[name="description"]');
  if (desc) desc.setAttribute('content', t.meta_desc);
  $('#cmp-img').alt = t.cmp_alt;
}

function renderNav() {
  const html = navModel().map((n) =>
    `<button class="nav-btn" data-target="${n.target}">${n.label}</button>`).join('');
  $('#desktop-nav').innerHTML = html;
  $('#mobile-menu').innerHTML = html +
    `<a href="mailto:${CONFIG.email}">${t.nav_contact}</a>`;
  updateActiveNav();
}

/* ---------- Scroll indicator ---------- */
// Active entry = the last covered section whose top has passed just below the header.
function currentTarget() {
  const model = navModel();
  const line = headerOffset();
  let active = null;
  for (const entry of model) {
    for (const id of entry.covers) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) active = entry.target;
    }
  }
  // The final section is usually too short to ever reach the line, so pin it at the bottom.
  const doc = document.documentElement;
  if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
    const last = model[model.length - 1];
    if (last && last.covers.length) active = last.target;
  }
  return active;
}

function updateActiveNav() {
  state.activeNav = currentTarget();
  $$('.nav-btn').forEach((b) => {
    const on = b.dataset.target === state.activeNav;
    b.classList.toggle('is-active', on);
    if (on) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
  });
}

function updateProgress() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  const bar = $('#scroll-progress');
  if (bar) bar.style.transform = `scaleX(${pct})`;
}

const THEME_ICON = { dark: 'moon', sepia: 'bookOpen', light: 'sun' };

function renderHeader() {
  $('#lang-btn').innerHTML = `${state.lang.toUpperCase()} ${icon('chevronDown', 16)}`;
  $('#lang-btn').setAttribute('aria-label', LANGS.find((l) => l.code === state.lang).label);
  $('#lang-menu').innerHTML = LANGS.map((l) =>
    `<button data-lang="${l.code}" class="${l.code === state.lang ? 'active' : ''}" lang="${l.code}"><span class="flag" aria-hidden="true">${l.flag}</span>${l.label}</button>`).join('');
  $$('.seg-btn').forEach((b) => {
    const name = b.dataset.themeSet;
    b.classList.toggle('active', name === state.theme);
    b.setAttribute('aria-label', t['theme_' + name]);
    b.setAttribute('aria-pressed', String(name === state.theme));
    b.title = t['theme_' + name];
    b.innerHTML = icon(THEME_ICON[name], 20);
  });
  $('#menu-btn').innerHTML = icon('menu');
}

function renderQuickPoints() {
  const qp = [['columns', t.qp_reflow], ['scan', t.qp_scan], ['wifiOff', t.qp_offline], ['eyeOff', t.qp_privacy]];
  $('#quick-points').innerHTML = qp.map(([ic, label]) =>
    `<span><span class="i">${icon(ic, 20)}</span>${label || ''}</span>`).join('');
}

function cardHTML(ic, title, text) {
  return `<article class="card"><div class="card-icon">${icon(ic, 26)}</div><h3>${title}</h3><p>${text}</p></article>`;
}

function renderPolicy() {
  // Only English carries the full policy; other languages translate the summary and flag it.
  const sections = t.pp_sections || en.pp_sections;
  const note = $('#pp-note');
  note.hidden = !(state.lang !== 'en' && t.pp_note_en);
  note.textContent = t.pp_note_en || '';
  $('#policy-body').innerHTML = sections.map(([title, paras]) =>
    `<div class="policy-card"><h2 class="serif">${title}</h2>${paras.map((p) => `<p>${p}</p>`).join('')}</div>`).join('');
}

function renderLists() {
  $('#why-grid').innerHTML = (t.why || []).map((w) => cardHTML(w[0], w[1], w[2])).join('');
  $('#privacy-grid').innerHTML = (t.cards || []).map((c) => cardHTML(c[0], c[1], c[2])).join('');

  $('#themes-row').innerHTML = THEME_SHOTS.map(([src, key]) =>
    `<div class="theme-item"><div class="phone phone--theme"><img src="${src}" width="640" height="1190" loading="lazy" alt="${t[key]}" /></div><span class="theme-label">${t[key]}</span></div>`).join('');

  const compact = narrow.matches;
  $('#feature-groups').innerHTML = (t.groups || []).map((g, gi) => {
    const open = !compact || !!state.groupsOpen[gi];
    const cards = g[1].map((it) =>
      `<article class="feature-card"><div class="feature-icon">${icon(it[0], 24)}</div><div><h4>${it[1]}</h4><p>${it[2]}</p></div></article>`).join('');
    const count = `<span class="group-count">${g[1].length}</span>`;
    const head = compact
      ? `<button class="group-toggle" data-group="${gi}" aria-expanded="${open}"><h3 class="serif group-title">${g[0]}</h3>${count}<span class="chev">${icon('chevronDown', 20)}</span></button>`
      : `<h3 class="serif group-title">${g[0]}</h3>`;
    return `<section class="fgroup${open ? ' open' : ''}">${head}<div class="feature-cards"${open ? '' : ' hidden'}>${cards}</div></section>`;
  }).join('');

  $('#plans').innerHTML = (t.plans || []).map((p, i) =>
    `<article class="plan${i === 1 ? ' plan--paid' : ''}"><div class="plan-head"><div class="card-icon">${icon(p[0], 26)}</div><h3>${p[1]}</h3></div><p class="plan-sub">${p[2]}</p><ul class="checks">${p[3].map((it) => `<li><span class="tick">${icon('check', 18)}</span><span>${it}</span></li>`).join('')}</ul></article>`).join('');
  $('#pricing-notes').innerHTML = [['phone', t.pricing_ios], ['unlock', t.pricing_store]].map(([ic, text]) =>
    `<p><span class="i">${icon(ic, 20)}</span><span>${text}</span></p>`).join('');

  $('#faq-list').innerHTML = (t.faqs || []).map((f, i) =>
    `<article class="faq-item ${state.faqOpen[i] ? 'open' : ''}" data-faq="${i}">
      <button class="faq-btn" aria-expanded="${!!state.faqOpen[i]}"><span>${f[0]}</span><span class="chev">${icon('chevronDown', 20)}</span></button>
      <p class="faq-answer" ${state.faqOpen[i] ? '' : 'hidden'}>${f[1]}</p>
    </article>`).join('');

  renderPolicy();
}

function renderGallery() {
  const shots = t.shots || [];
  const i = Math.min(state.gallery, Math.max(0, shots.length - 1));
  $('#gal-img').src = GALLERY_SRCS[i];
  $('#gal-img').alt = shots[i] ? shots[i][0] : '';
  $('#gal-title').textContent = shots[i] ? shots[i][0] : '';
  $('#gal-desc').textContent = shots[i] ? shots[i][1] : '';
  $('#gal-prev').innerHTML = icon('chevronLeft');
  $('#gal-next').innerHTML = icon('chevronRight');
  $('#gal-prev').setAttribute('aria-label', t.gallery_prev);
  $('#gal-next').setAttribute('aria-label', t.gallery_next);
  $('#gal-dots').innerHTML = shots.map((_, k) =>
    `<button class="dot ${k === i ? 'active' : ''}" data-dot="${k}" aria-label="${shots[k][0]}"></button>`).join('');
}

function renderStaticRefs() {
  const mail = 'mailto:' + CONFIG.email;
  $('#cta-play').href = CONFIG.play;
  $('#cta-ios').href = CONFIG.ios;
  $('#pp-updated').textContent = CONFIG.updated;
  $('#pp-contact-mail').href = mail;
  $('#pp-contact-mail').textContent = CONFIG.email;
  $('#footer-mail').href = mail;
  $('#footer-email-1').href = mail;
  $('#footer-email-1').textContent = CONFIG.email;
  $('#footer-email-2').href = mail + '?subject=' + encodeURIComponent('Rewrap feedback');
  $('#footer-copyright').textContent = `© ${new Date().getFullYear()} Rewrap. ${t.footer_rights || ''}`;
}

function renderAll() {
  t = translations[state.lang] || translations.en;
  document.documentElement.setAttribute('data-theme', state.theme);
  document.documentElement.lang = state.lang;
  applyStaticText();
  renderHeader();
  renderNav();
  renderQuickPoints();
  renderLists();
  renderGallery();
  renderStaticRefs();
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', { dark: '#0b1118', sepia: '#f4ecd8', light: '#eef2f6' }[state.theme]);
}

/* ---------- Navigation ---------- */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  // Land just below the sticky header, whatever height it currently has.
  const y = el.getBoundingClientRect().top + window.pageYOffset - (headerOffset() - 8);
  window.scrollTo({ top: y, behavior: 'smooth' });
}
function showPage(page, push) {
  state.page = page;
  $('#page-home').hidden = page !== 'home';
  $('#page-privacy').hidden = page === 'home';
  const path = page === 'privacy' ? '/privacy' : '/';
  if (push && window.location.pathname !== path) {
    try { history.pushState({ page }, '', path + window.location.search); } catch (e) {}
  }
  if (push) window.scrollTo({ top: 0, behavior: 'smooth' });
  renderNav();
  onScroll();
}
function goHome() { showPage('home', true); }
function goPrivacy() { showPage('privacy', true); }
window.addEventListener('popstate', () => showPage(routeFromPath(), false));
function navTarget(target) {
  closeMenus();
  if (target === 'home') return goHome();
  if (target === 'privacy') return goPrivacy();
  if (target && target[0] === '#') {
    const id = target.slice(1);
    // Policy anchors live on the privacy page; everything else on the home page.
    const wanted = id === 'policy' || id === 'pp-contact' ? 'privacy' : 'home';
    if (state.page !== wanted) { showPage(wanted, true); setTimeout(() => scrollToId(id), 60); } else scrollToId(id);
  }
}
function closeMenus() { $('#lang-menu').hidden = true; $('#lang-btn').setAttribute('aria-expanded', 'false'); $('#mobile-menu').hidden = true; $('#menu-btn').setAttribute('aria-expanded', 'false'); }

/* ---------- Events (delegated) ---------- */
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-nav],[data-target],[data-scroll],[data-theme-set],[data-lang],[data-dot],[data-group],[data-faq] .faq-btn');
  if (!el) {
    if (!e.target.closest('.lang')) { $('#lang-menu').hidden = true; $('#lang-btn').setAttribute('aria-expanded', 'false'); }
    return;
  }
  if (el.dataset.nav) navTarget(el.dataset.nav);
  else if (el.dataset.target) navTarget(el.dataset.target);
  else if (el.dataset.scroll) navTarget('#' + el.dataset.scroll);
  else if (el.dataset.themeSet) { state.theme = el.dataset.themeSet; try { localStorage.setItem('rewrap-theme', state.theme); } catch (x) {} renderAll(); }
  else if (el.dataset.lang) { state.lang = el.dataset.lang; storeLang(state.lang); closeMenus(); renderAll(); }
  else if (el.dataset.dot) { state.gallery = +el.dataset.dot; renderGallery(); }
  else if (el.dataset.group !== undefined) {
    const i = +el.dataset.group;
    state.groupsOpen[i] = !state.groupsOpen[i];
    renderLists();
    onScroll();
  } else if (el.classList.contains('faq-btn')) {
    const i = +el.closest('[data-faq]').dataset.faq;
    state.faqOpen[i] = !state.faqOpen[i];
    renderLists();
    onScroll();
  }
});

$('#lang-btn').addEventListener('click', (e) => { e.stopPropagation(); const m = $('#lang-menu'); m.hidden = !m.hidden; $('#lang-btn').setAttribute('aria-expanded', String(!m.hidden)); });
$('#menu-btn').addEventListener('click', (e) => { e.stopPropagation(); const m = $('#mobile-menu'); m.hidden = !m.hidden; $('#menu-btn').setAttribute('aria-expanded', String(!m.hidden)); });
$('#gal-prev').addEventListener('click', () => { const n = (t.shots || []).length; state.gallery = (state.gallery - 1 + n) % n; renderGallery(); });
$('#gal-next').addEventListener('click', () => { const n = (t.shots || []).length; state.gallery = (state.gallery + 1) % n; renderGallery(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenus(); });
$('#back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------- Scroll loop (progress bar + section indicator + back-to-top) ---------- */
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    updateProgress();
    updateActiveNav();
    $('#back-to-top').classList.toggle('visible', window.scrollY > 480);
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);

// Swapping between the accordion and the full list changes the markup, so re-render.
const onBreakpoint = () => { renderLists(); onScroll(); };
if (narrow.addEventListener) narrow.addEventListener('change', onBreakpoint);
else narrow.addListener(onBreakpoint); // Safari < 14

renderAll();
$('#page-home').hidden = state.page !== 'home';
$('#page-privacy').hidden = state.page === 'home';
onScroll();
