import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

function LoadingScreen({ onComplete }) {
  const theme = useTheme();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor:
              theme.palette.mode === "dark" ? "#2b2b2b" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              fontFamily: "'Inter', 'Roboto', sans-serif",
              fontSize: "4rem",
              fontWeight: 700,
              color: theme.palette.primary.main,
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            {"{ M }"}
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
            style={{
              height: "2px",
              backgroundColor: theme.palette.primary.main,
              borderRadius: "2px",
              opacity: 0.7,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
