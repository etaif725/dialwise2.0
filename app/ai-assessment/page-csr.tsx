'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';
import { Bot, LayoutGrid, Mic, LucideIcon } from 'lucide-react';
import VideoBackground from '@/components/videoBackground';

// Define types for features and form data
type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type CRMSystem = 
  | 'HubSpot' 
  | 'Salesforce' 
  | 'GoHighLevel' 
  | 'Jobber' 
  | 'Bitrix24' 
  | 'Zoho' 
  | 'Close' 
  | 'Pipedrive' 
  | 'Other'
  | '';

type CompanySize = 
  | 'Small' 
  | 'Medium' 
  | 'Large' 
  | '';

type Industry = 
  | 'Technology'
  | 'Healthcare'
  | 'Finance'
  | 'Retail'
  | 'Education'
  | 'Real Estate'
  | 'Manufacturing'
  | 'Entertainment'
  | 'Hospitality'
  | 'Transportation'
  | 'Construction'
  | 'Other'
  | '';

const features: Feature[] = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Enhance customer support with intelligent, 24/7 virtual assistants.'
  },
  {
    icon: Mic,
    title: 'Voice Agents',
    description: 'Implement voice-activated solutions for seamless, hands-free interactions.'
  },
  {
    icon: LayoutGrid,
    title: 'Workflow Automation',
    description: 'Streamline operations with AI-powered process optimization.'
  }
];

export default function DWwelcomeForm() {
  const router = useRouter();

  // General Info
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  // Company Info
  const [companyName, setCompanyName] = useState<string>('');
  const [companyWebsite , setCompanyWebsite] = useState<string>('');
  const [industry, setIndustry] = useState<Industry>('');
  const [companySize, setCompanySize] = useState<CompanySize>('');
  
  // Company Specifics
  const [salesEmployeeReplacement, setSalesEmployeeReplacement] = useState<string>('');
  const [csEmployeeReplacement, setCsEmployeeReplacement] = useState<string>('');
  const [outboundLeads, setOutboundLeads] = useState<string>('');
  const [inboundLeads, setInboundLeads] = useState<string>('');
  const [smsEmailsSent, setSmsEmailsSent] = useState<string>('');
  const [socialMediaChatVisitors, setSocialMediaChatVisitors] = useState<string>('');
  const [avgActiveTalkTime, setAvgActiveTalkTime] = useState<string>('');

  // AI Solutions Needed
  const [selectedAIAgents, setSelectedAIAgents] = useState<string[]>([]);
  const [agentsRequired, setAgentsRequired] = useState<Record<string, string>>({});
  const [aiBudget, setAiBudget] = useState<string>('');
  const [crmSystem, setCrmSystem] = useState<CRMSystem>('');
  const [otherCrm, setOtherCrm] = useState<string>('');
  const [customApis, setCustomApis] = useState<string>('');

  // Error and Loading States
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [showOtherIndustry, setShowOtherIndustry] = useState<boolean>(false);
  const [otherIndustry, setOtherIndustry] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
  
    const finalIndustry = industry === "Other" ? otherIndustry : industry;
  
    if (!firstName || !lastName || !email || !phone || !finalIndustry || !companyName || !companySize) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }
  
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_MAKE_ASSESSMENT_WEBHOOK;
  
      if (!webhookUrl) {
        console.error("Webhook URL is not defined");
        setError("Internal error. Please try again later.");
        setIsLoading(false);
        return;
      }
  
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          industry: finalIndustry, // Use final value for 'industry'
          companyName,
          companyWebsite,
          companySize,
          salesEmployeeReplacement,
          csEmployeeReplacement,
          outboundLeads,
          inboundLeads,
          smsEmailsSent,
          socialMediaChatVisitors,
          avgActiveTalkTime,
          selectedAIAgents,
          agentsRequired,
          aiBudget,
          crmSystem,
          otherCrm,
          customApis,
          timestamp: new Date().toISOString(),
        }),
      });
  
      if (response.ok) {
        router.push("/thank-you");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to submit the form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAIAgentChange = (agent: string) => {
    setSelectedAIAgents((prev: string[]) =>
      prev.includes(agent) ? prev.filter((item) => item !== agent) : [...prev, agent]
    );
  };

  const handleAgentsRequiredChange = (agent: string, value: string) => {
    setAgentsRequired((prev: Record<string, string>) => ({ ...prev, [agent]: value }));
  };

  function isIndustry(value: string): value is Industry {
    const validIndustries: Industry[] = [
      'Technology', 'Healthcare', 'Finance', 'Retail', 'Education', 
      'Real Estate', 'Manufacturing', 'Entertainment', 'Hospitality', 
      'Transportation', 'Construction', 'Other', ''
    ];
    return validIndustries.includes(value as Industry);
  }
  
  function isCompanySize(value: string): value is CompanySize {
    return ['Small', 'Medium', 'Large', ''].includes(value);
  }
  
  function isCRMSystem(value: string): value is CRMSystem {
    return [
      'HubSpot', 'Salesforce', 'GoHighLevel', 'Jobber', 
      'Bitrix24', 'Zoho', 'Close', 'Pipedrive', 'Other', ''
    ].includes(value);
  }

  return (
    <>
    <div className="min-h-screen py-40 bg_pattern_top flex flex-col items-center justify-center bg-gradient-to-b from-[--background] to-[--muted]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold my-4 p-4 gradient-text">
            Let's Discuss Your AI Needs, Shall We?
          </h1>
          <p className="text-xl text-[--muted-foreground] mb-40">
            Unlock the future of your business with<br></br> DialWise's AI-powered solutions
          </p>
        </div>

        <div className="bg-[--card] rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-[--foreground]">Get Your Free AI Audit</h2>
          <p className="text-[--muted-foreground] mb-6">
            Discover how AI can revolutionize your business. Our cutting-edge AI Value Assessment Tool analyzes your
            business needs and recommends tailored AI solutions to boost efficiency, customer satisfaction, and revenue.
          </p>
          <div className="grid md:grid-cols-3 gap-8 my-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/10 dark:bg-primary/20 border border-green-300 dark:border-green-700 rounded-xl p-6 text-center shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="h-8 w-8 text-yellow" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
          <form onSubmit={handleSubmit} className="">
            {/* General Info Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[--foreground] pt-10">General Info:</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60">
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    inputProps={{
                      id: "phone",
                      required: true,
                      className: "w-full px-12 py-2 border rounded-md text-black dark:text-white",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Company Info Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[--foreground] pt-10">Company Info:</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="companyName">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    placeholder="Enter your company name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="companyWebsite">
                    Company Website
                  </label>
                  <input
                    type="text"
                    id="companyWebsite"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    placeholder="Enter your company website"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="industry">
                    Industry
                  </label>
                  <select
                    id="industry"
                    value={industry}
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      if (isIndustry(selectedValue)) {
                        setIndustry(selectedValue);
                        setShowOtherIndustry(selectedValue === "Other");
                      }
                    }}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    required
                  >
                    <option value="" disabled>Select your industry</option>
                    <option value="service_industries">Service Industries</option>
                    <option value="real_estate">Real Estate</option>
                    <option value="clinics">Clinics</option>
                    <option value="spas">Spas</option>
                    <option value="salons">Salons</option>
                    <option value="enterprises">Enterprises</option>
                    <option value="law_firms">Law Firms</option>
                    <option value="solar_energy">Solar Energy</option>
                    <option value="logistics">Logistics</option>
                    <option value="marketing_agencies">Marketing Agencies</option>
                    <option value="advertising_agencies">Advertising Agencies</option>
                    <option value="digital_marketing">Digital Marketing</option>
                    <option value="financial_services">Financial Services</option>
                    <option value="insurance">Insurance</option>
                    <option value="education_services">Education Services</option>
                    <option value="medical_services">Medical Services</option>
                    <option value="health_and_wellness">Health & Wellness</option>
                    <option value="event_management">Event Management</option>
                    <option value="travel_agencies">Travel Agencies</option>
                    <option value="hospitality_services">Hospitality Services</option>
                    <option value="tourism">Tourism</option>
                    <option value="construction_services">Construction Services</option>
                    <option value="real_estate_agents">Real Estate Agents</option>
                    <option value="property_management">Property Management</option>
                    <option value="automotive_services">Automotive Services</option>
                    <option value="home_services">Home Services</option>
                    <option value="cleaning_services">Cleaning Services</option>
                    <option value="personal_training">Personal Training</option>
                    <option value="coaching_services">Coaching Services</option>
                    <option value="consulting_services">Consulting Services</option>
                    <option value="it_services">IT Services</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="software_development">Software Development</option>
                    <option value="web_design">Web Design</option>
                    <option value="app_development">App Development</option>
                    <option value="business_services">Business Services</option>
                    <option value="transportation_services">Transportation Services</option>
                    <option value="retail_services">Retail Services</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="financial_advisors">Financial Advisors</option>
                    <option value="accounting_services">Accounting Services</option>
                    <option value="tax_services">Tax Services</option>
                    <option value="marketing_services">Marketing Services</option>
                    <option value="branding_services">Branding Services</option>
                    <option value="public_relations">Public Relations</option>
                    <option value="customer_support">Customer Support</option>
                    <option value="virtual_assistants">Virtual Assistants</option>
                    <option value="photography_services">Photography Services</option>
                    <option value="videography_services">Videography Services</option>
                    <option value="graphic_design">Graphic Design</option>
                    <option value="copywriting">Copywriting</option>
                    <option value="translation_services">Translation Services</option>
                    <option value="it_support">IT Support</option>
                    <option value="cleaning_services">Cleaning Services</option>
                    <option value="real_estate_development">Real Estate Development</option>
                    <option value="home_improvement">Home Improvement</option>
                    <option value="pool_services">Pool Services</option>
                    <option value="pest_control">Pest Control</option>
                    <option value="security_services">Security Services</option>
                    <option value="hr_services">HR Services</option>
                    <option value="staffing_agencies">Staffing Agencies</option>
                    <option value="engineering_services">Engineering Services</option>
                    <option value="architecture_services">Architecture Services</option>
                    <option value="graphic_design">Graphic Design</option>
                    <option value="photography_services">Photography Services</option>
                    <option value="videography_services">Videography Services</option>
                    <option value="business_coaching">Business Coaching</option>
                    <option value="professional_services">Professional Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {showOtherIndustry && (
                  <div>
                    <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="otherIndustry">
                      Please specify your industry
                    </label>
                    <input
                      type="text"
                      id="otherIndustry"
                      value={otherIndustry}
                      onChange={(e) => setOtherIndustry(e.target.value)}
                      className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                      placeholder="Enter your industry"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="companySize">
                    Company Size
                  </label>
                  <select
                    id="companySize"
                    value={companySize}
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      if (isCompanySize(selectedValue)) {
                        setCompanySize(selectedValue);
                      }
                    }}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    required
                  >
                    <option value="" disabled>
                      Select your company size
                    </option>
                    <option value="Small (1-50 employees)">Small (1-50 employees)</option>
                    <option value="Medium (51-200 employees)">Medium (51-200 employees)</option>
                    <option value="Large (200+ employees)">Large (200+ employees)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="crmSystem">
                    Do you have a CRM system?
                  </label>
                  <select
                    id="crmSystem"
                    value={crmSystem}
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      if (isCRMSystem(selectedValue)) {
                        setCrmSystem(selectedValue);
                      }
                    }}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    required
                  >
                    <option value="">Select CRM</option>
                    <option value="HubSpot">HubSpot</option>
                    <option value="Salesforce">Salesforce</option>
                    <option value="GoHighLevel">GoHighLevel</option>
                    <option value="Jobber">Jobber</option>
                    <option value="Bitrix24">Bitrix24</option>
                    <option value="Zoho">Zoho</option>
                    <option value="Close">Close</option>
                    <option value="Pipedrive">Pipedrive</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {crmSystem === "Other" && (
                  <div>
                    <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="otherCrm">
                      Please specify your CRM system
                    </label>
                    <input
                      type="text"
                      id="otherCrm"
                      value={otherCrm}
                      onChange={(e) => setOtherCrm(e.target.value)}
                      className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                      placeholder="Enter the CRM system"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="aiBudget">
                    What is your budget for this project? (in USD)
                  </label>
                  <select
                    id="aiBudget"
                    value={aiBudget}
                    onChange={(e) => setAiBudget(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    required
                  >
                    <option value="">Click to select</option>
                    <option value="under $5000">under $5,000</option>
                    <option value="$5000-$15000">$5,000-$15,000</option>
                    <option value="$15000-$50000">$15,000-$50,000</option>
                    <option value="$50000+">$50,000 or more</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Custom Solutions Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[--foreground] pt-10">Potential AI Usage:</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="salesEmployeeReplacement">
                    How many sales agents do you currently hire?
                  </label>
                  <input
                    type="number"
                    id="salesEmployeeReplacement"
                    value={salesEmployeeReplacement}
                    onChange={(e) => setSalesEmployeeReplacement(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    placeholder="Enter the number of employees here"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="csEmployeeReplacement">
                    How many customer service agents do you currently hire?
                  </label>
                  <input
                    type="number"
                    id="csEmployeeReplacement"
                    value={csEmployeeReplacement}
                    onChange={(e) => setCsEmployeeReplacement(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    placeholder="Enter the number of employees here"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="outboundLeads">
                    What is the average amount of leads you're trying to call each month?
                  </label>
                  <input
                    type="number"
                    id="outboundLeads"
                    value={outboundLeads}
                    onChange={(e) => setOutboundLeads(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    placeholder="Monthly number of outbound leads"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="inboundLeads">
                    What is the average amount of monthly incoming calls (Sales/Customer Service calls)
                  </label>
                  <input
                    type="number"
                    id="inboundLeads"
                    value={inboundLeads}
                    onChange={(e) => setInboundLeads(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    placeholder="Monthly number of inbound leads"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="smsEmailsSent">
                    How many Emails do you normally send each month?
                  </label>
                  <input
                    type="number"
                    id="smsEmailsSent"
                    value={smsEmailsSent}
                    onChange={(e) => setSmsEmailsSent(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    placeholder="Monthly number of SMS/Emails sent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="socialMediaChatVisitors">
                    What is the average amount of Website/Social Media interactions you get each month?
                  </label>
                  <input
                    type="number"
                    id="socialMediaChatVisitors"
                    value={socialMediaChatVisitors}
                    onChange={(e) => setSocialMediaChatVisitors(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    placeholder="Monthly number of social media/chat visitors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="avgActiveTalkTime">
                    What is the average talk-time of your BEST sales agent each month? (total in minutes)
                  </label>
                  <input
                    type="number"
                    id="avgActiveTalkTime"
                    value={avgActiveTalkTime}
                    onChange={(e) => setAvgActiveTalkTime(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    placeholder="Enter average active talk time"
                  />
                </div>
              </div>
            </div>

            {/* AI Solutions Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[--foreground] pt-10">Choose Your AI Agents:</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="selectedAIAgents">
                    Select AI Agents
                  </label>
                  <div className="space-y-2">
                    {[
                      'Sales AI Assistant',
                      'Customer Service AI',
                      'Email Automation AI',
                      'SMS/WhatsApp Automation AI',
                      'Social Media Engagement AI',
                      'CRM Integration AI'
                    ].map((agent) => (
                      <div key={agent}>
                        <input
                          type="checkbox"
                          id={agent}
                          value={agent}
                          onChange={() => handleAIAgentChange(agent)}
                          checked={selectedAIAgents.includes(agent)}
                        />
                        <label htmlFor={agent} className="ml-2 text-sm">{agent}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="agentsRequired">
                    Agents Required Per Month (number)
                  </label>
                  <div className="space-y-2">
                    {[
                      'Sales AI Assistant',
                      'Customer Service AI',
                      'Social Media AI'
                    ].map((agent) => (
                      <div key={agent}>
                        <input
                          type="number"
                          placeholder={`No. of ${agent}`}
                          value={agentsRequired[agent] || ''}
                          onChange={(e) => handleAgentsRequiredChange(agent, e.target.value)}
                          className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                        />
                      </div>
                    ))}
                  </div>
                </div> */}
                <div>
                  <label className="block text-sm font-medium pt-4 pb-2 text-black dark:text-white/60" htmlFor="customApis">
                    Tell us about your business and where it hurts the most
                  </label>
                  <textarea
                    id="customApis"
                    value={customApis}
                    onChange={(e) => setCustomApis(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border rounded-md text-black dark:text-white"
                    placeholder="Please tell us everything you can about your business, current pain points, and if there are any tasks you'd like us to fully automate for you."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="mt-6">
              <button
                type="submit"
                className="my-4 px-8 py-4 rounded-lg bg-gradient-to-r from-yellow to-green-500 text-black font-bold hover:shadow-lg hover:scale-105 transition-all duration-200 w-full"
                disabled={isLoading}
              >
                {isLoading ? "Submitting Your Request..." : "Send Me a Proposal"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
    <VideoBackground />
    </>
  );
}
