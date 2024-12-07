import { Metadata } from "next";
import DWAbout from "./page-csr";

export const metadata: Metadata = {
  metadataBase: new URL('https://dialwise.ai'),
  title: {
    default: 'About DialWise | DialWise.ai',
    template: '%s | DialWise.ai',
  },
  description:
    'Learn more about DialWise.ai, a revolutionary AI Voice Agents and Chatbots System that helps you increase revenue, cut costs, and save time by maximizing ROI.',
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
    title: 'About DialWise | DialWise.ai',
    description:
      'Learn more about DialWise.ai, a revolutionary AI Voice Agents and Chatbots System that helps you increase revenue, cut costs, and save time by maximizing ROI.',
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
    title: 'About DialWise | DialWise.ai',
    description:
      'Learn more about DialWise.ai, a revolutionary AI Voice Agents and Chatbots System that helps you increase revenue, cut costs, and save time by maximizing ROI.',
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
    <DWAbout />
  );
}