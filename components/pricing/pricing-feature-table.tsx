import { motion } from "framer-motion";
import { pricingPlans } from "@/lib/pricing-plans";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function PricingTable() {

  return (
    <div>
        {/* Feature Comparison Table */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24"
        >
        <h2 className="text-2xl font-bold mb-6">Feature Comparison</h2>
        <Card>
        <Table>
            <TableHeader>
            <TableRow>
                <TableHead className="w-[300px]">Feature</TableHead>
                {pricingPlans.map((plan, index) => (
                <TableHead key={index} className="text-center">
                    {plan.name}
                </TableHead>
                ))}
            </TableRow>
            </TableHeader>
            <TableBody>
            {[
                "AI Voice Agents",
                "Chatbot Agents",
                "Monthly Minutes",
                "Text/Chat Interactions",
                "Language Support",
                "Calendar Sync",
                "Custom Workflows",
                "Custom API Access",
                "Call Direction",
                "White Labeling",
                "Priority Support"
            ].map((feature, index) => (
                <TableRow key={index}>
                <TableCell className="font-medium">
                    <div className="flex items-center">
                    {feature}
                    <TooltipProvider>
                        <Tooltip>
                        <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="w-[200px] text-sm">
                            Details about {feature.toLowerCase()}
                            </p>
                        </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    </div>
                </TableCell>
                {pricingPlans.map((plan, planIndex) => (
                    <TableCell key={planIndex} className="text-center">
                    {plan.features.find(f => f.name.includes(feature))?.included ? (
                        <div className="flex items-center justify-center">
                        <Check className="h-5 w-5 text-primary" />
                        {plan.features.find(f => f.name.includes(feature))?.limit && (
                            <span className="text-xs text-muted-foreground ml-1">
                            ({plan.features.find(f => f.name.includes(feature))?.limit})
                            </span>
                        )}
                        </div>
                    ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                    </TableCell>
                ))}
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </Card>
        </motion.div>
    </div>
    );
}