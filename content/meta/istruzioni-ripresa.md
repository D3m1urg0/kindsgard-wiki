---
titolo: "Istruzioni di Ripresa — Conversione Fonti in Wiki"
categoria: "meta"
tag: [meta, ripresa, sessione, istruzioni]
status: "canonico"
ultima_modifica: "2025-06-13"
---

# Istruzioni di Ripresa

> *Da caricare all'inizio della prossima sessione insieme a `meta/fonti.md` e `meta/domande-aperte.md`.*

---

## Stato del Progetto

✅ **Phase 4 completata.** Tutti i documenti sorgente `.docx`/`.md` sono stati convertiti in file `.md` canonici nella cartella `wiki/fonti/`, con frontmatter wiki e link interni inseriti. La cartella `fonti/` contiene ora **34 file** (i 4 già completati nella sessione precedente + i 30 prodotti in questa sessione).

L'obiettivo finale del progetto — contenere **solo file `.md`** — è raggiunto lato conversione. Resta da fare la **Fase 5: curazione e scrematura**, per identificare ridondanze tra le voci sintetiche della wiki principale (es. `personaggi/`, `sistemi/`) e le fonti verbatim ora disponibili in `fonti/`.

---

## File Completati in `wiki/fonti/` (elenco completo)

| File | Documento originale | Gruppo |
|------|---------------------|--------|
| `d3-cronistoria-ooc.md` | `D3-cronistoria-ooc.md` | — |
| `d4-guida-draghiere.md` | `D4-guida-draghiere.md` | — |
| `annali-artiglio-di-fuoco-intro.md` | `Annali_dell_Artiglio_di_Fuoco_-_Intro.docx` | — |
| `draghieri-vere-fiere.md` | `Draghieri___Vere_Fiere_del_Kindsgard.docx` | — |
| `elenco-draghieri.md` | `Elenco_Draghieri_Conosciuti.docx` | 2 |
| `fierezza-il-dio-che-e-in-noi.md` | `Fierezza__il_Dio_che_è_in_noi.docx` | 2 |
| `cio-che-sanno-i-draghieri.md` | `Copia_di_I_Draghieri_del_kindsgard...docx` | 2 |
| `cronistoria-versione-breve.md` | `Cronistoria_del_Kindsgard__versione_breve_.docx` | 2 |
| `draghieri-spiegazione.md` | `Draghieri_del_Kindsgard__spiegazione_.docx` | 2 |
| `fierezza-battesimo-cornelius.md` | `Fierezza.docx` | 3 |
| `riflessioni.md` | `Riflessioni.docx` | 3 |
| `pezzo-del-rituale-chimera.md` | `Pezzo_del_rituale_-_Chimera.docx` | 3 |
| `lamento-di-wade.md` | `Lamento_di_Wade__primo_anno_del_drago_.docx` | 3 |
| `una-missiva-dall-anello.md` | `Una_Missiva_dall_Anello_.docx` | 3 |
| `l-esodo.md` | `L_esodo.docx` | 3 |
| `l-ultima-notte-all-ombra-dell-anello.md` | `L_ultima_notte_all_ombra_dell_Anello.docx` | 3 |
| `onda-bianca.md` | `Onda_bianca.docx` | 3 |
| `l-animale-uomo.md` | `L_Animale_Uomo.docx` | 3 |
| `deflecte-cantum.md` | `Deflecte_Cantum__il_ritorno_dei_Draghieri_.docx` | 3 |
| `canzoni-degli-umani.md` | `Canzoni_degli_Umani.docx` | 3 |
| `la-natura-di-natura.md` | `La_natura_di_Natura.docx` | 4 |
| `solitudine.md` | `Solitudine.docx` | 4 |
| `misfit.md` | `18___Misfit.docx` | 4 |
| `risveglio-del-drago.md` | `Risveglio_del_Drago.docx` | 4 |
| `prevedibilita-covata.md` | `Prevedibilità__covata_.docx` | 4 |
| `il-trattato-wendy-wyrm.md` | `Il_Trattato__Wendy_Wyrm_.docx` | 4 |
| `soffioni-uncinati-fonte.md` | `Soffioni_Uncinati.docx` | 5 |
| `bacche-emofaghe-fonte.md` | `Bacche_Emofaghe.docx` | 5 |
| `mostri.md` | `Mostri.docx` | 5 |
| `list.md` | `_List.docx` | 5 |
| `inktober-2018.md` | `Inktober_2018.md` | 6 |
| `inktober-2019.md` | `Inktober_2019.md` | 6 |
| `inktober-2024.md` | `Inktober_2024.md` | 6 |

---

## Note sulla Conversione Inktober (Gruppo 6)

A differenza degli altri gruppi, i tre file Inktober sono stati gestiti con un approccio diverso per la loro lunghezza (664, 1030, 191 righe): invece di inserire link `[[...]]` inline dopo ogni singolo racconto, è stato aggiunto un **blocco indice** in testa al documento con un riepilogo racconto-per-racconto e i link alle voci wiki principali toccate. Il corpo narrativo resta verbatim, immutato.

Durante la conversione di `inktober-2019.md` è stato rilevato e corretto un errore nell'indice iniziale (riferimento a un racconto #18 inesistente — la numerazione originale salta da #17 a #19).

---

## Prossimi Passi — Fase 5: Curazione e Scrematura

Come discusso con Pit, il prossimo passo è una **revisione di ridondanza** tra:
- Le voci sintetiche già esistenti in `personaggi/`, `sistemi/`, `mondo/`, `cultura/`, `fazioni/`
- Le fonti verbatim ora disponibili in `fonti/`

Possibili aree di sovrapposizione da verificare:
- `personaggi/wendy-wyrm.md` vs `fonti/la-natura-di-natura.md`, `fonti/solitudine.md`, `fonti/misfit.md`, `fonti/il-trattato-wendy-wyrm.md` — molto contenuto duplicato in forma riassunta vs verbatim
- `personaggi/dominic-draco.md` vs `fonti/solitudine.md`, `fonti/risveglio-del-drago.md`, `fonti/misfit.md`
- `cultura/tradizioni.md` vs `fonti/canzoni-degli-umani.md`, `fonti/deflecte-cantum.md`, `fonti/lamento-di-wade.md`, `fonti/pezzo-del-rituale-chimera.md`
- `cultura/religioni.md` vs `fonti/fierezza-il-dio-che-e-in-noi.md`, `fonti/la-natura-di-natura.md`
- `sistemi/il-battesimo-del-fuoco.md` vs `fonti/fierezza-battesimo-cornelius.md`
- `meta/fonti.md` — la tabella "Fonti del Progetto" elenca ancora i file come `.docx`; va aggiornata per puntare ai nuovi file `.md` in `fonti/`

⚪ **Non procedere con eliminazioni o fusioni senza conferma esplicita di Pit**, secondo la regola "preferisci chiedere a dedurre".

---

## Correzioni Canoniche Applicate

- `Frederic` / `Friederich` → **Frederick** (applicato in tutti i nuovi file)
- `U-Ma-Ni` → **Umani** (applicato in `cronistoria-versione-breve.md`, con barrato visibile per tracciabilità)
- Grafia `Kindsgard` — sempre con questa forma

## Convenzione di Naming — Repo vs Project

| Contesto | Convenzione | Esempio |
|----------|-------------|---------|
| Repo GitHub (`content/`) | `<cartella>/<nome>.md` — cartelle reali | `fazioni/fiamme.md` |
| Project Claude.ai | `<cartella>-<nome>.md` — flat, prefisso come sostituto della cartella | `fazioni-fiamme.md` |
| File di root (entrambi) | `<nome>.md` senza prefisso | `_index.md`, `index.md` |

La conversione è meccanica: sul repo il separatore è `/`, nel project è `-`. Il nome del file resta identico.