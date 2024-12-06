"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadForm({ isOpen, onClose }: LeadFormProps) {
  // State to store form input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form fields
    if (!firstName || !lastName || !email || !phone) {
      setIsLoading(false);
      return;
    }

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
      
      if (!webhookUrl) {
        console.error('Webhook URL is not defined');
        return;
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Get in Touch with Our AI Agent</DialogTitle>
          <DialogDescription>
            Fill out the form below, and we'll connect you to our AI agent.
          </DialogDescription>
        </DialogHeader>
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
              className="mt-2 block w-full px-4 py-2 border rounded-md"
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
              className="mt-2 block w-full px-4 py-2 border rounded-md"
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
              className="mt-2 block w-full px-4 py-2 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
              Phone Number
            </label>
            <PhoneInput
              country={'us'}
              value={phone}
              onChange={(value) => setPhone(value)}
              inputClass="phone-input"
              containerClass="phone-container"
              buttonClass="phone-button"
              dropdownClass="phone-dropdown"
              searchClass="phone-search"
              enableSearch={true}
              disableSearchIcon={true}
              inputProps={{
                id: 'phone',
                required: true,
                className: 'w-full px-12 py-2 border rounded-md'
              }}
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full text-black hover:font-semibold dark:text-white gradient-button gradient-border glass-effect py-2 rounded-md hover:gradient-border hover:glass-effect transition duration-200"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Talk to our AI Agent"}
            </button>
          </div>
          <div className="mt-6">
            <p className="text-[10px] text-muted-foreground">
              1. By submitting this form, you consent to receive calls and SMS from DialWise AI.
              <br></br>2. We only use your information to provide you with the best experience.
              <br></br> <strong>3. Only US phone numbers are supported for this form.</strong>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
