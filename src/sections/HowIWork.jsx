import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import AnimateOnView from "../common/AnimateOnView";
import { useLang } from "../context/LanguageContext";

const stepIcons = [SearchIcon, BrushIcon, CodeIcon, RocketLaunchIcon];

function HowIWork() {
  const theme = useTheme();
  const { t } = useLang();
  const primary = theme.palette.primary.main;
  const border = theme.palette.mode === "dark" ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  return (
    <Box
      component="section"
      aria-labelledby="how-i-work-title"
      id="how-i-work"
      sx={{ py: { xs: 8, md: 10 }, scrollMarginTop: "80px" }}
    >
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
                mb: 1,
              }}
            >
              {t.howIWork.label}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.06}>
            <Typography id="how-i-work-title" variant="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
              {t.howIWork.title}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.12}>
            <Typography
              variant="p"
              sx={{ display: "block", color: theme.palette.text.secondary, maxWidth: "520px", lineHeight: 1.7, mb: 6 }}
            >
              {t.howIWork.subtitle}
            </Typography>
          </AnimateOnView>

          <Box
            component="ol"
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
              gap: 2.5,
            }}
          >
            {t.howIWork.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <AnimateOnView key={step.title} as="li" variant="fade-up" delay={i * 0.1}>
                  <Box
                    sx={{
                      height: "100%",
                      p: 3,
                      borderRadius: "16px",
                      border: `1px solid ${border}`,
                      backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.015)",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: primary,
                          backgroundColor: `${primary}18`,
                        }}
                      >
                        <Icon sx={{ fontSize: 24 }} />
                      </Box>
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: primary, letterSpacing: "0.12em" }}>
                        {String(i + 1).padStart(2, "0")}
                      </Typography>
                    </Box>
                    <Typography component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.65 }}>
                      {step.description}
                    </Typography>
                  </Box>
                </AnimateOnView>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HowIWork;
