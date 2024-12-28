import { Metadata } from "next";
import DWAffiliatePage from "./page-csr";

export const metadata: Metadata = {
  metadataBase: new URL('https://dialwise.ai'),
  title: {
    default: 'Check Out Our Affiliate Program | DialWise.ai',
    template: '%s | DialWise.ai',
  },
  description:
    'Generate affilaited leads for DialWise.ai and start generating comissions today!',
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
    title: 'Check Out Our Affiliate Program | DialWise.ai',
    description:
      'Generate affilaited leads for DialWise.ai and start generating comissions today!',
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
    title: 'Check Out Our Affiliate Program | DialWise.ai',
    description:
      'Generate affilaited leads for DialWise.ai and start generating comissions today!',
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
    <DWAffiliatePage />
  );
}