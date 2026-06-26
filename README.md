# The Leather Sage — Website

A handcrafted brand site for **The Leather Sage** (Sage Holmes, Asheville NC) — gemstone-set leather adornments, custom commissions via Stripe, and modeling bookings via Calendly. Static, fast, and ready for **GitHub Pages**.

## Files

| File | What it is |
|------|------------|
| `index.html` | The full single-page site |
| `styles.css` | All styling (brand colors + type) |
| `script.js` | Nav, scroll reveals, placeholder guards |
| `brand-portfolio.html` | The brand portfolio book (open in a browser; print to PDF) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |
| `assets/` | Drop real photos here (see `assets/NEEDED-IMAGES.txt`) |

---

## 1. Before you launch — fill in these 3 things

Search the project for `REPLACE_WITH` and swap in real values:

1. **Stripe (sales/deposits)** — create [Stripe Payment Links](https://dashboard.stripe.com/payment-links) (one per product / one deposit link). In `index.html`, replace each `REPLACE_WITH_STRIPE_PAYMENT_LINK` with the link URL. No backend needed — Stripe hosts the checkout.
2. **Calendly (modeling bookings)** — create a free [Calendly](https://calendly.com) event. Replace `REPLACE_WITH_CALENDLY_USERNAME` in the `data-url` (and the `<noscript>` link) with your scheduling slug, e.g. `sage-holmes/modeling`.
3. **Contact email** — replace `REPLACE_WITH_EMAIL` in the Contact section's `mailto:` link.

Until these are set, the Reserve buttons show a friendly "checkout is being set up" message instead of a dead link (handled in `script.js`).

## 2. Add real photos

Put images in `assets/` using the filenames already referenced in `index.html` (listed in `assets/NEEDED-IMAGES.txt`). The grey placeholder tiles disappear automatically once real images are added — replace the placeholder `<div>`/`<figure>` blocks with `<img src="assets/work-1.jpg" alt="...">` where you want true photos. Recommended: pull your best shots from [@theleathersage](https://www.instagram.com/theleathersage/).

---

## 3. Deploy to GitHub Pages

```bash
# from this folder
git init
git add .
git commit -m "Launch The Leather Sage site"
git branch -M main
git remote add origin https://github.com/<your-username>/theleathersage.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source = `main` / root → Save.**
Your site goes live at `https://<your-username>.github.io/theleathersage/` in ~1 minute.

> Tip: name the repo `<your-username>.github.io` to serve it at the root domain with no subpath.

## 4. Custom domain (when you buy one)

1. Buy a domain (e.g. `theleathersage.com`).
2. In **Settings → Pages → Custom domain**, enter it and Save (this creates a `CNAME` file).
3. At your registrar, add DNS records pointing to GitHub Pages:
   - Four `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` → `<your-username>.github.io`
4. Back in Pages, tick **Enforce HTTPS** once the certificate is issued.

---

## Brand quick reference

- **Colors:** Obsidian `#14100C` · Brass `#C2A04E` · Amethyst `#7A5E86` · Carnelian `#A6492C` · Sage `#7E8C63` · Parchment `#EDE4D3`
- **Type:** Cinzel (wordmark) · Cormorant Garamond (headings) · Jost (body)
- Full system in `brand-portfolio.html`.

Built to be edited line by line — every section in `index.html` is labeled with a comment.
