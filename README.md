# Rohit Bhardwaj — Portfolio Site (v3)

A multi-page static portfolio — plain HTML/CSS/JS, no build step, no framework —
led with a Software Developer / Application Support identity.

## File structure

```
index.html              Home page — hero with animated terminal sequence
about.html
experience.html          Work history timeline
skills.html
certifications.html
contact.html
css/style.css            Shared styles for every page
js/main.js                Mobile nav toggle + hero terminal animation
```

## Design notes

- The hero's typing terminal is the site's one deliberate animated moment —
  everything else is calm on purpose, with motion reserved for hover states
  (cards lifting, links brightening) rather than scroll-triggered effects.
- Color system: deep navy-slate (`--ink`) for the header/hero, warm paper
  (`--paper`) for content, with a restrained two-accent system (steel-cyan +
  warm gold) rather than a single neon accent.
- Fonts: Sora (headings), IBM Plex Sans (body), JetBrains Mono (used only for
  the terminal and small technical labels — not decoration everywhere).

## Host it free on GitHub Pages

1. Create a repository named exactly `Rohit-B08.github.io`.
2. Upload this entire folder (keeping the `css/` and `js/` folders intact) to
   the repo root.
3. Wait 1–2 minutes. Live at `https://rohit-b08.github.io`.

## Adding a new page later

1. Copy `contact.html` as the simplest starting template.
2. Update its content and `<title>`.
3. Add one new `<li><a href="yourpage.html">Your Page</a></li>` line to the
   `.nav-links` list in **every existing page** — this is the only place a
   new page requires touching other files.

## Before you publish

- Update the LinkedIn link in `contact.html` if your handle changes.
- Certificates: flip `tag--progress` to `tag--done` in `certifications.html`
  once the PMI Kickoff and Simplilearn certificates are actually earned, and
  add real dates.
- If you want to link back to your project case studies (Airline Passenger
  Support System, etc.) from an earlier portfolio version, add a Projects
  page using the same copy-contact.html-as-template pattern above.
