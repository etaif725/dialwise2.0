"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import AdvantagesGrid from "@/components/advantages-grid";
import Testimonials from "@/components/testimonials/testimonials";
import CTA from "@/components/cta";
import IntegrationsSection from "@/components/integrationsSection";
import AIAgents from "@/components/ai-agents";
import CalendarModal from "@/components/calendar-modal";
import { Calendar, MessageSquare } from "lucide-react";
import { AudioSection } from "@/components/audioSection";
import VideoBackground from "@/components/videoBackground";
import LeadForm from "@/components/lead_form";
import { useRouter } from "next/navigation";

export default function DWHomePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/tool');
  };

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const shadow = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 20px 50px rgba(0,0,0,0.3)"]
  );

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-32 md:pt-40 bg_pattern_top">
        {/* <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="noise-bg relative mx-auto overflow-hidden bg-transparent -z-999">
          <Spline
            scene="https://prod.spline.design/WaUDt5qq2ZWsfEoq/scene.splinecode" 
          />
          </div> 
        </motion.div> */}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">AI</span> precision combined with{" "}
              <span className="gradient-text">Human</span> Touch
            </h1>
            <p className="text-xl text-[#888888] mb-8">
              Dominate your field and increase your reach at the click of a button. Make 
              thousands of calls, book more appointments, and never miss a lead again with 
              our AI voice agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="outline"
                className="text-black dark:text-white hover:text-semibold"
                onClick={() => setIsCalendarOpen(true)}
              >
                Schedule Demo
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                type="button"
                size="lg"
                className="text-white hover:text-white gradient-button"
                onClick={handleClick}
              >
                Get Started
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                onClick={() => setIsChatOpen(true)}
              >
                Talk to AI Agent
                <MessageSquare className="ml-2 h-5 w-5" />
              </Button> */}
            </div>
          </motion.div>

          <motion.div
            ref={videoRef}
            style={{ scale, opacity, boxShadow: shadow }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#1A1A1A]"
          >
            <div className="relative aspect-video">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/video/dialwise-narration.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

          </motion.div>
        </div>
      </section>
                                  
      {/* Rest of the sections */}
      <IntegrationsSection />
      <AIAgents />
      <AudioSection />
      <AdvantagesGrid />
      <Testimonials />
      <CTA />
      <VideoBackground />
      
        {/* Modals */}
        {isCalendarOpen && (
          <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
        )}
        {isLeadFormOpen && (
          <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
        )}
    </div>
  );
}
