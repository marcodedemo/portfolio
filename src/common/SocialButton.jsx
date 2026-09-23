import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const links = {
  Github: { href: "https://github.com/marcodedemo", icon: <GitHubIcon /> },
  LinkedIn: { href: "https://www.linkedin.com/in/marcodedemo/", icon: <LinkedInIcon /> },
};

function SocialButton({ text }) {
  const theme = useTheme();
  const { href, icon } = links[text];

  return (
    <Button
      variant="outlined"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      startIcon={icon}
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
