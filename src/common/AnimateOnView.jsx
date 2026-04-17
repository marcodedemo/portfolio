import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const presets = {
  "fade-up": {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
};

function AnimateOnView({
  children,
  variant = "fade-up",
  customVariants,
  delay = 0,
  duration = 0.6,
  once = true,
  margin = "-60px",
  style,
  className,
  as = "div",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });

  const variants = customVariants || presets[variant] || presets["fade-up"];

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={style}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

export default AnimateOnView;
