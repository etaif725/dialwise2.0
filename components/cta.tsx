"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";
import { useState } from "react";
import CalendarModal from "./calendar-modal";
import ChatModal from "./chat-modal";
import LeadForm from "./lead_form";

export default function CTA() {
  // State to track button actions
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <section className="w-full py-24 sm:px-6 lg:px-8 relative overflow-hidden bg_pattern">
      <div className="absolute inset-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto text-center relative z-10"
      >

        <h2 className="text-4xl md:text-5xl font-bold pt-24 pb-8 md:pt-16 px-20">
        <span className="gradient-text">Join The</span> Chat & Voice <span className="gradient-text">AI Revolution</span>
        </h2>

        <p className="text-lg text-[#000000] dark:text-[#ffffff] mb-8 max-w-2xl mx-auto display px-20">
          With DialWise, you're not just improving your business metrics or competitiveness, you're 
          shaping the future of customer relations.
        </p>

        <div className="flex flex-col px-20 sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="gradient-button"
            onClick={() => setIsCalendarOpen(true)}
          >
            Schedule Demo
            <Calendar className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => setIsLeadFormOpen(true)}
          >
            Talk to AI Agent
            <MessageSquare className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Modals */}
        {isCalendarOpen && (
          <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
        )}
        {isLeadFormOpen && (
          <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
        )}
      </motion.div>
    </section>
  );
}
