import { Metadata } from "next";
import DWPricingPage from "./page-csr";

export const metadata: Metadata = {
  metadataBase: new URL('https://dialwise.ai'),
  title: {
    default: 'Transparent Pricing with No Hidden Fees | DialWise.ai',
    template: '%s | DialWise.ai',
  },
  description:
    'Check out our pricing plans for DialWise.ai, a revolutionary AI Voice Agents and Chatbots System that will change the way you interact with your customers.',
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
    title: 'Transparent Pricing with No Hidden Fees | DialWise.ai',
    description:
      'Check out our pricing plans for DialWise.ai, a revolutionary AI Voice Agents and Chatbots System that will change the way you interact with your customers.',
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
    title: 'Transparent Pricing with No Hidden Fees | DialWise.ai',
    description:
      'Check out our pricing plans for DialWise.ai, a revolutionary AI Voice Agents and Chatbots System that will change the way you interact with your customers.',
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
    <DWPricingPage />
  );
}