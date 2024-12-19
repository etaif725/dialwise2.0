"use client"

import React, { useEffect } from 'react';

const DialWiseChatbot: React.FC = () => {
  useEffect(() => {
    // Set up DialWise chatbot configuration
    (window as any).VG_CONFIG = {
      ID: "nkonwWSw20vfLen", // YOUR AGENT ID
      region: 'na', // YOUR ACCOUNT REGION
      render: 'bottom-right', // Can be 'full-width', 'bottom-left', or 'bottom-right'
      stylesheets: [
        // Base DialWise Agents CSS
        "https://dialwise.ai/css/dialwise-chatbot.css",
        // Add your custom CSS stylesheets
      ],
      // Uncomment if needed:
      // userID: 'USER_ID', // If you want to use your own user_id
      // autostart: true, // Whether to autostart the chatbot with the proactive message
    };

    // Append the DialWise script to the document body
    const VG_SCRIPT = document.createElement("script");
    VG_SCRIPT.src = "https://dialwise.ai/js/vg_bundle.js";
    VG_SCRIPT.defer = true; // Remove 'defer' if you want the widget to load faster (may affect website loading)
    document.body.appendChild(VG_SCRIPT);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(VG_SCRIPT);
    };
  }, []);

  return null; // This component does not render anything in the DOM
};

export default DialWiseChatbot;
