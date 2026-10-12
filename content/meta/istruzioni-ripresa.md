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

- **Branch di lavoro:** `audit/inventario-completo-fiere`; **PR #18:** [Audit: rende esaustivo l'inventario delle Fiere incomplete](https://github.com/D3m1urg0/kindsgard-wiki/pull/18), ancora aperta e mergeable. Non eseguire merge automatico: il workflow editoriale prevede revisione del diff.
- **Ultimo contenuto verificato prima di questo checkpoint:** commit `16b7e7a38674d16fcecfebd8d04883ac8d49bd7b`. La CI era passata su un commit precedente (`e714085a4e30cea1bd43110b975fb691b6e75644)); i cambi successivi hanno avviato nuove run, da ricontrollare.
- **Inventario:** tree GitHub ricorsivo completo, 65 file Markdown sotto `content/`: 29 file sorgente in `content/fonti/` e 36 pagine sintetiche/meta. Tutti i 29 file sorgente sono esplicitamente citati in `content/meta/fonti.md`; quattro percorsi catalogati non esistono nel tree (Annali dell'Artiglio di Fuoco, Draghieri/Vere Fiere, D3 Cronistoria OOC, D4 You Want to Be a Dragoner). Il riferimento `Copia_di_I_Draghieri_del_kindsgard` è un ulteriore ID legacy non riconciliato. Non è emerso alcun file sorgente presente ma non registrato.
- **Tracciabilità frontmatter:** controllati i campi `fonti` di tutte le 36 pagine non sorgente; i 32 identificatori distinti trovati risultano mappati nel registro oppure elencati esplicitamente come riferimenti legacy da riconciliare. Nessun nuovo ID sorgente orfano emerso.
- **Confronti diretti effettuati:** campionamento dei racconti Inktober 2018/2019/2024, `Prevedibilità`, `L'Esodo`, `Onda Bianca`, `Canzoni degli Umani`, `Elenco Draghieri`, `La natura di Natura`, `Solitudine`, `Cronistoria versione breve`, `Soffioni Uncinati` e `Fierezza — Il Battesimo di Cornelius`; pagine sintetiche verificate in particolare: Fiere stub, Geografia, Maestà, Religioni, Tradizioni, Fiamme, Cosmologia, Cronologia, Ere e personaggi/fazioni collegati. Non dichiarare verificati i testi integrali D3/D4, assenti dal repository e dalla Library consultata.
- **Correzioni proposte nella PR #18:** chiarito il perimetro delle 26 Fiere classificate e separati Kyrin, Sliss, Tentacolo Purpureo e i 12 nomi di brainstorming; corretti dettagli non attestati in Drago, Behemoth, Atrax, Chiroptera, Loccia, Alicanto, Manticora, Sfinge, Grifone, Chimera, Zaratan, Sicomoro, Amaranthus, Mandragora, Fabalo, Everastes, Kyrin e Sliss; distinta l'identità ancora non provata tra Tentacolo Scarlatto e Tentacolo Purpureo; corretto l'Artiglio di Città del Re rispetto all'Artiglio del Fuoco; registrata la discordanza “Valle dei Tuoni”/“Valle dei Fulmini”; ridimensionate le affermazioni non misurate sulle dimensioni/visibilità della Maestà; corretto il README al tree corrente e allineate le date editoriali delle pagine sintetiche modificate.
- **Discrepanza storica:** il changelog del 2025 dichiara 34 documenti sorgente, mentre la lista per gruppi e il tree corrente ne contano 29. Non c'è prova che siano cinque fonti perdute; la cifra storica è registrata come incongruenza da riconciliare, non come perdita accertata.
- **Non modificato:** corpo dei testi sorgente narrativi; nessun contenuto di canone importato da fonti esterne. Nessun cambiamento è stato portato direttamente su `main`.
- **Prossimi passi:** (1) verificare la CI della punta attuale della PR; (2) completare il confronto mirato delle schede Fiere non ancora lette in dettaglio; (3) controllare le affermazioni residue di Geografia/Maestà e i riferimenti di fonte; (4) ricontrollare la validazione wikilink/alias e il diff completo; (5) aggiornare il checkpoint e solo allora redigere il report definitivo.
- **Decisioni umane già isolate, da non chiedere prima di completare le verifiche:** grafia Angeline Aconitum/Aconytum; eventuale status canonico del tredicesimo Spettro esterno; titoli delle due fonti “Fierezza”; identità degli Annali delle Sabbie rispetto agli Annali del Fuoco; ambito Kindsgard/Vilegis delle Fiamme e significato di “Infiammati”; nota “ex Shai'Hulud”; sorte individuale delle Vere Fiere dopo Re Draco; identità dei tredici Guardiani; recupero/identificazione dei sorgenti D3/D4 e di `Copia_di_I_Draghieri_del_kindsgard`.
