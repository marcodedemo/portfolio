import React from "react";
import { Box, Typography, Container } from "@mui/material";

import { useTheme } from "@mui/material/styles";

function HomeAbout() {
  const theme = useTheme();

  return (
    <Box sx={{ paddingTop: theme.spacing(10) }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{ fontWeight: "600", paddingBottom: theme.spacing(2) }}
        >
          &#9889; Chi Sono
        </Typography>

        <Typography variant="p" sx={{
          color: theme => theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary,
        }}>
          Mi chiamo Marco De Demo, sono uno{" "}
          <Typography variant="span" sx={{ color: theme.palette.primary.main }}>
            sviluppatore web fullstack junior con 2 anni di esperienza
          </Typography>
          . La mia passione per i computer e la tecnologia è nata fin da
          piccolo, quando sognavo che questo mondo potesse diventare parte della
          mia vita quotidiana. <br /> <br /> All'età di 22 anni, ho deciso di
          seguire questo sogno e lasciare il mio precedente lavoro come tecnico
          disinfestatore per immergermi completamente nello{" "}
          <Typography variant="span" sx={{ color: theme.palette.primary.main }}>
            sviluppo web
          </Typography>
          . Ho frequentato un{" "}
          <Typography variant="span" sx={{ color: theme.palette.primary.main }}>
            corso full-time
          </Typography>{" "}
          che mi ha permesso di acquisire solide basi tecniche e una
          comprensione profonda di questo settore in continua evoluzione. <br />{" "}
          <br /> Da un anno e mezzo lavoro come frontend developer presso
          un'azienda con sede a Treviso, dove continuo a crescere e perfezionare
          le mie competenze. Sono sempre alla{" "}
          <Typography variant="span" sx={{ color: theme.palette.primary.main }}>
            ricerca di nuove sfide
          </Typography>{" "}
          e opportunità per ampliare il mio bagaglio di conoscenze, con
          l’obiettivo di creare{" "}
          <Typography variant="span" sx={{ color: theme.palette.primary.main }}>
            soluzioni web moderne
          </Typography>
          , efficienti e intuitive.
        </Typography>
      </Container>
    </Box>
  );
}

export default HomeAbout;
