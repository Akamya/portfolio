"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    FinisherHeader: any;
  }
}

export const BackgroundAnimation = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/finisher-header.es5.min.js";
    script.onload = () => {
      new window.FinisherHeader({
        count: 60,
        size: { min: 2, max: 6, pulse: 0.1 },
        speed: {
          x: { min: 0, max: 0.3 },
          y: { min: 0, max: 0.4 },
        },
        colors: {
          background: "#032230",
          particles: [
            "#FAFCFB",
            "#B7CEDE",
            "#D0E1E8",
            "#EBDFE1",
            "#DFB9B6",
            "#90C8D0",
            "#D2D2D2",
            "#A3A4A4",
          ],
        },
        blending: "normal",
        opacity: { center: 0.8, edge: 0.3 },
        skew: 0,
        shapes: ["c"],
      });
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="header finisher-header"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        width: "100%",
        height: "100%", // Force à prendre toute la hauteur du parent
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
      }}
    />
  );
};
