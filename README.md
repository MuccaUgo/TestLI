# Strategy & Marketing Study Hub

Static, mobile-first web app to revise Strategy and Marketing: concept cards plus practice questions.

Content is drawn from the course Introduction deck (V. Chiesa, MSc Management Engineering), covering what a
company is, the legal forms it can take, how ownership evolves from foundation to IPO, shareholder and
stakeholder value, corporate governance models and ESG.

## What is inside

- **Concepts** — 39 cards grouped in five areas (The Company, Legal Forms, Ownership & Evolution,
  Value & Objectives, Governance & ESG). Each card gives the meaning, how it works in practice, and the
  typical exam trap. Searchable and filterable by area.
- **Full Test** — all 31 questions in order, with *Start from question* to resume and *Jump to question*.
- **Practice 10** — 10 random questions with immediate feedback, optionally filtered to a single area.
- **Exam Test** — 10 random questions across all areas, no feedback until the final recap.
- **Mistakes Review** — wrong answers are stored in the browser for later revision.

Progress, study streak and accuracy are saved in `localStorage`; nothing is sent anywhere.

## Running locally

Open `index.html` in a browser, or serve the folder to enable the offline mode:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publishing on GitHub Pages

1. Push the files to the repository root.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/root`, then save.

## Offline use

The app ships a manifest and a service worker. After the first load over HTTPS or a local server it can be
installed to the home screen and reopened without a connection. Opening the files directly via `file://`
works but does not enable offline mode.

## Structure

- `index.html` — page shell and static sections
- `styles.css` — layout, light and dark themes
- `data.js` — concept cards and question bank
- `app.js` — concepts browser, quiz engine, stats and review
- `sw.js`, `manifest.json`, `icon.svg` — installability and offline support

No frameworks, no backend, no external dependencies.
