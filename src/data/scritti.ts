import type { Img } from '../lib/img';

// Gli scritti di Marcello Franca (articoli del sito attuale), in italiano.
export type Blocco =
  | { tipo: 'p' | 'h' | 'firma'; testo: string }
  | { tipo: 'citazione'; testo: string; fonte: string };

export type Scritto = {
  slug: string;
  titolo: string;
  sottotitolo?: string;
  /** Data di pubblicazione (AAAA-MM-GG) */
  data: string;
  /** Primo paragrafo: anteprima e meta description */
  estratto: string;
  img?: Img;
  /** Paragrafi (gli a capo singoli restano, es. versi), titoletti, citazioni, firma */
  blocchi: Blocco[];
};

export const scritti: Scritto[] = [
  {
    "slug": "immagine-della-citta",
    "titolo": "L’immagine della città: la mia visione",
    "data": "2020-02-02",
    "estratto": "L’immagine della città è proprietà di tutti, e di tutti è il diritto di avere una città più bella ed in armonia con l’ambiente, che sia ambiente del costruito o che sia ambiente della natura.",
    "img": {
      "base": "/img/scritti/immagine-della-citta",
      "w": 1100,
      "h": 956,
      "alt": "Pianta storica di Pesaro dal Theatrum di Blaeu"
    },
    "blocchi": [
      {
        "tipo": "h",
        "testo": "Premessa"
      },
      {
        "tipo": "p",
        "testo": "L’immagine della città è proprietà di tutti, e di tutti è il diritto di avere una città più bella ed in armonia con l’ambiente, che sia ambiente del costruito o che sia ambiente della natura."
      },
      {
        "tipo": "p",
        "testo": "Di conseguenza ognuno di noi deve avere cura di questa immagine che testimonia la vita e le opere di chi ci ha preceduto, come siamo noi che viviamo il presente e come ci giudicheranno coloro che nel futuro vedranno cosa abbiamo lasciato loro in eredità."
      },
      {
        "tipo": "p",
        "testo": "Non solo le parti pubbliche della città (strade, marciapiedi, edifici, giardini, fontane, monumenti …) vanno salvaguardate, mantenute, curate e protette dall’incuria degli uomini e dall’’azione del tempo, ma anche quella parti di città fatte di edifici e attività private devono essere salvaguardate, mantenute, curate e protette poiché insieme alla parte pubblica formano l’immagine della città nella sua complesso."
      },
      {
        "tipo": "p",
        "testo": "Per realizzare tale obiettivo una parte delle risorse pubbliche devono essere investite per valorizzare l’immagine pubblica della città mentre per le parti private dovranno essere stabilite delle regole di decoro, che indirizzino le risorse disponibili nel momento in cui si presentano occasioni di trasformazione, rinnovo, manutenzione, restauro o ristrutturazione degli immobili, ovvero essere generati degli incentivi economici o di altra natura che stimolino delle azioni virtuose da parte del privato a favore dell’immagine pubblica della sua proprietà."
      },
      {
        "tipo": "h",
        "testo": "L’immagine Pubblica"
      },
      {
        "tipo": "p",
        "testo": "La città prende vita nello spazio aperto, immersa nell’atmosfera del giorno e della notte nel corso delle stagioni (sole, pioggia, vento, nebbia neve …), percorsa e attraversata dalle persone e dai mezzi che ognuno di noi utilizza ogni giorno; tutto ciò rende il paesaggio urbano dinamico, mobile e mai uguale a se stesso, in continuo mutamento di fronte ai nostri occhi, al nostro stato d’animo ed al nostro percepire la realtà che ci circonda."
      },
      {
        "tipo": "p",
        "testo": "Pianificare lo spazio urbano, prendersi cura della sua immagine (compito ed attenzione della Pubblica Amministrazione), risulta quindi una missione più complessa di una semplice ed ingenua collocazione di complementi di arredo."
      },
      {
        "tipo": "p",
        "testo": "La cura dell’immagine della città deve partire dagli edifici pubblici, dal rinnovo o manutenzione delle componenti usurabili, avere attenzione degli elementi funzionali e di sicurezza a servizio dei cittadini, impedire il degrado nel tempo dei fabbricati mantenendoli vivi, utilizzati ed utilizzabili per varie attività pubbliche o private (affitto), garantendone così la salvaguardia fisica ed estetica."
      },
      {
        "tipo": "p",
        "testo": "Tale azione deve svilupparsi avendo cura della qualità degli interventi, cogliendo occasione per un progressivo riordino e restauro delle parti ammalorate, per una correzione delle disfunzioni e degli elementi che generano disturbo nella scena urbana avendo sempre presente il rispetto della Storia e della Cultura dei luoghi."
      },
      {
        "tipo": "p",
        "testo": "In sintesi si potrebbe estremizzare affermando che per un fabbricato la salute fisica e la sua immagine vengono sempre prima della sua funzione ovvero che una funzione si sviluppa meglio in un edificio ben mantenuto e dall’aspetto decoroso."
      },
      {
        "tipo": "h",
        "testo": "L’immagine Privata"
      },
      {
        "tipo": "p",
        "testo": "Erroneamente crediamo che ciò che è privato, nostro, sia in assoluto di nostra proprietà e spesso ci rammarichiamo, ci arrabbiamo, di fronte a Leggi e Regolamenti che di fatto limitano o proibiscono il desiderio di trasformare o modificare la proprietà privata."
      },
      {
        "tipo": "p",
        "testo": "Accade quindi che ci dimentichiamo che ciò che possediamo, compresa la nostra figura umana, ha una sua valenza estetica e che quando ogni cosa, così come la nostra persona, si prospetta o si presenta sulla scena urbana, con questa entra in relazione armonica o conflittuale."
      },
      {
        "tipo": "p",
        "testo": "Ma se da un lato tutto ciò che è “mobile” può di buon grado essere diverso per forma, dimensione, materiale o colore, tutto ciò che vediamo e percepiamo come “immobile”, sia esso “fisso” in modo permanente o “temporaneo”, deve essere necessariamente confrontato con le altre parti fisse della città : in poche parole la parte Privata della Città (di alcuni) deve confrontarsi con la parte Pubblica (di tutti) per divenire con la sua immagine bene comune di ognuno di noi e quindi necessariamente soggetta a comuni codici di comportamento (valori condivisi) sui quali la comunità si deve prima confrontare e poi incontrare."
      },
      {
        "tipo": "p",
        "testo": "Se non possediamo gli elementi di giudizio, e non conosciamo il vocabolario ed il linguaggio del paesaggio urbano, la morfologia e la sintassi dell’ambiente costruito, l’Amministrazione Pubblica deve venirci incontro, con lo stesso atteggiamento educativo di un bravo genitore, tracciando chiari principi Etici di Comportamento (Senso Civico) sulla base dei quali tracciare le conseguenti Regole, mirate a creare un’immagine nel complesso Armonica, che unisca l’azione virtuosa del Privato con quella virtuosa del Pubblico, nella reciproca consapevolezza ed accettazione dei suddetti Principi."
      },
      {
        "tipo": "h",
        "testo": "Principi e Regole per la Cura e la Salvaguardia del Paesaggio Urbano"
      },
      {
        "tipo": "p",
        "testo": "Al di là ed al di sopra di ogni visione politica, religiosa, economica e strategica legata al potere, qui si parla di Arte e di Bellezza, di Storia e di Cultura, affinché prevalga l’armonia sul caos, il rispetto delle regole sull’aggiramento delle stesse (persone oneste contrapposte alle persone furbe)."
      },
      {
        "tipo": "h",
        "testo": "La Città antica"
      },
      {
        "tipo": "p",
        "testo": "Per quella parte di Città o di Frazione o di Borgo periferico ove prevalgono le preesistenze della Città antica, per la presenza di reperti archeologici e manufatti architettonici di epoche passate, tutti i Piani Regolatori hanno, sia pure in modo differente, tenuto conto (fatto salvo eventi drammatici o eccezionali accaduti e che potranno sempre accadere in futuro) del recupero e della salvaguardia della memoria architettonica e urbanistica della nostra Città; è ciò è accaduto non solo per la parte visibile dei fabbricati ma anche per la parte strutturale verticale e orizzontale dei fabbricati, identificando specifiche tipologie strutturali e compositive, caratteristiche delle varie zone della città e del nostro territorio comunale (“Prontuario” del Restauro-Indicazioni per gli interventi di restauro edilizio nel Centro Storico di Pesaro, in “Progetti e ricerche della città di Pesaro”, n.7, Pesaro, 1980 a cura dell’architetto Francesco Doglioni)."
      },
      {
        "tipo": "p",
        "testo": "Oggi occorre fare un passo avanti ed entrare nel particolare e nel dettaglio, avendo cura dei seguenti obiettivi ed applicando le conseguenti regole di attuazione per il controllo attento nella cura, correzione, salvaguardia o rinnovo:"
      },
      {
        "tipo": "p",
        "testo": "Degli elementi di facciata che determinano il linguaggio architettonico delle facciate sia per gli elementi compositivi fissi (zoccolature, basamenti, lesene, cornici, soglie, marcapiano cornicioni, timpani …) che mobili (portoni, finestre, portefinestre, vetrine, pluviali, grondaie …) che accessorie (targhe, insegne, luci, campanelli …);"
      },
      {
        "tipo": "p",
        "testo": "Del colore e dei materiali di tutti i suddetti elementi compositivi;"
      },
      {
        "tipo": "p",
        "testo": "Della manutenzione nel corso del tempo dello stato fisico e di “salute” di tali elementi specie per le parti più soggette ad usura o sollecitazione all’azione degli agenti atmosferici;"
      },
      {
        "tipo": "p",
        "testo": "In ragione di ciò il recupero della “Regola d’Arte” e della funzione di giudizio di una Commissione di Pubblico Ornato non potranno essere giudicate anacronistiche, essendo venuti a mancare (persi o dimenticati) gli Elementi di Giudizio alla base di una corretta valutazione sull’impatto che qualsivoglia intervento nell’ambiente costruito porta con se rispetto all’ambiente che lo circonda (urbano o naturale)."
      },
      {
        "tipo": "p",
        "testo": "Allo stesso tempo si dovrebbe a mio avviso trovare un giusto equilibrio tra la Cultura del Restauro e del Recupero e le attuali esigenze di trasformazione urbanistica ed architettonica che tendono, giustamente, a logiche e tematiche che un tempo non erano presenti quali : il risparmio energetico con l’introduzione del fotovoltaico e del solare termico, le prestazioni funzionali degli spazi interni con l’introduzione della domotica e dei collegamenti digitali, il superamento delle barrire architettoniche e la totale fruibilità degli spazi interni ed esterni da parte di persone diversamente abili e tutte le problematiche connesse alla costruzione, restauro e ristrutturazione in Zona Sismica."
      },
      {
        "tipo": "p",
        "testo": "Ciò significa salvaguardare ciò che più conta per la nostra memoria storica, sociale e culturale ma, senza snaturare la conformazione di un manufatto edilizio, consentire di introdurre il più ampio quadro di trasformazioni possibili (funzionali e qualitative) per consentire un modello abitativo adatto alle esigenze della nostra epoca, trovando soluzioni che possano mediare antico e moderno senza sovrapposizioni o occultamenti."
      },
      {
        "tipo": "p",
        "testo": "Valorizzare la Storia e la Memoria senza demonizzare la nostra Contemporaneità ma piegando quest’ultima al rispetto della prima attraverso l’uso di soluzioni tecnologicamente avanzate, anche tramite lo strumento della deroga alle Leggi vigenti o attraverso Leggi che, per giustificate motivazioni di forte impatto Funzionale o Qualitativo, possano consentire le opportune deroghe e quindi innovative trasformazioni utili alla vita delle persone."
      },
      {
        "tipo": "h",
        "testo": "La Città Contemporanea"
      },
      {
        "tipo": "p",
        "testo": "Lo sviluppo urbano al di fuori del Centro Storico ha avuto come punto di riferimento, in alcuni casi, le Frazioni ed attorno ad esse si è sviluppata l’espansione dei centri abitati esistenti, in altri casi intere zone agricole sono state assoggettate ad una intensa campagna edificatoria trasformando di fatto quelle zone in vere e proprie parti di città."
      },
      {
        "tipo": "p",
        "testo": "Il risultato dal punto di vista quantitativo ha senza dubbio dato una risposta adeguata rispetto ai fenomeni di afflusso dalla campagna alla città; non sempre però ha generato modelli urbani o architettonici di qualità, offrendoci oggi un paesaggio in alcuni casi caotico, dove ad edifici alti si alternano edifici bassi e dove le strade si sviluppano su traiettorie tortuose, invase di auto parcheggiate e non collocate nelle loro autorimesse, a loro volta queste adibite a “tavernette” a servizio della casa."
      },
      {
        "tipo": "p",
        "testo": "Personalmente credo che il ritardo dei modelli e delle teorie urbanistiche giunte a Pesaro ed il lungo periodo della loro attuazione abbiano di fatto reso alcune pianificazioni già obsolete il giorno della loro entrata in funzione con le dovute eccezioni, una tra tutte “il Villaggio degli Edili” in Via Nanterre."
      },
      {
        "tipo": "p",
        "testo": "Oggi le tematiche della Bio-Architettura e del Risparmio Energetico e del Costruire Edifici ad Energia quasi Zero (ENZEB) spesso (non sempre) prevalgono sullo stile architettonico (omologazione del linguaggio espressivo), poiché ritenute funzioni imprescindibili avanti ad ogni altro aspetto estetico del fabbricato, per l’esigenza sentita di dare una svolta al settore delle costruzioni rimasto fermo troppo tempo su di una tradizione costruttiva basata su eccessi e sprechi che non possiamo più permetterci."
      },
      {
        "tipo": "p",
        "testo": "Nonostante la buona volontà se chiedessimo ad un bambino di descrivere la nostra città a parole o con un disegno ci accorgeremmo di quanti e quali siano i punti critici, le parti mancanti di un puzzle che nella realtà dovrebbe essere composto in modo chiaro ed ordinato."
      },
      {
        "tipo": "p",
        "testo": "Occorre cercare di ricucire i nodi della maglia strappata tra la Città Antica e le Aree di espansione di nuova edificazione, nodi che appaiono evidenti guardando la città dall’alto, ricucitura che passa per l’utilizzo di aree verdi, percorsi pedonali e ciclabili, riprogettazione della viabilità pedonale e veicolare a tutti i livelli, problema dei parcheggi e creazione di parcheggi di scambio del mezzo di trasporto per alleggerire il carico su parti della città (Centro Storico e Zona Mare) non più in grado di assorbire il carico del traffico."
      },
      {
        "tipo": "p",
        "testo": "Certo è che la nostra città, attraversata dalla Ferrovia e dalla Statale Adriatica, bloccata tra due colline e posta di fronte al mare, pur nella spettacolarità della natura del luogo, non ha mai avuto vita facile in termini di sviluppo urbano, per gli ostacoli fisici da un lato (strada e ferrovia) e per gli elementi di Valore Paesaggistico dall’altro (mare e colline)."
      },
      {
        "tipo": "p",
        "testo": "L’occasione perduta di ricollocare l’asse autostradale e ferroviario ha di fatto annullato utopie e speranze coltivate da anni nel cuore di tutti e insufficientemente consolate dalle ciclabili e pedonali che costeggiano la ferrovia e la strada statale tra Pesaro e Fano o che costeggiano il Fiume da un lato e gli edifici dalle coperture in Eternit e la Fox Petroli dall’altro."
      },
      {
        "tipo": "h",
        "testo": "Speranze e Utopie"
      },
      {
        "tipo": "p",
        "testo": "Spero che ci possa essere un futuro, non tanto lontano, in cui le occasioni di confronto tra le idee e le visioni che ognuno di noi porta con sé, possano trovare uno spazio, libero e aperto, senza pregiudizi, dove ci si possa incontrate per esprimere il nostro pensiero senza paura di essere giudicati o accusati di giudicare."
      },
      {
        "tipo": "p",
        "testo": "Mi piacerebbe che non fosse giudicata male o negativa la mia personale visione della realtà per essere attento al particolare ed al dettaglio tecnico : come il credere che l’occultamento di un elemento architettonico con un’insegna pubblicitaria sia una cosa sbagliata; che un modello di lampione o panchina non sia adatto né per forma né per funzione a qual luogo; che delle sfere di cemento non siano arredo urbano così come non lo sono alcuni addobbi, più o meno permanenti, o luminarie, più o meno permanenti, agganciate in modo precario con corde e fili ad elementi compositivi delle facciate o pali della luce; che un colore di un fabbricato possa essere sbagliato o non adatto a quella architettura; che al di là della scelta fatta (condivisibile o meno), la collocazione di una torre di metallo in asse perfetto con una scultura non sia la migliore scelta di impatto ambientale."
      },
      {
        "tipo": "p",
        "testo": "Quando passo, a piedi o in bicicletta, per la mia città guardo in ogni direzione e penso : vedo che molte cose sono state fatte, e questo è segno di buona volontà, ma vedo che molte sono state fatte forse con troppa fretta, con poca attenzione e senza una visione e consapevolezza della dinamica della realtà, non riuscendo a comprendere che un progetto, bello e disegnato bene, non sempre genera una realtà altrettanto bella e funzionale."
      },
      {
        "tipo": "p",
        "testo": "Per fare comprendere in sintesi questo mio concetto concludo con un esempio : posare le proprie terga, per una sosta, su di una panchina la cui seduta è costituita da assi di legno o altro materiale che possiede un certo grado di elasticità e soprattutto è in grado di restituire il calore del nostro corpo è molto diverso che posare le stesse terga su di un piano in pietra o lito-cementizio per nulla elastico e che di fatto assorbe e disperde il calore del nostro corpo : nel primo caso la seduta sarà comoda e la sosta più confortevole e lunga, nel secondo caso la seduta sarà breve e scomoda."
      },
      {
        "tipo": "p",
        "testo": "Ci sono sedute costituite da materiali che in estate, sotto il sole, diventano roventi ed in inverno freddissime e che di conseguenza non invitano la sosta; se poi aggiungiamo la presenza o l’assenza di uno schienale potete immaginare da soli quale differenza c’è tra le panchine lungo Viale della Repubblica e le panchine Restyling dei Leoni in Piazzale della Libertà : il disegno della città ed il suo arredo devono tenere conto del dettaglio, dell’immagine e della qualità del manufatto e non solo della sua funzione."
      },
      {
        "tipo": "firma",
        "testo": "Marcello Franca, architetto"
      }
    ]
  },
  {
    "slug": "filosofia",
    "titolo": "Filosofia: il colore e la memoria dei luoghi",
    "data": "2020-02-02",
    "estratto": "Indagare la realtà attraverso i colori è un modo per comprendere le cose, il mondo nel suo divenire; nella loro universalità i colori dilatano il microcosmo di osservazione nel quale quotidianamente noi tutti siamo immersi, fino a farlo divenire portatore di significati senza confine. Nel loro incontro con il mondo dei colori, da strumento di conoscenza espressiva soggettiva ed analisi oggettiva, pittura e fotografia diventano, assieme, una sola cosa, frutto dell’abbandono alla nostra componente fantastica ed espressione visibile del nostro personale spirito creativo ed interpretativo. E’ una continua oscillazione tra razionale ed irrazionale, tra ordine e disordine, tra il “mondo natura” ed il “mondo costruito” dall’uomo: una dicotomia che, attraverso il colore, scompare per divenire, tramite la pittura e la fotografia, la stessa cosa.",
    "blocchi": [
      {
        "tipo": "citazione",
        "testo": "Ma la città non dice il suo passato,\nlo contiene come le linee di una mano,\nscritto negli spigoli delle vie, nelle griglie delle finestre,\nnegli scorrimano delle scale, nelle antenne dei parafulmini,\nogni segmento rigato a sua volta di graffi, seghettature, intagli, svirgole",
        "fonte": "Italo Calvino, Le città invisibili"
      },
      {
        "tipo": "p",
        "testo": "Indagare la realtà attraverso i colori è un modo per comprendere le cose, il mondo nel suo divenire; nella loro universalità i colori dilatano il microcosmo di osservazione nel quale quotidianamente noi tutti siamo immersi, fino a farlo divenire portatore di significati senza confine. Nel loro incontro con il mondo dei colori, da strumento di conoscenza espressiva soggettiva ed analisi oggettiva, pittura e fotografia diventano, assieme, una sola cosa, frutto dell’abbandono alla nostra componente fantastica ed espressione visibile del nostro personale spirito creativo ed interpretativo. E’ una continua oscillazione tra razionale ed irrazionale, tra ordine e disordine, tra il “mondo natura” ed il “mondo costruito” dall’uomo: una dicotomia che, attraverso il colore, scompare per divenire, tramite la pittura e la fotografia, la stessa cosa."
      },
      {
        "tipo": "p",
        "testo": "Perché l’uomo colora le cose? Il colore è un mezzo di rappresentazione, di relazione e di comunicazione a vari livelli, attraverso uno dei più importanti mezzi recettori: la vista. La vista capta la luce, l’immagine della realtà che, codificata dal cervello, entra a far parte del patrimonio conoscitivo dell’uomo, della sua cultura crescente, modificata e modificante il bagaglio collettivo di conoscenza e di messaggi, in un continuo scambio di sensazioni e informazioni. Il nostro compito si trasforma in un’occasione di comunicare significati e messaggi che possano riportare alla luce il ruolo che il colore deve avere nella prassi progettuale creativa di colui che ne fa uso, al di là di diversificate motivazioni, facendo riemergere l’importanza visiva e di relazione tra i colori, l’ambiente, la natura e le stimolazioni visive che tale relazione produce sull’uomo. Dall’incontro con Michele Provinciali si è sempre di più accresciuta in me un’incondizionata passione di studio e di ricerca verso il circostante ed una maggiore sensibilità per il mondo delle cose, degli oggetti d’uso quotidiano, sensibilità espressa dall’apertura mentale, acquisita e necessaria, per un corretto approccio verso l’analisi del fenomeno cromatico e dello stretto rapporto “spazio-temporale” tra luce, colore e materia. Con attenzione e rispetto, sia pure in senso critico, della Storia , della Tradizione e della Cultura del Luogo, tendo a reinterpretare segni e logotipi sul filo della memoria; una lettura della realtà in chiave poetica e filosofica attraverso la quale cerco di testimoniare il presente, in ogni suo aspetto, coerente o contraddittorio, non dimenticando pero’ mai le nostre origini che, nel segno e nel gesto, tornano alla mente in ognuno di noi."
      }
    ]
  },
  {
    "slug": "ricordo-di-michele-provinciali",
    "titolo": "Ricordo di Michele Provinciali",
    "sottotitolo": "i Colori di Michele",
    "data": "2020-02-03",
    "estratto": "La telefonata fu breve, quando arrivai bastò alzare “il saltarello” della porta in legno per entrare in quel cortile dove il tempo sembrava essersi fermato. Al suo interno, sull’uscio di un’altra porta, Michele mi aspettava per darmi il benvenuto e invitare ad entrare. La stanza era occupata al centro da un grande tavolo invaso di pezzetti di carta colorata e in un angolo c’era una ciotola d’insalata che Michele stava mangiando. Di lui mi aveva parlato Giovanni Brino e l’allora suo assistente Germano Tagliasacchi, che curavano il corso di decorazione alla facoltà di architettura del Politecnico di Torino, corso che stavo seguendo nel mio tragitto di laurea. Fu Germano a suggerirmi l’ipotesi di una tesi sul lavoro che Michele Provinciali aveva sviluppato, con i suoi studenti dell’ISIA di Urbino, sul colore nella zona mare e che aveva titolato “Pesaro Colore”. Michele Provinciali, con Giovanni Brino, facevano parte nel 1979 della sottocommissione 12 dell’U.N.I. (ente nazionale italiano di unificazione) per l’applicazione del “Colore nell’ambiente costruito” e in quest’ ambito si erano conosciuti.",
    "blocchi": [
      {
        "tipo": "p",
        "testo": "La telefonata fu breve, quando arrivai bastò alzare “il saltarello” della porta in legno per entrare in quel cortile dove il tempo sembrava essersi fermato. Al suo interno, sull’uscio di un’altra porta, Michele mi aspettava per darmi il benvenuto e invitare ad entrare. La stanza era occupata al centro da un grande tavolo invaso di pezzetti di carta colorata e in un angolo c’era una ciotola d’insalata che Michele stava mangiando. Di lui mi aveva parlato Giovanni Brino e l’allora suo assistente Germano Tagliasacchi, che curavano il corso di decorazione alla facoltà di architettura del Politecnico di Torino, corso che stavo seguendo nel mio tragitto di laurea. Fu Germano a suggerirmi l’ipotesi di una tesi sul lavoro che Michele Provinciali aveva sviluppato, con i suoi studenti dell’ISIA di Urbino, sul colore nella zona mare e che aveva titolato “Pesaro Colore”. Michele Provinciali, con Giovanni Brino, facevano parte nel 1979 della sottocommissione 12 dell’U.N.I. (ente nazionale italiano di unificazione) per l’applicazione del “Colore nell’ambiente costruito” e in quest’ ambito si erano conosciuti."
      },
      {
        "tipo": "p",
        "testo": "Michele fu entusiasta dell’ipotesi di una tesi di laurea in architettura sul suo lavoro, che fu poi titolato “Pesaro-Colore, contributo ad un progetto di Michele Provinciali”, con l’intendimento di aggiungere qualcosa in più a quanto da lui stesso posto in essere."
      },
      {
        "tipo": "p",
        "testo": "In Italia il “Piano del Colore di Torino” diretto da Giovanni Brino e il “Color Terminal” dell’Istituto Vernici Italiano con sede a Milano diretto da Clino Trini Castelli (anche lui dell’U.N.I), furono due momenti importanti per riportare attenzione e ridare il giusto peso all’importanza che deve avere del tema del colore nell’ambiente : il primo in ambito architettonico ed urbanistico, con il recupero della memoria storica e della tradizione dei colori nei materiali costruttivi negli interventi di ristrutturazione e nuova edificazione; il secondo nel più ampio ambito di studio dei materiali e della trasformazione degli stessi in oggetti, tessuti, colori e vernici recuperando la memoria dei colori dalla filosofia alla fisiologia, dalla fisica alla psicologia sino alla percezione ed alla sua dinamica ottica, come bene viene spiegato nel libro “Colore codice e norma” di Narciso Silvestrini , anche lui membro della sottocommissione dell’U.N.I."
      },
      {
        "tipo": "p",
        "testo": "E così i lunghi colloqui e i numerosi viaggi in auto con Michele si trasformarono per me in ricche ed intense lezioni di storia e momenti importanti di apprendimento e conoscenza, grazie al suo accattivante ed affabulatorio modo di raccontare, al di là di quanto accaduto, l’essenza di quanto vissuto : Milano prima e la Persia poi, il suo viaggio e la sua esperienza più importante che lo ispirò in ogni lavoro ed alla quale faceva sempre riferimento come nel libro che l’ha raccontata “Iran l’alba della civiltà” edito da Provinciali e Spotorno editori."
      },
      {
        "tipo": "p",
        "testo": "Furono gli anni del progetto “Colore per Santarcangelo di Romagna” e della storica conversazione, alla quale fui presente, tra Michele e Tonino Guerra e che finì, come dicono in Romagna, “in cagnara” per la difesa del primo delle proprie teorie grafiche e cromatiche e per la campanilistica e partigiana difesa della libertà espressiva dei santarcangiolesi del secondo."
      },
      {
        "tipo": "p",
        "testo": "Seguirono poi lavori come “Colori di nove città” in collaborazione con la AKZO-Sikkens, nell’ambito della XVII Triennale di Milano, e la mostra delle ceramiche realizzate da Franco Bucci, allestita al centro Domus di Milano ed al Museo di Caltagirone in Sicilia."
      },
      {
        "tipo": "p",
        "testo": "Come il colore mi unì a Michele per molti anni così il colore finì per allontanarmi da lui per alcuni anni nel corso dei quali posi le basi e lo sviluppo di un “Piano del Colore” per il centro storico della città di Pesaro al quale seguì l’incarico ufficiale da parte dell’amministrazione comunale, con una mostra ed un dibattito nel 1990, progetto ed evento dal quale Michele venne escluso."
      },
      {
        "tipo": "p",
        "testo": "Poi un giorno Michele mi chiamò di nuovo al telefono e, come se nulla fosse accaduto (un distacco durato nove anni), mi invitò ad un viaggio a Torino, la mia seconda città, ed io accettai con piacere quella proposta ricominciando, da dove avevo lasciato come nulla fosse accaduto, un rapporto che, oggi mi pento, non avrei mai dovuto interrompere."
      },
      {
        "tipo": "p",
        "testo": "I colori che Michele mi ha insegnato ad amare e a conoscere sono i colori della natura per un’architettura che, con la natura e l’ambiente, deve essere in perfetta armonia; sono i colori della percezione visiva e dei meccanismi ottico-percettivi ad essa connessi e sui quali hanno tanto indagato filosofi come Johann Wolfgang von Goethe e Ludwig Wittgenstein; sono i colori della storia e dei materiali storici, con i quali si è costruito dai Greci al Medioevo sino al Rinascimento ed al Novecento; sono i colori della teoria cromatica legata al linguaggio pittorico e grafico, dai quadri degli impressionisti francesi sino a Mondriand e Andy Warhol; sono i colori della nostra natura fisiologica, diversa quella di ognuno di noi da quella degli altri sino al daltonismo."
      },
      {
        "tipo": "p",
        "testo": "L’eclettica e vasta visione delle cose, del mondo e degli eventi umani, storici e sociali legati ad un’innata passione umanistica per la lettura, in particolare per la saggistica, oltre che per la fotografia e non ultimo per il cinema, hanno sviluppato in Michele una dote importante : la capacità di vedere oltre il visibile e di coltivare sogni ed utopie per trasmettere ed insegnare ai suoi allievi concetti, atteggiamenti e pensieri nuovi, originali ed unici, basati su di una illuminata e vivace visione della vita, sostituendo in essa la Ragione con quello che lui stesso definì poi, negli ultimi anni, “il Cuore pensante”."
      }
    ]
  },
  {
    "slug": "i-francobolli-di-michele",
    "titolo": "I francobolli di Michele",
    "data": "2020-02-04",
    "estratto": "Erano passati alcuni anni dall’ultimo nostro incontro, qualche incomprensione e forse troppe cose non dette ci avevano allontanato l’uno dall’altro, quando un giorno Michele mi chiama al telefono ed in modo diretto e con pochi preamboli mi domanda : “mi accompagneresti a Torino da Bolaffi ?”.",
    "img": {
      "base": "/img/scritti/i-francobolli-di-michele",
      "w": 418,
      "h": 512,
      "alt": "Uno dei francobolli giganti di Michele Provinciali"
    },
    "blocchi": [
      {
        "tipo": "p",
        "testo": "Erano passati alcuni anni dall’ultimo nostro incontro, qualche incomprensione e forse troppe cose non dette ci avevano allontanato l’uno dall’altro, quando un giorno Michele mi chiama al telefono ed in modo diretto e con pochi preamboli mi domanda : “mi accompagneresti a Torino da Bolaffi ?”."
      },
      {
        "tipo": "p",
        "testo": "Io fui felice di sentire di nuovo la sua voce ed entusiasta della proposta di tornare nella città dove avevo studiato e preparato la tesi di laurea in architettura proprio sul “Progetto Pesaro Colore” del 1978-79 di Michele Provinciali."
      },
      {
        "tipo": "p",
        "testo": "In compagnia di Enzo Biffi Gentili, critico d’arte e gallerista, ci recammo alla Bolaffi Editore, al centro di Torino in Via Cavour 17, dove Michele ebbe un breve ma intenso colloquio, assai critico e acceso, con il signor Alberto Bolaffi in persona, in una grande stanza blindata, piena zeppa di oggetti di valore, tra qualche “pezzo di Luna” e “la tuta di Neil Armstrong”."
      },
      {
        "tipo": "p",
        "testo": "La questione verteva su alcune stampe litografiche di francobolli giganti e sopratutto si focalizzò polemicamente su di uno di loro, quello che riproduceva un elefantino rosa."
      },
      {
        "tipo": "p",
        "testo": "Michele voleva infatti proporre alla Bolaffi l’acquisto di una serie di queste stampe che erano state realizzate per l’Atelier “il Paravento” di Montecatini Terme in società con l’amico Sandro Sartoni, prematuramente scomparso, con il quale anni prima aveva condiviso il marchio “Frank Soriano illuminazione” come socio e art-director."
      },
      {
        "tipo": "p",
        "testo": "Ma al termine del colloquio, Alberto Bolaffi non accettò di acquistare quelle stampe, sia pure ben realizzate ed in tiratura limitata, nonostante la presentazione di Michele fosse stata rigorosa e puntuale."
      },
      {
        "tipo": "p",
        "testo": "In compenso però, per ringraziarci della visita, oltre a regalarci alcuni gadget e cataloghi Bolaffi, prese un foglietto e di suo pugno autografò un buono pranzo al famoso ed esclusivo ristorante di Torino “Del Cambio” in Piazza Carignano, foglietto che per qualche istante ebbi tra le mie mani e che custodii come una preziosa pergamena."
      },
      {
        "tipo": "p",
        "testo": "Ma quando fummo fuori, Michele mi chiese di avere quel foglietto ed in un attimo lo strappò facendone coriandoli."
      },
      {
        "tipo": "p",
        "testo": "Era la sua definitiva risposta ad Alberto Bolaffi dimostrando con quel gesto una parte del suo vero carattere, orgoglioso e passionale."
      },
      {
        "tipo": "p",
        "testo": "Poco tempo dopo quei francobolli, dalla lastra litografica usata come matrice, diventarono tridimensionali, in gres, grazie all’arte ed al mestiere di Franco Bucci e forse a questo punto Alberto Bolaffi vedendoli avanti a se ne vorrebbe almeno uno, anche se sono certo che questa volta sarebbe Michele a dirgli di no."
      },
      {
        "tipo": "p",
        "testo": "Con il passare degli anni molte di quelle stampe furono da Michele regalate agli amici ed alle persone con le quali ha condiviso gli ultimi anni di Vita e di Lavoro, come segno di stima, di riconoscenza e di affetto, un ricordo che anch’io conservo gelosamente tra le mie cose più care."
      }
    ]
  },
  {
    "slug": "l-asparagina-di-michele",
    "titolo": "L’asparagina di Michele",
    "data": "2020-02-04",
    "estratto": "Un giorno Michele, mio Amico e Maestro, mi chiamò a Novilara. Era molto contrariato per il fatto che qualcuno lì di Novilara avesse posizionato una botte in legno con sopra dei vasi di asparagina nella piazzetta di fronte alla Chiesa.",
    "img": {
      "base": "/img/scritti/l-asparagina-di-michele",
      "w": 1440,
      "h": 1920,
      "alt": "La botte con l’asparagina nella piazzetta di Novilara"
    },
    "blocchi": [
      {
        "tipo": "p",
        "testo": "Un giorno Michele, mio Amico e Maestro, mi chiamò a Novilara.\nEra molto contrariato per il fatto che qualcuno lì di Novilara\navesse posizionato una botte in legno con sopra dei vasi\ndi asparagina nella piazzetta di fronte alla Chiesa."
      },
      {
        "tipo": "p",
        "testo": "“Vieni su Marcello” mi disse “vieni a fare delle foto che poi\nscrivo al Sindaco una lettera di protesta”."
      },
      {
        "tipo": "p",
        "testo": "Michele riteneva che l’asparagina sulla botte rovinasse il paesaggio urbano.\nDopo aver girato il Mondo Michele, Lucetta e Federico avevano trovato il loro quiete rifugio ed una calda accoglienza in una delle case del Castello."
      },
      {
        "tipo": "p",
        "testo": "Era molto geloso e possessivo di quel luogo dove soleva passeggiare e parlare con i gatti ed i cagnolini non “da guardia” ma “di guardia” alle case come era solito dirmi nel corso dei nostri lunghi colloqui davanti al fuoco o durante i pranzi di minestrone “mari e monti”."
      },
      {
        "tipo": "p",
        "testo": "Fu così che feci le foto, senza farmi accorgere, in un pomeriggio d’estate del 2003 verso le 14,30 quando la gente era solita riposare dopo pranzo.\nCosì le strade erano vuote e nessun curioso in giro a chiedersi e chiedermi che cosa stessi facendo e perché, come solito capita quando si fotografa in giro."
      },
      {
        "tipo": "p",
        "testo": "Stampai le foto e tornai a Novilara per mostrarle a Michele."
      },
      {
        "tipo": "p",
        "testo": "Quando Michele vide le foto rimase come “estasiato” modificando immediatamente il proprio umore ed il proprio giudizio sulla “botte con l’asparagina”.\n“E’ bellissima Marcello, di grande effetto poetico, lasciamo perdere, mi sono sbagliato”."
      },
      {
        "tipo": "p",
        "testo": "Ed è così che l’asparagina da nemica divenne amica e da quel giorno ogni volta che vado a Novilara e vedo in qualche angolo del paese o su di un davanzale di una finestra un vaso di asparagina, dico tra me e me :\n“Ecco l’asparagina di Michele” !"
      },
      {
        "tipo": "p",
        "testo": "Un ricordo questo che porterò sempre nel cuore\ncome tutto ciò che il mio Maestro mi ha insegnato\ninsieme agli scatti fotografici che allora feci per lui."
      },
      {
        "tipo": "p",
        "testo": "Grazie Michele."
      }
    ]
  }
];
