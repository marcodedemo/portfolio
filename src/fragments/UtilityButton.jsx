import * as React from "react";
import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled } from "@mui/material/styles";
import { Unstable_Popup as Popup } from "@mui/base/Unstable_Popup";
import ThemeSettings from "../fragments/ThemeSettings";
import { IconButton } from "@mui/material";

import { useTheme } from "@mui/material/styles";

function UtilityButton({ mode, setMode, setPalette }) {
  const theme = useTheme();

  // Popup
  const [popupAnchor, setPopupAnchor] = useState(null);
  const popupOpen = Boolean(popupAnchor);
  const popupRef = useRef(null);

  // Popup toggle
  const handleTogglePopup = () => {
    if (popupOpen) {
      setPopupAnchor(null);
    } else {
      setPopupAnchor(popupRef.current);
    }
  };

  // Elemento Popup
  const PopupBody = styled("div")(
    ({ theme }) => `
      width: max-content;
      margin: 2px;
      border-radius: 8px;
      box-shadow: ${theme.palette.mode === "dark"
        ? `0px 4px 8px rgb(0 0 0 / 0.7)`
        : `0px 4px 8px rgb(0 0 0 / 0.1)`
      };
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
    `
  );

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          height: "40px",
          width: "40px",
          bottom: "16px",
          right: "16px",
          backgroundColor: theme.palette.primary.main,
          borderRadius: "50%",
        }}
        ref={popupRef}
      >
        <IconButton onClick={handleTogglePopup}>
          <SettingsIcon
            sx={{ color: 'white' }}
            className="rotating"
          />
        </IconButton>
      </Box>

      <Popup
        open={popupOpen}
        anchor={popupAnchor}
        style={{ zIndex: "10000", borderRadius: "12px", }}
        placement="left-end"
        offset={10}
      >
        <PopupBody>
          <ThemeSettings
            mode={mode}
            setMode={setMode}
            setPalette={setPalette}
          />
        </PopupBody>
      </Popup>
    </>
  );
}

export default UtilityButton;
