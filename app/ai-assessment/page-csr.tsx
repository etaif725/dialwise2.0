'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Bot, Mic, LayoutGrid } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';

export default function DWwelcomeForm() {
  const router = useRouter(); // Router for navigation
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!firstName || !lastName || !email || !phone) {
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
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        router.push("/calc/assessment/");
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

  const features = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Enhance customer support with intelligent, 24/7 virtual assistants.",
    },
    {
      icon: Mic,
      title: "Voice Agents",
      description: "Implement voice-activated solutions for seamless, hands-free interactions.",
    },
    {
      icon: LayoutGrid,
      title: "Workflow Automation",
      description: "Streamline operations with AI-powered process optimization.",
    },
  ];

  return (
    <div className="min-h-screen pt-40 p-4 md:pt-20 bg_pattern_top flex flex-col items-center justify-center bg-gradient-to-b from-[--background] to-[--muted]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            AI Value Assessment Tool for Small Businesses
          </h1>
          <p className="text-xl text-[--muted-foreground]">
            Unlock the future of your business with AI-powered solutions
          </p>
        </div>

        <div className="bg-[--card] rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[--foreground]">Get Your Free AI Audit</h2>
          <p className="text-[--muted-foreground] mb-6">
            Discover how AI can revolutionize your business. Our cutting-edge AI Value Assessment Tool analyzes your
            business needs and recommends tailored AI solutions to boost efficiency, customer satisfaction, and revenue.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">
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
              <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">
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
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
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
              <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
                Phone Number
              </label>
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
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full gradient-button py-2 rounded-md hover:font-semibold transition duration-200"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Get Your AI Assessment"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
