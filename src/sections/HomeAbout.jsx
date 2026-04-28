import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import AnimateOnView from "../common/AnimateOnView";
import { useLang } from "../context/LanguageContext";

function HomeAbout() {
  const theme = useTheme();
  const { t } = useLang();
  const primary = theme.palette.primary.main;

  return (
    <Box component="section" aria-label="Chi sono" sx={{ pt: { xs: theme.spacing(6), md: 0 }, pb: { xs: theme.spacing(8), md: theme.spacing(10) }, scrollMarginTop: "80px" }} id="about">
      <Container maxWidth="xl">
        <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>

          <AnimateOnView variant="fade-right">
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
              {t.about.label}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.06}>
            <Typography variant="h2" sx={{ fontWeight: "700", pb: 3 }}>
              {t.about.title}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.1}>
            <Typography
              variant="p"
              sx={{
                display: "block",
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.text.secondary
                    : theme.palette.text.primary,
                lineHeight: 1.85,
                maxWidth: "600px",
              }}
            >
              {t.about.intro}{" "}
              <Typography component="span" sx={{ color: primary, fontWeight: 600 }}>
                {t.about.body1}
              </Typography>
              , {t.about.body2}
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
      </Container>
    </Box>
  );
}

export default HomeAbout;
