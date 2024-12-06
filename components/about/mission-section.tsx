"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Rocket, Heart, Globe } from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "Pushing the boundaries of AI technology to create more natural and effective communication solutions."
  },
  {
    icon: Heart,
    title: "Customer Success",
    description: "Dedicated to helping businesses thrive through transformative AI solutions and unparalleled support."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Breaking language barriers and enabling businesses to reach customers worldwide with multilingual AI."
  }
];

export function MissionSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            At DialWise.ai, we're on a mission to revolutionize business communication 
            through AI innovation. We believe every business deserves access to 
            cutting-edge AI technology that can transform their customer interactions 
            and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}