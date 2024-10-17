import * as React from "react";
import { useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { Container, Link, ListItemIcon } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Unstable_Popup as Popup } from "@mui/base/Unstable_Popup";

import Logo from "../common/Logo";
import Links from "../data/Links";
import ThemeSettings from "../fragments/ThemeSettings";

import { useTheme } from "@mui/material/styles";

const drawerWidth = "75vw";

function Navbar({ mode, setMode, setPalette, ...props }) {
  const theme = useTheme();

  /* --------------------------------- Drawer --------------------------------- */
  const { window } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(1),
        }}
      >
        <Logo fontSize={24} />
        <IconButton onClick={handleDrawerClose}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {Links.map((link) => (
          <ListItem
            key={link.id}
            disablePadding
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ListItemButton>
              <Link
                href={link.path}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: theme.spacing(1),
                  textAlign: "center",
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <ListItemIcon
                  sx={[
                    (theme) => ({
                      width: "fit-content",
                      minWidth: "unset",
                      color: theme.palette.primary.main,
                      ...theme.applyStyles("dark", {
                        color: theme.palette.primary.main,
                      }),
                    }),
                  ]}
                >
                  {link.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    flexGrow: "unset",
                    ".MuiListItemText-primary": {
                      width: "fit-content",
                      fontWeight: "600",
                      fontSize: "16px",
                    },
                  }}
                >
                  {link.label}
                </ListItemText>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  /* ---------------------------------- Popup ---------------------------------- */

  const [popupAnchor, setPopupAnchor] = useState(null);
  const popupOpen = Boolean(popupAnchor);
  const containerRef = useRef(null);

  const handleTogglePopup = () => {
    if (popupOpen) {
      setPopupAnchor(null);
    } else {
      setPopupAnchor(containerRef.current);
    }
  };

  const PopupBody = styled("div")(
    ({ theme }) => `
    width: max-content;
    margin: 2px;
    border-radius: 8px;
    box-shadow: ${
      theme.palette.mode === "dark"
        ? `0px 4px 8px rgb(0 0 0 / 0.7)`
        : `0px 4px 8px rgb(0 0 0 / 0.1)`
    };
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
  `
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar
            sx={[
              (theme) => ({
                height: "80px",
                backgroundColor: "#ffffff",
                ...theme.applyStyles("dark", {
                  backgroundColor: "#2b2b2b",
                }),
              }),
            ]}
          >
            <Container
              maxWidth="xl"
              ref={containerRef}
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: { xs: "flex", sm: "none" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Logo fontSize={32} />
                <Box>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerOpen}
                    sx={{ mr: 2, display: { sm: "none" } }}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                  </IconButton>

                  <IconButton onClick={handleTogglePopup}>
                    <FontAwesomeIcon
                      className="rotating"
                      icon="fa-solid fa-gear"
                    />
                  </IconButton>
                </Box>
              </Box>

              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Logo fontSize={32} />
                </Box>

                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: theme.spacing(3),
                  }}
                >
                  {Links.map((link) => (
                    <Link
                      key={link.id}
                      href={link.path}
                      sx={{
                        textDecoration: "none",
                        color: theme.palette.text.primary,
                        "&:hover": {
                          textDecoration: "underline",
                          textUnderlineOffset: theme.spacing(0.5),
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>

                <IconButton onClick={handleTogglePopup}>
                  <FontAwesomeIcon
                    className="rotating"
                    icon="fa-solid fa-gear"
                  />
                </IconButton>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>

        <Popup
          open={popupOpen}
          anchor={popupAnchor}
          style={{ zIndex: "1101" }}
          placement="bottom-end"
          offset={4}
        >
          <PopupBody>
            <ThemeSettings
              mode={mode}
              setMode={setMode}
              setPalette={setPalette}
            />
          </PopupBody>
        </Popup>

        <nav>
          <Drawer
            container={container}
            anchor="right"
            variant="persistent"
            open={drawerOpen}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
