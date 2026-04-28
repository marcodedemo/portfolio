import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { Container, Link, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll, useSpring } from "framer-motion";

import Logo from "../common/Logo";
import Links from "../data/Links";
import { useLang } from "../context/LanguageContext";

import { useTheme } from "@mui/material/styles";

function Navbar() {
  const theme = useTheme();
  const { lang, toggleLang, t } = useLang();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = globalThis.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 100);
      lastY = y;
    };
    globalThis.addEventListener("scroll", onScroll, { passive: true });
    return () => globalThis.removeEventListener("scroll", onScroll);
  }, []);

  // Active link via IntersectionObserver
  useEffect(() => {
    const sectionIds = Links.map((l) => l.id);
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const bgColor =
    theme.palette.mode === "dark"
      ? scrolled ? "rgba(43,43,43,0.75)" : "rgba(43,43,43,0)"
      : scrolled ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0)";

  const primary = theme.palette.primary.main;

  const navLabels = {
    home: t.nav.home,
    about: t.nav.whoAmI,
    services: t.nav.services,
    "how-i-work": t.nav.howIWork,
    contacts: t.nav.contacts,
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.mode === "dark" ? "#1a1a1a" : "#ffffff",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          py: 2.5,
          borderBottom: `1px solid ${
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.07)"
              : "rgba(0,0,0,0.07)"
          }`,
        }}
      >
        <Logo fontSize={26} />
        <IconButton
          onClick={handleDrawerClose}
          sx={{
            color: theme.palette.text.secondary,
            border: "1px solid",
            borderColor:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
            borderRadius: "10px",
            width: 38,
            height: 38,
          }}
        >
          <FontAwesomeIcon icon={faXmark} size="sm" />
        </IconButton>
      </Box>

      {/* Nav links */}
      <Box sx={{ flex: 1, px: 2, py: 3, display: "flex", flexDirection: "column", gap: 0.5 }}>
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
                href={`#${link.id}`}
                onClick={handleDrawerClose}
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
                  "&:hover": {
                    backgroundColor: `${primary}10`,
                    color: primary,
                  },
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
                    backgroundColor: isActive ? `${primary}20` : (
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.05)"
                        : "rgba(0,0,0,0.04)"
                    ),
                    color: isActive ? primary : theme.palette.text.secondary,
                    flexShrink: 0,
                    fontSize: "0.85rem",
                    transition: "background-color 0.2s, color 0.2s",
                  }}
                >
                  {link.icon}
                </Box>
                {navLabels[link.id] || link.label}
              </Link>
            </motion.div>
          );
        })}
      </Box>

      {/* Footer: language toggle */}
      <Box
        sx={{
          px: 3,
          py: 3,
          borderTop: `1px solid ${
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.07)"
              : "rgba(0,0,0,0.07)"
          }`,
        }}
      >
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
          Language
        </Typography>
        <Box
          onClick={toggleLang}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0,
            borderRadius: "10px",
            border: "1px solid",
            borderColor:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
            overflow: "hidden",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          {["IT", "EN"].map((l) => {
            const active = lang === l.toLowerCase();
            return (
              <Box
                key={l}
                component="span"
                sx={{
                  px: 2.5,
                  py: 1,
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  backgroundColor: active ? primary : "transparent",
                  color: active ? "#fff" : theme.palette.text.secondary,
                  transition: "background-color 0.2s, color 0.2s",
                }}
              >
                {l}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );

  const container =
    undefined;

  return (
    <>
      <Box id="home" sx={{ height: 0 }} />
      <CssBaseline />

      <motion.div
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1100 }}
      >
          {/* Scroll progress bar */}
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
              backgroundColor: bgColor,
              backdropFilter: scrolled ? "blur(14px)" : "none",
              WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
              borderBottom: scrolled
                ? `1px solid ${
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.08)"
                  }`
                : "1px solid transparent",
              transition: "background-color 0.3s, backdrop-filter 0.3s, border-color 0.3s",
            }}
          >
            <Toolbar sx={{ height: "80px" }}>
              <Container
                maxWidth="xl"
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Mobile */}
                <Box
                  sx={{
                    display: { xs: "flex", sm: "none" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Logo fontSize={32} />
                  <IconButton
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    sx={{
                      color: theme.palette.text.primary,
                      border: "1px solid",
                      borderColor:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.12)"
                          : "rgba(0,0,0,0.12)",
                      borderRadius: "10px",
                      width: 40,
                      height: 40,
                    }}
                  >
                    <FontAwesomeIcon icon={faBars} size="sm" />
                  </IconButton>
                </Box>

                {/* Desktop */}
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Logo fontSize={32} />
                  <Box sx={{ display: "flex", alignItems: "center", gap: theme.spacing(3) }}>
                    {Links.map((link) => (
                      <Link
                        key={link.id}
                        href={`#${link.id}`}
                        sx={{
                          position: "relative",
                          textDecoration: "none",
                          color: activeSection === link.id ? primary : theme.palette.text.primary,
                          fontWeight: activeSection === link.id ? 700 : 400,
                          transition: "color 0.2s",
                          "&:hover": { color: primary },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: "-4px",
                            left: 0,
                            width: activeSection === link.id ? "100%" : "0%",
                            height: "2px",
                            backgroundColor: primary,
                            transition: "width 0.3s ease",
                            borderRadius: "2px",
                          },
                          "&:hover::after": { width: "100%" },
                        }}
                      >
                        {navLabels[link.id] || link.label}
                      </Link>
                    ))}

                    {/* Language toggle */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Box
                        onClick={toggleLang}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          px: 1.2,
                          py: 0.5,
                          borderRadius: "8px",
                          border: "1px solid",
                          borderColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
                          cursor: "pointer",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: theme.palette.text.secondary,
                          letterSpacing: "0.05em",
                          transition: "border-color 0.2s, color 0.2s",
                          "&:hover": { borderColor: primary, color: primary },
                          userSelect: "none",
                        }}
                      >
                        <Box component="span" sx={{ color: lang === "it" ? primary : "inherit", fontWeight: lang === "it" ? 800 : 500 }}>IT</Box>
                        <Box component="span" sx={{ opacity: 0.3 }}>/</Box>
                        <Box component="span" sx={{ color: lang === "en" ? primary : "inherit", fontWeight: lang === "en" ? 800 : 500 }}>EN</Box>
                      </Box>
                    </motion.div>
                  </Box>
                </Box>
              </Container>
            </Toolbar>
          </AppBar>
        </motion.div>

        {/* Spacer per compensare la navbar fixed */}
        <Box sx={{ height: "80px", width: "100%", flexShrink: 0 }} />

        <nav>
          <Drawer
            container={container}
            anchor="right"
            variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerClose}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "80vw",
                maxWidth: "320px",
                border: "none",
              },
              "& .MuiBackdrop-root": {
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(0,0,0,0.4)",
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>

    </>
  );
}

export default Navbar;
