---
titolo: "Istruzioni di Ripresa — Stato e Protocollo Editoriale"
categoria: "meta"
tag: [meta, ripresa, sessione, istruzioni, audit]
status: "in aggiornamento"
ultima_modifica: "2026-11-01"
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
- **Prossimi passi audit contenutistico:** completare i confronti diretti delle schede/pagine non ancora verificate integralmente; mantenere D3/D4 e gli altri sorgenti mancanti come non verificabili; aggiornare il report finale distinguendo risultati, limiti e decisioni del proprietario del canone. Le attività sulla PR #18 sono concluse.
- **Decisioni umane ancora isolate:** grafia Angeline Aconitum/Aconytum; eventuale status canonico del tredicesimo Spettro esterno; titoli delle due fonti “Fierezza”; identità degli Annali delle Sabbie rispetto agli Annali del Fuoco; ambito Kindsgard/Vilegis delle Fiamme e significato di “Infiammati”; nota “ex Shai'Hulud”; sorte individuale delle Vere Fiere dopo Re Draco; identità dei tredici Guardiani; recupero/identificazione dei sorgenti D3/D4 e di `Copia_di_I_Draghieri_del_kindsgard`.


## Checkpoint normalizzazione repository — 2026-10-12

- **PR #18 integrata:** merge confermato da GitHub, SHA `3f7dc9eaf79099127178e89610aeba0aefdddd64`. Build e deploy su quel commit: `success`. La punta `main` successiva verificata è `94e71a325bf17c06990013a0aa8e1c5ef04cade3`; la build di merge/deploy della PR è distinta dai controlli sul commit successivo.
- **Inventario branch (ricognizione 2026-10-13):** 21 branch remoti totali, inclusi `main`; 20 branch non-main dopo la creazione di `audit/checkpoint-2026-10-13`. Prima della creazione di questo branch erano 20 totali e 19 non-main. `audit/inventario-completo-fiere` è il branch sorgente della PR #18 già integrata; gli altri 17 sono branch storici divergenti confrontati con `main`. Il numero di commit “ahead” non equivale a modifiche sicuramente mancanti, perché le stesse correzioni possono essere state riapplicate in commit diversi.
- **Controlli puntuali di identità file:** `content/fonti/list.md` e `content/fonti/mostri.md` su `audit/source-inventory-cleanup` sono byte-identici ai file in `main`; `.github/workflows/deploy.yml` su `maintenance/enforce-wikilink-audit` è byte-identico a `main`. Questi file non richiedono un merge.
- **Branch con rischio di regressione:** `maintenance/fix-root-index-collision` è obsoleto rispetto alla struttura attuale; non va integrato in blocco. `maintenance/editorial-register-reconciliation`, `maintenance/metadata-review-dates`, `maintenance/reconcile-source-identities` e `maintenance/clarify-unidentified-source-labels` contengono versioni precedenti dei registri meta e vanno trattati come materiale di confronto, non come merge-ready. `maintenance/resolve-wikilinks-by-title` è molto divergente e contiene modifiche al resolver, allo script di audit e ai contenuti: non fare merge indiscriminato senza un confronto completo con la soluzione già presente in `main`.
- **Classificazione provvisoria:** branch da non mergiare in blocco; componenti esattamente duplicati individuati sopra; contenuti residui da valutare selettivamente prima di ogni eventuale cherry-pick o PR di recupero.
- **Limite operativo:** gli strumenti GitHub disponibili consentono confronti, lettura/scrittura file, creazione/aggiornamento di branch e merge PR, ma non espongono un'azione di eliminazione dei branch remoti. Nessun branch è stato cancellato o spostato forzatamente: preservata la storia.
- **Verifica selettiva completata sui temi prioritari:** il testo corrente del Battesimo già distingue il caso Wade dalla regola ordinaria; la Cosmologia già contiene la distinzione tra Fierezza/Maestà e i tredici vettori; il resolver e `scripts/check-wikilinks.mjs` di `maintenance/resolve-wikilinks-by-title` sono byte-identici a `main`; il workflow di validazione esiste già in `main` e include sia controllo wikilink sia build. Le differenze testuali nei branch sono versioni precedenti, non vanno fuse in blocco. Resta da fare un confronto puntuale di eventuali dettagli residuali prima di considerare ogni branch eliminabile.


### Registro branch esaminati

**Branch integrato**
- `audit/inventario-completo-fiere` — head della PR #18, integrata; nessun ulteriore merge necessario.

**Branch storici confrontati, non da mergiare integralmente**
- Audit: `audit/battesimo-eccezioni-e-coerenza`, `audit/coerenza-battesimo-pagine-potere`, `audit/complete-inktober-frontmatter`, `audit/consolidated-source-and-pages`, `audit/cosmology-levels-and-vilegis-connection`, `audit/source-inventory-and-baptism-consistency`, `audit/source-inventory-cleanup`, `audit/traceability-and-maesta-exception`.
- Manutenzione: `maintenance/clarify-unidentified-source-labels`, `maintenance/complete-fiery-stubs`, `maintenance/editorial-register-reconciliation`, `maintenance/enforce-wikilink-audit`, `maintenance/fix-root-index-collision`, `maintenance/fix-stale-source-audit-notes`, `maintenance/metadata-review-dates`, `maintenance/reconcile-source-identities`, `maintenance/resolve-wikilinks-by-title`.

**Duplicati/superati verificati**
- `audit/source-inventory-cleanup`: `content/fonti/list.md` e `content/fonti/mostri.md` hanno lo stesso blob in `main`.
- `maintenance/enforce-wikilink-audit`: `.github/workflows/deploy.yml` ha lo stesso blob in `main`.
- `maintenance/resolve-wikilinks-by-title`: `quartz/plugins/transformers/links.ts` e `scripts/check-wikilinks.mjs` hanno lo stesso blob in `main`; anche il workflow `validate.yml` attuale contiene già il controllo wikilink e la build.
- `maintenance/fix-root-index-collision`: il file `content/_index.md` non è presente né in `main` né nel branch esaminato; non recuperare il file dal branch.
- I branch rimanenti contengono revisioni precedenti di pagine, changelog o registri. I confronti hanno confermato che il contenuto attuale include già i temi principali di eccezioni del Battesimo, cosmologia/Fondamento e catalogo fonti; eventuali differenze residue richiedono confronto semantico, non merge automatico.

**Pulizia remota:** nessuna cancellazione o riscrittura forzata dei ref eseguita. L'azione GitHub di eliminazione branch non è esposta dagli strumenti disponibili in questa sessione. I branch restano intatti per evitare perdita di storia.


### Decisione branch-per-branch — 2026-10-12

Valutazione dei 17 branch storici rispetto al contenuto corrente di `main`. Esito: **nessun merge integrale autorizzabile dai confronti effettuati**; i branch sono stati trattati come sorgenti da cui recuperare singole modifiche solo se dimostrate mancanti. Non è stato creato alcun merge o cherry-pick perché le differenze osservate sono versioni superate, già integrate, o peggiorative rispetto alla tracciabilità attuale.

- `audit/battesimo-eccezioni-e-coerenza` — **non mergiare**: il Battesimo in `main` distingue correttamente il ciclo di trasformazione dei Draghieri, la regola ordinaria e l'eccezione di Wade; il branch è una formulazione precedente. La sua Geografia contiene identificazioni/alias più assertivi, già corretti in `main`.
- `audit/coerenza-battesimo-pagine-potere` — **non mergiare**: le pagine Vere Fiere e Fierezza/Maestà nel branch omettono le distinzioni e le eccezioni documentate presenti in `main`, tra cui la trasformazione ciclica e l'eccezione Dominic.
- `audit/complete-inktober-frontmatter` — **non mergiare**: `storia/ere.md` è byte-identico a `main`; le differenze restanti sono date editoriali vecchie o formulazioni superate (Fiamme e vettori/Guardiani).
- `audit/consolidated-source-and-pages` — **non mergiare**: i registri e le schede Fiere sono versioni più vecchie. Le righe esclusive controllate contengono liste di lavoro già superate e dettagli di bestiario che `main` ha corretto o qualificato come non attestati.
- `audit/cosmology-levels-and-vilegis-connection` — **non mergiare**: Cosmologia e cronologia sono antecedenti alle distinzioni correnti tra cosmologia originaria del Kindsgard e connessione successiva con Vilegis/Lunaria; non recuperare la versione del branch.
- `audit/source-inventory-and-baptism-consistency` — **non mergiare**: duplicato storico del filone consolidato, con registri e pagine precedenti alla riconciliazione delle fonti e alla versione attuale del Battesimo.
- `audit/source-inventory-cleanup` — **nessun merge**: `content/fonti/list.md` e `content/fonti/mostri.md` sono byte-identici a `main`; le differenze in Fiere e registri sono antecedenti alle correzioni attuali.
- `audit/traceability-and-maesta-exception` — **non mergiare**: la pagina Maestà nel branch presenta come certe alcune inferenze (in particolare sul ghiacciaio) e omette il riferimento esplicito alla guida OOC presente in `main`.
- `maintenance/clarify-unidentified-source-labels` — **non mergiare**: il registro delle fonti e le domande aperte sono precedenti; `main` separa meglio identità della fonte, disponibilità del testo integrale e lacune effettive.
- `maintenance/complete-fiery-stubs` — **non mergiare**: gli stub nel branch contengono descrizioni più assertive di quanto consentito dalle fonti e il registro delle domande è più vecchio. `main` ha già la struttura aggiornata delle Fiere.
- `maintenance/editorial-register-reconciliation` — **non mergiare**: `validate.yml` nel branch usa il vecchio comando `npx quartz build` e non include il controllo wikilink; `main` ha il comando corrente e il controllo. I registri editoriali sono versioni precedenti.
- `maintenance/enforce-wikilink-audit` — **nessun merge**: `.github/workflows/deploy.yml` è byte-identico a `main`.
- `maintenance/fix-root-index-collision` — **non mergiare**: `content/_index.md` non esiste né in `main` né nel branch; non c'è un file da recuperare.
- `maintenance/fix-stale-source-audit-notes` — **non mergiare**: le note del branch sono già superate dal registro corrente, che documenta le verifiche successive e distingue i sorgenti identificati dai testi effettivamente reperiti.
- `maintenance/metadata-review-dates` — **non mergiare**: contiene date editoriali arretrate e una versione del catalogo fonti precedente alla riconciliazione del 12 ottobre.
- `maintenance/reconcile-source-identities` — **non mergiare**: il branch precede la classificazione corrente delle identità e dei testi sorgente mancanti; non ripristinare le vecchie etichette canoniche per D3/D4.
- `maintenance/resolve-wikilinks-by-title` — **nessun merge**: `frontmatter.ts`, `links.ts` e `scripts/check-wikilinks.mjs` verificati byte-identici a `main`; le altre differenze sono contenuti e metadati più vecchi, mentre il workflow attuale include già il controllo.

**Esito operativo:** zero merge aggiuntivi dai 17 branch storici sulla base delle prove attuali. Non equivale a dire che ogni commit storico sia stato ricostruito singolarmente: significa che il confronto dei file e delle differenze significative non ha individuato un cambiamento mancante che giustifichi un merge. La PR #18 resta l'unico branch di questo inventario già integrato. Non eliminare o riscrivere i branch remoti: l'azione di cancellazione non è esposta dagli strumenti disponibili.


## Checkpoint ricognizione repository — 2026-10-13

- **HEAD di `main` al primo controllo:** `75f74f4624c135fdc26e83b254cc77e64d18e2fb`, commit `docs(audit): consolidate final owner questions (#19)`. Dopo il merge della PR #20, il nuovo HEAD verificato è `dac44d6d46d36b2c84a6ee69eeb369f0dcedb2e2`.
- **PR #19:** chiusa e integrata in `main`; merge commit `75f74f4624c135fdc26e83b254cc77e64d18e2fb`. La sezione riepilogativa delle domande è presente in `content/meta/domande-aperte.md` (blob SHA `a68d567986c6b283b2dbec0a2851dec8c8a1c6c2`).
- **PR aperte:** la ricerca GitHub per PR aperte nel repository non ha restituito risultati.
- **Branch:** 22 totali, inclusi `main`; 21 non-main dopo la creazione del branch `audit/reconcile-pr14-metadata`. I 17 branch storici già esaminati restano presenti; `audit/consolidamento-domande-finali` è il branch della PR #19 e `audit/checkpoint-2026-10-13` quello della PR #20.
- **PR precedenti:** le PR #1–#11, #13 e #15–#19 risultano chiuse e integrate secondo i metadati recuperati. La #12 risulta chiusa senza merge. La #14 risulta chiusa senza merge (`merged=false`, `merged_at=null`). Il `merge_commit_sha` restituito è un commit di test con messaggio `Merge ddc4da80ebc7bdd61e952c25d9c1e41f66dab89b into 6fd6f10a00093f58044854dc985092a4de44d989`, non prova un merge effettivo. Non risultano PR aperte.
- **CI:** per il merge della PR #19 non sono state restituite workflow runs né status checks, quindi la CI su quel commit resta non verificata. Per la PR #20 la run `Validate Quartz wiki` n. 38353745004 è terminata con esito `success` (controllo wikilink e build Quartz); la run è associata al primo commit del branch (`5cd5979`). Gli aggiornamenti successivi alla run hanno prodotto ulteriori commit sul branch, senza una nuova run associata restituita dagli strumenti. Non dichiarare testato il HEAD finale.
- **Registri letti:** `content/meta/istruzioni-ripresa.md`, `content/meta/fonti.md`, `content/meta/domande-aperte.md` e `content/_changelog.md`. I tre registri meta riportano stato in aggiornamento e ultima modifica 2026-10-12; il changelog registra ora la ricognizione successiva alla PR #19 e il checkpoint del 13 ottobre.
- **Prossimo passo:** continuare la lettura integrale delle fonti rimanenti, iniziando da Inktober 2018/2019 in sezioni mirate e poi Inktober 2024; parallelamente riconciliare i riferimenti legacy nei campi `fonti` e confrontare le voci wiki dipendenti. Non trattare i riepiloghi dei checkpoint storici come prova sostitutiva della lettura dei file.


### Esito della riconciliazione PR #14 — 2026-10-13

- Verificati i metadati della PR #14: `state=closed`, `merged=false`, `merged_at=null`. Il valore `merge_commit_sha=2f7a76d948c48bf9cafaa2df7409e35ecdf89f62` punta a un commit con messaggio `Merge ddc4da80ebc7bdd61e952c25d9c1e41f66dab89b into 6fd6f10a00093f58044854dc985092a4de44d989`, coerente con un commit di prova/mergeability e non con un merge reale della PR.
- Esito: PR #14 classificata **chiusa senza merge**; nessuna modifica da recuperare automaticamente. Il branch resta un riferimento storico già confrontato, non un cambiamento integrato.
- Dopo il merge della PR #20, `main` punta a `dac44d6d46d36b2c84a6ee69eeb369f0dcedb2e2`. Il branch di questa correzione documentale porta il conteggio a 22 branch totali (21 non-main).


### Inventario fonti — passaggio frontmatter e riconciliazione percorsi, 2026-10-13

- La ricerca GitHub limitata a `path:content/fonti` restituisce **29 file attuali**. Sono stati recuperati tutti e 29 i file e controllati i frontmatter: ciascuno ha `titolo`, `categoria: "fonti"`, `status` e `ultima_modifica`.
- **Classificazione frontmatter:** 27 file hanno `status: "canonico"`; `content/fonti/list.md` e `content/fonti/mostri.md` hanno `status: "bozza"` e sono descritti dal registro come brainstorming/spunti non normativi.
- Il confronto meccanico fra i percorsi restituiti e i percorsi `content/fonti/*.md` menzionati in `content/meta/fonti.md` non trova file attuali orfani dal catalogo. Il catalogo contiene 33 percorsi distinti: 29 corrispondono a file attuali e quattro restano assenti/non reperiti: `annali-artiglio-di-fuoco-intro.md`, `d3-cronistoria-ooc.md`, `d4-guida-draghiere.md`, `draghieri-vere-fiere.md`.
- `Copia_di_I_Draghieri_del_kindsgard` è un ulteriore identificatore legacy citato in `content/mondo/cosmologia.md`, non un quinto percorso `.md` del catalogo. La sua identità non è dimostrata e non va sostituita automaticamente con `draghieri-spiegazione.md`.
- **Nota di classificazione da preservare:** `content/fonti/fierezza-il-dio-che-e-in-noi.md` è `status: "canonico"` ma ha il tag `incompleto` e il catalogo lo descrive come incompleto/da usare con cautela. Questo non è automaticamente una contraddizione: può distinguere l'appartenenza canonica dall'integrità del testo. Non cambiare lo status senza ulteriori evidenze.
- **Limite esplicito:** in questo passaggio sono stati controllati i frontmatter e i riferimenti di catalogo, non letti integralmente i corpi di tutti i 29 testi. L'audit semantico delle fonti resta aperto.
- Dopo la creazione del branch `audit/source-inventory-frontmatter-2026-10-13`, il conteggio dei branch è **23 totali, 22 non-main**. Il nuovo branch serve solo a registrare il checkpoint.


### Ricognizione copertura pagine — 2026-10-13

- Albero GitHub ricorsivo su `main` verificato al commit `a30302866b138b017a8ba748d956f032a4112c83`: 283 voci totali, 253 file, 65 Markdown sotto `content/`; nessuna troncatura della tree.
- Copertura iniziale delle pagine: tutti i 65 file Markdown sotto `content/` sono stati individuati. I 29 file in `content/fonti/` hanno già avuto il controllo dei frontmatter; sono stati inoltre recuperati i frontmatter e le strutture principali degli altri 36 file. Tutti i 65 file mostrano frontmatter e campo `status` nei contenuti controllati.
- Conteggio status preliminare su 65 pagine: 30 `canonico`, 23 `revisionato`, 6 `bozza`, 6 `in aggiornamento`. È un conteggio descrittivo del campo, non un giudizio di correttezza semantica.
- **Lacuna di navigazione verificata:** `content/index.md` non elenca nessuna delle due pagine della categoria `cultura` (`content/cultura/religioni.md` e `content/cultura/tradizioni.md`), benché entrambe esistano e abbiano status `revisionato`. È stata preparata una correzione additiva e reversibile dell'indice nella PR #23.
- L'indice è una selezione e non un inventario completo di ogni voce: altre pagine esistenti (ad es. Anello di Fuoco, Città-Alveare, Maestà e Altri Personaggi) sono raggiungibili da link interni ma non elencate direttamente nell'indice. Da valutare nella revisione della copertura, senza espandere automaticamente l'indice oltre la struttura editoriale desiderata.
- La verifica di tutti i link interni va distinta dalla verifica semantica. Lo script `scripts/check-wikilinks.mjs` controlla target e collisioni alias/slug, ma non rileva omissioni di navigazione né riferimenti narrativi non dimostrati.
- **Lavoro residuo del punto 2:** leggere integralmente i corpi delle fonti e confrontarli con le voci wiki; normalizzare e verificare i riferimenti legacy dei campi `fonti`; controllare le pagine rimanenti in modo semantico, non solo strutturale. I 29 corpi fonte non sono ancora tutti verificati integralmente in questa sessione.


### Verifica semantica delle fonti — prima tranche, 2026-10-13

**Corpi letti integralmente e confrontati in prima passata (9/29):**
- `cronistoria-versione-breve.md`
- `cio-che-sanno-i-draghieri.md`
- `draghieri-spiegazione.md`
- `canzoni-degli-umani.md`
- `deflecte-cantum.md`
- `lamento-di-wade.md`
- `la-natura-di-natura.md`
- `fierezza-battesimo-cornelius.md`
- `fierezza-il-dio-che-e-in-noi.md`

**Osservazioni registrate, non ancora tutte risolte:**
- Le fonti in-world dei Draghieri (Cronistoria breve, Ciò che i Draghieri conoscono, Canto dei Draghieri) presentano la nascita di Bisogno come credenza umana; `La Natura di Natura` e le note esplicite delle fonti distinguono tale credenza dalla cosmologia effettiva. La wiki attualmente mantiene questa distinzione in `cosmologia.md`.
- `draghieri-spiegazione.md` è una fonte OOC canonica ma contiene esteso materiale su Vilegis/Lunaria e altre entità esterne. Quel materiale va mantenuto separato dal canone originario, salvo intersezioni esplicitamente documentate; non è stato importato come fatto autonomo.
- `cio-che-sanno-i-draghieri.md` ha `tipo: "testo-in-world"`, mentre la nota introduttiva lo chiama documento OOC che descrive una prospettiva in-world. La distinzione può essere intenzionale (cornice editoriale OOC, testo narrativo in-world); nessuna riclassificazione automatica.
- `fierezza-il-dio-che-e-in-noi.md` è marcato canonico ma incompleto e interrotto in più punti. La wiki segnala già la limitazione; mantenuta la distinzione fra status canonico e integrità del documento.
- `deflecte-cantum.md` conserva due strofe esplicitamente marcate dall'autore come errate/da ignorare; le note della wiki ne mantengono la cautela.
- **Possibile punto da verificare, non ancora classificato come contraddizione:** `cosmologia.md` afferma che Natura volle preservare gli Umani e che questo atto la prosciugò. Nelle fonti lette finora, `cronistoria-versione-breve.md` parla del ritorno degli Umani dal passato armonico, mentre `La Natura di Natura` li descrive come aberranti e parassitari; il testo D3 (Cronistoria OOC) non è disponibile. Non correggere finché non si controllano tutte le fonti accessibili e il riferimento mancante.
- `Inktober 2018` è stato recuperato ma l'output integrale è stato troncato dal limite di lettura; il documento **non** è considerato verificato integralmente. `Inktober 2019` non è ancora verificato nel corpo. Entrambi restano da leggere per sezioni mirate.

- **Avanzamento fonte:** 9 corpi verificati integralmente; 1 recuperato ma solo parzialmente leggibile in questa passata; 19 non ancora letti integralmente. Non dichiarare chiuso l'inventario semantico.
- **Stato repository al checkpoint:** merge della PR #23 in `main` al commit `b601eb2e6063e2d9a03c8547aa56f3db83f4b379`; l'indice include ora la sezione Cultura. Il branch di questo checkpoint porta l'inventario a 25 branch totali, incluso `main` (24 non-main).


### Risoluzione di una domanda proprietario — L16, 2026-10-13

- La lettura diretta di `content/fonti/misfit.md` mostra che il testo usa il passato per Wendy («colei che fu Vera Viverna») e Solomon («che fu la Vera Sfinge»). Il racconto è collocato nell'Era del Dominio e la sua interpretazione editoriale li identifica come ex-Vere Fiere tornate umane dopo la perdita del potere.
- Rimossa la domanda al proprietario su Wendy/Solomon come possibili eccezioni: l'apparente conflitto derivava da una lettura imprecisa del tempo verbale nella fonte. La regola generale della cronologia resta, senza estenderla oltre le attestazioni disponibili.
- PR di correzione in preparazione sul branch `audit/resolve-l16-from-misfit-2026-10-13`. Dopo l'integrazione, proseguire con la lettura delle fonti rimanenti e la verifica delle altre domande.


### Verifica incrociata di varianti testuali — 2026-10-13

- La lettura integrale dei corpi di **26/29 fonti** è stata completata in prima passata. Le tre antologie Inktober sono state inventariate strutturalmente e lette per sezioni mirate; non sono dichiarate lette integralmente.
- Registrata la discrepanza interna di `Inktober 2018 #Flowing`: la fonte introduce Brienne Brood come XVII Draghiere della Covata, ma la firma della lettera dice VI. `Elenco Draghieri`, la voce di Brienne e la successione già confermata sostengono XVII; la fonte è conservata senza alterare il testo originale.
- Registrata la divergenza fra `deflecte-cantum.md` e `Inktober 2019 #Legend`: la seconda raccolta riproduce due strofe che la fonte autonoma marca esplicitamente come errate/da ignorare. Le correzioni dell'autore prevalgono nelle sintesi wiki; entrambe le versioni restano documentate.
- `Misfit` ha risolto L16: Wendy e Solomon sono indicati al passato come ex-Vere Fiere. L16 è stata rimossa dalle decisioni per il proprietario nella PR #25, già integrata.
- **Rimanenti corpi fonte non letti integralmente:** `inktober-2018.md`, `inktober-2019.md`, `inktober-2024.md`. Restano inoltre da completare la verifica semantica sistematica delle pagine wiki e la riconciliazione dei riferimenti legacy.
- **HEAD di main al checkpoint:** `c33506e51c4c8555848643100d3c56744203d6a3`. Il branch `audit/record-source-variants-2026-10-13` porta il conteggio a 27 branch totali, incluso `main` (26 non-main).


### Seconda tranche di inventario e controllo delle contaminazioni — 2026-10-13

- I 29 file fonte sono inventariati; 26 corpi sono stati letti integralmente in prima passata. Le tre antologie Inktober sono state controllate per frontmatter, struttura e indice rapido, e lette per sezioni mirate; non sono considerate verificate integralmente.
- Rilevata una discrepanza fra il registro L13 e `content/fazioni/fiamme.md`: il registro diceva che la voce non classificava le Fiamme come fazione del Kindsgard, ma il testo effettivo le definiva «terza fazione del Kindsgard» e importava meccaniche di Vilegis/Lunaria come fatti del Kindsgard. La PR #27 riclassifica la voce come bozza, mette il materiale esterno in quarantena e corregge anche la descrizione nell'indice.
- `Inktober 2018 #Flowing` nomina **Sirius** come fornitore di rocce nel I anno di Regno. Non è trovato altrove; non può essere automaticamente identificato con Syrus Salamander, che la cronologia colloca tra i Guardiani uccisi prima dell'ascesa a Re. Registrata L19 per chiarimento.
- Varianti **Brienne/Brianne** rilevate in `Inktober 2019 #Build` e `Inktober 2024 #Binoculars`; la forma canonica della voce resta Brienne, senza modificare le citazioni originali.
- Nuovo ancoraggio relativo per Inktober 2024: `#Binoculars` dichiara cinque anni dalla missione che ripopolò la Città-Alveare, coerente con `Inktober 2019 #Build`. Non permette ancora di assegnare un anno assoluto alla raccolta.
- **Prossimo passo:** chiudere la revisione mirata delle tre antologie Inktober, verificare i corpi delle pagine wiki più legate alle incongruenze emerse e confrontare le fonti con i registri canonici. Le affermazioni esterne restano separate dal canone originario.
- **Branch corrente:** `audit/quarantine-fiamme-and-sources-2026-10-13`; conteggio branch dopo la creazione: 28 totali, 27 non-main.


### Riconciliazione delle pagine dipendenti da L16 — 2026-10-13

- Aggiornate `content/fazioni/vere-fiere.md`, `content/storia/ere.md` e `content/personaggi/dominic-draco.md`: riportavano ancora L16 come aperta e interpretavano `Misfit` come se Wendy Wyrm e Solomon fossero presentati come Vere Fiere attive. La lettura diretta della fonte mostra il passato verbale («colei che fu Vera Viverna», «che fu la Vera Sfinge»); i riferimenti a L16 sono stati rimossi e la regola generale della cronologia mantenuta.
- La voce Vere Fiere ora rinvia alle Fiamme come bozza in quarantena e non ne ripete come canonica la meccanica esterna.

- La verifica incrociata ha trovato ulteriori riferimenti obsoleti a L16 nelle voci `content/personaggi/wendy-wyrm.md` e `content/personaggi/solomon.md`. Sono stati corretti in modo coerente con `Misfit`: i titoli di Vera Viverna/Vera Sfinge sono trattati come identità storiche, non come poteri ancora attivi nell'Era del Dominio.

- La verifica delle pagine dipendenti ha individuato due ulteriori affermazioni stale: `content/_glossario.md` definiva ancora le Fiamme «terza fazione del Kindsgard» e `content/storia/cronologia.md` manteneva aperta L16. Entrambe sono state riallineate nella PR #27: Fiamme come riferimento esterno non confermato e L16 chiusa tramite `Misfit`.


### Nuova discrepanza cronologica — Syrus e gli Annali dell'Artiglio di Fuoco, 2026-10-13

- `Inktober 2019 #Wild` attribuisce a Syrus Salamander un brano degli Annali che menziona città costruite dall'Anno del Dominio; `content/personaggi/salamander.md` e la cronologia collocano Syrus tra i Guardiani uccisi da Dominic prima dell'ascesa a Re Draco. Il testo integrale degli Annali non è reperito e il catalogo non dimostra che il brano coincida con il documento legacy `annali-artiglio-di-fuoco-intro.md`.
- L19 è stata ampliata per comprendere questa discrepanza e il nome Sirius in `Inktober 2018 #Flowing`. Il frammento non viene più datato con sicurezza all'Era degli Eroi e non viene usato per sostenere che Syrus sia sopravvissuto.
- Rilevata anche la variante «Adryanne Achenium» in `Inktober 2019 #Husky`, mentre l'Elenco Draghieri e le altre occorrenze usano «Adryanne Achenius». Registrata come variante testuale, senza correzione del sorgente.


### Aggiornamento copertura delle antologie — 2026-10-13

- Completata la lettura integrale di `content/fonti/inktober-2024.md` (218 righe). L'annotazione sul possibile Battesimo fallito in `#Hile/#Sun` resta un'ipotesi editoriale: il testo descrive un personaggio che ricorda di essere morto e tornato e che non viene percepito dagli Umani, ma non nomina esplicitamente un Battesimo né lo chiama Bruciato o Fiamma.
- Avanzamento aggiornato: **27/29 corpi fonte letti integralmente in prima passata**. Restano da completare la lettura integrale delle raccolte `Inktober 2018` e `Inktober 2019`; per entrambe sono già stati letti l'indice e sezioni mirate rilevanti per le voci wiki.


### Riconciliazione riferimenti fonte e precisione dei riepiloghi — 2026-10-13

- Riletto integralmente `Inktober 2024`: l'indice rapido non deve trasformare il personaggio di `#Hile/#Sun` in un Bruciato né affermare che abbia superato un Battesimo fallito. La fonte dice che ricorda di essere morto e tornato e che non viene percepito dagli Umani; causa e identità restano non esplicitate. Indice e L13 sono stati corretti per separare testo e ipotesi.
- L17 chiarisce che i tredici Draghieri schierati in `Inktober 2019 #Build` non sono automaticamente i tredici Guardiani descritti in `#Legend`; non sono gruppi da sovrapporre.
- Il bestiario ora specifica che «Fiere Maggiori», «Fiere di Media Pericolosità» e «Fiere Minori» sono raggruppamenti editoriali, non una gerarchia canonica; «Fitofiera» resta una categoria attestata nelle fonti che la nominano.
- Riconciliati i campi `fonti` delle pagine su Draghieri, Vere Fiere, Cronologia, Ere, Cosmologia, Fierezza/Maestà e Dominic, aggiungendo `draghieri-spiegazione` dove il testo usa direttamente la guida OOC e `Inktober_2019` dove supporta il contenuto. I riferimenti mancanti D3/D4 e `Copia_di_I_Draghieri_del_kindsgard` restano distinti e non sono sostituiti.
- Corretto il catalogo: `draghieri-spiegazione` è l'identificatore di riferimento adottato, ma il file sorgente non espone un campo `id` nel proprio frontmatter.
- Avanzamento fonti: **27/29 corpi letti integralmente**; restano da completare le antologie `Inktober 2018` e `Inktober 2019`. Tutti i 65 Markdown sotto `content/` sono stati inventariati e controllati a livello strutturale; l'audit semantico delle pagine e la riconciliazione delle fonti restano aperti.
- **Branch corrente:** `audit/source-fidelity-citations-2026-10-13`; inventario aggiornato a 31 branch totali, incluso `main` (30 non-main).

- Il confronto diretto fra `content/fonti/bacche-emofaghe-fonte.md` e `Inktober 2018 #Drain` mostra che #Drain è una variante abbreviata e parzialmente riformulata della scheda tecnica, non una sezione narrativa/ambientale né una seconda attestazione indipendente. Aggiornata D2 nel catalogo: la scheda completa resta normativa e la variante è conservata senza prevalere su di essa.


### Aggiornamento copertura e nuova discrepanza — 2026-10-13

- La lettura diretta di `Inktober 2018` è completata; avanzamento: **28/29 corpi fonte letti integralmente**. Resta da completare la raccolta `Inktober 2019`, della quale sono già state lette sezioni mirate (#Build, #Husky, #Legend, #Wild, #Swing, #Pattern, #Dragon, #Overgrown, #Tread, #Treasure, #Tasty e altre).
- Nuova discrepanza nominale/ordinale: `Inktober 2019 #Build` chiama Adryanne Achenius IX Draghiere del Soffione Uncinato; `#Husky` e `Elenco Draghieri` riportano XII. La sintesi mantiene XII, ma l'identità temporale non è risolvibile con le fonti attuali; registrata L20.
- Il numero IX/XII non va confuso con la variante grafica Achenius/Achenium, che resta una variante testuale registrata in C8.
- Il branch corrente `audit/adryanne-ordinal-and-coverage-2026-10-13` porta il conteggio a 32 branch totali, incluso `main` (31 non-main).


### Chiusura della prima passata di inventario fonti — 2026-10-13

- Completata la lettura integrale in prima passata di tutte le **29/29 fonti** catalogate, incluse le antologie `Inktober 2018`, `Inktober 2019` e `Inktober 2024`. Questo chiude l'inventario e la lettura di primo livello delle fonti, non l'intero audit semantico.
- Varianti e limiti registrati: `Giù nel Bosco` ha una strofa diversa in `Inktober 2019 #Enchanted`; la raccolta canzoni resta il testo di riferimento e la variante è conservata. Le liane rosse di `#Ancient` e le piccole Fiere alate di `#Enchanted` non sono identificate per specie; non vengono fuse con Fiere note per somiglianza.
- **Prossimo passo:** completare il confronto sistematico fra tutte le pagine wiki e le fonti appena lette, verificare le citazioni puntuali, controllare i registri editoriali e le destinazioni dei riferimenti legacy. Il report finale resta prematuro finché queste verifiche non sono concluse.
- **Branch corrente:** `audit/adryanne-ordinal-and-coverage-2026-10-13`; 32 branch totali, 31 non-main.


### Seconda passata: confronto semantico delle pagine wiki — 2026-10-15

- **Perimetro letto in questa passata:** i 29 file di contenuto non fonte delle categorie Cultura (2), Fazioni (3), Fiere (3), Mondo (5), Personaggi (12), Sistemi (2) e Storia (2), oltre a `content/index.md` e `content/_glossario.md`. La lettura diretta dei corpi di questi 31 file è completata per questa prima passata; non significa che ogni affermazione sia già stata verificata contro ogni fonte primaria.
- **Registro dettagliato per pagina:** `[[Registro di copertura dell'audit]]` (`content/meta/audit-copertura-pagine.md`) elenca tutti i 31 file, distingue lettura, confronto diretto e verifica completa, e annota i residui noti.
- **Inventario fonti:** il checkpoint precedente registra la lettura integrale in prima passata di 29/29 file in `content/fonti/`. In questo passaggio sono stati riaperti direttamente i testi pertinenti per le verifiche qui sotto; non si è ripetuta la lettura integrale di tutte le 29 fonti.
- **Correzioni documentali preparate nel branch `audit/page-semantic-pass-2026-10-15`:**
  1. `content/mondo/cosmologia.md`: rimossa l'affermazione certa che Natura avrebbe deliberatamente voluto preservare gli Umani e che ciò l'avrebbe prosciugata; la causa viene ora indicata come non stabilita dalle fonti disponibili, distinguendo l'interpretazione in-world di Wendy dalla ricostruzione non reperibile D3.
  2. `content/storia/ere.md`: la nascita di Bisogno ed Espediente dalle preghiere è ora qualificata esplicitamente come credenza mitica in-world, coerente con C1 e con `La natura di Natura`.
  3. `content/personaggi/caitlin-chimera.md`: rimossi i tipi di testa «capra, leone, serpente», non specificati dalle fonti; allineata la descrizione a `Canzoni degli Umani` e `Inktober 2018 #Poisonous`.
  4. `content/personaggi/luther-leviathan.md`: il Canto è descritto secondo l'episodio documentato di `Inktober 2018 #Whale`; rimossa la generalizzazione non attestata sull'alterazione del corso delle acque.
  5. `content/mondo/maesta.md`: la graduazione della forza presso la Maestà e la relazione fra eruzioni ed Echi sono qualificate come ricostruzioni non verificabili direttamente sugli originali D3/D4 mancanti.
  6. `content/index.md`: chiarito che la wiki custodisce il canone Kindsgard e mantiene distinte le intersezioni con Vilegis/Lunaria, evitando l'etichetta ambigua «Archivio Canonico per Battle for Vilegis».
  7. `content/fazioni/fiamme.md` e `content/meta/fonti.md`: spostata la nota «confermato in sessione» dal campo `fonti` a una decisione editoriale esplicita C9. La decisione conferma il seme narrativo Bruciati → Fiamme, non la presenza di una fazione organizzata nel Kindsgard né le meccaniche esterne.
  8. `content/mondo/anello-di-fuoco.md` e `content/meta/fonti.md`: attribuita la formulazione sulla forza del nucleo alla prospettiva in-world di *Ciò che sanno i Draghieri*, che la contiene testualmente; aggiunto lo slug `cio-che-sanno-i-draghieri` come identificatore di riferimento adottato e documentato, senza affermare che sia il nome originale del file.
  9. Normalizzati alcuni wikilink di pagine sintetiche secondo `content/meta/convenzioni.md`: i collegamenti a Geografia, Ere e Fiere usano i titoli wiki e non percorsi file (`index.md`, `geografia.md`, `frederick-fenice.md`, `altri-personaggi.md`). Le fonti verbatim non sono state modificate.
  10. `content/fazioni/draghieri.md`: la nota sul modo in cui i Draghieri sono rappresentati su Vilegis/Lunaria è ora marcata esplicitamente come contesto OOC esterno, non come proprietà del canone originario Kindsgard.
  11. `content/fazioni/fiamme.md`: rimossi dai tag di frontmatter i concetti specifici del materiale esterno in quarantena (`revenant`, `comunità`, `casata-radiant`, `anomalia`) e la classificazione generica `fazione`; restano tag che indicano Fiamme, Bruciati, Vilegis e quarantena editoriale.
  12. `content/fazioni/draghieri.md` e `content/sistemi/il-battesimo-del-fuoco.md`: corretta la definizione del numero progressivo, che indica la posizione nella sequenza per specie, non il numero di predecessori; la forma «33° Viverna» resta coerente con Wade come trentatreesimo Draghiere della Viverna.
  13. Allineati i campi `fonti` di Draghieri, Battesimo, Fierezza/Maestà, Dominic, Wade, Bran, Brood, Caitlin, Luther, Frederick e Soffione Uncinato: aggiunto `Elenco_Draghieri_Conosciuti` dove la voce usa numeri progressivi o titoli di sequenza per i quali l'elenco è fonte canonica.
  14. Allineati i campi `fonti` delle pagine Geografia, Maestà, Ere, Caitlin e Cronologia alle fonti effettivamente citate nel corpo (`Cronistoria_versione_breve`, `cio-che-sanno-i-draghieri`, `La_natura_di_Natura`, `Canzoni_degli_Umani`).
  15. `content/storia/cronologia.md`: allineata alla cautela già presente nella voce Frederick la frase sul volto identico alla Giovane Fenice; l'identità fisica resta riportata, ma la connessione cosmologica è dichiarata non completamente documentata. Aggiunto anche l'Elenco canonico per il titolo Unica Fenice.
  16. `content/personaggi/dominic-draco.md`: rimossa la formula ambigua «detentore di tutto il Fondamento del Kindsgard» e precisato che Dominic detiene il potere dei tredici vettori manifestatisi nel Kindsgard, collegati al Fondamento ma non equivalenti al Fondamento di Vilegis/Lunaria.
  17. Nella stessa voce, qualificata come non verificata la composizione dei tredici Guardiani: il testo non li classifica più come gruppo certamente composto da Draghieri, Vere Fiere o Fiere effettive; la lista completa resta aperta in L17.
- **Questioni che restano aperte dopo il confronto:** i testi D3/D4 e altri riferimenti legacy non reperiti; il tredicesimo Spettro storico; la mappa e i rapporti spaziali non esplicitati; i dettagli meccanici dell'eccezione in `Risveglio del Drago`; le identità degli Annali delle Sabbie/Artiglio di Fuoco; le Fiamme nel Kindsgard e il termine «Infiammati»; Seymour/Shai'Hulud; la lista dei tredici Guardiani; l'ambiguità «Salamandra» in `L'Esodo`; le discrepanze Sirius/Syrus e Adryanne IX/XII; le grafie Angeline e i titoli editoriali delle due fonti Fierezza. Le decisioni del proprietario sono già elencate in `content/meta/domande-aperte.md` e non vengono duplicate qui.
- **Stato:** punto 1 (ricognizione repository/checkpoint) completato; punto 2 in avanzamento: inventario delle fonti e prima passata dei corpi sono documentati, ma la verifica puntuale di tutte le citazioni e la riconciliazione completa dei riferimenti legacy restano da chiudere.
- **Esito della tranche:** PR #31 integrata in `main` con merge commit `88df1c80929a391324a647d8a2f21737f5ca0b93`. Il workflow `Validate Quartz wiki` sul suo HEAD `a6ed5dd403b2043bbcb28c74fad8d11cb4023e05` è terminato con successo (controllo wikilink e build Quartz); non è stata restituita una run separata sul merge commit. Il registro di copertura per file è `content/meta/audit-copertura-pagine.md`.
- **Prossimo passo:** proseguire il confronto sistematico delle citazioni e delle eccezioni, mantenendo esplicite le lacune D3/D4 e i residui L4/L17.


### Continuazione del confronto semantico — 2026-10-15

- **HEAD di `main` dopo PR #31:** `88df1c80929a391324a647d8a2f21737f5ca0b93`. La PR #31 ha integrato le correzioni della prima passata, la matrice di copertura delle 31 pagine non fonte e gli aggiornamenti al registro delle decisioni. La validazione Quartz sul HEAD della PR è riuscita; nessuna run separata del merge commit è stata restituita.
- **Nuova correzione in preparazione:** `content/sistemi/il-battesimo-del-fuoco.md` non presenta più Ishvard/Karsh come «unicum narrativo, non ripetibile». La fonte descrive un solo caso ma non ne spiega la ripetibilità; il testo ora lo tratta come eccezione documentata e rimanda a L4. Aggiunto `Risveglio_del_Drago` al campo `fonti`, perché la pagina usa direttamente il racconto.
- **Registro aggiornato:** `content/meta/audit-copertura-pagine.md` annota la modifica e mantiene aperta la verifica del meccanismo. Nessuna fonte narrativa è stata modificata.
- **Branch corrente:** `audit/citation-crosscheck-2026-10-15` (creato da `main` dopo PR #31); modifiche da integrare con PR separata dopo validazione.
- **Prossimo passo:** continuare il controllo diretto dei corpi fonte rispetto alle pagine, in particolare geografia, cronologia, voci di personaggio e affermazioni relative alla connessione con Vilegis/Lunaria. Aggiornare la matrice per ogni rilievo verificato; non promuovere a canoniche le ipotesi che dipendono da D3/D4 mancanti.


### Secondo passaggio di verifica delle citazioni — 2026-10-15

- `content/cultura/religioni.md`: aggiunti `Canzoni_degli_Umani` e `Riflessioni` al campo `fonti`, perché il corpo li cita direttamente. Rimossa l'inferenza non dimostrata secondo cui l'incompletezza del saggio di Wade proverebbe una difficoltà intrinseca dei Draghieri. Riallineata la frase su Dominic: detiene il potere dei tredici vettori manifestatisi nel Kindsgard, non il Fondamento di Vilegis/Lunaria.
- La matrice `content/meta/audit-copertura-pagine.md` è aggiornata per questa voce. Il confronto diretto delle citazioni prosegue; non si dichiara completata la verifica integrale della pagina.

- `content/mondo/citta-alveare.md`: rimosse la datazione «in tempi immemori» e l'attribuzione della fondazione ai Draghieri della Covata, non sostenute dalle fonti elencate nella voce. La presenza della struttura e il presidio di Bartholomew Brood sono attestati da `Prevedibilità (covata)`; la data e i fondatori originari restano ignoti nel corpus disponibile.

- `content/mondo/citta-alveare.md`: riallineata anche la descrizione delle gallerie a `Inktober 2019 #Pattern` e alla scheda Zaratan. La fonte associa la forma dei tunnel al carapace ma non dice che la Fiera li abbia scavati; rimossa l'attribuzione causale certa.

- `content/mondo/citta-alveare.md`: qualificate anche due generalizzazioni non misurate: le difese sono predisposte a contrastare sciami, ma le fonti non fissano una soglia numerica di resistenza; gli attacchi sono ricorrenti nel corpus, ma non ne è stabilita una frequenza costante.

- `content/meta/fonti.md`: registrato un rilievo di tracciabilità per i motti `Dal Fuoco alla Vita` e `Omnia praedae fieri Potest`. La ricerca testuale non li ha rintracciati nelle 29 fonti presenti; la loro provenienza potrebbe dipendere da D4 o dal riferimento legacy Draghieri/Vere Fiere, ma ciò non è dimostrato. `Ab Necessitate Excusi` è invece attestato in Inktober 2018/2019. Non eliminare i motti né considerarli primariamente verificati finché la provenienza non è chiarita.

- Per evitare che motti non rintracciati siano presentati come attestati da fonti primarie, aggiunta una nota di provenienza in `Draghieri`, `Vere Fiere` e `Tradizioni, Canti e Motti` per `Dal Fuoco alla Vita` e `Omnia praedae fieri Potest`. Le formule restano riportate nella sintesi wiki, ma la fonte primaria non è stata trovata nelle 29 fonti disponibili; D4 e il riferimento legacy Draghieri/Vere Fiere restano non reperiti.

- `content/storia/cronologia.md`: qualificato il rapporto temporale 100:1 fra Lunaria e Kindsgard. È presente nella sintesi wiki, ma non è verificabile direttamente perché la Cronistoria OOC (D3) non è reperibile; resta un dato riportato dalla sintesi, non una misura confermata dalle fonti accessibili.

- `content/mondo/geografia.md`: attribuita esplicitamente alla prospettiva collettiva in-world di `Ciò che sanno i Draghieri` la descrizione del Bordo come area in cui quasi nulla cresce o vive e come rifugio originario degli Umani. Il testo fonte non è stato modificato.


### Confine cosmologico Kindsgard / Vilegis-Lunaria — 2026-10-15

- Rilevata una fusione troppo assertiva fra il cataclisma che altera Natura e la `Rovina` di Vilegis/Lunaria. La `Cronistoria (versione breve)` descrive il cataclisma come un evento che altrove divise terra e materia, ma non lo nomina direttamente come Rovina; D3/D4 non sono reperibili.
- Aggiornati `content/mondo/cosmologia.md`, `content/storia/cronologia.md` e `content/_glossario.md`: il cataclisma resta attestato, mentre l'identificazione nominale con la Rovina è presentata come parallelismo interpretativo non verificato da una fonte primaria disponibile. `content/meta/fonti.md` e la matrice di copertura registrano il confine.
- Nessuna fonte narrativa originale è stata modificata. La distinzione segue il mandato di non fondere il canone originario Kindsgard con Vilegis/Lunaria senza una fonte primaria verificabile.
- **Branch corrente:** `audit/cosmology-boundary-2026-10-15`, creato da `main` dopo il merge della PR #32.
- **Prossimo passo:** validare questa tranche, poi proseguire il controllo delle affermazioni cosmologiche e delle intersezioni esplicite; mantenere aperte le questioni che dipendono da D3/D4.

- Estesa la stessa cautela a `content/storia/ere.md`: il testo non assume più che il parallelismo con la Rovina autorizzi a importare nel Kindsgard altri elementi della cosmologia di Vilegis/Lunaria; la fonte breve chiama il periodo «Era della Rovina» e attesta un cataclisma con effetti altrove, mentre D3/D4 servirebbero a chiarire ulteriori dettagli. La matrice di copertura è aggiornata.


## Checkpoint operativo — 2026-10-15, dopo PR #36

- La punta di `main` include le PR #33, #35 e #36, più gli aggiornamenti operativi successivi; i singoli SHA dei merge sono registrati nei punti seguenti.
- **PR #33 integrata** nel commit `498e5a91f7956da9d409c818cb585fc6d6bd921f`; workflow Quartz sul commit della PR: `success`. Confine Kindsgard/Vilegis-Lunaria chiarito, rapporto temporale 100:1 qualificato come non verificabile direttamente.
- **PR #35 integrata** nel commit `bd36bd920a73ae5bc54d6d4714ec3d2d6e171841`; workflow Quartz sul commit finale della PR: `success`. Datazione di Ishvard/Karsh sospesa per conflitto interno e affermazione di irripetibilità rimossa.
- **PR #36 integrata** nel commit `06be257a31ff3691e73cef8fb623d1ab8463028b`; workflow Quartz: `success`. Tutte le occorrenze puntuali del rapporto 100:1 sono qualificate come dato riportato dalla sintesi, non verificabile direttamente senza D3.
- **PR #37 integrata** nel commit `bfa5f0bc672b16c5ec9f9c09f309a8b7a02bba5f`; workflow Quartz: `success`. Corretta la scheda della Loccia in base a `Inktober 2019 #Snow` e mantenuta aperta la distinzione lessicale con “Lochs”.
- **PR #38 integrata** nel commit `8e5db55eea88c7ddb2733dd87fb13a9dde324674`; workflow Quartz: `success`. Rimossa l'attribuzione non confermata di morfologia insettiforme alle Falenottere.
- **PR #39 integrata** nel commit `e2c4f5058ca074a2e25e5afcb5cb9ddef1ac3fff`; workflow Quartz: `success`. I due motti senza attestazione primaria sono ora qualificati come attribuzioni della sintesi wiki, non come fatti canonici verificati.
- PR #34 chiusa come superseded dalla #35; nessun contenuto documentale è stato scartato nella ricostruzione su base aggiornata.
- Le PR #29 e #31 risultano merged e i loro contenuti sono già in `main`. L'ispezione della PR #12 ha mostrato che le sue principali correzioni sulle fonti, sulle Fiere, sui Bruciati, su Dominic e sulle due vie per diventare Vera Fiera sono già presenti in `main`; i riferimenti obsoleti a L16 sono stati successivamente risolti con `Misfit`. Non mergiare la PR #12 o #14 in blocco: sono tranche storiche superate.
- Riconciliazione puntuale delle PR storiche #12 e #14: la #12 riguarda 26 file, la #14 tre. Le modifiche utili su Battesimo, eccezioni di Wade, doppia via per diventare Vera Fiera, fedeltà delle descrizioni Fiere, Fiamme, geografia, Guardiani e provenienza degli Annali risultano già presenti in `main` in formulazioni aggiornate o sono state superate da verifiche successive. Non è emersa una seconda tranche da recuperare da queste PR; il residuo Ishvard/Karsh è stato isolato e corretto nella PR #35.
- Branch da riconciliare semanticamente: `audit/ishvard-karsh-source-gap-2026-10-13` è in gran parte superato dalle PR #29/#31 e #35; `audit/cosmology-boundary-2026-10-15` ha prodotto la PR #33. I branch storici delle PR squash-merged non vanno considerati lavoro mancante solo perché i loro SHA non compaiono nella storia lineare di `main`.
- Inventario branch aggiornato dopo le PR #33, #35 e #36: **40 branch non-main**; **39 PR** associate, di cui **36 merged**, **3 chiuse senza merge** (#12, #14, #34) e **0 aperte**. Un solo branch non ha una PR associata: `audit/ishvard-karsh-source-gap-2026-10-13`; il confronto dei suoi 10 file non ha evidenziato correzioni sostanziali residue non già riprese o superate in `main`, e la contraddizione cronologica che conteneva è stata corretta nella PR #35.
- **Blocco tecnico sulla cancellazione dei branch:** il repository ha `delete_branch_on_merge=false`; gli strumenti GitHub disponibili in questa sessione non espongono un'azione di cancellazione dei branch/ref. I merge sono verificati, ma non posso dichiarare cancellati i branch. Per evitare di ripetere questo problema, va abilitata la cancellazione automatica dei branch dopo il merge nelle impostazioni GitHub oppure va eseguita la cancellazione da un'interfaccia/API con permessi di scrittura.
- Prossimo passo: verificare il residuo di PR #12/#14 file per file, classificare gli altri branch non associati a PR, aggiornare il checkpoint a ogni tranche e continuare la verifica semantica. L'audit complessivo non è ancora completato; D3/D4 restano non reperibili.


## Verifica residua — rapporto temporale 100:1

La PR #36 è stata integrata nel commit `06be257a31ff3691e73cef8fb623d1ab8463028b`; il workflow Quartz sul commit finale della PR ha esito `success`. Le occorrenze puntuali in `Cronologia` e `Le Ere del Kindsgard` sono ora coerenti con la nota generale: 100:1 è un rapporto riportato dalla sintesi, non una misura confermata senza D3.


## Controllo dei campi `fonti` — 2026-10-15

- Eseguita una scansione dei campi `fonti` di tutte le 31 pagine non-fonte registrate nella matrice di copertura. Gli alias storici controllati (tra cui `Fierezza`, `Fierezza__il_Dio_che_è_in_noi`, `Bacche_Emofaghe.docx`, `Soffioni_Uncinati`, `Prevedibilità__covata_`, `Il_Trattato` e `Canzoni_degli_Umani`) hanno una mappatura nel catalogo.
- Registrato un ulteriore identificatore non riconciliato: `Draghieri_Vere_Fiere_del_Kindsgard`, usato nelle pagine Draghieri, Vere Fiere e Fierezza/Maestà. Potrebbe riferirsi al percorso mancante `content/fonti/draghieri-vere-fiere.md`, ma l'identità non è dimostrata; il riferimento è stato conservato e il dubbio aggiunto a `content/meta/fonti.md` e alla matrice.
- I riferimenti D3/D4, gli Annali e `Copia_di_I_Draghieri_del_kindsgard` restano lacune documentali già registrate. Nessun riferimento è stato sostituito per inferenza.
- Prossimo passo: proseguire la verifica semantica delle affermazioni delle pagine, mantenendo distinti i controlli di frontmatter, i confronti diretti con fonti e la verifica integrale di ogni affermazione. Il perimetro non è ancora chiuso.


## Verifica semantica — Loccia, 2026-10-15

La verifica diretta ha rilevato e corretto la negazione non corretta nella scheda della Loccia: `Inktober 2019 #Snow` attesta bestia acquatica, dentatura, ghiacciai perenni del Nord e sorgenti dei fiumi. PR #37 è integrata con workflow Quartz `success`. Resta non esplicitata nelle fonti l'equivalenza terminologica fra “Lochs” e “Loccia”.


## Verifica semantica — Falenottere, 2026-10-15

Nel confronto delle fonti Inktober la scheda definiva le Falenottere “insettiformi”, ma `Inktober 2019 #Frail` parla di Fiere insettiformi in generale senza attribuire direttamente quella morfologia alle Falenottere. PR #38 è integrata con workflow Quartz `success`; luce, piccole dimensioni, ali e pungiglione restano descritti sulla base di `#Enchanted` e `Inktober 2018 #Drooling`.


## Verifica semantica — motti non attestati, 2026-10-15

Il confronto fra `Tradizioni`, `Draghieri`, `Vere Fiere` e le fonti disponibili ha rilevato che `Dal Fuoco alla Vita` e `Omnia praedae fieri Potest` erano presentati in forma assertiva nonostante non siano stati rintracciati nel corpus di 29 fonti. PR #39 è integrata con workflow Quartz `success`: i due motti sono qualificati come attribuzioni della sintesi wiki, senza promuoverli a fatti canonici; `Ab Necessitate Excusi` resta invece attestato in `Inktober 2019` come saluto a risposta identica.


## Verifica semantica — Giorno del Bisogno, 2026-10-15

Il confronto diretto con `Inktober 2019 #Ornament` ha rilevato che `Tradizioni` presentava come annuale la festività e diceva che gli Umani ricevevano piccoli doni. La fonte mostra il permesso di fare un dono o soddisfare un piccolo desiderio durante la scena, associata alla piena autunnale; la periodicità della festività non è esplicitamente attestata. La correzione è preparata nel branch `audit/day-of-need-source-precision-2026-10-15`.


## Verifica semantica — sei, sette e tredici vettori, 2026-10-15

Il confronto fra `Deflecte Cantum`, `Tradizioni` e `Cosmologia` ha rilevato un'equivalenza non dimostrata: la fonte dice “sei vettori in tredici affondi”, mentre il canone originario elenca sette vettori e la connessione successiva descrive tredici vettori/Guardiani. La nota della fonte attribuiva direttamente la strofa all'assorbimento dei tredici Guardiani senza che il testo lo esplicitasse; anche il termine «espedienti» non prova da solo che si parli dell'arma Espediente. La formulazione è stata resa provvisoria e aggiunta L21 per una chiarificazione del proprietario o una fonte primaria.


## Checkpoint operativo — 2026-10-15, dopo PR #42

- PR #42 (Deflecte Cantum) integrata con squash nel commit `0a6c23c6ecf009c7f21f8c272d2e19f64f37434d`; la workflow `Validate Quartz wiki` sul suo HEAD aveva esito `success`.
- La nuova nota distingue il testo attestato (“sei vettori in tredici affondi”) dalle interpretazioni non dimostrate circa i sette vettori originari, i tredici Guardiani e l'arma Espediente; L21 resta aperta per una fonte primaria o chiarimento del proprietario.
- Riconciliazione branch: `audit/ishvard-karsh-source-gap-2026-10-13` e `audit/cosmology-boundary-2026-10-15` non vanno mergiati nelle versioni correnti perché contengono formulazioni superate rispetto a `main`; le cautele sostanziali risultano già integrate nelle PR successive.
- Il branch `audit/day-of-need-source-precision-2026-10-15` è ridondante rispetto a `main` e alle modifiche consolidate nella PR #40/#42.
- **Pulizia branch ancora aperta:** l'impostazione GitHub `delete_branch_on_merge` risulta `false`. Gli strumenti GitHub disponibili in questa sessione non espongono un'operazione di cancellazione dei branch; quindi nessun branch è dichiarato eliminato. Per evitare falsi positivi, mantenere un elenco separato dei branch da eliminare manualmente o usare una connessione che consenta `DELETE /git/refs/heads/{branch}`.
- Prossimo passo: verificare i branch rimanenti contro il contenuto corrente di `main`, aprire PR solo per differenze documentali effettive non ancora integrate e continuare l'audit semantico. Non mergiare branch storici sulla sola base dei conteggi ahead/behind dopo squash merge.


## Manutenzione branch dopo merge — 2026-10-15

- La cancellazione automatica nativa di GitHub risulta disattivata e la connessione corrente non espone una mutazione per eliminare refs. Per applicare la regola richiesta alle PR future, è stata preparata la workflow `.github/workflows/delete-merged-branch.yml`: cancella il branch head solo dopo una PR merged, solo se appartiene allo stesso repository e non è il branch predefinito.
- La workflow è stata estesa con una scansione giornaliera dei branch associati a PR merged: elimina solo se il branch esiste ancora allo stesso SHA della PR merged, non ha PR aperte, appartiene al repository e non è il branch predefinito. La pulizia arretrata resta da verificare dal primo run schedulato.


## Verifica pulizia branch — 2026-10-15, dopo PR #45

- PR #45 è stata integrata con squash; la workflow `Validate Quartz wiki` sul branch PR ha concluso `success`.
- Verifica effettiva della workflow `Delete merged pull request branches`: run `38722940799` concluso `success`; il branch `maintenance/prune-merged-branch-backlog-2026-10-15` non compare più nell'elenco dei branch remoti dopo il run. La cancellazione automatica post-merge è quindi verificata almeno su questo caso.
- Il job schedulato giornaliero è stato aggiunto per ripulire i branch storici delle PR merged, ma il primo run schedulato non è ancora avvenuto. I branch delle PR #42–#44 che sono rimasti dopo i rispettivi merge devono essere ricontrollati dopo il primo run.
- Resta un branch senza PR associata, `audit/ishvard-karsh-source-gap-2026-10-13`: il contenuto è superato da `main`, ma non verrà cancellato dalla routine che elimina solo branch corrispondenti esattamente all'head di una PR merged. La sua pulizia richiede un'azione esplicita tramite un'interfaccia con permessi di cancellazione.


## Riconciliazione finale del branch Ishvard/Karsh — 2026-10-15

Il branch `audit/ishvard-karsh-source-gap-2026-10-13` è stato confrontato file per file con `main`. Le sue formulazioni su Ishvard/Karsh non vanno recuperate perché `main` ha già neutralizzato la datazione discordante e rimosso l'inferenza di irripetibilità. Il confronto ha però evidenziato omissioni di tracciabilità nei campi `fonti`: `Risveglio_del_Drago` mancava da `Fierezza e Maestà`, `draghieri-spiegazione` mancava da `Il Battesimo del Fuoco` e `Elenco_Draghieri_Conosciuti` mancava da `Le Ere del Kindsgard`. Queste sole aggiunte sono state riapplicate su un branch pulito basato su `main`.


## Verifica semantica — Città-Alveare e numero 1247, 2026-10-15

Il confronto diretto con `Prevedibilità (covata)` mostra che Bartholomew conta le squadre in posizione numerandole da 1 a 1247; la fonte descrive tubi di rame ma non dice che siano 1247 né che ogni squadra abbia un tubo dedicato. Corrette `Città-Alveare` e la sintesi in `Geografia`. Il controllo di `Inktober 2024 #Binoculars` mostra inoltre che le ondate di Fiere sono descritte come susseguitesi a ritmo costante nei cinque anni dalla missione di ripopolamento: mantenuta questa affermazione circoscritta al periodo narrato, senza inventare una cadenza numerica.

- Nota sulla fondazione della Città-Alveare: `Inktober 2019 #Build` dice che l'Artiglio Sepolto è il dominio della Covata «da tempi immemori», ma non identifica la data o i fondatori della struttura. La sintesi distingue ora la durata del dominio dalla datazione dell'edificio.


## Pulizia dei branch superseded — 2026-10-15

- La workflow di pulizia è stata estesa per eseguire la scansione sia dopo ogni merge sia su pianificazione giornaliera. Per ogni branch di PR merged elimina solo se il ref coincide esattamente con l'head della PR e non ci sono PR aperte.
- Aggiunta una allowlist one-shot, con SHA attesi e controllo delle PR aperte, per i branch già verificati come superseded/orfani: PR #12 (`audit/source-inventory-and-baptism-consistency`), PR #14 (`audit/coerenza-battesimo-pagine-potere`), PR #34 (`audit/ishvard-karsh-chronology-reconcile-2026-10-15`), PR #41 (`audit/deflecte-cantum-vectors-2026-10-15`), il branch orfano Ishvard/Karsh (dopo recupero selettivo dei riferimenti in PR #47) e il branch di checkpoint `maintenance/auto-delete-merged-pr-branches-2026-10-15` già raggiunto dalla storia di `main`.
- La cancellazione è vincolata allo SHA esaminato; se un branch è avanzato o ha una PR aperta, viene conservato. La prima esecuzione su un successivo merge va verificata prima di considerare la pulizia arretrata completata.


## Correzione della workflow di pulizia — 2026-10-15

- Il primo run della workflow aggiornata (`38724168648`) ha fallito nel job di pruning con `Resource not accessible by integration`; il job separato di cancellazione del branch della PR è invece riuscito. La causa è l'uso di `gh api -f ...` senza `--method GET`, che può selezionare il metodo POST. La query delle PR aperte è stata corretta per dichiarare esplicitamente GET; la verifica finale resta da eseguire al prossimo merge.

## Nota logistica — Città-Alveare, 2026-10-15

La difficoltà di accesso e rifornimento della Città-Alveare è plausibile per la posizione montuosa e sotterranea, ma non è dichiarata direttamente nelle fonti. La sintesi ora la marca come deduzione logistica anziché fatto canonico.


## Verifica del pruning e riconciliazione degli ultimi due branch — 2026-10-15

- Dopo la correzione `--method GET`, il run `38724512069` della workflow `Delete merged and audited obsolete branches` è terminato `success`. La lista remota è scesa da 46 branch non-main a 2: sono stati rimossi i branch delle PR merged con head invariato e i sei branch esplicitamente allowlisted. Il branch della PR #50 è stato cancellato dal job diretto.
- Restano due branch che non corrispondono all'head di una PR: `audit/page-semantic-pass-2026-10-15` e `audit/quarantine-fiamme-and-sources-2026-10-13`. Entrambi sono stati confrontati file per file con `main`. Il primo contiene versioni precedenti di pagine e registri, con formulazioni cosmologiche e cronologiche meno caute; le differenze utili sono già in `main`, incluse le fonti del Battesimo e le cautele su Ishvard/Karsh. Il secondo contiene versioni precedenti della quarantena Fiamme, della cronologia e delle note su Syrus/Sirius; i chiarimenti utili sono già in `main`, mentre le formulazioni assertive sono superate.
- I due branch sono stati aggiunti alla allowlist con SHA esatto e verranno rimossi al prossimo merge, se i ref non sono cambiati e non hanno PR aperte. Fino alla verifica, non dichiarare il branch count finale completato.


## Checkpoint finale pulizia branch — 2026-10-15

- Il run `38725386057` della workflow `Delete merged and audited obsolete branches` è terminato `success`. Dopo il run la verifica dell'endpoint dei branch restituisce un solo ref: `main`; non rimangono branch non-main.
- Il run ha eliminato i due ultimi branch orfani (`audit/page-semantic-pass-2026-10-15` e `audit/quarantine-fiamme-and-sources-2026-10-13`) dopo confronto file per file, oltre al branch della PR #51. Il pruning aveva già eliminato i branch di PR merged con SHA invariato e i branch chiusi superseded esplicitamente verificati.
- Rimossa dalla workflow l'allowlist one-shot ormai consumata; resta la pulizia generica sicura dei branch di PR merged, eseguita dopo ogni merge e su pianificazione giornaliera. La routine conserva i branch con head SHA diverso da quello della PR merged e non tocca il branch predefinito.
- La riconciliazione dei branch è conclusa per il perimetro corrente. L'audit semantico della wiki non è concluso: restano le verifiche frase-per-frase e le lacune D3/D4, Annali, identificatori legacy e questioni canoniche già registrate.


## Verifica semantica — Geografia e Colture, 2026-10-15

Il confronto con `Inktober 2024 #Exotic` descrive le Colture come sistema chiuso per coltivare le Fitofiere necessarie al sostentamento umano, quattro in totale, con Amaranthus Cruentus come la più importante. Non definisce le quattro specie come semplicemente commestibili e non dimostra che le Colture siano l'unico sistema alimentare del Kindsgard occidentale. La voce geografica e il glossario sono stati qualificati. È stata inoltre rimossa la generalizzazione «habitat dei Behemoth» per tutte le Catene Montuose Orientali: la fonte associa Bran alle zone montuose del Nord e alle Catene Orientali, ma non definisce l'intera catena come habitat esclusivo della specie.


## Verifica semantica — Mondo Ancora e tredici Guardiani, 2026-10-15

- Rilette le sezioni pertinenti di `content/mondo/cosmologia.md` e confrontate con `content/fonti/la-natura-di-natura.md` e `content/fonti/cronistoria-versione-breve.md`.
- Le fonti accessibili attestano l'analogia fra Essenze e Spettri e gli effetti di eventi esterni sul Giardino; non consentono da sole di verificare direttamente tutti i dettagli della formulazione wiki su Mondo Ancora e tredici Guardiani. La formulazione viene conservata come ricostruzione preesistente, qualificata esplicitamente come non verificabile contro D3/D4 mancanti.
- Nessuna fonte originale è stata modificata; nessun elemento esterno è stato aggiunto al canone. Prossimo passo: continuare il confronto semantico delle pagine non ancora verificate frase per frase.


## Verifica semantica — definizione generale e tassonomia delle Fiere, 2026-10-15

- Riletto `content/fiere/fiere-stub.md` e confrontato con le fonti narrative accessibili e con la ricerca testuale nel repository. La frase «ogni creatura è una Fiera» era troppo ampia perché include implicitamente gli Umani, che le fonti distinguono dalle Fiere; ora la definizione parla delle specie non umane del Giardino.
- La distinzione Sensibili/Inerti compare nella sintesi wiki ma non è stata rintracciata nelle altre fonti disponibili; la guida D4 che potrebbe sostenerla non è reperibile. La classificazione è ora attribuita alla sintesi preesistente e non dichiarata verificata; nessuna specie è assegnata a una classe senza attestazione specifica.
- Nessuna fonte originale è stata modificata. La voce resta bozza e il conteggio dei 26 profili non viene alterato.

- Riconciliato anche il frontmatter di `content/fiere/fiere-stub.md`: aggiunti `Canzoni_degli_Umani` e `Fierezza`, già citati direttamente nel testo per Manticora, Sfinge, Chimera, Viverna e Cockatrice.


## Verifica semantica — Religioni e Spiritualità, 2026-10-15

- Rilette `content/cultura/religioni.md`, `Riflessioni`, `L'Animale Uomo`, `Lamento di Wade` e `Fierezza: il Dio che è in noi`.
- Corretto un conflitto interno di formulazione: il paragrafo dichiarava che la verità cosmologica non fosse accessibile a nessuna prospettiva, per poi indicare Dominic Draco come eccezione. Ora distingue le prospettive ordinarie di Umani, Draghieri e Vere Fiere dall'eccezione esplicitamente descritta.
- Nessuna fonte originale è stata modificata; la correzione non aggiunge un nuovo fatto canonico.

- Rimossa in `Religioni e Spiritualità` la valutazione comparativa non attestata secondo cui Axsar sarebbe il «teologo più lucido»; il testo descrive ora il ruolo documentato della sua testimonianza in `Inktober 2019 #Ornament` senza classificare i personaggi per lucidità.


## Verifica semantica — morte del Guardiano-Re di Vilegis/Lunaria, 2026-10-15

- Confrontate le occorrenze in `content/personaggi/dominic-draco.md`, `content/storia/cronologia.md` e `content/storia/ere.md` con `Cronistoria del Kindsgard (versione breve)`, `Inktober 2019 #Legend` e `draghieri-spiegazione.md`.
- Le fonti accessibili attestano lo scontro tra Libertà e Dominio e gli Echi che incidono sul Kindsgard; non confermano direttamente la specifica affermazione sulla morte del Guardiano-Re legato a uno Spettro. Tale dettaglio è mantenuto come elemento della ricostruzione wiki preesistente e marcato come non verificato contro fonte primaria, in attesa dei testi D3/D4 mancanti.
- Nessuna fonte originale è stata modificata e nessun contenuto esterno è stato aggiunto. Prossimo passo: continuare la verifica delle affermazioni dipendenti da D3/D4.


## Verifica redazionale — segnaposto cronologici, 2026-10-15

- In `content/storia/cronologia.md`, sostituite le etichette editoriali «Anno X» con formulazioni esplicite di collocazione assoluta non determinata. Le voci non assegnano date nuove e mantengono l'ordine relativo già descritto.
- Aggiornata la nota metodologica e la matrice. Nessuna fonte originale è stata modificata; il segnaposto non va interpretato come anno canonico o numero romano.


## Verifica semantica — regole del Battesimo dipendenti da D4, 2026-10-15

- Riletto `content/sistemi/fierezza-e-maesta.md` e confrontato il passaggio sulle regole del Battesimo con `La natura di Natura`, `Cronistoria (versione breve)` e `Risveglio del Drago`.
- Le fonti accessibili sostengono la distinzione fra Fierezza e Maestà e documentano l'eccezione di Wade; non confermano direttamente la regola di un solo Battesimo per specie in un dato periodo né tutti i dettagli dell'orientamento dipendente dagli Spettri di Vilegis. La guida D4 non è reperibile. Le regole restano nella ricostruzione wiki ma sono qualificate come non verificate direttamente, senza essere cancellate né estese.
- Nessuna fonte originale modificata. Prossimo passo: continuare il confronto delle affermazioni di sistema che dipendono da D3/D4.


## Verifica dei campi `fonti` — Geografia e Anello di Fuoco, 2026-10-15

- Rilette le citazioni dirette in `content/mondo/geografia.md`: aggiunti `Solitudine` per il sacrificio della Fenice e `Prevedibilità__covata_` per il conteggio delle squadre in posizione alla Città-Alveare.
- In `content/mondo/anello-di-fuoco.md` aggiunto `Deflecte_Cantum`, citato direttamente nella sezione sul ripristino dell'Anello.
- Si tratta di correzioni di tracciabilità: nessuna formulazione narrativa o canonica è stata modificata. Aggiornati matrice e changelog.


## Verifica dei campi `fonti` — citazioni dirette, 2026-10-15

- Riconciliati i campi fonte di `Fiamme`, `Fiere — Voci Stub`, `Dominic Draco`, `Wade Wyrm`, `Caitlin Chimera` e `Altri Personaggi` con le citazioni dirette già presenti nel corpo delle pagine.
- Aggiunti soltanto riferimenti già utilizzati nel testo: `18___Misfit`, `L_esodo`, `Onda_bianca`, `Inktober_2018`, `Solitudine`, `Lamento_di_Wade` e `Fierezza`. Nessuna affermazione narrativa è stata modificata.
- Il controllo è un confronto di tracciabilità dei riferimenti espliciti, non una dichiarazione che tutte le affermazioni delle pagine siano semanticamente verificate.

- Il controllo incrociato dei campi `fonti` ha rilevato altre due citazioni dirette non dichiarate nel frontmatter: `18___Misfit` in `Cronologia` e `Le Ere del Kindsgard`; entrambe sono state aggiunte. La verifica è di tracciabilità delle citazioni esplicite, non sostituisce il confronto semantico.


## Verifica semantica — tredici Guardiani, scintille e vettori, 2026-10-15

- Riletto integralmente `Inktober 2019 #Legend` e confrontato con `Cosmologia`, `Dominic Draco`, `Cronologia` e `Le Ere del Kindsgard`.
- La fonte attesta direttamente tredici Guardiani, la loro distribuzione fra Draghieri, Fiere e Vere Fiere, l'uccisione tramite Espediente e la raccolta di tredici scintille di potere. Corrette le pagine che lasciavano incerta la composizione per categorie.
- La canzone menziona anche «sei vettori in tredici affondi» e il Fondamento, ma non dichiara esplicitamente che queste espressioni siano equivalenti alle tredici scintille/Guardiani. Tale identificazione resta interpretativa e viene distinta dal fatto direttamente attestato. La relazione con Mondo Ancora resta non verificabile senza D3/D4.
- Nessuna fonte originale modificata; nessun elemento esterno importato.

- Aggiornato L17 dopo la lettura integrale di `Inktober 2019 #Legend`: l'esistenza e la distribuzione dei tredici Guardiani sono attestate direttamente; la loro equivalenza con i vettori collegati al Fondamento resta una questione interpretativa distinta. L'identità completa del gruppo e l'eventuale appartenenza di Frederick Fenice restano aperte.

- Aggiornata anche L21: la distinzione fra sette vettori originari, tredici Guardiani/scintille e la formula «sei vettori in tredici affondi» è ora esplicita; l'identificazione delle tredici scintille con tredici vettori del Fondamento resta interpretativa.


## Checkpoint operativo — 2026-11-01

- **HEAD verificato prima di questa tranche:** `main` `c56220033dfe96e277f7bd163a4dbc8e75fb7727` (PR #63 merged il 2026-10-31). Solo branch `main`; nessuna PR aperta. Il deploy del commit di base è riuscito (run `41184112272`); pulizia branch schedulata riuscita (run `41272713997`). Questi controlli non certificano la presente tranche.
- **Inventario confermato sul tree non troncato:** 29 Markdown sorgente in `content/fonti/`, 31 pagine di contenuto/indici già elencate nel registro di copertura e 6 registri meta, totale **66 file Markdown** sotto `content/`. La prima passata integrale delle 29 fonti è dichiarata dal checkpoint del 13 ottobre, non ripetuta oggi.
- **Modifiche di questa tranche:** inventario dei registri e cronologia dello stato aggiornati in `content/meta/audit-copertura-pagine.md`; istruzione di naming dei meta corretta in `content/meta/convenzioni.md`; changelog aggiornato. Nessuna modifica ai testi narrativi e nessuna nuova asserzione canonica.
- **Ripartenza operativa:** priorità al confronto diretto delle 26 schede preliminari delle Fiere, alle voci che risultano soltanto lette in prima passata, e alla riconciliazione dei sorgenti D3/D4 e degli identificatori legacy. Le lacune e le decisioni del proprietario restano in `content/meta/domande-aperte.md`. Non dichiarare concluso l'audit sulla base dell'inventario o dei soli controlli CI.
- **Verifica di rilascio:** questa tranche deve avere PR e validazione sul suo SHA finale prima del merge; il suo stato effettivo è verificabile da GitHub e prevale sullo stato storico di questo paragrafo.


### Verifica diretta aggiuntiva — Falenottere (2026-11-01)

Il confronto `Inktober 2018 #Drooling` / `Inktober 2019 #Enchanted` / `#Frail` ha riscontrato un'identificazione di specie non documentata: l'episodio di Alison parla di piccole Fiere alate luminose ma non ne dà il nome, mentre `#Drooling` nomina esplicitamente Falenottere grandi quanto una testa umana. Nella voce `Fiere — Voci Stub` è stata rimossa l'identificazione implicita e qualificata la testimonianza indiretta sulla coscienza delle vittime. Vedi matrice `audit-copertura-pagine.md`. Controllo mirato, non chiusura dell'intero bestiario.


## Checkpoint operativo — verifica di Viverna, Cockatrice, Fitofiere e Loccia (2026-11-01)

- Corretti gli scambi di proprietà tra **Wade Wyrm** e **Cornelius Cockatrix** con confronto diretto `Inktober 2018 #Poisonous` e `Inktober 2019 #Sling`. `#Chicken` rettifica la taglia descritta di una Cockatrice: quanto un Umano, non il doppio.
- La classificazione **Fitofiere Sensibili/Inerti** è attestata direttamente in `Inktober 2019 #Overgrown`, che classifica il Chayote Strangolatore come Sensibile; la precedente conclusione «assente dalle fonti senza D4» è superata, senza implicare che il file D4 sia stato recuperato.
- `Inktober 2019 #Snow` conferma direttamente l'habitat glaciale della Fiera Loccia; corretta la nota contraria in `Altri Personaggi`.
- Voci e registro corretti: `content/fiere/fiere-stub.md`, `content/personaggi/wade-wyrm.md`, `content/personaggi/altri-personaggi.md`, `content/sistemi/il-battesimo-del-fuoco.md`, `content/meta/audit-copertura-pagine.md`, changelog. Fonti narrative originali lasciate inalterate.
- **Residui:** la tranche non completa le altre verifiche delle 26 Fiere; continuare confronto sezione-per-sezione. Le informazioni storiche contraddette da questa correzione restano nel checkpoint come storico, non come stato corrente. Verificare CI sul commit finale della PR prima del merge.


### Attribuzioni corrette dopo il confronto delle fonti (2026-11-01)

- `Inktober 2019 #Mindless` non identifica la specie della foresta arborea mobile come Sicomoro Perenne, sebbene Sef Sycamore partecipi alla bonifica; `#Sling` descrive invece esplicitamente il polline intossicante dei Sicomori Perenni. Evitare inferenze dalla sola presenza del Draghiere. Corretto anche «coordina» per Sef: il gruppo è guidato dal Draghiere della Salamandra.
- La fonte del riferimento allo Zaratan e ai tunnel è `Inktober 2019 #Swing`, non `Prevedibilità (covata)`; la forma dei tunnel è soltanto confrontata col carapace. La scheda corrente esplicita questi limiti.
- Corrette unicamente due righe dell'indice **editoriale** introduttivo di `content/fonti/inktober-2019.md` (`#Mindless`, `#Enchanted`); non alterati i racconti originali. Registrata l'operazione nella matrice e nel changelog.


### Confronto della Covata e del Drago (2026-11-01)

- In `Prevedibilità (covata)` sono attestati gli **operai** e l'effetto della loro assenza sulle difese della Città-Alveare. Non è documentata una casta distinta di «soldati» né una complessa gerarchia biologica: rettificata la scheda `Fiere — Voci Stub`.
- `Inktober 2019 #Dragon` parla del Drago come **possibile** predatore supremo, non certifica un primato assoluto; qualificata la formula nella scheda.
- Registrare solo confronto mirato delle due affermazioni. Prossimo passo: continuare la verifica semantica frase-per-frase delle restanti descrizioni e delle pagine sintetiche ancora soltanto lette in prima passata.


### Tracciabilità Atrax e Fabalo (2026-11-01)

- `Inktober 2019 #Swing` contiene la descrizione dei fili bianchi e dei disegni intrecciati delle tele nell'Abisso, mentre `#Pattern` racconta lo scontro con gli Atrax. Allineato il locator della scheda; rimosso «geometrico» non attestato letteralmente.
- `18___Misfit` chiama Fabalo Spinato un cespuglio pericoloso, non espressamente una Fitofiera: la collocazione nel bestiario sotto Fitofiere resta provvisoria. Non riscrivere la fonte, non elevare una categoria editoriale a classificazione canonica.


### Riconciliazione sintetica (2026-11-01)

- `content/_glossario.md`: aggiornata la voce Covata alle evidenze di `Prevedibilità`, rimossa la presunta identità già accertata Guardiani/vettori del Fondamento (L17/L21), e qualificata la definizione generale di Fiera.
- `content/mondo/cosmologia.md`: corretta la frase «ne assorbì i vettori» perché `Inktober 2019 #Legend` attesta direttamente tredici **scintille**, non la loro equivalenza puntuale con il Fondamento. Conservato il linguaggio dei vettori solo come interpretazione documentale dichiarata.
- `content/fazioni/vere-fiere.md`: rimossi «un'unica occasione» e «unicum narrativo» dove potevano implicare esclusività/irripetibilità non verificabile.
- La geometria Giardino/Anello è stata verificata coerente e non richiede correzioni: Giardino all'interno, territorio Umano fuori dal perimetro. D3/D4 ancora non reperiti.
