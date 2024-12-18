'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';
import { Bot, LayoutGrid, Mic, LucideIcon } from 'lucide-react';
import VideoBackground from '@/components/videoBackground';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type AgentRole = 'Sales' | 'Customer Support' | 'Technical Support' | '';
type Persona = 'Calm' | 'Supportive' | 'Sales-Oriented' | 'Technical' | 'Aggressive' | 'Comedic' | '';
type Gender = 'Male' | 'Female' | '';
type SpeechSpeed = 'Slow (60 WPM)' | 'Medium (65 WPM)' | 'Fast (75 WPM)' | '';
type SupportedLanguages = 
  | 'English (UK)'
  | 'English (USA)'
  | 'English (Australia)'
  | 'English (Canada)'
  | 'Japanese'
  | 'Chinese'
  | 'German'
  | 'Hindi'
  | 'French (France)'
  | 'French (Canada)'
  | 'Korean'
  | 'Portuguese (Brazil)'
  | 'Portuguese (Portugal)'
  | 'Italian'
  | 'Spanish (Spain)'
  | 'Spanish (Mexico)'
  | 'Indonesian'
  | 'Dutch'
  | 'Turkish'
  | 'Filipino'
  | 'Polish'
  | 'Swedish'
  | 'Bulgarian'
  | 'Romanian'
  | 'Arabic (Saudi Arabia)'
  | 'Arabic (UAE)'
  | 'Czech'
  | 'Greek'
  | 'Finnish'
  | 'Croatian'
  | 'Malay'
  | 'Slovak'
  | 'Danish'
  | 'Tamil'
  | 'Ukrainian'
  | 'Russian';

export default function AIAgentDemoForm() {
  const router = useRouter();

  const [aiAgentName, setAiAgentName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [companyTransferPhone, setCompanyTransferPhone] = useState<string>('');
  const [clientInput, setClientInput] = useState<string>('');
  const [selectedAIAgentType, setSelectedAIAgentType] = useState<AgentRole>('');
  const [persona, setPersona] = useState<Persona>('');
  const [gender, setGender] = useState<Gender>('');
  const [speechSpeed, setSpeechSpeed] = useState<SpeechSpeed>('');
  const [faqs, setFaqs] = useState<string[]>(Array(5).fill(''));
  const [knowledgeBaseLink, setKnowledgeBaseLink] = useState<string>('');
  const [language, setLanguage] = useState<string>('');

  // Add this function to check if a value is a valid language
  function isValidLanguage(value: string): boolean {
    const supportedLanguages = [
        'English (UK)', 'English (USA)', 'English (Australia)', 'English (Canada)',
        'Japanese', 'Chinese', 'German', 'Hindi', 'French (France)', 'French (Canada)',
        'Korean', 'Portuguese (Brazil)', 'Portuguese (Portugal)', 'Italian',
        'Spanish (Spain)', 'Spanish (Mexico)', 'Indonesian', 'Dutch', 'Turkish',
        'Filipino', 'Polish', 'Swedish', 'Bulgarian', 'Romanian', 'Arabic (Saudi Arabia)',
        'Arabic (UAE)', 'Czech', 'Greek', 'Finnish', 'Croatian', 'Malay', 'Slovak',
        'Danish', 'Tamil', 'Ukrainian', 'Russian'
    ];
    return supportedLanguages.includes(value);
  }

  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
  
    if (!email || !aiAgentName || !companyTransferPhone || !clientInput || !selectedAIAgentType || !persona || !gender || !speechSpeed || !language) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }
  
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_AI_AGENT_DEMO_BUILDER_WEBHOOK;
  
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
          aiAgentName,
          email,
          companyTransferPhone,
          clientInput,
          selectedAIAgentType,
          persona,
          gender,
          speechSpeed,
          language,
          faqs,
          knowledgeBaseLink,
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

  return (
    <>
    <div className="min-h-screen py-40 bg_pattern_top flex flex-col items-center justify-center bg-gradient-to-b from-[--background] to-[--muted]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 px-4">
            Create Your <span className="gradient-text">AI Voice Agent</span> Demo
          </h1>
          <p className="text-lg text-[--muted-foreground] px-4">
            Customize your AI Voice Agent to experience how it can transform your business communication.
          </p>
        </div>
        <div className="bg-[--card] rounded-2xl shadow-xl p-6 mt-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium" htmlFor="email">
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
            <div>
              <label htmlFor="aiAgentName" className="block text-sm font-medium">AI Agent Name</label>
              <input
                type="text"
                id="aiAgentName"
                value={aiAgentName}
                onChange={(e) => setAiAgentName(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="companyTransferPhone" className="block text-sm font-medium">Transfer Call Number</label>
              <PhoneInput
                country={'us'}
                value={companyTransferPhone}
                onChange={(phone) => setCompanyTransferPhone(phone)}
                containerClass="mt-1"
                inputClass="w-full px-3 py-2 border rounded-md shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="clientInput" className="block text-sm font-medium">What Input Do You Want From the Client? (seperated by commas)</label>
              <input
                type="text"
                id="clientInput"
                value={clientInput}
                onChange={(e) => setClientInput(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="agentRole" className="block text-sm font-medium">Agent Role</label>
              <select
                id="agentRole"
                value={selectedAIAgentType}
                onChange={(e) => setSelectedAIAgentType(e.target.value as AgentRole)}
                required
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              >
                <option value="">Select Role</option>
                <option value="Sales">Sales</option>
                <option value="Customer Support">Customer Support</option>
                <option value="Technical Support">Technical Support</option>
              </select>
            </div>

            <div>
              <label htmlFor="persona" className="block text-sm font-medium">Persona</label>
              <select
                id="persona"
                value={persona}
                onChange={(e) => setPersona(e.target.value as Persona)}
                required
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              >
                <option value="">Select Persona</option>
                <option value="Calm">Calm</option>
                <option value="Supportive">Supportive</option>
                <option value="Sales-Oriented">Sales-Oriented</option>
                <option value="Technical">Technical</option>
                <option value="Aggressive">Aggressive</option>
                <option value="Comedic">Comedic</option>
              </select>
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium">Gender</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value as Gender)}
                required
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
                <label htmlFor="language" className="block text-sm font-medium">Language and Accent</label>
                <select
                    id="language"
                    value={language}
                    onChange={(e) => {
                    const selectedValue = e.target.value;
                    if (isValidLanguage(selectedValue)) {
                        setLanguage(selectedValue);
                    }
                    }}
                    required
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                >
                    <option value="">Select Language and Accent</option>
                    <option value="English (UK)">English (UK)</option>
                    <option value="English (USA)">English (USA)</option>
                    <option value="English (Australia)">English (Australia)</option>
                    <option value="English (Canada)">English (Canada)</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Chinese">Chinese</option>
                    <option value="German">German</option>
                    <option value="Hindi">Hindi</option>
                    <option value="French (France)">French (France)</option>
                    <option value="French (Canada)">French (Canada)</option>
                    <option value="Korean">Korean</option>
                    <option value="Portuguese (Brazil)">Portuguese (Brazil)</option>
                    <option value="Portuguese (Portugal)">Portuguese (Portugal)</option>
                    <option value="Italian">Italian</option>
                    <option value="Spanish (Spain)">Spanish (Spain)</option>
                    <option value="Spanish (Mexico)">Spanish (Mexico)</option>
                    <option value="Indonesian">Indonesian</option>
                    <option value="Dutch">Dutch</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Filipino">Filipino</option>
                    <option value="Polish">Polish</option>
                    <option value="Swedish">Swedish</option>
                    <option value="Bulgarian">Bulgarian</option>
                    <option value="Romanian">Romanian</option>
                    <option value="Arabic (Saudi Arabia)">Arabic (Saudi Arabia)</option>
                    <option value="Arabic (UAE)">Arabic (UAE)</option>
                    <option value="Czech">Czech</option>
                    <option value="Greek">Greek</option>
                    <option value="Finnish">Finnish</option>
                    <option value="Croatian">Croatian</option>
                    <option value="Malay">Malay</option>
                    <option value="Slovak">Slovak</option>
                    <option value="Danish">Danish</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Ukrainian">Ukrainian</option>
                    <option value="Russian">Russian</option>
                </select>
            </div>

            <div>
              <label htmlFor="speechSpeed" className="block text-sm font-medium">Speech Speed</label>
              <select
                id="speechSpeed"
                value={speechSpeed}
                onChange={(e) => setSpeechSpeed(e.target.value as SpeechSpeed)}
                required
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              >
                <option value="">Select Speech Speed</option>
                <option value="Slow (60 WPM)">Slow (60 WPM)</option>
                <option value="Medium (65 WPM)">Medium (65 WPM)</option>
                <option value="Fast (75 WPM)">Fast (75 WPM)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Top 5 FAQs</label>
              {faqs.map((faq, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`FAQ ${index + 1}`}
                  value={faq}
                  onChange={(e) => {
                    const updatedFAQs = [...faqs];
                    updatedFAQs[index] = e.target.value;
                    setFaqs(updatedFAQs);
                  }}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                />
              ))}
            </div>

            <div>
              <label htmlFor="knowledgeBaseLink" className="block text-sm font-medium">Knowledge Base Link (Google Drive)</label>
              <input
                type="url"
                id="knowledgeBaseLink"
                placeholder="Paste your Google Drive link here"
                value={knowledgeBaseLink}
                onChange={(e) => setKnowledgeBaseLink(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              />
            </div>
            {/* Submit Button */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="mt-6">
              <button
                type="submit"
                className="my-4 px-8 py-4 rounded-lg bg-gradient-to-r from-yellow to-green-500 text-black font-bold hover:shadow-lg hover:scale-105 transition-all duration-200 w-full"
                disabled={isLoading}
              >
                {isLoading ? "Generating your AI Agent Prompt. Please hold..." : "Click to Submit Your Agent Request"}
              </button>
              <p className="text-gray-500 text-sm">
                *Building the agent for demo purposes only. Won't include dyanmic data / custom Integrations.<br></br>
                **Limited for up to 60 mintues for testing only.
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
    <VideoBackground />
    </>
  );
}
