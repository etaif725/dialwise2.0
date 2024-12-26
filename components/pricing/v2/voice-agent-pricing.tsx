"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { PricingSlider } from "./pricing-slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import PricingNotice from "./pricing-notice";

interface VoiceAgentPricingProps {
  isAnnual: boolean;
}

export default function VoiceAgentPricing({ isAnnual }: VoiceAgentPricingProps) {
  const tiers = [
    {
      name: "Pay-as-You-Go",
      description: "Perfect for testing and small volumes",
      pricePerMinute: 0.7,
      features: [
        "1 AI Voice Agent (Inbound only)",
        "Pay only for what you use",
        "Basic voice features",
        "Standard support"
      ]
    },
    {
      name: "Pro",
      description: "Ideal for growing businesses",
      pricePerMinute: 0.65,
      features: [
        "2 AI Voice Agents (Inbound/Outbound)",
        "Special discounts on credits",
        "Advanced voice features",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      features: [
        "Unlimited AI Voice Agents (Inbound/Outbound)",
        "Custom pricing",
        "Enterprise features",
        "Dedicated support"
      ]
    }
  ];

  const voiceFeatures = {
    "Voice Capabilities": [
      { name: "Natural Language Understanding", free: true, pro: true, enterprise: true },
      { name: "Custom Voice Training", free: false, pro: true, enterprise: true },
      { name: "Multi-language Support", free: false, pro: "2 languages", enterprise: "29 languages" },
      { name: "Voice Cloning", free: false, pro: false, enterprise: true },
      { name: "Knowledge Base Upload", free: "1 Document + 5 URLs", pro: "5 Documents + 10 URLs", enterprise: "Unlimited" }
    ],
    "Call Features": [
      { name: "Inbound Calls", free: true, pro: true, enterprise: true },
      { name: "Outbound Calls", free: false, pro: true, enterprise: true },
      { name: "Call Transcription", free: true, pro: true, enterprise: true },
      { name: "Call Recording", free: true, pro: true, enterprise: "As per client request" },
      { name: "Call Analytics", free: "Basic", pro: true, enterprise: true }
    ],
    "Integration & APIs": [
      { name: "CRM Integration", free: "Basic", pro: "Advanced", enterprise: "Custom" },
      { name: "API Access", free: false, pro: "Analytics only", enterprise: true },
      { name: "Webhook Support", free: true, pro: true, enterprise: true },
      { name: "Custom Workflows", free: "up to 3", pro: true, enterprise: true }
    ],
    "Telephony & SIP": [
      { name: "Twilio Integration", free: true, pro: true, enterprise: true },
      { name: "Vonage Integration", free: true, pro: true, enterprise: true },
      { name: "Custom SIP (FDQN)", free: false, pro: false, enterprise: true }
    ]
  };

  return (
    <div className="space-y-16">
      <div className="realtive grid grid-cols-1 md:grid-cols-3 gap-8">
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
              
              {tier.pricePerMinute ? (
                <PricingSlider 
                  defaultMinutes={500}
                  pricePerMinute={tier.pricePerMinute}
                  planName={tier.name}
                  isAnnual={isAnnual}
                />
              ) : (
                <div className="text-3xl font-bold mb-[105px]">Call Us</div>
              )}
              
              <ul className="space-y-4 my-8">
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

      <PricingNotice />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-8">Voice Agent Features</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Feature</TableHead>
              <TableHead>Pay-as-You-Go</TableHead>
              <TableHead>Pro</TableHead>
              <TableHead>Enterprise</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(voiceFeatures).map(([category, items]) => (
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