# Lancio pubblico web beta — 3 novembre 2026

**Franco Ficara Digital Studio · Franco Ficara Repository**

## Che cosa è pubblicabile adesso

Il lancio pubblico riguarda un catalogo di **6 progetti accessibili**: 4 anteprime/applicazioni web e 2 portali esterni. Solo uno dei software (QR Studio) dispone anche di un **download ZIP 1.1** pubblicamente raggiungibile, già verificato come archivio integro.

| Progetto | Distribuzione pubblica | Avvertenza |
|---|---|---|
| Franco QR Studio | Anteprima web + ZIP 1.1 | La miniatura foto locale è decorativa; per aprire la foto dalla scansione occorre un URL accessibile. |
| Franco PC Cleaner | Demo web, sola lettura | Confronta file duplicati, esporta CSV; non cancella e non sposta file. Nessuna release Windows. |
| AntiTruffa | Demo euristica locale | Nessuna verifica reputazione URL in tempo reale né segnalazione server; non certifica la sicurezza dei messaggi. |
| Digital Studio Web | Demo web | Video Lab beta con importazione MP4/WebM, ritaglio, titolo e musica, oppure foto + MP3. Esporta WebM 16:9 nei browser compatibili; non è un editor multitraccia né il programma Windows completo. |
| MeteoScudo | Collegamento a portale web esterno | Avvisi meteo da verificare con fonti istituzionali. |
| Franco Start | Collegamento a portale web esterno | Non è un programma da scaricare. |

## Verifiche documentate

- **QR Studio 1.1:** generazione e download PNG, QR con foto centrale, lettura URL, UTF-8 italiano «Ciao, città!» correttamente decodificato; archivio ZIP integro scaricato da Cloudflare.
- **PC Cleaner Web:** ricerca duplicati ed esportazione CSV confermate dall'autore sul PC; nessuna operazione distruttiva. Prova automatizzata con file fittizi.
- **AntiTruffa Web:** l'autore ha verificato la correzione di un falso allarme troppo debole: messaggio con richiesta OTP e blocco del conto da 60/100 a 90/100 «Pericolo». Browser automatico senza errori o POST di testi.
- **Digital Studio Web:** registrazione dal sito pubblico di prova con file audio sintetico, verifica con ffprobe: video 1920×1080 VP9, audio Opus realmente presente, contenitore WebM e controlli di riproduzione riabilitati dopo l'export.
- **MeteoScudo e Franco Start:** raggiungibili con HTTP 200. La sola raggiungibilità non costituisce collaudo delle funzioni dei siti esterni.

## Condizioni del lancio

1. Annunciare sempre **«versioni web beta»** e **«strumenti gratuiti»**, non «sei programmi Windows definitivi».
2. Non promettere l'installazione di PC Cleaner o Digital Studio Windows: le versioni desktop sono ancora in collaudo.
3. Evitare la formula «AntiTruffa garantisce sicurezza»: è una valutazione locale, non una certificazione.
4. QR Studio 1.1 è il primo download ZIP pubblico; versione precedente conservata solo per recupero tecnico.
5. Nessun upload automatico dei contenuti analizzati dai quattro strumenti web; la visita dei siti web è distinta dall'elaborazione locale.
6. Non promettere assistenza 24/7, controlli reputazionali o allerte ufficiali che non siano disponibili.
7. La pubblicazione sul sito e l'eventuale annuncio Facebook/social sono passaggi diversi: l'annuncio esterno richiede una pubblicazione reale nell'account scelto.

## Cose rimaste fuori dal lancio

- Test sul vero PC Windows delle funzioni distruttive/quarantena/ripristino di PC Cleaner.
- Rilascio del backend AntiTruffa dopo collaudo privacy, anti-abuso e reputazione URL.
- Distribuzione del software completo Digital Studio Windows e test di esportazione MP4 standard.
- Compatibilità fisica su molteplici smartphone, stampa QR fisica, accessibilità completa.
- Verifica legale dettagliata delle licenze per eventuali distribuzioni future di sorgenti/desktop.

**Nota operativa:** questa pagina registra contenuto e criteri del lancio beta; non costituisce, da sola, prova dell'avvenuto deploy Cloudflare né della pubblicazione su social network.
