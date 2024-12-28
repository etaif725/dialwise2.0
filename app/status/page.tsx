import { Metadata } from "next";
import DWStatus from "./page-csr";

export const metadata: Metadata = {
  metadataBase: new URL('https://dialwise.ai'),
  title: {
    default: 'Servers Status | DialWise.ai',
    template: '%s | DialWise.ai',
  },
  description:
    'This page shows the status of the servers that power DialWise.ai, a revolutionary AI Voice Agents and Chatbots System that will change the way you interact with your customers.',
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
    title: 'Servers Status | DialWise.ai',
    description:
      'This page shows the status of the servers that power DialWise.ai, a revolutionary AI Voice Agents and Chatbots System that will change the way you interact with your customers.',
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
    title: 'Servers Status | DialWise.ai',
    description:
      'This page shows the status of the servers that power DialWise.ai, a revolutionary AI Voice Agents and Chatbots System that will change the way you interact with your customers.',
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
    <DWStatus />
  );
}