---
titolo: "Istruzioni di Ripresa — Stato e Protocollo Editoriale"
categoria: "meta"
tag: [meta, ripresa, sessione, istruzioni, audit]
status: "in aggiornamento"
ultima_modifica: "2026-10-13"
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
- **Questioni che restano aperte dopo il confronto:** i testi D3/D4 e altri riferimenti legacy non reperiti; il tredicesimo Spettro storico; la mappa e i rapporti spaziali non esplicitati; i dettagli meccanici dell'eccezione in `Risveglio del Drago`; le identità degli Annali delle Sabbie/Artiglio di Fuoco; le Fiamme nel Kindsgard e il termine «Infiammati»; Seymour/Shai'Hulud; la lista dei tredici Guardiani; l'ambiguità «Salamandra» in `L'Esodo`; le discrepanze Sirius/Syrus e Adryanne IX/XII; le grafie Angeline e i titoli editoriali delle due fonti Fierezza. Le decisioni del proprietario sono già elencate in `content/meta/domande-aperte.md` e non vengono duplicate qui.
- **Stato:** punto 1 (ricognizione repository/checkpoint) completato; punto 2 in avanzamento: inventario delle fonti e prima passata dei corpi sono documentati, ma la verifica puntuale di tutte le citazioni e la riconciliazione completa dei riferimenti legacy restano da chiudere.
- **Prossimo passo:** controllare i diff delle correzioni, eseguire la validazione disponibile, integrare se i controlli passano; poi proseguire la verifica pagina-per-pagina delle citazioni e degli identificatori `fonti`.
