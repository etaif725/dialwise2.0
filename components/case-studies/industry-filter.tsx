"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Building2, Sun, Wind, Truck, Coins, 
  Headphones, Bot, Scissors, Heart, 
  BookOpen, Building, Scale, Briefcase 
} from "lucide-react";

const industries = [
  { icon: Building2, name: "Real Estate", id: "real-estate" },
  { icon: Sun, name: "Solar", id: "solar" },
  { icon: Wind, name: "HVAC", id: "hvac" },
  { icon: Truck, name: "Moving", id: "moving" },
  { icon: Coins, name: "Finance", id: "finance" },
  { icon: Headphones, name: "Support", id: "support" },
  { icon: Scissors, name: "Salon & Spa", id: "salon" },
  { icon: Heart, name: "Medical", id: "medical" },
  { icon: BookOpen, name: "Education", id: "education" },
  { icon: Building, name: "Property", id: "property" },
  { icon: Scale, name: "Legal", id: "legal" },
  { icon: Bot, name: "AI Agency", id: "agency" }
];

interface IndustryFilterProps {
  selected: string | null;
  onSelect: (id: string | null) => void;
}

export function IndustryFilter({ selected, onSelect }: IndustryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={!selected ? "default" : "outline"}
        onClick={() => onSelect(null)}
        className="rounded-full"
      >
        All Industries
      </Button>
      {industries.map((industry) => {
        const Icon = industry.icon;
        return (
          <motion.div
            key={industry.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={selected === industry.id ? "default" : "outline"}
              onClick={() => onSelect(industry.id)}
              className="rounded-full"
            >
              <Icon className="h-4 w-4 mr-2" />
              {industry.name}
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
}