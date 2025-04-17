"use client";
import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import McatSectionModal from "@/components/mcat-section-modal";

function MainComponent() {
  const mcatSections = [
    {
      id: "cp",
      title: "Chemical & Physical Foundations",
      shortTitle: "C/P",
      description:
        "Focuses on the physical and chemical principles underlying biological systems.",
      questions: 59,
      time: 95,
      timePerQuestion: "1 min 36 sec",
      sequence: 1,
      topics: [
        "General Chemistry (30%)",
        "Physics (25%)",
        "Organic Chemistry (15%)",
        "Biochemistry (25%)",
        "Biology (5%)",
      ],
      questionTypes: {
        passage: "75%",
        discrete: "25%",
      },
      icon: "fa-flask",
    },
    {
      id: "cars",
      title: "Critical Analysis & Reasoning Skills",
      shortTitle: "CARS",
      description:
        "Tests your ability to analyze and evaluate complex passages.",
      questions: 53,
      time: 90,
      timePerQuestion: "1 min 41 sec",
      sequence: 2,
      topics: ["Humanities (50%)", "Social Sciences (50%)"],
      questionTypes: {
        passage: "100%",
        discrete: "0%",
      },
      icon: "fa-book-reader",
    },
    {
      id: "bb",
      title: "Biological & Biochemical Foundations",
      shortTitle: "B/B",
      description:
        "Tests your understanding of living organisms and their processes.",
      questions: 59,
      time: 95,
      timePerQuestion: "1 min 36 sec",
      sequence: 3,
      topics: [
        "Biology (65%)",
        "Biochemistry (25%)",
        "General Chemistry (5%)",
        "Organic Chemistry (5%)",
      ],
      questionTypes: {
        passage: "75%",
        discrete: "25%",
      },
      icon: "fa-dna",
    },
    {
      id: "ps",
      title: "Psychological & Social Foundations",
      shortTitle: "P/S",
      description:
        "Assesses knowledge of behavior and sociocultural influences on health.",
      questions: 59,
      time: 95,
      timePerQuestion: "1 min 36 sec",
      sequence: 4,
      topics: ["Psychology (65%)", "Sociology (30%)", "Biology (5%)"],
      questionTypes: {
        passage: "75%",
        discrete: "25%",
      },
      icon: "fa-brain",
    },
  ];
  const totalTime = mcatSections.reduce(
    (acc, section) => acc + section.time,
    0
  );
  const totalQuestions = mcatSections.reduce(
    (acc, section) => acc + section.questions,
    0
  );
  const [selectedSection, setSelectedSection] = useState(null);
  const handleConsultation = () => {
    window.location.href = "/consultation";
  };

  return (
    <div className="font-roboto bg-black text-white">
      {/* <Header onGetStarted={handleConsultation} /> */}

      <main className="pt-[60px]">
        <section className="bg-gradient-to-b from-black to-[#111] py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-[#FFD700] font-inter mb-6 score-display">
              MCAT Test Prep
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl font-inter mb-12 section-card">
              Master the MCAT with our comprehensive preparation program
            </p>
            <a
              href="/consultation"
              className="inline-block bg-[#FFD700] text-black px-8 py-3 rounded-md font-bold font-inter text-xl hover:bg-[#FFE44D] transition-colors mb-16 section-card"
            >
              Start MCAT Prep
            </a>
            <div className="bg-[#111]/50 p-6 rounded-lg mb-12 section-card">
              <h2 className="text-2xl font-bold text-[#FFD700] mb-4">
                Test Overview
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-[#111] rounded-lg">
                  <p className="text-[#FFD700] text-2xl font-bold score-display">
                    {totalQuestions}
                  </p>
                  <p className="text-gray-300">Total Questions</p>
                </div>
                <div className="p-4 bg-[#111] rounded-lg">
                  <p className="text-[#FFD700] text-2xl font-bold score-display">
                    6:15
                  </p>
                  <p className="text-gray-300">Test Time</p>
                </div>
                <div className="p-4 bg-[#111] rounded-lg">
                  <p className="text-[#FFD700] text-2xl font-bold score-display">
                    7:30
                  </p>
                  <p className="text-gray-300">Total Time</p>
                </div>
                <div className="p-4 bg-[#111] rounded-lg">
                  <p className="text-[#FFD700] text-2xl font-bold score-display">
                    4
                  </p>
                  <p className="text-gray-300">Sections</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative">
              {mcatSections.map((section, index) => (
                <div
                  key={section.id}
                  className="flex flex-col section-card cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => setSelectedSection(section.id)}
                >
                  <div className="bg-[#111] p-4 md:p-6 rounded-lg border border-[#FFD700]/20 flex-grow min-h-[300px] hover:border-[#FFD700] transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-[#FFD700]/10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-[#FFD700] font-bold text-sm md:text-base">
                          {section.sequence}
                        </span>
                      </div>
                      <i
                        className={`fas ${section.icon} text-[#FFD700] text-xl md:text-2xl`}
                      ></i>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                      {section.shortTitle}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {section.description}
                    </p>

                    <div className="mt-4">
                      <div className="border-t border-[#FFD700]/10 pt-4 space-y-2">
                        <p className="text-[#FFD700] font-bold text-sm md:text-base">
                          {section.questions} Questions • {section.time} Minutes
                        </p>
                        <p className="text-gray-300 text-sm">
                          {section.timePerQuestion} per question
                        </p>
                        <div className="relative h-2 bg-[#FFD700]/10 rounded-full overflow-hidden">
                          <div
                            className="progress-bar absolute h-full bg-[#FFD700]"
                            style={{
                              "--progress-width": `${
                                (section.questions / totalQuestions) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                        <p className="text-gray-400 text-xs">
                          {section.questionTypes.passage} passage-based
                        </p>
                        {section.questionTypes.discrete !== "0%" && (
                          <p className="text-gray-400 text-xs">
                            {section.questionTypes.discrete} discrete questions
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center mt-2">
                    <div
                      className={`${
                        index === mcatSections.length - 1
                          ? "text-[#FFD700]"
                          : "text-gray-400"
                      } text-xs px-2 py-1 bg-[#111]/50 rounded-full`}
                    >
                      {index === mcatSections.length - 1
                        ? "End of Test"
                        : index === 1
                        ? "30 min break"
                        : "10 min break"}
                    </div>
                  </div>
                </div>
              ))}

              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-[#FFD700]/20 -z-10"></div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-black">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <a
              href="/files/mcat-content-review.pdf"
              className="block bg-[#111] p-8 rounded-lg border border-[#FFD700]/20 section-card hover:border-[#FFD700] transition-colors"
            >
              <i className="fas fa-brain text-[#FFD700] text-4xl mb-4"></i>
              <h3 className="text-[#FFD700] text-2xl font-bold font-inter mb-4">
                Content Review
              </h3>
              <p className="text-gray-300 font-inter">
                Comprehensive coverage of all MCAT subjects including Biology,
                Chemistry, Physics, and CARS
              </p>
            </a>
            <a
              href="/files/mcat-practice-tests.pdf"
              className="block bg-[#111] p-8 rounded-lg border border-[#FFD700]/20 section-card hover:border-[#FFD700] transition-colors"
              style={{ animationDelay: "0.2s" }}
            >
              <i className="fas fa-clipboard-check text-[#FFD700] text-4xl mb-4"></i>
              <h3 className="text-[#FFD700] text-2xl font-bold font-inter mb-4">
                Practice Tests
              </h3>
              <p className="text-gray-300 font-inter">
                Full-length practice exams with detailed explanations and
                performance analytics
              </p>
            </a>
            <a
              href="/consultation"
              className="block bg-[#111] p-8 rounded-lg border border-[#FFD700]/20 section-card hover:border-[#FFD700] transition-colors"
              style={{ animationDelay: "0.4s" }}
            >
              <i className="fas fa-user-graduate text-[#FFD700] text-4xl mb-4"></i>
              <h3 className="text-[#FFD700] text-2xl font-bold font-inter mb-4">
                Expert Tutoring
              </h3>
              <p className="text-gray-300 font-inter">
                One-on-one sessions with experienced MCAT instructors
              </p>
            </a>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#111]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[#FFD700] font-inter mb-12 text-center score-display">
              Our MCAT Prep Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 section-card">
                <i className="fas fa-check-circle text-[#FFD700] text-2xl mt-1"></i>
                <div>
                  <h3 className="text-white text-xl font-bold font-inter mb-2">
                    Customized Study Plans
                  </h3>
                  <p className="text-gray-300 font-inter">
                    Personalized schedules based on your target test date and
                    current preparation level
                  </p>
                </div>
              </div>
              <div
                className="flex items-start space-x-4 section-card"
                style={{ animationDelay: "0.2s" }}
              >
                <i className="fas fa-check-circle text-[#FFD700] text-2xl mt-1"></i>
                <div>
                  <h3 className="text-white text-xl font-bold font-inter mb-2">
                    Video Lessons
                  </h3>
                  <p className="text-gray-300 font-inter">
                    High-quality video content covering all MCAT topics
                  </p>
                </div>
              </div>

              <div
                className="flex items-start space-x-4 section-card"
                style={{ animationDelay: "0.4s" }}
              >
                <i className="fas fa-check-circle text-[#FFD700] text-2xl mt-1"></i>
                <div>
                  <h3 className="text-white text-xl font-bold font-inter mb-2">
                    Question Banks
                  </h3>
                  <p className="text-gray-300 font-inter">
                    Thousands of practice questions with detailed explanations
                  </p>
                </div>
              </div>
              <div
                className="flex items-start space-x-4 section-card"
                style={{ animationDelay: "0.6s" }}
              >
                <i className="fas fa-check-circle text-[#FFD700] text-2xl mt-1"></i>
                <div>
                  <h3 className="text-white text-xl font-bold font-inter mb-2">
                    Progress Tracking
                  </h3>
                  <p className="text-gray-300 font-inter">
                    Detailed analytics to monitor your improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
      <McatSectionModal
        isOpen={selectedSection !== null}
        onClose={() => setSelectedSection(null)}
        section={selectedSection}
      />
      <style jsx global>{`
        /* Section transition animations */
        .section-card {
          transition: all 0.4s ease;
          opacity: 0;
          animation: sectionReveal 0.6s ease-out forwards;
        }

        @keyframes sectionReveal {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Progress bar animation */
        .progress-bar {
          width: 0;
          animation: fillProgress 1.5s ease-out forwards;
        }

        @keyframes fillProgress {
          from {
            width: 0;
          }
          to {
            width: var(--progress-width);
          }
        }

        /* Score display animation */
        .score-display {
          animation: scoreGlow 2s infinite;
        }

        @keyframes scoreGlow {
          0% {
            text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
          }
          100% {
            text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
          }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
