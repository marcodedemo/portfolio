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
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link as RouterLink } from "react-router-dom";

import LaunchIcon from "@mui/icons-material/Launch";

import { useTheme } from "@mui/material/styles";

import Projects from "../data/Projects";
import TechnologyLabel from "../common/TechnologyLabel";

function HomeProjects() {
  const theme = useTheme();

  return (
    <Box sx={{ paddingTop: theme.spacing(10) }}>
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
          <Link
            sx={{
              color: theme.palette.primary.main,
              fontSize: theme.typography.span,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
            href="/projects"
          >
            Scopri di più &#8594;
          </Link>
        </Box>

        <Grid container spacing={3}>
          {Projects.slice(0, 4).map((project) => (
            <Grid item key={project.slug}>
              <Card
                sx={{
                  height: theme.spacing(50),
                  border: "1px solid",
                  borderColor: "rgb(255 255 255 / 16%)",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  image={`/public/images/${project.mainImage}`}
                  sx={{
                    height: theme.spacing(23),
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    padding: `${theme.spacing(2)}`,
                    height: theme.spacing(27),
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
                    <IconButton
                      component={RouterLink}
                      to={`/projects/${project.slug}`}
                    >
                      <LaunchIcon />
                    </IconButton>
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

                  <Typography variant="p">
                    {project.shortDescription}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default HomeProjects;
