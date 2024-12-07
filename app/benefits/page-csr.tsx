"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bot,
  MessageSquare,
  Zap,
  Clock,
  Users,
  BarChart3,
  Calendar,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import CalendarModal from "@/components/calendar-modal";
import ChallengesGrid from "@/components/challenges-grid";
import LeadForm from "@/components/lead_form";

const features = [
  {
    id: "real-time-support",
    feature_title: "Multi-Channel Real-Time Support",
    description: "Provide instant, contextual responses across all communication channels. Our AI understands customer intent and delivers personalized solutions.",
    benefits: [
      "Instant response to customer queries",
      "Context-aware conversations",
      "Seamless channel switching",
      "Personalized interactions"
    ],
    image: "/image/ai-19.webp",
    icon: Bot
  },
  {
    id: "conversation-management",
    feature_title: "Smart Conversation Management",
    description: "Handle multiple conversations simultaneously with intelligent queuing and prioritization, ensuring no customer is left waiting.",
    benefits: [
      "Intelligent conversation routing",
      "Priority-based handling",
      "Automated follow-ups",
      "Conversation history tracking"
    ],
    image: "/image/ai-5.webp",
    icon: MessageSquare
  },
  {
    id: "global-communication",
    feature_title: "Global Communication",
    description: "Break language barriers with real-time translation and localization support, enabling worldwide business expansion.",
    benefits: [
      "25+ languages supported",
      "Cultural context awareness",
      "Real-time translation",
      "Local market adaptation"
    ],
    image: "/image/ai-15.webp",
    icon: Globe
  },
  {
    id: "analytics",
    feature_title: "Advanced Analytics",
    description: "Gain deep insights into customer interactions and agent performance with comprehensive analytics and reporting.",
    benefits: [
      "Performance metrics tracking",
      "Conversation analysis",
      "Customer sentiment tracking",
      "ROI measurement"
    ],
    image: "/image/ai-3.webp",
    icon: BarChart3
  },
  {
    id: "availability",
    feature_title: "24/7 Availability",
    description: "Never miss a lead with round-the-clock automated support that handles inquiries at any time.",
    benefits: [
      "Always-on support",
      "Holiday coverage",
      "Time zone adaptation",
      "Peak handling capacity"
    ],
    image: "/image/ai-18.webp",
    icon: Clock
  },
  {
    id: "personalization",
    feature_title: "Personalized Experience",
    description: "Deliver tailored interactions based on user history and preferences, creating meaningful customer relationships.",
    benefits: [
      "Customer profile analysis",
      "Behavioral adaptation",
      "Preference learning",
      "Customized responses"
    ],
    image: "/image/ai-1.webp",
    icon: Users
  }
];

export default function DWFeatures() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  return (
    <div className="min-h-screen pt-20 bg_pattern_top">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Benefits that <span className="gradient-text"> Drive Results</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Transform your business communication with AI-powered solutions that 
              save time, reduce costs, and improve customer satisfaction.
            </p>
          </motion.div>

          {/* Challenges Grid */}
          <div className="max-w-6xl mx-auto mb-24">
            <ChallengesGrid />
          </div>

          {/* Core Features Grid */}
          <div className="max-w-6xl mx-auto py-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Core Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card 
                      className={`p-6 hover:border-primary transition-all duration-300 cursor-pointer ${
                        selectedFeature === feature ? 'border-primary' : ''
                      }`}
                      onClick={() => setSelectedFeature(feature)}
                    >
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.feature_title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Feature Sections */}
          {features.map((feature, index) => (
            <section key={feature.id} className="py-20">
              <div className="container mx-auto px-4">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[400px]"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.feature_title}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <feature.icon className="h-12 w-12 text-primary" />
                    <h2 className="text-3xl font-bold">{feature.feature_title}</h2>
                    <p className="text-lg text-muted-foreground">{feature.description}</p>
                    <div className="space-y-4">
                      {feature.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        onClick={() => setIsCalendarOpen(true)}
                      >
                        Schedule Demo
                        <Calendar className="ml-2 h-5 w-5" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => setIsLeadFormOpen(true)}
                      >
                        Talk to AI Agent
                        <MessageSquare className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

        {/* Modals */}
        {isCalendarOpen && (
          <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
        )}
        {isLeadFormOpen && (
          <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
        )}
    </div>
  );
}