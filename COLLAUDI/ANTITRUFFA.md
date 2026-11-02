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

**Decisione:** proseguire con il lavoro senza annunciare o abilitare il prodotto sul sito del Repository.
