import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";

function CookieConsent({ onConsent }) {
  const theme = useTheme();
  const { t } = useLang();
  const primary = theme.palette.primary.main;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) {
      setTimeout(() => setVisible(true), 1200);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    onConsent?.("accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    onConsent?.("rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            bottom: 20,
            left: 20,
            zIndex: 9999,
            maxWidth: 420,
            width: "calc(100vw - 40px)",
          }}
        >
          <Box
            sx={{
              p: 3,
              borderRadius: "16px",
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.1)"
              }`,
              boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Typography sx={{ fontWeight: 700, mb: 0.75, fontSize: "0.95rem" }}>
              {t.cookie.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.secondary, mb: 2.5, lineHeight: 1.65 }}
            >
              {t.cookie.body}{" "}
              <a href="/privacy" style={{ color: primary, textDecoration: "none", fontWeight: 600 }}>
                {t.cookie.privacy}
              </a>
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Button
                onClick={accept}
                variant="contained"
                size="small"
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  borderRadius: "8px",
                  color: "#fff",
                  boxShadow: "none",
                  "&:hover": { boxShadow: "none", opacity: 0.9 },
                }}
              >
                {t.cookie.accept}
              </Button>
              <Button
                onClick={reject}
                variant="outlined"
                size="small"
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "8px",
                  borderColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.2)"
                      : "rgba(0,0,0,0.15)",
                  "&:hover": { borderColor: primary, color: primary },
                }}
              >
                {t.cookie.reject}
              </Button>
            </Box>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CookieConsent;
