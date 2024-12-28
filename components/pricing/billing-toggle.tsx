"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";

interface BillingToggleProps {
  isAnnual: boolean;
  onToggle: (value: boolean) => void;
}

export function BillingToggle({ isAnnual, onToggle }: BillingToggleProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mb-12">
      <div className="flex items-center space-x-4">
        <Label htmlFor="billing-toggle" className="text-lg">Monthly</Label>
        <Switch
          id="billing-toggle"
          checked={isAnnual}
          onCheckedChange={onToggle}
        />
        <div className="flex items-center space-x-2">
          <Label htmlFor="billing-toggle" className="text-lg">Annual</Label>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
          >
            Save 15%
          </motion.span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        {isAnnual ? "Billed annually (15% discount applied)" : "Billed monthly"}
      </p>
    </div>
  );
}