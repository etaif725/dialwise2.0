"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TextRevealProps {
  children: React.ReactNode;
  width?: "full" | "fit";
  delay?: number;
}

export default function TextReveal({ children, width = "fit", delay = 0 }: TextRevealProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${width === "full" ? "w-full" : "w-fit"}`}
    >
      <motion.div
        variants={{
          hidden: { y: "100%", opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1], // Using a valid easing curve
              delay,
            },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
}