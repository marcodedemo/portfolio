import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import AnimateOnView from "../common/AnimateOnView";
import ContactForm from "../components/ContactForm";
import { useLang } from "../context/LanguageContext";

const quickLinkIcons = [
  <EmailIcon key="email" sx={{ fontSize: 22 }} />,
  <LinkedInIcon key="linkedin" sx={{ fontSize: 22 }} />,
  <ContactPageIcon key="cv" sx={{ fontSize: 22 }} />,
];
const quickLinkHrefs = [
  "mailto:marco.dedemo@gmail.com",
  "https://www.linkedin.com/in/marcodedemo/",
  "https://drive.google.com/file/d/1bAUGRwo0uvQSR5I-21XyCH8Vm2uKdyWA/view?usp=drive_link",
];
const quickLinkAccents = ["#38BDF8", "#0A66C2", "#A78BFA"];

function Contacts() {
  const theme = useTheme();
  const { t } = useLang();
  const primary = theme.palette.primary.main;

  const quickLinks = t.contacts.quickLinks.map((link, i) => ({
    icon: quickLinkIcons[i],
    label: link.label,
    value: link.value,
    href: quickLinkHrefs[i],
    accent: quickLinkAccents[i],
  }));

  return (
    <Box
      component="section"
      aria-label="Contatti"
      sx={{ paddingTop: theme.spacing(6), paddingBottom: theme.spacing(12), scrollMarginTop: "80px" }}
      id="contacts"
    >
      <Container maxWidth="xl">
        <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>

          {/* Label */}
          <AnimateOnView variant="fade-up">
            <Typography
              sx={{
                color: primary,
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                display: "block",
                mb: 1,
              }}
            >
              {t.contacts.label}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-up" delay={0.08}>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.2 }}>
              {t.contacts.title}{" "}
              <Typography
                component="span"
                variant="h2"
                sx={{ color: primary, fontWeight: 800, lineHeight: "inherit" }}
              >
                {t.contacts.titleAccent}
              </Typography>
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-up" delay={0.14}>
            <Typography
              variant="p"
              sx={{
                display: "block",
                color: theme.palette.text.secondary,
                maxWidth: "520px",
                lineHeight: 1.75,
                mb: 6,
              }}
            >
              {t.contacts.subtitle}
            </Typography>
          </AnimateOnView>

          {/* Layout: form a sinistra, link a destra */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1fr 340px" },
              gap: 4,
              alignItems: "start",
            }}
          >
            {/* Form */}
            <AnimateOnView variant="fade-right" delay={0.1}>
              <ContactForm />
            </AnimateOnView>

            {/* Quick links sidebar */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {quickLinks.map((opt, i) => (
                <AnimateOnView key={opt.label} variant="fade-left" delay={0.1 + i * 0.08}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <Box
                      component="a"
                      href={opt.href}
                      target={opt.href.startsWith("mailto") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 2.5,
                        borderRadius: "14px",
                        border: "1px solid",
                        borderColor:
                          theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.07)"
                            : "rgba(0,0,0,0.07)",
                        backgroundColor:
                          theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.02)"
                            : "rgba(0,0,0,0.015)",
                        textDecoration: "none",
                        color: "inherit",
                        transition: "border-color 0.25s, box-shadow 0.25s, background-color 0.25s",
                        "&:hover": {
                          borderColor: `${opt.accent}50`,
                          boxShadow: `0 6px 24px ${opt.accent}15`,
                          backgroundColor:
                            theme.palette.mode === "dark"
                              ? `${opt.accent}08`
                              : `${opt.accent}05`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 44,
                          height: 44,
                          borderRadius: "12px",
                          backgroundColor: `${opt.accent}18`,
                          color: opt.accent,
                          flexShrink: 0,
                        }}
                      >
                        {opt.icon}
                      </Box>
                      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                        <Typography
                          sx={{
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            color: theme.palette.text.secondary,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            mb: 0.3,
                          }}
                        >
                          {opt.label}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {opt.value}
                        </Typography>
                      </Box>
                      <ArrowForwardIcon sx={{ fontSize: 16, color: opt.accent, flexShrink: 0 }} />
                    </Box>
                  </motion.div>
                </AnimateOnView>
              ))}

              {/* Availability note */}
              <AnimateOnView variant="fade-left" delay={0.35}>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: "14px",
                    border: `1px solid ${primary}25`,
                    backgroundColor: `${primary}08`,
                    mt: 1,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#34D399",
                        animation: "pulse 2s infinite",
                        "@keyframes pulse": {
                          "0%, 100%": { opacity: 1 },
                          "50%": { opacity: 0.3 },
                        },
                      }}
                    />
                    <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#34D399" }}>
                      {t.contacts.available}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary, fontSize: "0.78rem", lineHeight: 1.6 }}
                  >
                    {t.contacts.availableDesc}
                  </Typography>
                </Box>
              </AnimateOnView>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default Contacts;
