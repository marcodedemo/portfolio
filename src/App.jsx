import Router from "./router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { MotionConfig } from "framer-motion";
import { useState, useMemo } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CookieConsent from "./components/CookieConsent";

const colors = {
  dark: {
    primary: "#2bb6f6",
    text: { primary: "#ffffff", secondary: "#8f9094" },
    background: { default: "#0d0d1a", paper: "#13131f" },
  },
  light: {
    // ponytail: blu più scuro in chiaro, così il testo bianco sui pulsanti supera il contrasto AA
    primary: "#0270b2",
    text: { primary: "#2d2d4a", secondary: "#62656c" },
    background: { default: "#f0f0f8", paper: "#ffffff" },
  },
};

function read(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function initialMode() {
  const saved = read("theme-mode");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

const { breakpoints } = createTheme();
const responsive = (sizes) =>
  Object.fromEntries(Object.entries(sizes).map(([bp, fontSize]) => [breakpoints.up(bp), { fontSize }]));

function App() {
  const [mode, setMode] = useState(initialMode);
  const [consent, setConsent] = useState(() => read("cookie-consent"));

  const toggleMode = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    try {
      localStorage.setItem("theme-mode", next);
    } catch {
      // storage bloccato: il tema vale solo per questa visita
    }
  };

  const theme = useMemo(() => {
    const c = colors[mode];
    return createTheme({
      palette: {
        mode,
        // MUI sceglie testo chiaro o scuro sui pulsanti per garantire almeno 4,5:1
        contrastThreshold: 4.5,
        primary: { main: c.primary },
        text: c.text,
        background: c.background,
      },
      typography: {
        fontFamily: ["Inter Variable", "Inter", "sans-serif"].join(","),
        span: responsive({ xs: "1rem", lg: "1.2rem" }),
        p: responsive({ xs: "1rem", lg: "1.2rem" }),
        h1: responsive({ xs: "2.6rem", sm: "3.5rem", md: "4.25rem", lg: "5rem" }),
        h2: responsive({ xs: "1.5rem", md: "2rem" }),
      },
      components: {
        MuiTypography: {
          defaultProps: { variantMapping: { p: "p", span: "span" } },
        },
      },
    });
  }, [mode]);

  const primary = theme.palette.primary.main;

  return (
    <ThemeProvider theme={theme}>
      <MotionConfig reducedMotion="user">
        <CssBaseline />
        {consent === "accepted" && <Analytics />}
        {consent === "accepted" && <SpeedInsights />}
        <BackToTop />
        <CookieConsent onConsent={setConsent} />
        <Box sx={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          background: `
            radial-gradient(ellipse 60% 40% at 80% 10%, ${primary}22 0%, transparent 70%),
            radial-gradient(ellipse 50% 35% at 10% 40%, ${primary}15 0%, transparent 70%),
            radial-gradient(ellipse 55% 40% at 75% 75%, ${primary}18 0%, transparent 70%)
          `,
        }} />
        <Box sx={{ position: "relative", zIndex: 1, minHeight: "100dvh" }}>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Router />
          <Footer />
        </Box>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
