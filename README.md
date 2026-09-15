# POLIMI Study Hubs

Personal revision sites for my Management Engineering courses at Politecnico di Milano. Not an official
university project: these are study aids built from my own course material.

The root page is a portal listing the courses; each course is a self-contained static site in its own folder.

## Courses

| Folder | Course | Content |
|---|---|---|
| [`fa/`](fa/) | Financial Accounting | 44 concept cards, 33 practice questions — IFRS reporting: accrual principle and fair value, balance sheet, income statement, cash flow statement, notes and segmental reporting |
| [`sm/`](sm/) | Strategy & Marketing | 39 concept cards, 31 practice questions — the company and its legal forms, ownership from foundation to IPO, shareholder and stakeholder value, corporate governance and ESG |

Planned next: Cost Accounting (cost classification, cost objects, and the process, job order, operation and
activity-based allocation methods).

## What each hub offers

- **Concepts** — cards grouped by area, each with the meaning, how it works in practice and the typical exam
  trap. Searchable and filterable.
- **Full Test** — every question in order, with *Start from question* to resume and *Jump to question*.
- **Practice 10** — 10 random questions with immediate feedback, optionally filtered to one area.
- **Exam Test** — 10 random questions, no feedback until the final recap.
- **Mistakes Review** — wrong answers stored in the browser for later revision.

Each hub keeps its own progress, study streak and accuracy in `localStorage` under its own key prefix, so the
courses never mix. Nothing is sent anywhere.

## Running locally

Serve the repository root so the portal and the relative links work:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publishing on GitHub Pages

1. Push to the default branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/root`, then save.

The portal is served at the repository root and each course at its own path, for example `/fa/` and `/sm/`.

## Offline use

Every course folder ships its own manifest and service worker, scoped to that folder. Open a hub once over
HTTPS or a local server and it can be installed to the home screen and reopened without a connection. The
portal page itself has a manifest but no service worker, so it needs a connection on first load.

## Structure

```
index.html      portal listing the courses
portal.css      portal styles
manifest.json   portal manifest
icon.svg        portal icon
fa/             Financial Accounting hub (index.html, styles.css, data.js, app.js, sw.js, manifest.json, icon.svg)
sm/             Strategy & Marketing hub (same structure)
```

Each hub uses the same engine: `data.js` holds the concept cards and the question bank, `app.js` renders the
concepts browser and runs the quiz. No frameworks, no backend, no external dependencies.
