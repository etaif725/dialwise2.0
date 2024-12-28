"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";

const challenges = [
  {
    problem: "Missing calls and losing potential customers",
    solution: "24/7 AI voice agents that never miss a call",
    impact: "Capture every lead, even outside business hours"
  },
  {
    problem: "High operational costs for customer service",
    solution: "Automated response system that scales effortlessly",
    impact: "Reduce costs while improving service quality"
  },
  {
    problem: "Inconsistent customer experience",
    solution: "AI-powered responses with consistent quality",
    impact: "Maintain brand voice across all interactions"
  },
  {
    problem: "Language barriers limiting market reach",
    solution: "Multilingual support in 29 languages",
    impact: "Expand into new markets confidently"
  },
  {
    problem: "Slow response times frustrating customers",
    solution: "Instant responses to common queries",
    impact: "Improve customer satisfaction and retention"
  },
  {
    problem: "Manual data entry and follow-ups",
    solution: "Automated workflow integration with CRM",
    impact: "Save time and reduce human error"
  }
];

export default function ChallengesGrid() {
  return (
    <div className="grid gap-8">
      {challenges.map((challenge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6">
            <div className="grid gap-6">
              {/* Problem */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Challenge:</h3>
                  <p className="text-muted-foreground">{challenge.problem}</p>
                </div>
              </div>

              {/* Solution */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Solution:</h3>
                  <p className="text-muted-foreground">{challenge.solution}</p>
                </div>
              </div>

              {/* Impact */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Impact:</h3>
                  <p className="text-muted-foreground">{challenge.impact}</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}