"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, MapPin, Clock, DollarSign } from "lucide-react";

const positions = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150,000 - $200,000",
    description: "Lead the development of our next-generation AI voice agents and natural language processing systems."
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Drive the product vision and strategy for our AI communication platform."
  },
  {
    title: "ML Operations Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $180,000",
    description: "Build and maintain our ML infrastructure and deployment pipelines."
  }
];

const benefits = [
  "Competitive salary and equity",
  "Health, dental, and vision insurance",
  "Unlimited PTO",
  "Remote work options",
  "Professional development budget",
  "401(k) matching",
  "Wellness programs",
  "Home office stipend"
];

export default function Careers() {
  return (
    <div className="min-h-screen pt-20 bg_pattern_top">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at DialWise.ai</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Join us in revolutionizing business communication with AI technology.
          </p>

          <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
          <div className="space-y-6 mb-12">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {position.salary}
                        </span>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0">Apply Now</Button>
                  </div>
                  <p className="text-muted-foreground">{position.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <BadgeCheck className="h-5 w-5 text-primary mr-2" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Don't see the right position?</h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals to join our team. Send us your resume 
              and we'll keep you in mind for future opportunities.
            </p>
            <Button size="lg">Send Resume</Button>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}