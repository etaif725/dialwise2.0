"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import testimonials from "./testimonials.json";
import { useTheme } from "next-themes";
import { ErrorBoundary } from "@/components/ui/error-boundary";

// Define the Testimonial type explicitly
type Testimonial = {
  image: string;
  name: string;
  role: string;
  content: string;
  rating: number;
};

const TestimonialsColumn = ({
  testimonials,
  duration = 10,
  className = "",
  theme,
}: {
  testimonials: Testimonial[];
  duration?: number;
  className?: string;
  theme?: string;
}) => (
  <div className={className}>
    <motion.div 
      animate={{
        translateY: "-50%",
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: duration,
      }}
      className="flex flex-col gap-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <div key={index} className="flex flex-col gap-6">
          {testimonials.map((testimonial: Testimonial, idx: number) => (
            <Card 
              key={idx}
              className={`p-6 rounded-3xl max-w-sm w-full 
                ${theme === 'light' 
                  ? 'border border-green-400 shadow-[0_7px_14px_#EAEAEA]' 
                  : 'border border-green-800 shadow-[0_7px_14px_rgba(0,0,0,0.3)]'
              }`}
            >
              <div className="text-muted-background mb-4">{testimonial.content}</div>
              <div className="flex items-center gap-2 mt-5">
                <div className="relative w-10 h-10">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover" 
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">{testimonial.name}</div>
                  <div className="tracking-tight leading-5 text-muted-foreground">{testimonial.role}</div>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary" fill="currentColor" />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      ))}
    </motion.div>
  </div>
);

export default function Testimonials() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders on client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Explicitly type the testimonials array
  const typedTestimonials: Testimonial[] = testimonials;

  // Split testimonials into three columns
  const firstColumn = typedTestimonials.slice(0, 3);
  const secondColumn = typedTestimonials.slice(3, 6);
  const thirdColumn = typedTestimonials.slice(6, 9);

  // Don't render anything until mounted
  if (!mounted) return null;

  return (
    <ErrorBoundary>
      <section 
        id="testimonials" 
        className="w-full max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 bg_pattern_top overflow-hidden relative"
      >
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Don't Miss</span> the <span className="italic">AI Train</span>
          </h2>
        </motion.div>

        {/* Testimonials Columns */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={19} theme={theme} />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            duration={15} 
            className="hidden md:block"
            theme={theme}
          />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            duration={13} 
            className="hidden lg:block"
            theme={theme}
          />
        </div>
      </section>
    </ErrorBoundary>
  );
}