"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import 'react-phone-input-2/lib/style.css';
import { 
  Building2, Sun, Heart, Headphones, Coins, Truck, Bot, Play, Pause, 
  Calendar, MessageSquare, Zap, Clock, Users, BarChart3, Scissors,
  BookOpen, Building, Scale, Briefcase
} from "lucide-react";
import AgentForm from "./forms/AgentForm";

const agents = {
  "real-estate": {
    title: "Real Estate AI Agent",
    avatar: "/agents/realestate.webp",
    audio: "/audio/real-estate-demo.mp3",
    features: ["Property Inquiries", "Lead Qualification", "Appointment Setting", "Market Updates", "24/7 Support"],
    description: "Handles property inquiries, qualifies leads, and schedules viewings automatically.",
    benefits: "Never miss a potential buyer or seller. Our AI agents handle inquiries 24/7, qualify leads, and schedule viewings automatically."
  },
  "solar": {
    title: "Solar Sales AI Agent",
    avatar: "/agents/solar.webp",
    audio: "/audio/solar-demo.mp3",
    features: ["Energy Assessments", "Cost Savings Calc", "Installation Info", "Rebate Details", "Follow-ups"],
    description: "Educates prospects about solar benefits and handles consultation scheduling.",
    benefits: "Convert more solar leads with intelligent qualification and automated energy savings calculations."
  },
  "hvac": {
    title: "HVAC Service AI Agent",
    avatar: "/agents/hvac.webp",
    audio: "/audio/hvac-demo.mp3",
    features: ["Emergency Service", "Maintenance Scheduling", "Quote Generation", "Parts Inventory", "Follow-ups"],
    description: "Manages service requests and maintenance scheduling efficiently.",
    benefits: "Handle emergency calls and routine maintenance scheduling automatically, improving response times and customer satisfaction."
  },
  "moving": {
    title: "Moving & Logistics AI Agent",
    avatar: "/agents/moving.webp",
    audio: "/audio/moving-demo.mp3",
    features: ["Quote Requests", "Inventory Management", "Schedule Coordination", "Status Updates", "Claims Processing"],
    description: "Streamlines moving quote requests and logistics coordination.",
    benefits: "Automate the moving quote process and coordinate logistics efficiently while keeping customers informed."
  },
  "finance": {
    title: "Finance & Credit AI Agent",
    avatar: "/agents/finance.webp",
    audio: "/audio/finance-demo.mp3",
    features: ["Credit Analysis", "Loan Processing", "Document Collection", "Payment Plans", "Compliance"],
    description: "Handles financial inquiries and loan processing efficiently.",
    benefits: "Streamline financial processes while maintaining compliance and customer satisfaction."
  },
  "support": {
    title: "Tech Support AI Agent",
    avatar: "/agents/tech-support.webp",
    audio: "/audio/tech-demo.mp3",
    features: ["Issue Diagnosis", "Troubleshooting", "Ticket Management", "Knowledge Base", "Escalations"],
    description: "Provides immediate technical support and issue resolution.",
    benefits: "Reduce support costs while providing immediate assistance for common technical issues."
  },
  "salon": {
    title: "Salon & Spa AI Agent",
    avatar: "/agents/spa.webp",
    audio: "/audio/salon-demo.mp3",
    features: ["Appointment Booking", "Service Info", "Product Recommendations", "Follow-ups", "Loyalty"],
    description: "Manages appointments and client communications for beauty services.",
    benefits: "Never miss a booking opportunity and keep your beauty business running smoothly 24/7."
  },
  "medical": {
    title: "Medical Clinic AI Agent",
    avatar: "/agents/medical-clinic.webp",
    audio: "/audio/medical-demo.mp3",
    features: ["Appointment Scheduling", "Insurance Verification", "Patient Follow-ups", "Records Access", "Emergency Triage"],
    description: "Handles patient inquiries and medical appointment scheduling.",
    benefits: "Improve patient care with efficient scheduling and automated follow-ups while maintaining HIPAA compliance."
  },
};

const features = [
  {
    title: "Natural Language Processing",
    description: "Advanced AI that understands context and responds naturally.",
    icon: Bot
  },
  {
    title: "Multi-Channel Support",
    description: "Seamless integration across voice, chat, and messaging platforms.",
    icon: MessageSquare
  },
  {
    title: "Real-Time Processing",
    description: "Instant responses and decision-making capabilities.",
    icon: Zap
  },
  {
    title: "Analytics & Insights",
    description: "Detailed reporting and performance analytics.",
    icon: BarChart3
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock service without interruption.",
    icon: Clock
  },
  {
    title: "Scalable Operations",
    description: "Handles multiple conversations simultaneously.",
    icon: Users
  }
];

export default function AIAgents() {
  const [selectedAgent, setSelectedAgent] = useState("solar");

  return (
    <section className="py-24 relative overflow-hidden bg_pattern_top">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Check Out our <span className="gradient-text">AI Agents</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-semibold mb-4">
              Maximize Your Savings, Minimize Missed Opportunities
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Every unanswered call can cost your business an average of $1,200 in lost revenue.
              DialWise AI-driven communication solutions turn this around, ensuring no call — and no opportunity — is missed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <Card className="p-6 bg-accent/20 hover:bg-accent/30 transition-colors">
                <p className="text-lg mb-2">
                  By leveraging AI, you can cut the typical annual expense of a full-time receptionist, 
                  approximately $30,000, down to a fraction of the cost.
                </p>
              </Card>
              <Card className="p-6 bg-accent/20 hover:bg-accent/30 transition-colors">
                <p className="text-lg mb-2">
                  Industry data suggests that small businesses lose an estimated $90,000 annually 
                  from missed calls. DialWise's AI eliminates this risk.
                </p>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* Agent Selection Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {Object.entries(agents).map(([key, agent]) => (
            <Button
              key={key}
              variant={selectedAgent === key ? "outline" : "outline"}
              className={`h-auto py-4 px-6 ${
                selectedAgent === key
                  ? 'gradient-button text-white hover:text-white hover:text-semibold'
                  : ''
              }`}
              onClick={() => {
                console.log("Button Clicked, Agent Key Selected:", key);
                setSelectedAgent(key);
              }}
            >
              {agent.title}
            </Button>
          ))}
        </div>

        {/* Agent Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedAgent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 gap-8 mb-24"
          >
            {/* Agent Preview Card */}
            <Card className="overflow-hidden">
              <div className="p-6">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={agents[selectedAgent as keyof typeof agents].avatar}
                    alt={agents[selectedAgent as keyof typeof agents].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                    <motion.div
                      className="h-full bg-primary"
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {agents[selectedAgent as keyof typeof agents].title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {agents[selectedAgent as keyof typeof agents].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-muted-foreground">
                  {agents[selectedAgent as keyof typeof agents].description}
                </p>
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="text-white">
              <div className="px-6 pt-6">
                <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Transform Your Business Today</h3>
                <p className="text-lg mb-8 text-gray-700 dark:text-white">
                  {agents[selectedAgent as keyof typeof agents].benefits}
                </p>
                <div className="my-12 mx-auto">
                  {/* Dynamic Form */}
                  <AgentForm agentKey={selectedAgent} />
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: index * 0.1,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:border-primary transition-all duration-300">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
