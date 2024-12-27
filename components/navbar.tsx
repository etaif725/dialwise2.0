"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/benefits", label: "Benefits" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Only show logo after client-side hydration is complete
  const logoSrc = 
    !mounted ? '/dialwise-logo-w.webp' 
    : theme === 'dark' 
    ? '/dialwise-logo-w.webp' : '/dialwise-logo.webp';

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "flex items-center justify-between rounded-[25px] px-6 transition-all duration-300",
              isScrolled
                ? "bg-background/80 backdrop-blur-md border shadow-lg"
                : "bg-background/50 backdrop-blur-sm"
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 py-4">
              <div className="relative">
                <Image
                  src={logoSrc}
                  alt="DialWise.ai"
                  height={31}
                  width={166}
                  className="object-contain"
                  priority
                  placeholder = 'blur' // "empty" | "blur"
                  blurDataURL="/dialwise-logo-w.webp"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-md hover:text-primary transition-colors",
                    pathname === item.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <ThemeToggle />

              <a
                href="https://dialwise.ai/ai-assessment/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Button className="gradient-button font-semibold">
                  BUILD MY AI AGENT
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden fixed inset-x-0 bg-background/80 backdrop-blur-md border-t shadow-lg"
            >
              <div className="container px-4 py-4">
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block text-md hover:text-primary transition-colors",
                        pathname === item.href ? "text-primary" : "text-foreground"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href="https://app.dialwise.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4"
                  >
                    <Button className="gradient-button w-full font-semibold">
                      BUILD ME AN AI AGENT
                      {/* <ExternalLink className="ml-2 h-4 w-4" /> */}
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}