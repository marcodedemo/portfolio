import * as React from "react";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { IconButton, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Palettes from "../data/Palettes";
import { useTheme } from "@mui/material/styles";


function ThemeSettings({ mode, setMode, setPalette }) {

  const theme = useTheme();

  // Modifica darkMode
  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  // Modifica colore primario
  const handlePaletteChange = (palette) => {
    setPalette(palette);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(2),
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: '12px',
        p: 3,
        minHeight: "56px",
      }}
    >
      {/* <FormControl>
        <RadioGroup
          aria-labelledby="theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={handleModeChange}
        >
          <FormControlLabel value="light" control={<Radio />} label="Chiaro" />
          <FormControlLabel value="dark" control={<Radio />} label="Scuro" />
        </RadioGroup>
      </FormControl> */}

      <Typography>Tema:</Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        {Palettes.map((palette) => (
          <IconButton
            key={palette.id}
            onClick={() => handlePaletteChange(palette)}
            sx={{
              width: 20,
              height: 20,
              bgcolor: palette.main,
              "&:hover": {
                opacity: 0.7,
              },
            }}
          >
            <CircleIcon sx={{ color: palette.main }} />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}

export default ThemeSettings;
