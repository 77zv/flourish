"use client";
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

function MainComponent() {
  const courses = [
    {
      title: "PreMD Academy",
      description:
        "Dedicated program for students looking to get a headstart in medicine",
      features: [
        { text: "Research Skills Development", icon: "microscope" },
        { text: "Introduction to Medicine", icon: "book-medical" },
        { text: "Volunteer Development", icon: "hands-helping" },
        { text: "High Performance in Human Endeavour", icon: "chart-line" },
        { text: "Passion Projects", icon: "project-diagram" },
      ],
    },
    {
      title: "Foundational Subject Matter Expertise",
      description:
        "Master the core subjects essential for medical school success",
      features: [
        { text: "Chemistry & Biology", icon: "atom" },
        { text: "Physics & Mathematics", icon: "square-root-alt" },
        { text: "Biochemistry", icon: "dna" },
        { text: "Psychology", icon: "brain" },
      ],
    },
    {
      title: "MCAT Course",
      description:
        "Comprehensive MCAT preparation with proven strategies and extensive practice",
      features: [
        { text: "Full-length Practice Tests", icon: "check-circle" },
        { text: "Comprehensive Content Review", icon: "book" },
        { text: "Time Management Strategies", icon: "clock" },
        { text: "Expert Instruction", icon: "user-graduate" },
      ],
    },
    {
      title: "CASPer Preparation",
      description:
        "Expert guidance for situational judgment and ethical reasoning scenarios",
      features: [
        { text: "Scenario-based Practice", icon: "users" },
        { text: "Ethical Decision Making", icon: "balance-scale" },
        { text: "Communication Skills", icon: "comments" },
        { text: "Timed Practice Sessions", icon: "stopwatch" },
      ],
    },
    {
      title: "MD Application",
      description:
        "Comprehensive application support for Canadian and US medical schools",
      features: [
        { text: "OMSAS Applications", icon: "file-medical" },
        { text: "UBC & Alberta Process", icon: "university" },
        { text: "Eastern Schools Guide", icon: "map-marked-alt" },
        { text: "AMCAS & DO Applications", icon: "graduation-cap" },
        { text: "Personal Statement Review", icon: "edit" },
      ],
    },
    {
      title: "MD Interview",
      description:
        "Structured preparation for all medical school interview formats",
      features: [
        { text: "MMI Practice Sessions", icon: "users-cog" },
        { text: "MPI Strategies", icon: "user-tie" },
        { text: "Panel Interview Prep", icon: "chalkboard-teacher" },
        { text: "Communication Training", icon: "comments" },
        { text: "Feedback & Assessment", icon: "clipboard-check" },
      ],
    },
  ];

  return (
    <div className="font-roboto bg-black text-white">
      <Header />
      <main className="pt-[60px] px-6 pb-12">
        <div className="max-w-7xl mx-auto section-reveal">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold font-inter text-[#FFD700] mb-6">
              Our Courses
            </h1>
            <p className="text-xl text-gray-300 font-inter">
              Comprehensive preparation programs designed to help you succeed in
              your medical school journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.map((course, index) => (
              <div
                key={index}
                className="course-card rounded-xl p-8 flex flex-col"
              >
                <h3 className="title-highlight text-2xl font-bold font-inter text-[#FFD700] mb-4">
                  {course.title}
                </h3>
                <p className="text-gray-300 font-inter mb-6">
                  {course.description}
                </p>
                <ul className="space-y-3">
                  {course.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="feature-item flex items-center text-gray-300 font-inter"
                    >
                      <i
                        className={`feature-icon fas fa-${feature.icon} mr-3`}
                      ></i>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/consultation"
              className="shine-effect bg-gradient-to-r from-[#FFD700] to-[#FDB137] text-black px-8 py-4 rounded-md font-bold font-inter text-xl hover:from-[#FFE44D] hover:to-[#FDC137] transition-all transform hover:scale-105 active:scale-95 inline-block shadow-lg"
            >
              Enroll Today
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <style jsx global>{`
        /* Card enhancement */
        .course-card {
          background: linear-gradient(145deg, #1A1A1A, #111111);
          position: relative;
          border: 1px solid rgba(255, 215, 0, 0.1);
          transition: border-color 0.3s ease, background 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .course-card:hover {
          border-color: rgba(255, 215, 0, 0.3);
          background: linear-gradient(145deg, #1A1A1A, #151515);
        }

        /* Top accent line */
        .course-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 215, 0, 0.2), 
            transparent
          );
          transform: scaleX(0.3);
          transition: transform 0.3s ease;
        }

        .course-card:hover::before {
          transform: scaleX(1);
        }

        /* Feature list enhancement */
        .feature-item {
          position: relative;
          padding-left: 24px;
        }

        .feature-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 6px;
          height: 6px;
          background: #FFD700;
          transform: translateY(-50%) rotate(45deg);
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .feature-item:hover::before {
          opacity: 1;
        }

        /* Icons */
        .feature-icon {
          color: #FFD700;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .feature-item:hover .feature-icon {
          opacity: 1;
        }

        /* Section transitions */
        .section-reveal {
          opacity: 0;
          animation: fadeIn 0.8s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Title highlight effect */
        .title-highlight {
          background: linear-gradient(120deg, transparent 0%, transparent 50%, rgba(255, 215, 0, 0.1) 50%, transparent 100%);
          background-size: 200% 100%;
          transition: background-position 0.5s ease;
        }

        .title-highlight:hover {
          background-position: -100% 0;
        }

        /* Button shine effect */
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shine-effect::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 0%,
            rgba(255,255,255,0.1) 50%,
            transparent 100%
          );
          transform: rotate(45deg);
          animation: shine 4s infinite;
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;