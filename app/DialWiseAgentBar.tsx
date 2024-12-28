"use client";

import { useState, useEffect, useRef } from 'react';
import { Phone, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const DialWiseAgentBar = () => {
    const [visible, setVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState(360);
    const [isCalling, setIsCalling] = useState(false);
    const [isConnected, setIsConnected] = useState(false); // New state to track call connection status
    const [callDuration, setCallDuration] = useState(0); // State for call duration
    const [vapiInstance, setVapiInstance] = useState<any>(null);
    const [audioAllowed, setAudioAllowed] = useState(false); // Track if audio can be played

    // Ref to store the vibration sound
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Ref to store the call timer
    const callTimerRef = useRef<NodeJS.Timeout | null>(null);

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

                instance.on("speech-start", () => console.log("Speech has started"));
                instance.on("speech-end", () => console.log("Speech has ended"));
                instance.on("call-start", () => {
                    console.log("Call has started");
                    setIsConnected(true); // Set connected state to true when call starts
                });
                instance.on("call-end", () => {
                    console.log("Call has stopped");
                    setIsConnected(false); // Set connected state to false when call ends
                    setCallDuration(0); // Reset call duration when the call ends
                });
                instance.on("volume-level", (volume: any) => console.log("Assistant volume level:", volume));
                instance.on("message", (message: any) => console.log(message));
                instance.on("error", (e: any) => console.error(e));
            };
        };

        loadVapiScript();

        return () => {
            // Cleanup script if needed
        };
    }, []);

    // Play vibration sound only once after user interaction
    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/audio/vibration.mp3');
        }
        const audio = audioRef.current;

        // Play only if the sound isn't already playing
        const playSound = () => {
            if (audio.paused) {
                audio.play().catch((e) => {
                    console.error("Error playing audio:", e);
                    setAudioAllowed(false); // Prevent further audio attempts if playback fails
                });
            }
        };

        // Show floating bar and play sound after 7 seconds, but only if audio is allowed
        const timer = setTimeout(() => {
            setVisible(true);
            if (audioAllowed) {
                playSound();
            }
        }, 7000); // 7-second delay

        return () => {
            clearTimeout(timer);
            audio.pause();
            audio.currentTime = 0; // Reset audio when cleanup happens
        };
    }, [audioAllowed]);

    // Stop vibration sound
    const stopVibrationSound = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Reset to the beginning
        }
    };

    // Countdown logic
    useEffect(() => {
        if (!visible || timeLeft <= 0) return;
        const countdown = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(countdown);  // Cleanup interval
    }, [visible, timeLeft]);

    // Call duration timer
    useEffect(() => {
        if (isConnected) {
            // If the call is connected, start counting the duration
            callTimerRef.current = setInterval(() => {
                setCallDuration((prev) => prev + 1);
            }, 1000);
        } else {
            // If call is not connected or ended, clear the timer
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
        }
    }, [timeLeft]);

    // Start Web Call
    const handleStartCall = () => {
        const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || "";
        if (!vapiInstance) {
            console.error("VAPI client is not initialized.");
            return;
        }

        setIsCalling(true);
        stopVibrationSound(); // Stop the vibration sound when starting the call

        vapiInstance.start("122424e6-3e07-4c57-9152-5a20d606d5eb")
            .then(() => {
                console.log("Call started successfully!");
                setIsConnected(true); // Set connected state to true
            })
            .catch((e: any) => {
                console.error("Failed to start call:", e);
            })
            .finally(() => {
                setIsCalling(false);
            });
    };

    // End Web Call
    const handleEndCall = () => {
        if (vapiInstance) {
            vapiInstance.stop();
            console.log("Call ended.");
        }
        setIsCalling(false);
        setIsConnected(false); // Set connected state to false
        setVisible(false);
        stopVibrationSound(); // Stop the vibration sound when ending the call
    };

    // Hide component if not visible
    if (!visible) return null;

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
                {/* Call Duration Timer */}
                {isConnected && (
                    <div className="text-sm text-gray-600 ml-3">
                        {formatTime(callDuration)}
                    </div>
                )}
                <button
                    onClick={handleStartCall}
                    disabled={isCalling || isConnected}  // Disable if connected or calling
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
