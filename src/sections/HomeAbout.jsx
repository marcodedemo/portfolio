import React from "react";
import { Box, Typography, Container } from "@mui/material";

import { useTheme } from "@mui/material/styles";

function HomeAbout() {
  const theme = useTheme();

  return (
    <Box
      sx={{ paddingTop: theme.spacing(12) }}
      id="WhoAmI"
      data-aos="fade-right"
    >
      <Container maxWidth="xl">
        <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "600", paddingBottom: theme.spacing(2) }}
          >
            &#9889; Chi Sono
          </Typography>

          <Typography
            variant="p"
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark"
                  ? theme.palette.text.secondary
                  : theme.palette.text.primary,
            }}
          >
            Sono uno <Typography
              variant="span"
              sx={{ color: theme.palette.primary.main }}
            >
              sviluppatore web fullstack con 2 anni di esperienza
            </Typography>, specializzato
            nello sviluppo di applicazioni moderne e scalabili. Attualmente
            lavoro come fullstack developer presso un’azienda con sede a Milano.
            <br />
            <br />
            Le mie competenze principali includono:
            <ul>
              <li>
                <Typography variant='span' sx={{ color: theme.palette.primary.main }}>Frontend:</Typography> React, Vue.js, Bootstrap, Tailwind
                CSS, Material UI
              </li>
              <li>
                <Typography variant='span' sx={{ color: theme.palette.primary.main }}>Backend:</Typography> Laravel, Filament, REST API, MySql,
                PHP
              </li>
            </ul>
            <br />
            Sono <Typography variant='span' sx={{ color: theme.palette.primary.main }}>autonomo nella gestione dell’intero ciclo di sviluppo</Typography>: dalla
            progettazione dell’architettura fino al rilascio in produzione.
            Lavoro con attenzione al codice pulito, alle performance e
            all’accessibilità, seguendo le best practice dello sviluppo web
            moderno.
            <br />
            <br />
            <Typography variant='span' sx={{ color: theme.palette.primary.main }}>Sono alla ricerca di nuove opportunità professionali</Typography> che mi
            permettano di crescere ulteriormente come sviluppatore fullstack,
            contribuendo a prodotti concreti e ad alto impatto.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default HomeAbout;
