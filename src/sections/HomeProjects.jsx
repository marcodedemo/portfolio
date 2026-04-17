import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  Card,
  CardContent,
  Divider,
  CircularProgress,
  Button,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { quality, format } from "@cloudinary/url-gen/actions/delivery";
import { motion, AnimatePresence } from "framer-motion";

import LaptopIcon from "@mui/icons-material/Laptop";
import GitHubIcon from "@mui/icons-material/GitHub";

import { useTheme } from "@mui/material/styles";

import Projects from "../data/Projects";
import TechnologyLabel from "../common/TechnologyLabel";
import AnimateOnView from "../common/AnimateOnView";

const categories = ["Tutti", "Frontend", "Fullstack"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
};

const cld = new Cloudinary({ cloud: { cloudName: "dzqk808cv" } });

function ProjectCard({ project }) {
  const theme = useTheme();
  const [imgLoading, setImgLoading] = useState(true);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      layout
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ height: "100%", borderRadius: "12px" }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <Card
        sx={{
          border: "1px solid",
          borderColor: hovered
            ? `${theme.palette.primary.main}60`
            : theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.1)",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "border-color 0.3s, box-shadow 0.3s",
          boxShadow: hovered
            ? `0 8px 32px ${theme.palette.primary.main}25`
            : "none",
          overflow: "hidden",
        }}
      >
        {/* Image with overlay on hover */}
        <Box
          sx={{
            height: { xs: "200px", md: "280px" },
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {imgLoading && (
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(0,0,0,0.3)"
                    : "rgba(255,255,255,0.5)",
              }}
            >
              <CircularProgress color="primary" size={32} />
            </Box>
          )}

          <motion.div
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ width: "100%", height: "100%" }}
          >
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
              onLoad={() => setImgLoading(false)}
              alt={`${project.title} preview`}
            />
          </motion.div>

          {/* Hover overlay with CTA */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to top, ${
                    theme.palette.mode === "dark" ? "#2b2b2bcc" : "#ffffffcc"
                  }, transparent)`,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  gap: "12px",
                  padding: "16px",
                }}
              >
                {project.repositoryUrl && (
                  <Link href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" underline="none">
                    <Button size="small" variant="contained" color="primary" startIcon={<GitHubIcon />}>
                      Codice
                    </Button>
                  </Link>
                )}
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" underline="none">
                    <Button size="small" variant="contained" color="secondary" startIcon={<LaptopIcon />}>
                      Sito
                    </Button>
                  </Link>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

        <CardContent sx={{ padding: theme.spacing(2), flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <Typography variant="h5" sx={{ fontWeight: "700" }}>
              {project.title}
            </Typography>
            <Chip
              label={project.type}
              size="small"
              sx={{
                fontSize: "0.65rem",
                height: "20px",
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                border: "1px solid",
                backgroundColor: `${theme.palette.primary.main}15`,
                fontWeight: 600,
                ml: 1,
                flexShrink: 0,
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.75,
              pt: 1.5,
            }}
          >
            {project.mainTechnologies.map((tech) => (
              <TechnologyLabel technology={tech} key={tech} />
            ))}
          </Box>

          <Divider sx={{ my: 1.5 }} />

          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary, flexGrow: 1, lineHeight: 1.6 }}
          >
            {project.shortDescription}
          </Typography>

          {/* Buttons (visible always on mobile, hidden on desktop since overlay handles it) */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              gap: 1.5,
              mt: 2,
            }}
          >
            {project.repositoryUrl ? (
              <Link href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" underline="none">
                <Button color="primary" variant="outlined" size="small" startIcon={<GitHubIcon />}>
                  Codice
                </Button>
              </Link>
            ) : (
              <Button color="primary" variant="outlined" size="small" disabled startIcon={<GitHubIcon />}>
                Codice
              </Button>
            )}
            {project.liveUrl ? (
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" underline="none">
                <Button color="secondary" variant="outlined" size="small" startIcon={<LaptopIcon />}>
                  Sito
                </Button>
              </Link>
            ) : (
              <Button color="secondary" variant="outlined" size="small" disabled startIcon={<LaptopIcon />}>
                Sito
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function HomeProjects() {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState("Tutti");

  const filtered = activeCategory === "Tutti"
    ? Projects
    : Projects.filter((p) => p.type === activeCategory);

  return (
    <Box component="section" aria-label="Progetti" sx={{ paddingTop: theme.spacing(14), scrollMarginTop: "80px" }} id="projects">
      <Container maxWidth="xl">
        <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>

          <AnimateOnView variant="fade-right">
            <Typography variant="h2" sx={{ fontWeight: "700", pb: 2 }}>
              Progetti
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.1}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap", pb: 4 }}>
              <Typography variant="span" sx={{ color: theme.palette.text.secondary }}>
                Alcuni dei progetti su cui ho lavorato.
              </Typography>
            </Box>
          </AnimateOnView>

          {/* Category filter */}
          <AnimateOnView variant="fade-up" delay={0.15}>
            <Box sx={{ display: "flex", gap: 1, mb: 4, flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <motion.div key={cat} whileTap={{ scale: 0.95 }}>
                  <Chip
                    label={cat}
                    onClick={() => setActiveCategory(cat)}
                    sx={{
                      fontWeight: 600,
                      px: 0.5,
                      transition: "all 0.2s",
                      backgroundColor:
                        activeCategory === cat
                          ? theme.palette.primary.main
                          : "transparent",
                      color:
                        activeCategory === cat
                          ? "#fff"
                          : theme.palette.text.secondary,
                      border: `1px solid ${
                        activeCategory === cat
                          ? theme.palette.primary.main
                          : theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.2)"
                          : "rgba(0,0,0,0.15)"
                      }`,
                      "&:hover": {
                        backgroundColor:
                          activeCategory === cat
                            ? theme.palette.primary.dark
                            : `${theme.palette.primary.main}20`,
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </AnimateOnView>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Grid container spacing={{ xs: 3, md: 4 }}>
                {filtered.map((project, index) => (
                  <Grid
                    key={project.slug}
                    size={{ xs: 12, sm: 6 }}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: {
                        xs: 0,
                        sm: index % 2 !== 0 ? theme.spacing(6) : 0,
                      },
                    }}
                  >
                    <ProjectCard project={project} />
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </AnimatePresence>

        </Box>
      </Container>
    </Box>
  );
}

export default HomeProjects;
