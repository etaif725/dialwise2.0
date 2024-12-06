"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play } from "lucide-react";
import Link from "next/link";

interface FeaturedCaseProps {
  study: {
    id: string;
    title: string;
    company: string;
    logo: string;
    industry: string;
    heroImage: string;
    excerpt: string;
    results: { label: string; value: string }[];
    pdfUrl?: string;
    videoUrl?: string;
  };
}

export function FeaturedCase({ study }: FeaturedCaseProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative h-[400px] md:h-full">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            className="object-cover"
          />
          {study.videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="rounded-full w-16 h-16">
                <Play className="h-8 w-8" />
              </Button>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12">
              <Image
                src={study.logo}
                alt={study.company}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-sm text-primary">{study.industry}</div>
              <h2 className="text-2xl font-bold">{study.title}</h2>
            </div>
          </div>

          <p className="text-muted-foreground mb-8">{study.excerpt}</p>

          {/* Results Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {study.results.map((result, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-primary mb-1">
                  {result.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {result.label}
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Link href={`/case-studies/${study.id}`}>
              <Button size="lg">
                Read Case Study
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {study.pdfUrl && (
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}