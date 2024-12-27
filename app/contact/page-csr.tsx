"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function DWContact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Get the webhook URL from the environment variable
    const webhookUrl = process.env.NEXT_PUBLIC_MAKE_CONTACT_FORM_WEBHOOK;
  
    if (!webhookUrl) {
      setResponseMessage("Webhook URL is not configured.");
      setIsSubmitting(false);
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      // Attempt to send the form data to the webhook URL
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      // Check if the response is in JSON format
      const contentType = response.headers.get("content-type");
  
      let data: any;
  
      // If the response is JSON, parse it
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        // Handle non-JSON responses
        const textResponse = await response.text();
        data = { message: textResponse };  // Assign the text response to a "message" property
      }
  
      if (response.ok) {
        // Success message if the response is OK
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        // If the response is not OK, show an error message
        setResponseMessage(`Error: ${data.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // More detailed error message
      setResponseMessage("Network error: " + (error instanceof Error ? error.message : "Unknown error"));
    } finally {
      setIsSubmitting(false);  // Reset submitting state
    }
  };
  
  

  return (
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={6}
                />
              </div>
              <Button type="submit" className="w-full md:w-auto gradient-button" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {responseMessage && (
              <p className="mt-4 text-center text-sm text-muted-foreground">{responseMessage}</p>
            )}
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
