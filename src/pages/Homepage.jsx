import { Box } from "@mui/material";
import Jumbo from '../sections/Jumbo';
import HomeAbout from "../sections/HomeAbout";
import Services from "../sections/Services";
import HowIWork from "../sections/HowIWork";
import Contacts from "../sections/Contacts";
import SectionDivider from "../common/SectionDivider";

function Homepage() {
  return (
    <Box component="main">
      <Jumbo />
      <SectionDivider />
      <HomeAbout />
      <SectionDivider flip />
      <Services />
      <SectionDivider />
      <HowIWork />
      <SectionDivider flip />
      <Contacts />
    </Box>
  );
}

export default Homepage;
