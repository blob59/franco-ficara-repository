# Franco PC Cleaner 3.4 — Controllo preliminare del pacchetto

**Stato: in collaudo, NON pronto per il lancio pubblico.**

## Materiale disponibile
Archivio `Franco_PC_Cleaner_3_4.zip` presente tra i file della conversazione. File interni: `franco_pc_cleaner.py`, `riordino_cartelle.py`, `LEGGIMI.txt`, `AVVIA_FRANCO_PC_CLEANER.bat`.

## Controlli eseguiti — 2 novembre 2026
- [x] Archivio ZIP integro.
- [x] I due sorgenti Python superano il controllo sintattico (`ast.parse`).
- [x] Le istruzioni precisano che richiede Windows, Python 3 e Tkinter; non è un programma `.exe` autonomo.
- [x] Il codice contiene spostamento in quarantena, ripristino e archiviazione recuperabile.
- [x] Individuata una funzione di **eliminazione definitiva dei file in quarantena**: chiede conferma esplicita e parola `ELIMINA`. È un'operazione distruttiva che richiede test rigorosi.
- [x] Il riordino cartelle prevede protezioni e conferme, ma resta possibile spostare manualmente copie di progetti dopo autorizzazione.

## Verifiche mancanti prima di distribuire
- [ ] Test reale in Windows in una cartella di prova contenente solo file fittizi.
- [ ] Verifica che non sposti i file necessari al funzionamento di applicazioni e progetti.
- [ ] Prove quarantena/ripristino e gestione manifest dopo errori.
- [ ] Prova eliminazione definitiva **solo su file fittizi** e verifica delle conferme.
- [ ] Confezionamento professionale e istruzioni per chi non ha Python installato, oppure precisare chiaramente il requisito.
- [ ] Test antivirus e controllo dei percorsi che contengono dati personali.

**Non condividere il pacchetto come versione definitiva finché questi test non sono superati.**
