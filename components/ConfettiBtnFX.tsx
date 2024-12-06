"use client";

import confetti from "canvas-confetti";
import { buttonVariants } from "./ui/button";
import { useState } from "react";
 
const ConfettiBtnFX = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    confetti();
  };
 
  return (
    <button
      type="submit"
      className="w-full text-black hover:font-semibold hover:text-white dark:text-white gradient-button gradient-border glass-effect py-2 rounded-md hover:gradient-border hover:glass-effect transition duration-200"
      disabled={isLoading}
      onClick={() => {
        handleClick();
      }}
    >
      {isLoading ? "Submitting..." : "Talk to our AI Agent"}
    </button>
  );
};
 
export default ConfettiBtnFX;