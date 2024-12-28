"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface SearchResult {
  title: string;
  excerpt: string;
  href: string;
  category: string;
}

export default function DocsSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  // Mock search results - replace with actual search implementation
  useEffect(() => {
    if (query.length > 2) {
      // Simulate API call
      const searchResults: SearchResult[] = [
        {
          title: "Getting Started with Voice Agents",
          excerpt: "Learn how to create and configure your first AI voice agent...",
          href: "/docs/voice-agents",
          category: "Voice Agents"
        },
        {
          title: "Authentication",
          excerpt: "Secure your API requests with proper authentication...",
          href: "/docs/authentication",
          category: "API Reference"
        },
        // Add more mock results
      ].filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.excerpt.toLowerCase().includes(query.toLowerCase())
      );
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <>
      <Button
        variant="outline"
        className="w-full justify-start text-muted-foreground"
        onClick={() => setIsOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        Search documentation...
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[550px] p-0">
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="sr-only">Search Documentation</DialogTitle>
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documentation..."
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
            </div>
          </DialogHeader>
          <div className="max-h-[400px] overflow-y-auto p-4">
            <AnimatePresence>
              {results.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-2"
                >
                  {results.map((result, index) => (
                    <motion.a
                      key={result.href}
                      href={result.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={cn(
                        "block p-4 rounded-lg hover:bg-accent",
                        "transition-colors cursor-pointer"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="h-4 w-4 text-primary" />
                        <span className="font-medium">{result.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {result.excerpt}
                      </p>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {result.category}
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              ) : query.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-6 text-muted-foreground"
                >
                  No results found for &quot;{query}&quot;
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}