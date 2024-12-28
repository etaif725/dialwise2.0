"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PricingCard } from "./pricing-card";
import { pricingPlans, minutePackages } from "@/lib/pricing-plans";
import { Card } from "@/components/ui/card";
import { Check, X, Building2, Zap, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BillingToggle } from "./billing-toggle";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div>
      <BillingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />

      {/* Main Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <PricingCard plan={plan} isAnnual={isAnnual} />
          </motion.div>
        ))}
      </div>

      {/* Enterprise & BYOK Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 mb-24"
      >
        <Card className="p-8 bg-gradient-to-r from-[#058C42] to-[#04471C] text-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Enterprise Plan</h3>
              </div>
              <p className="text-lg opacity-90">
                Custom solutions for large organizations with advanced needs:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <span>Unlimited AI Voice & Chatbot Agents</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <span>Custom Minutes Package</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <span>All 29 Languages Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <span>Custom API Access</span>
                </li>
              </ul>
              <Button variant="secondary" size="lg"><a href="/contact">Contact Sales</a></Button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8" />
                <h3 className="text-2xl font-bold">BYOK Plan (Soon!)</h3>
              </div>
              <div className="space-y-3">
                <p className="opacity-90">Flat rate pricing with maximum flexibility</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <span>$0.16/minute from the first minute</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <span>Available for Partners & Agencies</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <span>Full Platform Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <span>White-labeled Dashboard</span>
                </li>
              </ul>
              <Button variant="secondary" size="lg"><a href="/contact">Contact Sales</a></Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}