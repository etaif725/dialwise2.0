"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PricingSlider } from "./pricing-slider";

interface PricingTiersProps {
  isAnnual: boolean;
}

export default function PricingTiers({ isAnnual }: PricingTiersProps) {
  const tiers = [
    {
      name: "Free Plan",
      price: 0,
      features: [
        "1 AI Voice Agent",
        "1 Chatbot Agent",
        "Up to 1,000 minutes/month",
        "Basic features",
      ]
    },
    {
      name: "Pro Plan",
      price: 445.5,
      features: [
        "3 AI Voice Agents",
        "3 Chatbot Agents",
        "Up to 3,600 minutes/month",
        "Advanced features",
      ]
    },
    {
      name: "Custom",
      features: [
        "Unlimited AI Voice Agents",
        "Unlimited Chatbot Agents",
        "Custom minutes package",
        "Enterprise features",
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {tiers.map((tier, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6 h-full">
            <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
            {tier.price !== undefined ? (
              <PricingSlider 
                defaultMinutes={1000}
                pricePerMinute={0.45}
                planName={tier.name}
                isAnnual={isAnnual}
              />
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
            <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
              {tier.price === 0 ? "Start Free Trial" : "Get Started"}
            </Button>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}