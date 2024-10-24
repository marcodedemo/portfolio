import React from "react";
import { Box, Typography, Container } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import SocialButton from "../common/SocialButton";

function Jumbo() {
  const theme = useTheme();

  return (
    <Box sx={{ paddingTop: theme.spacing(2) }}>
      <Container maxWidth="xl">
        <Box>
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
            Marco <br /> De Demo.
          </Typography>
        </Box>

        <Box sx={{ paddingTop: theme.spacing(3) }}>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: "600",
              display: "inline",
            }}
          >
            Sono un{" "}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: "600",
              display: "inline",
            }}
          >
            Junior FullStack Web Developer
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: "600",
              display: "inline",
            }}
          >
            {" "}
            con due anni di esperienza nel settore.
          </Typography>
        </Box>

        <Box sx={{ paddingTop: theme.spacing(3) }}>
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
          <SocialButton text="Github" />
          <SocialButton text="LinkedIn" />
          <SocialButton text="Email" />
        </Box>
      </Container>
    </Box>
  );
}

export default Jumbo;
