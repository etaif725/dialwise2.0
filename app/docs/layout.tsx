"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import DocsSidebar from '@/components/docs/sidebar';
import DocsSearch from '@/components/docs/search';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <aside className="hidden lg:block sticky top-20 h-[calc(100vh-5rem)]">
            <ScrollArea className="h-full pr-6">
              <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pb-4 mb-4">
                <DocsSearch />
              </div>
              <DocsSidebar />
            </ScrollArea>
          </aside>
          <main className="px-4 lg:px-8 pb-16">
            <div className="mx-auto max-w-4xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}