"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Book, MessageSquare, Video, FileText, LifeBuoy, Phone } from "lucide-react";

const categories = [
  {
    title: "Getting Started",
    icon: Book,
    articles: [
      "Quick Start Guide",
      "Setting Up Your First AI Agent",
      "Basic Configuration",
      "Integration Overview"
    ]
  },
  {
    title: "Tutorials",
    icon: Video,
    articles: [
      "Voice Agent Configuration",
      "Chatbot Customization",
      "Analytics Dashboard",
      "Advanced Settings"
    ]
  },
  {
    title: "FAQs",
    icon: MessageSquare,
    articles: [
      "Common Issues",
      "Billing Questions",
      "Technical Requirements",
      "Security Concerns"
    ]
  },
  {
    title: "API Documentation",
    icon: FileText,
    articles: [
      "API Overview",
      "Authentication",
      "Endpoints",
      "Rate Limits"
    ]
  }
];

export default function Help() {
  return (
    <div className="min-h-screen pt-20 bg_pattern_top">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
          <p className="text-center text-lg text-muted-foreground mb-8">
            Find answers to your questions and learn how to get the most out of DialWise.ai
          </p>

          <div className="relative mb-12">
            <Input
              placeholder="Search for help..."
              className="pl-12"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex items-center mb-4">
                      <Icon className="h-6 w-6 text-primary mr-2" />
                      <h2 className="text-xl font-semibold">{category.title}</h2>
                    </div>
                    <ul className="space-y-2">
                      {category.articles.map((article, i) => (
                        <li key={i}>
                          <a
                            href="#"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {article}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for?
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}