"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, FileText, Bell, UserCheck } from "lucide-react";

const privacyHighlights = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "Enterprise-grade security measures to protect your information"
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your privacy is our top priority in all operations"
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication about data handling practices"
  },
  {
    icon: Database,
    title: "Data Control",
    description: "You maintain control over your data at all times"
  }
];

const sections = [
  {
    title: "1. Introduction",
    content: `At DialWise, LLC, along with our affiliates ("DialWise", "we", "us"), we prioritize your privacy and are dedicated to protecting the information you share with us. This document outlines how we handle the Personal Information collected through our website, applications, and services (referred to collectively as "Services"). It does not extend to the content processed on behalf of our API customers, which is covered by separate agreements.`,
    subsections: [
      {
        title: "Information We Collect",
        content: "We gather Personal Information about you in the following ways:",
        items: [
          "Account Information: Your name, contact details, account credentials, payment information, and transaction history.",
          "Content: Personal Information in your inputs, uploads, or feedback to our Services.",
          "Communication Information: If you contact us, we collect your name, contact details, and message contents.",
          "Social Media Information: Contact details and aggregated interaction data from social media platforms."
        ]
      }
    ]
  },
  {
    title: "2. Automatically Collected Information",
    content: "As you navigate and interact with our Services, we collect:",
    items: [
      "Log Information: Data from your browser including IP address, specifications, and activity timing.",
      "Interaction Data: Details about your engagement, content interaction, and session information.",
      "Device Details: Information about your device, operating system, and browser.",
      "Cookies Usage: Used to enhance functionality and user experience.",
      "Analytics Services: Tools to analyze service usage and improve delivery."
    ]
  },
  {
    title: "3. Use of Personal Information",
    items: [
      "Deliver and improve our Services",
      "Communicate about updates and offerings",
      "Conduct research and prevent fraud",
      "Comply with legal obligations"
    ]
  },
  {
    title: "4. Disclosure of Personal Information",
    content: "We may share your Personal Information with:",
    items: [
      "Service Providers: Solely to support operations and service delivery",
      "Business Transfers: During mergers, acquisitions, or transitions",
      "Legal Requirements: When required by law or to protect rights"
    ]
  },
  {
    title: "5. Your Rights",
    content: "You have the right to:",
    items: [
      "Access your Personal Information",
      "Delete your data from our records",
      "Rectify or update your information",
      "Transfer your data (data portability)",
      "Restrict processing",
      "Withdraw consent",
      "Object to processing"
    ]
  },
  {
    title: "6. Data Protection and Security",
    items: [
      "Implementation of technical and organizational security measures",
      "Encryption of sensitive information",
      "Regular security assessments and updates",
      "Employee training on data protection",
      "Incident response procedures"
    ]
  },
  {
    title: "7. International Data Transfers",
    content: "Your Personal Information may be processed and stored in the United States and other jurisdictions. We ensure appropriate safeguards are in place for international data transfers."
  },
  {
    title: "8. Children's Privacy",
    content: "Our Services do not target children under 13. We do not knowingly collect information from children under this age. Users between 13 and 18 must have parental consent."
  },
  {
    title: "9. Updates to This Policy",
    content: "We may periodically update this Privacy Policy. Changes will be posted on our website with the effective date."
  },
  {
    title: "10. Contact Information",
    content: "For questions or concerns about this policy, contact us at:",
    items: [
      "Email: info@dialwise.ai",
      "Address: Dallas, TX, USA",
      "Phone: (972) 358-4852"
    ]
  }
];

export default function DWPrivacy() {
  return (
    <div className="min-h-screen pt-20 bg_pattern_top">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: March 15, 2024
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {privacyHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:border-primary transition-all">
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  {section.content && (
                    <p className="text-muted-foreground mb-6">{section.content}</p>
                  )}
                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          </div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.subsections && (
                    <div className="space-y-6 mt-6">
                      {section.subsections.map((subsection, i) => (
                        <div key={i}>
                          <h3 className="text-xl font-semibold mb-3">
                            {subsection.title}
                          </h3>
                          {subsection.content && (
                            <p className="text-muted-foreground mb-4">
                              {subsection.content}
                            </p>
                          )}
                          {subsection.items && (
                            <ul className="space-y-3">
                              {subsection.items.map((item, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <div className="mt-1.5">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                  </div>
                                  <span className="text-muted-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.section>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <Card className="p-8 bg-primary text-primary-foreground">
              <div className="flex items-center gap-4 mb-4">
                <Bell className="h-6 w-6" />
                <h2 className="text-2xl font-bold">Stay Updated</h2>
              </div>
              <p className="mb-2">
                We regularly update our privacy policy to ensure compliance with evolving data protection laws and to maintain transparency with our users.
              </p>
              <p className="text-sm opacity-80">
                Last modified: March 15, 2024
              </p>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}