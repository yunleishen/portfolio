# Yunlei Shen — Portfolio

Personal portfolio site for Yunlei Shen, product designer: a home page with four
case studies (VBG Portal, Sugar CRM information architecture, Sugar CRM role
workflows, Anonymous Agent) plus an about page.

## Tech stack

- Static HTML, CSS and vanilla JavaScript — no build step, no dependencies
- Google Fonts (Poppins, Special Elite, Shadows Into Light) loaded over HTTPS
- Interactive case-study visuals are self-contained HTML documents embedded as iframes

## Responsive

The site is fully responsive from 320px upward. It uses a mobile-first stylesheet
with media queries at 768px and 1024px, fluid flexbox/grid layouts, `clamp()`
typography, images capped at `max-width: 100%`, a collapsible menu on small
screens, and 44px minimum touch targets. There is no horizontal scrolling at any
width and no separate mobile codebase.

## Structure

```
index.html            Home
about.html            About
*.html                Case studies and the embedded visuals they load
css/style.css         Shared responsive stylesheet
js/main.js            Shared page script
js/support.js         Rendering runtime used by the pages
images/               Photography, screenshots, favicon, resume PDF
```

All paths are relative, so the site works from a repository sub-path such as
`https://<username>.github.io/portfolio/`.

## Deploy to GitHub Pages

Push these files to the `main` branch, then in the repository go to
**Settings → Pages → Build and deployment → Deploy from a branch**, select
**main** and the **/ (root)** folder, and save.
