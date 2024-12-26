"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

export default function PricingHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-12"
    >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the perfect plan for your business needs
            </p>
          </div>
    </motion.div>
  );
}