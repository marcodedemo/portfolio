import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimateOnView from "../common/AnimateOnView";
import { useLang } from "../context/LanguageContext";

import SearchIcon from "@mui/icons-material/Search";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const stepNumbers = ["01", "02", "03", "04"];
const stepColors = ["#38BDF8", "#A78BFA", "#34D399", "#FB923C"];
const stepIcons = [
  <SearchIcon sx={{ fontSize: 28 }} />,
  <BrushIcon sx={{ fontSize: 28 }} />,
  <CodeIcon sx={{ fontSize: 28 }} />,
  <RocketLaunchIcon sx={{ fontSize: 28 }} />,
];

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, ease: "easeInOut" } },
};

function HowIWork() {
  const theme = useTheme();
  const { t } = useLang();
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-80px" });

  const steps = t.howIWork.steps.map((step, i) => ({
    ...step,
    number: stepNumbers[i],
    icon: stepIcons[i],
    color: stepColors[i],
  }));

  return (
    <Box component="section" aria-label="Come lavoro" sx={{ paddingTop: theme.spacing(6), scrollMarginTop: "80px" }} id="how-i-work">
      <Container maxWidth="xl">
        <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>

          <AnimateOnView variant="fade-right">
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                display: "block",
                mb: 1,
              }}
            >
              {t.howIWork.label}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.06}>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
              {t.howIWork.title}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.12}>
            <Typography
              variant="p"
              sx={{
                display: "block",
                color: theme.palette.text.secondary,
                maxWidth: "520px",
                lineHeight: 1.7,
                mb: { xs: 6, md: 10 },
              }}
            >
              {t.howIWork.subtitle}
            </Typography>
          </AnimateOnView>

          {/* Desktop: steps orizzontali con linea connettore */}
          <Box sx={{ display: { xs: "none", md: "block" }, position: "relative" }}>

            {/* Linea connettore */}
            <Box
              ref={lineRef}
              sx={{
                position: "absolute",
                top: 36,
                left: "12.5%",
                right: "12.5%",
                height: "2px",
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.07)"
                    : "rgba(0,0,0,0.07)",
                zIndex: 0,
              }}
            >
              <motion.div
                variants={lineVariants}
                initial="hidden"
                animate={lineInView ? "visible" : "hidden"}
                style={{
                  height: "100%",
                  background: `linear-gradient(to right, ${steps.map(s => s.color).join(", ")})`,
                  transformOrigin: "left",
                  opacity: 0.5,
                }}
              />
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3 }}>
              {steps.map((step, i) => (
                <AnimateOnView key={step.number} variant="fade-up" delay={i * 0.12}>
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

                    {/* Icona / numero */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Box
                        sx={{
                          width: 72,
                          height: 72,
                          borderRadius: "50%",
                          backgroundColor:
                            theme.palette.mode === "dark" ? "#2b2b2b" : "#ffffff",
                          border: `2px solid ${step.color}50`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: step.color,
                          mb: 3,
                          position: "relative",
                          zIndex: 1,
                          boxShadow: `0 0 0 6px ${
                            theme.palette.mode === "dark" ? "#2b2b2b" : "#ffffff"
                          }`,
                          transition: "border-color 0.3s, box-shadow 0.3s",
                          "&:hover": {
                            borderColor: step.color,
                            boxShadow: `0 0 0 6px ${
                              theme.palette.mode === "dark" ? "#2b2b2b" : "#ffffff"
                            }, 0 0 20px ${step.color}30`,
                          },
                        }}
                      >
                        {step.icon}
                      </Box>
                    </motion.div>

                    <Typography
                      sx={{
                        fontSize: "0.65rem",
                        fontWeight: 800,
                        color: step.color,
                        letterSpacing: "0.15em",
                        mb: 0.8,
                      }}
                    >
                      {step.number}
                    </Typography>

                    <Typography sx={{ fontWeight: 700, fontSize: "1rem", mb: 1.2 }}>
                      {step.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.7,
                        fontSize: "0.83rem",
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </AnimateOnView>
              ))}
            </Box>
          </Box>

          {/* Mobile: steps verticali */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: 3 }}>
            {steps.map((step, i) => (
              <AnimateOnView key={step.number} variant="fade-up" delay={i * 0.1}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2.5,
                    p: 3,
                    borderRadius: "16px",
                    border: "1px solid",
                    borderColor:
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.06)",
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.02)"
                        : "rgba(0,0,0,0.015)",
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "14px",
                      backgroundColor: `${step.color}18`,
                      border: `1px solid ${step.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: step.color,
                      flexShrink: 0,
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.65rem",
                        fontWeight: 800,
                        color: step.color,
                        letterSpacing: "0.12em",
                        mb: 0.4,
                      }}
                    >
                      {step.number}
                    </Typography>
                    <Typography sx={{ fontWeight: 700, mb: 0.6 }}>
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary, lineHeight: 1.65 }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              </AnimateOnView>
            ))}
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default HowIWork;
