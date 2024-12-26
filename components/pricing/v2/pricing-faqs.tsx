import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import React from 'react'

function PricingFaqs() {
    const faqs = [
        {
          question: "What is DialWise.ai?",
          answer: "DialWise.ai is an advanced AI Chatbot & AI Voice Agents System that helps you increase revenue, cut costs, and save time by maximizing ROI and conversions on your website. It is mobile-friendly, easy to use, and integrates seamlessly with your existing systems."
        },
        {
          question: "How long does it take for your AI to study my business?",
          answer: "Our AI modules will study everything about your business in approximately 2-3 hours (if you have up to 100 documents/website pages). The training process is quick and efficient, so you can start using your AI Chatbot and AI Voice Agents within a few hours, not days."
        },
        {
          question: "Can DialWise.ai integrate with my existing website and CRM?",
          answer: "Yes! DialWise.ai integrates seamlessly with any website you currently own, whether it's built on a CMS (like WordPress), full-stack website/application, or other no-code platforms, such as: framer, webflow and others. We support a wide range of systems to ensure smooth integration for both user experience and efficient AI Automations. Among the CRM systems we support are: Zoho CRM, Salesforce, HubSpot, GoHighLevel, RYSEUP CRM, NetworkLeads, SmartMoving CRM and others."
        },
        {
          question: "What are the benefits of using AI Chatbots and Voice Agents in 2024?",
          answer: "AI offers numerous benefits, including immense time savings, increased Monthly Recurring Revenue (MRR), reduced labor costs, and boosted sales conversions. It is highly customizable to meet your specific business needs. Based on recent data, ONLY 5% of businesses in the US (out of 33 million) utilize AI, however, most of those who do, do not use AI Voice Agents or fully trained AI Chatbots. We are here to change that!"
        },
        {
          question: "Are DialWise AI Agents customizable?",
          answer: "Absolutely! DialWise's AI Chatbots and AI Voice Agents have been tested with over 30 companies in 6+ different niches. Our AI Agents can be tailored to meet your specific requirements, whether it's for sales, customer service, or e-commerce."
        },
        {
          question: "How does DialWise AI Agents actually help with sales?",
          answer: "DialWise's AI Modules are oriented towards sales and customer service best practices, with pre-trained AI Agents designed to maximize sales conversions. From getting an appointment approved to pitching clients, to providing customer service. DialWise's AI Agents will help you close more deals!"
        },
        {
          question: "How secure is my data with DialWise.ai?",
          answer: "Your data is securely and reliably hosted with us, however, we never store chat history or client sensitive information locally on our servers, ensuring that your training data remains private and secure. We also fully support FCC and HIPPA regulations in the US."
        },
        {
          question: "Will DialWise.ai be able to prevent missed-calls in my business?",
          answer: "With our easy-to-use platform, you will no longer lose potential clients due to technical problems, delays, or missed calls. Our AI responds quickly to ensure you never miss an opportunity to engage with your visitors."
        },
        {
          question: "How do I get started using DialWise.ai?",
          answer: "Getting started with DialWise is easy! First, create a free account. Then, personalize your AI by filling out a form about your business (once we finish the initial account activation process). In about 72 hours, our AI Knowledgebase will be fully trained and ready to integrate with your website and CRM."
        }
      ];


  return (
    <>
        <div className="max-w-4xl mx-auto">
            <div className="text-center py-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="gradient-text">F</span>requently <span className="gradient-text">A</span>sked <span className="gradient-text">Q</span>uestion<span className="gradient-text">s</span>
                </h1>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-6">
                {faqs.map((faq, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
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
        </div>
    </>
  )
}
export default PricingFaqs