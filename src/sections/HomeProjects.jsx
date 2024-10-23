import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Link
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTheme } from "@mui/material/styles";

function HomeProjects() {
  const theme = useTheme();

  return (
    <Box sx={{ paddingTop: theme.spacing(10) }}>
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{ fontWeight: "600", paddingBottom: theme.spacing(2) }}>
        &#128187; Progetti
        </Typography>

        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>

        <Typography variant="span">Ecco alcuni dei progetti su cui ho lavorato.</Typography>
        <Link sx={{color: theme.palette.primary.main, fontSize: theme.typography.span, textDecoration:'none', '&:hover': {textDecoration:'underline'}}}>Scopri di più &#8594;</Link>
        </Box>

      </Container>
    </Box>
  );
}

export default HomeProjects;
