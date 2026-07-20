# Python & Pandas Trainer

Webapp statica, mobile-first, per ripassare il programma Python/Pandas di Digital Technology.

## Avvio locale

Apri `index.html` nel browser.

Per evitare eventuali limiti del browser sui file locali puoi usare:

```bash
python3 -m http.server 8000
```

Poi apri `http://localhost:8000`.

## Pubblicazione su GitHub Pages

1. Crea un repository GitHub.
2. Carica tutti i file di questa cartella nella root del repository.
3. Apri **Settings → Pages**.
4. In **Build and deployment**, scegli **Deploy from a branch**.
5. Seleziona il branch `main` e la cartella `/root`.
6. Salva.

## Struttura

- `index.html`: struttura dell’interfaccia
- `styles.css`: layout responsive e temi
- `app.js`: banca domande, generatori, test e correzioni

Non usa framework, backend, database o dipendenze esterne.

L’app include un manifest e un service worker: dopo la prima apertura tramite HTTPS o server locale può essere installata e riaperta anche senza connessione. L’avvio diretto con `file://` funziona, ma non abilita la modalità offline.

## Test

Esegui i controlli sulla banca domande e sui generatori con:

```bash
node --test tests.js
```
