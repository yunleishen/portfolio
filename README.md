# Yunlei Shen — Portfolio

Static portfolio site. No build step — plain HTML/CSS/JS.

## Structure
- `index.html` — home (work index)
- `about.html` — about
- `the-end-of-the-paper-trail.html`, `a-crm-worth-navigating.html`, `four-roles-one-system.html`, `the-two-minute-deal.html` — case studies
- `cover-*.html`, `*-walkthrough.html`, etc. — embedded interactive boards (loaded in iframes)
- `support.js`, `image-slot.js` — page runtime (required; keep next to the HTML files)
- `assets/`, `uploads/`, `*.png`, `*.jpg` — images

## Deploy on GitHub Pages
1. Create a repo (for a personal site: `<username>.github.io`).
2. Push everything in this folder to the repo root.
3. Settings → Pages → Source: `main` branch, `/ (root)`.
