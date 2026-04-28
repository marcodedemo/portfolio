import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AnimateOnView from "../common/AnimateOnView";
import { useLang } from "../context/LanguageContext";

const serviceIcons = [
  <WebIcon sx={{ fontSize: 36 }} />,
  <CodeIcon sx={{ fontSize: 36 }} />,
  <StorageIcon sx={{ fontSize: 36 }} />,
  <RocketLaunchIcon sx={{ fontSize: 36 }} />,
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

function ServiceCard({ service }) {
  const theme = useTheme();
  const ref = useRef(null);
  const hovered = useRef(false);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 22 } }}
      style={{ height: "100%" }}
    >
      <Box
        sx={{
          height: "100%",
          p: { xs: 3, md: 4 },
          borderRadius: "16px",
          border: `1px solid`,
          borderColor:
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.07)"
              : "rgba(0,0,0,0.07)",
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.03)"
              : "rgba(0,0,0,0.02)",
          position: "relative",
          overflow: "hidden",
          transition: "border-color 0.3s, box-shadow 0.3s, background-color 0.3s",
          "&:hover": {
            borderColor: `${service.accent}50`,
            boxShadow: `0 12px 40px ${service.accent}18`,
            backgroundColor:
              theme.palette.mode === "dark"
                ? `${service.accent}08`
                : `${service.accent}05`,
          },
        }}
      >
        {/* Background glow */}
        <Box
          sx={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${service.accent}18 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        {/* Icon */}
        <Box
          sx={{
            display: "inline-flex",
            p: 1.5,
            borderRadius: "12px",
            backgroundColor: `${service.accent}18`,
            color: service.accent,
            mb: 2.5,
          }}
        >
          {service.icon}
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, mb: 1.5, fontSize: { xs: "1.05rem", md: "1.15rem" } }}
        >
          {service.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.75,
            mb: 2.5,
          }}
        >
          {service.description}
        </Typography>

        {/* Tags */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {service.tags.map((tag) => (
            <Box
              key={tag}
              sx={{
                px: 1.2,
                py: 0.4,
                borderRadius: "100px",
                backgroundColor: `${service.accent}15`,
                border: `1px solid ${service.accent}30`,
                fontSize: "0.7rem",
                fontWeight: 600,
                color: service.accent,
                letterSpacing: "0.02em",
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}

function Services() {
  const theme = useTheme();
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const services = t.services.items.map((item, i) => ({
    ...item,
    icon: serviceIcons[i],
    accent: theme.palette.primary.main,
  }));

  return (
    <Box component="section" aria-label="Servizi" sx={{ py: { xs: theme.spacing(8), md: theme.spacing(10) }, scrollMarginTop: "80px" }} id="services">
      <Container maxWidth="xl">
        <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>

          <AnimateOnView variant="fade-right">
            <Typography
              variant="span"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                display: "block",
                mb: 1,
              }}
            >
              {t.services.label}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.08}>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
              {t.services.title}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.14}>
            <Typography
              variant="p"
              sx={{
                display: "block",
                color: theme.palette.text.secondary,
                maxWidth: "520px",
                lineHeight: 1.7,
                mb: 6,
              }}
            >
              {t.services.subtitle}
            </Typography>
          </AnimateOnView>

          <Box
            ref={ref}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: "20px",
            }}
          >
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </Box>

          {/* Bottom CTA */}
          <AnimateOnView variant="fade-up" delay={0.1}>
            <Box
              sx={{
                mt: 7,
                p: { xs: 3, md: 4 },
                borderRadius: "16px",
                border: `1px solid ${theme.palette.primary.main}30`,
                backgroundColor: `${theme.palette.primary.main}08`,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                justifyContent: "space-between",
                gap: 3,
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 0.5 }}>
                  {t.services.ctaTitle}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {t.services.ctaDesc}
                </Typography>
              </Box>
              <Box
                component="a"
                href="#contacts"
                sx={{
                  display: "inline-block",
                  px: 3,
                  py: 1.4,
                  borderRadius: "10px",
                  backgroundColor: theme.palette.primary.main,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "opacity 0.2s, transform 0.2s",
                  "&:hover": { opacity: 0.88, transform: "translateY(-1px)" },
                }}
              >
                {t.services.ctaBtn}
              </Box>
            </Box>
          </AnimateOnView>

        </Box>
      </Container>
    </Box>
  );
}

export default Services;
