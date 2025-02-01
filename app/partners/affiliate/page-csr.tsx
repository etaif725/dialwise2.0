"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DollarSign,
  BadgeCheck,
  Trophy,
  BarChart,
  Clock,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AffiliateModal from "@/components/affiliate-modal";

const faqs = [
  {
    question: "How does the affiliate program work?",
    answer: "Our affiliate program is designed to reward partners who promote DialWise.ai. You'll receive a unique referral link, and when someone signs up through your link, you earn a commission on their subscription. We track all referrals for 30 days using cookies."
  },
  {
    question: "What are the commission rates?",
    answer: "We offer tiered commission rates: 5% for Standard Partners (up to $10,000 monthly sales), 8% for Premium Partners ($10,001-$50,000), and 10% for Elite Partners (above $50,001). Commissions are paid monthly via PayPal, or bank transfer."
  },
  {
    question: "What marketing materials do you provide?",
    answer: "We provide comprehensive marketing resources including banners, email templates, social media assets, product descriptions, and case studies. Premium and Elite partners receive additional customized materials and co-marketing opportunities."
  },
  {
    question: "How long does it take to get paid?",
    answer: "Commissions are processed monthly for all earnings from the previous month, provided you've reached the minimum payout threshold of $100. Payments are typically made within the first week of each month."
  },
  {
    question: "Can I track my referrals and earnings?",
    answer: "Yes! You'll have access to a real-time dashboard showing your referrals, conversions, and earnings. You can track click-through rates, conversion rates, and commission earnings all in one place."
  },
  {
    question: "What kind of support do you provide?",
    answer: "All affiliates receive access to our support team. Premium and Elite partners get priority support and a dedicated account manager. We also provide regular training sessions and updates on new features."
  }
];

const steps = [
  {
    title: "Step 1: Apply",
    description: "Fill out our affiliate application form to get started.",
    icon: BadgeCheck,
    action: "Apply Now",
    type: "lead",
  },
  {
    title: "Step 2: Get Approved",
    description: "Quick review process, typically within 24-48 hours.",
    icon: Zap,
    popular: true,
    action: "Learn More",
    type: "lead",
  },
  {
    title: "Step 3: Start Earning",
    description: "Introduce DialWise to potential businesses and earn up to 10% commission for each referral we successfully board.",
    icon: Trophy,
    action: "Get Started",
    type: "lead",
  },
];

const benefits = [
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "High Ticket Products",
    description: "Earn up to 10% on all referred First-Time-Depositor (FTD).",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "30-Day Cookie",
    description: "Long attribution window to maximize your earnings.",
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Real-Time Analytics",
    description: "Track your performance with detailed reporting.",
  },
];

const tiers = [
  {
    name: "Standard Affiliate",
    price: "5%",
    features: [
      "Monthly sales up to $10,000",
    ],
  },
  {
    name: "Premium Affiliate",
    price: "8%",
    popular: false,
    features: [
      "Monthly sales $10,001 - $50,000",
    ],
  },
  {
    name: "Elite Affiliate",
    price: "10%",
    features: [
      "Monthly sales above $50,001",
    ],
  },
];

export default function DWAffiliatePage() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleAction = (type: string) => {
    if (type === "lead") {
      setIsLeadFormOpen(true);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg_pattern_top">
      <div className="container mx-auto px-4 pt-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                DialWise.ai <span className="gradient-text">Affiliate</span> Program
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Partner with us and earn generous commissions by promoting the future of AI-powered communication
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Steps Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full flex flex-col">
                      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 flex-grow">
                        {step.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4"
          id="pricing"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">AffiliateCommission Structure</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`p-6 h-full flex flex-col ${tier.popular ? 'border-primary relative' : ''}`}>
                    {/* Popular Badge */}
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="gradient-button text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                      <p className="text-3xl font-bold mt-2">{tier.price}</p>
                      <p className="text-muted-foreground text-sm">per client's FTD<br></br>(First Time Deposit)</p>
                    </div>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2">
                          <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={tier.popular ? "default" : "outline"}
                      onClick={() => setIsLeadFormOpen(true)}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </motion.section>
      
      {/* Benefits Section */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full">
                    <div className="text-primary mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
        <section className="py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </section>

      {/* Lead Form Modal */}
      {isLeadFormOpen && (
        <AffiliateModal isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
      )}
    </div>
  );
}
