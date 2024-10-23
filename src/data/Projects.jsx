import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = [
  {
    slug: "b-developers",
    type: "Fullstack",
    title: "B-Developers",
    description:
      "Questa applicazione è un portale innovativo progettato per mettere in contatto sviluppatori e utenti alla ricerca di professionisti del settore tech. Gli sviluppatori possono creare un profilo dettagliato, caricare il proprio CV, inserire le proprie competenze (skill) e altre informazioni rilevanti, mentre gli utenti alla ricerca di sviluppatori possono navigare tra i profili e selezionare quello che meglio soddisfa le loro esigenze.",
    functionality: {
      user: [
        "Sistema di ricerca avanzata: gli utenti possono filtrare gli sviluppatori in base a competenze specifiche e framework preferenziali.",
        "Sistema di votazione e recensione: gli utenti possono valutare gli sviluppatori con recensioni e voti, aiutando altri utenti a prendere decisioni più informate.",
        "Chat integrata: permette agli utenti di comunicare direttamente con gli sviluppatori per presentare richieste e discutere i dettagli del progetto.",
      ],

      developer: [
        "Gestione del profilo: modifica delle informazioni personali, skill, immagine del profilo e caricamento del CV per mostrarlo agli utenti.",
        "Sponsorizzazioni del profilo: possibilità di scegliere tra 3 livelli di sponsorizzazione per evidenziare il proprio profilo nei risultati di ricerca degli utenti, con pagamenti gestiti tramite Braintree (PayPal).",
        "Gestione messaggi: interfaccia per visualizzare e rispondere ai messaggi ricevuti dagli utenti.",
        "Recensioni e statistiche: interfaccia per visualizzare le recensioni ricevute e grafici che mostrano le statistiche dei messaggi e delle recensioni nell'ultimo anno.",
      ],
    },
    goal: "Questo progetto mira a semplificare la connessione tra professionisti dello sviluppo web e utenti che necessitano di competenze specifiche, garantendo una comunicazione fluida e una valutazione trasparente delle competenze dei singoli sviluppatori.",
    images: [
      "bdev1.png",
      "bdev2.png",
      "bdev3.png",
      "bdev4.png",
      "bdev5.png",
      "bdev6.png",
      "bdev7.png",
    ],
    repositoryUrl: "",
    liveUrl: "/",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vue.js",
      "Bootstrap",
      "Paypal Braintree",
      "Scss",
      "Php",
      "Laravel",
      "MySQL",
    ],
    team: true,
    date: "16/06/2023",
  },
  {
    slug: "boolflix",
    type: "Frontend",
    title: "Boolflix",
    description:
      "Questo progetto è una riproduzione responsive semplificata del sito di Netflix, sviluppata utilizzando un servizio API per l'acquisizione di dati su film e serie TV. Gli utenti possono esplorare il catalogo di film e serie, visualizzare i dettagli di ciascun titolo e cercare direttamente per nome utilizzando la barra di ricerca. Ogni ricerca attiva una chiamata API che restituisce i risultati pertinenti. La visualizzazione dei contenuti è organizzata in due slideshow separati: uno dedicato alle serie TV e uno per i film, offrendo un'esperienza simile a quella di Netflix ma con una struttura semplificata.",
    images: ["boolflix.png", "boolflix1.png"],
    repositoryUrl: "",
    liveUrl: "/",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vue.js",
      "Bootstrap",
      "Scss",
      "API Rest",
    ],
    team: false,
    date: "30/03/2023",
  },
  {
    slug: "discord",
    type: "Frontend",
    title: "Riproduzione Sito Discord",
    description:
      "Questo progetto è la riproduzione di una vecchia versione del sito web di Discord, sviluppata utilizzando HTML, CSS, Vue.js e Bootstrap. Il sito è completamente responsive, garantendo un'esperienza di navigazione ottimale su qualsiasi dispositivo, dai desktop ai dispositivi mobile. Vue.js è stato utilizzato per gestire in modo dinamico l'interfaccia, mentre Bootstrap ha permesso di realizzare un layout flessibile e moderno, mantenendo fedeltà al design originale.",
    images: [
      "discord1.png",
      "discord2.png",
      "discord3.png",
      "discord4.png",
      "discord5.png",
    ],
    repositoryUrl: "",
    liveUrl: "/",
    technologies: ["HTML5", "CSS3", "Bootstrap", "Vue.js"],
    team: false,
    date: "24/03/2023",
  },
  {
    slug: "phlox",
    type: "Frontend",
    title: "Phlox - Business Consulting",
    description:
      "Questo progetto consiste nella creazione di una landing page per un'azienda di business consulting, sviluppata seguendo il design di un template fornito da un web designer. Il sito è completamente responsive, garantendo un'ottima esperienza utente su tutti i dispositivi. Sono state inoltre implementate animazioni su pulsanti e card utilizzando solo CSS, per rendere l'interfaccia più interattiva e coinvolgente.",
    images: [
      "phlox.png",
      "phlox1.png",
      "phlox2.png",
      "phlox3.png",
      "phlox4.png",
    ],
    repositoryUrl: "",
    liveUrl: "/",
    technologies: ["HTML5", "CSS3", "Bootstrap", "Vue.js"],
    team: false,
    date: "11/04/2023",
  },
];

export default Projects;
