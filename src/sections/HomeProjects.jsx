import React, { useState } from "react";
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
  CircularProgress,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { quality, format } from "@cloudinary/url-gen/actions/delivery";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

import LaptopIcon from "@mui/icons-material/Laptop";
import GitHubIcon from "@mui/icons-material/GitHub";

import { useTheme } from "@mui/material/styles";

import Projects from "../data/Projects";
import TechnologyLabel from "../common/TechnologyLabel";

function HomeProjects() {
  const theme = useTheme();

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dzqk808cv",
    },
  });

  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box sx={{ paddingTop: theme.spacing(12) }} id="Projects">
      <Container maxWidth="xl">
        <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>
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
                item
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                key={project.slug}
                size={{ xs: 12, sm: 6 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: { xs: "auto", sm: "500px", md: "580px" },
                  marginTop: {
                    xs: 0,
                    sm: index % 2 !== 0 ? theme.spacing(6) : "0",
                    lg: index % 2 !== 0 ? theme.spacing(8) : "0",
                  },
                }}
              >
                <Paper sx={{ height: "100%" }}>
                  <Card
                    sx={{
                      border: "1px solid",
                      borderColor: "rgb(255 255 255 / 16%)",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: "200px", md: "300px" },
                        width: "100%",
                        overflow: "hidden",
                      }}
                    >
                      {isLoading && (
                        <Box
                          sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <CircularProgress color="primary" />
                        </Box>
                      )}

                      <AdvancedImage
                        cldImg={cld
                          .image(`docs/${project.slug}`)
                          .delivery(quality("auto"))
                          .delivery(format("auto"))}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                        loading="lazy"
                        onLoad={() => setIsLoading(false)}
                        alt="project image"
                      />
                    </Box>

                    <CardContent
                      sx={{
                        padding: `${theme.spacing(2)}`,
                        flexGrow: 1,
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
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.text.secondary }}
                        >
                          {project.shortDescription}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            gap: theme.spacing(1.5),
                            marginTop: theme.spacing(2),
                          }}
                        >
                          {project.repositoryUrl ? (
                            <Link
                              href={project.repositoryUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              underline="none"
                            >
                              <Button
                                color="primary"
                                variant="outlined"
                                aria-label="Codice sorgente"
                                startIcon={<GitHubIcon />}
                              >
                                Codice
                              </Button>
                            </Link>
                          ) : (
                            <Button
                              color="primary"
                              variant="outlined"
                              disabled
                              aria-label="Codice sorgente"
                              startIcon={<GitHubIcon />}
                            >
                              Codice
                            </Button>
                          )}

                          {project.liveUrl ? (
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              underline="none"
                            >
                              <Button
                                color='secondary'
                                variant="outlined"
                                aria-label="Demo live"
                                startIcon={<LaptopIcon />}
                              >
                                Sito
                              </Button>
                            </Link>
                          ) : (
                            <Button
                              color='secondary'
                              variant="outlined"
                              disabled
                              aria-label="Demo live"
                              startIcon={<LaptopIcon />}
                            >
                              Sito
                            </Button>
                          )}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default HomeProjects;
