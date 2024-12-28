import { Metadata } from "next";
import DWTerms from "./page-csr";

export const metadata: Metadata = {
  metadataBase: new URL('https://dialwise.ai/terms'),
  title: {
    default: 'Our AI Agents Solutions for Businesses | DialWise.ai',
    template: '%s | DialWise.ai',
  },
  description:
    'DialWise.ai offers a range of AI voice agents and chatbot automation solutions for businesses to improve customer service and increase revenue.',
  keywords: [
    'AI voice agents',
    'conversational AI',
    'customer service automation',
    'AI chatbots',
    'virtual assistants',
    '24/7 customer support',
    'voice AI',
    'customer experience',
    'business automation',
    'affiliates',
    'affiliates program',
    'dialwise affiliates',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Our AI Agents Solutions for Businesses | DialWise.ai',
    description:
      'DialWise.ai offers a range of AI voice agents and chatbot automation solutions for businesses to improve customer service and increase revenue.',
    siteName: 'DialWise.ai',
    images: [
      {
        url: '/demo_dialwise.webp',
        width: 1200,
        height: 630,
        alt: 'DialWise.ai - Revolutionary AI Voice Agents & Chatbots',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dialwise',
    creator: '@dialwise',
    title: 'Our AI Agents Solutions for Businesses | DialWise.ai',
    description:
      'DialWise.ai offers a range of AI voice agents and chatbot automation solutions for businesses to improve customer service and increase revenue.',
    images: ['/demo_dialwise.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    languages: {
      'en-US': '/',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/shortcut-icon.png',
  },
};

export default function Home() {
  return (
    <DWTerms />
  );
}