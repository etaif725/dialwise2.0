"use client"

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CalendarModal from "@/components/calendar-modal";
import ChatModal from "@/components/chat-modal";
import {
  Rocket,
  MessageSquare,
  Calendar,
  Zap,
  Clock,
  Bot,
  ArrowRight,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LeadForm from "@/components/lead_form";
import Metadata from "../Metadata";

// Dynamically import SplineAI for client-side rendering
const SplineAI = dynamic(() => import("@/components/splineAI"), {
  ssr: false,
});

const faqs = [
  {
    question: "What is DialWise.ai?",
    answer: "DialWise.ai is an advanced AI Chatbot & AI Voice Agents System that helps you increase revenue, cut costs, and save time by maximizing ROI and conversions on your website. It is mobile-friendly, easy to use, and integrates seamlessly with your existing systems."
  },
  {
    question: "How long does it take for your AI to study my business?",
    answer: "Our AI modules will study everything about your business in approximately 2-3 hours (if you have up to 100 documents/website pages). The training process is quick and efficient, so you can start using your AI Chatbot and AI Voice Agents within a few hours, not days."
  },
  {
    question: "Can DialWise.ai integrate with my existing website and CRM?",
    answer: "Yes! DialWise.ai integrates seamlessly with any website you currently own, whether it's built on a CMS (like WordPress), full-stack website/application, or other no-code platforms, such as: framer, webflow and others. We support a wide range of systems to ensure smooth integration for both user experience and efficient AI Automations. Among the CRM systems we support are: Zoho CRM, Salesforce, HubSpot, GoHighLevel, RYSEUP CRM, NetworkLeads, SmartMoving CRM and others."
  },
  {
    question: "What are the benefits of using AI Chatbots and Voice Agents in 2024?",
    answer: "AI offers numerous benefits, including immense time savings, increased Monthly Recurring Revenue (MRR), reduced labor costs, and boosted sales conversions. It is highly customizable to meet your specific business needs. Based on recent data, ONLY 5% of businesses in the US (out of 33 million) utilize AI, however, most of those who do, do not use AI Voice Agents or fully trained AI Chatbots. We are here to change that!"
  },
  {
    question: "Are DialWise AI Agents customizable?",
    answer: "Absolutely! DialWise's AI Chatbots and AI Voice Agents have been tested with over 30 companies in 6+ different niches. Our AI Agents can be tailored to meet your specific requirements, whether it's for sales, customer service, or e-commerce."
  },
  {
    question: "How does DialWise AI Agents actually help with sales?",
    answer: "DialWise's AI Modules are oriented towards sales and customer service best practices, with pre-trained AI Agents designed to maximize sales conversions. From getting an appointment approved to pitching clients, to providing customer service. DialWise's AI Agents will help you close more deals!"
  },
  {
    question: "How secure is my data with DialWise.ai?",
    answer: "Your data is securely and reliably hosted with us, however, we never store chat history or client sensitive information locally on our servers, ensuring that your training data remains private and secure. We also fully support FCC and HIPPA regulations in the US."
  },
  {
    question: "Will DialWise.ai be able to prevent missed-calls in my business?",
    answer: "With our easy-to-use platform, you will no longer lose potential clients due to technical problems, delays, or missed calls. Our AI responds quickly to ensure you never miss an opportunity to engage with your visitors."
  },
  {
    question: "How do I get started using DialWise.ai?",
    answer: "Getting started with DialWise is easy! First, create a free account. Then, personalize your AI by filling out a form about your business (once we finish the initial account activation process). In about 72 hours, our AI Knowledgebase will be fully trained and ready to integrate with your website and CRM."
  }
];

const steps = [
  {
    title: "Step 1: Book a Demo",
    description: "Schedule a personalized demo to see DialWise.ai in action.",
    icon: Calendar,
    action: "Schedule Demo",
    type: "calendar",
  },
  {
    title: "Step 2: Quick Setup",
    description: "Our team configures your AI agents within 72 hours.",
    icon: Zap,
    action: "Talk to AI Agent",
    type: "chat",
  },
  {
    title: "Step 3: Go Live",
    description: "Launch your AI agents and start automating conversations.",
    icon: Rocket,
    action: "Get Started",
    type: "calendar",
  },
];

const benefits = [
  {
    title: "24/7 Availability",
    description: "Never miss a lead with round-the-clock automated support.",
    icon: Clock,
  },
  {
    title: "Quick Integration",
    description: "Seamless setup with your existing systems within hours.",
    icon: Zap,
  },
  {
    title: "AI-Powered",
    description: "Advanced artificial intelligence for natural conversations.",
    icon: Bot,
  },
];

export default function GetStarted() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleAction = (type: string) => {
    if (type === "calendar") {
      setIsCalendarOpen(true);
    } else if (type === "chat") {
      setIsLeadFormOpen(true);
    }
  };

  return (
    <>
    {/* Metadata component to update dynamic SEO for this page */}
    <Metadata
      title="All you need to know about AI Voice Agents & Chatbots | DialWise.ai"
      description="Book a free demo today and get started with DialWise.ai. Our advanced AI voice agents and chatbots deliver human-like interactions that drive business growth."
      keywords={['AI voice agents', 'customer service automation', 'AI chatbots']}
    />
    <div className="min-h-screen pt-20 bg_pattern_top">
      <div className="container mx-auto px-4 pt-20">
      {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Get Started</span> with DialWise.ai
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your business communication with AI-powered voice agents
                and chatbots in three simple steps.
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Lazy-loaded Spline section
      <div className="container mx-auto px-4">
      <SplineAI/>
      </div> */}

      {/* Steps Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full flex flex-col">
                      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 flex-grow">
                        {step.description}
                      </p>
                      {/* <Button
                        className="w-full"
                        onClick={() => handleAction(step.type)}
                      >
                        {step.action}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button> */}
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="pb-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <AccordionItem value={`item-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
            </Accordion>
          </div>
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
    </>
  );
}