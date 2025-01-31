"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { PricingSlider } from "./pricing-slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface ChatbotPricingProps {
  isAnnual: boolean;
}

export default function ChatbotPricing({ isAnnual }: ChatbotPricingProps) {
  const tiers = [
    {
      name: "Pay-as-You-Go",
      description: "Perfect for testing and small volumes",
      pricePerMessage: 0.03,
      features: [
        "1 Chatbot Agent",
        "Pay per Message (No Limit)",
        "1 Channel (Website Widget Only)",
        "Human hand-off included",
        "Chat & Email support"
      ]
    },
    {
      name: "Team",
      description: "Ideal for growing businesses",
      pricePerMessage: 14.99,
      features: [
        "Unlimited Chatbots - You pay per Human Seat",
        "10,000 AI Messages each month",
        "Multi-channel integrations (Facebook, Instagram, Discord, Telegram, Whatsapp)",
        "Human hand-off included",
        "Chat & Email support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      features: [
        "Unlimited Chatbots",
        "Lower rate per message",
        "Custom chatbot tools",
        "Dedicated support"
      ]
    }
  ];

  const chatFeatures = {
    "Chat Capabilities": [
      { name: "Natural Language Processing", free: true, pro: true, enterprise: true },
      { name: "Intent Recognition", free: false, pro: false, enterprise: true },
      { name: "Multi-language Support", free: "1 language", pro: true, enterprise: true },
      { name: "Sentiment Analysis", free: false, pro: true, enterprise: true },
      { name: "Custom Knowledge Base", free: false, pro: "5 Documents + 5 URLs", enterprise: true }
    ],
    "Platform Support": [
      { name: "Website Widget", free: true, pro: true, enterprise: true },
      { name: "WhatsApp Integration", free: false, pro: true, enterprise: true },
      { name: "Facebook & Instagram Messenger", free: false, pro: true, enterprise: true },
      { name: "Discord", free: false, pro: false, enterprise: true },
      { name: "Telegram (Soon)", free: false, pro: false, enterprise: true },
      { name: "Email (Soon)", free: false, pro: false, enterprise: true }
    ],
    "Advanced Features": [
      { name: "Rich Media Support", free: "Basic iFrames", pro: true, enterprise: true },
      { name: "Analytics Dashboard", free: "Basic", pro: true, enterprise: true },
      { name: "A/B Testing", free: false, pro: false, enterprise: true },
      { name: "Custom Workflows", free: false, pro: "up to 3", enterprise: true },
      { name: "Human Handoff", free: false, pro: true, enterprise: true }
    ]
  };

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className={cn(
                "h-full p-8 relative",
                tier.popular ? "border-primary shadow-lg" : "",
                "hover:border-primary/50 transition-colors"
              )}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="gradient-button text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-muted-foreground mb-6">{tier.description}</p>
              
              {tier.pricePerMessage ? (
                <div className="mb-6">
                  <p className="text-3xl font-bold">
                    ${tier.pricePerMessage}
                    <span className="text-base text-muted-foreground">
                      {tier.name === "Pay-as-You-Go" ? " /Message" : " /User (Limited Offer)"}
                    </span>
                  </p>
                </div>
              ) : (
                <div className="text-3xl font-bold mb-6">Contact Us</div>
              )}
              
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full" 
                variant={tier.popular ? "default" : "outline"}
              >
                {tier.name === "Pay-as-You-Go" ? "Start Free" : "Get Started"}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-8">Chatbot Features</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Feature</TableHead>
              <TableHead>Pay-as-You-Go</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Enterprise</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(chatFeatures).map(([category, items]) => (
              <>
                <TableRow key={category}>
                  <TableCell colSpan={4} className="font-bold bg-accent/50">
                    {category}
                  </TableCell>
                </TableRow>
                {items.map((feature, index) => (
                  <TableRow key={`${category}-${index}`}>
                    <TableCell>{feature.name}</TableCell>
                    <TableCell>
                      {typeof feature.free === "boolean" ? (
                        feature.free ? <Check className="text-primary" /> : <X className="text-muted-foreground" />
                      ) : (
                        feature.free
                      )}
                    </TableCell>
                    <TableCell>
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? <Check className="text-primary" /> : <X className="text-muted-foreground" />
                      ) : (
                        feature.pro
                      )}
                    </TableCell>
                    <TableCell>
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? <Check className="text-primary" /> : <X className="text-muted-foreground" />
                      ) : (
                        feature.enterprise
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
}