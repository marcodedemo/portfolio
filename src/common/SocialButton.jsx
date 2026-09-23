import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { useLang } from "../context/LanguageContext";
import { whatsappUrl, trackWhatsApp } from "../data/contact";

function SocialButton({ text }) {
  const theme = useTheme();
  const { t } = useLang();

  const links = {
    WhatsApp: { href: whatsappUrl(t.whatsappText), icon: <WhatsAppIcon />, onClick: () => trackWhatsApp("hero") },
    LinkedIn: { href: "https://www.linkedin.com/in/marcodedemo/", icon: <LinkedInIcon /> },
  };
  const { href, icon, onClick } = links[text];

  return (
    <Button
      variant="outlined"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      startIcon={icon}
      onClick={onClick}
      sx={{
        color: theme.palette.text.primary,
        textTransform: "none",
        ".MuiButton-startIcon": { color: theme.palette.primary.main },
      }}
    >
      {text}
    </Button>
  );
}

export default SocialButton;
