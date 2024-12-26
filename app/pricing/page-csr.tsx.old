"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";
import CalendarModal from "@/components/calendar-modal";
import ChatModal from "@/components/chat-modal";
import PricingSection from "@/components/pricing/pricing-section";
import CTA from "@/components/cta";
import Testimonials from "@/components/testimonials/testimonials";
import VideoBackground from "@/components/videoBackground";
import PricingTable from "@/components/pricing/pricing-feature-table";

export default function DWPricingPage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-32 md:pt-40 bg_pattern_top">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 py-12"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the perfect plan for your business needs
            </p>
          </div>

          {/* Telephony Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <Card className="p-6 border-primary/50">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Important Note About Telephony Costs</h3>
                  <p className="text-sm text-muted-foreground">
                    The prices shown do not include telephony provider costs (Twilio/Vonage/SIP). 
                    These costs are billed separately based on your usage and chosen provider. 
                    Our team will help you select and set up the most cost-effective solution 
                    for your needs during onboarding.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <PricingSection />
          <PricingTable />
          <Testimonials />

        </motion.div>
      </section>

      {/* CTA Section */}
      <CTA />
      <VideoBackground />
      
      {/* Modals */}
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}