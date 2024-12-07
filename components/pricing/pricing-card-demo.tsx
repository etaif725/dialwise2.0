"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PricingSlider } from "./pricing-slider";

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
}

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual?: boolean;
  onSelect?: () => void;
}

export function PricingCardDemo({ plan, isAnnual = false, onSelect }: PricingCardProps) {
  const defaultMinutes = plan.name === "Basic" ? 1000 : plan.name === "Pro" ? 3600 : 10000;
  const pricePerMinute = plan.usageCost ? parseFloat(plan.usageCost.replace("$", "")) : 0;

  return (
    <div className="relative">
      <Card className={cn(
        "h-full p-8 relative",
        plan.popular ? 'border-primary shadow-lg dark:shadow-primary/20' : '',
        "hover:border-primary/50 transition-colors"
      )}>
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="gradient-button text-white dark:text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
          </div>
        )}

        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-muted-foreground mb-6">{plan.description}</p>

        <div className="mb-6">
          {plan.price === "CALL US" ? (
            <div className="text-3xl font-bold">{plan.price}</div>
          ) : (
            <div className="space-y-6">
              <PricingSlider
                defaultMinutes={defaultMinutes}
                pricePerMinute={pricePerMinute}
                planName={plan.name}
                isAnnual={isAnnual}
              />
              {/* {plan.usageCost && (
                <div className="text-sm text-muted-foreground">
                  Base usage cost: {plan.usageCost}/minute
                </div>
              )} */}
            </div>
          )}
        </div>

        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center">
              {feature.included ? (
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
              )}
              <span className={cn(
                "text-sm",
                feature.included ? "" : "text-muted-foreground"
              )}>
                {feature.name}
                {feature.limit && (
                  <span className="text-muted-foreground ml-1">
                    ({feature.limit})
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>

        <Button
          className={cn(
            "w-full",
            plan.popular ? 'gradient-button text-white dark:text-white' : ''
          )}
          variant={plan.popular ? "default" : "outline"}
          onClick={onSelect}
        >
          {plan.callToAction || "Get Started"}
        </Button>
      </Card>
    </div>
  );
}