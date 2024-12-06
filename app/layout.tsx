import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Analytics from './analytics';
import { Metadata } from 'next';

// Default metadata that can be overridden by pages
export const metadata: Metadata = {
  title: {
    template: '%s | DialWise.ai',
    default: 'DialWise.ai - AI Voice Agents & Chatbots that work 24/7'
  },
  description: 'Transform your customer service with DialWise.ai. Our advanced AI voice agents and chatbots provide 24/7 support, handle complex conversations, and deliver human-like interactions that drive business growth.',
  keywords: ['AI voice agents', 'conversational AI', 'customer service automation', 'AI chatbots', 'virtual assistants', '24/7 customer support', 'natural language processing', 'voice AI', 'customer experience', 'business automation'],
  authors: [{ name: 'DialWise.ai Team' }],
  creator: 'DialWise.ai',
  publisher: 'DialWise.ai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/img/favicon.webp',
    shortcut: '/assets/img/favicon.webp',
    apple: '/assets/img/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/assets/img/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dialwise.ai',
    title: 'DialWise.ai - Revolutionary AI Voice Agents & Chatbots',
    description: 'Transform your customer service with DialWise.ai. Our advanced AI voice agents and chatbots provide 24/7 support, handle complex conversations, and deliver human-like interactions that drive business growth.',
    siteName: 'DialWise.ai',
    images: [{
      url: 'https://dialwise.ai/assets/img/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'DialWise.ai - AI Voice Agents & Chatbots',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DialWise.ai - Revolutionary AI Voice Agents & Chatbots',
    description: 'Transform your customer service with DialWise.ai. Our advanced AI voice agents and chatbots provide 24/7 support, handle complex conversations, and deliver human-like interactions.',
    images: ['https://dialwise.ai/assets/img/twitter-image.jpg'],
    creator: '@dialwise',
    site: '@dialwise',
  },
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
    canonical: 'https://dialwise.ai',
    languages: {
      'en-US': 'https://dialwise.ai',
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}