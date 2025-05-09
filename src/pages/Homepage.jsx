import React, { useState } from "react";
import { Box, Typography, Container, List, ListItem, ListItemText, ListItemIcon, Button, } from "@mui/material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Jumbo from '../sections/Jumbo'
import HomeAbout from "../sections/HomeAbout";
import HomeProjects from "../sections/HomeProjects";
import Contacts from "../sections/Contacts";

function Homepage() {
  return (
    <>
      <Jumbo />
      <HomeAbout />
      <HomeProjects />
      <Contacts />
    </>
  );
}

export default Homepage;
