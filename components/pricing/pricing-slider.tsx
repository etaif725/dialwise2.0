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
  onMinutesChange,
}: PricingSliderProps) {
  const [minutes, setMinutes] = useState(defaultMinutes);
  const [totalPrice, setTotalPrice] = useState(0);

  // Define limits based on plan
  const limits = {
    Basic: { min: 100, max: 500 },
    Pro: { min: 1000, max: 3500 },
    Business: { min: 4000, max: 10000 },
  };

  const currentLimits = limits[planName as keyof typeof limits] || { min: 100, max: 1000 };

  useEffect(() => {
    let calculatedPrice = minutes * pricePerMinute * 1.33;

    // Apply 15% discount for annual billing
    if (isAnnual) {
      calculatedPrice = calculatedPrice * 12 * 0.85; // 15% off annual price
    }

    // Adjust the price to end with "89" or "9"
    if (minutes > 999) {
      calculatedPrice = Math.max(Math.ceil(calculatedPrice / 100) * 100 - 11, 89); // Ends with "89"
    } else {
      calculatedPrice = Math.max(Math.round(calculatedPrice / 10) * 10 - 1, 9); // Ends with "9"
    }

    setTotalPrice(calculatedPrice);
    onMinutesChange?.(minutes);
  }, [minutes, pricePerMinute, isAnnual]);

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
          {isAnnual && (
            <p className="text-xs text-muted-foreground">
              ${(totalPrice / 12).toLocaleString()} /month
            </p>
          )}
        </div>
      </div>

      <Slider
        value={[minutes]}
        min={currentLimits.min}
        max={currentLimits.max}
        step={100}
        onValueChange={(value) => setMinutes(value[0])}
        className="mt-4"
      />

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{currentLimits.min.toLocaleString()} min</span>
        <span>{currentLimits.max.toLocaleString()} min</span>
      </div>
    </div>
  );
}
