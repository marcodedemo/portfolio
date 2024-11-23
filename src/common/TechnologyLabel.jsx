import React from "react";
import { Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faBootstrap,
  faVuejs,
  faLaravel,
  faSass,
  faReact,
  faPhp,
  faPaypal,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faGears } from "@fortawesome/free-solid-svg-icons";

function TechnologyLabel({ technology }) {
  const theme = useTheme();
  const mode = theme.palette.mode;  // Ottieni la modalità corrente (light/dark)

  // Selezione colore in base alla technology
  const setTextColor = () => {
    switch (technology) {
      case "HTML":
      case "MySQL":
        return mode === "light" ? "#ff9300" : "#ffd479";
      case "CSS":
        return mode === "light" ? "#0096ff" : "#76d6ff";
      case "Javascript":
        return mode === "light" ? "#00000090" : "#fffc79";
      case "Bootstrap":
        return mode === "light" ? "#9437ff" : "#d783ff";
      case "Vue.js":
        return mode === "light" ? "#008f00" : "#00f900";
      case "Laravel":
        return mode === "light" ? "#00000090" : "#ff7e79";
      case "Scss":
        return mode === "light" ? "#9437ff" : "#ff8ad8";
      case "API":
        return mode === "light" ? "#0096ff" : "#76d6ff";
      case "React.js":
      case "Paypal Braintree":
        return mode === "light" ? "#005493" : "#0096ff";
      case "Php":
        return mode === "light" ? "#011993" : "#0096ff";
      default:
        return "#ffffff";
    }
  };

  // Selezione backgroundColor in base alla technology
  const setBackgroundColor = () => {
    switch (technology) {
      case "HTML":
      case "MySQL":
        return mode === "light" ? "#ffd479" : "#ff930060";
      case "CSS":
        return mode === "light" ? "#76d6ff" : "#0096ff60";
      case "Javascript":
        return mode === "light" ? "#fffc79" : "#fffb0060";
      case "Bootstrap":
        return mode === "light" ? "#d783ff" : "#9437ff60";
      case "Vue.js":
        return mode === "light" ? "#00f900" : "#008f0060";
      case "Laravel":
        return mode === "light" ? "#ff7e79" : "#ff260060";
      case "Scss":
        return mode === "light" ? "#ff8ad8" : "#ff2f9260";
      case "API":
        return mode === "light" ? "#73fdff" : "#00fdff60";
      case "React.js":
      case "Paypal Braintree":
        return mode === "light" ? "#0096ff" : "#00549360";
      case "Php":
        return mode === "light" ? "#0096ff" : "#01199360";
      default:
        return "#4c4c4c";
    }
  };

  // Selezione dell'icona in base alla technology
  const setTechnologyIcon = () => {
    switch (technology) {
      case "HTML":
        return faHtml5;
      case "CSS":
        return faCss3Alt;
      case "Javascript":
        return faJsSquare;
      case "Bootstrap":
        return faBootstrap;
      case "Vue.js":
        return faVuejs;
      case "Laravel":
        return faLaravel;
      case "Scss":
        return faSass;
      case "API":
        return faGears;
      case "React.js":
        return faReact;
      case "Php":
        return faPhp;
      case "MySQL":
        return faDatabase;
      case "Paypal Braintree":
        return faPaypal;
      default:
        return null;
    }
  };

  // Abbreviazione per attribuzione colore testo
  const textColor = setTextColor();

  return (
    <Chip
      sx={{
        height: theme.spacing(3),
        color: textColor,
        backgroundColor: setBackgroundColor(),
        fontWeight: "600",
      }}
      label={technology}
      icon={
        setTechnologyIcon() && (
          <FontAwesomeIcon icon={setTechnologyIcon()} color={textColor} />
        )
      }
    />
  );
}

export default TechnologyLabel;
