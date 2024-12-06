"use client";

import { v4 as uuidv4 } from "uuid";
import { currentPromotions, type Promotion } from './promotions';

type Feature = {
  name: string;
  included: boolean;
  limit?: string;
};

type PricingPlan = {
  idempotency_key: string;
  name: string;
  description: string;
  price: string;
  period: string;
  usageCost: string;
  features: Feature[];
  callToAction: string;
  popular?: boolean;
  activePromotion?: Promotion;
};

type BasePricingPlan = Omit<PricingPlan, 'activePromotion'>;

// Helper functions for price calculations
function applyPercentageDiscount(price: number, discountValue: number): number {
  return price * (1 - discountValue / 100);
}

function applyUsageDiscount(price: number, discountValue: number): number {
  return Math.max(0, price - discountValue);
}

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

const basePricingPlans: BasePricingPlan[] = [
  {
    idempotency_key: uuidv4(),
    name: "Basic",
    description: "Perfect for small businesses starting with AI",
    price: "0",
    period: "month",
    usageCost: "$0.39",
    features: [
      { name: "Inbound Calls Only", included: true },
      { name: "1 AI Voice Agent", included: true },
      { name: "1 Chatbot Agent", included: true, limit: "SMS/Chat/FB/Instagram" },
      { name: "Text/Chat Interactions", included: true, limit: "up to 150 leads" },
      { name: "Language Support", included: true, limit: "Choose 1 of 29" },
      { name: "Calendar Sync", included: true, limit: "2-way" },
      { name: "Custom Workflows", included: false },
      { name: "Custom API Access", included: false },
    ],
    callToAction: "Get Started",
  },
  {
    idempotency_key: uuidv4(),
    name: "Pro",
    description: "Ideal for growing businesses",
    price: "0",
    period: "month",
    usageCost: "$0.31",
    popular: true,
    features: [
      { name: "Inbound & Outbound Calls", included: true },
      { name: "1 AI Voice Agent", included: true },
      { name: "1 Chatbot Agent", included: true, limit: "SMS/Chat/FB/Instagram" },
      { name: "Text/Chat Interactions", included: true, limit: "up to 300 leads" },
      { name: "Language Support", included: true, limit: "Up to 2 languages" },
      { name: "Calendar Sync", included: true, limit: "2-way" },
      { name: "Basic Custom Workflows", included: true },
      { name: "Custom API Access", included: false },
    ],
    callToAction: "Get Started",
  },
  {
    idempotency_key: uuidv4(),
    name: "Business",
    description: "For established businesses",
    price: "0",
    period: "month",
    usageCost: "$0.27",
    features: [
      { name: "Inbound & Outbound Calls", included: true },
      { name: "1 AI Voice Agent", included: true },
      { name: "1 Chatbot Agent", included: true, limit: "SMS/Chat/FB/Instagram" },
      { name: "Text/Chat Interactions", included: true, limit: "up to 500 leads" },
      { name: "Language Support", included: true, limit: "Up to 2 languages" },
      { name: "Calendar Sync", included: true, limit: "2-way" },
      { name: "Full Custom Workflows", included: true },
      { name: "Custom API Access", included: false },
    ],
    callToAction: "Contact Sales",
  },
];

export function getActivePricingPlans(): PricingPlan[] {
  const currentDate = new Date();
  
  return basePricingPlans.map(plan => {
    // Find applicable promotion
    const activePromotion = currentPromotions.find(promo => 
      promo.applicablePlans.includes(plan.name) &&
      currentDate >= promo.startDate &&
      currentDate <= promo.endDate
    );

    if (!activePromotion) return { ...plan };

    const planWithPromo: PricingPlan = { ...plan } as PricingPlan;
    const basePrice = parseFloat(plan.price);
    const baseUsageCost = parseFloat(plan.usageCost.replace('$', ''));
    
    // Apply promotion based on discount type
    switch (activePromotion.discountType) {
      case 'percentage':
        if (basePrice > 0) {
          planWithPromo.price = formatPrice(applyPercentageDiscount(basePrice, activePromotion.discountValue));
        }
        planWithPromo.usageCost = formatPrice(applyPercentageDiscount(baseUsageCost, activePromotion.discountValue));
        break;
      
      case 'usage':
        planWithPromo.usageCost = formatPrice(applyUsageDiscount(baseUsageCost, activePromotion.discountValue));
        break;
      
      case 'fixed':
        if (basePrice > 0) {
          planWithPromo.price = formatPrice(Math.max(0, basePrice - activePromotion.discountValue));
        }
        break;
    }

    // Add promotion details to the plan
    planWithPromo.activePromotion = activePromotion;
    
    return planWithPromo;
  });
}

// Export the active pricing plans with any applicable promotions
export const pricingPlans = getActivePricingPlans();

// Minute packages remain unchanged as they have separate pricing
export const minutePackages = [
  { minutes: 1000, price: 350 },
  { minutes: 2500, price: 875 },
  { minutes: 5000, price: 1750 },
  { minutes: 10000, price: 3500 },
];