import React, { useState } from "react";
import { Box, Typography, Container, List, ListItem, ListItemText, ListItemIcon, Button, } from "@mui/material";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Projects from '../data/Projects';

function ProjectDetail() {

    const { slug } = useParams(); 
    const project = Projects.find(p => p.slug === slug);

    if (!project) {
        return <Typography variant="h6">Progetto non trovato</Typography>;
      }
  return (
    <>
      <Typography variant="h4">{project.title}</Typography>
      <Button
        sx={(theme) => ({
          color: "#fff",
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            boxShadow: theme.shadows[3],
            backgroundColor: theme.palette.primary.dark,
          },
        })}
      >
        Submit
      </Button>
    </>
  );
}

export default ProjectDetail;
