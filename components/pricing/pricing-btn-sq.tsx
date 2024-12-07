"use client";

import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const emailSchema = z.string().email('Please enter a valid email address');

// Get base URL for API calls
const getApiUrl = () => {
  // Use relative URL in production to avoid CORS issues
  if (process.env.NODE_ENV === 'production') {
    return '/api/square/create-payment-link';
  }
  // Use full URL in development
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '';
  return `${baseUrl}/api/square/create-payment-link`;
};

interface PaymentButtonSquareProps {
  planName: string;
  totalPrice: number;
  minutes: number;
  planId?: string;
}


const PaymentButtonSquare = ({ planName, totalPrice, minutes, planId }: PaymentButtonSquareProps) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const { toast } = useToast();

  // Input validation
  const isCustomPlan = planName.toLowerCase().includes('business') || planName.toLowerCase().includes('enterprise');
  const isValidPlan = isCustomPlan || (planName && totalPrice > 0 && minutes > 0);

  if (!isValidPlan) {
    return (
      <Button
        className="w-full gradient-button"
        variant="default"
        onClick={() => toast({
          title: "Invalid Plan Selection",
          description: "Please select a valid plan with minutes.",
          variant: "destructive"
        })}
      >
        Select Plan
      </Button>
    );
  }

  const validateEmail = (email: string) => {
    try {
      emailSchema.parse(email);
      return true;
    } catch (error) {
      return false;
    }
  };

  const handlePayment = async () => {
    if (planId && !email) {
      setShowEmailInput(true);
      return;
    }

    // Validate email if provided
    if (email && !validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      // Validate payload before sending
      if (!planName || totalPrice <= 0) {
        throw new Error('Invalid plan configuration');
      }

      const payload = {
        amount: Math.round(totalPrice * 100), // Convert to cents and ensure integer
        currency: 'USD',
        description: `${planName} | dialwise.ai (${minutes} minutes)`,
        ...(email && { email }),
        ...(planId && { planId })
      };

      console.log('Sending request to:', getApiUrl());
      console.log('With payload:', payload);

      const response = await fetch(getApiUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
        // Use same-origin in production to avoid CORS
        mode: process.env.NODE_ENV === 'production' ? 'same-origin' : 'cors',
      });

      // Log the raw response for debugging
      const responseText = await response.text();
      console.log('Raw response:', responseText);

      let data;
      try {
        data = responseText ? JSON.parse(responseText) : null;
      } catch (e) {
        console.error('Failed to parse response:', e);
        throw new Error('Invalid response from server');
      }

      if (!response.ok || !data) {
        const errorMsg = data?.error || response.statusText || 'Failed to create payment link';
        console.error('Request failed:', {
          status: response.status,
          statusText: response.statusText,
          error: errorMsg
        });
        throw new Error(errorMsg);
      }

      if (data?.url) {
        // Validate payment link URL
        const validSquareUrls = [
          'https://sandbox.square.link/',
          'https://square.link/'
        ];
        
        if (!validSquareUrls.some(url => data.url.startsWith(url))) {
          throw new Error('Invalid payment link received');
        }

        toast({
          title: "Redirecting to payment...",
          description: "You'll be redirected to the secure payment page in a moment.",
        });
        
        // Add a small delay for UX
        await new Promise(resolve => setTimeout(resolve, 1500));
        window.location.href = data.url;
      } else if (data?.subscriptionId) {
        toast({
          title: "Subscription Created",
          description: "Your subscription has been created successfully. You'll receive a confirmation email shortly.",
        });
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        window.location.href = '/dashboard';
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Payment error:', error);
      
      let errorMessage = 'An error occurred during payment. Please try again.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Payment Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (showEmailInput) {
    return (
      <div className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
          disabled={loading}
        />
        <Button
          className="w-full gradient-button"
          variant="default"
          onClick={handlePayment}
          disabled={loading || !email || !validateEmail(email)}
        >
          {loading ? 'Processing...' : 'Continue'}
        </Button>
      </div>
    );
  }

  return (
    <Button
      className="w-full gradient-button"
      variant="default"
      onClick={handlePayment}
      disabled={loading}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <span className="loader mr-2"></span> Processing...
        </span>
      ) : (
        'Get Plan'
      )}
    </Button>
  );
};

export default PaymentButtonSquare;