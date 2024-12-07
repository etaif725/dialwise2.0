"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const IntegrationsSection = () => {
  const integrationLogos = [
    { name: "Close", logo: "/logos/close.webp" },
    { name: "GoHighLevel", logo: "/logos/ghl.webp" },
    { name: "HubSpot", logo: "/logos/hubspot.webp" },
    { name: "Make.com", logo: "/logos/make.webp" },
    { name: "Salesforce", logo: "/logos/salesforce.webp" },
    { name: "Smart Moving", logo: "/logos/smartmoving.webp" },
    { name: "Zoho", logo: "/logos/zoho.webp" },
  ];

  return (
    <section className="relative features_section bg_pattern_top">
      <div className="container mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our AI Integrates with <span className="gradient-text">3000+ Applications</span>
          </h2> 
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-semibold mb-4">
              In a world where every interaction counts, voice AI is not just a luxury, it's a necessity.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DialWise.ai offers you the golden opportunity to level using Voice AI to
              your advantage. Our AI-powered solution seamlessly integrates with your existing
              tech stack through our CRM API sync with sophisticated capabilities that let you
              operate in the existing business landscape, solidifying your spot in the marketplace.
            </p> 
          </div>
        </motion.div>

        {/* Integration Logos */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {integrationLogos.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={integration.logo}
                alt={integration.name}
                width={124}
                height={38}
                className="object-contain filter transition-all duration-300 brightness-0 dark:invert dark:brightness-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;