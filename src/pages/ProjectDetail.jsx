import React, { useState } from "react";
import { Box, Typography, Container, List, ListItem, ListItemText, ListItemIcon, Button, } from "@mui/material";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Projects from '../data/Projects';
import Slideshow from '../fragments/Slideshow'

function ProjectDetail() {

    const { slug } = useParams(); 
    const project = Projects.find(p => p.slug === slug);

    if (!project) {
        return <Typography variant="h6">Progetto non trovato</Typography>;
      }
  return (
    <>
      <Typography variant="h4">{project.title}</Typography>

      <Slideshow imgs={project.images}/>
    </>
  );
}

export default ProjectDetail;
