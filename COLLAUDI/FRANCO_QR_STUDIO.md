# Collaudo Franco QR Studio — 2 novembre 2026

**Stato: candidato al rilascio, NON lanciato ufficialmente.** In conformità al piano, il lancio di tutti i cinque programmi avverrà solo dopo il completamento del collaudo complessivo.

## Sorgente verificata
`Franco_QR_Studio_PUBBLICO.zip` già presente in `public/`. Il pacchetto ZIP è valido e contiene sette file: `index.html`, `style.css`, `app.js`, `qr-engine.js`, `favicon.svg`, `LEGGIMI_PRIMA.txt`, `LICENZE_LIBRERIE.txt`.

## Prove eseguite in locale
- [x] Le 14 modalità generano un QR: sito web, testo, email, foto via URL, PDF via URL, Wi-Fi, contatto vCard, telefono, SMS, WhatsApp, evento, mappa, video, social.
- [x] Decodifica con lettore QR delle 14 modalità: i contenuti di prova sono recuperati correttamente nel motore corretto.
- [x] Download PNG tramite browser.
- [x] Download SVG tramite browser.
- [x] Pulsante Stampa: verifica dell'invocazione del comando del browser (non prova con stampante fisica).
- [x] Interfaccia smartphone emulato a 390 px: nessun scorrimento orizzontale, menu mobile e generazione testati.
- [x] Nessun errore JavaScript nelle prove automatizzate svolte.
- [x] Nessun upload di foto o PDF sul server del repository: si usano URL pubblici esterni.

## Problema individuato e correzione pronta
Alcuni lettori QR interpretavano in modo errato le lettere accentate, perché il motore scriveva byte UTF-8 senza il relativo indicatore ECI. Nella **versione candidata locale**, è stato aggiunto ECI 26 UTF-8 per contenuti non ASCII. In nuova decodifica la stringa italiana «Ciao, città!» risulta corretta. È stato anche corretto il riferimento al file di licenze in un commento del motore. **La correzione non è stata pubblicata né sostituisce ancora il pacchetto sul sito.**

## Prove ancora necessarie prima del lancio
- [ ] Lettura su un vero telefono Android e su iPhone, inclusi caratteri accentati.
- [ ] Stampa fisica e scansione del foglio.
- [ ] Prova delle dimensioni/forme/colori personalizzati e di un logo centrale.
- [ ] Test dell'apertura di un file foto/PDF pubblico con il telefono, assicurandosi che le autorizzazioni permettano l'accesso.
- [ ] Test di avvio da sito Cloudflare, non soltanto da ambiente di prova.
- [ ] Verifica finale del pacchetto candidato e approvazione alla distribuzione.

### Regola di protezione del lancio
Non pubblicare ancora nuove versioni e non annunciare il prodotto sui social. I quattro prodotti restanti devono superare i loro controlli.
