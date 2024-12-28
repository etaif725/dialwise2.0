"use client";

import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

export default function PricingFeatureComparison() {
  const features = {
    "Core Features": [
      { name: "Voice AI Agents", free: "1", pro: "3", enterprise: "Unlimited" },
      { name: "Chatbot Agents", free: "1", pro: "3", enterprise: "Unlimited" },
      { name: "Monthly Minutes", free: "1,000", pro: "3,600", enterprise: "Custom" },
    ],
    "Security": [
      { name: "SSL encryption", free: true, pro: true, enterprise: true },
      { name: "2FA", free: true, pro: true, enterprise: true },
      { name: "Custom security settings", free: false, pro: true, enterprise: true },
    ],
    "Support": [
      { name: "Email support", free: true, pro: true, enterprise: true },
      { name: "Priority support", free: false, pro: true, enterprise: true },
      { name: "Dedicated account manager", free: false, pro: false, enterprise: true },
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-8">Feature Comparison</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Feature</TableHead>
            <TableHead>Free</TableHead>
            <TableHead>Pro</TableHead>
            <TableHead>Enterprise</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(features).map(([category, items]) => (
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
  );
}