import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faBriefcase, faArrowsSpin, faAt } from "@fortawesome/free-solid-svg-icons";

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
    id: "how-i-work",
    label: "Come Lavoro",
    path: "/",
    icon: <FontAwesomeIcon icon={faArrowsSpin} />,
  },
  {
    id: "contacts",
    label: "Contatti",
    path: "/contacts",
    icon: <FontAwesomeIcon icon={faAt} />,
  },
];

export default Links;
