import React from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  Card,
  CardMedia,
  CardContent,
  Divider,
  IconButton,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

import LaunchIcon from "@mui/icons-material/Launch";

import { useTheme } from "@mui/material/styles";

import Projects from "../data/Projects";
import TechnologyLabel from "../common/TechnologyLabel";

function HomeProjects() {
  const theme = useTheme();

  return (
    <Box sx={{ paddingTop: theme.spacing(12) }} id="Projects">
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{ fontWeight: "600", paddingBottom: theme.spacing(3) }}
          
        >
          &#128187; Progetti
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingBottom: theme.spacing(3),
          }}
        >
          <Typography variant="span">
            Ecco alcuni dei progetti su cui ho lavorato.
          </Typography>
          {/* <Link
            sx={{
              color: theme.palette.primary.main,
              fontSize: theme.typography.span,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
            href="/projects"
          >
            Scopri di più &#8594;
          </Link> */}
        </Box>

        <Grid container spacing={{ xs: 3, md: 6, lg: 8 }}>
          {Projects.map((project, index) => (
            <Grid
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              key={project.slug}
              size={{ xs: 12, sm: 6 }}
              sx={{
                marginTop: {
                  xs: 0,
                  sm: index % 2 !== 0 ? theme.spacing(6) : "0",
                  lg: index % 2 !== 0 ? theme.spacing(8) : "0",
                },
              }}
            >
              <Paper>
                <Card
                  sx={{
                    border: "1px solid",
                    borderColor: "rgb(255 255 255 / 16%)",
                    borderRadius: "10px",
                    height: "fit-content",
                  }}
                >
                  <CardMedia
                    image={`/public/images/${project.mainImage}`}
                    sx={{
                      height: { xs: "200px", md: "300px" },
                      backgroundPosition: "top",
                      backgroundSize: "cover",
                    }}
                  />
                  <CardContent
                    sx={{
                      padding: `${theme.spacing(2)}`,
                      height:'230px'
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: "600" }}>
                        {project.title}
                      </Typography>
                      {/* <IconButton
                        component={RouterLink}
                        to={`/projects/${project.slug}`}
                      >
                        <LaunchIcon />
                      </IconButton> */}
                    </Box>

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

                    <Box sx={{ height: "fit-content" }}>
                      <Typography variant="p" sx={{color: theme.palette.text.secondary}}>
                        {project.shortDescription}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default HomeProjects;
