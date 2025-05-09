import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Links = [
  {
    id: "Homepage",
    label: "Homepage",
    path: "/",
    icon: <FontAwesomeIcon icon="fa-solid fa-house" />,
  },
  {
    id: "WhoAmI",
    label: "Chi Sono",
    path: "/",
    icon: <FontAwesomeIcon icon="fa-solid fa-user" />,
  },
  {
    id: "Projects",
    label: "Progetti",
    path: "/projects",
    icon: <FontAwesomeIcon icon="fa-solid fa-code" />,
  },
  {
    id: "Contacts",
    label: "Contatti",
    path: "/contacts",
    icon: <FontAwesomeIcon icon="fa-solid fa-at" />,
  },
];

export default Links;
