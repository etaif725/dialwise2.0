"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Bot,
  Code,
  Cpu,
  FileJson,
  Globe,
  Headphones,
  Lock,
  Settings,
  Webhook,
} from 'lucide-react';

const sections = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs', icon: Bot },
      { title: 'Quick Start', href: '/docs/quick-start', icon: Cpu },
      { title: 'Installation', href: '/docs/installation', icon: Settings },
    ],
  },
  {
    title: 'Core Concepts',
    items: [
      { title: 'Voice Agents', href: '/docs/voice-agents', icon: Headphones },
      { title: 'Chatbots', href: '/docs/chatbots', icon: Bot },
      { title: 'Multilingual', href: '/docs/multilingual', icon: Globe },
    ],
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Authentication', href: '/docs/authentication', icon: Lock },
      { title: 'REST API', href: '/docs/api-reference', icon: Code },
      { title: 'Webhooks', href: '/docs/webhooks', icon: Webhook },
      { title: 'Response Types', href: '/docs/response-types', icon: FileJson },
    ],
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-6">
      {sections.map((section, index) => (
        <div key={index} className="space-y-2">
          <h4 className="font-semibold text-sm text-muted-foreground tracking-wide uppercase">
            {section.title}
          </h4>
          <ul className="space-y-1">
            {section.items.map((item, itemIndex) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <li key={itemIndex}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors relative",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}