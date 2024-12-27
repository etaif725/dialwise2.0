"use client"
import DWHomePage from "./page-csr";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Revolutionary AI Voice Agents & Chatbots | DialWise.ai</title>
      <meta
        name="description"
        content="Transform your business with DialWise.ai. Advanced AI voice agents and chatbots that handle complex conversations, and deliver human-like interactions."
      />
      <meta
        name="keywords"
        content="AI voice agents, conversational AI, customer service automation, AI chatbots, virtual assistants, 24/7 customer support, voice AI, customer experience, business automation"
      />
      {/* Open Graph */}
      <meta
        property="og:title"
        content="Revolutionary AI Voice Agents & Chatbots | DialWise.ai"
      />
      <meta
        property="og:description"
        content="Transform your business with DialWise.ai. Advanced AI voice agents and chatbots that handle complex conversations, and deliver human-like interactions."
      />
      <meta property="og:url" content="https://dialwise.ai/" />
      <meta property="og:site_name" content="DialWise.ai" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:image"
        content="https://dialwise.ai/demo_dialwise.webp"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="DialWise.ai - Revolutionary AI Voice Agents & Chatbots"
      />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dialwise" />
      <meta name="twitter:creator" content="@dialwise" />
      <meta
        name="twitter:title"
        content="Revolutionary AI Voice Agents & Chatbots | DialWise.ai"
      />
      <meta
        name="twitter:description"
        content="Transform your business with DialWise.ai. Advanced AI voice agents and chatbots that handle complex conversations, and deliver human-like interactions."
      />
      <meta
        name="twitter:image"
        content="https://dialwise.ai/demo_dialwise.webp"
      />
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="max-image-preview" content="large" />
      <meta name="max-snippet" content="-1" />
      <meta name="max-video-preview" content="-1" />
      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/shortcut-icon.png" />
    </Head>
    <DWHomePage isOpen={false} onClose={function (): void {
      throw new Error("Function not implemented.");
    } } />
    </>
  );
}