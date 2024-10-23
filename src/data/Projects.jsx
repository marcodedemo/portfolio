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
    images: ["", ""],
    repositoryUrl: "",
    liveUrl: "",
    technologies: [],
    team: true,
    date: "",
  },
];

export default Projects;
