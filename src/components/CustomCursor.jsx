import { useEffect, useRef } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const isTouch = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || isTouch) return;

    const onMouseMove = (e) => {
      cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    };

    const onMouseEnterInteractive = () => {
      cursor.style.width = "56px";
      cursor.style.height = "56px";
      cursor.style.margin = "-8px";
    };

    const onMouseLeaveInteractive = () => {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.margin = "0px";
    };

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
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "white",
        mixBlendMode: "difference",
        pointerEvents: "none",
        zIndex: 99999,
        transform: "translate(-100px, -100px)",
        transition: "width 0.2s ease, height 0.2s ease",
      }}
    />
  );
}

export default CustomCursor;
