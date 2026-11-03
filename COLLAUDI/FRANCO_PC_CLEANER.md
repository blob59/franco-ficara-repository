# Franco PC Cleaner — rapporto di collaudo del 2 novembre 2026

**Stato: candidato pre-lancio 3.5, non autorizzato alla distribuzione pubblica.**

## Materiale verificato
La versione iniziale `Franco_PC_Cleaner_3_4.zip` è stata esaminata ed è integra. È stato realizzato in ambiente di prova un archivio aggiornato `Franco_PC_Cleaner_3_5_CANDIDATO_PRE_LANCIO.zip`. **Il nuovo archivio non è ancora stato pubblicato sul sito o su GitHub**, e deve rimanere un candidato fino a test su Windows.

## Correzioni apportate nel candidato 3.5

- La ricerca di download parziali `.crdownload` propone soltanto quelli all'interno di una cartella Download/Downloads, non quelli sparsi in altre cartelle.
- Nuovo modulo `operazioni_sicure.py` per lo spostamento e il ripristino dei singoli file: impedisce di operare su symlink/junction, blocca file cambiati dalla scansione, evita spostamenti tra volumi e annulla lo spostamento se fallisce la registrazione sul manifest.
- Il ripristino accetta solo file presenti direttamente nella quarantena, senza fidarsi di percorsi arbitrari eventualmente inseriti in un registro manipolato.
- Il ripristino non sovrascrive destinazioni esistenti; blocca destinazioni con collegamenti o junction.
- Durante una scansione, le operazioni di spostamento e ripristino sono bloccate.
- La rimozione definitiva richiede due conferme, inclusa la parola esatta **ELIMINA**; non elimina file non registrati.
- Avvio Windows `.bat` corretto per evitare l'esecuzione due volte dopo un errore.
- Colonna «Motivo» più leggibile e istruzioni italiane aggiornate: il pacchetto ZIP richiede Python 3 con Tkinter, **non è un eseguibile autonomo**.

## Test effettivamente eseguiti

**9 test automatici superati**, tutti in cartelle temporanee con file fittizi e senza accedere al PC dell'utente:

1. Quarantena e ripristino reversibile di un file.
2. Rifiuto di spostamento per file modificato dopo la scansione.
3. Rifiuto di voci di manifest che puntano fuori dalla quarantena.
4. Rifiuto di sovrascrittura di file esistenti.
5. Rifiuto di symlink al posto del file.
6. Confronto di cartelle identiche (compresa cartella vuota), archiviazione e ripristino.
7. Protezione di un progetto Digital Studio contro l'archiviazione automatica.
8. Rifiuto di archiviazione se una copia cambia rispetto alla verifica.
9. Eliminazione definitiva solo con conferma specifica, senza rimuovere file non registrati.

**Smoke test dell'interfaccia grafica in ambiente Linux virtuale con Tk 8.6: superato.** Sono stati analizzati 6 file fittizi; identificato 1 gruppo di duplicati; proposti soltanto 2 vecchi download in Downloads, escludendo correttamente un file parziale con la stessa estensione presente altrove. Nessun file reale o personale è stato cancellato.

**Controllo sintattico:** entrambi gli script originali e il nuovo modulo compilano senza errori. Archivio ZIP candidato verificato integro.

## Prove ancora obbligatorie prima del rilascio

- [ ] Avvio reale su Windows 10 e Windows 11, con Python e Tkinter presenti.
- [ ] Prova su cartelle finte Windows per confermare i controlli junction/reparse e lo spostamento atomico.
- [ ] Test di esportazione CSV e stampa dei messaggi di errore nell'interfaccia Windows.
- [ ] Verifica dell'antivirus e delle istruzioni per utenti senza Python.
- [ ] Eventuale confezionamento `.exe` Windows, seguito da firma/verifica e test.
- [ ] Test regressione dell'interfaccia dopo ogni correzione.
- [ ] Approvazione esplicita del rilascio, insieme agli altri quattro programmi.

## Limiti importanti

Il cleaner non elimina automaticamente i file duplicati. Spostare file o cartelle in quarantena/archivio **sullo stesso disco non libera spazio**; l'eliminazione definitiva comporta perdita dei file e va eseguita soltanto dopo una verifica manuale. La selezione manuale di un progetto, anche se protetto dal piano automatico, può interrompere programmi che dipendono dalla posizione originale.

**Prossimo programma da collaudare:** AntiTruffa.


## Aggiornamento — 3 novembre 2026: anteprima web di sola lettura

È stata realizzata una **nuova applicazione web separata** dal programma Python Windows: `public/apps/franco-pc-cleaner/index.html`. Consente di scegliere una cartella o file locali, trovare copie **identiche per contenuto** tramite confronto completo in blocchi (senza upload) e scaricare un report CSV. Non include cancellazione, quarantena, ripristino né spostamenti; non equivale quindi a distribuire la versione Windows 3.5.

**Prova automatica browser:** caricati quattro file fittizi (due identici da 4 byte e due differenti); trovato esattamente un gruppo, una copia supplementare, 4 byte di spazio teorico; esportazione CSV eseguita; nessun errore JavaScript nel test. Corretto anche il controllo di annullamento per evitare interferenze con scansioni successive. Resta opportuna una prova manuale su Windows con una cartella di test e su smartphone per valutare le differenze dei selettori file.

**Stato:** anteprima web pronta da usare a scopo dimostrativo; release desktop **ancora in collaudo**. Non equiparare l'una all'altra.


## Riscontro dell'autore — 3 novembre 2026

L'autore ha eseguito sul proprio computer il test di ricerca duplicati nella **versione web di sola lettura** e ha confermato che i duplicati sono stati trovati e che la funzione opera correttamente. Questo conferma il percorso principale di identificazione dei duplicati su un computer reale; **non costituisce ancora verifica dell'esportazione CSV, dell'annullamento né del programma Windows 3.5**.
