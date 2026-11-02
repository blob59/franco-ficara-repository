# MeteoScudo — ricognizione pre-lancio

**Data:** 2 novembre 2026  
**Stato:** applicazione esistente e accessibile dal browser dell'autore, confermata il 2 novembre 2026. **Ancora da collaudare tecnicamente** prima del rilascio nel Repository.

## Progetto originale (non ricreare alla cieca)
- URL pubblico precedentemente configurato: https://meteo.francoficara.com/
- Nome progetto Cloudflare dichiarato durante il lavoro originario: `meteoscudo-ficara-lab`.
- Ultima versione citata durante la lavorazione: `METEOSCUDO_FICARA_LAB_v1_5_FONTI_UFFICIALI.zip` (12 ottobre 2026).
- Funzionalità riportate durante il lavoro originale: ricerca città, previsioni 48 ore e orarie, radar della pioggia osservata; pulsanti diretti alle fonti ufficiali.
- Fonti ufficiali collegate: Protezione Civile nazionale e riferimenti regionali, ARPACAL/Calabria, Lombardia, Comune di Brancaleone e Aeronautica Militare; queste risorse devono essere ricontrollate per indirizzi e validità.
- Il progetto **non deve presentare un codice colore delle allerte come se fosse ufficiale**, a meno che non provenga effettivamente da una fonte aggiornata e verificabile. La consultazione delle allerte avviene direttamente alla fonte.

## Verifiche effettivamente eseguite in questa sessione
- [x] Individuato il nome tecnico del progetto Cloudflare e il nome dell'archivio v1.5 dai precedenti passaggi di lavoro.
- [x] Verificati i repository GitHub collegati: **non emerge un repository MeteoScudo dedicato** nell'elenco attualmente accessibile; non presupporre che non esista altrove.
- [x] Ricercato l'archivio v1.5 fra i file accessibili in questa conversazione e nella Library: **non individuato**.
- [x] **Esistenza e apertura del sito confermate direttamente dall'autore** in data 2 novembre 2026: https://meteo.francoficara.com/. La verifica indipendente da parte degli strumenti automatici non è riuscita per un limite di accesso/DNS e non costituisce un'indicazione di malfunzionamento del sito.
- [ ] Il codice originario non è stato letto, analizzato o modificato.

## Collaudo da fare appena si recupera il pacchetto o i sorgenti autentici
- [ ] ZIP sorgente integro e identificazione versioni/dipendenze; rimozione di chiavi, credenziali, dati privati.
- [ ] Ricerca città, previsioni 48 ore, previsioni orarie, localizzazione e orari con fuso corretto.
- [ ] Radar: etichetta e intervallo temporale corretti, e distinzione fra osservazioni e previsioni.
- [ ] Tutti i link ufficiali apribili, regionali e nazionali, senza attribuzioni errate.
- [ ] Messaggi trasparenti quando i servizi meteo sono irraggiungibili o i dati sono vecchi; no affermazioni di allerta ufficiale non verificata.
- [ ] Compatibilità desktop/mobile e limiti d'uso delle API meteo.
- [ ] Prova reale in ambiente non produttivo e verifica della licenza/dati prima dell'inserimento nel Repository.

**Regola:** non toccare `meteoscudo-ficara-lab` in produzione, non creare nuove copie vagamente simili, non abilitare pulsanti di download finché la v1.5 autentica non è stata recuperata e collaudata.
