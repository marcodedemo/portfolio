import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function BackToTop() {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: 80,
            right: 20,
            zIndex: 8999,
            width: 44,
            height: 44,
            borderRadius: "12px",
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(43,43,43,0.85)"
                : "rgba(255,255,255,0.85)",
            border: `1px solid ${primary}40`,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: `0 4px 16px rgba(0,0,0,0.15)`,
            color: primary,
          }}
        >
          <KeyboardArrowUpIcon sx={{ fontSize: 22 }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
