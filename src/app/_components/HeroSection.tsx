"use client";
import React from 'react';
import Link from 'next/link';
import { IconSvg } from './IconSvg';

interface HeroSectionProps {
  displayText: string;
  startsWithVowel: (text: string) => boolean;
}

export function HeroSection({ displayText, startsWithVowel }: HeroSectionProps) {
  return (
    <section className="bg-[#004838] min-h-[60vh] relative overflow-hidden flex items-center justify-center text-center pt-24 pb-16 px-4 sm:px-6">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full w-full">
          {[...Array.from({ length: 144 })].map((_, i) => (
            <div key={i} className="border border-white"></div>
          ))}
        </div>
      </div>
      <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Become{" "}
          <span className="text-white">
            {startsWithVowel(displayText) ? "an" : "a"}{" "}
            <span className="profession-text">{displayText}</span>
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          We&apos;re scholars from leading institutions—empowering students
          everywhere to aim higher.
        </p>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-10">
          <FeatureIcon iconType="building" text="Top Institutions" />
          <FeatureIcon iconType="gradCap" text="Expert Scholars" />
          <FeatureIcon iconType="globe" text="Nationwide" />
        </div>
        <Link 
          href="/register" 
          className="bg-white text-[#004838] px-6 py-3 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 inline-block"
        >
          Start Your Journey Today
        </Link>
      </div>
      <style jsx global>{`
        .profession-text::after {
          content: "|";
          margin-left: 2px;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

interface FeatureIconProps {
  iconType: 'building' | 'gradCap' | 'globe';
  text: string;
}

function FeatureIcon({ iconType, text }: FeatureIconProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg p-2 mb-2">
        <IconSvg type={iconType} className="w-6 h-6 text-[#004838]" />
      </div>
      <span className="text-white font-bold text-base sm:text-lg">
        {text}
      </span>
    </div>
  );
} 