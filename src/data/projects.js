import allenove from "../assets/projects/allenove.webp";
import zamai from "../assets/projects/zamai.webp";
import assistenteAi from "../assets/projects/assistente-ai-logo.webp";
import assistenteAiDark from "../assets/projects/assistente-ai-logo-dark.webp";

const projects = [
  {
    slug: "assistente-ai",
    image: assistenteAi,
    imageDark: assistenteAiDark, // mostrata quando il sito è in tema scuro
    title: "Assistente AI per siti web",
    titleEn: "AI assistant for websites",
    shortDescription: "Assistente virtuale che risponde ai visitatori a qualsiasi ora sui servizi offerti e raccoglie le richieste di contatto. Provalo come chat a schermo intero o come widget su un sito.",
    shortDescriptionEn: "Virtual assistant that answers visitors' questions about the services offered at any hour and collects contact requests. Try it as a full-screen chat or as a widget on a website.",
    type: "Full-stack",
    technologies: ["Next.js", "Vercel AI SDK", "Claude", "Resend"],
    liveUrl: "https://assistente-demo.netlify.app/",
    isDemo: true, // link "Prova la demo", che apre la demo con lo stesso tema (chiaro/scuro) del sito
  },
  {
    slug: "allenove",
    image: allenove,
    title: "Allenovesenonpiove",
    shortDescription: "Sito vetrina responsive per un gruppo amatoriale di mountain-bikers, con galleria e calendario eventi.",
    shortDescriptionEn: "Responsive showcase website for an amateur mountain-bike group, with gallery and event calendar.",
    type: "Frontend",
    technologies: ["Vue.js", "SCSS", "Bootstrap"],
    repositoryUrl: "https://github.com/paolodedemo/allenovesenonpiove",
    liveUrl: "https://allenovesenonpiove.it/",
  },
  {
    slug: "vitozamai",
    image: zamai,
    title: "Vito Zamai - Dottore Commercialista",
    shortDescription: "Presenza online per uno studio commercialista: design istituzionale, contenuti chiari e struttura orientata alla fiducia del cliente.",
    shortDescriptionEn: "Online presence for an accounting firm: institutional design, clear content and a structure built to inspire client trust.",
    type: "Frontend",
    technologies: ["React.js", "Tailwind", "CSS"],
    liveUrl: "https://zamai.it",
  },
];

export default projects;
