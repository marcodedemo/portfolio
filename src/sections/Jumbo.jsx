import { Box, Typography, Container, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import SocialButton from "../common/SocialButton";
import { useLang } from "../context/LanguageContext";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
};

function Jumbo() {
  const theme = useTheme();
  const { t } = useLang();
  const primary = theme.palette.primary.main;
  // Stile unico per sottotitolo e presentazione
  const leadSx = {
    color: theme.palette.text.secondary,
    fontWeight: 500,
    letterSpacing: "-0.2px",
    fontSize: { xs: "1.1rem", md: "1.25rem" },
    lineHeight: 1.55,
    maxWidth: "600px",
    textWrap: "pretty",
  };

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 3, md: 4 },
        pb: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
        minHeight: { md: "calc(100vh - 80px)" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
<Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "800",
                  lineHeight: 1.02,
                  letterSpacing: "-0.02em",
                  color: theme.palette.text.primary,
                  textWrap: "balance",
                }}
              >
                {t.jumbo.headline}{" "}
                {/* Su desktop la parte blu va a capo, con righe bilanciate */}
                <Box component="span" sx={{ color: primary, display: { md: "block" }, textWrap: { md: "balance" } }}>
                  {t.jumbo.headlineAccent}
                </Box>
              </Typography>
            </motion.div>

            {/* Sottotitolo statico */}
            <motion.div variants={itemVariants} style={{ marginTop: theme.spacing(3) }}>
              <Typography component="p" sx={leadSx}>
                {t.jumbo.subtitle}
              </Typography>
            </motion.div>

            {/* Descrizione breve */}
            <motion.div variants={itemVariants} style={{ marginTop: theme.spacing(2.5) }}>
              <Typography component="p" sx={leadSx}>
                {t.jumbo.intro}{" "}
                <strong style={{ color: theme.palette.text.primary }}>Marco De Demo</strong>,{" "}
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
                  href="#portfolio"
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
              <Typography
                component="p"
                sx={{ mt: 1.5, fontSize: "0.95rem", color: theme.palette.text.secondary, maxWidth: "600px", textWrap: "pretty" }}
              >
                {t.jumbo.ctaNote}
              </Typography>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} style={{ marginTop: theme.spacing(4) }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                <SocialButton text="WhatsApp" />
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
