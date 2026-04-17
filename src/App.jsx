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
import React, { useState, useMemo, useEffect, Suspense } from "react";
import Palettes, { TextPalettes } from "./data/Palettes";

import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import BackToTop from "./components/BackToTop";

const UtilityButton = React.lazy(() => import("./fragments/UtilityButton"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  const [loaded, setLoaded] = useState(false);
  const [mode, setMode] = useState("dark");
  const [palette, setPalette] = useState(Palettes.find((p) => p.id === "blue"));

  const selectedTextPalette = TextPalettes.find((p) => p.id === mode);

  function getComplementaryColor(hex) {
    hex = hex.replace('#', '');
    const r = 255 - parseInt(hex.substring(0, 2), 16);
    const g = 255 - parseInt(hex.substring(2, 4), 16);
    const b = 255 - parseInt(hex.substring(4, 6), 16);
    return (
      '#' +
      r.toString(16).padStart(2, '0') +
      g.toString(16).padStart(2, '0') +
      b.toString(16).padStart(2, '0')
    );
  }

  useEffect(() => {
    let meta = document.querySelector("meta[name='theme-color']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = palette.main;
  }, [palette]);

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
          [createTheme().breakpoints.up("xs")]: { fontSize: "1rem" },
          [createTheme().breakpoints.up("sm")]: { fontSize: "1rem" },
          [createTheme().breakpoints.up("md")]: { fontSize: "1rem" },
          [createTheme().breakpoints.up("lg")]: { fontSize: "1.2rem" },
        },
        tinySpan: {
          [createTheme().breakpoints.up("xs")]: { fontSize: ".8rem" },
        },
        p: {
          [createTheme().breakpoints.up("xs")]: { fontSize: "1rem" },
          [createTheme().breakpoints.up("sm")]: { fontSize: "1rem" },
          [createTheme().breakpoints.up("md")]: { fontSize: "1rem" },
          [createTheme().breakpoints.up("lg")]: { fontSize: "1.2rem" },
        },
        h1: {
          [createTheme().breakpoints.up("xs")]: { fontSize: "4rem" },
          [createTheme().breakpoints.up("sm")]: { fontSize: "5rem" },
          [createTheme().breakpoints.up("md")]: { fontSize: "5.5rem" },
          [createTheme().breakpoints.up("lg")]: { fontSize: "7rem" },
        },
        h2: {
          [createTheme().breakpoints.up("xs")]: { fontSize: "1.5rem" },
          [createTheme().breakpoints.up("sm")]: { fontSize: "1.5rem" },
          [createTheme().breakpoints.up("md")]: { fontSize: "2rem" },
        },
      },
    });
    return createdTheme;
  }, [mode, palette, selectedTextPalette]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <CustomCursor />
      <BackToTop />
      <Box sx={{ position: "relative", minHeight: "100dvh" }}>
        <Navbar />
        <Router />
        <Suspense fallback={null}>
          <UtilityButton mode={mode} setMode={setMode} setPalette={setPalette} />
          <Footer />
        </Suspense>
      </Box>
    </ThemeProvider>
  );
}

export default App;
