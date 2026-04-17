import { Box, Typography, Container, Divider, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import Logo from "../common/Logo";
import Links from "../data/Links";
import { useLang } from "../context/LanguageContext";

const socials = [
  {
    icon: <GitHubIcon sx={{ fontSize: 20 }} />,
    href: "https://github.com/marcodedemo",
    label: "GitHub",
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 20 }} />,
    href: "https://www.linkedin.com/in/marcodedemo/",
    label: "LinkedIn",
  },
  {
    icon: <EmailIcon sx={{ fontSize: 20 }} />,
    href: "mailto:marco.dedemo@gmail.com",
    label: "Email",
  },
];

function Footer() {
  const theme = useTheme();
  const { t } = useLang();
  const primary = theme.palette.primary.main;
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        borderTop: "1px solid",
        borderColor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.06)"
            : "rgba(0,0,0,0.06)",
      }}
    >
      <Container maxWidth="xl">
        <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>
          {/* Top row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 4,
              py: 5,
            }}
          >
            {/* Logo + tagline */}
            <Box>
              <Logo fontSize={28} />
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  mt: 1,
                  fontSize: "0.8rem",
                  maxWidth: "220px",
                  lineHeight: 1.6,
                }}
              >
                {t.footer.tagline.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </Typography>
            </Box>

            {/* Nav links */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: theme.palette.text.secondary,
                  mb: 0.5,
                }}
              >
                {t.footer.navLabel}
              </Typography>
              {Links.map((link) => {
                const navLabels = {
                  Homepage: t.nav.home,
                  WhoAmI: t.nav.whoAmI,
                  Services: t.nav.services,
                  HowIWork: t.nav.howIWork,
                  Contacts: t.nav.contacts,
                };
                return (
                  <Link
                    key={link.id}
                    href={`#${link.id}`}
                    sx={{
                      fontSize: "0.85rem",
                      color: theme.palette.text.secondary,
                      textDecoration: "none",
                      transition: "color 0.2s",
                      "&:hover": { color: primary },
                    }}
                  >
                    {navLabels[link.id] || link.label}
                  </Link>
                );
              })}
            </Box>

            {/* Contatti */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
              <Typography
                sx={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: theme.palette.text.secondary,
                  mb: 0.5,
                }}
              >
                {t.footer.contactLabel}
              </Typography>
              <Link
                href="mailto:marco.dedemo@gmail.com"
                sx={{
                  fontSize: "0.85rem",
                  color: theme.palette.text.secondary,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  "&:hover": { color: primary },
                }}
              >
                marco.dedemo@gmail.com
              </Link>
              <Link
                href="https://www.linkedin.com/in/marcodedemo/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: "0.85rem",
                  color: theme.palette.text.secondary,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  "&:hover": { color: primary },
                }}
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/marcodedemo"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: "0.85rem",
                  color: theme.palette.text.secondary,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  "&:hover": { color: primary },
                }}
              >
                GitHub
              </Link>
            </Box>
          </Box>

          <Divider
            sx={{
              borderColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(0,0,0,0.06)",
            }}
          />

          {/* Bottom row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              py: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.75rem",
                color: theme.palette.text.secondary,
              }}
            >
              © {year} Marco De Demo. {t.footer.copyright}
            </Typography>

            <Typography
              sx={{
                fontSize: "0.75rem",
                color: theme.palette.text.secondary,
              }}
            >
              {t.footer.builtWith}{" "}
              <Typography
                component="span"
                sx={{ color: primary, fontSize: "inherit", fontWeight: 600 }}
              >
                React
              </Typography>{" "}
              &{" "}
              <Typography
                component="span"
                sx={{ color: primary, fontSize: "inherit", fontWeight: 600 }}
              >
                Material UI
              </Typography>
            </Typography>

            {/* Social icons */}
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {socials.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={s.href}
                    target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: "10px",
                      border: "1px solid",
                      borderColor:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.08)"
                          : "rgba(0,0,0,0.08)",
                      color: theme.palette.text.secondary,
                      transition:
                        "border-color 0.2s, color 0.2s, background-color 0.2s",
                      "&:hover": {
                        borderColor: `${primary}60`,
                        color: primary,
                        backgroundColor: `${primary}10`,
                      },
                    }}
                  >
                    {s.icon}
                  </Link>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
