import { Metadata } from "next";
import DWAssessmentTool from "./page-csr";

export const metadata: Metadata = {
  metadataBase: new URL('https://dialwise.ai'),
  title: {
    default: 'Get Your AI Assessment Report | DialWise.ai',
    template: '%s | DialWise.ai',
  },
  description:
    'Ready to revolutionize your business? Contact us today and discover how DialWise.ai can help you increase revenue, cut costs, and save time by maximizing ROI.',
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
    title: 'Contact DialWise | DialWise.ai',
    description:
      'Ready to revolutionize your business? Contact us today and discover how DialWise.ai can help you increase revenue, cut costs, and save time by maximizing ROI.',
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
    title: 'Contact DialWise | DialWise.ai',
    description:
      'Ready to revolutionize your business? Contact us today and discover how DialWise.ai can help you increase revenue, cut costs, and save time by maximizing ROI.',
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

export default function Page() {
  return (
      <div className="px-6">
        <DWAssessmentTool userInfo={{
        customerService: "",
        virtualReceptionist: "",
        appointmentSetter: "",
        onboarding: "",
        onboardingSalary: "",
        workflow: ""
      }} />
      </div>
  );
}