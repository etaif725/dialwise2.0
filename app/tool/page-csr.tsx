"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Calendar, Workflow, Boxes, X } from 'lucide-react';
import AssessmentSection from './AssessmentSection';
import { useRouter } from "next/navigation";

interface AssessmentToolProps {
  userInfo: {
    customerService: string;
    virtualReceptionist: string;
    appointmentSetter: string;
    onboarding: string;
    onboardingSalary: string;
    workflow: string;
  };
}

export default function DWAssessmentTool({ userInfo }: AssessmentToolProps) {
  const router = useRouter();
  const [values, setValues] = useState({
    customerService: "",
    virtualReceptionist: "",
    appointmentSetter: "",
    onboarding: "",
    onboardingSalary: "",
    workflow: "",
  });

  const sections = [
    {
      id: 'customerService',
      title: 'Customer Service AI Agent',
      icon: MessageSquare,
      question: 'What is your current annual customer service budget?',
      calculation: (value: number) => ({ 
        savings: Math.round(value * 0.7),
        source: 'Industry research shows significant cost reduction with AI implementation',
        citations: [
          {
            text: 'Klarna reduced support ticket resolution time from 11 minutes to 2 minutes, generating $40 million in annual profit improvements',
            url: 'https://www.singlegrain.com/blog/ms/klarna-ai/'
          },
          {
            text: 'Businesses typically save around 30% on their customer support costs by implementing chatbots',
            url: 'https://adamconnell.me/chatbot-statistics/'
          },
          {
            text: 'Companies can reduce their cost per support ticket from $40 to $8, representing an 80% reduction',
            url: 'https://ai-for.business/ai-case-study-saving-80-on-customer-support-costs-with-generative-ai/'
          }
        ]
      })
    },
    {
      id: 'virtualReceptionist',
      title: 'Virtual Receptionist',
      icon: Bot,
      question: 'How many calls does your business receive per month?',
      calculation: (value: number) => {
        const missedCalls = Math.round(value * 0.25);
        const potentialRevenue = missedCalls * 100;
        return {
          savings: potentialRevenue,
          source: `Based on ${missedCalls.toLocaleString()} typically missed calls (25%) at $100 average value per lead`,
          citations: [
            {
              text: 'AI virtual receptionists can handle up to 100 calls simultaneously for a single phone number',
              url: 'https://dialzara.com/blog/what-is-an-ai-virtual-receptionist-and-how-can-it-benefit-your-business/'
            },
            {
              text: 'One business documented savings of $20,000 in lost revenue within just 30 days',
              url: 'https://www.reddit.com/r/SideProject/comments/1e2kbdz/i_recreated_an_ai_phone_agent_that_saved_20000_in/'
            },
            {
              text: 'Companies can save up to $250,000 over five years compared to employing full-time reception staff',
              url: 'https://dialzara.com/blog/how-much-does-an-ai-virtual-receptionist-cost/'
            }
          ]
        };
      }
    },
    {
      id: 'appointmentSetter',
      title: 'AI Appointment Setter',
      icon: Calendar,
      question: 'How many leads do you receive per month?',
      calculation: (value: number) => {
        const avgDealValue = 1000;
        const currentConversionRate = 0.04;
        const aiConversionRate = 0.21;
        
        const currentRevenue = value * currentConversionRate * avgDealValue;
        const potentialRevenue = value * aiConversionRate * avgDealValue;
        const additionalRevenue = potentialRevenue - currentRevenue;
        
        return {
          savings: Math.round(additionalRevenue),
          source: `Based on increasing conversion rate from 4% to 21% with 5-minute response time, at $${avgDealValue} average deal value`,
          citations: [
            {
              text: 'Companies that contact leads within 5 minutes are 21 times more likely to qualify them compared to waiting 30 minutes',
              url: 'https://www.callpage.io/blog/posts/speed-to-lead'
            },
            {
              text: 'Harvard study shows reaching out to leads within 10 seconds can increase conversion rates by up to 381%',
              url: 'https://www.trysetter.com/ai-appointment-setter'
            },
            {
              text: 'One HVAC company experienced a 20% increase in bookings and conversions in just the first week of implementing AI calling',
              url: 'https://www.reddit.com/r/SideProject/comments/1e2kbdz/i_recreated_an_ai_phone_agent_that_saved_20000_in/'
            }
          ]
        };
      }
    },
    {
      id: 'onboarding',
      title: 'One-Click Onboarding',
      icon: Boxes,
      question: 'How many new clients do you onboard monthly?',
      additionalInputs: [
        {
          id: 'onboardingSalary',
          label: 'Monthly salary for onboarding staff ($)',
          type: 'number'
        }
      ],
      calculation: (value: number, additionalValues?: Record<string, number>) => {
        const onboardingSalary = additionalValues?.onboardingSalary || 4000; // Default salary if not provided
        const onboardingTimeReduction = 0.90; // 90% reduction
        const oldOnboardingTimeHours = 20; // Standard onboarding time per client
        const newOnboardingTimeHours = oldOnboardingTimeHours * (1 - onboardingTimeReduction);
        
        const hourlyRate = onboardingSalary / 160; // Monthly salary to hourly rate
        const currentMonthlyCost = value * oldOnboardingTimeHours * hourlyRate;
        const newMonthlyCost = value * newOnboardingTimeHours * hourlyRate;
        const monthlySavings = currentMonthlyCost - newMonthlyCost;
        const annualSavings = monthlySavings * 12;

        return {
          savings: Math.round(annualSavings),
          source: `Based on ${value} new clients per month, reducing onboarding time from ${oldOnboardingTimeHours} hours to ${newOnboardingTimeHours} hours per client`,
          citations: [
            {
              text: 'Companies report reducing onboarding time from 5+ days to just 10 minutes through automation, representing a 90% reduction in processing time',
              url: 'https://qflowbpm.com/process-onboarding/'
            },
            {
              text: 'Organizations with automated onboarding processes experience up to 60% year-over-year revenue growth and show 82% improvement in new hire retention',
              url: 'https://enboarder.com/blog/employee-engagement-onboarding-stats/'
            },
            {
              text: 'Poor onboarding leads to significant costs, with companies losing up to 20% of an employee\'s salary when they leave within the first 6-12 months',
              url: 'https://withe.co/blog/employee-onboarding-statistics'
            }
          ]
        };
      }
    },
    {
      id: 'workflow',
      title: 'Workflow Automation',
      icon: Workflow,
      question: 'How many hours per month do you spend on manual workflows?',
      calculation: (value: number) => {
        const hourlyRate = 50;
        const errorCostMultiplier = 200;
        const currentErrorRate = 0.15;

        // Current costs
        const currentLaborCost = value * hourlyRate;
        const currentErrorCost = (value * currentErrorRate) * errorCostMultiplier;
        const totalCurrentCost = currentLaborCost + currentErrorCost;

        // AI-automated costs (70% reduction in hours, 90% reduction in errors)
        const aiHours = value * 0.3;
        const aiLaborCost = aiHours * hourlyRate;
        const aiErrorCost = (aiHours * (currentErrorRate * 0.1)) * errorCostMultiplier;
        const totalAiCost = aiLaborCost + aiErrorCost;

        const monthlySavings = totalCurrentCost - totalAiCost;
        const annualSavings = monthlySavings * 12;

        return {
          savings: Math.round(annualSavings),
          source: `Based on ${value} monthly manual hours at $${hourlyRate}/hour with error reduction from 15% to 1.5%`,
          citations: [
            {
              text: 'Organizations report 70% reduction in manual processing time and 90% reduction in error rates with AI automation',
              url: 'https://beslick.com/what-is-ai-workflow-automation/'
            },
            {
              text: 'AI workflow automation scales operations without additional human resources, handling complex tasks including unstructured data',
              url: 'https://www.pulpstream.com/resources/blog/ai-workflow-automation'
            },
            {
              text: 'Businesses report improved decision-making and enhanced customer experience through faster response times',
              url: 'https://www.leewayhertz.com/ai-for-workflow-automation/'
            }
          ]
        };
      }
    }
  ];

  const handleInputChange = (id: string, value: string) => {
    setValues(prev => ({ ...prev, [id]: value }));
  };

  const calculateTotalSavings = () => {
    return sections.reduce((total, section) => {
      const value = Number(values[section.id as keyof typeof values]) || 0;
      const additionalValues = section.additionalInputs?.reduce((acc, input) => ({
        ...acc,
        [input.id]: Number(values[input.id as keyof typeof values]) || 0
      }), {});
      return total + section.calculation(value, additionalValues).savings;
    }, 0);
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      console.log("Redirecting to AI assessment...");
      router.push("/ai-assessment");
    } catch (error) {
      console.error("Error during navigation:", error);
    }
  };
  

  return (
    <div className="min-h-screen pt-40 p-4 bg_pattern_top flex flex-col items-center justify-center bg-gradient-to-b from-[--background] to-[--muted]">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-7xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-20">
          👋! Let's Calculate your <br></br><span className="gradient-text">potential savings</span> with DialWise
        </h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <AssessmentSection
            key={section.id}
            {...section}
            value={values[section.id as keyof typeof values]}
            additionalValues={section.additionalInputs?.reduce((acc, input) => ({
              ...acc,
              [input.id]: values[input.id as keyof typeof values]
            }), {})}
            onChange={handleInputChange}
          />
        ))}
      </div>

      <div className="text-center space-y-8 pt-12">
        <div className="bg-white dark:bg-accent/5 hover:bg-green-50 transition-colors border border-green-200 dark:border-green-700 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">
            Total Potential Annual Savings:
            <span className="ml-2 bg-gradient-to-r from-yellow to-green-500 bg-clip-text text-transparent">
              ${calculateTotalSavings().toLocaleString()}
            </span>
          </h2>
          <button
            type='button'
            onClick={handleSubmit} 
            className="mt-4 px-8 py-4 rounded-lg bg-gradient-to-r from-yellow to-green-500 text-black font-bold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            I'd like to continue further
          </button>
        </div>
      </div>
    </motion.div>
  </div>
  );
}
