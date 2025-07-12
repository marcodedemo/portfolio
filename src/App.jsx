import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import Router from "./router";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState, useMemo, useEffect } from "react";
import Palettes, { TextPalettes } from "./data/Palettes";

import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css";

const UtilityButton = React.lazy(() => import("./fragments/UtilityButton"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  // Controllo se nella cache ho il darkMode, altrimenti lo setto a dark
  const [mode, setMode] = useState("dark");

  // Colore primario di default
  const [palette, setPalette] = useState(Palettes.find((p) => p.id === "blue"));

  // Selezione della palette del testo
  const selectedTextPalette = TextPalettes.find((p) => p.id === "dark");

  // Seleziona il colore secondario complementare al primario
  function getComplementaryColor(hex) {
  hex = hex.replace('#', '');

  // Converti in RGB
  const r = 255 - parseInt(hex.substring(0, 2), 16);
  const g = 255 - parseInt(hex.substring(2, 4), 16);
  const b = 255 - parseInt(hex.substring(4, 6), 16);

  // Ritorna in HEX
  return (
    '#' +
    r.toString(16).padStart(2, '0') +
    g.toString(16).padStart(2, '0') +
    b.toString(16).padStart(2, '0')
  );
}

  // Definizione del thema
  const theme = useMemo(() => {

    const secondaryMain = getComplementaryColor(palette.main);
    let createdTheme = createTheme({
      spacing: 8,
      palette: {
        mode: mode,
        primary: {
          main: palette.main,
          dark: palette.dark,
          light: palette.light,
        },
        secondary: {
          main: secondaryMain,
        dark: getComplementaryColor(palette.dark),
        light: getComplementaryColor(palette.light),
        },
        text: {
          primary: selectedTextPalette.primary,
          secondary: selectedTextPalette.secondary,
        },
      },
      typography: {
        fontFamily: ["Roboto"].join(","),

        span: {
          [createTheme().breakpoints.up("xs")]: {
            fontSize: "1rem",
          },
          [createTheme().breakpoints.up("sm")]: {
            fontSize: "1rem",
          },
          [createTheme().breakpoints.up("md")]: {
            fontSize: "1rem",
          },
          [createTheme().breakpoints.up("lg")]: {
            fontSize: "1.2rem",
          },
        },

        tinySpan: {
          [createTheme().breakpoints.up("xs")]: {
            fontSize: ".8rem",
          },
        },

        p: {
          [createTheme().breakpoints.up("xs")]: {
            fontSize: "1rem",
          },
          [createTheme().breakpoints.up("sm")]: {
            fontSize: "1rem",
          },
          [createTheme().breakpoints.up("md")]: {
            fontSize: "1rem",
          },
          [createTheme().breakpoints.up("lg")]: {
            fontSize: "1.2rem",
          },
        },

        h1: {
          [createTheme().breakpoints.up("xs")]: {
            fontSize: "4rem",
          },
          [createTheme().breakpoints.up("sm")]: {
            fontSize: "5rem",
          },
          [createTheme().breakpoints.up("md")]: {
            fontSize: "5.5rem",
          },
          [createTheme().breakpoints.up("lg")]: {
            fontSize: "7rem",
          },
        },

        h2: {
          [createTheme().breakpoints.up("xs")]: {
            fontSize: "1.5rem",
          },
          [createTheme().breakpoints.up("sm")]: {
            fontSize: "1.5rem",
          },
          [createTheme().breakpoints.up("md")]: {
            fontSize: "2rem",
          },
        },
      },
    });

    return createdTheme;
  }, [mode, palette, selectedTextPalette]);

  useEffect(() => {
    AOS.refresh();
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: "relative", minHeight: "100dvh" }}>
        <Navbar />
        <Router />
        <UtilityButton mode={mode} setMode={setMode} setPalette={setPalette} />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
