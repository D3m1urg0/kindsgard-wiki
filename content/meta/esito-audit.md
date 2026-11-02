---
titolo: "Esito dell’audit documentale"
categoria: "meta"
tag: [audit, evidenze, copertura, residui]
status: "in aggiornamento"
ultima_modifica: "2026-11-02"
---

# Esito dell’audit documentale

**Conferma successiva del proprietario — C10:** il verso originale di Deflecte Cantum riporta sei; i procedimenti di Espediente sono quindi **sei**, ora descritti nel registro [[Fonti e Decisioni Canoniche]]. Nessun settimo procedimento da cercare. Dismissione degli Artigli confermata soltanto come accenno, senza quantità o cronologia precisate. Questo esito supera le precedenti formule storiche sui sette processi non documentati.

## Aggiornamento autorevole — originali Quip recuperati

La successiva verifica di fedeltà e i nuovi riscontri sono in [[Ripristino e fedeltà delle fonti]]. **Prevale questo aggiornamento** sulle formule storiche qui sotto: 100:1 e Ishvard/Karsh sono attestati nella Cronistoria Onnisciente recuperata, il documento legacy Draghieri/Vere Fiere e il motto Omnia sono identificati. Le quattro redazioni precedenti restano distinte. L22 è risolta solo per quei dettagli; sette processi e dismissione degli Artigli restano aperti.

Le 29 pagine fonte sono state confrontate con l’archivio Quip: 74 segmenti ripristinati, quattro episodi in attesa degli originali. Il conteggio di 67 Markdown e l’inventario coverage-2026-11-02.json descrivono la **baseline PR #88**, non l’attuale fedeltà agli originali. Per questa verifica usare audit/ripristino-fonti-2026-11-02.json e audit/verify-source-fidelity.py. Le note sono ora in [[Annotazioni editoriali alle fonti]], fuori dai corpi degli autori.


## Perimetro e criterio di chiusura

**Da qui segue il report storico relativo alla PR #88.** Per i riscontri Quip, la fedeltà agli originali e la successiva decisione C10 prevale [[Ripristino e fedeltà delle fonti]]. I residui storici sotto non vanno riaperti quando risolti dal nuovo documento o dalla testimonianza del proprietario.

Baseline: `b25eae3936a12ed5f1ed9312d0d3dbdef55a5bd5`, merge della PR #87. La nuova passata ha letto le **31 pagine di contenuto/indici** e confrontato le sezioni con i passaggi indicati sotto. Ha inoltre ricontrollato apparati, riferimenti e inventario delle **29 fonti pubblicate**, confrontato le due cronistorie OOC candidate e le due guide candidate negli archivi collegati e riletto gli Annali di Fuoco Intro. Non sono stati importati testi privati.

**Questo è un esito di audit con residui, non una certificazione che ogni proposizione della wiki sia provata.** La lettura di una pagina, il riscontro di una fonte nel frontmatter e il buon esito della build sono tre verifiche diverse. Le righe sotto identificano i nuclei confrontati e ciò che rimane non dimostrato; non vanno trasformate in «31/31 pagine integralmente certificate». Le descrizioni interpretative dei personaggi non costituiscono nuove regole di Istinto.

Il file `audit/coverage-2026-11-02.json` nel repository conserva l’inventario riproducibile delle pagine, delle sezioni e dei blocchi testuali, con hash, posizioni e riferimenti di confronto. **I blocchi sono unità editoriali, non singole affermazioni atomiche**: il loro censimento verifica che non si sia saltata una parte del testo, non dimostra automaticamente ogni frase. Lo stato semantico resta quello della matrice e dei residui di questo report.

## Correzioni determinate dalle fonti

| ID | Rilievo e rettifica | Evidenza consultata alla baseline |
|---|---|---|
| F01 | Bran: ripristinata la pelle corazzata attestata, distinta dall’armatura e perforabile nell’episodio. Il precedente esito negativo dell’audit era errato | `fonti/prevedibilita-covata.md`, affondo della Viverna attraverso metallo e pelle; `la-natura-di-natura.md`, Il Potere, scaglie del Behemoth |
| F02 | Laerius: lunga permanenza sott’acqua esplicitamente attestata; habitat della Loccia citato in **#Dragon**, non #Snow. Corretta anche la descrizione di Ember al femminile | `inktober-2019.md`, #Dragon, «La Loccia è una bestia d’acqua» e Laerius nel lago; #Snow, presentazione di Ember |
| F03 | Wendy non è immune all’oblio: ripete la domanda dopo aver lasciato svanire la conversazione | `solitudine.md`, conclusione e descrizione dell’editto della memoria |
| F04 | Morte di Brood distinta dalla battaglia di Prevedibilità, in cui sopravvive; non attribuita senza prova alla fase da Vera Fiera di Draco | `inktober-2019.md`, #Build e #Swing («morto per mano di Re Dominic Draco»); `prevedibilita-covata.md`, finale |
| F05 | Ultima Notte: prosa successiva al ritorno delle Vere Fiere, non attribuita alla sola precedente vittoria dell’Orso; data 25/10/1104 conservata senza conversione di calendario. Propagato a Bran/Luther e agli apparati | `l-ultima-notte-all-ombra-dell-anello.md`, incipit e data; `lamento-di-wade.md`, sequenza Orso → assalto di Draco |
| F06 | Caitlin: anzianità attestata da #Ring, non ricavata dal numero II; «cattive abitudini» del narratore in #Ash, non autocitazione in Riflessioni | `inktober-2019.md`, #Ring, Artiglio affidato da oltre un millennio; #Ash, conclusione; `riflessioni.md` |
| F07 | Personaggi minori: a Città-Alveare sono nominati Grace e Mordred; non vi si collocano automaticamente G. Gryffin/Gwynidd. Maicol succede a un Capitano scomparso, senza cadavere ritrovato. Le Fiere da trasporto di Roc non sono identificate per specie | `inktober-2019.md`, #Build/#Pattern; `inktober-2018.md`, #Whale/#Flowing/#Expensive |
| F08 | Religione: #Ornament prescrive di pregare Fierezza; Riflessioni è un’esortazione di Caitlin, non una preghiera degli Umani. Critica alla divinità come «scelta personale» attribuita a Wade. Deflecte Cantum è rivolto da un Umano a Dani sul Kindsgard | `inktober-2019.md`, #Ornament; `fierezza-il-dio-che-e-in-noi.md`, Appunti; `riflessioni.md`; `inktober-2024.md`, #Passport |
| F09 | Geografia: coste messe in sicurezza ad Occidente nella fonte, quattro specie dette commestibili ma pericolose, Valle dei Tuoni distinta dai Fulmini. Prosperità del Regno non data per certa. Rimossi primati comparativi non provati | `cio-che-sanno-i-draghieri.md`, primo secolo; `inktober-2019.md`, #Overgrown/#Bait/#Tread/#Dragon/#Ring; #Guarded 2018 per torri in legno |
| F10 | Tentacolo Scarlatto: anche vegetale nei racconti; non equiparato al Purpureo. Behemoth: capacità di cambiare il fiume attribuita alla leggenda, non a un’osservazione certa. Bacca: conservato «solitamente» nella prognosi della scheda | `inktober-2018.md`, #Roasted/#Chicken/#Poisonous; `inktober-2019.md`, #Tread; `bacche-emofaghe-fonte.md`, Fioritura |
| F11 | Mondo Ancora già attestato nella fonte OOC pubblicata: eliminata la falsa dipendenza esclusiva da D3/D4. Morte del Re e fattezze di Frederick/Onofrius attestate nei candidati OOC, ma senza certificarne precedenza o fusione di persone | `draghieri-spiegazione.md`, TL;DR e Versione Estesa; due candidati D3, sezioni Consapevolezza/Caduta e La Battaglia di Vilegis |
| F12 | Apparati: maestro anonimo distinto da Moebius; le Essenze non ridotte a un’uguaglianza non esplicitata; Vellosa non dichiarata invenzione per mancanza d’identificazione; rituale Chimera non unico in tutti gli archivi; Drain è variante tecnica. Indici homepage resi navigabili | `risveglio-del-drago.md`; `la-natura-di-natura.md`; `mostri.md`; catalogo rituale Viverna esterno; D2 e scheda Bacche; pagine collegate esistenti |

Gravità: F01–F11 media (attribuzioni o certezza), F12 bassa (apparati/navigazione), salvo i dettagli meccanici conservati nei residui. Confidenza alta per le rettifiche positive. Una ricerca negativa ha soltanto il perimetro esplicitato: non prova che nessun’altra fonte esista.

## Matrice delle 31 pagine

Percorsi relativi a `content/`. «Confrontato» indica il controllo del nucleo descritto, non una canonizzazione automatica delle interpretazioni residue.

| Pagina | Sezioni/nuclei confrontati e fonti dirette | Residui / esito |
|---|---|---|
| `index.md` | Panoramica: spiegazione OOC, Cronistoria breve; indice: Elenco, Misfit, pagine esistenti | Link corretti, ruoli Wendy/Solomon storicizzati; nessuna nuova cronologia |
| `_glossario.md` | Definizioni cosmologiche: schema canonico, Natura di Natura, spiegazione OOC, #Legend; Covata: Prevedibilità; specie/luoghi: fonti della matrice | Mondo Ancora attestato, definizione generale ancora incompleta; collaborazione alla forgiatura e dettagli Nexus restano ricostruzione; L1/L17/L21/L22 |
| `mondo/cosmologia.md` | Natura/Bisogno/Espediente: Cronistoria breve, Natura di Natura, D3 candidate; Fierezza: schema confermato; Guardiani: #Legend; Mondo Ancora: spiegazione OOC | Sette vettori originari separati da Spettri; identità versioni, sei vettori e sette processi non risolti |
| `mondo/geografia.md` | Struttura/Anello/Bordo/Mare: Ciò che sanno i Draghieri; Artigli: lettere, #Ring/#Bait/#Freeze/#Flowing/#Whale/#Scorched; Città: Prevedibilità/#Build/#Swing; Colture: #Overgrown/#Exotic; Pianure: Soffioni | F09; mappa, equivalenza Tuoni/Fulmini e identificazione del vulcano di #Bait aperte. Nessuna coordinata inventata |
| `mondo/maesta.md` | Panoramica/obiettivo: spiegazione OOC e Cronistoria; fisica: #Ring/Solitudine; sacrificio: Solitudine; Re: Deflecte | F09/F12; gradiente della forza e meccaniche eruzioni/Echi non certificati in tutti i dettagli |
| `mondo/anello-di-fuoco.md` | Fondazione/legge: Cronistoria, Ciò che sanno, Lamento; crisi: Missiva; torri: #Stars/#Guarded; Dominio: #Ring | F09; uso della poesia distinto da una cronaca assoluta; prosperità non accertata |
| `mondo/citta-alveare.md` | Occhio/tubi: Prevedibilità; Abisso/gallerie/storia: #Build/#Swing/#Pattern; gestione: #Binoculars | F04/F09; data/fondatori ignoti; restauro puntuale delle singole strutture non datato |
| `fazioni/draghieri.md` | Mandato/psicologia/capacità: spiegazione OOC e guide D4 candidate; numero: Elenco; storia: Cronistoria/Lamento/#Legend; motti: #Ash/#Flowing e Annali Intro | Tratti OOC attestati nelle guide, versione normativa aperta; Omnia non attestato; legacy L11 |
| `fazioni/vere-fiere.md` | Natura/mandato/cicli: Natura di Natura, spiegazione OOC, Cronistoria; fine potere: Misfit/#Precious/#Clock; nomi: Elenco e racconti | Collaborazione, universalità degli effetti e meccanica Ishvard restano ricostruzione; L4/L11/L22 |
| `fazioni/fiamme.md` | Perimetro canonico: C9 e #Scorched 19-2; raffronto: #Hile/#Sun, Misfit/Solitudine/Deflecte | Quarantena confermata per **tutta** la sezione esterna: non certificati resurrezioni, poteri, cronologia o oblio universale delle Fiamme; L13 |
| `sistemi/fierezza-e-maesta.md` | Tre livelli: schema confermato; infusione: spiegazione OOC, Cornelius, guide; unicità Draghiere: D3 candidate; eccezione: Risveglio; Bruciati: #Scorched | Un Draghiere per Fiera non equivale a unicità di ogni Battesimo; orientamenti/Chiamate e Ishvard non completamente documentati |
| `sistemi/il-battesimo-del-fuoco.md` | Processo: Cornelius/spiegazione/guide; nome: Elenco/guide; Dominic: Cronistoria; Frederick: C4; eccezioni: Risveglio; Bruciati: #Scorched | Longevità attestata nelle guide; Ishvard dettagliato solo nella sintesi, non nei passi di #Roasted; L4 |
| `cultura/religioni.md` | Umani/sacerdoti: #Ornament/Canzoni; Draghieri: saggio Wade, rituale Chimera, Riflessioni; Vere Fiere: Natura di Natura; paradosso: schema e Solitudine | F08; giudizi teologici della sintesi non trasformati in regole di gioco; fonti in-world attribuite |
| `cultura/tradizioni.md` | Tutti i canti autonomi confrontati; motti: #Flowing/#Ash/#Swollen/#Passport e Annali Intro; festa: #Ornament; rituale: Chimera; Missiva | F08; varianti C7, Omnia non attestato, L21; non provata universalità dei motti o periodicità della festa |
| `fiere/fiere-stub.md` | Tutti i 26 profili e le otto menzioni confrontati con gli episodi indicati nel testo, i canti e l’Elenco; specie/Draghiere mantenuti distinti | F02/F10; aggiunto censimento separato di ulteriori nomi e associazioni; Trifide/Tripode non unificate; non sono 26 specie complessive |
| `fiere/bacca-emofaga.md` | Ogni sezione tecnica confrontata con Bacche fonte; note: Esodo | F10: solitamente; nessuna cura dell’ospite inventata, prognosi Esodo attribuita a Wade |
| `fiere/soffione-uncinato.md` | Ogni sezione tecnica confrontata con Soffioni fonte; note: #Build/#Husky; numero: Elenco | Dati dimensionali, ciclo e abbattimento concordanti; L20 IX/XII ancora aperta |
| `storia/cronologia.md` | Ere: Cronistoria/D3 candidate; Anello: Ciò che sanno/Lamento; crisi: Missiva/Ultima Notte/Risveglio; ascesa: #Legend/Misfit; Dominio: #Ring/#Clock | F05/F11; 100:1, sette processi, Ishvard e alcune conseguenze del regno restano ricostruzioni non dimostrate |
| `storia/ere.md` | Stessi nuclei storici con distinzione mito in-world/OOC; Lamento e Animale Uomo per le due prospettive | F05/F11; nessuna data assoluta ricavata dai prompt Inktober o da 1104; residui come Cronologia |
| `personaggi/dominic-draco.md` | Battesimo/Anello: Cronistoria e D3; Vera Fiera: Risveglio/Solitudine; ascesa: #Legend; Re: Misfit/#Expensive | F11/F12; descrizioni fisiche tenute nelle rispettive fasi; sette processi/dismissione Artigli e altri dettagli non dimostrati |
| `personaggi/wade-wyrm.md` | Nome: Elenco; caccia: #Poisonous; scritti: saggio/Missiva/Esodo; duplicazione: Risveglio; menzioni: Riflessioni/Solitudine; Ultima Notte e Onda | Confermate le cautele della PR #83 e l’assenza dall’Onda. Caratterizzazioni psicologiche restano sintesi; non regole canoniche nuove |
| `personaggi/wendy-wyrm.md` | Natura di Natura, Trattato, Solitudine e Misfit | F03; superlativi sull’accuratezza del saggio sono valutazioni editoriali, non onniscienza di Wendy |
| `personaggi/bran-behemoth.md` | Elenco; #Bait/#Freeze/#Snow/#Dragon; Prevedibilità; Ultima Notte; Onda | F01/F02/F05/F10; non invulnerabile, pelle documentata; Tuoni/Fulmini non equivalenti per deduzione |
| `personaggi/brood.md` | Elenco/Prevedibilità; #Build/#Swing/#Pattern; #Flowing; #Binoculars | F04; successione C3/A3 preservata; VI in firma di #Flowing resta variante originale, non numero canonico nuovo |
| `personaggi/caitlin-chimera.md` | Elenco/#Poisonous; Riflessioni/rituale/Onda; #Ring/#Ash | F06; tempo di presidio attestato, numero II non misura l’età |
| `personaggi/frederick-fenice.md` | Elenco/C4/Missiva/Lamento; specie: Solitudine; somiglianza: D3 candidate; Risveglio | F11; C4 confermata, nessuna fusione fra Frederick, Onofrius e Giovane Fenice; L17 |
| `personaggi/luther-leviathan.md` | Elenco, #Whale, Ultima Notte, Onda | F05; scomparsa del Capitano non morte osservata; nessuna generalizzazione sull’amplificazione del Canto o sorte dopo la dissoluzione |
| `personaggi/salamander.md` | Elenco/#Bottle/#Scorched/#Swollen/#Ash/#Exotic; Annali Intro/#Wild; Esodo | Syrus Guardiano attestato; Sirius/Syrus e cronologia Annali non risolti; Salamandra dell’Esodo ambigua |
| `personaggi/samuel-sphynx.md` | Elenco/#Tranquil/#Bottle/#Legend; Ultima Notte/Onda | L17 aperta; figura nella sabbia non identificata; progetti nelle biblioteche non custodia personale dimostrata |
| `personaggi/solomon.md` | Misfit e #Precious | Ex Vera Sfinge, Sartuk non dato per morto; nessuna invisibilità fisica universale dedotta dagli ornamenti |
| `personaggi/altri-personaggi.md` | Elenco e, per ciascun profilo, #Build/#Pattern/#Mindless/#Ash/#Snow/#Dragon/#Ornament/#Bottle/#Whale/#Flowing/#Binoculars, Cornelius e Prevedibilità | F02/F07; varianti A5/C5/C8/L20 mantenute. Non aggiunte specie o poteri dedotti dai cognomi |

## Fonti candidate e ricerche concluse nel loro perimetro

| Documento effettivamente consultato | Risultato di confronto | Limite |
|---|---|---|
| Drive, Draghieri FULL OOC PIETRO, modifica registrata 2014-05-28, estrazione 35.924 caratteri | Stesura più sviluppata della cronistoria comparata; comprende ancora segnaposto e appunti. Preservazione Umani, longevità, unicità, cicli, morte del Re e fattezze Frederick/Onofrius attestati | Il titolo FULL e una data successiva non provano da soli una ratifica canonica né l’identità col legacy D3 |
| Drive, SPIEGAZIONE COMPLETA OOC DELL’AMBIENTAZIONE DRAGHIERI, modifica 2014-03-27, 22.166 caratteri | Bozza con sezioni incomplete, impostazione delle Ere differente e ampia spiegazione OOC condivisa con l’altra stesura | Testi non identici; non sostituire una versione con l’altra in silenzio |
| Drive, So You Wanna be a Dragoneer, modifica 2014-09-04, 13.450 caratteri | Longevità/corpo/psicologia/creazione PG; differenzia i limiti su Vilegis dal Kindsgard | Mescola istruzioni di gioco e mondo narrativo; non è una classificazione tecnica di ogni specie |
| Dropbox, So you wanna be a Dragooner.paper, 16.470 caratteri estratti | Revisione distinta, psicologia ampliata e limiti fuori Kindsgard espliciti; testo non identico alla guida Drive | Data di migrazione Dropbox non equivale a data di composizione o ratifica |
| Drive, Annali dell’Artiglio di Fuoco - Intro | Letto integralmente; firma Syrus V e motti attestati | Non è l’Annale delle Sabbie né dimostra che l’estratto #Wild sia stato scritto nella stessa fase |
| Dropbox, Draghieri del Kindsgard.paper e Bando di reclutamento Vere Fiere.paper | Letti e confrontati; il primo è affine alla spiegazione OOC pubblicata, il secondo è reclutamento OOC | Affinità non dimostra l’identità del riferimento Draghieri_Vere_Fiere_del_Kindsgard |
| Drive, Remake Lettera Draco e Nexus (2013) | Riletti: conoscenza transitoria di Draco e ragionamento incompleto sull’Oblio; nessuna prova dei sette processi o del 100:1 nei due testi | In-world/bozze, non norme universali. Nessun originale privato pubblicato |

La ricerca del nome Ishvard in Drive/Dropbox non ha restituito ulteriori fonti pertinenti; questo risultato non certifica l’assenza del documento in tutti gli archivi possibili. La sigla D3/D4 resta una questione di **identità/versione**, mentre varie proposizioni attribuitele hanno ora supporto testuale individuato.

## Inventari e integrità

- Fonti GitHub: **29**, immutate nel numero; **27** con status storico canonico e **2** bozze di brainstorming (il valore del campo non è una prova del contenuto).
- Inktober: **2018 = 20 blocchi** per 22 prompt numerati più Scorched 19-2, con tre coppie condivise; **2019 = 24 episodi** numerati fino a 25 senza 18; **2024 = 8 blocchi** per 9 prompt, Hile/Sun condiviso. Corretto il catalogo; nessun racconto eliminato.
- Specie: verificati i **26 profili**, le **otto menzioni supplementari**, le **due schede tecniche**, i nomi ulteriori e le associazioni dell’Elenco. I nomi senza descrizione restano tali; liste OOC di esempi o brainstorming non sono zoologia canonica. Per ulteriori occorrenze nominali il censimento è ripetibile sui file alla baseline e non equivale a completezza di ogni archivio privato.
- Tutti i file fonte devono superare il confronto del corpo primario prima/dopo. Gli interventi sulle fonti riguardano frontmatter e apparati editoriali, non i racconti, versi, elenchi originari o schede tecniche. L’eventuale troncamento di un originale convertito non viene colmato inventando testo: #Expensive termina a metà frase nel file corrente.

## Residui che impediscono una certificazione integrale

1. **Versioni e identificatori:** precedenza normativa di D3/D4, identità legacy L11, originale degli Annali delle Sabbie. Non basta rinominare un candidato.
2. **Meccaniche e cronologia senza prova completa:** 100:1, sette processi minori, scissione Ishvard/Karsh e sua data, definizione completa di Mondo Ancora, dismissione degli Artigli e conseguenze universali del potere del Re. Conservati come ricostruzioni qualificate; L1/L4/L22.
3. **Nomi e appartenenze:** Angeline, Adryanne IX/XII, Sirius/Syrus, Seymour/specie, composizione dei tredici Guardiani, sei/sette/tredici vettori. Non decisi dall’audit.
4. **Gruppi e fenomeni:** Fiamme nel Kindsgard, Infiammati, limiti dei Bruciati, rapporto con #Hile/#Sun. La quarantena non è rimossa.
5. **Copertura probatoria atomica:** la matrice segue pagine/sezioni e rilievi; i blocchi con più proposizioni e le caratterizzazioni interpretative non sono tutti dimostrati frase per frase. Questo limite resta dichiarato e impedisce di chiamare concluso l’**audit definitivo integrale**, anche dopo l’integrazione della tranche.

## Decisioni da sottoporre al proprietario

Restano le undici questioni raccolte nella sintesi di [[Domande Aperte e Lacune]], con una distinzione pratica:

- **Canone:** A5 (Angeline), L13 (Fiamme), L14 (Infiammati), L15 (Seymour), L17 (Guardiani), L19 (Sirius/Syrus/Annali), L20 (Adryanne), L21 (vettori).
- **Identità documentale:** L11 e L12, più selezione normativa delle redazioni D3/D4. Servono una fonte o una scelta esplicita; non una fusione automatica.
- **Scelta editoriale:** titoli delle due fonti Fierezza, senza necessità di rinominarle per proseguire.

L22 raccoglie i dettagli ancora sostenuti dalla ricostruzione, non una richiesta di approvarli tutti per inerzia. La loro eventuale conferma richiede una fonte pertinente o una decisione esplicita registrata.

## Validazione e integrazione

Validazione locale eseguita: inventario 67/29/31/7, frontmatter analizzati, confronto dei corpi primari senza differenze nei testi mantenuti (esclusi frontmatter, titoli, introduzioni editoriali, note finali e navigazione), `git diff --check`, 67 Markdown con zero wikilink irrisolti o collisioni, build Quartz riuscita. I diff dei sei file fonte modificati confermano interventi ai soli apparati. Il generatore e i criteri di confronto sono in `audit/build-coverage.mjs` e si eseguono con `node audit/build-coverage.mjs`. CI da verificare sullo **SHA finale della PR**; poi Pages sul commit di merge. Registrare gli esiti nella descrizione della PR e nel messaggio di merge senza modificare nuovamente lo SHA già validato.
