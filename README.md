# Kalendrix Consulting Services — Website

Marketing website for Kalendrix Consulting Services LLC, built from the 2026 business plan (v4).

It's a static site (plain HTML, CSS, and JavaScript, no build step), so it can be hosted anywhere: GitHub Pages, Netlify, Cloudflare Pages, or any web host.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content: hero, services, engagement tiers, who we serve, process, about, contact |
| `styles.css` | All styling (responsive down to phone width) |
| `script.js` | Mobile menu, contact form, and site settings |
| `assets/favicon.svg` | Logo mark / browser icon |

## Before launch

Open `script.js` and fill in the settings at the top:

- `CONTACT_EMAIL`: the business inbox. When it's set, the email appears on the page and the contact form opens the visitor's email app with their message filled in. Until then, the form asks visitors to call.
- `SCHEDULING_URL`: a Calendly link for the free 30-minute discovery call. When it's set, every "Book a Discovery Call" button opens it.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Publish with GitHub Pages

Repository **Settings → Pages → Build and deployment**: choose "Deploy from a branch", select the branch, folder `/ (root)`, and save.
