# Franco Ficara Repository — Piano di collaudo prima del lancio

**Obiettivo:** completare, verificare e rendere disponibili insieme cinque programmi gratuiti di **Franco Ficara Digital Studio**. Il sito-vetrina è già pubblico, ma le schede non devono dichiarare che i programmi sono pronti finché non lo sono.

## Regola di pubblicazione

Nessun pulsante «Apri online» o «Scarica gratis» per il lancio ufficiale finché **tutti e cinque** non superano i controlli sotto. Evitare versioni vecchie, duplicati e collegamenti fittizi. Conservare una sola versione identificata per ogni programma, con archivio privato dei sorgenti e pubblicazione dei soli file necessari.

## Inventario dei cinque prodotti — 2 novembre 2026

| Prodotto | Tipologia | Sorgenti individuati | Da verificare prima del rilascio |
|---|---|---|---|
| Franco QR Studio | Web statico | Pacchetto pubblico ZIP nel repository | Verifica funzionale dei 14 tipi, stampa, PNG/SVG, test smartphone, qualità del QR e chiarezza della funzione foto/PDF tramite URL |
| Franco PC Cleaner | Windows / Python Tkinter | ZIP versione 3.4 nella conversazione di lavoro | Test Windows, duplicati, selezioni, quarantena/ripristino, errori e permessi, rimozione dei riferimenti a dati personali; documentare Python richiesto e dipendenze |
| AntiTruffa | Web / Python FastAPI | Repository GitHub `blob59/antitruffa-clean` | Controllo privacy e dati inviati, dipendenze, analisi non infallibile, protezione da abusi, avvio/installazione e test del servizio |
| MeteoScudo | Web / meteo | Sito di progetto menzionato, nessun archivio sorgente completo qui verificato | Recuperare il progetto esatto, controllare fonti e aggiornamento dati, avvertenze sugli avvisi e versioni deployabili |
| Digital Studio | Creazione video Windows / HTML | Pacchetto Windows completo `Franco-Ficara-Digital-Studio-Definitivo-Windows.zip` e Cinema Lounge V16 trovati e analizzati; rapporto `COLLAUDI/DIGITAL_STUDIO.md` | Test reali Windows e video esportato; verifica licenze, antivirus, spazio disco e distinzione dalla Cinema Lounge V16 |

### Controlli comuni obbligatori

- [ ] Una versione ufficiale per programma, con numero versione e data.
- [ ] Test delle funzioni principali e prova di avvio reale.
- [ ] Nessuna password, token, chiave API, dato personale o file riservato nel pacchetto.
- [ ] Licenze di terzi verificate; software gratuito non equivale automaticamente a codice open source.
- [ ] Manuale italiano e requisiti di sistema chiari.
- [ ] Schermata di presentazione e pulsante di download/avvio verificato.
- [ ] Nessuna funzione distruttiva o servizio a pagamento attivo senza avviso e autorizzazione.
- [ ] Test dei collegamenti in ambiente di anteprima, non solo nei sorgenti.

## Organizzazione proposta

- `public/`: sito-vetrina Cloudflare e, solo al momento del lancio, applicazioni web pubbliche.
- `software/`: schede tecniche, istruzioni e documentazione.
- Download grandi: preferibilmente release versionate su GitHub, dopo controllo.
- Sorgenti non ancora pubblicabili: NON depositare nel repository pubblico.

**Stato:** preparazione e collaudo. Nessun annuncio social prima dell'approvazione finale dei cinque programmi.
