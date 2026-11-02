# Franco Ficara Repository — Piano di collaudo prima del lancio

**Obiettivo:** completare, verificare e rendere disponibili insieme cinque programmi gratuiti di **Franco Ficara Digital Studio**, più un sesto progetto collegato: **Franco Start**, portale web esterno già esistente. Il sito-vetrina è già pubblico, ma le schede non devono dichiarare che i programmi sono pronti finché non lo sono.

## Regola di pubblicazione

**Aggiornamento 2 novembre 2026:** l'autore ha autorizzato esplicitamente l'apertura di versioni web di prova prima del lancio ufficiale. I pulsanti **Prova online** sono consentiti, purché gli utenti vedano chiaramente i limiti. Resta vietato definire definitive versioni non collaudate o abilitare download rischiosi. Evitare versioni vecchie, duplicati e collegamenti fittizi. Conservare una sola versione identificata per ogni programma, con archivio privato dei sorgenti e pubblicazione dei soli file necessari.

## Inventario dei cinque software e del portale Start — 2 novembre 2026

| Prodotto | Tipologia | Sorgenti individuati | Da verificare prima del rilascio |
|---|---|---|---|
| Franco QR Studio | Web statico | Pacchetto pubblico ZIP nel repository | Verifica funzionale dei 14 tipi, stampa, PNG/SVG, test smartphone, qualità del QR e chiarezza della funzione foto/PDF tramite URL |
| Franco PC Cleaner | Windows / Python Tkinter | ZIP versione 3.4 nella conversazione di lavoro | Test Windows, duplicati, selezioni, quarantena/ripristino, errori e permessi, rimozione dei riferimenti a dati personali; documentare Python richiesto e dipendenze |
| AntiTruffa | Web / Python FastAPI | Repository GitHub `blob59/antitruffa-clean` | Controllo privacy e dati inviati, dipendenze, analisi non infallibile, protezione da abusi, avvio/installazione e test del servizio |
| MeteoScudo | Web / meteo | Sito di progetto menzionato, nessun archivio sorgente completo qui verificato | Recuperare il progetto esatto, controllare fonti e aggiornamento dati, avvertenze sugli avvisi e versioni deployabili |
| Digital Studio | Creazione video Windows / HTML | Pacchetto Windows completo `Franco-Ficara-Digital-Studio-Definitivo-Windows.zip` e Cinema Lounge V16 trovati e analizzati; rapporto `COLLAUDI/DIGITAL_STUDIO.md` | Test reali Windows e video esportato; verifica licenze, antivirus, spazio disco e distinzione dalla Cinema Lounge V16 |

### Sesto progetto: Franco Start (portale esterno)

- Indirizzo fornito dall'autore: https://start.francoficara.com/
- Una scheda «Franco Start» compare nel catalogo, categoria **Portali**, con pulsante **Visita Start**. Non è un file ZIP da scaricare e non richiede una nuova distribuzione nel Repository.
- La raggiungibilità dell'indirizzo non è stata verificata dai controlli automatici di questa sessione; va confermata nel browser prima dell'annuncio pubblico.
- Non modificare il sito Start originale. Il piano di collaudo dei cinque software resta invariato.

### Stato attuale del catalogo pubblico — verifica 2 novembre 2026

- **Franco QR Studio:** pulsante **Prova QR Studio**, apre la versione web esistente. Il ZIP originale resta sul server, ma il download non è promosso nel catalogo mentre l'aggiornamento UTF-8 resta da distribuire.
- **AntiTruffa:** pulsante **Prova AntiTruffa**, applicazione **locale nel browser** basata sull'interfaccia originale; non invia i testi al server, non controlla reputazione online e non abilita la segnalazione. Non è il backend FastAPI completo, ancora in collaudo.
- **MeteoScudo:** pulsante **Apri MeteoScudo**, apre il sito esistente `https://meteo.francoficara.com/` senza copiarlo nel Repository.
- **Digital Studio:** pulsante **Prova Studio Web**. Anteprima **ridotta e distinta** dal pacchetto Windows: visualizzatore audio con Canvas 16:9 e registrazione browser tramite MediaRecorder. Nel test di browser remoto ha prodotto un MP4 con audio. L'app Windows completa resta in collaudo.
- **Franco Start:** pulsante **Visita Start** per `https://start.francoficara.com/`.
- **Franco PC Cleaner:** nessun download pubblico, in attesa del collaudo su Windows delle funzioni di spostamento e cancellazione.

**Verifica Cloudflare:** risposta HTTP 200 sui siti Start, MeteoScudo, Repository e sulle tre pagine di prova del Repository. Controllo browser del catalogo: sei schede, cinque pulsanti di apertura, PC Cleaner disabilitato, nessun errore JS. Le prove non sostituiscono i test di compatibilità su telefoni e PC diversi.

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
