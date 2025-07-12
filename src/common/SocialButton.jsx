import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ContactPageIcon from "@mui/icons-material/ContactPage";

function SocialButton({ text }) {
  const theme = useTheme();

  // Selezione icona in base al testo
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

  // Click button Curriculum
  const handleClick = () => {
    if (text === "Curriculum") {
      const driveLink =
        "https://drive.google.com/file/d/1bAUGRwo0uvQSR5I-21XyCH8Vm2uKdyWA/view?usp=drive_link";
      window.open(driveLink, "_blank");
    }else if (text === "LinkedIn"){
      const linkedInLink = "https://www.linkedin.com/in/marcodedemo/";
      window.open(linkedInLink, "_blank");
    }else if (text === "Github"){
      const githubLink = "https://github.com/marcodedemo";
      window.open(githubLink, "_blank");
    }else{
      const emailLink = "mailto:marco.dedemo@gmail.com";
      window.location.href = emailLink;
    }
  };

  return (
    <Button
    data-aos="fade-down"
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
