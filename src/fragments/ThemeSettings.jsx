import * as React from "react";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Palettes from "../data/Palettes";

function ThemeSettings({ mode, setMode, setPalette }) {
  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

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
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
        minHeight: "56px",
      }}
    >
      <FormControl>
        <FormLabel id="theme-toggle">Theme</FormLabel>
        <RadioGroup
          aria-labelledby="theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={handleModeChange}
        >
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>

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
