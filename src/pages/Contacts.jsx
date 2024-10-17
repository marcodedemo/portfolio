import React, { useState } from "react";
import { Box, Typography, Container, List, ListItem, ListItemText, ListItemIcon, Button, } from "@mui/material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contacts() {
  return (
    <>
      Contacts
      <Button
        sx={(theme) => ({
          color: "#fff",
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            boxShadow: theme.shadows[3],
            backgroundColor: theme.palette.primary.dark,
          },
        })}
      >
        Submit
      </Button>
    </>
  );
}

export default Contacts;
