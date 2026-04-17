import { Box, Typography, Button, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

function NotFound() {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blobs */}
      <div className="hero-blob hero-blob-1" style={{ background: primary, opacity: 0.12 }} />
      <div className="hero-blob hero-blob-3" style={{ background: primary, opacity: 0.08 }} />

      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* 404 numero grande */}
          <motion.div variants={itemVariants}>
            <Typography
              sx={{
                fontSize: { xs: "7rem", md: "11rem" },
                fontWeight: 800,
                lineHeight: 1,
                color: primary,
                opacity: 0.15,
                letterSpacing: "-4px",
                userSelect: "none",
              }}
            >
              404
            </Typography>
          </motion.div>

          {/* Logo */}
          <motion.div variants={itemVariants} style={{ marginTop: "-32px" }}>
            <Typography
              sx={{
                fontFamily: "'Inter', 'Roboto', sans-serif",
                fontSize: { xs: "2rem", md: "2.8rem" },
                fontWeight: 700,
                color: primary,
                letterSpacing: "-1px",
                mb: 2,
              }}
            >
              {"{ M }"}
            </Typography>
          </motion.div>

          {/* Titolo */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{ fontWeight: 700, mb: 2, fontSize: { xs: "1.4rem", md: "1.8rem" } }}
            >
              Pagina non trovata
            </Typography>
          </motion.div>

          {/* Descrizione */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.7,
                mb: 5,
                maxWidth: "380px",
                mx: "auto",
              }}
            >
              La pagina che cerchi non esiste o è stata spostata.
              Torna alla home e riparti da lì.
            </Typography>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<ArrowBackIcon />}
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: "12px",
                  boxShadow: `0 4px 24px ${primary}45`,
                  "&:hover": { boxShadow: `0 6px 32px ${primary}65` },
                  transition: "box-shadow 0.2s",
                }}
              >
                Torna alla home
              </Button>
            </motion.div>
          </motion.div>

        </motion.div>
      </Container>
    </Box>
  );
}

export default NotFound;
