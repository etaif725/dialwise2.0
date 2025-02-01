"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Users,
  Zap,
  BadgeCheck,
  ArrowRight,
  BarChart,
  Settings,
  Headphones,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AgencyModal from "@/components/agency-modal";

const faqs = [
  {
    question: "What is the DialWise Agency Program?",
    answer: "The DialWise Agency Program is designed for marketing agencies, consultancies, and service providers who want to offer AI-powered communication solutions to their clients. We provide white-label solutions, dedicated support, and competitive pricing to help agencies grow their business."
  },
  {
    question: "How does white labeling work?",
    answer: "Our white-label solution allows you to rebrand DialWise under your agency's name. This includes customizable dashboards, client portals, and documentation. Premium and Enterprise partners get additional customization options."
  },
  {
    question: "What kind of support do agency partners receive?",
    answer: "All agency partners get priority technical support. Pro and Enterprise partners receive a dedicated account manager, regular business reviews, and strategic planning sessions. Enterprise partners also get 24/7 support and custom integration assistance."
  },
  {
    question: "Can we manage multiple clients from one dashboard?",
    answer: "Yes! Our agency dashboard allows you to manage all your clients from a single interface. You can monitor usage, configure settings, and generate reports for each client separately."
  },
  {
    question: "What are the volume pricing benefits?",
    answer: "Agency partners receive special volume-based pricing that scales with their client base. The more clients you bring on board, the better the rates become. Enterprise partners can negotiate custom pricing structures."
  },
  {
    question: "Do you provide training and onboarding?",
    answer: "Yes, we provide comprehensive training for your team and documentation for your clients. Pro and Enterprise partners receive personalized onboarding sessions and regular training updates."
  }
];

const benefits = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "White Label Solutions",
    description: "Rebrand DialWise as your own AI communication solution with customizable interfaces and documentation.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Priority Support",
    description: "Get dedicated account management and technical support to ensure your success.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Volume Discounts",
    description: "Access competitive pricing that scales with your client base.",
  },
  {
    icon: <BadgeCheck className="h-8 w-8" />,
    title: "Agency Dashboard",
    description: "Manage all your clients efficiently from a centralized interface.",
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Advanced Analytics",
    description: "Track performance and generate detailed reports for your clients.",
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "API Integration",
    description: "Seamlessly integrate DialWise into your existing workflow.",
  },
];

const tiers = [
  {
    name: "Agency Starter",
    price: "$5,000",
    features: [
      "Up to 10 client accounts",
      "Basic White label dashboard",
      "Chat & Email support",
      "Basic re-billing options",
      "Standard API access",
      "Public training resources",
    ],
  },
  {
    name: "Agency Pro",
    price: "$10,000",
    popular: true,
    features: [
      "Up to 25 client accounts",
      "Advanced white label dashboard",
      "Chat & Priority Email support",
      "Advanced Workflow Library Access",
      "Full API access",
      "Dedicated account manager",
      "Custom training sessions",
    ],
  },
  {
    name: "Agency Enterprise",
    price: "Custom",
    features: [
      "25+ client accounts",
      "Fully custom white label solution",
      "24/7 priority support",
      "Advanced Workflow Library Access",
      "Full API access",
      "Dedicated account manager",
      "Custom training sessions",
      "Custom integration support",
      "Custom training program",
      "Early access to features",
    ],
  },
];

export default function DWAgenciesPage() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
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
                DialWise.ai <span className="gradient-text">Agency</span> Program
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your agency's offerings with AI-powered communication solutions. Unlock new revenue streams and deliver cutting-edge technology to your clients.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Agency Partner Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full">
                    <div className="text-primary mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16"
          id="pricing"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Agency Partner Tiers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`p-6 h-full flex flex-col ${tier.popular ? 'border-primary relative' : ''}`}>
                    {/* Popular Badge */}
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="gradient-button text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                      <p className="text-3xl font-bold mt-2">{tier.price}</p>
                      <p className="text-muted-foreground">per month</p>
                    </div>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2">
                          <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={tier.popular ? "default" : "outline"}
                      onClick={() => setIsLeadFormOpen(true)}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQs Section */}
        <section className="py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
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
        </section>
      </div>

      {/* Lead Form Modal */}
      {isLeadFormOpen && (
        <AgencyModal isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
      )}
    </div>
  );
}
