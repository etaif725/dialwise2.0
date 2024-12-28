"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Scale, 
  FileText, 
  AlertCircle, 
  CheckCircle,
  Lock,
  DollarSign,
  FileTerminal,
  UserCheck,
  BookOpen,
  Gavel,
  HandshakeIcon
} from "lucide-react";

const termsHighlights = [
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade security measures to protect your data"
  },
  {
    icon: Scale,
    title: "Fair Use",
    description: "Clear guidelines for acceptable use of our services"
  },
  {
    icon: FileText,
    title: "Transparency",
    description: "Clear terms written in plain, understandable language"
  },
  {
    icon: AlertCircle,
    title: "Compliance",
    description: "Full compliance with relevant laws and regulations"
  }
];

const sections = [
  {
    title: "Overview",
    content: `Welcome to the DialWise.AI Terms of Service agreement. The terms "DialWise.AI", "DialWise" "the Company," "we," "us," and "our" refer to our Company. The terms "the Partner," "client," "you," and "your" refer to your Company.

The following Terms of Service apply when you sign this agreement. The signer must be the business owner or an authorized person within your company that is able to enter into this agreement. These Terms of Service will also apply to any other persons in your Company that communicate with us.

Please review the following terms carefully. By signing you signify your agreement to these Terms of Service. If you do not agree to be bound to these Terms of Service in their entirety, you are not eligible for services provided by DialWise.AI. Below you will find the services rendered for individual services provided by DialWise.AI respectively. These are all different services, in no way shape or form does this indicate that all services will be provided in any agreement.`,
    icon: BookOpen
  },
  {
    title: "1. Permissions Granted",
    content: `To effectively render our services, DialWise.AI is granted the right by the partner to utilize previous content, information furnished through forms, social media content, copy, scripts, and other materials provided. This content is exclusively utilized for the benefit of the partner and will not be shared with any other clients or partners.`,
    icon: Lock
  },
  {
    title: "2. Additional Terms Related to Services",
    content: `DialWise.AI will provide management services and support in running Conversational AI for said partner. There is no guarantee of results, or scalability. Partner is responsible to launch, manage and run their website and business backend effectively.

DialWise.AI will also provide partner support and reports as needed. These calls are to provide overall guidance and strategy, and the partner is solely responsible for any advice they decide to action and any given outcome. DialWise.AI is not liable if the partner takes action that results in a decline in business revenue, legal liability or any other actions that may result in a negative impact to the partner's business.

ALTHOUGH THE GOAL IS TO PROVIDE CONSULTING AND MANAGEMENT SERVICES THAT CAN PROVIDE AN OVERALL POSITIVE EXPERIENCE AND ROI, THIS IS BY NO WAY GUARANTEED AND DEPENDS ON A NUMBER OF FACTORS. DialWise.AI IS NOT LIABLE IF A POSITIVE RETURN IS NOT MET OR NO REVENUE IS PRODUCED FROM THIS MANAGEMENT SERVICE AND PARTNER UNDERSTANDS THE RISK. NO REFUND OR GUARANTEE WILL BE GIVEN UNDER ANY CIRCUMSTANCE UNLESS ALL CONDITIONS OF THE CONDITIONAL MONEY BACK GUARANTEE ARE MET.`,
    icon: FileTerminal
  },
  {
    title: "3. Development of Scripting",
    content: `DialWise.AI, working in conjunction with the partner, may at times help develop the prompt engineering and scripting and other content to be utilized in the partner's business. It is the partner's responsibility to review all facts, representations and any legal claims in such statements and website and Content for accuracy. Partner is required to check the contents being published by DialWise.AI at least once per week. Partner is ultimately responsible for any claims in copy, even if written by DialWise.AI that may breach local, state or federal laws.`,
    icon: FileText
  },
  {
    title: "4. Third Party Software and Content Licenses",
    content: `Partner shall be solely responsible for the maintenance of all software and other third-party content licenses. To the extent that a new license or additional licenses are required for DialWise.AI to provide the Services, DialWise.AI will notify the partner in advance of all new or additional licenses and will facilitate purchase of said licenses where applicable.`,
    icon: Shield
  },
  {
    title: "5. Partner Responsibilities",
    content: `The Partner is responsible for their own site, marketing, onboarding, customer service, implementation and operations with DialWise. The Partner is responsible for the proper deployment of the product offering and website and upkeep.`,
    icon: UserCheck
  },
  {
    title: "6. Revenue Share in Partnership",
    content: `Under the revenue share partnership, net profits are allocated, with the partner entitled to 60% and DialWise entitled to 40%. The Partner retains the autonomy to set call charges above the standard rates of $0.10/minute for outbound calls and $0.15/minute for inbound calls to their clients, subaccounts, agencies and other service distributions.`,
    icon: DollarSign,
    subsections: [
      {
        title: "Monthly Volume Calculation",
        content: "At the end of each calendar month, the total volume of calls generated by the Affiliate will be calculated. This calculation will be based on the average daily total volume of calls for the respective month."
      },
      {
        title: "Invoicing",
        content: "Invoices will be issued to Affiliates on a monthly basis. The invoiced amount will be determined based on the average daily total volume of calls."
      }
    ]
  },
  {
    title: "7. Governing Law",
    content: `This Agreement shall be governed and construed in accordance with the internal substantive laws of the State of Florida, without regard to its conflicts of laws principles. All disputes arising out of or with respect to this Agreement shall be heard exclusively in the courts, state and Federal, located in Miami, FL.`,
    icon: Gavel
  },
  {
    title: "8. Partnership Terms",
    content: `DialWise.AI employees are not and shall not be deemed to be employees of Partner or Client. DialWise.AI shall be solely responsible for the payment of all compensation to its employees, including provisions for employment taxes, workers' compensation and any similar taxes associated with employment of DialWise.AI's personnel.`,
    icon: HandshakeIcon
  }
];

export default function Terms() {
  return (
    <div className="min-h-screen pt-20 bg_pattern_top">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: March 15, 2024
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {termsHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:border-primary transition-all">
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8">
                  <div className="flex items-start gap-4">
                    <section.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-muted-foreground whitespace-pre-wrap">
                          {section.content}
                        </p>
                        {section.subsections && (
                          <div className="mt-6 space-y-4">
                            {section.subsections.map((subsection, i) => (
                              <div key={i}>
                                <h3 className="text-lg font-semibold mb-2">
                                  {subsection.title}
                                </h3>
                                <p className="text-muted-foreground">
                                  {subsection.content}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.section>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <Card className="p-8 bg-primary text-primary-foreground">
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle className="h-6 w-6" />
                <h2 className="text-2xl font-bold">Agreement Acceptance</h2>
              </div>
              <p className="mb-2">
                By using DialWise.ai services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms & Conditions.
              </p>
              <p className="text-sm opacity-80">
                Last modified: March 15, 2024
              </p>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}