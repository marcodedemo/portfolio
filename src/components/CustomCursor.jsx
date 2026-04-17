import { useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";

function CustomCursor() {
  const theme = useTheme();
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  const isTouch = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring || isTouch) return;

    const primary = theme.palette.primary.main;

    dot.style.background = primary;
    ring.style.borderColor = primary;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const onMouseEnterInteractive = () => {
      ring.style.width = "48px";
      ring.style.height = "48px";
      ring.style.opacity = "0.5";
    };

    const onMouseLeaveInteractive = () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.opacity = "1";
    };

    const animateRing = () => {
      const lerp = (a, b, t) => a + (b - a) * t;
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.12);
      ring.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`;
      rafRef.current = requestAnimationFrame(animateRing);
    };

    rafRef.current = requestAnimationFrame(animateRing);
    window.addEventListener("mousemove", onMouseMove);

    const interactiveEls = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label"
    );
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, [theme.palette.primary.main]);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-100px, -100px)",
          transition: "background 0.3s",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "2px solid",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.2s, height 0.2s, opacity 0.2s, border-color 0.3s",
        }}
      />
    </>
  );
}

export default CustomCursor;
