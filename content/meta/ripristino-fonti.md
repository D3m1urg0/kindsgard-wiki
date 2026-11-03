---
titolo: "Ripristino e fedeltà delle fonti"
categoria: "meta"
tag: [audit, fonti, originali, provenienza, fedeltà]
status: "in aggiornamento"
ultima_modifica: "2026-11-03"
---

# Ripristino e fedeltà delle fonti

## Verifiche successive al ripristino — 2026-11-02

Baseline: **c45a4312c0df3f29e4e30a462995f58968e0e75e**, PR #89 integrata; CI 41486185675 e Pages 41486392761, tentativo 2, riusciti. Lavoro operativo nel checkout fuori OneDrive. Questa passata confronta i nuclei sotto, non certifica automaticamente tutte le proposizioni delle pagine coinvolte.

| ID | Evidenza originale effettivamente riletta | Esito e residuo |
|---|---|---|
| P01 — Maestà | Cronistoria breve, fuga delle Creature di Armonia: sulle spiagge la forza di Natura è più debole; stesso nucleo in FULL OOC e Onnisciente | Rapporto qualitativo centro/margini attestato; non sono provate una legge quantitativa né la potenza di ogni Fiera prossima al centro |
| P02 — Eruzione | La natura di Natura, firma e data: terzo anno dalla grande eruzione che diede inizio al Primo Secolo dell’Orso | Ancoraggio relativo attribuito al saggio, senza conversione assoluta né regola universale eruzioni/Echi |
| P03 — Frederick | Onnisciente, Il Primo Anno della Fenice; FULL OOC, La Battaglia di Vilegis ed il futuro che deve ancora venire | Volto identico alla Giovane Fenice nella prima redazione; a Onofrius nella seconda. Propagato a biografia, Ere e Cronologia senza fondere persone o versioni |
| P04 — Risvegli | FULL OOC, La Battaglia di Vilegis e Nota sullo sdoppiamento dei PG; Onnisciente, Primo Secolo del Drago; Risveglio del Drago | Orientamento Radiant/Moebius e incarnazione degli alter ego espliciti nella redazione storica. Distinti dalla cosmologia originaria, dai casi narrati e da una regola valida per ogni epoca |
| P05 — Annali e L11 | Annali di Fuoco Intro, firma Syrus e Era degli Eroi; Draghieri / Vere Fiere del Kindsgard; #Wild/#Bottle | Documenti recuperati, catalogo e rinvii allineati. Intro non equivale all’intero corpus degli Annali e non risolve l’attribuzione/data di #Wild |
| P06 — Limiti dei Bruciati | Inktober, secondo Scorched: sopravvissuti al fallimento del Battesimo, comunità e menomazioni | Il racconto non prova automaticamente meccanica delle Fiamme o identità dei gruppi; quarantena invariata |

I testi sotto content/fonti, gli 82 DOCX, il pacchetto e le estrazioni restano immutati. Non sono state introdotte nuove fonti o regole. Restano i quattro episodi senza originale recuperato e le decisioni del proprietario: grafia Angeline, IX/XII di Adryanne e identità Sirius/Syrus sono state sottoposte con domande puntuali. Le tre risposte non sono presunte.

## Decisioni e revisione dei residui — 2026-11-03

Il proprietario conferma **Angeline Aconytum** (C11, A5 risolta) e **Adryanne sempre XII** (C12, IX in #Build è un refuso, L20 risolta). Le sintesi e le annotazioni sono aggiornate, senza modificare alcuna parola o numero delle fonti originali. I vecchi rimandi Aconitum restano compatibili tramite alias.

Per Sirius/Syrus il proprietario non ricorda e chiede una revisione. La ricerca esatta, sul testo dei paragrafi dei 100 DOCX forniti, non trova Sirius; nessun file Flowing/Cruel/Whale/Tasty è recuperato per nome sotto Downloads/kindsgard. Le prime ricerche mirate non aggiungono riscontri. Una successiva ricerca Drive a testo pieno recupera il foglio Spettri, simboli, processi, etc, in cui Foglio1!C10 contiene **Sirius Salamander**, nella colonna Guardiano accanto a Radiant/Salamandra. Il proprietario conferma di trattare il foglio come **bozza da verificare**. Non è un’identificazione con Syrus né una ratifica della lista dei Guardiani. Flowing resta uno dei quattro episodi senza originale: L19 rimane aperta separatamente dalla cronologia degli Annali di Syrus.

## Esito e perimetro

Baseline: `0c49b234e436338db0850d87736bf8c7b76805b4`, PR #88. Il proprietario ha chiesto di ripristinare le sue parole nelle fonti, separando eventuali annotazioni, e ha fornito l’archivio locale delle esportazioni Quip. Il controllo precedente prima/dopo delle modifiche wiki **non verificava la fedeltà a questi originali** e non deve essere presentato come tale.

Sono state confrontate **tutte le 29 pagine fonte**: 27 hanno ora una trascrizione completa dai documenti corrispondenti; due antologie rimangono parziali. **74 segmenti** sono stati ripristinati e verificati contro il testo estratto dagli originali. **Quattro episodi** non hanno ancora un originale recuperato e conservano il testo precedente senza certificazione: Inktober 2018 #Flowing, #Cruel, #Whale; Inktober 2019 #Tasty. È stato chiesto al proprietario dove reperirli.

L’inventario corrente contiene **69 Markdown sotto content**: 29 fonti, le 31 pagine/indici precedenti e 9 registri. Il precedente inventario a 67 file resta una fotografia della PR #88, non la verifica di questa tranche.

## Che cosa viene preservato

Gli originali DOCX corrispondenti sono copiati **senza modifiche** nell’archivio `non-wiki/fonti-originali-2026-11-02.zip`, sotto `fonti-originali/quip`, insieme all’estrazione testuale UTF-8 e ai commenti/note in file separati quando presenti. Il pacchetto contiene gli **82 DOCX** espressamente autorizzati dal proprietario; la compressione non cambia i file. I file non-wiki non sono input del sito Quartz. L’estrazione conserva l’ordine dei paragrafi, le parole, i refusi, maiuscole, punteggiatura, appunti e interruzioni: non corregge lo stile dell’autore e non completa frasi sospese. I DOCX conservano impaginazione, formattazione e commenti che la trascrizione testuale non riproduce integralmente.

Nelle pagine fonte il testo originale è reso letteralmente, con soli accorgimenti di visualizzazione per evitare che dialoghi fra parentesi angolari, asterischi o cancelletti vengano interpretati come istruzioni HTML/Markdown. La decodifica è confrontata con l’estrazione, senza normalizzazioni lessicali. Introduzioni, rimandi e note della wiki sono ora in [[Annotazioni editoriali alle fonti]], dichiarati editoriali e distinti dai commenti presenti nei documenti.

Esempi verificabili: nel saggio Fierezza tornano «infinta», «nonstante», frasi incomplete e la formulazione originaria degli Appunti; nella Missiva resta «Friederich Fenix»; nell’Elenco restano le grafie del documento. Le decisioni canoniche su Frederick e Umani continuano a valere per le sintesi, senza correggere retroattivamente le citazioni. Expensive rimane troncato perché lo è anche il file fornito. Il documento dell’episodio 2024 porta **Hike**, mentre la precedente antologia riportava Hile: la trascrizione conserva Hike, senza decidere nuovi eventi o identità.

Le stesure Drive **All new order (song)**, **Di Una Dea chiamata Natura…** e **The song** restano varianti distinte in non-wiki, come confermato dal proprietario. Non sostituiscono Lamento, Cronistoria breve o Canzoni degli Umani: l’archivio Quip contiene gli originali corrispondenti a questi tre testi. Le versioni OOC non vengono fuse fra loro.

## Nuove verifiche semantiche

| Punto | Documento e posizione consultati | Esito |
|---|---|---|
| Rapporto temporale 100:1 | L’Ambientazione Onnisciente dei Draghieri (Cronistoria di vilegis), **Il Primo Secolo del Drago**, paragrafo sull’incidente di Istica | Attestato per quella fase. Non è una costante di ogni era. Supera la precedente lacuna, senza invalidare il risultato negativo circoscritto alle quattro altre redazioni |
| Ishvard/Karsh | Stesso documento, **Il Primo Secolo dell’Orso** | Trasferimento magico, separazione e due Battesimi opposti espliciti. Ishvard Draghiere della Manticora, Karsh Vera Manticora. Attestata la collocazione in questa redazione, non l’irripetibilità del meccanismo |
| Somiglianza della Fenice | Stesso documento, **Il Primo Anno della Fenice** | Il volto di Frederick è detto identico a quello della Giovane Fenice. Le altre redazioni parlano di Onofrius: registrare le formulazioni distinte, senza fondere persone per inferenza |
| Legacy Draghieri/Vere Fiere | Originale **Draghieri / Vere Fiere del Kindsgard** | Titolo e contenuto identificano il riferimento prima mancante (L11). Non equivale alla spiegazione OOC già pubblicata |
| Motto Omnia | Stesso documento, intestazione con due motti | Attestato «Omnia praedae fìeri Potest», affiancato ad Ab Necessitate Excusi nell’ordine delle fazioni. Non prova uso indistinto da parte di entrambi i gruppi |
| Annali di Fuoco | Originale **Annali dell’Artiglio di Fuoco - Intro** | Documento recuperato anche localmente; resta distinto dagli Annali delle Sabbie, non rintracciati |
| Procedimenti / dismissione Artigli | Ricerca nei testi dei 100 DOCX dell’archivio, anche nelle stesure del librogame | La ricerca documentale non aveva fornito il dettaglio. Successiva testimonianza del proprietario: sei attività, confermate dal riscontro del verso «I sei vettori» di Deflecte Cantum. Registrate in C10. Dismissione confermata solo come accenno, senza quantità o data |

Le citazioni in tabella riguardano documenti effettivamente letti. Il documento Onnisciente è una **redazione ulteriore**, diversa dai quattro candidati Drive/Dropbox già confrontati. Non gli si attribuisce automaticamente ogni proposizione del vecchio identificatore D3. Il proprietario chiarisce che la segretezza è interna al gioco e autorizza esplicitamente la pubblicazione degli 82 DOCX, estrazioni e commenti in non-wiki. Questi materiali sono separati dalle pagine pubblicate nel sito.

## Tracciabilità e controlli

`audit/ripristino-fonti-2026-11-02.json` collega ogni pagina e segmento al documento preciso, con hash SHA-256 dei DOCX e delle estrazioni. Gli originali supplementari sono inventariati separatamente e non aumentano il numero di pagine fonte pubblicate. Gli ID e URL privati dei documenti Drive/Dropbox non sono pubblicati.

`python audit/verify-source-fidelity.py` verifica hash, riestrazione dai DOCX e uguaglianza letterale dei 74 segmenti, segnalando esplicitamente i quattro episodi non verificati. Non sostituisce l’audit semantico di ogni proposizione. La CI deve eseguire anche questo controllo, oltre a wikilink e build, sullo SHA finale prima del merge. Esiti e pubblicazione vanno registrati nella PR.

Le citazioni delle finestrelle in testa alle pagine sono state confrontate con i testi disponibili e corredate di chi parla/scrive e documento/episodio. I tagli sono dichiarati; le sintesi editoriali non sono attribuite a personaggi.

Restano aperte le decisioni canoniche di [[Domande Aperte e Lacune]], i quattro originali mancanti, la precedenza delle versioni OOC e i dettagli residui di L22. Kindsgard originario e Vilegis/Lunaria rimangono distinti; il recupero di un originale non trasferisce tutto il suo contesto esterno nel canone Kindsgard.
