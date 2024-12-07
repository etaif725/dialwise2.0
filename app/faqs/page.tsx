import { Metadata } from "next";
import DWFaq from "./page-csr";

export const metadata: Metadata = {
  metadataBase: new URL('https://dialwise.ai'),
  title: {
    default: 'FAQs | DialWise.ai',
    template: '%s | DialWise.ai',
  },
  description:
    'Got questions about DialWise.ai? Find answers to frequently asked questions here, before you get started.',
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
    title: 'FAQs | DialWise.ai',
    description:
      'Got questions about DialWise.ai? Find answers to frequently asked questions here, before you get started.',
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
    title: 'FAQs | DialWise.ai',
    description:
      'Got questions about DialWise.ai? Find answers to frequently asked questions here, before you get started.',
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
    <DWFaq />
  );
}