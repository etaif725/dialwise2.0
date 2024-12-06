// components/SplineAI.tsx
"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import Spline from "@splinetool/react-spline/next";
import { useRef } from "react";

export default function SplineAI() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const shadow = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 20px 50px rgba(0,0,0,0.3)"]
  );

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity, boxShadow: shadow }}
      className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden bg-transparent"
    >
      <Spline
        scene="https://prod.spline.design/Ldy8i8DhmU62Vc05/scene.splinecode" 
      />
    </motion.div>
  );
}
