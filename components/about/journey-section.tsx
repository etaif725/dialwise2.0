"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Rocket, Trophy } from "lucide-react";

const milestones = [
  {
    year: "2022",
    icon: Lightbulb,
    title: "The Beginning",
    description: "Founded with a vision to make AI voice technology accessible to businesses of all sizes."
  },
  {
    year: "2023",
    icon: Users,
    title: "Growing Impact",
    description: "Expanded our reach to serve hundreds of businesses across multiple industries."
  },
  {
    year: "2024",
    icon: Rocket,
    title: "Innovation Leap",
    description: "Launched advanced AI capabilities and expanded language support to 25+ languages."
  },
  {
    year: "2025",
    icon: Trophy,
    title: "Future Vision",
    description: "Working towards becoming the global leader in AI-powered business communication."
  }
];

export function JourneySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
          <p className="text-lg text-muted-foreground">
            From a simple idea to a transformative AI platform, our journey has been 
            driven by innovation and a commitment to excellence.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute right-8 top-0 h-full w-px bg-border" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center"
                >
                  <Card className="p-6 mr-16 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-semibold mb-1">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </Card>
                  {/* Timeline dot */}
                  <div className="absolute right-6 w-4 h-4 rounded-full bg-primary" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}