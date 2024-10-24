import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ContactPageIcon from "@mui/icons-material/ContactPage";

function SocialButton({ text }) {
  const theme = useTheme();

  const selectIcon = () => {
    if (text === "Github") {
      return <GitHubIcon />;
    } else if (text === "LinkedIn") {
      return <LinkedInIcon />;
    } else if (text === "Email") {
      return <EmailIcon />;
    } else if (text === "Curriculum") {
      return <ContactPageIcon />;
    } else {
      return null;
    }
  };

  const handleClick = () => {
    if (text === "Curriculum") {
      const driveLink =
        "https://drive.google.com/file/d/166ezjcW0q-jIWJYKWTdVUOn0Zkm1BAfm/view?usp=sharing";
      window.open(driveLink, "_blank");
    }
  };

  return (
    <Button
      variant="outlined"
      startIcon={selectIcon()}
      onClick={handleClick}
      sx={{
        color: theme.palette.text.primary,
        textTransform: "none",
        ".MuiButton-startIcon": {
          color: theme.palette.primary.main,
        },
      }}
    >
      {text}
    </Button>
  );
}

export default SocialButton;
