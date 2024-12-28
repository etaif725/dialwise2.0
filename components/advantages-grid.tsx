"use client";

import { motion } from "framer-motion";
import { Zap, Headphones, BarChart, Globe, Users, Clock, Languages, HeartHandshake } from "lucide-react";
import { Card } from "@/components/ui/card";

const advantages = [
  {
    title: "Easy Entry, High Returns",
    description: "Maximize your investment with our barrier-free and significant profit potential. Start scaling today with Chatbots and AI Voice Agents!",
    icon: Zap,
  },
  {
    title: "Robust Support",
    description: "Handling your Voice AI functions, configurations, updates, and maintenance to ensure success.",
    icon: Headphones,
  },
  {
    title: "Scalable Business Model",
    description: "Perfect solution when you're a small business with big aspirations or a global enterprise.",
    icon: BarChart,
  },
  {
    title: "Unlimited Possibilities",
    description: "Every business, from startups to SMEs, service industries, and beyond, finds value and effective communication.",
    icon: Globe,
  },
  {
    title: "Empowering Businesses",
    description: "We are dedicated to redefining the conversational customer engagement with AI-powered communication.",
    icon: Users,
  },
  {
    title: "Automate For Efficiency",
    description: "Experience your business full potential with the power of automation through AI, save time, cost, and AI drives calls.",
    icon: Clock,
  },
  {
    title: "Break language barriers",
    description: "Our AI has the ability to support 29 languages. Offer a stellar customer experience with seamless and linguistic flexibility.",
    icon: Languages,
  },
  {
    title: "Innovate Customer Service",
    description: "Elevate the standard of customer interaction with consistency and quality.",
    icon: HeartHandshake,
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

export default function AdvantagesGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 bg_pattern">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="gradient-text">Advantages</span> Of Using <span className="gradient-text">Voice AI</span> For Your Business
        </h2>
        <p className="text-2xl md:text-3xl text-muted-foreground italic">

        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {advantages.map((advantage, index) => {
          const Icon = advantage.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className="group p-6 hover:border-primary transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}