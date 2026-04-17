import { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSettings from "../fragments/ThemeSettings";
import { useTheme } from "@mui/material/styles";

function UtilityButton({ mode, setMode, setPalette }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  // Chiudi cliccando fuori
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        open &&
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const primary = theme.palette.primary.main;

  return (
    <>
      {/* Floating button */}
      <motion.div
        ref={btnRef}
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9000,
          width: 48,
          height: 48,
          borderRadius: "50%",
          backgroundColor: primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: `0 4px 20px ${primary}70`,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <CloseIcon sx={{ color: "#fff", fontSize: 22 }} />
            </motion.div>
          ) : (
            <motion.div
              key="palette"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <PaletteIcon sx={{ color: "#fff", fontSize: 22 }} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: "fixed",
              bottom: 80,
              right: 20,
              zIndex: 9000,
              transformOrigin: "bottom right",
            }}
          >
            <ThemeSettings mode={mode} setMode={setMode} setPalette={setPalette} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default UtilityButton;
