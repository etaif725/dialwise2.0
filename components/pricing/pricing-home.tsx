"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Building2, ArrowRight, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { pricingPlans } from "@/lib/pricing-plans";
import { PricingCard } from "./pricing-card";
import { BillingToggle } from "./billing-toggle";
import { useState } from "react";
import PricingSection from "./pricing-section";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export default function PricingHome() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg_pattern_top">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Simple, Usage-Based Pricing
        </h2>
        <p className="text-xl text-muted-foreground">
          Pay only for what you use, with flexible plans for businesses of all sizes
        </p>
      </motion.div>

      {/* Main Plans */}
      <PricingSection />

    </section>
  );
}