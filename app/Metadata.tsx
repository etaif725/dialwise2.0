import { Metadata } from 'next';

export function generateStaticMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const baseMetadata: Metadata = {
    metadataBase: new URL('https://dialwise.ai'),
    title: {
      default: 'DialWise.ai - Revolutionary AI Voice Agents & Chatbots',
      template: '%s | DialWise.ai',
    },
    description:
      'Transform your customer service with DialWise.ai. Advanced AI voice agents and chatbots that handle complex conversations, provide 24/7 support, and deliver human-like interactions.',
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
      title: 'DialWise.ai - Revolutionary AI Voice Agents & Chatbots',
      description:
        'Transform your customer service with DialWise.ai. Advanced AI voice agents and chatbots that handle complex conversations, provide 24/7 support, and deliver human-like interactions.',
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
      title: 'DialWise.ai - Revolutionary AI Voice Agents & Chatbots',
      description:
        'Transform your customer service with DialWise.ai. Advanced AI voice agents and chatbots that handle complex conversations, provide 24/7 support, and deliver human-like interactions.',
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
      canonical: '/',
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

  return {
    ...baseMetadata,
    ...overrides,
    openGraph: {
      ...baseMetadata.openGraph,
      ...overrides.openGraph,
    },
    twitter: {
      ...baseMetadata.twitter,
      ...overrides.twitter,
    },
  };
};