"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MessageSquare, Linkedin, Twitter, Github } from "lucide-react";
import { MissionSection } from "@/components/about/mission-section";
import { JourneySection } from "@/components/about/journey-section";
import CalendarModal from "@/components/calendar-modal";
import ChatModal from "@/components/chat-modal";
import { useTheme } from "next-themes";
import Metadata from "../Metadata";

const team = [
  {
    name: "Etai Fishler",
    role: "CEO & Founder",
    image: "/team/1712790130401.webp",
    bio: "Senior Developerm, passionate about making AI accessible to businesses. Founder of Ryseup Solutions, LLC & DialWise.ai",
    social: {
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
  },
];

export default function About() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const { theme } = useTheme();
  const signatureImage =
  theme === "dark"
    ? "/team/esignature_cocosign-w.webp"
    : "/team/esignature_cocosign.webp";

  return (
    <>
    {/* Metadata component to update dynamic SEO for this page */}
    <Metadata
      title="Our Vision and Goals for DialWise.ai | DialWise.ai"
      description="We've been working super-hard to make AI voice agents and chatbots accessible to businesses of all sizes. Our mission is to revolutionize the way businesses communicate with customers."
      ogImage="/demo_dialwise.webp"
      twitterImage="/demo_dialwise.webp"
      keywords={['AI voice agents', 'customer service automation', 'AI chatbots']}
    />
    <div className="min-h-screen pt-20 bg_pattern_top">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Business Communication with{" "}
              <span className="gradient-text">AI</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're building the future of customer interaction, one conversation at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <MissionSection />

      {/* Journey Section */}
      <JourneySection />

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">A Word from The Owner</h2>
            <p className="text-lg text-muted-foreground">
              
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:border-primary transition-colors">
                  <div className="relative h-[500px] group">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6" />
                  </div>
                  <div className="px-6 pt-6 pb-2">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                  </div>
                  <div className="flex items-end px-6">
                    <div className="flex space-x-2">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black dark:text-white hover:text-primary transition-colors"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black dark:text-white hover:text-primary transition-colors"
                          >
                            <Twitter className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black dark:text-white hover:text-primary transition-colors"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* "A Word from The Owner" Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-4">👋, Everyone!</h3>
                <p className="text-muted-foreground mb-6">
                  Creating my first autonomous AI agent made me realize how much potential
                  AI has for businesses.<br></br><br></br>
                  As someone who has worked in over 9 niches managing businesses and
                  selling products through multiple channels, I know that many businesses
                  today are struggling because they don't have productive processes that help
                  their business grow and scale.<br></br><br></br>
                  Ultimately, I want to provide business owners with the tools to not only make
                  their existing teams better, but also learn AI in the process and pivot as
                  needed.<br></br><br></br>
                  The year 2025 is the "Year of AI Agents" and over 164M companies are
                  going to implement such solutions.<br></br><br></br>
                  It's my hope that I can add value to your business venture and help you soar
                  while putting some faith in AI solutions that provide long-lasting results.
                  Please feel free to ask me for help anytime.<br></br><br></br>
                  My sincere thanks,
                  <br></br>
                  <span className="text-primary font-semibold">Etai Fishler</span>
                </p>
                <div className="mt-4 flex items-center space-x-4">
                  <Image
                    src={signatureImage}
                    alt="Owner's Signature"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
    </>
  );
}
