"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";

interface PricingSliderProps {
  defaultMinutes: number;
  pricePerMinute: number;
  planName: string;
  isAnnual?: boolean;
  onMinutesChange?: (minutes: number) => void;
}

export function PricingSlider({ 
  defaultMinutes, 
  pricePerMinute, 
  planName, 
  isAnnual = false,
  onMinutesChange 
}: PricingSliderProps) {
  const [minutes, setMinutes] = useState(defaultMinutes);
  const [totalPrice, setTotalPrice] = useState(0);

  const limits = {
    "Pay-as-You-Go": { min: 500, max: 1000 },
    "Pro": { min: 2000, max: 10000 },
    "Enterprise": { min: 0, max: 0 },
  };

  // Get limits or return undefined if plan doesn't exist
  const currentLimits = limits[planName as keyof typeof limits];
  
  // Update total price whenever minutes change
  useEffect(() => {
    let calculatedPrice = minutes * pricePerMinute;
    if (isAnnual) {
      calculatedPrice = calculatedPrice * 10;
    }
    setTotalPrice(calculatedPrice);
    onMinutesChange?.(minutes);
  }, [minutes, pricePerMinute, isAnnual, onMinutesChange]);

  // Update minutes only if limits change to a new valid plan
  useEffect(() => {
    if (currentLimits && (minutes < currentLimits.min || minutes > currentLimits.max)) {
      setMinutes(currentLimits.min);
    }
  }, [planName, currentLimits]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-muted-foreground">Minutes per month</p>
          <motion.p
            key={minutes}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold"
          >
            {minutes.toLocaleString()}
          </motion.p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">
            {isAnnual ? "Annual cost" : "Monthly cost"}
          </p>
          <motion.p
            key={totalPrice}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold"
          >
            ${totalPrice.toLocaleString()}
          </motion.p>
        </div>
      </div>
      
      {currentLimits ? (
        <>
          <Slider
            value={[minutes]}
            min={currentLimits.min}
            max={currentLimits.max}
            step={100}
            onValueChange={(value) => setMinutes(value[0])}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{currentLimits.min.toLocaleString()} min</span>
            <span>{currentLimits.max.toLocaleString()} min</span>
          </div>
        </>
      ) : (
        <p className="text-sm text-red-500">Invalid Plan</p>
      )}
    </div>
  );
}
