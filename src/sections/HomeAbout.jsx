import React, { useRef, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact, faVuejs, faLaravel, faSass, faBootstrap, faPhp,
  faHtml5, faCss3Alt, faJsSquare, faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase, faGears,
} from "@fortawesome/free-solid-svg-icons";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import AnimateOnView from "../common/AnimateOnView";
import { useLang } from "../context/LanguageContext";

// Per tecnologie senza icona FontAwesome usiamo un badge testuale
const TextBadge = ({ label, color }) => (
  <Box
    sx={{
      width: 28,
      height: 28,
      borderRadius: "6px",
      backgroundColor: `${color}30`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Typography sx={{ fontSize: "0.6rem", fontWeight: 800, color, lineHeight: 1, textAlign: "center" }}>
      {label}
    </Typography>
  </Box>
);

const skills = [
  { label: "HTML",        icon: faHtml5,     color: "#E34F26", bg: "#e34f2620" },
  { label: "CSS",         icon: faCss3Alt,   color: "#1572B6", bg: "#1572b620" },
  { label: "JavaScript",  icon: faJsSquare,  color: "#F7DF1E", bg: "#f7df1e20" },
  { label: "React.js",    icon: faReact,     color: "#61DAFB", bg: "#61dafb20" },
  { label: "Vue.js",      icon: faVuejs,     color: "#42b883", bg: "#42b88320" },
  { label: "Laravel",     icon: faLaravel,   color: "#FF2D20", bg: "#ff2d2020" },
  { label: "PHP",         icon: faPhp,       color: "#8892BF", bg: "#8892bf20" },
  { label: "MySQL",       icon: faDatabase,  color: "#00758F", bg: "#00758f20" },
  { label: "Bootstrap",   icon: faBootstrap, color: "#7952B3", bg: "#7952b320" },
  { label: "Sass/SCSS",   icon: faSass,      color: "#CC6699", bg: "#cc669920" },
  { label: "REST API",    icon: faGears,     color: "#6C757D", bg: "#6c757d20" },
  { label: "Git",         icon: faGitAlt,    color: "#F05032", bg: "#f0503220" },
  { label: "Material UI", badge: "MUI",      color: "#007FFF", bg: "#007fff20" },
  { label: "Filament",    badge: "FIL",      color: "#FDAE4B", bg: "#fdae4b20" },
];


function AnimatedCounter({ target, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const [display, setDisplay] = React.useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

function HomeAbout() {
  const theme = useTheme();
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const primary = theme.palette.primary.main;

  const stats = [
    { value: 4,  label: t.about.statsExp, suffix: "+" },
    { value: 14, label: t.about.statsTech, suffix: "+" },
  ];

  const whyMe = t.about.whyMe;

  return (
    <Box component="section" aria-label="Chi sono" sx={{ paddingTop: theme.spacing(6), scrollMarginTop: "80px" }} id="about">
      <Container maxWidth="xl">
        <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>

          {/* Label */}
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
              {t.about.label}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.06}>
            <Typography variant="h2" sx={{ fontWeight: "700", pb: 3 }}>
              {t.about.title}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.1}>
            <Typography
              variant="p"
              sx={{
                display: "block",
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.text.secondary
                    : theme.palette.text.primary,
                lineHeight: 1.85,
                maxWidth: "600px",
              }}
            >
              Sono uno{" "}
              <Typography component="span" sx={{ color: primary, fontWeight: 600 }}>
                {t.about.body1}
              </Typography>
              , {t.about.body2}
              <br /><br />
              {t.about.body3}
              <br /><br />
              <Typography component="span" sx={{ color: primary, fontWeight: 600 }}>
                {t.about.body4}
              </Typography>
              {" "}{t.about.body5}
            </Typography>
          </AnimateOnView>

          {/* Stats */}
          <AnimateOnView variant="fade-up" delay={0.15}>
            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, sm: 4 },
                mt: 5,
                mb: 6,
                flexWrap: "wrap",
              }}
            >
              {stats.map((stat) => (
                <Box
                  key={stat.label}
                  sx={{
                    flex: "1 1 110px",
                    p: 2.5,
                    borderRadius: "14px",
                    border: `1px solid ${primary}25`,
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? `${primary}0e`
                        : `${primary}07`,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "1.9rem", md: "2.4rem" },
                      fontWeight: 800,
                      color: primary,
                      lineHeight: 1,
                    }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: theme.palette.text.secondary,
                      mt: 0.6,
                      display: "block",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </AnimateOnView>

          {/* Skills grid */}
          <AnimateOnView variant="fade-up" delay={0.05}>
            <Typography
              sx={{
                fontWeight: 700,
                mb: 2.5,
                color: theme.palette.text.secondary,
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {t.about.stackLabel}
            </Typography>
          </AnimateOnView>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))",
              gap: "12px",
              marginBottom: "64px",
            }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.label}
                variants={skillVariants}
                whileHover={{ scale: 1.07, y: -4 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    p: 2,
                    borderRadius: "12px",
                    backgroundColor: skill.bg,
                    border: `1px solid ${skill.color}28`,
                    transition: "box-shadow 0.2s",
                    "&:hover": {
                      boxShadow: `0 4px 20px ${skill.color}28`,
                    },
                  }}
                >
                  {skill.icon
                    ? <FontAwesomeIcon icon={skill.icon} color={skill.color} size="xl" />
                    : <TextBadge label={skill.badge} color={skill.color} />
                  }
                  <Typography
                    sx={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      color: skill.color,
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    {skill.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </motion.div>

          {/* Perché scegliermi */}
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
              {t.about.whyLabel}
            </Typography>
          </AnimateOnView>

          <AnimateOnView variant="fade-right" delay={0.06}>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 4 }}>
              {t.about.whyTitle}
            </Typography>
          </AnimateOnView>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
            }}
          >
            {whyMe.map((item, i) => (
              <AnimateOnView key={item.title} variant="fade-up" delay={i * 0.1}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    p: 3,
                    borderRadius: "14px",
                    border: `1px solid`,
                    borderColor:
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.06)",
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.02)"
                        : "rgba(0,0,0,0.015)",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      borderColor: `${primary}35`,
                      boxShadow: `0 4px 20px ${primary}12`,
                    },
                  }}
                >
                  <CheckCircleOutlineIcon
                    sx={{ color: primary, mt: 0.3, flexShrink: 0 }}
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 700, mb: 0.5, fontSize: "0.95rem" }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary, lineHeight: 1.65 }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </AnimateOnView>
            ))}
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default HomeAbout;
