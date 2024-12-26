"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingHeader from "@/components/pricing/v2/pricing-header";
import { BillingToggle } from "@/components/pricing/v2/billing-toggle";
import VoiceAgentPricing from "@/components/pricing/v2/voice-agent-pricing";
import ChatbotPricing from "@/components/pricing/v2/chatbot-pricing";
import VideoBackground from "@/components/videoBackground";
import PricingFaqs from "@/components/pricing/v2/pricing-faqs";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
    <div className="min-h-screen pt-20 bg_pattern_top">
      <div className="container mx-auto px-4 py-12">
        <PricingHeader />
        <BillingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
        
        <Tabs defaultValue="voice" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="voice">AI Voice Agents</TabsTrigger>
            <TabsTrigger value="chatbot">AI Chatbots</TabsTrigger>
          </TabsList> 
          <TabsContent value="voice">
            <VoiceAgentPricing isAnnual={isAnnual} />
          </TabsContent>
          
          <TabsContent value="chatbot">
            <ChatbotPricing isAnnual={isAnnual} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
    <PricingFaqs />
    <VideoBackground />
    </>
  );
}