"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Metadata from "../Metadata";

export default function Contact() {
  return (
    <>
    {/* Metadata component to update dynamic SEO for this page */}
    <Metadata
      title="Got Questions about AI Voice Agents & Chatbots? Click here | DialWise.ai"
      description="Get in touch with our team for any questions or support needs. DialWise.ai is a leading provider of AI voice agents and chatbots."
      ogImage="/demo_dialwise.webp"
      twitterImage="/demo_dialwise.webp"
      keywords={['AI voice agents', 'customer service automation', 'AI chatbots']}
    />
    <div className="min-h-screen pt-20 bg_pattern_top">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Get in touch with our team for any questions or support needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6">
              <Mail className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:info@dialwise.ai">
                <p className="text-muted-foreground">info@dialwise.ai</p>
              </a>
            </Card>
            <Card className="p-6">
              <Phone className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+18337481207">
                <p className="text-muted-foreground">+1 (833) 748-1207</p>
              </a>
            </Card>
            <Card className="p-6">
              <MapPin className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Based In</h3>
              <p className="text-muted-foreground">Dallas, TX</p>
            </Card>
          </div>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea placeholder="Your message" rows={6} />
              </div>
              <Button className="w-full md:w-auto gradient-button">Send Message</Button>
            </form>
          </Card>
        </div>
      </motion.div>
    </div>
    </>
  );
}