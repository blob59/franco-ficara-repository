# Digital Studio — Ricognizione e collaudo preliminare

**Data:** 2 novembre 2026  
**Stato:** esistono due versioni distinte, candidati separati; nessun rilascio pubblico autorizzato.

## Versione A — Digital Studio definitivo Windows (30 ottobre 2026)

Archivio reperito nella Library: `Franco-Ficara-Digital-Studio-Definitivo-Windows.zip`, dimensioni compresse 234.553.248 byte (circa 224 MiB); 138 elementi nel pacchetto e circa 555 MiB estratti.

**Componenti reali rilevati nel pacchetto:**
- `AVVIA_STUDIO.cmd` e `AVVIA_STUDIO.vbs`; motore `runtime/node.exe` e `app/server.cjs`.
- `app/render.cjs`, `app/encoder-browser.js` e `app/audio.cjs`.
- `tools/ffmpeg.exe`, `tools/ffprobe.exe`, Playwright e licenze dei componenti.
- HTML originale, istruzioni `LEGGIMI-PRIMA.txt`, file di prova MP3 e MP4.
- File `SHA256SUMS.txt`, `COLLAUDO.txt`, `prove/COLLAUDO.json`.

**Funzioni dichiarate e verificabili nei sorgenti:** selezione brano audio, generazione offline di sequenze MP4 H.264 con audio AAC, video Full HD 1920×1080 16:9 a 30 fps, suddivisione automatica in segmenti fino a 29 minuti, annullamento, cartella di esportazione. Servizio di controllo dichiaratamente limitato a `127.0.0.1`, con URL/token casuale della sessione. Non richiede Node.js né FFmpeg installati separatamente, poiché inclusi nel pacchetto.

### Verifiche eseguite nel nostro ambiente (non sul PC Windows dell'autore)
- [x] ZIP letto integralmente: `testzip()` senza errori.
- [x] SHA256 di `app/render.cjs`, `app/server.cjs`, `app/encoder-browser.js`, `app/index.html`, `AVVIA_STUDIO.cmd`, `tools/ffmpeg.exe` e video di esempio corrispondenti al manifesto incluso.
- [x] Controllo sintattico `node --check` superato per 5 file JS/CJS principali (encoder-browser.js, audio.cjs, canvas.cjs, render.cjs, server.cjs).
- [x] Video incluso nei materiali controllato tramite `ffprobe`: 12 secondi, H.264, 1920×1080, 30 fps, audio AAC.
- [x] La documentazione del pacchetto include una prova precedente di 29 minuti e 1 secondo e una verifica su Windows: **sono dichiarazioni contenute nel pacchetto**, non una nuova esecuzione indipendente in questa sessione.
- [ ] Non è stato eseguito il renderer Windows (l'ambiente è Linux): l'avvio, la compatibilità e le prestazioni su una nuova installazione Windows restano da verificare.
- [ ] Non sono stati effettuati controlli antivirus su eseguibili inclusi né una revisione completa delle loro licenze e condizioni di ridistribuzione.
- [ ] Il pacchetto contiene anche file di prova, librerie e un binario FFmpeg di oltre 200 MB: prima del rilascio valutare se separare gli esempi, ridurre le dimensioni e distribuire tramite GitHub Release, non come normale file GitHub nella cartella `public/`.

## Versione B — Digital Studio Cinema Lounge V16 (31 ottobre 2026)

File trovati nella Library: `FRANCO_FICARA_DIGITAL_STUDIO_CINEMA_LOUNGE_V16.html` e `.zip`. ZIP valido con due file: HTML completo e `LEGGIMI.txt`. È un'applicazione autonoma separata dal motore Windows; non confonderla con Digital Studio 2 / Velvet Horizon.

**Funzioni rilevate:** scenografia con immagini incorporate, caricamento audio e immagini personali, Canvas animato, pulsanti Riproduci, Dall'inizio, Registra video e Ferma registrazione. Utilizza `MediaRecorder` e `captureStream` del browser. Formato scaricato MP4 solo dove supportato; altrimenti WebM.

### Verifiche eseguite
- [x] ZIP integro.
- [x] Il file HTML si apre in Chromium tramite `page.set_content()`: nessun errore JavaScript rilevato nel test.
- [x] Canvas presente e scenografia visualizzata.
- [x] Dopo l'importazione del brano MP3 di prova i pulsanti Riproduci e Registra video risultano abilitati.
- [x] Verifica visiva desktop, nessun overflow orizzontale nel test a 1440 px.
- [x] Test viewport 390 px: nessun overflow orizzontale né errore JavaScript nel test.
- [ ] Non è stata verificata in questa sessione un'esportazione completa di Cinema Lounge V16 con audio: resta necessario un test video finale e prova su computer Windows.
- [ ] Verifica finale delle immagini incorporate e dei diritti di distribuzione; il software non garantisce MP4 in ogni browser.

## Terzo esperimento correlato, da NON confondere con i due sopra

Archivio `VELVET_HORIZON_PROVA.zip`, valido: contiene un HTML autonomo, appartenente agli esperimenti di Digital Studio 2. Non è stato ancora integrato nel programma Windows e non deve sostituire i suoi sorgenti originali senza verifica.

## Decisione per il catalogo

Il candidato principale per la voce **Digital Studio** è la **versione Windows**, perché è un programma di esportazione MP4 offline con documentazione e pacchetto completo. **Cinema Lounge V16** potrà essere offerta come esperienza web distinta oppure come extra, dopo collaudo, senza presentarla come parte del pacchetto Windows. È necessaria la decisione finale dell'autore prima di pubblicare una di queste versioni.

## Controlli indispensabili per il rilascio
- [ ] Confermare collaudo sul PC Windows con file MP3 di prova, apertura pagina, avvio, annullamento e ripristino.
- [ ] Confrontare la versione candidata con il ramo locale più recente di Digital Studio 2, non accessibile in questa sessione, senza modificare la cartella originale.
- [ ] Licenze dei componenti e musica/immagini; distribuzione senza media di terzi non autorizzati.
- [ ] Eseguibile firmato o avvisi chiari per file Windows; analisi antivirus.
- [ ] Verificare ZIP, peso, canale di download reale e manuale; non distribuire senza l'ok dell'autore.
- [ ] Concludere i collaudi degli altri quattro programmi.

## Aggiornamento 3 novembre 2026 — Digital Studio **Video Lab Web** (nuovo)

Durante il collaudo pubblico l'autore ha segnalato che la demo proposta come «Digital Studio» consentiva solo di caricare MP3 e animare un visualizzatore: **non importava video**. La descrizione in catalogo risultava quindi insufficiente.

È stato conservato il visualizzatore originale in `public/apps/digital-studio/music.html`. La pagina principale `public/apps/digital-studio/index.html` è stata sostituita da un **Video Lab beta** con:
- Importazione video locale MP4/WebM (nei limiti dei codec supportati dal browser).
- Intervallo d'inizio e fine per un singolo filmato.
- Musica opzionale con mixer di volume e audio originale attivabile/disattivabile.
- Foto + MP3 per creare un filmato da immagine statica.
- Visualizzatore musicale, titoli sovrapposti, anteprima, esportazione in 16:9 1920×1080.
- Esportazione in WebM VP9/Opus dove disponibile, fallback MP4 solo dove il browser lo supporta. Nessun upload dei media al server.

**Test funzionali già eseguiti in browser Chromium isolato:**
- Video input sintetico MP4 (640×360, H.264/AAC), intervallo 1–3 secondi, colonna sonora MP3 aggiunta, titolo sovrapposto. Esportato file WebM di circa 2 secondi con video VP9 1920×1080 e audio Opus. Il frame del filmato originale era realmente presente (pixel non uniformi) e il livello audio esportato è risultato non nullo.
- Foto JPG + brano MP3: esportato filmato WebM 1920×1080 con video VP9/audio Opus di circa 5 secondi.
- Solo musica: esportato filmato WebM 1920×1080 con video/audio. Il vecchio Cinema Lounge resta accessibile tramite percorso separato.
- Nessun errore JS durante i test di esportazione; controlli riattivati dopo il completamento.

**Limiti da dichiarare:** non supporta montaggio multitraccia, transizioni, montaggio di clip multiple o un MP4 H.264/AAC garantito su qualunque sistema. L'elaborazione è in tempo reale nel browser e può essere pesante. Proporzioni differenti da 16:9 vengono ritagliate in modalità cover per non introdurre bande nere. Software Windows completo ancora distinto e non collaudato in questa sessione.

**Verifiche pendenti:** prova su PC Windows reale dell'autore con filmati personali, compatibilità dispositivi/codec, video lunghi e prestazioni/memoria, montaggio Windows completo.
