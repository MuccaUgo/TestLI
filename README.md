# Financial Accounting Study Hub

Static, mobile-first web app to revise IFRS financial accounting: concept cards plus practice questions.

Content is drawn from the course annexure on financial accounting, covering the accrual principle, the
balance sheet, the income statement, the cash flow statement and the notes to the financial statements.

## What is inside

- **Concepts** — 44 cards grouped in five areas (Principles, Balance Sheet, Income Statement, Cash Flow,
  Notes & Reporting). Each card gives the meaning, how the rule works in practice, and the typical exam trap.
  Searchable and filterable by area.
- **Full Test** — all 33 questions, with area and order selection, *Start from question*, and *Jump to question*.
- **Practice 10** — 10 random questions with immediate feedback, optionally filtered to a single area.
- **Exam Test** — 10 random questions across all areas. Choices remain editable and neutral until the final recap.
- **Mistakes Review** — wrong answers are stored in the browser for later revision.

Each test mode saves its own unfinished session, including answers, area, question order and current position.
Resume it from that mode’s setup screen; the Full Test card on the home page also resumes directly.
Starting a new session replaces the saved session for that mode. A changed question bank invalidates old
sessions so that saved answers cannot be applied to different questions.

Completed tests update study streak, accuracy and saved mistakes. Unanswered questions are shown separately
and do not count toward accuracy or answered totals. Practice and Exam require every question to be answered;
Full Test permits a partial recap when starting later in the bank. A streak uses local calendar days.

Progress is saved in `localStorage`; nothing is sent anywhere. Storage is specific to the browser and site;
clearing browser data removes it. Private browsing or blocked storage can prevent persistence.

The interface supports mobile layouts, light/dark themes, keyboard focus indicators, accessible navigation,
concept search counts and empty results, and reduced-motion preferences.

## Content review

The question bank follows the original course material. A separate [content review](CONTENT_REVIEW.md)
identifies three accounting statements that should be checked against the course annexure and current IFRS.
This interface update preserves the original questions and answer keys.

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

## Regression checks

With Node.js 18 or newer:

```bash
node --test tests/*.test.js
node --check app.js
node --check sw.js
```

Tests cover quiz scoring, session restoration, exam feedback, completion across multiple tabs and scoped offline caching.
Browser checks should also cover the main flows at desktop and phone widths, including both themes.
