import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

// Etichette in translations.js (nav.*)
const Links = [
  { id: "home", navKey: "home", icon: <HomeIcon fontSize="small" /> },
  { id: "about", navKey: "whoAmI", icon: <PersonIcon fontSize="small" /> },
  { id: "services", navKey: "services", icon: <WorkIcon fontSize="small" /> },
  { id: "portfolio", navKey: "portfolio", icon: <CodeIcon fontSize="small" /> },
  { id: "contacts", navKey: "contacts", icon: <AlternateEmailIcon fontSize="small" /> },
];

export default Links;
