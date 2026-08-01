# Yunlei Shen — Portfolio

Personal portfolio site for Yunlei Shen, product designer (Seattle, WA). Home, About, and four in-depth case studies: The End of the Paper Trail, Four Roles One System, A CRM Worth Navigating, The Two-Minute Deal.

## Tech stack

Pure static HTML, CSS and vanilla JavaScript — no build step, no npm dependencies, no server-side code. Interactive figures (product walkthroughs, before/after sliders, covers) are self-contained HTML documents in `embeds/`, loaded in iframes.

## Responsive

One codebase, mobile-first. Fluid grid/flex layouts and media queries adapt the site from 320px phones through tablets to large desktops: the sidebar becomes a top bar with a hamburger menu on small screens, multi-column diagrams stack vertically, images scale proportionally (`max-width: 100%`), and no view scrolls horizontally at any width.

## Structure

```
index.html                  home
about.html                  about
<case-study>.html           four case studies
css/style.css               shared base styles
css/<page>.css              per-page styles
js/main.js                  page runtime
js/image-slot.js            image helper
images/                     photos, screenshots, favicon
embeds/                     interactive figures loaded in iframes
files/resume.pdf            resume
```

All paths are relative, so the site works from a repository sub-path (e.g. `https://<username>.github.io/portfolio/`).

## Deploy to GitHub Pages

Push these files to the `main` branch, then in the repository: Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/ (root)`.
