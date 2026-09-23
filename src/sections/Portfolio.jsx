import { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import AnimateOnView from "../common/AnimateOnView";
import { useLang } from "../context/LanguageContext";
import projects from "../data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

function ProjectCard({ project }) {
  const theme = useTheme();
  const { lang, t } = useLang();
  const primary = theme.palette.primary.main;
  const [hovered, setHovered] = useState(false);

  const description = lang === "it" ? project.shortDescription : project.shortDescriptionEn;

  const cardContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        border: "1px solid",
        borderColor: hovered
          ? `${primary}50`
          : theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.07)"
          : "rgba(0,0,0,0.08)",
        overflow: "hidden",
        transition: "border-color 0.3s, box-shadow 0.3s",
        boxShadow: hovered ? `0 12px 40px ${primary}18` : "none",
        cursor: project.liveUrl ? "pointer" : "default",
      }}
    >
      {/* Image */}
      <Box sx={{ height: { xs: 200, md: 240 }, overflow: "hidden", flexShrink: 0 }}>
        <motion.div
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ width: "100%", height: "100%" }}
        >
          <img
            src={project.image}
            width={960}
            height={533}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
            alt={`${project.title}: ${description}`}
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </Box>

      {/* Content */}
      <Box sx={{ p: { xs: 2.5, md: 3 }, display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.05rem", mb: 1 }}>
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary, lineHeight: 1.65 }}
        >
          {description}
        </Typography>
        {project.liveUrl && (
          <Typography
            sx={{ mt: "auto", pt: 2, display: "flex", alignItems: "center", gap: 0.5, fontSize: "0.85rem", fontWeight: 700, color: primary }}
          >
            {t.portfolio.visit}
            <OpenInNewIcon sx={{ fontSize: 16 }} />
          </Typography>
        )}
      </Box>
    </Box>
  );

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      style={{ height: "100%" }}
    >
      {project.liveUrl ? (
        <Box
          component="a"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "block", height: "100%", textDecoration: "none", color: "inherit" }}
        >
          {cardContent}
        </Box>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}

function Portfolio() {
  const theme = useTheme();
  const { t } = useLang();
  const primary = theme.palette.primary.main;

  return (
    <Box
      component="section"
      aria-labelledby="portfolio-title"
      sx={{ py: { xs: theme.spacing(8), md: theme.spacing(10) }, scrollMarginTop: "80px" }}
      id="portfolio"
    >
      <Container maxWidth="xl">
        <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>

          <AnimateOnView variant="fade-right">
            <Typography
              sx={{
                color: primary,
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                display: "block",
                mb: 1,
              }}
            >
              {t.portfolio.label}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.06}>
            <Typography id="portfolio-title" variant="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
              {t.portfolio.title}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.12}>
            <Typography
              variant="p"
              sx={{
                display: "block",
                color: theme.palette.text.secondary,
                maxWidth: "520px",
                lineHeight: 1.7,
                mb: 5,
              }}
            >
              {t.portfolio.subtitle}
            </Typography>
          </AnimateOnView>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                gap: { xs: 3, md: 4 },
              }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </Box>
          </motion.div>

        </Box>
      </Container>
    </Box>
  );
}

export default Portfolio;
