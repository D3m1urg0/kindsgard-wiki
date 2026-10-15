---
titolo: "Changelog"
categoria: "meta"
tag: [meta, changelog, modifiche]
status: "in aggiornamento"
ultima_modifica: "2026-10-12"
---

# Changelog

## 2026-10-13 — Ricognizione repository e consolidamento delle domande

- Verificato che `main` punta al merge commit `75f74f4624c135fdc26e83b254cc77e64d18e2fb`, relativo alla PR #19 che consolida le decisioni da sottoporre al proprietario in `content/meta/domande-aperte.md`.
- La ricerca delle PR aperte non ha restituito risultati. L'inventario iniziale contava 20 branch remoti totali, di cui 19 diversi da `main`; la creazione del branch `audit/checkpoint-2026-10-13` portava il totale a 21 (20 non-main); il branch corrente `audit/reconcile-pr14-metadata` porta il totale a 22 (21 non-main).
- Le PR #1–#11, #13 e #15–#19 risultano chiuse e integrate; la #12 risulta chiusa senza merge. La #14 è chiusa senza merge (`merged=false`, `merged_at=null`); il `merge_commit_sha` restituito è un commit di prova con messaggio di merge sintetico, non prova un'integrazione reale.
- Per il merge della PR #19 non sono state restituite workflow runs né status checks: la CI su quel commit resta non verificata. La PR #20 ha eseguito `Validate Quartz wiki` (run 38353745004) con esito `success`, inclusi controllo wikilink e build Quartz, sul primo commit del branch (`5cd5979`). Gli aggiornamenti successivi alla run hanno prodotto ulteriori commit sul branch, senza una nuova run associata restituita dagli strumenti: non si dichiara verificato il HEAD finale.
- La verifica del repository prosegue: questo checkpoint non dichiara concluso l'audit semantico delle pagine o il confronto integrale delle fonti.

## 2026-10-12 — Inventario fonti e audit editoriale (in corso)

- Corretto il rendering Markdown dei versi con hard line breaks (due spazi finali, senza modificare parole, punteggiatura o ordine) in `Canzoni degli Umani`, `Deflecte Cantum`, `L'Animale Uomo`, `Lamento di Wade`, il componimento finale di `L'Ultima Notte all'Ombra dell'Anello` e i tre versi citati in `Una Missiva dall'Anello`.

- Registrata come lacuna L18 la menzione non datata di “Salamandra” in `L'Esodo`: la frase non permette di identificare Syrus, Sebastian o la Fiera/fazione in senso più ampio.

- Riallineata la struttura del bestiario al conteggio L6: Tentacolo Scarlatto è ora nella sezione delle tre Fiere minori classificate; Tentacolo Purpureo resta tra le menzioni aggiuntive non conteggiate.

- Aggiornato il checkpoint persistente con lo stato della PR #18, l'esito CI, l'inventario delle fonti, le discrepanze geografiche e cosmologiche corrette, il perimetro di verifica e le decisioni residue.

- Rinominata la sezione `Guardiani e personaggi collegati`: l'elenco contiene anche personaggi legati ai Guardiani ma non classificati esplicitamente come tali, quindi il titolo precedente era troppo ampio.

- Corretto un precedente declassamento della descrizione della Maestà: il confronto successivo con la guida OOC canonica `Draghieri del Kindsgard (spiegazione)` ha confermato esplicitamente “il più grande vulcano del mondo” e “grande quanto il mondo”. Ripristinata la formula canonica in Maestà e homepage, aggiunto il riferimento frontmatter a questa fonte e mantenuta distinta la questione della visibilità misurabile da ogni punto.

- Separata visivamente la sezione delle tre Fiere minori classificate dalle menzioni narrative aggiuntive (Kyrin, Sliss, Tentacolo Purpureo) e dai dodici nomi di brainstorming; allineata la terminologia di L6 al conteggio effettivo.

- Precisata la scheda di Axsar Aigokeros: la guida spirituale e la protezione degli Umani sono presentate come sintesi del comportamento nel racconto, non come definizione tecnica esplicita dell'Istinto.

- Corretta la scheda tecnica wiki della Bacca Emofaga: le allucinazioni sono ora trattate come un singolo caso narrativo ipoteticamente collegato a un fusto alla base della nuca, non come una fase universale della progressione.

- Aggiunta alla voce Maestà una nota di tracciabilità che distingue i dettagli fisici/cosmologici verificati dalle formulazioni che dipendono dai testi integrali D3/D4 non reperiti, con rinvio a L1.

- Risolta una contraddizione interna nella scheda Salamander: il ritrovamento dei resti di Syrus nel laboratorio non viene più trasformato in certezza sul luogo della morte; la sezione finale ora concorda con la nota di tracciabilità che lascia ignote causa e luogo esatti.

- Precisata la discrepanza toponomastica con i riferimenti esatti: `Inktober 2019 #Bait` usa Valle dei Tuoni; `#Tread` e `L'ultima notte all'ombra dell'Anello` usano Valle dei Fulmini. Allineate Geografia, L3 e la voce di Bran senza presumere che i nomi siano sinonimi.

- Allineate le pagine Bran, Dominic, Cronologia e homepage alla distinzione cosmologica: rimosse dal Behemoth la pelle impenetrabile/lentezza non documentate; sostituito “assorbire il titolo” con l'assorbimento dei vettori; chiarito che Dominic detiene il potere raccolto dai tredici vettori collegati al Fondamento, non che Kindsgard e Fondamento siano identici. In quel passaggio era stata rimossa anche la formula “Maestà grande quanto il mondo”, poi ripristinata dopo aver verificato la guida OOC canonica.

- Raffinati i profili secondari di Lhars, Ember, Laerius e Mirjam: separati i dettagli dei personaggi dalle deduzioni sulla morfologia delle Fiere; rimosse da Laerius le capacità di immersione e le tattiche non descritte, da Ember la meccanica dell'Istinto non attestata, e da Mirjam la classificazione acquatica/paludosa della specie non supportata direttamente.

- Aggiornato solo il metadato editoriale `ultima_modifica` di `Elenco Draghieri`, già modificato in una PR precedente per aggiungere una nota di tracciabilità; il testo originario dell'elenco non è stato riscritto.

- Corrette due incongruenze nelle voci personaggio: rimosso da Ashur Alicanthus il potere di produrre luce dorata dalle piume, non attestato in `Inktober 2019 #Build`; corretto il titolo errato `Frederick — Guardiani minori` e registrata C5 per la numerazione di Sef Sycamore (XIII nell'elenco canonico, XIV in `#Mindless`, fonte lasciata invariata).

- Precisata la voce Falenottere: la fonte mostra che la luce le attira e le tiene raccolte intorno alla candela, ma non definisce una soglia di luminosità né una garanzia universale di sicurezza.

- Aggiornato il checkpoint persistente dopo il controllo delle 36 pagine non sorgente e il confronto mirato delle fonti; registrati inventario dei 29 sorgenti, 32 identificatori di fonte, discrepanze geografiche, correzioni alle Fiere e prossimi passi.

- Rimossi dalle schede Sicomoro Perenne e Chayote Strangolatore gli aggettivi tassonomici “Sensibile”/“Fitofiera Sensibile”: il termine non è definito nel glossario e non è supportato dalle fonti citate.

- Aggiornata la priorità documentale L6 per Loccia: il riscontro sul comportamento delle “Lochs” viene da `Inktober 2018 #Flowing`; `Inktober 2019 #Snow` attesta Laerius Loch come XV Draghiere della Loccia, ma non descrive la specie.

- Riconciliati altri riferimenti alle Fiere: rimossi dalla Chimera i dettagli di testa/coda mutuati dalla mitologia esterna non attestati nel corpus; chiarito che lo scudo di Zachary Zaratan non è esplicitamente identificato come carapace della sua Fiera; qualificata l'inferenza morfologica del Leopterix. Separati Tentacolo Scarlatto (Fiera vermiforme usata come esca in `Inktober 2018 #Poisonous`) e Tentacolo Purpureo (foglie trattate in `Inktober 2019 #Tasty`), senza supporli sinonimi e senza alterare il conteggio delle 26 voci.

- Completato un controllo delle date editoriali sulle voci sintetiche toccate dalla PR consolidata #15: aggiornati i frontmatter ancora fermi al 2025 o al 2026-10-11 (Religioni, Fiamme, Altri Personaggi, Bran Behemoth, Brood, Luther Leviathan, Salamander, Samu'el Sphynx, Solomon e Wendy Wyrm). Nessun testo narrativo è stato modificato in questo passaggio.

- In una prima verifica era stata ridimensionata la descrizione della Maestà sulla base del solo racconto `Inktober 2019 #Ring`; il successivo confronto con la guida OOC canonica ha ripristinato il primato e la formula “grande quanto il mondo”. Resta qualificata come non esplicita l'identificazione del ghiacciaio descritto in `#Bait` con il vulcano Maestà.

- Allineata anche la nota finale L3 in Geografia alla nuova evidenza: “Valle dei Tuoni” non è più descritto come alias legacy, poiché il nome è attestato in `Inktober 2019 #Snow`.

- Corrette due discrepanze geografiche basate su fonti primarie: distinto l'“Artiglio di Città del Re” (Battesimi controllati) dall'Artiglio del Fuoco con il laboratorio della Salamandra; registrato che “Valle dei Tuoni” compare in `Inktober 2019 #Snow` mentre “Valle dei Fulmini” compare in `#Tread` e `#Bait`, senza presumere che siano lo stesso luogo.

- Corretto il profilo dell'Alicanto: `Inktober 2019 #Treasure` attesta una piuma che riflette la luce solare e un tesoro nella tana, non l'emissione di luce propria né un intento esplicito di attirare prede con gli oggetti. Rimossi questi dettagli non dimostrati, potenzialmente importati dalla mitologia esterna.

- Raffinate altre tre schede: Sfinge ora distingue la rappresentazione nella canzone in-world da una scheda tecnica oggettiva; Grifone non importa la testa d'aquila dalla tradizione mitologica esterna, mantenendo solo corpo felino, ali e becco attestati; Mandragora chiarisce che l'estrazione è letale per chi la rimuove, non che la pianta uccida soltanto perché estratta.

- Corretto il profilo Atrax: la fonte che quantifica gli esemplari grandi circa due teste li identifica come piccoli, non adulti; il veleno è attestato ma non ne viene specificato l'effetto. Aggiunto il riferimento diretto a `Inktober 2018 #Guarded` e mantenuta la vulnerabilità delle tele al fuoco, confermata anche da `Inktober 2019 #Pattern`.

- Resi più aderenti alle fonti i profili Manticora e Leviatano: rimosse morfologia e varianti cromatiche della Manticora non sostenute dalla canzone, separando la Fiera dalle Vere Fiere con lo stesso nome; circoscritti gli effetti del Canto del Leviatano agli eventi effettivamente narrati in `#Whale`, senza generalizzare distruzione di navi o uccisione di altre specie marine.

- Resi prudenti anche i profili di Kyrin e Sliss: `L'Esodo` attesta che un fuoco attira l'attenzione di un Kyrin, non abitudini notturne; `Onda Bianca` mostra un sospetto dei personaggi sullo Sliss mangiato, non una proprietà certa di causare allucinazioni collettive.

- Corrette due sovrainterpretazioni nelle schede Drago e Behemoth: rimosso il raggio di calore di centinaia di metri non quantificato dalla fonte; chiarito che `#Dragon` mostra neve sciolta in vapore e scudo fuso. Sostituita la falsa “valanga” evocata dal Corno con l'evento attestato — il crollo di una montagna — e rimossi pelle impenetrabile/lentezza del Behemoth non dimostrate dalle fonti narrative attualmente disponibili.

- Precisate anche le voci Loccia ed Everastes: la fonte `Inktober 2018 #Flowing` documenta le “Lochs” tenute lontane da una rete caricata dai fulmini, ma non descrive dentatura o habitat glaciale; `Inktober 2019 #Snow` caratterizza Ember come adatta al gelo senza definire habitat o immunità della Fiera Everastes.

- Corrette tre sovrainterpretazioni nelle voci Fiere dopo confronto diretto con le fonti: rimossi da Chiroptera fuoco/luce come debolezze, echolocalizzazione e giovani in lattanza non attestati; rimossa l'estensione chilometrica delle radici del Sicomoro Perenne; precisato che il testo sul Fabalo Spinato non specifica che cosa cresca dopo 72 ore.

- Raffinata la scheda di Amaranthus Cruentus dopo confronto diretto con `Inktober 2019 #Overgrown` e `Inktober 2024 #Exotic`: distinti lavaggio delle spore, pericolo del fumo e trattamento delle radici per raccogliere i semi, evitando di suggerire che il lavaggio renda la pianta genericamente commestibile.

- Aggiornate le istruzioni di ripresa con checkpoint persistente: branch, PR, file e fonti esaminati, modifiche proposte, stato della CI e ordine dei prossimi controlli.

- Allineati README e frontmatter di `Tradizioni`: il README ora descrive il tree effettivo (`index.md` senza il duplicato `_index.md`) e riporta i 29 file sorgente Markdown attualmente presenti. Resta registrata come discrepanza storica la cifra 34 riportata nel changelog del 2025: non prova, da sola, che manchino cinque fonti.

- Precisato il perimetro del conteggio L6: le 26 voci sono i profili classificati nei quattro gruppi; Kyrin e Sliss restano menzioni narrative aggiuntive, mentre i 12 nomi di `Mostri` sono brainstorming e non attestazioni canoniche.
- Corretto l'introduttivo di `Fiere — Voci Stub`, che attribuiva genericamente tutte le informazioni ai racconti nonostante la pagina utilizzi anche liste OOC e materiale di brainstorming; elencati tutti i 12 nomi della fonte `Mostri` in una sezione esplicitamente non canonica.

- Avviata la riconciliazione del catalogo con il tree GitHub aggiornato dopo PR #10.
- Reso esaustivo il registro L6 delle Fiere: la lista ora copre tutte le 26 voci preliminari presenti nel bestiario, raggruppate per categoria, e distingue la presenza di una voce dalla disponibilità di fonti sufficienti per una scheda tecnica.
- Estesa la verifica dei frontmatter alle raccolte Inktober: aggiunte le fonti 2018/2019 alle tradizioni, 2018 alle Vere Fiere, 2018/2019 alle Ere e tutte e tre le raccolte alla cronologia, in coerenza con i riferimenti espliciti nel testo.
- Completata un'ulteriore verifica di tracciabilità: aggiunto `Inktober_2024` alle fonti della Città-Alveare, della famiglia Brood, delle tradizioni e del bestiario, dove i testi sintetici citano rispettivamente `#Binoculars`, `#Passport` e `#Exotic`.
- Corretto in `Maestà` un assoluto incompatibile con la caratterizzazione di Dominic: l'incapacità di comprendere il costo cosmologico è ora attribuita ai Draghieri ordinari, con l'eccezione di Dominic esplicitata.
- Aggiunta una tabella di corrispondenza per gli identificatori legacy dei frontmatter che hanno una destinazione verificata, separandoli dai riferimenti sorgente che restano senza file identificato.
- Corretto lo status editoriale di `content/fonti/list.md` e `content/fonti/mostri.md`: sono spunti narrativi/brainstorming senza valore normativo, quindi non devono risultare `canonico`. Il contenuto verbatim è stato conservato.
- Restano da verificare la tracciabilità delle fonti dichiarate nei frontmatter, le discrepanze tra catalogo e percorsi effettivi, le affermazioni geografiche e le schede Fiere preliminari.
- L'audit incrociato dei tag Inktober nel bestiario e nella geografia ha individuato e corretto riferimenti con anno errato: `#Mindless` e `#Overgrown` appartengono alla raccolta 2019, non 2018; `#Tasty` non compare nella raccolta Inktober 2024 e il riferimento è stato rimosso. È stata tradotta in italiano una frase rimasta in inglese e sostituito il vecchio riferimento a `Soffioni_Uncinati.docx` con il percorso della fonte conservata nel repository.
- Verifica automatica mirata dopo le correzioni: 22 citazioni Inktober nel bestiario e 4 nella geografia controllate contro i titoli effettivi delle tre raccolte; nessuna citazione residua punta a un tag assente dall'anno dichiarato in queste due voci.
- Estesa la correzione dei riferimenti `#Mindless` e `#Overgrown` a `content/personaggi/altri-personaggi.md` e `content/meta/domande-aperte.md`, dove l'anno 2018 era anch'esso errato.
- Corretto il Battesimo del Fuoco: le pagine di sistema descrivevano il processo come invariabile e privo di eccezioni, in contrasto con `Risveglio del Drago`, dove Wade si reincarna come Vera Viverna senza uccidere una Viverna e mentre il sé umano è ancora vivo su Vilegis. Il caso è ora registrato come eccezione documentata, con meccanismo non spiegato integralmente.
- Allineate le voci di Bartholomew Brood, Samu'el Sphynx e Syrus Salamander alla distinzione tra i sette vettori originari del Kindsgard e i tredici vettori/Guardiani manifestatisi nel Kindsgard dopo la connessione con Vilegis/Lunaria.
- Riconciliato il riferimento agli `Annali dell'Artiglio delle Sabbie` in `Inktober 2024 #Exotic`, distinto dagli `Annali dell'Artiglio di Fuoco` citati in `Inktober 2019`; aggiunta la lacuna L12 senza presumere che i due titoli indichino lo stesso documento.
- Audit geografico mirato: “Valle dei Tuoni” compare soltanto come alias legacy, senza riscontro indipendente nelle fonti presenti. La geografia ora segnala esplicitamente l'incertezza invece di presentare i due nomi come equivalenti certi. La tabella dell'Artiglio del Magma non attribuisce più il luogo a Syrus con certezza: `L'Esodo` nomina soltanto “Salamandra” e la data non distingue tra Syrus e Sebastian.
- Aggiunta `Inktober_2024` alle fonti della geografia, che cita il periodo di Razvan Roc nella Città-Alveare tramite `#Binoculars`.
- Riclassificata con cautela l'intestazione della voce `Fiamme`: le fonti attestano il legame narrativo con i Bruciati e la presenza della fazione su Vilegis, ma non documentano una fazione organizzata delle Fiamme nel Kindsgard. Aggiunta la domanda L13 senza risolverla per inferenza.
- Precisata la provenienza degli `Annali dell'Artiglio di Fuoco`: è presente una citazione attribuita a Syrus in `Inktober 2019`, ma non è dimostrato che coincida con il file legacy atteso né che il documento integrale sia stato conservato. La biografia di Syrus ora distingue il frammento disponibile dalle affermazioni che richiederebbero il testo integrale. La scheda è stata inoltre corretta: Syrus, in quanto Guardiano, appartiene ai tredici uccisi da Dominic; il ritrovamento dei suoi resti nel laboratorio non prova che sia morto lì né che sia stato un Battesimo fallito.
- Aggiunta la domanda L14 sul termine “Infiammati” in `Inktober 2018 #Flowing`: non viene assimilato ai Bruciati né alla fazione delle Fiamme senza una fonte che lo confermi.
- Aggiunta la domanda L15 sul riferimento “ex Shai'Hulud” associato a Seymour Sandwurm in `Elenco Draghieri`, senza decidere se riguardi un nome precedente, la specie o altro.
- Aggiunta L17 per il roster incompleto dei tredici Guardiani: cinque individui sono identificabili nelle fonti correnti, mentre il tag `guardiano` di Frederick Fenice non è spiegato dalla voce e va verificato prima di assegnargli un ruolo. Allineata anche la nota editoriale in `Elenco Draghieri` per non confondere i tredici vettori/Guardiani successivi alla connessione con i sette vettori originari del Kindsgard.
- Corretto un assoluto non compatibile con la fonte nella voce di Bran Behemoth: la descrizione lo definiva immune al calore, mentre `Inktober 2019 #Dragon` mostra che la fiammata lo ferisce e fonde lo scudo. Ora è descritta come resistenza eccezionale, non immunità. Nella scheda generale del Behemoth è stata inoltre rimossa la debolezza ai fulmini e la presunta resistenza del ferro locale: `Inktober 2019 #Tread` mostra una tempesta di fulmini, ma non dimostra quelle proprietà.
- Rimosso il descrittore “ibrido rettile-volatile” dalla Fiera Leopterix: le fonti collegano la Fiera a Lhars e menzionano pelle e piume, ma non ne descrivono esplicitamente la morfologia.
- Ripulita la scheda dello Zaratan: la fonte documenta un carapace associato al Draghiere Zachary e un riferimento a gallerie attribuite a uno Zaratan, ma non supporta esplicitamente varianti terrestre/marina, sangue tossico o quasi-impenetrabilità.
- Precisata la scheda della Manticora: la fonte attesta il sorriso come richiamo e veleno, ma non stabilisce che il morso sia un ulteriore vettore di avvelenamento.
- Risolta con la fonte primaria la pietrificazione dei Grifoni in `Inktober 2019 #Sling`: è legata ai dardi e al sangue pietrificante di Cornelius Cockatrix, non a una capacità dello sguardo del Grifone.
- Distinta la Fiera Viverna dall'Espediente del Draghiere Wade: le fonti attestano la coda letale della Fiera, mentre veleno e sangue pietrificante sono descritti in relazione al Draghiere e non vanno trasferiti automaticamente alla fisiologia della specie.
- Ridimensionata anche l'immunità al freddo attribuita a Everastes: la fonte descrive Ember come adatta al gelo, ma non afferma un'immunità assoluta della Fiera.
- Rimossa dalla scheda di Adalind Atrax la pietrificazione tramite morso: `Inktober 2019 #Pattern` documenta il suo intervento alla Città-Alveare, ma non quel potere.
- Nel bestiario, i punti deboli del Drago sono ora descritti come quelli tradizionalmente tramandati, non come elenco assoluto: `Inktober 2019 #Dragon` mostra anche un'articolazione spezzata da un'arma caricata di tuono, espediente tattico specifico.
- Ridimensionata nella voce di Luther Leviathan l'affermazione che il suo Istinto sia infallibile in ambiente marino: le fonti mostrano efficacia e autorevolezza, non una regola oggettiva di infallibilità. Rimossa anche la definizione della Maelstrom come nave più potente del Kindsgard, primato che le fonti disponibili non dimostrano.
- Allineate le sintesi su Draghieri, Vere Fiere e religione all'eccezione di Dominic: i gruppi, in generale, non comprendono il costo cosmologico della guerra, ma Dominic è esplicitamente capace di vedere oltre il mandato immediato e scegliere l'Anello. Propagata la stessa distinzione alla pagina Cosmologia, al sistema Fierezza/Maestà e alle definizioni del glossario su Battesimo e Vera Fiera. Precisata anche la frase successiva sulla natura strutturale dell'ignoranza reciproca, che ora si riferisce ai portatori ordinari e non contraddice l'eccezione di Dominic.
- Rimossa dalla voce sulle religioni la stima non documentata secondo cui i monaci di Bisogno avrebbero una vita media inferiore agli altri Umani; resta il dato attestato che invecchiano.
- Distinte nella documentazione del sistema le due vie che possono portare a una Vera Fiera: l'orientamento del Battesimo umano verso Maestà e la trasformazione ciclica di un Draghiere che raggiunge la vetta della Maestà. La formulazione precedente rischiava di presentare un solo percorso come universale.
- Qualificata la descrizione dei Bruciati nelle voci di sistema e Fiamme: vesti bianche, silenzio e lazzaretti sono dettagli della comunità descritta in `Inktober 2018 #Scorched`, non ancora tratti dimostrati come universali.
- Registrata la tensione tra la regola generale secondo cui le Vere Fiere perdono il potere all'ascesa di Re Draco e le rappresentazioni di Wendy/Solomon in `18___Misfit` e `Inktober 2018 #Precious`. La sorte dei singoli individui è ora una domanda L16, non una conclusione inventata. Le voci di Wendy e Solomon sono state aggiornate per distinguere identità narrativa attestata e stato effettivo del potere, senza presumere che siano eccezioni o errori di cronologia. La nota è stata propagata anche alla cronologia e alla pagina delle Ere, lasciando intatta la regola generale ma rendendo visibile la discrepanza. La voce di Solomon non presenta più come lacuna un numero progressivo, dato che le Vere Fiere non si numerano.
- Nessuna informazione mancante è stata colmata per inferenza; le questioni di canone non deducibili dalle fonti saranno elencate separatamente.

> *Log di tutte le modifiche alla wiki con data e motivazione.*

---

## 2025-06-13 — Sessione di fondazione

### Fase 1-2: Analisi e Disambiguazione
- Completata analisi di tutti i documenti del progetto
- Pulizia file singoli Inktober (eliminati, sostituiti dai file consolidati 2018/2019/2024)
- Risolte contraddizioni C1, C2, C3, C4
- Risolte duplicazioni D1, D2, D3, D4
- Risolte ambiguità A2, A3, A4
- Registrate lacune L1–L10
- Prodotti file meta: `fonti.md`, `domande-aperte.md`

### Decisioni canoniche registrate in questa sessione
- **C4**: Grafia canonica → **Frederick Fenice**
- **A2**: Sequenza di Dominic Draco confermata in 10 fasi
- **A3**: Successione Bartholomew (XVI) → Brienne (XVII) Brood confermata
- **A4**: Battesimo del Fuoco meccanica universale confermata; Fenice è una Specie di Fiera come le altre
- **Sistema di potere**: schema Fierezza=Maestà / Istinto / Espediente canonizzato
- **Vere Fiere**: non si numerano per orgoglio e individualismo
- **13 Guardiani**: individui (Draghieri, Vere Fiere, Fiere effettive) che inconsapevolmente incarnavano i 13 vettori del Fondamento
- **Bruciati / Fiamme**: i Bruciati sono il seme narrativo della fazione delle Fiamme
- **L5**: Vilegis trattato come setting esterno, fuori scope
- **L6**: Creare voci stub per le Fiere menzionate nei racconti

### Fase 3: File Wiki Generati
- `_index.md` — Panoramica e indice navigabile
- `_glossario.md` — Termini chiave
- `_changelog.md` — Questo file
- `meta/fonti.md` — Fonti e decisioni canoniche
- `meta/domande-aperte.md` — Lacune e ambiguità aperte
- `mondo/cosmologia.md` — Natura, Bisogno, Espediente, Fondamento, Spettri
- `mondo/geografia.md` — Luoghi, Artigli, strutture (bozza da fonti testuali)
- `storia/cronologia.md` — Timeline master
- `storia/ere.md` — Le ere del Kindsgard
- `fazioni/draghieri.md` — Fazione Draghieri
- `fazioni/vere-fiere.md` — Fazione Vere Fiere
- `fazioni/fiamme.md` — Stub, documentazione da completare
- `personaggi/dominic-draco.md` — Primo Draghiere / Re Draco
- `personaggi/wade-wyrm.md` — 33° Viverna
- `personaggi/wendy-wyrm.md` — Vera Viverna
- `personaggi/caitlin-chimera.md` — II Chimera
- `personaggi/frederick-fenice.md` — Unica Fenice
- `personaggi/brood.md` — Bartholomew (XVI) e Brienne (XVII) Covata
- `personaggi/samuel-sphynx.md` — III Sfinge, Guardiano
- `personaggi/solomon.md` — Vera Sfinge (stub)

### File ancora da generare
- `sistemi/il-battesimo-del-fuoco.md`
- `personaggi/bran-behemoth.md`
- `personaggi/luther-leviathan.md`
- `personaggi/syrus-salamander.md`
- `personaggi/sebastian-salamander.md`
- `personaggi/altri-personaggi.md` (stub per personaggi minori)
- `fiere/` — voci stub per tutte le Fiere menzionate
- `meta/convenzioni.md`
- Voci luogo dedicate: `mondo/maesta.md`, `mondo/anello-di-fuoco.md`, `mondo/citta-alveare.md`

## 2025-06-13 — Seconda tranche

### File generati
- `sistemi/il-battesimo-del-fuoco.md`
- `personaggi/bran-behemoth.md`
- `personaggi/luther-leviathan.md`
- `personaggi/salamander.md` — Syrus (V) e Sebastian (VI)
- `personaggi/altri-personaggi.md` — stub personaggi secondari
- `fiere/fiere-stub.md` — voci stub bestiario completo
- `fiere/soffione-uncinato.md` — scheda completa
- `fiere/bacca-emofaga.md` — scheda completa
- `mondo/maesta.md`
- `mondo/anello-di-fuoco.md`
- `mondo/citta-alveare.md`
- `cultura/religioni.md`
- `cultura/tradizioni.md`
- `meta/convenzioni.md`

### Stato attuale
Wiki sostanzialmente completa nella sua prima versione. File mancanti opzionali:
- `storia/eventi/` — voci evento dedicate (opzionale)
- Schede tecniche complete per le Fiere stub (richiede nuove fonti)
- Documentazione Fiamme (richiede nuove fonti)

## 2025-06-13 — Terza tranche: completamento Phase 4 (conversione fonti)

### File generati in `wiki/fonti/` (30 nuovi file)

**Gruppo 2 — Documenti OOC brevi:**
- `elenco-draghieri.md`, `fierezza-il-dio-che-e-in-noi.md`, `cio-che-sanno-i-draghieri.md`, `cronistoria-versione-breve.md`, `draghieri-spiegazione.md`

**Gruppo 3 — Racconti singoli brevi:**
- `fierezza-battesimo-cornelius.md`, `riflessioni.md`, `pezzo-del-rituale-chimera.md`, `lamento-di-wade.md`, `una-missiva-dall-anello.md`, `l-esodo.md`, `l-ultima-notte-all-ombra-dell-anello.md`, `onda-bianca.md`, `l-animale-uomo.md`, `deflecte-cantum.md`, `canzoni-degli-umani.md`

**Gruppo 4 — Racconti singoli lunghi:**
- `la-natura-di-natura.md`, `solitudine.md`, `misfit.md`, `risveglio-del-drago.md`, `prevedibilita-covata.md`, `il-trattato-wendy-wyrm.md`

**Gruppo 5 — Schede tecniche e liste:**
- `soffioni-uncinati-fonte.md`, `bacche-emofaghe-fonte.md`, `mostri.md`, `list.md`

**Gruppo 6 — Inktober (con indice riassuntivo in testa, corpo verbatim):**
- `inktober-2018.md`, `inktober-2019.md`, `inktober-2024.md`

### Note operative
- Corretto un errore di numerazione nell'indice di `inktober-2019.md` (riferimento a un racconto #18 inesistente).
- Tutte le correzioni canoniche standard applicate (Frederick Fenice, eliminazione "U-Ma-Ni", grafia Kindsgard).
- Aggiornato `meta/istruzioni-ripresa.md` per riflettere il completamento della Phase 4 e proporre la Phase 5 (curazione/scrematura ridondanze tra voci sintetiche e fonti verbatim).

### Stato attuale
**Phase 4 completata.** 34 file totali in `wiki/fonti/`. Prossimo passo: Fase 5 — scrematura e identificazione ridondanze tra voci sintetiche (`personaggi/`, `sistemi/`, `cultura/`) e fonti verbatim, da concordare con Pit prima di qualsiasi eliminazione o fusione.

## 2025-09-08 — Sviluppo lore Fiamme

### File aggiornato
- `fazioni-fiamme.md` — da stub a voce revisionata completa

### Motivazione
Sessione di lavoro con Pit ha chiarito il meccanismo d'origine delle Fiamme: Battesimi predestinati "orfani" perché l'Istinto è già incarnato in un Draghiere vivente (fenomeno aggravato dalla stabilità delle città di Re Draco), resurrezione parziale grazie all'ondata di Fierezza scatenata dalla crisi della specie Fenice su Vilegis (sacrificio di Vera Fenice da parte della Casata Radiant per potenziare lo Spettro del Bene). Collegato esplicitamente a `fonti-solitudine.md` (Draco/Wendy Wyrm come Vere Fiere, non ancora Re) e `fonti-deflecte-cantum.md` (le strofe su "quando spirò di Fenice genia" / "Fierezza infervora... eroi per poco bruciati a milioni"). Aggiunto motto: "Arsi ut ardeam" (variante corale "Arsimus ut ardeamus"). Documentata anche l'anomalia cosmologica per cui nessun Draghiere è consapevole dell'esistenza delle Fiamme.

### Lacune aperte registrate nella voce
- Rapporto esatto tra l'oblio delle Fiamme e il meccanismo che rende invisibili Wendy/Solomon ai Draghieri (`18___Misfit`) — probabilmente fenomeni distinti, da confermare.
- Rapporto tra i "Bruciati" di `Inktober 2018 #Scorched` e le Fiamme come descritte oggi — stesso fenomeno narrato prima del chiarimento, o precursore storico distinto.


### Correzione collegata
- `fazioni-vere-fiere.md` — rimossa l'ipotesi obsoleta "le Fiamme potrebbero derivare da ex-Vere Fiere"; sostituita con rimando corretto al meccanismo d'origine chiarito in `fazioni-fiamme.md`.

### Note per applicazione
Da applicare manualmente sia al project Claude.ai (sostituendo il vecchio `fazioni-fiamme.md` e `fazioni-vere-fiere.md`) sia al repo GitHub (commit/PR consigliata data la portata della modifica).

## 2026-10-11 — Riconciliazione dei registri editoriali

- Allineate le domande aperte alle decisioni canoniche già registrate: Frederick Fenice, sequenza di Dominic Draco, successione Brood e distinzione tra personaggio/specie Fenice.
- Chiarito che la voce geografica e gli stub delle Fiere esistono già; il lavoro residuo è di copertura, verifica e completamento, non di creazione iniziale.
- Registrate come già confermate le decisioni relative a Vilegis/Lunaria e al ruolo dei Bruciati come seme narrativo delle Fiamme, mantenendo aperta la verifica dei dettagli non confermati.
- Corretto il riferimento obsoleto a `wiki/fonti/` nelle istruzioni operative, sostituendolo con la struttura attuale `content/fonti/`.
- Chiarite le semantiche legacy del campo `status` e indicata una futura separazione tra stato editoriale e canonicità, senza migrazione massiva.
- Nessuna fonte narrativa verbatim è stata eliminata, fusa o riscritta.

- Riconciliati i percorsi del catalogo fonti con la tree GitHub: quattro riferimenti non trovati sono stati marcati come da riconciliare, senza dichiarare le fonti perdute.
- Aggiunto `.github/workflows/validate.yml` per eseguire una build Quartz su pull request verso `main` e su richiesta manuale.


## 2026-10-11 — Eliminazione della collisione tra gli indici radice

- Rimossa `content/_index.md`, byte-per-byte identico a `content/index.md`.
- Il codice Quartz di questa repository normalizza `_index.md` a slug `index`; il generatore della pagina di contenuto salta i soli slug che terminano in `/index`, mentre `index` e `_index` normalizzati possono quindi concorrere alla scrittura di `public/index.html`.
- Conservato `content/index.md`, che Quartz identifica esplicitamente come homepage radice. Nessun contenuto è stato perso perché i due file erano identici.


## 2026-10-11 — Compatibilità tra frontmatter wiki e Quartz

- Il plugin frontmatter ora usa `titolo` come fallback per il campo Quartz `title`, così le intestazioni canoniche della wiki vengono mostrate correttamente.
- Generati redirect alias dai titoli canonici e dai nomi file leggibili, inclusi i casi con articolo iniziale e titoli descrittivi.
- Aggiunti alias espliciti per alcuni termini del glossario e collegamenti a sezioni/concetti già documentati, senza inventare nuove voci narrative.
- Aggiunta la voce glossario per la Specie Fenice, distinta dal personaggio Frederick Fenice e basata sulle fonti già registrate.


- Aggiunto `scripts/check-wikilinks.mjs` al workflow di validazione: segnala collegamenti non risolti e collisioni di slug/alias.
- I collegamenti che puntano a sezioni usano ora gli slug canonici del file, così le ancore non dipendono da redirect alias.
- La risoluzione degli alias avviene prima della registrazione dei link in uscita, preservando i riferimenti canonici per backlink e grafo.


## 2026-10-11 — Allineamento delle date editoriali

- Aggiornato `ultima_modifica` nelle pagine Markdown modificate durante la manutenzione, in modo che il metadato non continui a dichiarare una revisione del 2025.
- Rimosso L5 dal registro delle questioni aperte: l'esclusione di Vilegis/Lunaria dallo scope è già una decisione confermata e resta documentata nelle decisioni chiuse.


- Aggiornato il registro delle lacune: Solomon non viene numerato secondo la regola canonica delle Vere Fiere; Icaria resta limitata a ciò che dice la fonte disponibile.
- Verificati i riferimenti ufficiali attuali di Battle for Vilegis: Equilibrio è un candidato plausibile per il tredicesimo Spettro nella versione esterna attuale, ma non è stato trasferito nel canone Kindsgard.


- Corretto “Locchia” in “Loccia” nella voce delle Fiere: “Loccia” è la grafia coerente con l’elenco dei Draghieri, la scheda di Laerius Loch e Inktober 2019.
- Registrata come domanda HITL la variante Angeline Aconitum/Aconytum, senza imporre una grafia canonica in assenza di decisione esplicita.


## 2026-10-11 — Voci preliminari delle Fiere

- Aggiunte voci preliminari per Leopterix ed Everastes usando solo caratteristiche attestate nelle fonti presenti.
- Distinte le caratteristiche delle Fiere da quelle dei rispettivi Draghieri.
- Aggiornata L6 per distinguere voci preliminari presenti e schede tecniche ancora incomplete.

- Precisate L3 e L6: la geografia e gli stub delle Fiere esistono già; restano il confronto con fonti mancanti e il completamento delle schede tecniche, senza duplicare contenuti.


## 2026-10-11 — Riconciliazione dei riferimenti alle fonti

- Rimossa dal registro delle lacune la Grande Fagiolata: è un archivio presenze di un evento, non una fonte del setting.
- In una prima verifica, D3 e D4 erano stati classificati come riferimenti non riconciliati perché i percorsi attesi non erano presenti nel repository.
- Il successivo chiarimento dell'utente ha identificato D3 come la Cronistoria OOC sulle Ere del Giardino e del Kindsgard e D4 come “You Want to Be a Dragoner”; vedere la voce successiva per lo stato aggiornato.


## 2026-10-11 — Chiarimento delle identità D3/D4 e aggiornamento del protocollo

- Registrato il chiarimento dell’utente: D3 è la Cronistoria OOC che parte dalle Ere e confronta le Ere del Giardino con le Ere del Kindsgard; D4 è la guida ai Draghieri “You Want to Be a Dragoner”.
- Corretto il registro: le identità delle fonti non sono più descritte come sconosciute. I testi integrali non sono stati trovati nel tree GitHub né nella ricerca della Library collegata, quindi le verifiche puntuali restano parziali.
- Aggiornata L1 e L3 per attribuire i riferimenti ad Anarion, Fondamento e alla verifica geografica ai documenti identificati, mantenendo esplicita la mancata disponibilità dei testi originali.
- Rimosso dalle istruzioni di ripresa il controllo ormai superato sul duplicato `index.md`/`_index.md`, già risolto, sostituendolo con la riconciliazione degli altri due percorsi sorgente ancora irrisolti.


## 2026-10-12 — Distinzione dei livelli cosmologici

- Chiarita in `Cosmologia` la distinzione fra i sette vettori originari del Kindsgard, i tredici Spettri di Vilegis/Lunaria e i tredici vettori/Guardiani manifestatisi nel Kindsgard in seguito alla connessione fra i mondi.
- Precisato che non va presunta una corrispondenza uno-a-uno fra i sette vettori originari e i tredici Spettri.
- Qualificate in `Cronologia` e `Le Ere del Kindsgard` le corrispondenze con Lunaria come parallelismi storici, non equivalenze totali fra i due setting.
- Aggiornati glossario e registro delle lacune per riflettere i chiarimenti già forniti dall’utente, lasciando aperti solo i dettagli non verificabili senza i testi integrali D3/D4.
- Nessuna informazione del setting esterno è stata importata come canone indipendente del Kindsgard.
- Registrato il Kindsgard come Mondo Ancora collegato, mantenendo aperti i dettagli non definiti di Anarion e dei criteri di riconoscimento.
- Esplicitata la relazione causale tra la morte del Guardiano-Re di Vilegis/Lunaria, la scelta di Dominic di interrompere i cicli e il rischio cosmologico.
- Registrata la conseguenza della fondazione delle città: viola la legge del Giardino secondo cui tutto deve combattere.
- Aggiornate le regole del Battesimo già chiarite: unicità dell'incarnazione per tipo di creatura/specie nel periodo, orientamento legato all'esito della battaglia su Vilegis e numerazione progressiva dei soli Draghieri.
- Aggiunto il termine Mondo Ancora al glossario e distinto il dato confermato (Kindsgard collegato come Mondo Ancora) dai dettagli ancora da recuperare.
- Ristretta la domanda cronologica A1 alla sola collocazione non determinata di Inktober 2024; mantenute le raccolte 2018/2019 al livello di Era del Dominio senza inventare date per i singoli racconti.
- Precisato nel catalogo che `draghieri-spiegazione.md` tratta il dualismo Draghieri/Vere Fiere, ma non è possibile affermare senza l'originale che coincida con il riferimento storico `Draghieri/Vere Fiere del Kindsgard`.


## 2026-10-13 — Riconciliazione metadati PR #14

- Verificati i metadati della PR #14: chiusa, `merged=false`, `merged_at=null`. Il campo `merge_commit_sha` punta al commit `2f7a76d948c48bf9cafaa2df7409e35ecdf89f62`, il cui messaggio è `Merge ddc4da80ebc7bdd61e952c25d9c1e41f66dab89b into 6fd6f10a00093f58044854dc985092a4de44d989`: un commit di prova/mergeability, non un merge effettivo della PR.
- Classificata la PR #14 come chiusa senza merge. Nessun contenuto viene recuperato automaticamente dal suo branch storico.
- Dopo il merge della PR #20, `main` punta a `dac44d6d46d36b2c84a6ee69eeb369f0dcedb2e2`; il branch di questa correzione porta l'inventario a 22 branch totali, inclusi `main`.


## 2026-10-13 — Riconciliazione del catalogo fonti: verifica frontmatter

- La ricerca del percorso `content/fonti/` restituisce 29 file attuali; i frontmatter di tutti i 29 sono stati recuperati e controllati. Tutti riportano titolo, categoria `fonti`, status e ultima modifica; 27 sono marcati `canonico`, mentre `list.md` e `mostri.md` sono marcati `bozza` e classificati come brainstorming.
- Il confronto dei percorsi attuali con `content/meta/fonti.md` non trova file sorgente orfani dal catalogo. Dei 33 percorsi distinti citati nel catalogo, 29 corrispondono a file presenti e quattro restano non reperiti: Annali dell'Artiglio di Fuoco, D3 Cronistoria OOC, D4 “You Want to Be a Dragoner” e Draghieri/Vere Fiere del Kindsgard.
- `Copia_di_I_Draghieri_del_kindsgard` resta un identificatore legacy distinto, non un file autonomo né un'identità dimostrata di `draghieri-spiegazione.md`.
- Il saggio `fierezza-il-dio-che-e-in-noi.md` è marcato canonico ma incompleto (tag e catalogo); mantenuta la distinzione fra status canonico e integrità del testo, senza riclassificazione automatica.
- Il controllo ha coperto metadati e percorsi, non la lettura integrale dei 29 corpi narrativi. Il confronto semantico rimane da eseguire.


## 2026-10-13 — Copertura dell'indice e inventario pagine

- L'albero ricorsivo di `main` è stato letto senza troncatura: 283 voci totali, 253 file, 65 Markdown sotto `content/`. I 29 file fonte hanno frontmatter controllato; gli altri 36 file sono stati passati in rassegna a livello di frontmatter e struttura principale.
- Tutti i 65 file controllati mostrano frontmatter e `status`. Conteggio descrittivo dei valori: 30 canonico, 23 revisionato, 6 bozza, 6 in aggiornamento. La correttezza semantica non è implicata da questo conteggio.
- Individuata un'omissione nella navigazione: l'indice non elenca le due pagine della categoria Cultura. La PR #23 aggiunge una sezione Cultura con Religioni e Spiritualità e Tradizioni, Canti e Motti.
- Il punto 2 resta in corso: lettura integrale dei 29 corpi fonte, riconciliazione dei riferimenti legacy e confronto semantico con le pagine wiki.


## 2026-10-13 — Prima tranche di verifica semantica delle fonti

- Letti integralmente e verificati in prima passata 9 corpi fonte: Cronistoria breve, Ciò che i Draghieri conoscono, Draghieri del Kindsgard (spiegazione), Canzoni degli Umani, Deflecte Cantum, Lamento di Wade, La Natura di Natura, Fierezza — Il Battesimo di Cornelius e Fierezza: il Dio che è in noi.
- Confermata la distinzione fra la credenza in-world secondo cui gli Umani avrebbero creato Bisogno e la verità cosmologica espressa da `La Natura di Natura`. Registrata senza risoluzione una possibile lacuna di supporto per la frase wiki secondo cui Natura avrebbe scelto di preservare gli Umani; D3, fonte utile a risolvere, è non reperita.
- Registrata la natura mista della fonte OOC `draghieri-spiegazione.md`, con riferimenti Vilegis/Lunaria da non assimilare automaticamente al canone originario. Non è stata modificata la fonte.
- Il saggio di Wade resta canonico ma incompleto; `Deflecte Cantum` mantiene due strofe marcate come errate. Nessuna riclassificazione senza ulteriori evidenze.
- Inktober 2018 è stato recuperato ma l'output è stato troncato; non è classificato come letto integralmente. Inktober 2019 e 2024 restano da leggere per sezioni.
- L'inventario semantico resta in corso: 9/29 corpi fonte verificati integralmente.


## 2026-10-13 — L16 risolta mediante lettura diretta di Misfit

- Verificato il corpo di `content/fonti/misfit.md`: Wendy Wyrm è indicata come «colei che fu Vera Viverna» e Solomon come «che fu la Vera Sfinge», coerentemente con il loro stato successivo alla perdita del potere.
- Rimossa L16 dalla lista delle decisioni da sottoporre al proprietario e registrata fra le questioni risolte documentalmente. `Inktober 2018 #Precious` non è prova di mantenimento del potere: la forma umanoide non contraddice la fonte più esplicita.
- La regola generale riportata dalla cronologia viene mantenuta, senza dichiarare dimostrata la sorte individuale di ogni Vera Fiera.


## 2026-10-13 — Varianti testuali individuate nel confronto delle fonti

- `Inktober 2018 #Flowing` presenta una discrepanza interna sul numero di Brienne Brood: XVII nell'indice/intestazione e VI nella firma della lettera. Le altre attestazioni canoniche concordano su XVII; il testo sorgente non è alterato.
- `Inktober 2019 #Legend` riproduce due strofe di `Deflecte Cantum` che la fonte autonoma marca come errate/da ignorare. Il registro fonti e la voce Tradizioni ora esplicitano che la riproduzione non prevale sulle correzioni dell'autore.
- L16 è stata risolta nella PR #25 sulla base di `Misfit`. I corpi delle tre raccolte Inktober non sono ancora verificati integralmente; 26/29 altre fonti sono state lette in prima passata.


## 2026-10-13 — Quarantena Fiamme e nuove ambiguità di fonte

- La voce `Fiamme` contraddiceva il registro L13: si autodefiniva terza fazione del Kindsgard e importava meccaniche legate a Vilegis/Lunaria. La PR #27 la riclassifica come bozza, separa i Bruciati attestati nel corpus Kindsgard, conserva il materiale esterno in una sezione esplicitamente non canonica e corregge la descrizione fuorviante nell'indice.
- Aggiunta L19 per “Sirius” in `Inktober 2018 #Flowing`: identità non risolta, non assimilata automaticamente a Syrus Salamander.
- Registrate le varianti Brianne/Brienne e il nuovo ancoraggio relativo di Inktober 2024 (cinque anni dopo la missione di ripopolamento della Città-Alveare), senza assegnare date assolute.


## 2026-10-13 — Riallineamento delle pagine dopo la risoluzione L16

- Rimosso il riferimento obsoleto a L16 da `content/fazioni/vere-fiere.md`, `content/storia/ere.md` e `content/personaggi/dominic-draco.md`: `Misfit` usa il passato per Wendy e Solomon e non contraddice il ritorno allo stato umano.
- Aggiornata la voce Vere Fiere affinché non presenti come canonica la meccanica esterna delle Fiamme; rimando alla pagina in quarantena e alla domanda L13.

- Estesa la risoluzione L16 alle voci Wendy Wyrm e Solomon: il passato verbale di `Misfit` è ora riflesso nelle biografie e non restano riferimenti alla domanda chiusa.

- Riallineati anche glossario e cronologia: rimossa dal glossario la definizione delle Fiamme come terza fazione del Kindsgard e rimossa dalla cronologia la domanda L16 ormai risolta da `Misfit`.


## 2026-10-13 — Discrepanza cronologica di Syrus

- Estesa L19 alla tensione fra la morte di Syrus prima dell'ascesa a Re Draco e il brano di `Inktober 2019 #Wild` attribuitogli, che menziona città costruite dall'Anno del Dominio. Il brano non viene datato né riassegnato senza il testo integrale degli Annali.
- Registrata la variante Adryanne Achenium/Achenius; la sintesi wiki conserva Achenius, senza alterare il testo sorgente.

- Completata la lettura integrale di `Inktober 2024`: il personaggio di `#Hile/#Sun` ricorda di essere morto e tornato e non viene percepito dagli Umani, ma la fonte non menziona esplicitamente un Battesimo fallito né lo identifica come Bruciato/Fiamma. Il collegamento resta ipotesi, non fatto canonico. Avanzamento fonti: 27/29 corpi letti integralmente; restano le antologie 2018 e 2019.


## 2026-10-13 — Precisione dei riepiloghi e riconciliazione dei riferimenti

- Corretto l'indice rapido di `Inktober 2024`: `#Hile/#Sun` non attesta esplicitamente un Battesimo fallito né identifica il personaggio come Bruciato/Fiamma. Aggiornata anche L13 per distinguere testo e ipotesi.
- Precisato in L17 che i tredici Draghieri di `Inktober 2019 #Build` non sono automaticamente i tredici Guardiani di `#Legend`.
- Chiarita la natura editoriale dei raggruppamenti nel bestiario.
- Aggiunti riferimenti a `draghieri-spiegazione` e `Inktober_2019` alle pagine che li usano direttamente; il catalogo distingue l'identificatore di riferimento dal campo `id` assente nel frontmatter della fonte.
- 27/29 corpi fonte letti integralmente; le antologie 2018 e 2019 restano da completare. La verifica semantica delle pagine è ancora in corso.

- Confrontati direttamente `bacche-emofaghe-fonte.md` e `Inktober 2018 #Drain`: quest'ultimo è una variante abbreviata e parzialmente riformulata della scheda tecnica, non un racconto narrativo/ambientale né una seconda attestazione indipendente. Corretta la classificazione D2 nel catalogo.


## 2026-10-13 — Copertura Inktober 2018 e discrepanza Adryanne

- Completata la lettura integrale di `Inktober 2018`; avanzamento fonti 28/29. Resta da completare `Inktober 2019`.
- Registrata L20: `Inktober 2019 #Build` chiama Adryanne Achenius IX Draghiere, mentre `#Husky` e `Elenco Draghieri` riportano XII. La sintesi conserva XII senza modificare le citazioni originali.


## 2026-10-13 — Chiusura della prima passata di lettura fonti

- Completata la lettura integrale di tutte le 29 fonti catalogate (29/29). Restano aperti il confronto semantico sistematico con le pagine wiki, la verifica puntuale delle citazioni e la riconciliazione dei riferimenti legacy.
- Registrata la variante della strofa di `Giù nel Bosco` in `Inktober 2019 #Enchanted`; la versione della raccolta `Canzoni degli Umani` resta il riferimento, senza alterare la citazione narrativa.
- Chiarito che le liane rosse di `#Ancient` e le piccole Fiere alate di `#Enchanted` non sono identificate per specie e non vanno assimilate a specie note per somiglianza.


## 2026-10-15 — Prima passata semantica delle pagine wiki

- Letti i corpi di 29 pagine tematiche (Cultura, Fazioni, Fiere, Mondo, Personaggi, Sistemi, Storia) e di `content/index.md` e `content/_glossario.md`. È una prima passata del testo delle pagine, non una certificazione che ogni affermazione sia stata confrontata con ogni fonte primaria.
- Preparati diciassette riallineamenti documentali: motivazione non dimostrata di Natura verso gli Umani (`cosmologia.md`); credenza umana sulla nascita di Bisogno/Espediente (`ere.md`); anatomia non attestata della Chimera (`caitlin-chimera.md`); generalizzazione non attestata sul Canto del Leviatano (`luther-leviathan.md`); graduazione non verificabile della forza presso la Maestà e rapporto fra eruzioni ed Echi (`maesta.md`); ambito canonico Kindsgard/Vilegis esplicitato nell'indice (`index.md`).
- Nessuna fonte narrativa originale è stata modificata. I testi mancanti D3/D4 e gli altri identificatori legacy restano non reperiti e non vengono sostituiti per somiglianza.
- Il punto 2 dell'audit resta aperto: serve ancora la verifica sistematica delle citazioni puntuali e dei riferimenti `fonti` per tutte le pagine, oltre alla validazione dei diff di questa tranche.

- Registrata in C9 la decisione editoriale che i Bruciati sono il seme narrativo delle Fiamme; rimossa la stringa `*confermato in sessione*` dal campo `fonti` della voce Fiamme, perché non è un file fonte. La presenza di una fazione organizzata nel Kindsgard resta aperta (L13) e le meccaniche di Vilegis/Lunaria restano in quarantena.

- Riconciliata una citazione della voce `Anello di Fuoco`: la frase sul luogo in cui «la forza selvaggia del nucleo rigenera» è presente in `Ciò che sanno i Draghieri`, fonte in-world di prospettiva limitata. Aggiunto il riferimento al campo `fonti` e documentato lo slug adottato, senza presentarlo come nome originale verificato.

- Allineati alcuni wikilink sintetici alla convenzione che richiede il titolo wiki anziché il percorso file: indice → Geografia del Kindsgard, link alle Ere, e sezioni Leopterix/Everastes. Le fonti narrative verbatim restano inalterate.

- Marcato esplicitamente come contesto OOC esterno il paragrafo su come i Draghieri sono rappresentati su Vilegis/Lunaria in `content/fazioni/draghieri.md`; evita che una regola di rappresentazione del gioco esterno venga letta come proprietà del canone Kindsgard.

- Rimossi dai tag di frontmatter della voce Fiamme i concetti specifici del materiale esterno in quarantena (`revenant`, `comunità`, `casata-radiant`, `anomalia`) e la classificazione generica `fazione`; mantenuti i tag che indicano Fiamme, Bruciati, Vilegis e quarantena editoriale.

- Corretta una formulazione off-by-one in `Draghieri` e `Il Battesimo del Fuoco`: il numero progressivo indica la posizione nella sequenza della specie, non quanti predecessori esistono. La numerazione di Wade come 33° Viverna resta invariata.

- Aggiunto `Elenco_Draghieri_Conosciuti` ai campi `fonti` delle pagine che usano numeri progressivi o titoli di sequenza (Draghieri, Battesimo, Fierezza/Maestà, Dominic, Wade, Bran, Brood, Caitlin, Luther, Frederick e Soffione Uncinato). L'elenco è la fonte canonica per le numerazioni, distinta dalle fonti narrative che documentano gli eventi.

- Creato `content/meta/audit-copertura-pagine.md`, registro persistente per i 31 file non fonte: per ciascuno distingue prima lettura, confronto diretto con fonti e residui. Il registro impedisce di confondere la lettura del corpo con una verifica completa delle affermazioni.

- Allineati i campi `fonti` di Geografia, Maestà, Ere, Caitlin e Cronologia alle fonti effettivamente citate nel corpo: aggiunti i riferimenti pertinenti a `Cronistoria_versione_breve`, `cio-che-sanno-i-draghieri`, `La_natura_di_Natura` e `Canzoni_degli_Umani`.

- Riallineata la cronologia alla cautela già presente nella voce Frederick: il volto identico alla Giovane Fenice è riportato, ma la connessione cosmologica non è dichiarata completamente documentata dalle fonti narrative disponibili. Aggiunto `Elenco_Draghieri_Conosciuti` al campo `fonti` per il titolo Unica Fenice.

- Corretta la panoramica di Dominic Draco: «detentore di tutto il Fondamento del Kindsgard» confondeva il potere raccolto dai tredici vettori manifestatisi nel Kindsgard con il Fondamento di Vilegis/Lunaria. La voce ora distingue i due sistemi, coerentemente con la nota già presente più avanti nella stessa pagina e nel registro canonico.

- Qualificata nella voce Dominic la composizione dei tredici Guardiani: le fonti attestano il gruppo e il legame con i vettori, ma non autorizzano a presentare come certa la distribuzione fra Draghieri, Vere Fiere e Fiere effettive. La composizione completa resta aperta in L17.


## 2026-10-15 — Continuazione del confronto semantico

- PR #31 integrata in `main` con merge commit `88df1c80929a391324a647d8a2f21737f5ca0b93`; il workflow `Validate Quartz wiki` sul HEAD della PR è riuscito. Non è stata restituita una run separata sul merge commit.
- Avviata una tranche successiva in `audit/citation-crosscheck-2026-10-15`: la voce `Il Battesimo del Fuoco` ora descrive Ishvard/Karsh come eccezione documentata, senza dichiarare non ripetibile il meccanismo, e cita `Risveglio_del_Drago`. L4 resta aperta sulla causa e ripetibilità dell'evento.
- La matrice `content/meta/audit-copertura-pagine.md` è aggiornata; prosegue il confronto puntuale delle affermazioni e delle citazioni, soprattutto per le intersezioni Vilegis/Lunaria.

- In `Religioni e Spiritualità`, aggiunti i riferimenti diretti a `Canzoni_degli_Umani` e `Riflessioni`; rimossa un'inferenza psicologica non dimostrata sull'incompletezza del saggio di Wade; distinta la conoscenza cosmologica di Dominic dal possesso del Fondamento esterno.

- In `Città-Alveare`, rimossi «in tempi immemori» e l'attribuzione della fondazione ai Draghieri della Covata: le fonti elencate attestano il presidio di Bartholomew, ma non data né fondatori originari. La lacuna resta esplicita invece di essere colmata per inferenza.

- In `Città-Alveare`, corretta l'attribuzione dei tunnel allo Zaratan: `Inktober 2019 #Pattern` associa il profilo dei tunnel al carapace ma non afferma che la Fiera li abbia scavati. La formulazione ora conserva il dato e rimuove la causalità non attestata.

- In `Città-Alveare`, rimosse la soglia non attestata «sciami di migliaia» e la frequenza assoluta «attacchi a ritmo costante». La voce conserva la funzione difensiva e gli attacchi ricorrenti documentati senza inventare misure o periodicità.

- Registrata in `Fonti e Decisioni Canoniche` la lacuna di provenienza per `Dal Fuoco alla Vita` e `Omnia praedae fieri Potest`: non rintracciati nelle 29 fonti attuali; possibile dipendenza da D4 o dal documento legacy Draghieri/Vere Fiere, non dimostrata. `Ab Necessitate Excusi` è invece attestato in Inktober 2018/2019.

- Aggiunta una nota di provenienza in `Draghieri`, `Vere Fiere` e `Tradizioni, Canti e Motti`: `Dal Fuoco alla Vita` e `Omnia praedae fieri Potest` restano motti riportati dalla sintesi wiki, ma la loro attestazione primaria non è stata rintracciata nel corpus corrente. Non sono stati rimossi né dichiarati non canonici.

- In `Cronologia`, il rapporto 100:1 fra un anno di Lunaria e cento anni del Kindsgard è ora qualificato come dato presente nella sintesi ma non verificabile senza la Cronistoria OOC (D3), non reperita nel repository.

- In `Geografia del Kindsgard`, la descrizione del Bordo è attribuita alla prospettiva collettiva in-world di `Ciò che sanno i Draghieri`, invece di essere presentata senza qualifiche come misura oggettiva della forza di Natura.


## 2026-10-15 — Distinzione fra cataclisma del Kindsgard e Rovina

- La `Cronistoria (versione breve)` attesta un cataclisma cosmico che colpisce il Kindsgard, ma non lo nomina direttamente come Rovina. L'identificazione con la Rovina di Vilegis/Lunaria è stata riclassificata come parallelismo interpretativo in `Cosmologia`, `Cronologia` e `Glossario` perché D3/D4 non sono reperibili per verificare l'identità.
- Registrato il confine in `content/meta/fonti.md` e nella matrice `content/meta/audit-copertura-pagine.md`. Nessuna fonte originale modificata.

- Estesa a `Le Ere del Kindsgard` la distinzione fra il cataclisma cosmico attestato e la sua identificazione con la Rovina: la fonte breve non nomina direttamente la Rovina e D3/D4 non sono disponibili per confermare l'identità.


## 2026-10-15 — Riconciliazione cronologica Ishvard/Karsh

- Rilevata una contraddizione fra `Cronologia` (Primo Secolo del Draco) e `Le Ere del Kindsgard` (Primo Secolo dell'Orso) sulla collocazione di Ishvard/Karsh.
- Neutralizzate entrambe le datazioni in attesa di una fonte primaria; D3/D4 non sono disponibili per dirimere il conflitto.
- Rimossa la formula «unicum narrativo, non ripetibile»: il corpus documenta il caso, ma non prova che il meccanismo sia intrinsecamente irripetibile.
- Aggiornati L4 e la matrice di copertura. Nessuna fonte narrativa originale è stata modificata.


## 2026-10-15 — Merge PR #33 e PR #35

- Integrata la PR #33 dopo esito positivo del workflow Quartz: il cataclisma del Kindsgard resta attestato, ma l'identificazione con la Rovina di Vilegis/Lunaria non è promossa a fatto certo; il rapporto 100:1 resta non verificabile direttamente senza D3.
- Integrata la PR #35 dopo esito positivo del workflow Quartz: la datazione di Ishvard/Karsh è stata neutralizzata per la contraddizione fra Cronologia ed Ere, e rimossa la formula «unicum narrativo, non ripetibile» non dimostrata dalle fonti.
- Aggiornato il checkpoint operativo. Le fonti narrative originali non sono state modificate.


## 2026-10-15 — Coerenza del rapporto temporale 100:1

- Il rapporto 100:1 fra Lunaria e Kindsgard era già qualificato come non verificabile nella nota generale di `Cronologia`, ma restava formulato come fatto certo nel singolo evento e nella nota sul tempo di `Le Ere del Kindsgard`.
- Allineate le tre formulazioni: il rapporto resta un dato riportato dalla sintesi wiki, non una misura confermata finché D3 non è reperita.
- Nessuna fonte originale è stata modificata.

## 2026-10-15 — Merge PR #36 e metadati

- PR #36 integrata con workflow Quartz `success`: le occorrenze puntuali del rapporto temporale 100:1 sono state allineate alla cautela già registrata nella nota generale.
- Allineati i metadati `ultima_modifica` di `content/meta/istruzioni-ripresa.md` e `content/meta/domande-aperte.md` alla data delle revisioni effettive del 15 ottobre 2026.


## 2026-10-15 — Identificatore legacy Draghieri/Vere Fiere

- La scansione dei campi `fonti` ha rilevato `Draghieri_Vere_Fiere_del_Kindsgard` in tre pagine. È possibile che si riferisca al percorso legacy non reperito `content/fonti/draghieri-vere-fiere.md`, ma l'identità non è dimostrata.
- Registrata la lacuna nel catalogo fonti e nella matrice di copertura. Il riferimento non è stato sostituito con `draghieri-spiegazione.md`, che resta solo una fonte OOC pertinente, non un sostituto confermato.


## 2026-10-15 — Correzione della scheda Loccia

- Il confronto diretto con `Inktober 2019 #Snow` ha mostrato che la scheda della Loccia negava erroneamente la presenza di un habitat glaciale e non registrava la dentatura, benché la fonte descriva una bestia acquatica piena di denti nei ghiacciai perenni del Nord.
- Corretta la scheda e mantenuta distinta la questione lessicale fra “Lochs” in `Inktober 2018 #Flowing` e “Loccia” in `#Snow`, che le fonti non equiparano esplicitamente.


## 2026-10-15 — Merge PR #37 e consolidamento L11

- Integrata la PR #37 dopo esito positivo del workflow Quartz: la scheda della Loccia ora riflette la descrizione esplicita di `Inktober 2019 #Snow` (bestia acquatica, dentatura, ghiacciai perenni del Nord, sorgenti dei fiumi). Resta aperta la relazione terminologica con “Lochs” in `Inktober 2018 #Flowing`.
- Consolidata L11 per raccogliere i due identificatori OOC non riconciliati: `Copia_di_I_Draghieri_del_kindsgard` e `Draghieri_Vere_Fiere_del_Kindsgard`. Nessuna fonte originale è stata modificata o sostituita.


## 2026-10-15 — Qualificazione morfologica delle Falenottere

- La scheda chiamava le Falenottere “insettiformi”, ma `Inktober 2019 #Frail` descrive Fiere insettiformi in generale senza identificare esplicitamente la specie. La descrizione della Fiera alata minuta, della luce e del pungiglione resta sostenuta da `#Enchanted` e `Inktober 2018 #Drooling`; la morfologia insettiforme è stata rimossa come inferenza non confermata.


## 2026-10-15 — Merge PR #38

- Integrata la PR #38 dopo esito positivo del workflow Quartz: la scheda delle Falenottere non le definisce più “insettiformi” senza una fonte specifica; mantiene i tratti attestati in `Inktober 2018 #Drooling` e `Inktober 2019 #Enchanted`.


## 2026-10-15 — Qualificazione della provenienza dei motti

- `Dal Fuoco alla Vita` e `Omnia praedae fieri Potest` non sono stati rintracciati nelle 29 fonti disponibili. Le pagine `Draghieri`, `Vere Fiere` e `Tradizioni` ora li presentano come motti attribuiti dalla sintesi wiki, non come attestazioni primarie verificate; è stata rimossa anche l'affermazione non supportata che la spiegazione d'origine del primo sia documentata.
- `Ab Necessitate Excusi` resta distinto: la formula è attestata nei testi narrativi disponibili, incluso il saluto con risposta identica in `Inktober 2019`.


## 2026-10-15 — Merge PR #39

- Integrata la PR #39 dopo esito positivo del workflow Quartz: `Dal Fuoco alla Vita` e `Omnia praedae fieri Potest` sono qualificati nelle pagine Draghieri, Vere Fiere e Tradizioni come motti attribuiti dalla sintesi wiki, senza attestazione primaria verificata.


## 2026-10-15 — Precisione sulla festività del Giorno del Bisogno

- `Inktober 2019 #Ornament` descrive il raduno al tempio durante una piena autunnale e dice che la piena ricorre ogni autunno; non dichiara in modo esplicito la periodicità del Giorno del Bisogno stesso.
- La pagina `Tradizioni` non presenta più la festività come annuale né gli Umani come destinatari di doni già ricevuti: il testo ora distingue il permesso di fare un dono/soddisfare un piccolo desiderio dalla cadenza non specificata della festività.


## 2026-10-15 — Ambiguità sui sei vettori di `Deflecte Cantum`

- La fonte parla di “sei vettori in tredici affondi” e del Fondamento che fluisce verso il Giardino, ma non identifica i sei vettori né li equipara esplicitamente ai sette vettori originari del Kindsgard o ai tredici Guardiani successivi.
- Qualificata la precedente interpretazione wiki come provvisoria e aggiunta L21 alle decisioni documentali da chiarire; nessuna corrispondenza è stata inventata. La parola «espedienti» non è stata trattata come attestazione certa della forgiatura dell'arma Espediente.


## 2026-10-15 — Checkpoint dopo PR #42 e ricognizione branch

- Integrata la PR #42 con squash dopo aver verificato l'esito `success` della workflow `Validate Quartz wiki` sul commit di testa.
- La pagina `Deflecte Cantum` e i registri ora qualificano l'identificazione dei “sei vettori” come interpretazione non confermata; L21 resta aperta.
- Confrontati con `main` i branch `audit/ishvard-karsh-source-gap-2026-10-13` e `audit/cosmology-boundary-2026-10-15`: entrambi contengono formulazioni superate e non vanno integrati così come sono. Le cautele sostanziali risultano già presenti in `main`.
- La pulizia dei branch resta un'attività distinta: `delete_branch_on_merge=false` e la connessione GitHub disponibile non espone un'azione di cancellazione dei branch. Nessuna cancellazione viene dichiarata eseguita.
- L'audit complessivo non è concluso: restano da verificare i branch non associati a PR, la copertura semantica delle pagine e le lacune che dipendono dal recupero di D3/D4 e di altre fonti non reperite.


## 2026-10-15 — Automazione della pulizia dei branch

- Preparata la workflow `.github/workflows/delete-merged-branch.yml` per eliminare automaticamente il branch interno associato a una PR dopo il merge, con guardie per escludere branch esterni e branch predefinito.
- La workflow è stata estesa con una scansione giornaliera per ripulire anche i branch storici associati a PR merged, solo quando il loro SHA corrente coincide con l'head della PR, non ci sono PR aperte e il branch è interno e non predefinito. Il primo run schedulato deve essere verificato.


## 2026-10-15 — Verifica della pulizia automatica branch

- PR #45 integrata; la validazione Quartz sul branch PR ha concluso `success`.
- La workflow `Delete merged pull request branches` (run `38722940799`) ha concluso `success` e il branch sorgente della PR #45 è stato verificato assente dall'elenco remoto dopo il run.
- La routine schedulata quotidiana ripulirà i branch storici solo quando il ref coincide esattamente con l'head di una PR merged e non ci sono PR aperte. Il primo run schedulato resta da verificare.
- `audit/ishvard-karsh-source-gap-2026-10-13` resta un branch orfano senza PR associata, con contenuto superato da `main`; non è coperto dalla pulizia automatica dei branch di PR merged.


## 2026-10-15 — Recupero selettivo di tracciabilità dal branch Ishvard/Karsh

- Confrontato il branch storico con `main`: le correzioni cronologiche e le cautele semantiche erano già state assorbite nelle PR successive, ma tre riferimenti diretti mancavano dai campi `fonti`.
- Aggiunti `Risveglio_del_Drago` a `Fierezza e Maestà`, `draghieri-spiegazione` a `Il Battesimo del Fuoco` e `Elenco_Draghieri_Conosciuti` a `Le Ere del Kindsgard`. Nessun contenuto narrativo primario modificato.


## 2026-10-15 — Correzione semantica della Città-Alveare

- Corretto il trasferimento del numero 1247: `Prevedibilità (covata)` conta le squadre in posizione, non i tubi. Rimosse dalla Città-Alveare e dalla Geografia l'affermazione di 1247 tubi e quella di un tubo numerato per ogni squadra; mantenuto il sistema di tubi di rame attestato dalle fonti.
- Riallineata la nota sugli attacchi: `Inktober 2024 #Binoculars` descrive le ondate come susseguitesi a ritmo costante nei cinque anni dalla missione di ripopolamento, ma non ne quantifica la cadenza.

- Precisata anche la nota sulla fondazione: `Inktober 2019 #Build` attribuisce il dominio dell'Artiglio Sepolto alla Covata «da tempi immemori», ma non data la fondazione della struttura né ne identifica i fondatori.


## 2026-10-15 — Pulizia arretrata dei branch superseded

- La workflow elimina ora i branch di PR merged sia dopo un merge sia nel run giornaliero, con controllo dello SHA esatto e assenza di PR aperte.
- Inserita una allowlist limitata ai branch delle PR #12, #14, #34 e #41 chiuse come superseded, al branch orfano Ishvard/Karsh dopo il recupero selettivo in PR #47 e al branch di checkpoint già contenuto nella storia di `main`. Ogni voce richiede ancora lo SHA esatto verificato e nessuna PR aperta; non è una regola generale per cancellare qualunque branch chiuso.
- La verifica effettiva della pulizia arretrata avverrà al prossimo merge con la nuova versione della workflow oppure al run schedulato.


## 2026-10-15 — Correzione del pruning e qualificazione logistica

- Il run `38724168648` della nuova workflow ha fallito nella scansione dei branch per una query alle PR aperte formulata con `gh api -f` senza `--method GET`; il job di cancellazione diretta del branch corrente è riuscito. Corretto il metodo della query e lasciata aperta la verifica del pruning al prossimo merge.
- In `Città-Alveare`, la difficoltà di accesso e rifornimento dovuta alla posizione montuosa è ora esplicitamente una deduzione logistica, non un dettaglio attestato da fonte.


## 2026-10-15 — Pruning riuscito e riconciliazione degli ultimi branch

- La workflow corretta ha concluso con successo il run `38724512069`; il repository è passato da 46 branch non-main a 2, cancellando i branch merged con head invariato e quelli superseded/orfani esplicitamente verificati.
- Confrontati file per file i due branch rimasti senza PR associata: `audit/page-semantic-pass-2026-10-15` e `audit/quarantine-fiamme-and-sources-2026-10-13`. Non contengono correzioni narrative uniche da integrare; sono versioni precedenti di contenuti ora più accurati in `main`. Aggiunti alla allowlist one-shot con SHA verificato, per rimozione al prossimo merge se non modificati e senza PR aperte.


## 2026-10-15 — Chiusura della pulizia branch

- La workflow `Delete merged and audited obsolete branches` ha concluso con successo il run `38725386057`; la verifica successiva restituisce solo `main` (zero branch non-main).
- Rimossa l'allowlist one-shot, già eseguita con controlli SHA esatti e assenza di PR aperte. Resta la pulizia generica dei branch di PR merged dopo ogni merge e quotidianamente.
- Aggiornata la matrice per i tre riferimenti recuperati dal branch Ishvard/Karsh: `Risveglio_del_Drago` in Fierezza e Maestà, `draghieri-spiegazione` nel Battesimo del Fuoco, `Elenco_Draghieri_Conosciuti` nelle Ere del Kindsgard.
- La pulizia dei branch è completata nel perimetro verificato; l'audit semantico e le lacune di fonte restano aperti.


## 2026-10-15 — Precisione semantica della Geografia

- Corretto il profilo delle Colture in base a `Inktober 2024 #Exotic`: sistema chiuso per le Fitofiere necessarie al sostentamento, quattro individuate, Amaranthus Cruentus la più importante. Rimosse le generalizzazioni non provate «quattro specie commestibili» e «unico sistema organizzato di produzione alimentare».
- Rimossa l'affermazione generale che le Catene Montuose Orientali siano habitat dei Behemoth; la presenza/attività di Bran Behemoth non prova da sola un habitat di specie esteso all'intera catena.


## 2026-10-15 — Qualificazione documentale di Mondo Ancora e Guardiani

- In `Cosmologia`, la relazione con Mondo Ancora e la manifestazione dei tredici vettori/Guardiani restano nella ricostruzione wiki, ma sono esplicitamente marcate come non verificabili direttamente senza i testi D3/D4 mancanti.
- La formulazione non è stata eliminata né sostituita con ipotesi esterne; nessuna fonte narrativa originale è stata modificata. Aggiornato il registro di copertura e il checkpoint operativo.


## 2026-10-15 — Definizione generale e tassonomia delle Fiere

- In `content/fiere/fiere-stub.md`, sostituita la generalizzazione «ogni creatura è una Fiera» con una formulazione riferita alle specie non umane del Giardino, evitando di includere gli Umani nella definizione.
- La classificazione Sensibili/Inerti è qualificata come parte della sintesi wiki non verificabile direttamente senza la guida D4 mancante. Non sono state assegnate classi a specie specifiche né modificate fonti originali.

- Riconciliato il campo `fonti` di `content/fiere/fiere-stub.md` con le citazioni effettive: aggiunti `Canzoni_degli_Umani` e `Fierezza`.


## 2026-10-15 — Coerenza redazionale in Religioni e Spiritualità

- Risolta la contraddizione interna per cui `Religioni e Spiritualità` negava l'accessibilità della verità cosmologica a tutte le prospettive e subito dopo indicava Dominic Draco come eccezione. La formulazione distingue ora le prospettive ordinarie dall'eccezione documentata.
- Nessuna fonte originale modificata; aggiornati matrice di copertura e checkpoint.
