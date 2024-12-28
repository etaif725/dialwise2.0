"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function PricingLimits() {
  const limits = [
    {
      title: "Base",
      description: "1,000 calls at your command",
      value: "1,000"
    },
    {
      title: "Marketing Messages & Events",
      description: "5,000 marketing messages per month",
      value: "5,000"
    },
    {
      title: "Team Size",
      description: "Up to 5 team members",
      value: "5"
    },
    {
      title: "Storage",
      description: "100GB storage included",
      value: "100GB"
    }
  ];

  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Increase your limits
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {limits.map((limit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <h3 className="font-semibold mb-2">{limit.title}</h3>
              <p className="text-3xl font-bold text-primary mb-2">{limit.value}</p>
              <p className="text-sm text-muted-foreground">{limit.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}