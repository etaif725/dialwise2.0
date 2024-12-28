"use client";

import { useState, useEffect } from 'react';
import { Phone, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const FloatingBar = () => {
    const [visible, setVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState(360); // 6-minute timer
    const [isCalling, setIsCalling] = useState(false);

    // Initialize floating bar after 7 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
            playVibrationSound();
        }, 7000);  // 7-second delay
        return () => clearTimeout(timer);
    }, []);

    // Countdown timer logic
    useEffect(() => {
        let countdown: NodeJS.Timeout | null = null;
        if (visible && timeLeft > 0) {
            countdown = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        }
        return () => {
            if (countdown) clearInterval(countdown);
        };
    }, [visible, timeLeft]);

    // Hide bar when countdown ends
    useEffect(() => {
        if (timeLeft === 0) {
            setVisible(false);
        }
    }, [timeLeft]);

    // Handle Call Webhook
    const handleCall = async () => {
        setIsCalling(true);
        try {
            const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
            if (!webhookUrl) {
                throw new Error('Webhook URL is not defined');
            }
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            });
            const data = await response.json();
            console.log('Call initiated:', data);
        } catch (error) {
            console.error('Error initiating call:', error);
        } finally {
            setIsCalling(false);
        }
    };

    // Play Vibration Sound
    const playVibrationSound = () => {
        const audio = new Audio('/audio/vibration.mp3');
        audio.play();
    };

    // Hide when not visible
    if (!visible) return null;

    return (
        <div className={cn(
            "fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-between",
            "bg-white border border-gray-200 dark:bg-black dark:border-white/20 text-black dark:text-white rounded-3xl px-6 py-3",
            "w-[90%] max-w-2xl shadow-lg animate-fadeIn z-40"
        )}>
            
            {/* Green Audio Visualizer Bars */}
            <div className="flex items-center gap-1 mr-4">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="w-1 bg-green-500 rounded-lg"
                        style={{ height: `${Math.random() * 20 + 5}px` }}
                    ></div>
                ))}
            </div>

            {/* Call and End Buttons */}
            <div className="flex items-center gap-3">
                <button
                    onClick={handleCall}
                    disabled={isCalling}
                    className={cn(
                        "flex items-center gap-2 bg-green-500 hover:bg-green-600",
                        "text-white font-medium rounded-full px-5 py-2",
                        { 'opacity-50': isCalling }
                    )}
                >
                    <Phone size={20} />
                    {isCalling ? 'Calling...' : 'Call'}
                </button>
                <button
                    onClick={() => setVisible(false)}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-2"
                >
                    <XCircle size={20} />
                    Cancel
                </button>
            </div>

            {/* Countdown Timer */}
            <div className="hidden md:text-lg md:font-semibold md:ml-4">
                {formatTime(timeLeft)}
            </div>
        </div>
    );
};

// Format countdown to mm:ss
const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

export default FloatingBar;
