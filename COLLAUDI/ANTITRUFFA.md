# AntiTruffa — Revisione pre-lancio (2 novembre 2026)

**Stato: correzioni preparate, test non ancora eseguiti, rilascio NON autorizzato.**

## Materiale trovato

Repository sorgente ufficiale: `blob59/antitruffa-clean` (backend FastAPI, interfaccia HTML in `app/templates/index.html`, database SQLite dei report). L'app è già sviluppata e non deve essere ricreata da zero.

## Problemi individuati nella versione iniziale

1. **Segnalazioni:** il modulo HTML invia `content`, ma l'API `/api/report` accetta inizialmente soltanto `text`. Il normale invio dal form produce errore.
2. **Riservatezza:** il database salva `original_text` con il messaggio integrale, che potrebbe contenere nomi, conti, numeri o altri dati personali. Serve minimizzazione e un'informativa sul trattamento.
3. **Falsa rassicurazione:** la valutazione verde «Più sicuro» può far pensare che un messaggio sia autentico; il punteggio è solo una stima euristica, non una certificazione.
4. **Safe Browsing:** se la chiave API non è configurata, il controllo esterno dei link non viene svolto. Se la richiesta esterna fallisce, il codice iniziale restituisce elenco vuoto senza avviso. Il sistema non deve far credere che l'URL sia stato verificato.
5. **Input e spam:** l'endpoint di segnalazione pubblico non ha ancora limiti di frequenza ed era privo di un limite esplicito di testo. La protezione contro spam e richieste abusive va completata prima del rilascio.
6. **Versioni di frontend:** oltre al template attivo esiste un `index.html` principale che fa riferimento a `/api/analyze/text`, endpoint non presente nel backend esaminato. Occorre scegliere una sola versione del frontend.
7. **Immagini:** il modulo `analyze_image.py` considera mancanza di EXIF/risoluzione bassa come segnali di possibile deepfake; questo NON dimostra manipolazione. Non promuoverlo come rilevatore affidabile senza test specifici.

## Correzioni preparate in ramo NON distribuito

Ramo di preparazione: [prelancio/antitruffa-privacy-20261102](https://github.com/blob59/antitruffa-clean/tree/prelancio/antitruffa-privacy-20261102)

- L'API delle segnalazioni accetta anche `content` dal modulo corrente.
- Il server non registra più nuovi testi integrali nel campo `original_text`: registra l'impronta SHA-256 parziale e i metadati essenziali.
- Le nuove segnalazioni senza valutazione sono marcate `da_verificare`, non automaticamente «basso».
- Il fingerprint inviato dal client non sostituisce quello ricalcolato dal testo presente.
- Lunghezza massima di 10.000 caratteri per analisi e segnalazioni.
- Interfaccia con avvisi più chiari: «Pochi indizi» invece di «Più sicuro», informativa su trasmissione del contenuto e possibile verifica URL presso servizi esterni.
- Sei test automatici aggiunti in `tests/test_privacy_report.py`: invio content, mancata memorizzazione testo, duplicati, impronta invalida e due limiti di lunghezza.
- Nessuna modifica al ramo `main` del repository sorgente e nessuna distribuzione nel Repository.

## Ancora da fare

- [ ] Eseguire i sei test API in ambiente isolato, controllando dipendenze e compatibilità.
- [ ] Applicare protezione anti-spam/rate limiting.
- [ ] Valutare con l'utente i vecchi report eventualmente già presenti nel database: NON cancellarli senza autorizzazione.
- [ ] Distinguere nel risultato «Safe Browsing verificato», «non configurato» e «non disponibile per errore».
- [ ] Eseguire test contro input malevoli, phishing falsi positivi, link legittimi e domini ingannevoli.
- [ ] Consolidare un frontend e verificare su smartphone.
- [ ] Rivedere la privacy prima di pubblicare l'app come versione pronta.
- [ ] Collaudo insieme a QR Studio, PC Cleaner, MeteoScudo e Digital Studio.

**Decisione precedente superata per la sola anteprima web:** il portale ora permette la prova locale, senza backend. La distribuzione del prodotto completo rimane bloccata fino ai controlli di privacy e sicurezza.

## Aggiornamento del 3 novembre 2026 — prova browser e correzione classificazione

- [x] L'autore ha testato la versione web con un SMS fittizio che minaccia il blocco del conto bancario e chiede password e OTP. Nella versione precedente il risultato era **60/100, Attenzione**: **anomalia confermata**.
- [x] È stato corretto **soltanto il frontend di prova nel Repository**, non il backend Python ancora in collaudo: se il contenuto chiede esplicitamente credenziali, la valutazione sale almeno a 80/100; se è associata a minaccia o urgenza, almeno a 90/100.
- [x] Test automatico sul codice corretto: messaggio originario **90/100 Pericolo**, richiesta semplice OTP **80/100 Pericolo**, testo educativo «non inserire la password» **30/100 Pochi indizi**, messaggio informativo neutro **5/100 Pochi indizi**; nessun errore JavaScript osservato.
- [x] Test sul sito pubblico Cloudflare: **90/100, Pericolo**, segnalazione esplicita di richiesta credenziali, nessuna chiamata HTTP POST durante l'analisi.
- [x] Corrette le istruzioni visualizzate: la demo non dichiara più un risultato «sicuro» né una funzione segnalazioni attiva. Le segnalazioni sono disabilitate.
- [ ] Verificare altri falsi positivi/negativi, frasi più complesse, URL realmente fraudolenti e messaggi autentici. Il punteggio rimane una **euristica dimostrativa**, non una probabilità calibrata né una certificazione di sicurezza.

**Stato pubblico:** soltanto **AntiTruffa Web — Prova locale**, con analisi nel browser e senza invio dei testi. Il programma completo con backend FastAPI **non** è stato distribuito.

- [x] **Conferma dell'autore (3 novembre 2026):** dopo la correzione pubblicata, l'autore ha riprovato AntiTruffa e ha confermato che funziona. Il riscontro riguarda la prova web locale, non il backend completo.
