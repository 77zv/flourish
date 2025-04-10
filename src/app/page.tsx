"use client";
import React, { useState, useEffect } from "react";
import { HeroSection } from "./_components/HeroSection";
import { FeatureCard } from "./_components/FeatureCard";
import { SectionContainer } from "./_components/SectionContainer";
import { IconSvg } from "./_components/IconSvg";
import { PROFESSIONS, gradeLevels, exams } from "./_components/constants";

// TODO: Use react compiler if you wanna optimize later

function MainComponent() {
  const vowels = ["A", "E", "I", "O", "U"];
  const [currentProfession, setCurrentProfession] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = PROFESSIONS[currentProfession];
    if (!word) return;
    
    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayText !== word) {
          setDisplayText(word.slice(0, displayText.length + 1));
        } else if (!isDeleting && displayText === word) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && displayText) {
          setDisplayText(word.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentProfession((prev) => (prev + 1) % PROFESSIONS.length);
        }
      },
      isDeleting ? 80 : 120
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentProfession]);

  // Helper function to check if the first character is a vowel
  const startsWithVowel = (text: string): boolean => {
    if (!text || text.length === 0) return false;
    const firstChar = text.charAt(0).toUpperCase();
    return vowels.includes(firstChar);
  };

  return (
    <div className="w-full">
      <HeroSection 
        displayText={displayText}
        startsWithVowel={startsWithVowel}
      />
      
      <SectionContainer
        title="Tailored to Every Grade Level"
        description="Whether you're just starting out in elementary school or prepping for university, we have a roadmap that guides you every step of the way."
      >
        {gradeLevels.map((grade, idx) => (
          <FeatureCard
            key={idx}
            icon={<IconSvg type={grade.iconType} />}
            label={grade.label}
            title={grade.title}
            description={grade.description}
          />
        ))}
      </SectionContainer>

      <SectionContainer
        title="Exam Preparation"
        description="From advanced placements to professional entry exams, our targeted programs help you excel where it matters most."
      >
        {exams.map((exam, idx) => (
          <FeatureCard
            key={idx}
            icon={<IconSvg type={exam.iconType} />}
            label={exam.label}
            title={exam.title}
            description={exam.description}
          />
        ))}
      </SectionContainer>
    </div>
  );
}

export default MainComponent;
