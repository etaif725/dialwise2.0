"use client";

import React, { useEffect } from 'react';
import { NextSeo } from 'next-seo';

// Default metadata that can be overridden by pages
const defaultMetadata = {
  title: 'DialWise.ai - Revolutionary AI Voice Agents & Chatbots',
  description: 'Transform your customer service with DialWise.ai. Our advanced AI voice agents and chatbots provide 24/7 support, handle complex conversations, and deliver human-like interactions that drive business growth.',
  keywords: [
    'AI voice agents',
    'conversational AI',
    'customer service automation',
    'AI chatbots',
    'virtual assistants',
    '24/7 customer support',
    'natural language processing',
    'voice AI',
    'customer experience',
    'business automation'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dialwise.ai',
    title: 'DialWise.ai - Revolutionary AI Voice Agents & Chatbots',
    description: 'Transform your customer service with DialWise.ai. Our advanced AI voice agents and chatbots provide 24/7 support, handle complex conversations, and deliver human-like interactions that drive business growth.',
    siteName: 'DialWise.ai',
    images: [
      {
        url: 'https://dialwise.ai/demo_dialwise.webp',
        width: 1200,
        height: 630,
        alt: 'DialWise.ai - AI Voice Agents & Chatbots',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    image: 'https://dialwise.ai/demo_dialwise.webp',
    creator: '@dialwise',
    site: '@dialwise',
  },
  canonical: '',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
  alternates: {
    canonical: '',
    languages: {
      'en-US': 'https://dialwise.ai',
    },
  },
  category: 'technology',
};

interface MetadataProps {
  title?: string;
  description?: string;
  ogImage?: string;
  twitterImage?: string;
  canonical?: string;
  keywords?: string[];
}

const Metadata: React.FC<MetadataProps> = ({
  title,
  description,
  ogImage,
  twitterImage,
  canonical,
  keywords,
}) => {

  useEffect(() => {
    // Update document title and other meta elements dynamically
    document.title = title || defaultMetadata.title;
    
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute('content', description);
    }

    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) canonicalLink.setAttribute('href', canonical);
    }

    if (keywords && keywords.length) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.setAttribute('content', keywords.join(', '));
    }
  }, [title, description, canonical, keywords]);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://dialwise.ai",
    "name": "DialWise.ai",
    "description": description || defaultMetadata.description,
    "publisher": {
      "@type": "Organization",
      "name": "DialWise.ai",
    },
    "author": {
      "@type": "Organization",
      "name": "DialWise.ai Team",
    },
    "image": ogImage || defaultMetadata.openGraph.images[0].url,
  };

  return (
    <>
      <NextSeo
        title={title || defaultMetadata.title}  // Title is handled by NextSeo
        description={description || defaultMetadata.description}
        openGraph={{
          ...defaultMetadata.openGraph,
          title: title || defaultMetadata.openGraph.title,
          description: description || defaultMetadata.openGraph.description,
          url: canonical || defaultMetadata.openGraph.url,
          images: [
            {
              url: ogImage || defaultMetadata.openGraph.images[0].url,
              width: 1200,
              height: 630,
              alt: 'DialWise.ai - AI Voice Agents & Chatbots',
            },
          ],
        }}
        canonical={canonical || defaultMetadata.canonical}
        additionalMetaTags={[
          {
            property: 'keywords',
            content: keywords?.join(', ') || defaultMetadata.keywords.join(', '),
          },
          {
            property: 'robots',
            content: 'index, follow',
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
      />
    </>
  );
};

export default Metadata;
