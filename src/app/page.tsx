"use client";
import React, { useState, useEffect } from "react";

// TODO: Use react compiler if you wanna optimize later

const PROFESSIONS = [
  "Doctor",
  "Engineer",
  "Lawyer",
  "Banker",
  "Entrepreneur",
];

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
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-lg p-2 mb-2">
                <i className="fas fa-building text-[#004838] text-2xl"></i>
              </div>
              <span className="text-white font-bold text-base sm:text-lg">
                Top Institutions
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-lg p-2 mb-2">
                <i className="fas fa-graduation-cap text-[#004838] text-2xl"></i>
              </div>
              <span className="text-white font-bold text-base sm:text-lg">
                Expert Scholars
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-lg p-2 mb-2">
                <i className="fas fa-globe text-[#004838] text-2xl"></i>
              </div>
              <span className="text-white font-bold text-base sm:text-lg">
                Nationwide
              </span>
            </div>
          </div>
          <button className="bg-white text-[#004838] px-6 py-3 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
            Start Your Journey Today
          </button>
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
      <EnhancedGradeLevelsSection />
      <EnhancedExamPrepSection />
    </div>
  );
}

function EnhancedGradeLevelsSection() {
  const childSvg = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12 mx-auto"
    >
      <circle cx="12" cy="4" r="2" />
      <path d="M19 13v-2a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v2" />
      <line x1="12" y1="12" x2="12" y2="22" />
      <line x1="9" y1="22" x2="15" y2="22" />
    </svg>
  );
  const readerSvg = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12 mx-auto"
    >
      <path d="M21 4H3v16h18V4z" />
      <path d="M7 4v16M17 4v16" />
      <path d="M11 4v16" />
    </svg>
  );
  const gradCapSvg = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12 mx-auto"
    >
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M2 10v6c0 1.1.9 2 2 2h4" />
      <path d="M20 10v6c0 1.1-.9 2-2 2h-4" />
    </svg>
  );
  const universitySvg = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12 mx-auto"
    >
      <path d="M3 10l9-6 9 6v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <line x1="9" y1="22" x2="9" y2="12" />
      <line x1="15" y1="22" x2="15" y2="12" />
    </svg>
  );
  const gradeLevels = [
    {
      svg: childSvg,
      label: "Elementary (K–5)",
      title: "Building Strong Foundations",
      desc: "Engaging online classes that nurture fundamental skills in reading, math, and creative exploration.",
    },
    {
      svg: readerSvg,
      label: "Middle (6–8)",
      title: "Developing Critical Thinkers",
      desc: "Project-based learning and interactive lessons to encourage analytical skills and intellectual curiosity.",
    },
    {
      svg: gradCapSvg,
      label: "Secondary (9–12)",
      title: "Unlocking Academic Excellence",
      desc: "Advanced curricula, competitive exam prep, and mentorship to help students excel.",
    },
    {
      svg: universitySvg,
      label: "Post-Secondary",
      title: "Elevating Career Paths",
      desc: "Specialized tutoring, graduate exam prep, and real-world guidance for college and beyond.",
    },
  ];

  return (
    <section className="py-20 bg-[#f9fafb] text-[#004838]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-8">
          Tailored to Every Grade Level
        </h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12">
          Whether you&apos;re just starting out in elementary school or prepping for
          university, we have a roadmap that guides you every step of the way.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {gradeLevels.map((grade, idx) => (
            <div
              key={idx}
              className="relative bg-white p-6 rounded-xl border border-gray-200 shadow-lg"
            >
              <div className="mb-4 flex justify-center">{grade.svg}</div>
              <h3 className="text-xl font-bold mb-1">{grade.label}</h3>
              <h4 className="text-[#004838] font-semibold mb-3">
                {grade.title}
              </h4>
              <p className="text-base text-[#46536D]">{grade.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnhancedExamPrepSection() {
  const awardSvg = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12 mx-auto"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8 14 8 22 12 20 16 22 16 14" />
    </svg>
  );

  const trophySvg = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12 mx-auto"
    >
      <path d="M2 4h4v3a4 4 0 0 0 8 0V4h4v3a4 4 0 0 0 8 0V4h2" />
      <path d="M17 4V2H7v2" />
      <path d="M7 18a5 5 0 0 0 10 0" />
      <line x1="12" y1="22" x2="12" y2="18" />
    </svg>
  );

  const brainSvg = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12 mx-auto"
    >
      <path d="M15.5 8A3.5 3.5 0 0 1 19 11.5V12v.5a3.5 3.5 0 0 1-3.5 3.5" />
      <path d="M8.5 8A3.5 3.5 0 0 0 5 11.5V12v.5a3.5 3.5 0 0 0 3.5 3.5" />
      <path d="M17 4.5A2.5 2.5 0 0 0 14.5 2H14a2 2 0 0 0-2 2v.5M7 4.5A2.5 2.5 0 0 1 9.5 2H10a2 2 0 0 1 2 2v.5" />
      <path d="M9 12h6" />
    </svg>
  );

  const gradSvg = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12 mx-auto"
    >
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M2 10v6c0 1.1.9 2 2 2h4" />
      <path d="M20 10v6c0 1.1-.9 2-2 2h-4" />
    </svg>
  );

  const exams = [
    {
      svg: awardSvg,
      label: "IB & AP",
      title: "Achieve Outstanding Scores",
      desc: "Comprehensive online courses to master advanced placement material, led by experienced IB & AP mentors.",
    },
    {
      svg: trophySvg,
      label: "SAT & Competitions",
      title: "Compete Nationally & Globally",
      desc: "Intensive strategy sessions to boost SAT scores, plus preparation for Olympiads and other contests.",
    },
    {
      svg: brainSvg,
      label: "MCAT & LSAT",
      title: "Master Professional Exams",
      desc: "Tailored study plans for aspiring med and law students, featuring real-case analyses and advanced content.",
    },
    {
      svg: gradSvg,
      label: "GRE & GMAT",
      title: "Excel in Graduate Admissions",
      desc: "Data-driven approach to tackle quantitative, verbal, and analytical writing sections with confidence.",
    },
  ];

  return (
    <section className="py-20 bg-[#f9fafb] text-[#004838]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-8">Exam Preparation</h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12">
          From advanced placements to professional entry exams, our targeted
          programs help you excel where it matters most.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {exams.map((exam, idx) => (
            <div
              key={idx}
              className="relative bg-white p-6 rounded-xl border border-gray-200 shadow-lg"
            >
              <div className="mb-4 flex justify-center">{exam.svg}</div>
              <h3 className="text-xl font-bold mb-1">{exam.label}</h3>
              <h4 className="text-[#004838] font-semibold mb-3">
                {exam.title}
              </h4>
              <p className="text-base text-[#46536D]">{exam.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainComponent;
