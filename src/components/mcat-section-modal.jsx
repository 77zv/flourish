"use client";
import React, { useState } from "react";

// export default function Index() {
//   return (
function MainComponent({ isOpen, onClose, section }) {
  if (!isOpen || !section) return null;

  const sectionDetails = {
    cp: {
      icon: "fa-flask",
      fullTitle:
        "Chemical and Physical Foundations of Biological Systems (Chem/Phys)",
      timePerQuestion: "~1 minute 36 seconds",
      content: [
        "General Chemistry",
        "Organic Chemistry",
        "Physics",
        "Biochemistry",
        "Biology",
        "Statistics/Research Methods",
      ],
      noteType: "Science Section",
      questionTypes: ["75% Passage-based", "25% Discrete (standalone)"],
      questions: 59,
      time: 95,
    },
    cars: {
      icon: "fa-book-reader",
      fullTitle: "Critical Analysis and Reasoning Skills (CARS)",
      timePerQuestion: "~1 minute 41 seconds",
      content: ["Humanities Passages", "Social Science Passages"],
      noteType: "Verbal Reasoning Section",
      questionTypes: ["100% Passage-based", "No discrete questions"],
      questions: 53,
      time: 90,
    },
    bb: {
      icon: "fa-dna",
      fullTitle:
        "Biological and Biochemical Foundations of Living Systems (Bio/Biochem)",
      timePerQuestion: "~1 minute 36 seconds",
      content: [
        "Biology",
        "Biochemistry",
        "General Chemistry",
        "Organic Chemistry",
      ],
      noteType: "Science Section",
      questionTypes: ["75% Passage-based", "25% Discrete (standalone)"],
      questions: 59,
      time: 95,
    },
    ps: {
      icon: "fa-brain",
      fullTitle:
        "Psychological, Social, and Biological Foundations of Behavior (Psych/Soc)",
      timePerQuestion: "~1 minute 36 seconds",
      content: [
        "Psychology",
        "Sociology",
        "Biology",
        "Behavioral Science",
        "Statistics",
      ],
      noteType: "Science Section",
      questionTypes: ["75% Passage-based", "25% Discrete (standalone)"],
      questions: 59,
      time: 95,
    },
  };

  const details = sectionDetails[section];

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#111] max-w-2xl w-full rounded-lg relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#111] p-6 border-b border-[#FFD700]/10 z-10">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-[#FFD700]/10 w-12 h-12 rounded-full flex items-center justify-center">
                <i
                  className={`fas ${details.icon} text-[#FFD700] text-2xl`}
                ></i>
              </div>
              <h2 className="text-2xl font-bold text-white font-inter">
                {details.fullTitle}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/30 p-4 rounded-lg hover:bg-black/40 transition-colors">
              <p className="text-gray-400 text-sm mb-1">Questions</p>
              <p className="text-[#FFD700] font-bold text-lg">
                {details.questions}
              </p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg hover:bg-black/40 transition-colors">
              <p className="text-gray-400 text-sm mb-1">Duration</p>
              <p className="text-[#FFD700] font-bold text-lg">
                {details.time} minutes
              </p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg hover:bg-black/40 transition-colors">
              <p className="text-gray-400 text-sm mb-1">Time per Question</p>
              <p className="text-[#FFD700] font-bold text-lg">
                {details.timePerQuestion}
              </p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg hover:bg-black/40 transition-colors">
              <p className="text-gray-400 text-sm mb-1">Section Type</p>
              <p className="text-[#FFD700] font-bold text-lg">
                {details.noteType}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-inter flex items-center gap-2">
              <i className="fas fa-list-ul text-[#FFD700]"></i>
              Content Breakdown
            </h3>
            <div className="bg-black/30 p-6 rounded-lg hover:bg-black/40 transition-colors">
              <ul className="list-disc list-inside space-y-3 text-gray-300 font-inter">
                {details.content.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-inter flex items-center gap-2">
              <i className="fas fa-tasks text-[#FFD700]"></i>
              Question Format
            </h3>
            <div className="bg-black/30 p-6 rounded-lg hover:bg-black/40 transition-colors">
              <ul className="list-disc list-inside space-y-3 text-gray-300 font-inter">
                {details.questionTypes.map((type, index) => (
                  <li
                    key={index}
                    className="hover:text-white transition-colors"
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-[#111] p-6 border-t border-[#FFD700]/10">
          <a
            href="/consultation"
            className="block w-full bg-[#FFD700] text-center text-black py-3 px-6 rounded-lg font-bold font-inter text-lg hover:bg-[#FFE44D] transition-colors"
          >
            Book MCAT Preparation Session
          </a>
        </div>
      </div>
    </div>
  );
}

export default function McatSectionModal() {
  const [isOpen, setIsOpen] = useState(true);
  const sections = ["cp", "cars", "bb", "ps"];
  const [currentSection, setCurrentSection] = useState("cp");

  return (
    <div className="p-4 bg-black min-h-screen">
      <div className="flex gap-4 mb-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => {
              setCurrentSection(section);
              setIsOpen(true);
            }}
            className="bg-[#FFD700] text-black px-4 py-2 rounded-md font-bold font-inter hover:bg-[#FFE44D] transition-colors"
          >
            Show {section.toUpperCase()}
          </button>
        ))}
      </div>

      <MainComponent
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        section={currentSection}
      />
    </div>
  );
}
// );
// }
