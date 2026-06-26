/* The Leather Sage — site interactions */
(function () {
  'use strict';

  // Current year in footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Nav: shrink on scroll
  var nav = document.querySelector('.nav');
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll-reveal: tag sections, then observe
  var revealTargets = document.querySelectorAll(
    '.story-text, .story-media, .section-head, .g-item, .product, .contact-inner'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in'); });
  }

  // Guard: warn in console if Stripe / Calendly placeholders are still present
  var unconfigured = [];
  if (document.querySelector('[href*="REPLACE_WITH_STRIPE_PAYMENT_LINK"]')) unconfigured.push('Stripe payment links');
  if (document.querySelector('[data-url*="REPLACE_WITH_CALENDLY_USERNAME"]')) unconfigured.push('Calendly URL');
  if (document.querySelector('[href*="REPLACE_WITH_EMAIL"]')) unconfigured.push('Contact email');
  if (unconfigured.length) {
    console.warn('[The Leather Sage] Still using placeholders for: ' + unconfigured.join(', ') + '. See README.md to configure.');
  }

  // Stop clicks on unconfigured Stripe buttons so users don't hit a dead URL
  document.querySelectorAll('[data-stripe]').forEach(function (btn) {
    if (btn.getAttribute('href') && btn.getAttribute('href').indexOf('REPLACE_WITH') !== -1) {
      btn.addEventListener('click', function (ev) {
        ev.preventDefault();
        alert('Checkout is being set up. Please reach out via the Contact section to commission a piece.');
      });
    }
  });
})();
