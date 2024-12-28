"use client"

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import MyCalInline from '@/components/MyCalInline';

function DWThankYouPage() {
  const router = useRouter();

  // Optional: Redirect the user after a few seconds (e.g., redirect to homepage after 3 seconds)
  {/* useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000);
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [router]); */}

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-32 md:pt-40 bg_pattern_top">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Thank You!</span><br></br>Let's Schedule Our <span className="gradient-text">Consultation Call</span>
            </h1>
            <p className="text-lg text-[#888888] mb-8">
                Your submission has been received successfully.<br></br>
                Please choose the most convenient date and time for our consultation call.
            </p>
            <div className="max-h-vh w-full overflow-auto p-6">
              <MyCalInline />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button 
                    onClick={() => router.push('/')}
                    type="button"
                    className="text-white hover:text-white gradient-button p-6 text-lg rounded rounded-lg  w-full max-w-sm"
                >
                    Email me the proposal instead
                </Button>
            </div>
          </motion.div>
        </div>
    </section>
  );
}

export default DWThankYouPage;
