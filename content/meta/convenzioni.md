---
titolo: "Convenzioni della Wiki"
categoria: "meta"
tag: [meta, convenzioni, stile, naming]
status: "canonico"
ultima_modifica: "2026-10-11"
---

# Convenzioni della Wiki

> *Regole di naming, stile e struttura. Da seguire per tutti i file nuovi e per le modifiche ai file esistenti.*

---

## Naming dei File

| Tipo | Convenzione | Esempio |
|------|-------------|---------|
| Personaggio | `nome-cognome.md` (tutto minuscolo, trattini) | `dominic-draco.md` |
| Più personaggi correlati | `cognome.md` o `cognome-specie.md` | `brood.md`, `salamander.md` |
| Luogo | `nome-luogo.md` | `anello-di-fuoco.md`, `maesta.md` |
| Fazione | `nome-fazione.md` | `draghieri.md`, `vere-fiere.md` |
| Sistema | `nome-sistema.md` | `fierezza-e-maesta.md` |
| Fiera | `nome-fiera.md` | `soffione-uncinato.md` |
| File meta | `_nome.md` (prefisso underscore) | `_index.md`, `_glossario.md` |

---

## Frontmatter Obbligatorio

Le voci enciclopediche devono usare i campi pertinenti al tipo di documento. `fonti` è obbligatorio per le voci sintetiche basate su fonti; per gli indici e i registri meta può essere omesso. Ogni file deve aprirsi con questo modello, adattato al caso:

```yaml
---
titolo: "Nome Entità"
categoria: "[mondo|storia|fazioni|personaggi|sistemi|cultura|fiere|meta]"
tag: [tag1, tag2]
status: "[bozza|revisionato|canonico|in aggiornamento]"
ultima_modifica: "YYYY-MM-DD"
fonti: ["nome_fonte_1", "nome_fonte_2"]
---
```

**Status (campo legacy):**
- `bozza` — voce incompleta o contenente ipotesi da verificare
- `revisionato` — voce controllata editorialmente; non implica che ogni interpretazione sia stata formalmente canonizzata
- `canonico` — voce approvata come riferimento autorevole
- `in aggiornamento` — voce o registro che richiede manutenzione; non indica da solo se il contenuto sia canonico
- `aggiornato` — valore storico già presente in alcuni file; durante la bonifica va normalizzato, dopo averne verificato il significato nel contesto

**Nota importante:** il corpus storico usa `status` per mescolare maturità editoriale e autorevolezza narrativa. Non cambiare in massa i valori senza revisione: in una futura migrazione introdurre due campi distinti, ad esempio `stato_editoriale` e `canonicita`, e mantenere una tabella di mapping approvata. Fino ad allora, interpretare `status` secondo le definizioni sopra e non dedurre una decisione canonica dal solo fatto che una pagina sia revisionata.

---

## Link Interni

Usare sempre il formato `[[Nome Entità]]` per i collegamenti tra voci. Il nome dentro le doppie parentesi quadre deve corrispondere al **titolo** della voce (campo `titolo` nel frontmatter), non al nome del file.

Esempi:
- `[[Dominic Draco]]` → punta alla voce del personaggio
- `[[Anello di Fuoco]]` → punta alla voce del luogo
- `[[Fierezza e Maestà]]` → punta alla voce del sistema

---

## Lacune e Stub

Quando un'informazione manca o è incompleta:
- Segnalare con `⚪` seguito da descrizione della lacuna
- Aggiungere rimando a `[[Domande Aperte e Lacune]]` con il numero della lacuna (es. `L3`)
- Per le voci stub, usare `status: "bozza"` e aggiungere avviso `⚠️ Voce Incompleta` in cima al contenuto

---

## Prospettiva e Tono

**In-world vs Out-of-character:**
- Le voci wiki sono scritte in **prospettiva OOC** (out of character): descrivono la realtà oggettiva del mondo, non la percezione dei personaggi
- Quando una credenza in-world differisce dalla verità cosmologica, entrambe vanno documentate esplicitamente (vedi [[Cosmologia]] per l'esempio di Bisogno ed Espediente)
- Le fonti in-world (saggi dei personaggi, lettere, canzoni) sono citate come fonti, non come verità assolute

**Tono:** enciclopedico, neutro, prosa chiara. Evitare aggettivi valutativi non supportati dalle fonti. Preferire la specificità alla generalità.

---

## Tracciabilità

Ogni affermazione sostanziale deve essere riconducibile a una fonte nel frontmatter o a una decisione di canonizzazione registrata in `[[Fonti e Decisioni Canoniche]]`. Se un'affermazione proviene da una sessione di lavoro (non da un documento scritto), annotarlo con `*confermato in sessione*`.

---

## Nomi Propri Canonici

| Nome | Grafia canonica | Note |
|------|----------------|-------|
| Frederick Fenice | Frederick | Non Frederic né Friederich |
| Kindsgard | Kindsgard | Non Kinsguard né altre varianti |
| Fierezza | Fierezza | Maiuscolo come principio cosmologico |
| Maestà | Maestà | Maiuscolo come principio/luogo |
| Bisogno | Bisogno | Maiuscolo come principio |
| Espediente | Espediente | Maiuscolo come principio e come arma |
| Vere Fiere | Vere Fiere | Due parole, entrambe maiuscole |
| Draghieri | Draghieri | Maiuscolo come categoria/fazione |
| Anello di Fuoco | Anello di Fuoco | Tre parole, prime due maiuscole |
| Battesimo del Fuoco | Battesimo del Fuoco | Tre parole, prima e terza maiuscole |

---

## Struttura Standard delle Voci

```markdown
# Titolo

> *Breve descrizione in una riga.*

## Panoramica
[2-4 paragrafi generali]

## [Sezioni specifiche per tipo di voce]

## Relazioni
- Collegato a: [[A]], [[B]]
- Parte di: [[C]]
- Vedi anche: [[D]]

## Note
[Questioni aperte, ipotesi, lacune]
```

---

## Aggiornamenti

Ogni modifica a un file esistente va registrata in `[[Changelog]]` con:
- Data
- File modificato
- Natura della modifica
- Motivazione (nuova fonte, decisione di sessione, correzione errore)
