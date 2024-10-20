import React, { useState } from "react";
import { Box, Typography, Container, List, ListItem, ListItemText, ListItemIcon, Button, } from "@mui/material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTheme } from "@mui/material/styles";


function ChiSono() {
  const theme = useTheme();

  return (
    <Box sx={{paddingTop: theme.spacing(5)}}>
      <Container maxWidth='xl'>

        <Typography variant='h2' sx={{fontWeight:'600'}}>&#9889;  Chi Sono</Typography>
        
      </Container>
    </Box>
  );
}

export default ChiSono;
