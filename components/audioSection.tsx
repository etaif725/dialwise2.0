"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Play, Pause } from 'lucide-react';
import Image from 'next/image';

const languages = [
  {
    language: "English",
    code: "en-GB",
    flag: "/image/svg/flags/uk.svg",
    audio: "/audio/en_sample_speech.mp3"
  },
  {
    language: "Spanish",
    code: "es",
    flag: "/image/svg/flags/es.svg",
    audio: "/audio/es_sample_speech.mp3"
  },
  {
    language: "French",
    code: "fr",
    flag: "/image/svg/flags/fr.svg",
    audio: "/audio/fr_sample_speech.mp3"
  },
  {
    language: "German",
    code: "de",
    flag: "/image/svg/flags/de.svg",
    audio: "/audio/de_sample_speech.mp3"
  },
  {
    language: "Italian",
    code: "it",
    flag: "/image/svg/flags/it.svg",
    audio: "/audio/it_sample_speech.mp3"
  },
  {
    language: "Portuguese",
    code: "pt",
    flag: "/image/svg/flags/pt.svg",
    audio: "/audio/pt_sample_speech.mp3"
  },
  {
    language: "Dutch",
    code: "nl",
    flag: "/image/svg/flags/nl.svg",
    audio: "/audio/nl_sample_speech.mp3"
  },
  {
    language: "Polish",
    code: "pl",
    flag: "/image/svg/flags/pl.svg",
    audio: "/audio/pl_sample_speech.mp3"
  },
  {
    language: "Russian",
    code: "ru",
    flag: "/image/svg/flags/ru.svg",
    audio: "/audio/ru_sample_speech.mp3"
  },
  {
    language: "Japanese",
    code: "jp",
    flag: "/image/svg/flags/jp.svg",
    audio: "/audio/ja_sample_speech.mp3"
  },
  {
    language: "Korean",
    code: "ko",
    flag: "/image/svg/flags/ko.svg",
    audio: "/audio/ko_sample_speech.mp3"
  },
  {
    language: "Czech",
    code: "cz",
    flag: "/image/svg/flags/cz.svg",
    audio: "/audio/cz_sample_speech.mp3"
  }
];

const AudioPlayer = ({ language, code, flag, audio }: {
  language: string;
  code: string;
  flag: string;
  audio: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [audioElement] = useState(new Audio(audio));

  const togglePlay = () => {
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
    <Card className="p-4 hover:border-primary transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
          <Image
            src={flag}
            alt={`${language} flag`}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold">{language}</h3>
          <p className="text-sm text-muted-foreground">{code}</p>
        </div>

        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-primary" />
          ) : (
            <Play className="h-5 w-5 text-primary" />
          )}
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-1 bg-primary/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </Card>
  );
};

export const AudioSection = () => {
  return (
    <section className="py-24 relative bg_pattern_top">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose from{" "}
            <span className="gradient-text">29 languages</span>
            {" "}for your AI voice agents
          </h2>
          <p className="text-lg text-muted-foreground">
            DialWise works seamlessly in 29 languages, ensuring global reach 
            and accessibility for your business. Our AI voice agents can understand 
            and respond naturally in multiple languages, helping you expand your 
            market presence worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AudioPlayer {...lang} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};