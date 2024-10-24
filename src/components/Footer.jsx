import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";

import { useTheme } from "@mui/material/styles";

function Footer() {
  const theme = useTheme();

  const highlightedStyle = {
    color: theme.palette.primary.main,
    fontSize: theme.typography.tinySpan
  }

  return (
    <Box sx={{ paddingTop: theme.spacing(20) }}>
      <Container maxWidth="xl">
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Typography sx={{fontSize: theme.typography.tinySpan}} variant="span">Progettato e Sviluppato da Marco De Demo</Typography>
        <Typography sx={{fontSize: theme.typography.tinySpan}} variant="span">Creato con <Typography sx={highlightedStyle} variant="span">React.js</Typography> & <Typography sx={highlightedStyle} variant="span">Material UI</Typography>. Hostato su <Typography variant="span" sx={highlightedStyle}>Netlify</Typography></Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
