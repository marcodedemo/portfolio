import React, { useState } from "react";
import { Box, Typography, Container, List, ListItem, ListItemText, ListItemIcon, Button, } from "@mui/material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Jumbo from '../sections/Jumbo'
import ChiSono from "../sections/ChiSono";

function Homepage() {
  return (
    <>
      <Jumbo />
      <ChiSono />
    </>
  );
}

export default Homepage;
