import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://dialwise.ai'),
  title: {
    default: 'Revolutionary AI Voice Agents & Chatbots | DialWise.ai',
    template: '%s | DialWise.ai',
  },
  description:
    'Transform your business with DialWise.ai. Advanced AI voice agents and chatbots that handle complex conversations, and deliver human-like interactions.',
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
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Revolutionary AI Voice Agents & Chatbots | DialWise.ai',
    description:
      'Transform your business with DialWise.ai. Advanced AI voice agents and chatbots that handle complex conversations, and deliver human-like interactions.',
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
    title: 'Revolutionary AI Voice Agents & Chatbots | DialWise.ai',
    description:
      'Transform your business with DialWise.ai. Advanced AI voice agents and chatbots that handle complex conversations, and deliver human-like interactions.',
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