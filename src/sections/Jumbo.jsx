import { Box, Typography, Container, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import SocialButton from "../common/SocialButton";
import { useLang } from "../context/LanguageContext";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

function Jumbo() {
  const theme = useTheme();
  const { t } = useLang();
  const is900Screen = useMediaQuery("(min-width:900px)");
  const primary = theme.palette.primary.main;

  return (
    <Box
      sx={{
        paddingTop: theme.spacing(4),
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "92vh", md: "88vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>

            {/* Tag line */}
            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.5,
                  py: 0.6,
                  borderRadius: "100px",
                  border: `1px solid ${primary}50`,
                  backgroundColor: `${primary}12`,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: primary,
                    animation: "pulse 2s infinite",
                    "@keyframes pulse": {
                      "0%, 100%": { opacity: 1 },
                      "50%": { opacity: 0.4 },
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: primary,
                    letterSpacing: "0.05em",
                  }}
                >
                  {t.jumbo.available}
                </Typography>
              </Box>
            </motion.div>

            {/* Headline principale */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "800",
                  lineHeight: "95%",
                  letterSpacing: "-1px",
                  color: theme.palette.text.primary,
                }}
              >
                {t.jumbo.headline1}{" "}
                <br style={{ display: is900Screen ? "none" : "block" }} />
                {t.jumbo.headline2}{" "}
                <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    color: primary,
                    fontWeight: "inherit",
                    lineHeight: "inherit",
                    letterSpacing: "inherit",
                  }}
                >
                  {t.jumbo.headline3}
                  <br />
                  {t.jumbo.headline4}
                </Typography>
              </Typography>
            </motion.div>

            {/* Sottotitolo con typewriter */}
            <motion.div variants={itemVariants} style={{ marginTop: theme.spacing(3) }}>
              <Box sx={{ maxWidth: { xs: "none", sm: "75vw", md: "60vw" } }}>
                <Typography
                  variant="h2"
                  sx={{
                    color:
                      theme.palette.mode === "dark"
                        ? theme.palette.text.secondary
                        : theme.palette.text.primary,
                    fontWeight: "500",
                    display: "inline",
                  }}
                >
                  {t.jumbo.typewriterPrefix}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: primary,
                    fontWeight: "700",
                    display: "inline",
                  }}
                >
                  <TypeAnimation
                    key={t.jumbo.typewriterPrefix}
                    sequence={t.jumbo.typewriter}
                    speed={52}
                    repeat={Infinity}
                    style={{ display: "inline" }}
                  />
                </Typography>
              </Box>
            </motion.div>

            {/* Descrizione breve */}
            <motion.div variants={itemVariants} style={{ marginTop: theme.spacing(2.5) }}>
              <Typography
                variant="p"
                sx={{
                  display: "block",
                  color: theme.palette.text.secondary,
                  maxWidth: "520px",
                  lineHeight: 1.7,
                }}
              >
                Sono <strong style={{ color: theme.palette.text.primary }}>Marco De Demo</strong>,{" "}
                {t.jumbo.description}
              </Typography>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} style={{ marginTop: theme.spacing(4) }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  href="#contacts"
                  sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    px: 3,
                    py: 1.4,
                    borderRadius: "10px",
                    boxShadow: `0 4px 24px ${primary}50`,
                    "&:hover": {
                      boxShadow: `0 6px 32px ${primary}70`,
                      transform: "translateY(-1px)",
                    },
                    transition: "all 0.2s",
                  }}
                >
                  {t.jumbo.cta1}
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  href="#services"
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    px: 3,
                    py: 1.4,
                    borderRadius: "10px",
                    borderColor:
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(0,0,0,0.15)",
                    "&:hover": {
                      borderColor: primary,
                      color: primary,
                      backgroundColor: `${primary}10`,
                    },
                    transition: "all 0.2s",
                  }}
                >
                  {t.jumbo.cta2}
                </Button>
              </Box>
            </motion.div>

            {/* Social links secondari */}
            <motion.div variants={itemVariants} style={{ marginTop: theme.spacing(4) }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                <SocialButton text="Github" />
                <SocialButton text="LinkedIn" />
              </Box>
            </motion.div>

          </Box>
        </motion.div>
      </Container>

    </Box>
  );
}

export default Jumbo;
