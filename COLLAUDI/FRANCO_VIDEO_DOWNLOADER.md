# Collaudo Franco Video Downloader — 0.3 candidato beta (3 novembre 2026)

**Stato:** candidato Windows da verificare sul PC dell'autore. Download pubblico nel catalogo **disattivato**.

## Origine del candidato

- La versione 0.2 è stata provata dall'autore, che ha confermato: «Funciona».
- La 0.3 conserva il codice operativo di download della 0.2 e cambia presentazione, marchio, documentazione e formulazioni delle avvertenze.
- Il pacchetto include: launcher CMD, interfaccia PowerShell WinForms, installazione separata dei componenti, diagnostica, guida italiana, note di rilascio, informazioni sulle licenze.
- File di prova distribuito in conversazione: `Franco_Video_Downloader_0_3_BETA_PUBBLICA.zip`, circa 14 KB; impronta SHA-256: `0890c8808e3984c34d1b6bb4add38081ca56e9a7d911e391723630535966b652`.
- Lo ZIP non contiene eseguibili di yt-dlp, Deno o FFmpeg: i componenti vengono scaricati dalle rispettive fonti ufficiali su richiesta dell'utente con verifica di integrità SHA-256.

## Prove effettuate

- [x] Test integrità ZIP: tutti e dieci i file senza errori, percorso principale `Franco_Video_Downloader_0_3/`.
- [x] Confronto del sorgente PowerShell 0.2 e 0.3: logica di download preservata; differenze nell'intestazione, stile della finestra e testi.
- [x] Scheda prodotto pubblicata nel Repository come «In revisione», link alla pagina informativa attivo, senza pulsante di download.
- [ ] Prova su Windows 10/11 dell'avvio 0.3, installazione/componenti e scaricamento di un video autorizzato.
- [ ] Prova del tasto Diagnostica, gestione errori e apertura cartella.
- [ ] Prova con diversi DPI/dimensioni schermo e avvisi SmartScreen/antivirus senza disattivare protezioni.
- [ ] Verifica conclusiva della documentazione e decisione esplicita dell'autore prima di abilitare il download pubblico.

## Distribuzione responsabile

- Il fatto che un video sia visibile pubblicamente non significa che il download sia consentito. L'utente deve rispettare condizioni della piattaforma, licenze e autorizzazioni dei titolari dei diritti.
- yt-dlp, Deno e FFmpeg sono componenti di terzi, con licenze indipendenti. Il downloader è uno strumento separato, non ufficiale YouTube.
- Non promettere compatibilità universale, bypass di DRM o download di contenuti protetti da accesso.
- Conservare la 0.2 come riferimento del test positivo sul PC; l'aggiornamento 0.3 non sostituisce retroattivamente quel collaudo.
