"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Bot, MessageSquare, Shield, Zap } from "lucide-react";
import Metadata from "../Metadata";

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

const features = [
  {
    icon: Bot,
    title: "AI-Powered",
    description: "Advanced artificial intelligence for natural conversations"
  },
  {
    icon: MessageSquare,
    title: "24/7 Support",
    description: "Round-the-clock automated customer service"
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Enterprise-grade security for your data"
  },
  {
    icon: Zap,
    title: "Fast Setup",
    description: "Quick integration within hours, not days"
  }
];

export default function FAQs() {
  return (
    <>
    {/* Metadata component to update dynamic SEO for this page */}
    <Metadata
      title="Frequently Asked Questions about DialWise.ai | DialWise.ai"
      description="Here are some of the most frequently asked questions about DialWise.ai. We're here to help you get the most out of our AI Chatbots and AI Voice Agents."
      keywords={['AI voice agents', 'customer service automation', 'AI chatbots']}
    />
    <div className="min-h-screen pt-20 bg_pattern_top">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">F</span>requently <span className="gradient-text">A</span>sked <span className="gradient-text">Q</span>uestion<span className="gradient-text">s</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about DialWise.ai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center">
                    <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

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
    </>
  );
}