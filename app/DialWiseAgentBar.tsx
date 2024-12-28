"use client"

import { useState, useEffect, useRef } from 'react';
import { Phone, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const DialWiseAgentBar = () => {
    const [visible, setVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState(360);
    const [isCalling, setIsCalling] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [callDuration, setCallDuration] = useState(0);
    const [vapiInstance, setVapiInstance] = useState<any>(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const callTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Initialize audio on component mount
    useEffect(() => {
        audioRef.current = new Audio('https://dialwise.ai/audio/vibration.mp3');
        audioRef.current.loop = true; // Make the audio loop until stopped

        // Clean up audio on unmount
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = '';
            }
        };
    }, []);

    // Load Vapi SDK dynamically
    useEffect(() => {
        const loadVapiScript = () => {
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
            script.defer = true;
            script.async = true;
            document.head.appendChild(script);

            script.onload = () => {
                const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || "";
                const apiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY || "";
                const buttonConfig = {};

                const instance = window.vapiSDK.run({
                    apiKey: apiKey,
                    assistant: assistantId,
                    config: buttonConfig,
                });

                setVapiInstance(instance);

                instance.on("call-start", () => {
                    console.log("Call has started");
                    setIsConnected(true);
                    stopVibrationSound();
                });
                instance.on("call-end", () => {
                    console.log("Call has stopped");
                    setIsConnected(false);
                    setCallDuration(0);
                });
                // ... other event listeners remain the same
            };
        };

        loadVapiScript();
    }, []);

    // Function to play vibration sound
    const playVibrationSound = async () => {
        if (!audioRef.current || isAudioPlaying) return;

        try {
            // Request audio permission and play
            await audioRef.current.play();
            setIsAudioPlaying(true);
            console.log("Vibration sound started");
        } catch (error) {
            console.error("Error playing audio:", error);
            setIsAudioPlaying(false);
        }
    };

    // Function to stop vibration sound
    const stopVibrationSound = () => {
        if (!audioRef.current) return;

        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsAudioPlaying(false);
        console.log("Vibration sound stopped");
    };

    // Show floating bar and play sound after 7 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
            playVibrationSound();
        }, 7000);

        return () => {
            clearTimeout(timer);
            stopVibrationSound();
        };
    }, []);

    // Countdown logic
    useEffect(() => {
        if (!visible || timeLeft <= 0) return;
        
        const countdown = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(countdown);
    }, [visible, timeLeft]);

    // Call duration timer
    useEffect(() => {
        if (isConnected) {
            callTimerRef.current = setInterval(() => {
                setCallDuration((prev) => prev + 1);
            }, 1000);
        } else {
            if (callTimerRef.current) {
                clearInterval(callTimerRef.current);
                callTimerRef.current = null;
            }
        }

        return () => {
            if (callTimerRef.current) {
                clearInterval(callTimerRef.current);
                callTimerRef.current = null;
            }
        };
    }, [isConnected]);

    // Hide floating bar when timer ends
    useEffect(() => {
        if (timeLeft === 0) {
            setVisible(false);
            stopVibrationSound();
        }
    }, [timeLeft]);

    // Start Web Call
    const handleStartCall = async () => {
        const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || "";
        if (!vapiInstance) {
            console.error("VAPI client is not initialized.");
            return;
        }

        setIsCalling(true);
        stopVibrationSound();

        try {
            await vapiInstance.start(assistantId);
            console.log("Call started successfully!");
            setIsConnected(true);
        } catch (e) {
            console.error("Failed to start call:", e);
        } finally {
            setIsCalling(false);
        }
    };

    // End Web Call
    const handleEndCall = () => {
        if (vapiInstance) {
            vapiInstance.stop();
            console.log("Call ended.");
        }
        setIsCalling(false);
        setIsConnected(false);
        setVisible(false);
        stopVibrationSound();
    };

    if (!visible) return null;

    // Rest of the component render code remains the same...
    return (
        <div
            className={cn(
                "fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-between",
                "bg-white border border-gray-200 dark:bg-black dark:border-white/20 text-black dark:text-white rounded-3xl px-6 py-3",
                "w-[90%] max-w-2xl shadow-lg animate-fadeIn z-40"
            )}
        >
            {/* Avatar and Name Section */}
            <div className="flex items-center gap-3 mr-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
                    <img
                        src="/agents/voice_img01.webp"
                        alt="Caller Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="hidden md:flex md:flex-col">
                    <span className="text-lg font-medium">Theo</span>
                    <span className="text-sm text-gray-500">DialWise.ai</span>
                </div>
            </div>

            {/* Timer and Call/End Buttons */}
            <div className="flex items-center gap-3">
                {isConnected && (
                    <div className="text-sm text-gray-600 ml-3">
                        {formatTime(callDuration)}
                    </div>
                )}
                <button
                    onClick={handleStartCall}
                    disabled={isCalling || isConnected}
                    className={cn(
                        "flex items-center gap-2 bg-green-500 hover:bg-green-600",
                        "text-white font-medium rounded-full px-4 py-2",
                        { 'opacity-50': isCalling },
                        { 'animate-shake': !isConnected }
                    )}
                >
                    <Phone size={20} />
                    {isConnected ? '' : isCalling ? '...' : 'Answer'}
                </button>
                <button
                    onClick={handleEndCall}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-2"
                >
                    <XCircle size={20} />
                    {isConnected ? '' : 'Decline'}
                </button>
            </div>

            {/* Countdown Timer */}
            <div className="hidden md:text-lg md:font-semibold md:ml-4">
                {formatTime(timeLeft)}
            </div>
        </div>
    );
};

// Format countdown timer to mm:ss
const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

export default DialWiseAgentBar;