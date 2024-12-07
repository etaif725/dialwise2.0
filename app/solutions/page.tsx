"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Building2, Sun, Wind, Truck, Coins, Headphones, Bot, 
  Phone, MessageSquare, Workflow, Database, Network,
  ArrowRight, CheckCircle, Globe, Zap, Shield, Scissors,
  Heart, BookOpen, Briefcase, Building, Scale
} from "lucide-react";
import CalendarModal from "@/components/calendar-modal";
import ChatModal from "@/components/chat-modal";
import LeadForm from "@/components/lead_form";
import Metadata from "../Metadata";

const aiSolutions = [
  {
    id: "voice-agents",
    title: "AI Voice Agents",
    description: "Next-generation voice AI technology for natural, human-like conversations",
    icon: Phone,
    features: [
      "Natural Language Processing",
      "Real-time Voice Synthesis",
      "Emotion Detection",
      "Multi-language Support",
      "SIP/VoIP Integration",
      "Custom Voice Training"
    ],
    benefits: [
      "24/7 Availability",
      "Consistent Service Quality",
      "Scalable Operations",
      "Reduced Costs",
      "Increased Efficiency"
    ],
    capabilities: [
      "Inbound & Outbound Calls",
      "Lead Qualification",
      "Appointment Scheduling",
      "Customer Support",
      "Sales Follow-ups",
      "Survey Conducting"
    ],
    techStack: [
      { name: "OpenAI", logo: "/logos/openai.webp" },
      { name: "Anthropic", logo: "/logos/anthropic.webp" },
      { name: "Llama", logo: "/logos/llama.webp" },
      { name: "Grok", logo: "/logos/grok.webp" },
      { name: "Gemini Pro", logo: "/logos/gemini.webp" },
      { name: "Perplexity", logo: "/logos/perplexity.webp" },
      { name: "ElevenLabs", logo: "/logos/elevenlabs.webp" },
      { name: "Cartesia", logo: "/logos/cartesia.webp" },
      { name: "Deepgram", logo: "/logos/deepgram.webp" },
    ]
  },
  {
    id: "chatbots",
    title: "AI Chatbots",
    description: "Intelligent chat solutions across multiple platforms",
    icon: MessageSquare,
    platforms: [
      {
        name: "Website Widget",
        description: "Customizable chat interface for your website",
        features: ["Custom Styling", "Mobile Responsive", "Multi-language"]
      },
      {
        name: "WhatsApp",
        description: "Direct integration with WhatsApp Business API",
        features: ["Automated Responses", "Media Sharing", "Quick Replies"]
      },
      {
        name: "Facebook & Instagram",
        description: "Social media messaging automation",
        features: ["Story Replies", "Comment Management", "DM Automation"]
      },
      {
        name: "Discord",
        description: "Community engagement and support",
        features: ["Server Management", "Role-based Responses", "Custom Commands"]
      }
    ],
    features: [
      "Omnichannel Support",
      "Smart Routing",
      "Intent Recognition",
      "Sentiment Analysis",
      "Rich Media Support",
      "Analytics Dashboard"
    ]
  },
  {
    id: "automations",
    title: "AI Automations & CRM",
    description: "Streamlined workflows and intelligent customer relationship management",
    icon: Workflow,
    features: [
      "Custom Workflow Builder",
      "Automated Lead Scoring",
      "Smart Task Assignment",
      "Performance Analytics",
      "Integration Hub"
    ],
    workflows: [
      "Lead Nurturing",
      "Follow-up Sequences",
      "Document Processing",
      "Data Entry & Updates",
      "Report Generation",
      "Task Management"
    ],
    integrations: [
      "Salesforce",
      "HubSpot",
      "Zoho",
      "Pipedrive",
      "Custom CRM Solutions"
    ]
  }
];

const industries = [
  {
    icon: Building2,
    name: "Real Estate",
    scenarios: [
      "Property Inquiries",
      "Virtual Tours",
      "Lead Qualification",
      "Appointment Scheduling",
      "Market Analysis"
    ]
  },
  {
    icon: Sun,
    name: "Solar",
    scenarios: [
      "Energy Savings Calculator",
      "Installation Quotes",
      "Permit Processing",
      "Maintenance Scheduling",
      "ROI Analysis"
    ]
  },
  {
    icon: Wind,
    name: "HVAC",
    scenarios: [
      "Emergency Service Requests",
      "Maintenance Scheduling",
      "Quote Generation",
      "Follow-up Coordination",
      "Parts Inventory"
    ]
  },
  {
    icon: Truck,
    name: "Moving & Logistics",
    scenarios: [
      "Quote Requests",
      "Inventory Management",
      "Schedule Coordination",
      "Status Updates",
      "Claims Processing"
    ]
  },
  {
    icon: Coins,
    name: "Fintech & Credit Repair",
    scenarios: [
      "Credit Analysis",
      "Document Collection",
      "Progress Updates",
      "Payment Processing",
      "Dispute Management"
    ]
  },
  {
    icon: Headphones,
    name: "CS/Tech Support",
    scenarios: [
      "Ticket Management",
      "Issue Resolution",
      "Knowledge Base Access",
      "Escalation Handling",
      "Follow-up Coordination"
    ]
  },
  {
    icon: Scissors,
    name: "Salons & Spas",
    scenarios: [
      "Appointment Booking",
      "Service Information",
      "Product Recommendations",
      "Client Follow-ups",
      "Loyalty Programs"
    ]
  },
  {
    icon: Heart,
    name: "Medical & Clinics",
    scenarios: [
      "Appointment Scheduling",
      "Insurance Verification",
      "Patient Follow-ups",
      "Prescription Refills",
      "Medical Records"
    ]
  },
  {
    icon: BookOpen,
    name: "Education",
    scenarios: [
      "Enrollment Inquiries",
      "Course Information",
      "Student Support",
      "Schedule Management",
      "Resource Access"
    ]
  },
  {
    icon: Building,
    name: "Property Management",
    scenarios: [
      "Maintenance Requests",
      "Rent Collection",
      "Tenant Screening",
      "Property Tours",
      "Lease Management"
    ]
  },
  {
    icon: Scale,
    name: "Legal Services",
    scenarios: [
      "Case Intake",
      "Document Collection",
      "Appointment Scheduling",
      "Client Updates",
      "Consultation Booking"
    ]
  },
  {
    icon: Briefcase,
    name: "AI Agencies",
    scenarios: [
      "Client Onboarding",
      "Project Management",
      "Resource Allocation",
      "Progress Reporting",
      "Service Integration"
    ]
  }
];

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState("voice-agents");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const renderSolutionContent = (solution: any) => {
    switch (solution.id) {
      case "voice-agents":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg_pattern_top">
            <div>
              <h3 className="text-2xl font-bold mb-6">Features & Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {solution.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-6">Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solution.capabilities.map((capability: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Powered By</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {solution.techStack.map((tech: any, index: number) => (
                  <Card
                    key={index}
                    className="p-4 flex items-center justify-center bg-white"
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={100}
                      height={40}
                      className="object-contain"
                    />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "chatbots":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Platform Integration</h3>
              <div className="grid grid-cols-1 gap-4">
                {solution.platforms.map((platform: any, index: number) => (
                  <Card key={index} className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{platform.name}</h4>
                    <p className="text-muted-foreground mb-4">{platform.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {platform.features.map((feature: string, i: number) => (
                        <span key={i} className="bg-accent px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Core Features</h3>
              <div className="grid grid-cols-1 gap-4">
                {solution.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2 p-4 bg-accent/50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "automations":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Automation Workflows</h3>
              <div className="grid grid-cols-1 gap-4">
                {solution.workflows.map((workflow: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2 p-4 bg-accent/50 rounded-lg">
                    <Workflow className="h-5 w-5 text-primary" />
                    <span>{workflow}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">CRM Integrations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solution.integrations.map((integration: string, index: number) => (
                  <Card key={index} className="p-4 flex items-center space-x-2">
                    <Database className="h-5 w-5 text-primary" />
                    <span>{integration}</span>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
    {/* Metadata component to update dynamic SEO for this page */}
    <Metadata
      title="Our Solutions for Entrepreneurs & Businesses of all Sizes | DialWise.ai"
      description="DialWise.ai solutions for businesses of all sizes: voice agents, chatbots, automations, and more. Get a free demo today."
      ogImage="/demo_dialwise.webp"
      twitterImage="/demo_dialwise.webp"
      keywords={['AI voice agents', 'customer service automation', 'AI chatbots']}
    />
    <div className="min-h-screen pt-20 bg_pattern_top">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">DialWise.ai</span> Boosts Modern <span className="gradient-text">Businesses</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Transform your business communication with our comprehensive suite of AI solutions
          </p>
        </div>

        {/* Solution Navigation */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {aiSolutions.map((solution) => (
            <Button
              key={solution.id}
              variant={selectedSolution === solution.id ? "default" : "outline"}
              onClick={() => setSelectedSolution(solution.id)}
              className="text-lg px-6 py-8"
            >
              <solution.icon className="mr-2 h-5 w-5" />
              {solution.title}
            </Button>
          ))}
        </div>

        {/* Solution Details */}
        <AnimatePresence mode="wait">
          {aiSolutions.map((solution) => (
            solution.id === selectedSolution && (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-6xl mx-auto mb-24"
              >
                <Card className="p-8">
                  <div className="flex items-center mb-8">
                    <solution.icon className="h-8 w-8 text-primary mr-4" />
                    <div>
                      <h2 className="text-3xl font-bold">{solution.title}</h2>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                  {renderSolutionContent(solution)}
                </Card>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Industry Solutions */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industry-Specific Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <industry.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.scenarios.map((scenario, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{scenario}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <Card className="p-8 animated-gradient text-primary-foreground">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="mb-8">
                Get started with DialWise.ai and experience the future of business communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => setIsCalendarOpen(true)}
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  onClick={() => setIsLeadFormOpen(true)}
                >
                  Talk to AI Agent
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Modals */}
        {isCalendarOpen && (
          <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
        )}
        {isLeadFormOpen && (
          <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
        )}
      </motion.div>
    </div>
    </>
  );
}