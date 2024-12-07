"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  ExternalLink, 
  BarChart, 
  Play,
  Pause,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

interface CaseStudyCardProps {
  study: {
    id: string;
    title: string;
    company: string;
    logo: string;
    industry: string;
    heroImage: string;
    excerpt: string;
    results: Array<{ label: string; value: string }>;
    pdfUrl?: string;
    videoUrl?: string;
    audioUrl?: string;
  };
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement] = useState(new Audio(study.audioUrl));
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  audioElement.onended = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  audioElement.ontimeupdate = () => {
    setProgress((audioElement.currentTime / audioElement.duration) * 100);
  };

  return (
    <Card className="overflow-hidden group hover:border-primary transition-all duration-300">
      {/* Hero Image Section */}
      <div className="relative h-48">
        <Image
          src={study.heroImage}
          alt={study.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Company Logo */}
        <div className="absolute top-4 left-4 bg-white rounded-lg p-2">
          <Image
            src={study.logo}
            alt={study.company}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Audio Player */}
        {study.audioUrl && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="secondary"
                className="rounded-full"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
              <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="text-sm text-primary mb-2">{study.industry}</div>
        <h3 className="text-xl font-bold mb-2">{study.title}</h3>
        <p className="text-muted-foreground mb-6">{study.excerpt}</p>

        {/* Results Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {study.results.slice(0, 4).map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary">{result.value}</div>
              <div className="text-xs text-muted-foreground">{result.label}</div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {study.pdfUrl && (
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                PDF
              </Button>
            )}
            {study.videoUrl && (
              <Button size="sm" variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Video
              </Button>
            )}
          </div>
          <Link href={`/case-studies/${study.id}`}>
            <Button size="sm">
              View Details
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}