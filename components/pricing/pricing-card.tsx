"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PricingSlider } from "./pricing-slider";
import PaymentButtonSquare from "./pricing-btn-sq";
import type { Promotion } from "@/lib/promotions";

interface PricingFeature {
  name: string;
  included: boolean;
  limit?: string;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  popular?: boolean;
  callToAction?: string;
  usageCost?: string;
  squarePlanId?: string;
  activePromotion?: Promotion;
}

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual?: boolean;
  onSelect?: () => void;
}

export function PricingCard({ plan, isAnnual = false, onSelect }: PricingCardProps) {
  const defaultMinutes =
    plan.name === "Basic"
      ? 999
      : plan.name === "Pro"
      ? 1000
      : 5000;

  const pricePerMinute = plan.usageCost ? parseFloat(plan.usageCost.replace("$", "")) : 0;

  const calculateTotalPrice = (minutes: number, pricePerMinute: number, isAnnual: boolean) => {
    let price = minutes * pricePerMinute * 1.33;
    if (isAnnual) price *= 12 * 0.85; // Annual discount
    return price > 999
      ? Math.ceil(price / 100) * 100 - 11
      : Math.round(price / 10) * 10 - 1;
  };

  const [minutes, setMinutes] = useState(defaultMinutes);
  const [totalPrice, setTotalPrice] = useState(() => 
    calculateTotalPrice(defaultMinutes, pricePerMinute, isAnnual)
  );

  return (
    <div className="relative">
      <Card
        className={cn(
          "h-full p-8 relative",
          plan.popular ? "border-primary shadow-lg" : "",
          "hover:border-primary/50 transition-colors"
        )}
      >
        {/* Promotion Badge */}
        {plan.activePromotion && (
          <div className="absolute -top-4 -right-4 z-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg"
            >
              {plan.activePromotion.badge}
            </motion.div>
          </div>
        )}

        {/* Popular Badge */}
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="gradient-button text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
          </div>
        )}

        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-muted-foreground mb-6">{plan.description}</p>

        {/* Promotion Description */}
        {plan.activePromotion && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-2 bg-primary/10 rounded-md"
          >
            <p className="text-primary text-sm font-medium">
              {plan.activePromotion.description}
            </p>
          </motion.div>
        )}

        <div className="mb-6">
          {plan.price === "CALL US" ? (
            <div className="text-3xl font-bold">{plan.price}</div>
          ) : (
            <PricingSlider
              defaultMinutes={defaultMinutes}
              pricePerMinute={pricePerMinute}
              planName={plan.name}
              isAnnual={isAnnual}
              onMinutesChange={(minutes) => {
                setMinutes(minutes);
                setTotalPrice(calculateTotalPrice(minutes, pricePerMinute, isAnnual));
              }}
            />
          )}
        </div>

        <ul className="space-y-4 mb-8" role="list">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.included ? (
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" aria-hidden="true" />
              ) : (
                <X className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" aria-hidden="true" />
              )}
              <span
                className={cn(
                  "text-sm",
                  feature.included ? "" : "text-muted-foreground"
                )}
              >
                {feature.name}
                {feature.limit && (
                  <span className="text-muted-foreground"> - {feature.limit}</span>
                )}
              </span>
            </li>
          ))}
        </ul>

        <PaymentButtonSquare 
          planId={plan.squarePlanId} 
          planName={plan.name} 
          totalPrice={totalPrice} 
          minutes={minutes} 
        />
      </Card>
    </div>
  );
}