import { Box } from "@mui/material";
import Jumbo from '../sections/Jumbo';
import HomeAbout from "../sections/HomeAbout";
import Services from "../sections/Services";
import HowIWork from "../sections/HowIWork";
import Portfolio from "../sections/Portfolio";
import Contacts from "../sections/Contacts";

function Homepage() {
  return (
    <Box component="main">
      <Jumbo />
      <HomeAbout />
      <Services />
      <HowIWork />
      <Portfolio />
      <Contacts />
    </Box>
  );
}

export default Homepage;
