# Wiki del Kindsgard

Wiki canonica dell'ambientazione Kindsgard per Battle for Vilegis, generata con [Quartz 4](https://quartz.jzhao.xyz) — sito statico navigabile con ricerca full-text, grafo dei collegamenti, dark mode e backlinks automatici.

I contenuti veri e propri vivono in `content/` come file Markdown con frontmatter e wikilink (`[[Nome Voce]]`). Tutto il resto in questa cartella è infrastruttura del generatore di sito: non va toccato a meno che tu non voglia cambiare tema o funzionalità.

---

## Pubblicare il sito su GitHub Pages — guida passo passo

Serve solo un account GitHub, niente altro da installare se segui i comandi così come sono (devi però avere `git` e `node`/`npm` installati sul tuo computer — su Mac/Windows li trovi su [nodejs.org](https://nodejs.org), versione LTS).

### 1. Crea un repository vuoto su GitHub

Vai su [github.com/new](https://github.com/new), scegli un nome (es. `kindsgard-wiki`), lascialo **pubblico** se vuoi che il sito sia visibile a tutti gratis, **non** aggiungere README/licenza/gitignore (li abbiamo già).

### 2. Scompatta questo zip e inizializza il repo localmente

Apri il terminale nella cartella scompattata (quella che contiene questo README) ed esegui:

```bash
git init
git add .
git commit -m "Prima versione della wiki del Kindsgard"
git branch -M main
git remote add origin https://github.com/TUO-UTENTE/kindsgard-wiki.git
git push -u origin main
```

Sostituisci `TUO-UTENTE` e `kindsgard-wiki` con i tuoi valori reali.

### 3. Aggiorna `baseUrl` nella configurazione

Apri `quartz.config.ts`, cerca la riga:

```ts
baseUrl: "tuoutente.github.io/kindsgard-wiki",
```

e sostituiscila con il tuo vero indirizzo, nel formato `tuo-utente.github.io/nome-repo` (esattamente come apparirà online). Poi:

```bash
git add quartz.config.ts
git commit -m "Configura baseUrl"
git push
```

### 4. Attiva GitHub Pages con build automatica

Nel repo su GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

Il workflow di deploy automatico è già incluso in questo zip in `.github/workflows/deploy.yml` — non devi crearlo a mano. Ad ogni `git push` su `main`, GitHub costruirà e pubblicherà automaticamente il sito.

Dopo il primo push (fatto al punto 2) e l'attivazione di Pages, dopo 1-2 minuti il sito sarà live su `https://tuo-utente.github.io/kindsgard-wiki/`.

---

## Lavorare in locale (anteprima prima di pubblicare)

```bash
npm install
npx quartz build --serve
```

Apri `http://localhost:8080` — vedrai il sito esattamente come apparirà online, con hot-reload ad ogni modifica dei file in `content/`.

---

## Come modificare la wiki

Tutti i contenuti sono in `content/`, organizzati nelle stesse cartelle della struttura originale:

```
content/
├── _glossario.md, _changelog.md, index.md
├── meta/          (fonti, domande aperte, convenzioni, istruzioni di ripresa)
├── mondo/         (cosmologia, geografia, maestà, anello di fuoco, città-alveare)
├── storia/        (cronologia, ere)
├── fazioni/       (draghieri, vere fiere, fiamme)
├── personaggi/    (dominic draco, wade wyrm, ecc.)
├── sistemi/       (fierezza e maestà, battesimo del fuoco)
├── cultura/       (religioni, tradizioni)
├── fiere/         (soffione uncinato, bacca emofaga, fiere stub)
└── fonti/         (29 file Markdown sorgente presenti nel tree corrente; il registro meta distingue le fonti presenti dai riferimenti legacy non riconciliati)
```

Per modificare una voce: apri il file `.md` corrispondente con qualsiasi editor di testo (anche direttamente su GitHub.com, cliccando la matita in alto a destra in ogni file), modifica, salva. Se lavori su GitHub.com il sito si aggiorna automaticamente al prossimo deploy.

I link tra voci usano la sintassi `[[Nome Esatto del Titolo]]` — deve corrispondere al campo `titolo:` nel frontmatter del file di destinazione, non al nome del file.

### Workflow di review consigliato

Per cambiamenti più consistenti, usa i **branch e le pull request** di GitHub invece di scrivere direttamente su `main`:

1. Crea un nuovo branch (`git checkout -b nuova-voce-xyz` o dal sito GitHub)
2. Fai le modifiche
3. Apri una Pull Request verso `main`
4. Rivedi il diff (cosa cambia, riga per riga) prima di fare merge

Questo riproduce esattamente il flusso "io propongo, tu approvi" usato finora — solo che ora resta tracciato per sempre nello storico Git, ed è riprendibile da chiunque (incluso me, in una sessione futura, se mi incolli il link al repo o i diff).

---

## Editare con Obsidian (opzionale, consigliato)

Questa cartella `content/` è anche un vault [Obsidian](https://obsidian.md) completo e funzionante: apri Obsidian, "Apri cartella come vault", seleziona `content/`. Avrai grafo interattivo, ricerca, backlinks e autocompletamento dei `[[wikilink]]` mentre scrivi — molto più comodo che editare a mano i link.

---

## Note tecniche

- Generato con Quartz **v4.5.2** (versione stabile, non la v5 in sviluppo)
- Font: di sistema (nessuna dipendenza da Google Fonts, build funziona anche offline/in ambienti con rete ristretta)
- Plugin OG-image (generazione automatica di anteprime social) disattivato per lo stesso motivo — riattivabile in `quartz.config.ts` se pubblichi da un ambiente con accesso pieno a internet
