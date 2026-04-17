import Jumbo from '../sections/Jumbo';
import HomeAbout from "../sections/HomeAbout";
import Services from "../sections/Services";
import HowIWork from "../sections/HowIWork";
import Contacts from "../sections/Contacts";
import SectionDivider from "../common/SectionDivider";

function Homepage() {
  return (
    <>
      <Jumbo />
      <SectionDivider />
      <HomeAbout />
      <SectionDivider flip />
      <Services />
      <SectionDivider />
      <HowIWork />
      <SectionDivider flip />
      <Contacts />
    </>
  );
}

export default Homepage;
