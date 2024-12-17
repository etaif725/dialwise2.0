'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

function DWThankYouPage() {
  const router = useRouter();

  // Optional: Redirect the user after a few seconds (e.g., redirect to homepage after 3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/'); // Redirect to home page or any other page you want
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [router]);

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
              <span className="gradient-text">Thank You!</span>
            </h1>
            <p className="text-xl text-[#888888] mb-8">
                Your submission has been received successfully.<br></br>
                We will get back to you shortly.

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                    onClick={() => router.push('/')} // Navigate to homepage or other page
                    type="button"
                    className="text-white hover:text-white gradient-button px-8 py-4 text-lg rounded rounded-lg"
                >
                    Go to Homepage
                </button>
            </div>
          </motion.div>
        </div>
    </section>
  );
}

export default DWThankYouPage;
