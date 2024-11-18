import React, { useState, useEffect} from "react";
import { Box, Typography, Container, List, ListItem, CardMedia, CardContent, CardActionArea, Pagination, Card, InputAdornment, TextField, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

import Projects from '../data/Projects'
import TechnologyLabel from '../common/TechnologyLabel'


function ProjectsPage() {
  const theme = useTheme();

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    let length = Math.ceil(Projects.length / 5);
    setPageNumber(length)

  },[Projects])

  return (
    <>
      <Container maxWidth='xl'>

        <Box>
          <Typography variant="h2" sx={{ fontWeight: '600' }}>Projects</Typography>
          <TextField
            sx={{ width: '100%', marginTop: theme.spacing(2) }}
            label='Cerca'
            size='small'
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        <Box sx={{paddingTop: theme.spacing(3)}}>
          <Grid container spacing={3}>
            {Projects.map((project) => (
              <Grid key={project.slug}  size={{xs:12, sm:6}}>
                <Card
                  sx={{
                    height: 'fit-content',
                    border: "1px solid",
                    borderColor: "rgb(255 255 255 / 16%)",
                    borderRadius: "10px",
                  }}
                >
                  <CardActionArea
                    component={RouterLink}
                    to={`/projects/${project.slug}`}
                  >

                    <CardMedia
                      image={`/public/images/${project.mainImage}`}
                      sx={{
                        height: {xs:'200px', md:'300px'},
                        backgroundPosition: "top",
                        backgroundSize: "cover",
                      }}
                    />
                    <CardContent
                      sx={{
                        padding: `${theme.spacing(2)}`,
                        height:{xs:'280px', sm:'300px', md:'250px'}
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: "600" }}>
                        {project.title}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: theme.spacing(1),
                          paddingTop: theme.spacing(1.5),
                        }}
                      >
                        {project.mainTechnologies.map((tech) => (
                          <TechnologyLabel technology={tech} key={tech} />
                        ))}
                      </Box>

                      <Divider sx={{ margin: `${theme.spacing(1.5)} 0` }} />

                      <Typography variant="p">
                        {project.shortDescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                </Card>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Container>
    </>
  );
}

export default ProjectsPage;
