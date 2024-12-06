"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Code,
  BookOpen,
  Headphones,
  MessageSquare,
  Globe,
  ArrowRight,
  Zap,
  FileText,
  Webhook,
  Lock,
} from "lucide-react";

const gettingStarted = [
  {
    title: "Quick Start Guide",
    description: "Get up and running with DialWise.ai in minutes",
    icon: Zap,
    href: "/docs/quick-start",
  },
  {
    title: "Voice Agents",
    description: "Learn about AI-powered voice agent capabilities",
    icon: Headphones,
    href: "/docs/voice-agents",
  },
  {
    title: "Chatbots",
    description: "Explore our chatbot integration options",
    icon: MessageSquare,
    href: "/docs/chatbots",
  },
  {
    title: "Multilingual Support",
    description: "Support customers in multiple languages",
    icon: Globe,
    href: "/docs/multilingual",
  },
];

const apiDocs = [
  {
    title: "API Reference",
    description: "Complete API documentation",
    icon: Code,
    href: "/docs/api-reference",
  },
  {
    title: "Authentication",
    description: "Secure your API requests",
    icon: Lock,
    href: "/docs/authentication",
  },
  {
    title: "Webhooks",
    description: "Real-time event notifications",
    icon: Webhook,
    href: "/docs/webhooks",
  },
  {
    title: "Response Types",
    description: "Understanding API responses",
    icon: FileText,
    href: "/docs/response-types",
  },
];

export default function Documentation() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pb-8 border-b"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">Documentation</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Welcome to DialWise.ai documentation. Learn how to integrate and leverage our 
          AI-powered voice agents and chatbots for your business.
        </p>
      </motion.div>

      {/* Getting Started Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          Getting Started
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {gettingStarted.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {item.description}
                      </p>
                      <Button
                        variant="ghost"
                        className="group/btn"
                        asChild
                      >
                        <a href={item.href}>
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* API Documentation Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          API Documentation
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {apiDocs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {item.description}
                      </p>
                      <Button
                        variant="ghost"
                        className="group/btn"
                        asChild
                      >
                        <a href={item.href}>
                          View documentation
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Help & Support */}
      <section>
        <Card className="p-8 bg-primary text-primary-foreground">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="mb-6 text-primary-foreground/90">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="secondary"
              size="lg"
              asChild
            >
              <a href="/contact">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="/community">
                Join Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}