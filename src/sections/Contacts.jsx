import React from "react";
import { Box, Typography, Container } from "@mui/material";
import SocialButton from "../common/SocialButton";
import { useTheme } from "@mui/material/styles";

function Contacts() {
  const theme = useTheme();

  return (
    <Box sx={{ paddingTop: theme.spacing(10) }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            fontWeight: "600",
            paddingBottom: theme.spacing(2),
            textAlign: "center",
          }}
        >
          Non esitare a contattarmi!
        </Typography>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="p">
            Se desideri sapere di più su di me o sul mio lavoro, o semplicemente
            vuoi salutarmi , inviami un messaggio.
          </Typography>
        </Box>

        <Box
          sx={{
            paddingTop: theme.spacing(3),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: theme.spacing(2),
          }}
        >
          <SocialButton text="LinkedIn" />
          <SocialButton text="Email" />
          <SocialButton text="Curriculum" />
        </Box>
      </Container>
    </Box>
  );
}

export default Contacts;
