import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { ButtonBase, Container, Link, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme, alpha } from "@mui/material/styles";

import Logo from "../common/Logo";
import Links from "../data/Links";
import { useLang } from "../context/LanguageContext";

function Navbar({ mode, toggleMode }) {
  const theme = useTheme();
  const { lang, toggleLang, t } = useLang();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Nasconde la navbar scorrendo verso il basso, la mostra verso l'alto
  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 100);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Link attivo in base alla sezione visibile
  useEffect(() => {
    const observers = Links.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  const primary = theme.palette.primary.main;
  const border = theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)";
  const divider = theme.palette.mode === "dark" ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  const squareButton = {
    color: theme.palette.text.primary,
    border: "1px solid",
    borderColor: border,
    borderRadius: "10px",
    width: 40,
    height: 40,
    "&:hover": { color: primary, borderColor: primary },
  };

  const themeButton = (
    <IconButton
      onClick={toggleMode}
      aria-label={mode === "dark" ? t.a11y.toLight : t.a11y.toDark}
      sx={squareButton}
    >
      {mode === "dark" ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
    </IconButton>
  );

  const langButton = (
    <ButtonBase
      onClick={toggleLang}
      aria-label={t.a11y.switchLanguage}
      sx={{
        height: 40,
        px: 1.5,
        gap: 0.5,
        borderRadius: "10px",
        border: "1px solid",
        borderColor: border,
        fontSize: "0.8rem",
        fontWeight: 700,
        letterSpacing: "0.05em",
        color: theme.palette.text.secondary,
        "&:hover": { borderColor: primary },
      }}
    >
      <Box component="span" sx={{ color: lang === "it" ? primary : "inherit" }}>IT</Box>
      <Box component="span" sx={{ opacity: 0.4 }}>/</Box>
      <Box component="span" sx={{ color: lang === "en" ? primary : "inherit" }}>EN</Box>
    </ButtonBase>
  );

  const drawer = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column", backgroundColor: theme.palette.background.default }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          py: 2.5,
          borderBottom: `1px solid ${divider}`,
        }}
      >
        <Logo fontSize={26} />
        <IconButton aria-label={t.a11y.closeMenu} onClick={closeDrawer} sx={squareButton}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box component="nav" aria-label={t.a11y.mainNav} sx={{ flex: 1, px: 2, py: 3, display: "flex", flexDirection: "column", gap: 0.5 }}>
        {Links.map((link, i) => {
          const isActive = activeSection === link.id;
          return (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
            >
              <Link
                href={`/#${link.id}`}
                onClick={closeDrawer}
                aria-current={isActive ? "true" : undefined}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  px: 2,
                  py: 1.6,
                  borderRadius: "12px",
                  textDecoration: "none",
                  color: isActive ? primary : theme.palette.text.primary,
                  fontWeight: isActive ? 700 : 500,
                  fontSize: "1rem",
                  backgroundColor: isActive ? `${primary}12` : "transparent",
                  transition: "background-color 0.2s, color 0.2s",
                  "&:hover": { backgroundColor: `${primary}10`, color: primary },
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: isActive
                      ? `${primary}20`
                      : theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                    color: isActive ? primary : theme.palette.text.secondary,
                    flexShrink: 0,
                  }}
                >
                  {link.icon}
                </Box>
                {t.nav[link.navKey]}
              </Link>
            </motion.div>
          );
        })}
      </Box>

      <Box sx={{ px: 3, py: 3, borderTop: `1px solid ${divider}` }}>
        <Typography
          sx={{
            fontSize: "0.65rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: theme.palette.text.secondary,
            mb: 1.5,
          }}
        >
          {t.a11y.language}
        </Typography>
        <Box sx={{ display: "flex", gap: 1.5 }}>
          {langButton}
          {themeButton}
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Box id="home" sx={{ height: 0 }} />

      <motion.div
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1100 }}
      >
        {/* Barra di avanzamento scroll */}
        <motion.div
          style={{
            scaleX,
            height: "3px",
            background: primary,
            transformOrigin: "left",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1200,
          }}
        />

        <AppBar
          component="div"
          position="static"
          elevation={0}
          sx={{
            backgroundColor: bgColor(theme, scrolled),
            backdropFilter: scrolled ? "blur(14px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
            borderBottom: `1px solid ${scrolled ? divider : "transparent"}`,
            transition: "background-color 0.3s, backdrop-filter 0.3s, border-color 0.3s",
          }}
        >
          <Toolbar sx={{ height: "80px" }}>
            <Container
              maxWidth="xl"
              sx={{ height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <Link href="/" aria-label="Marco De Demo, home" sx={{ textDecoration: "none" }}>
                <Logo fontSize={32} />
              </Link>

              {/* Mobile */}
              <IconButton
                aria-label={t.a11y.openMenu}
                aria-expanded={drawerOpen}
                onClick={() => setDrawerOpen(true)}
                sx={{ ...squareButton, display: { xs: "inline-flex", md: "none" } }}
              >
                <MenuIcon fontSize="small" />
              </IconButton>

              {/* Desktop */}
              <Box
                component="nav"
                aria-label={t.a11y.mainNav}
                sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}
              >
                {Links.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <Link
                      key={link.id}
                      href={`/#${link.id}`}
                      aria-current={isActive ? "true" : undefined}
                      sx={{
                        position: "relative",
                        textDecoration: "none",
                        color: isActive ? primary : theme.palette.text.primary,
                        fontWeight: isActive ? 700 : 400,
                        transition: "color 0.2s",
                        "&:hover": { color: primary },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: "-4px",
                          left: 0,
                          width: isActive ? "100%" : "0%",
                          height: "2px",
                          backgroundColor: primary,
                          transition: "width 0.3s ease",
                          borderRadius: "2px",
                        },
                        "&:hover::after": { width: "100%" },
                      }}
                    >
                      {t.nav[link.navKey]}
                    </Link>
                  );
                })}
                <Box sx={{ display: "flex", gap: 1 }}>
                  {langButton}
                  {themeButton}
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* Spazio per compensare la navbar fissa */}
      <Box sx={{ height: "80px", width: "100%", flexShrink: 0 }} />

      <Drawer
        anchor="right"
        variant="temporary"
        open={drawerOpen}
        onClose={closeDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "80vw", maxWidth: "320px", border: "none" },
          "& .MuiBackdrop-root": { backdropFilter: "blur(4px)", backgroundColor: "rgba(0,0,0,0.4)" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

function bgColor(theme, scrolled) {
  return alpha(theme.palette.background.default, scrolled ? 0.75 : 0);
}

export default Navbar;
