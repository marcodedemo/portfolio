import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Links = [
  {
    id: "home",
    label: "Home",
    path: "/",
    icon: <FontAwesomeIcon icon="fa-solid fa-house" />,
  },
  {
    id: "about",
    label: "Chi Sono",
    path: "/",
    icon: <FontAwesomeIcon icon="fa-solid fa-user" />,
  },
  {
    id: "services",
    label: "Servizi",
    path: "/",
    icon: <FontAwesomeIcon icon="fa-solid fa-briefcase" />,
  },
  {
    id: "how-i-work",
    label: "Come Lavoro",
    path: "/",
    icon: <FontAwesomeIcon icon="fa-solid fa-arrows-spin" />,
  },
  {
    id: "contacts",
    label: "Contatti",
    path: "/contacts",
    icon: <FontAwesomeIcon icon="fa-solid fa-at" />,
  },
];

export default Links;
