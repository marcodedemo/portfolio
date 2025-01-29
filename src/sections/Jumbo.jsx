import React from "react";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import SocialButton from "../common/SocialButton";

function Jumbo() {
  const theme = useTheme();
  const is900Screen = useMediaQuery('(min-width:900px)')

  return (
    <Box sx={{ paddingTop: theme.spacing(8) }}>
      <Container maxWidth="xl">
        <Box data-aos="fade-down">
          <Typography
            variant="span"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "600",
              fontSize: { xs: "1.2rem" },
            }}
          >
            Ciao!, mi chiamo
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: "600",
              lineHeight: "95%",
            }}
          >
            Marco <br style={{display: is900Screen ? 'none' : 'block'}} /> De Demo.
          </Typography>
        </Box>

        <Box sx={{ paddingTop: theme.spacing(3), maxWidth: {xs:'none', sm:'75vw', md:'60vw'} }} data-aos="fade-left">
          
          <Typography
            variant="h2"
            sx={{
              color: theme => theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.main,
              fontWeight: "600",
              display: "inline",
            }}
          >
            FullStack Web Developer
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: theme => theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary,
              fontWeight: "600",
              display: "inline",
            }}
          >
            {" "}
            con due anni di esperienza nel settore.
          </Typography>
        </Box>

        <Box sx={{ paddingTop: theme.spacing(3) }} data-aos="fade-left">
          <Typography variant="p" sx={{ display: "block" }}>
            &#128640; Attualmente specializzato in Frontend &#40;{" "}
            <Typography
              variant="span"
              sx={{ color: theme.palette.primary.main }}
            >
              React.js
            </Typography>{" "}
            &#41;
          </Typography>
          <Typography variant="p">
            &#128293; Solida base conoscitiva di framework backend &#40;{" "}
            <Typography
              variant="span"
              sx={{ color: theme.palette.primary.main }}
            >
              Laravel
            </Typography>{" "}
            &#41;
          </Typography>
        </Box>

        <Box
          sx={{
            paddingTop: theme.spacing(3),
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(2),
          }}
        >
          <SocialButton text="Github"  />
          <SocialButton text="LinkedIn" />
          <SocialButton text="Email" />
        </Box>
      </Container>
    </Box>
  );
}

export default Jumbo;
