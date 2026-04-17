import { Box, Typography, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Palettes from "../data/Palettes";
import { useTheme } from "@mui/material/styles";

const paletteLabels = {
  pink:   "Rosa",
  red:    "Rosso",
  yellow: "Arancio",
  blue:   "Blu",
  green:  "Verde",
};

function ThemeSettings({ mode, setMode, setPalette }) {
  const theme = useTheme();
  const currentColor = theme.palette.primary.main;

  return (
    <Box
      sx={{
        width: 240,
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid",
        borderColor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.08)",
        backgroundColor:
          theme.palette.mode === "dark" ? "#1e1e1e" : "#ffffff",
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 24px 48px rgba(0,0,0,0.5)"
            : "0 24px 48px rgba(0,0,0,0.12)",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: 2.5,
          py: 2,
          borderBottom: "1px solid",
          borderColor:
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.06)"
              : "rgba(0,0,0,0.06)",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.02em",
          }}
        >
          Personalizza
        </Typography>
      </Box>

      <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", gap: 3 }}>

        {/* Dark / Light toggle */}
        <Box>
          <Typography
            sx={{
              fontSize: "0.7rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: theme.palette.text.secondary,
              mb: 1.5,
            }}
          >
            Modalità
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
            }}
          >
            {[
              { value: "dark",  label: "Scuro",  icon: <DarkModeIcon sx={{ fontSize: 18 }} /> },
              { value: "light", label: "Chiaro", icon: <LightModeIcon sx={{ fontSize: 18 }} /> },
            ].map((opt) => {
              const active = mode === opt.value;
              return (
                <motion.div
                  key={opt.value}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Box
                    onClick={() => setMode(opt.value)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 0.8,
                      py: 1,
                      px: 1.5,
                      borderRadius: "10px",
                      cursor: "pointer",
                      border: "1px solid",
                      borderColor: active
                        ? currentColor
                        : theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.1)",
                      backgroundColor: active
                        ? `${currentColor}20`
                        : "transparent",
                      color: active ? currentColor : theme.palette.text.secondary,
                      transition: "all 0.2s",
                      userSelect: "none",
                    }}
                  >
                    {opt.icon}
                    <Typography sx={{ fontSize: "0.78rem", fontWeight: active ? 700 : 500 }}>
                      {opt.label}
                    </Typography>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </Box>

        {/* Color palette */}
        <Box>
          <Typography
            sx={{
              fontSize: "0.7rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: theme.palette.text.secondary,
              mb: 1.5,
            }}
          >
            Colore principale
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 1,
            }}
          >
            {Palettes.map((palette) => {
              const active = currentColor === palette.main;
              return (
                <Tooltip key={palette.id} title={paletteLabels[palette.id]} placement="top" arrow>
                  <motion.div
                    whileTap={{ scale: 0.88 }}
                    whileHover={{ scale: 1.12 }}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box
                      onClick={() => setPalette(palette)}
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        backgroundColor: palette.main,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: active
                          ? `0 0 0 3px ${
                              theme.palette.mode === "dark" ? "#1e1e1e" : "#ffffff"
                            }, 0 0 0 5px ${palette.main}`
                          : `0 2px 8px ${palette.main}60`,
                        transition: "box-shadow 0.2s",
                      }}
                    >
                      {active && (
                        <CheckIcon sx={{ fontSize: 16, color: "#fff" }} />
                      )}
                    </Box>
                  </motion.div>
                </Tooltip>
              );
            })}
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default ThemeSettings;
