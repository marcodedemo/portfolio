import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faBriefcase, faCode, faAt } from "@fortawesome/free-solid-svg-icons";

const Links = [
  {
    id: "home",
    label: "Home",
    path: "/",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    id: "about",
    label: "Chi Sono",
    path: "/",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    id: "services",
    label: "Servizi",
    path: "/",
    icon: <FontAwesomeIcon icon={faBriefcase} />,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    path: "/",
    icon: <FontAwesomeIcon icon={faCode} />,
  },
  {
    id: "contacts",
    label: "Contatti",
    path: "/contacts",
    icon: <FontAwesomeIcon icon={faAt} />,
  },
];

export default Links;
