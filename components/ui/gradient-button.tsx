"use client";

import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

// Define GradientButtonProps, excluding drag and animation properties from ButtonHTMLAttributes
type GradientButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'style'
> & {
  variant?: "primary" | "secondary";
  size?: "default" | "lg" | "sm";
  children: React.ReactNode;
  motionProps?: MotionProps; // Handle motion-related props separately
};

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ variant = "primary", size = "default", className, children, motionProps, ...props }, ref) => {
    const variants = {
      primary: "bg-gradient-to-r from-[#70E000] to-[#FDC500]",
      secondary: "bg-gradient-to-r from-[#6721FF] to-[#00CBFF]",
    };

    const sizes = {
      default: "px-6 py-3",
      lg: "px-8 py-4 text-lg",
      sm: "px-4 py-2 text-sm",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative rounded-lg font-semibold text-black transition-all duration-300",
          variants[variant],
          sizes[size],
          className
        )}
        {...props} // Spread the non-animation props
        {...motionProps} // Spread the animation props separately
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div
            className={cn(
              "h-full w-full rounded-lg blur-sm",
              variant === "primary"
                ? "bg-gradient-to-r from-[#70E000] to-[#FDC500]"
                : "bg-gradient-to-r from-[#6721FF] to-[#00CBFF]"
            )}
          />
        </div>
      </motion.button>
    );
  }
);

GradientButton.displayName = "GradientButton";

export default GradientButton;
