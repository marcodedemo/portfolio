import React, { useState, useEffect} from "react";
import { Box, Typography, Container, List, ListItem, CardMedia, CardContent, CardActionArea, Pagination, Card, InputAdornment, TextField, Divider } from "@mui/material";

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

        <Box>
          <List>
            {Projects.map((project) => (
              <ListItem key={project.slug}>
                <Card
                  sx={{
                    height: theme.spacing(50),
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
                        height: theme.spacing(20),
                        backgroundPosition: "top",
                        backgroundSize: "cover",
                      }}
                    />
                    <CardContent
                      sx={{
                        padding: `${theme.spacing(2)}`,
                        height: theme.spacing(30),
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
              </ListItem>
            ))}
          </List>

        </Box>
      </Container>
    </>
  );
}

export default ProjectsPage;
