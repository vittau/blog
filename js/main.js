/*
 * vitormach.dev/blog — page behaviour.
 * Plain JavaScript, no dependencies. Everything here is progressive: with the
 * script blocked or broken the page stays readable and navigable.
 */
(function () {
  'use strict';

  var root = document.documentElement;

  /* --- Theme -----------------------------------------------------------------
   * The initial theme was already applied by the inline script in <head>,
   * before first paint. Here we only handle the button and persistence.
   */
  var toggle = document.getElementById('theme-toggle');

  function currentTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit) return explicit;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function syncToggle() {
    if (!toggle) return;
    var dark = currentTheme() === 'dark';
    toggle.setAttribute('aria-checked', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }

  if (toggle) {
    syncToggle();
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* private mode */ }
      syncToggle();
      reloadDisqus();
    });
  }

  // If the visitor never chose a theme, follow the system preference live.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
    if (!root.getAttribute('data-theme')) {
      syncToggle();
      reloadDisqus();
    }
  });

  /* --- Disqus theme ----------------------------------------------------------
   * Disqus picks light/dark from the text color it inherits when the thread
   * loads (dark text -> light scheme, light text -> dark scheme). It exposes no
   * way to restyle a live cross-origin iframe, so the only hook is DISQUS.reset,
   * which re-reads that color. It does reload the thread, so it only runs when a
   * thread is actually present, and after the theme attribute has been applied.
   */
  function reloadDisqus() {
    if (!window.DISQUS || typeof window.disqus_config !== 'function') return;
    try {
      window.DISQUS.reset({ reload: true, config: window.disqus_config });
    } catch (e) { /* thread not ready yet */ }
  }

  /* --- Mobile menu ----------------------------------------------------------- */
  var burger = document.getElementById('nav-burger');
  var links = document.getElementById('nav-links');
  var backdrop = document.getElementById('nav-backdrop');

  function setMenu(open) {
    if (!burger || !links) return;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    burger.querySelector('use').setAttribute('href', open ? '#i-close' : '#i-menu');
    links.classList.toggle('is-open', open);
    document.body.classList.toggle('is-locked', open);
    if (backdrop) backdrop.classList.toggle('is-open', open);
    if (open) {
      var first = links.querySelector('a');
      if (first) first.focus();
    }
  }

  if (burger) {
    burger.addEventListener('click', function () {
      setMenu(burger.getAttribute('aria-expanded') !== 'true');
    });
  }
  if (backdrop) backdrop.addEventListener('click', function () { setMenu(false); });
  if (links) {
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && burger && burger.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      burger.focus();
    }
  });

  /* --- Navbar shadow --------------------------------------------------------- */
  var nav = document.querySelector('.nav');
  var sentinel = document.querySelector('.nav-sentinel');

  if (nav && sentinel && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      nav.classList.toggle('is-scrolled', !entries[0].isIntersecting);
    }).observe(sentinel);
  }
})();
