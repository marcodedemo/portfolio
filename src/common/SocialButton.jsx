import { Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function SocialButton({text}) {
  const theme = useTheme();

  const selectIcon = () => {
    if(text === 'Github'){
        return <GitHubIcon />
    }else if (text === 'LinkedIn'){
        return <LinkedInIcon />
    }else if (text === 'Email'){
        return <EmailIcon />
    }else if (text === 'Resume'){
        return <ContactPageIcon />
    }else{
        return null
    }
  }

  return (
    <Button variant="outlined" startIcon={selectIcon()} sx={{color: theme.palette.text.primary, textTransform:'none', '.MuiButton-startIcon': {
          color: theme.palette.primary.main,
        },}} >
        {text}
    </Button>
  );
}

export default SocialButton;
