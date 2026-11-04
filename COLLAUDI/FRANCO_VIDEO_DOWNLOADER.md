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

## Esito finale: beta 0.3.1 pubblicata — 4 novembre 2026

- L'autore ha confermato personalmente il funzionamento della versione **0.3.1** su Windows.
- Il difetto del precedente messaggio «Download non riuscito (codice )» è stato risolto. Nel caso osservato `yt-dlp` aveva scritto `has already been downloaded`: il video era regolarmente presente. La nuova versione gestisce correttamente la situazione.
- È stato caricato sul ramo `main` il file `Franco_Video_Downloader_0_3_1_MESSAGGI_CORRETTI.zip`.
- **Verifica esterna dal dominio pubblico:** HTTP 200, `Content-Type: application/x-zip-compressed`, 13.994 byte. Archivio di dieci file, nessun errore al controllo CRC/testzip.
- SHA-256 dello ZIP pubblicato: `0e3b83a8fc5fb06d110903b3459a2834c97464a24ba3e2ffb38cb5c7a49cfe1b`.
- Link download pubblico: https://blob59.github.io/franco-ficara-repository/Franco_Video_Downloader_0_3_1_MESSAGGI_CORRETTI.zip
- Sono stati aggiornati la scheda del prodotto, il catalogo, la guida e il README; il catalogo segna la beta Windows come «Disponibile». L'app resta un prodotto Windows da estrarre ed eseguire sul PC; il sito non esegue il programma online.

**Limiti ancora da verificare:** compatibilità con altri computer, diversi antivirus/SmartScreen, interfaccia a vari DPI e affidabilità su molte tipologie di link. Il collaudo positivo dell'autore non costituisce certificazione di compatibilità universale.

**Nota storica:** le voci di collaudo della 0.3 sopra riportate sono il piano iniziale, precedente al collaudo e rilascio 0.3.1; questa sezione contiene lo stato finale.
