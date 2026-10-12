---
titolo: "Istruzioni di Ripresa — Stato e Protocollo Editoriale"
categoria: "meta"
tag: [meta, ripresa, sessione, istruzioni, audit]
status: "in aggiornamento"
ultima_modifica: "2026-10-12"
---

# Istruzioni di Ripresa

> Documento operativo per riprendere il lavoro sulla wiki senza riaprire decisioni già prese, duplicare attività concluse o alterare il canone senza evidenze.

## Stato verificato

- La wiki è organizzata in Markdown sotto `content/` e pubblicata con Quartz 4.
- Le fonti convertite sono collocate in `content/fonti/`; i vecchi riferimenti a `wiki/fonti/` sono obsoleti.
- La conversione iniziale delle fonti è dichiarata completata nel changelog del 2025-06-13. Non assumere però che ogni fonte sia stata verificata semanticamente o che ogni riferimento del catalogo sia stato riconciliato con un file attuale.
- Sono presenti voci sintetiche, fonti narrative verbatim, indici e registri meta. Le voci sintetiche devono riassumere e collegare le fonti, non sostituirle.
- Il repository usa Quartz e GitHub Actions. Prima di modificare configurazione o struttura, verificare il comportamento con un build.

## Ordine di autorità editoriale

1. **Decisioni canoniche esplicite** registrate in `[[Fonti e Decisioni Canoniche]]` e nel changelog.
2. **Fonti OOC normative**, quando il catalogo le identifica come tali.
3. **Fonti narrative in-world**, che possono esprimere conoscenze parziali, credenze o punti di vista non oggettivi.
4. **Voci sintetiche della wiki**, che devono essere coerenti con le fonti e dichiarare le incertezze.
5. **Ipotesi dell'agente**, che non sono mai canone e vanno etichettate come proposte.

Una contraddizione tra fonti non è automaticamente un errore: può essere intenzionale, risolta ma non propagata, irrisolta oppure dovuta a una fonte incompleta. L'agente deve classificare il caso e fornire prove, non decidere autonomamente.

## Decisioni già confermate

- Grafia canonica: **Frederick Fenice**.
- La sequenza di Dominic Draco è stata confermata in dieci fasi.
- Successione: Bartholomew Brood (XVI) → Brienne Brood (XVII).
- La Fenice esiste sia come Specie di Fiera sia come riferimento nel titolo/personaggio di Frederick Fenice.
- Fierezza e Maestà sono due orientamenti dello stesso principio di potere, secondo lo schema registrato nelle fonti meta.
- Le Vere Fiere non si numerano progressivamente.
- Vilegis/Lunaria resta fuori scope, salvo le intersezioni documentate con il Kindsgard.
- I Bruciati sono il seme narrativo della fazione delle Fiamme.
- La creazione iniziale degli stub delle Fiere è già stata eseguita; il lavoro residuo è verificarli e completarli senza duplicazioni.

Consultare `[[Domande Aperte e Lacune]]` per ciò che resta da verificare. Se un registro contraddice queste decisioni, correggere il registro e annotare la modifica nel changelog, senza riscrivere fonti originali verbatim.

## Procedura di lavoro

1. Leggere `[[Convenzioni]]`, `[[Fonti e Decisioni Canoniche]]`, `[[Domande Aperte e Lacune]]` e le sezioni pertinenti del changelog.
2. Prima di proporre una nuova voce, cercare titoli, alias, wikilink e fonti esistenti: evitare duplicati.
3. Per ogni rilievo, registrare file e posizione, evidenza testuale, tipo di problema, gravità, confidenza e intervento proposto.
4. Correggere direttamente gli errori documentali non ambigui e le discrepanze con decisioni già approvate. Per modifiche sostanziali al canone, fusioni/eliminazioni di fonti, o scelte editoriali non determinate dalle fonti, fermarsi e chiedere conferma umana.
5. Dopo le modifiche, eseguire i controlli disponibili: frontmatter, collegamenti interni secondo le regole reali di Quartz, riferimenti alle fonti, duplicazioni e build.
6. Aggiornare il changelog con data, file, motivazione e natura della modifica.

## Regole di sicurezza editoriale

- Non inventare fatti per riempire lacune.
- Non trasformare automaticamente una credenza in-world in verità oggettiva.
- Non eliminare o fondere fonti verbatim per ridurre ridondanze senza approvazione esplicita.
- Non trattare una voce `revisionato` come canonica solo per il suo stato editoriale.
- Mantenere visibili le incertezze che non possono essere risolte con le fonti disponibili.
- Le domande umane devono essere circoscritte a decisioni realmente non deducibili, non a lavori di manutenzione che l'agente può eseguire.

## Lavoro prioritario residuo

1. Riconciliare il catalogo delle fonti con i file presenti in `content/fonti/`.
2. Verificare i collegamenti interni e gli alias con un build di Quartz.
3. Completare la copertura geografica senza inferire posizioni non documentate.
4. Verificare le voci stub delle Fiere e completarle solo sulla base delle fonti.
5. Confrontare voci sintetiche e fonti verbatim, senza eliminazioni o fusioni automatiche.
6. Riconciliare i riferimenti sorgente senza file autonomo o percorso attuale: `Annali dell’Artiglio di Fuoco`, `Annali dell'Artiglio delle Sabbie`, `Draghieri/Vere Fiere` e `Copia_di_I_Draghieri_del_kindsgard`. Non confonderli con D3/D4, la cui identità è stata chiarita ma i cui originali non sono reperibili nella tree corrente.
7. Verificare le formulazioni assolute nelle voci sintetiche confrontandole con le fonti narrative eccezionali, senza appiattire casi speciali in regole generali (es. `Risveglio del Drago` e il Battesimo di Wade).

## Decisioni editoriali ancora da chiedere

I titoli definitivi delle due fonti originariamente intitolate “Fierezza” restano da confermare nel registro delle domande aperte. Non rinominare né eliminare i documenti originali in assenza di questa decisione.


## Checkpoint audit — 2026-10-12

- **Branch di lavoro storico:** `audit/inventario-completo-fiere`; **PR #18:** [Audit: rende esaustivo l'inventario delle Fiere incomplete](https://github.com/D3m1urg0/kindsgard-wiki/pull/18), integrata in `main` il 2026-10-12 con merge commit `3f7dc9eaf79099127178e89610aeba0aefdddd64`. La nota sullo stato precedente è superata dal checkpoint di normalizzazione repository in fondo a questo documento.
- **HEAD di riferimento dopo l'integrazione:** `3f7dc9eaf79099127178e89610aeba0aefdddd64`; la build e il deploy GitHub Pages su questo commit sono entrambi terminati con successo ([workflow run 38292669570](https://github.com/D3m1urg0/kindsgard-wiki/actions/runs/38292669570)). Il branch `main` è poi avanzato con un commit successivo che aggiunge controlli sui wikilink; la punta attuale verificata durante la normalizzazione è `94e71a325bf17c06990013a0aa8e1c5ef04cade3`.
- **Inventario:** tree GitHub ricorsivo completo; 65 file Markdown sotto `content/`: 29 sorgenti in `content/fonti/` e 36 pagine sintetiche/meta. Tutti i 29 sorgenti sono esplicitamente citati nel catalogo. Quattro percorsi catalogati non esistono nel tree (Annali dell'Artiglio di Fuoco, Draghieri/Vere Fiere, D3 Cronistoria OOC, D4 You Want to Be a Dragoner); `Copia_di_I_Draghieri_del_kindsgard` è un ulteriore ID legacy non riconciliato. Nessun file sorgente presente è assente dal registro.
- **Tracciabilità frontmatter:** controllati i campi `fonti` di tutte le 36 pagine non sorgente; i 33 identificatori distinti risultano mappati nel registro oppure esplicitamente elencati come riferimenti legacy da riconciliare. Nessun nuovo ID orfano emerso; `draghieri-spiegazione` è ora mappato esplicitamente alla guida OOC canonica presente, senza confonderla con D4.
- **Confronti diretti effettuati:** campionamento di Inktober 2018/2019/2024, `Prevedibilità`, `L'Esodo`, `Onda Bianca`, `Canzoni degli Umani`, `Elenco Draghieri`, `La natura di Natura`, `Solitudine`, `Cronistoria versione breve`, `Soffioni Uncinati`, `Bacche Emofaghe`, `Draghieri del Kindsgard (spiegazione)` e `Fierezza — Il Battesimo di Cornelius`. Pagine sintetiche esaminate in particolare: Fiere stub e schede complete, Geografia, Maestà, Religioni, Tradizioni, Fiamme, Cosmologia, Cronologia, Ere, Draghieri, Dominic, Bran, Salamander e Altri Personaggi. Non dichiarare verificati i testi integrali D3/D4, assenti dal repository e dalla Library consultata.
- **Correzioni proposte nella PR #18 (24 file):** perimetro L6 reso esplicito (26 profili classificati, menzioni extra separate, 12 nomi di brainstorming non canonici); rimossi dettagli non attestati da diverse schede Fiere e personaggi; separati Tentacolo Scarlatto e Tentacolo Purpureo; corretta la conflazione Artiglio del Fuoco/Artiglio di Città del Re; documentata la discrepanza Valle dei Tuoni/Fulmini; risolta editorialmente la numerazione di Sef Sycamore (XIII nell'elenco canonico, XIV in `#Mindless`), senza riscrivere la fonte; corretta la contraddizione sul luogo della morte di Syrus; corretta la progressione della Bacca Emofaga; corretto l'uso di “assorbire il titolo” rispetto ai tredici vettori; distinta la potenza raccolta da Dominic dal Fondamento di Vilegis/Lunaria.
- **Maestà:** un primo declassamento della formula “grande quanto il mondo” è stato annullato dopo la verifica della guida OOC canonica `draghieri-spiegazione`, che la definisce esplicitamente il più grande vulcano del mondo e grande quanto il mondo. La formula è stata ripristinata in Maestà e homepage; resta non misurata solo la visibilità da ogni punto. I dettagli su gradiente della forza ed Echi che dipendono da D3/D4 sono segnalati come non verificabili.
- **Metadati e documentazione:** README allineato al tree corrente (29 sorgenti presenti); registrata la discrepanza storica tra i 34 documenti dichiarati nel changelog del 2025 e i 29 attuali, senza inferire cinque fonti perdute; allineate le date editoriali delle pagine sintetiche modificate; aggiunti checkpoint e changelog persistenti.
- **Non modificato nell'audit dei branch:** corpi narrativi originali. La PR #18 è stata integrata tramite merge; non sono stati eseguiti merge aggiuntivi dai branch storici.
- **Prossimi passi:** (1) verificare la CI dopo il commit del checkpoint; (2) fare l'ultima revisione del diff completo della PR e controllare i link/alias aggiunti; (3) completare i confronti mirati sulle schede e sulle pagine non ancora verificate integralmente; (4) aggiornare il checkpoint finale; (5) redigere il report definitivo distinguendo risultati, correzioni proposte, limiti di verifica e decisioni per il proprietario del canone.
- **Decisioni umane ancora isolate:** grafia Angeline Aconitum/Aconytum; eventuale status canonico del tredicesimo Spettro esterno; titoli delle due fonti “Fierezza”; identità degli Annali delle Sabbie rispetto agli Annali del Fuoco; ambito Kindsgard/Vilegis delle Fiamme e significato di “Infiammati”; nota “ex Shai'Hulud”; sorte individuale delle Vere Fiere dopo Re Draco; identità dei tredici Guardiani; recupero/identificazione dei sorgenti D3/D4 e di `Copia_di_I_Draghieri_del_kindsgard`.


## Checkpoint normalizzazione repository — 2026-10-12

- **PR #18 integrata:** merge confermato da GitHub, SHA `3f7dc9eaf79099127178e89610aeba0aefdddd64`. Build e deploy su quel commit: `success`. La punta `main` successiva verificata è `94e71a325bf17c06990013a0aa8e1c5ef04cade3`; la build di merge/deploy della PR è distinta dai controlli sul commit successivo.
- **Inventario branch:** 19 branch remoti inclusi `main`; 18 branch di lavoro residui confrontati con `main`. Tutti e 18 risultano divergenti rispetto alla punta corrente, con commit e contenuti in larga parte storici; il numero di commit “ahead” non equivale a modifiche sicuramente mancanti, perché le stesse correzioni possono essere state riapplicate in commit diversi.
- **Controlli puntuali di identità file:** `content/fonti/list.md` e `content/fonti/mostri.md` su `audit/source-inventory-cleanup` sono byte-identici ai file in `main`; `.github/workflows/deploy.yml` su `maintenance/enforce-wikilink-audit` è byte-identico a `main`. Questi file non richiedono un merge.
- **Branch con rischio di regressione:** `maintenance/fix-root-index-collision` è obsoleto rispetto alla struttura attuale; non va integrato in blocco. `maintenance/editorial-register-reconciliation`, `maintenance/metadata-review-dates`, `maintenance/reconcile-source-identities` e `maintenance/clarify-unidentified-source-labels` contengono versioni precedenti dei registri meta e vanno trattati come materiale di confronto, non come merge-ready. `maintenance/resolve-wikilinks-by-title` è molto divergente e contiene modifiche al resolver, allo script di audit e ai contenuti: non fare merge indiscriminato senza un confronto completo con la soluzione già presente in `main`.
- **Classificazione provvisoria:** branch da non mergiare in blocco; componenti esattamente duplicati individuati sopra; contenuti residui da valutare selettivamente prima di ogni eventuale cherry-pick o PR di recupero.
- **Limite operativo:** gli strumenti GitHub disponibili consentono confronti, lettura/scrittura file, creazione/aggiornamento di branch e merge PR, ma non espongono un'azione di eliminazione dei branch remoti. Nessun branch è stato cancellato o spostato forzatamente: preservata la storia.
- **Prossimo passo:** verificare selettivamente le differenze sostanziali dei branch storici rispetto ai file attuali, iniziando da `audit/battesimo-eccezioni-e-coerenza`, `audit/consolidated-source-and-pages`, `audit/cosmology-levels-and-vilegis-connection` e `maintenance/resolve-wikilinks-by-title`; integrare soltanto correzioni documentali ancora mancanti e non superate, quindi ripetere build e audit wikilink.
