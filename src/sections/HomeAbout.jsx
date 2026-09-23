import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import AnimateOnView from "../common/AnimateOnView";
import { useLang } from "../context/LanguageContext";
import portrait from "../assets/marco-de-demo.webp";

function HomeAbout() {
  const theme = useTheme();
  const { t } = useLang();
  const primary = theme.palette.primary.main;

  return (
    <Box
      component="section"
      aria-labelledby="about-title"
      id="about"
      sx={{ py: { xs: 8, md: 10 }, scrollMarginTop: "80px" }}
    >
      <Container maxWidth="xl">
        <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>

          {/* Etichetta e titolo su tutta la larghezza */}
          <AnimateOnView variant="fade-right">
            <Typography
              sx={{
                color: primary,
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              {t.about.label}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.06}>
            <Typography id="about-title" variant="h2" sx={{ fontWeight: 700, mb: { xs: 4, md: 5 } }}>
              {t.about.title}
            </Typography>
          </AnimateOnView>

          {/* Sotto: foto a sinistra, testo a destra (su mobile foto sopra il testo) */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "280px minmax(0, 1fr)" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
            }}
          >
            <AnimateOnView variant="fade-left" delay={0.1}>
              <Box
                component="img"
                src={portrait}
                width={600}
                height={800}
                alt={t.about.photoAlt}
                loading="lazy"
                decoding="async"
                sx={{
                  display: "block",
                  width: "100%",
                  maxWidth: { xs: 220, md: "none" },
                  height: "auto",
                  aspectRatio: "3 / 4",
                  objectFit: "cover",
                  borderRadius: "20px",
                  border: `1px solid ${primary}40`,
                  boxShadow: `0 20px 60px ${primary}20`,
                }}
              />
            </AnimateOnView>

            <AnimateOnView variant="fade-right" delay={0.14}>
              <Typography
                variant="p"
                sx={{
                  display: "block",
                  color: theme.palette.mode === "dark" ? theme.palette.text.secondary : theme.palette.text.primary,
                  lineHeight: 1.85,
                }}
              >
                {t.about.intro}{" "}
                <Typography component="span" sx={{ color: primary, fontWeight: 600 }}>
                  {t.about.body1}
                </Typography>
                {" "}{t.about.body2}
                <br /><br />
                {t.about.body3}
                <br /><br />
                <Typography component="span" sx={{ color: primary, fontWeight: 600 }}>
                  {t.about.body4}
                </Typography>
                {" "}{t.about.body5}
              </Typography>
            </AnimateOnView>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default HomeAbout;
