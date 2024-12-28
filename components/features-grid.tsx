"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Bot, MessageSquare, Zap, BarChart3, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Multi-Channel Real-Time Support",
    description: "AI agents that understand context, sentiment, and respond naturally across multiple channels.",
    icon: Bot,
  },
  {
    title: "Conversation Management",
    description: "Seamlessly handle multiple conversations with smart queuing and prioritization.",
    icon: MessageSquare,
  },
  {
    title: "Global Communication",
    description: "Break language barriers with real-time translation and localization support.",
    icon: Zap,
  },
  {
    title: "Advanced Analytics",
    description: "Track performance metrics and gain insights from every interaction.",
    icon: BarChart3,
  },
  {
    title: "24/7 Availability",
    description: "Never miss a lead with round-the-clock automated support.",
    icon: Clock,
  },
  {
    title: "Personalized Experience",
    description: "Deliver tailored interactions based on user history and preferences.",
    icon: Users,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
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

export default function FeaturesGrid() {
  const gridRef = useRef(null);

  return (
    <motion.div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
          >
            <Card className="group p-6 hover:border-primary transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                <Icon className="h-6 w-6 text-primary group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}