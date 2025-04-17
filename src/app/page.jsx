"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
// import { ReactComponent as BlueTick } from "../../assets/icons/BlueTick.svg";
import GPABoost from "@/assets/icons/GPABoost.svg";
import MCATCars from "@/assets/icons/MCATCars.svg";
import Comments from "@/assets/icons/Comments.svg";
import MMiPrep from "@/assets/icons/MMiPrep.svg";
import CASPer from "@/assets/icons/CASPer.svg";
import css from "./landing.module.css";
import classNames from "classnames";

function MainComponent() {
  const handleConsultation = () => {
    // This will be handled by the consultation button in the header
  };
  const [currentReview, setCurrentReview] = useState(0);
  const reviews = [
    {
      achievement: "515+ MCAT Scorer",
      rating: 5,
      text: "PreMD has put in time and effort in helping me prepare for the MCAT thus far. I appreciate the dedication and the knowledge consultants shared with me and anyone would be lucky to have them as tutors!",
      reviewer: "MCAT Student",
    },
    {
      achievement: "uCalgary MD Accepted",
      rating: 5,
      text: "PreMD was very helpful in providing edits for my medical school applications. They helped me to see where my essays could be improved and how to craft a unique narrative. After providing comments he made time to give me a call and answer any questions I had. Thanks PreMD!",
      reviewer: "Medical Student",
    },
    {
      achievement: "McMaster and UBC MD Accepted",
      rating: 5,
      text: "PreMD provided very responsible and detailed oriented mentors, who offer great feedback to my med school applications, high recommend to everyone!",
      reviewer: "Medical Student",
    },
    {
      achievement: "O-Chem Topper",
      rating: 5,
      text: "Very knowledgeable tutors, PreMD had teachers that were very good at explaining concepts in organic chemistry and helped me grasp the material well over a short period of time and perform better in my classes, definitely recommend",
      reviewer: "Chemistry Student",
    },
    {
      achievement: "Western and Queen's MD Accepted",
      rating: 5,
      text: "Each of the consultants were very knowledgeable and provided helpful, specific, and personalized feedback for interview prep! Both the group and individual sessions were so helpful in improving my performance.",
      reviewer: "Medical Student",
    },
    {
      achievement: "McMaster MD Accepted",
      rating: 5,
      text: "Very kind and helpful consultants who give constructive feedback and helped me improve immensely on my journey to medical school!",
      reviewer: "Medical Student",
    },
    {
      achievement: "uCalgary MD Accepted",
      rating: 5,
      text: "Evidence-informed interview prep delivered in an efficient, relatively affordable, and professional manner. Thank you.",
      reviewer: "Medical Student",
    },
    {
      achievement: "McMaster MD Accepted",
      rating: 5,
      text: "Fantastic support for medical school interview prep — personalized, friendly, and will genuinely ensure your success!",
      reviewer: "Medical Student",
    },
    {
      achievement: "uAlberta MD Interview",
      rating: 5,
      text: "Great help with medical school admission consultation.",
      reviewer: "Medical Student",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-roboto bg-black text-white">
      {/* <Header /> */}

      <main className="pt-[60px]">
        <section className="py-8 md:py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-[#FFD700] font-inter mb-6">
                Your Guide to MD
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-inter max-w-3xl mx-auto mb-8">
                We support students with guidance and resources for success in
                medical school admissions
              </p>
            </div>
            <div className="block w-[300px] mx-auto md:hidden">
              <div className="flex justify-between mb-8">
                <div className="flex flex-col items-center w-[120px]">
                  <div className="w-[90px] h-[90px] rounded-full border-4 border-[#4CAF50] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(76,175,80,0.3)]">
                    {/* <i className="fas fa-chart-line text-3xl text-white"></i> */}
                    <GPABoost width={20} height={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white font-inter mb-1">
                    GPA Boost
                  </h3>
                  <p className="text-sm font-inter text-[#4CAF50]">
                    3.8+ Average
                  </p>
                </div>

                <div className="flex flex-col items-center w-[120px]">
                  <div className="w-[90px] h-[90px] rounded-full border-4 border-[#FFD700] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                    <i className="fas fa-file-alt text-3xl text-white"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white font-inter mb-1">
                    MCAT CARS
                  </h3>
                  <p className="text-sm font-inter text-[#FFD700]">
                    128+ Target
                  </p>
                </div>
              </div>

              <div className="flex justify-center mb-8">
                <div className="flex flex-col items-center w-[120px]">
                  <div className="w-[90px] h-[90px] rounded-full border-4 border-[#9C27B0] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(156,39,176,0.3)]">
                    <i className="fas fa-comments text-3xl text-white"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white font-inter mb-1">
                    MMI Prep
                  </h3>
                  <p className="text-sm font-inter text-[#9C27B0]">
                    85% Success
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col items-center w-[120px]">
                  <div className="w-[90px] h-[90px] rounded-full border-4 border-[#2196F3] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(33,150,243,0.3)]">
                    <i className="fas fa-users text-3xl text-white"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white font-inter mb-1">
                    CASPer
                  </h3>
                  <p className="text-sm font-inter text-[#2196F3]">
                    Q3/Q4 Score
                  </p>
                </div>

                <div className="flex flex-col items-center w-[120px]">
                  <div className="w-[90px] h-[90px] rounded-full border-4 border-[#FF69B4] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,105,180,0.3)]">
                    <i className="fas fa-tasks text-3xl text-white"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white font-inter mb-1">
                    Applications
                  </h3>
                  <p className="text-sm font-inter text-[#FF69B4]">
                    90% Interview
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-5 gap-8">
              <div
                className={classNames(
                  "flex",
                  "flex-col",
                  "items-center",
                  css.smallCards
                )}
              >
                {/* <div className="w-32 h-32 rounded-full border-4 border-[#4CAF50] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(76,175,80,0.3)]">
                  <i className="fas fa-chart-line text-6xl text-white"></i>
                  <GPABoost width={20} height={20} />
                </div> */}

                <img src="/icons/GPABoost.svg" alt="" />

                <h3 className="text-2xl font-bold text-white font-inter mb-1">
                  GPA Boost
                </h3>
                <p className="text-xl font-inter text-[#4CAF50]">
                  3.8+ Average
                </p>
              </div>

              <div
                className={classNames(
                  "flex",
                  "flex-col",
                  "items-center",
                  css.smallCards
                )}
              >
                {/* <div className="w-32 h-32 rounded-full border-4 border-[#FFD700] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                  <i className="fas fa-file-alt text-6xl text-white"></i>
                </div> */}
                {/* <MCATCars /> */}
                <img src="/icons/MCATCars.svg" alt="" />
                <h3 className="text-2xl font-bold text-white font-inter mb-1">
                  MCAT CARS
                </h3>
                <p className="text-xl font-inter text-[#FFD700]">128+ Target</p>
              </div>

              <div
                className={classNames(
                  "flex",
                  "flex-col",
                  "items-center",
                  css.smallCards
                )}
              >
                {/* <div className="w-32 h-32 rounded-full border-4 border-[#2196F3] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(33,150,243,0.3)]">
                  <i className="fas fa-users text-6xl text-white"></i>
                </div> */}
                {/* <CASPer /> */}
                <img src="/icons/CASPer.svg" alt="" />
                <h3 className="text-2xl font-bold text-white font-inter mb-1">
                  CASPer
                </h3>
                <p className="text-xl font-inter text-[#2196F3]">Q3/Q4 Score</p>
              </div>

              <div
                className={classNames(
                  "flex",
                  "flex-col",
                  "items-center",
                  css.smallCards
                )}
              >
                {/* <div className="w-32 h-32 rounded-full border-4 border-[#FF69B4] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,105,180,0.3)]">
                  <i className="fas fa-tasks text-6xl text-white"></i>
                </div> */}
                {/* <Comments /> */}
                <img src="/icons/Comments.svg" alt="" />
                <h3 className="text-2xl font-bold text-white font-inter mb-1">
                  Applications
                </h3>
                <p className="text-xl font-inter text-[#FF69B4]">
                  90% Interview
                </p>
              </div>

              <div
                className={classNames(
                  "flex",
                  "flex-col",
                  "items-center",
                  css.smallCards
                )}
              >
                {/* <div className="w-32 h-32 rounded-full border-4 border-[#9C27B0] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(156,39,176,0.3)]">
                  <i className="fas fa-comments text-6xl text-white"></i>
                </div> */}
                {/* <MMiPrep /> */}
                <img src="/icons/MMiPrep.svg" alt="" />
                <h3 className="text-2xl font-bold text-white font-inter mb-1">
                  MMI Prep
                </h3>
                <p className="text-xl font-inter text-[#9C27B0]">85% Success</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div
              className={classNames("text-center", "mb-12", css.cardContainer)}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white font-inter mb-4">
                Take the Next Step Toward Medical School
              </h2>
              <p className="text-xl text-gray-300 font-inter mb-8">
                Whether you're just starting or finalizing your application, we
                provide expert guidance.
              </p>
              <a
                href="/consultation"
                className="shine-effect bg-[#FFD700] text-black px-8 py-3 rounded-md font-bold font-inter text-xl hover:bg-[#FFE44D] transition-colors inline-block"
                aria-label="Book a consultation"
              >
                Book a Consultation
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className={css.cardContainer}>
                <h3 className="text-3xl md:text-4xl font-bold text-white font-inter mb-8">
                  The Hard Truth About Canadian Med School
                </h3>

                <div
                  className={classNames(
                    css.cardInnerContainer2,
                    "bg-[#1D1D1D]",
                    "p-4",
                    "mb-6"
                  )}
                >
                  <div className="bg-[#111] rounded-lg p-6 ">
                    <div className="mb-4">
                      <span className="text-gray-300">Acceptance Rate</span>
                      <div className="flex items-center gap-4">
                        <div className="h-2 flex-grow bg-[#1D1D1D] rounded-full overflow-hidden">
                          <div className="h-full w-[10%] bg-[#FFD700]"></div>
                        </div>
                        <span className="text-[#FFD700] font-bold">5-10%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="grid grid-cols-2 gap-4"> */}

                <div
                  className={classNames(
                    css.cardInnerContainer2,
                    "bg-[#1D1D1D]",
                    "flex",
                    "items-start",
                    "gap-8",
                    "rounded-lg",
                    "p-10",
                    "mb-6"
                  )}
                >
                  <img src="/icons/ExistingApplicants.svg" alt="" width="80" />
                  <div>
                    <div className="text-[#FFD700] text-3xl font-bold mb-2">
                      8000+
                    </div>
                    <div className="text-gray-300">Annual Applicants</div>
                  </div>
                </div>
                <div
                  className={classNames(
                    css.cardInnerContainer2,
                    "bg-[#1D1D1D]",
                    "flex",
                    "items-start",
                    "gap-8",
                    "rounded-lg",
                    "p-10",
                    "mb-6"
                  )}
                >
                  <img src="/icons/AvailableSeats.svg" alt="" width="80" />
                  <div>
                    <div className="text-[#FFD700] text-3xl font-bold mb-2">
                      -900
                    </div>
                    <div className="text-gray-300">Available Seats</div>
                  </div>
                </div>
                {/* </div> */}
              </div>

              <div className={css.cardContainer}>
                <h3 className="text-3xl md:text-4xl font-bold text-white font-inter mb-8">
                  Why PreMD Makes a Difference
                </h3>

                <div className="stagger-fade-in space-y-4">
                  <div className="bg-[#1D1D1D] rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      {/* <i className="fas fa-chart-line text-[#FFD700] text-2xl mt-1"></i> */}
                      <img src="/icons/StrategicAdv.svg" alt="" width="25" />
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          Strategic Advantage
                        </h4>
                        <p className="text-gray-300">
                          {/* We help you stand out in Canada's competitive medical
                          school landscape */}
                          Cain msights and a plan to navigate the highly
                          competitive medical school lundora
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1D1D1D] rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      {/* <i className="fas fa-bullseye text-[#FFD700] text-2xl mt-1"></i> */}
                      <img src="/icons/Target.svg" alt="" width="25" />
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          Targeted Preparation
                        </h4>
                        <p className="text-gray-300">
                          {/* Customized guidance for each component of your
                          application */}
                          Comprehensive guidance of every stage of your
                          application
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1D1D1D] rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      {/* <i className="fas fa-trophy text-[#FFD700] text-2xl mt-1"></i> */}
                      <img src="/icons/Track.svg" alt="" width="25" />
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          Proven Track Record
                        </h4>
                        <p className="text-gray-300">
                          {/* Our students consistently achieve above-average
                          acceptance rates */}
                          Our strategies consistenity drive exceptional
                          admission oulcomes,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a
                href="/consultation"
                className="shine-effect bg-[#FFD700] text-black px-8 py-3 rounded-md font-bold font-inter text-xl hover:bg-[#FFE44D] transition-colors inline-block"
                aria-label="Start your consultation journey"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gradient-to-b from-black to-[#111]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white font-inter mb-6">
                  Your Personal{" "}
                  <span className="text-[#FFD700]">MD Student Mentor</span>
                </h2>
                <p className="text-xl text-gray-300 font-inter mb-6">
                  What sets us apart? Every student is paired with a dedicated
                  MD Student Mentor who has successfully navigated the journey
                  you're on.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0">
                      {/* <i className="fas fa-road text-[#FFD700] text-xl"></i> */}
                      <img src="/icons/PersonalImage1.svg" alt="" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Long-term Support
                      </h3>
                      <p className="text-gray-300">
                        Your mentor stays with you throughout your entire
                        medical school journey
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0">
                      {/* <i className="fas fa-lightbulb text-[#FFD700] text-xl"></i> */}
                      <img src="/icons/PersonalImage2.svg" alt="" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Been There, Done That
                      </h3>
                      <p className="text-gray-300">
                        Learn from someone who recently succeeded in the exact
                        path you're pursuing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0">
                      {/* <i className="fas fa-heart text-[#FFD700] text-xl"></i> */}
                      <img src="/icons/PersonalImage3.svg" alt="" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Personal Connection
                      </h3>
                      <p className="text-gray-300">
                        More than just advice - build a relationship with
                        someone invested in your success
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10">
                  <div className="w-full aspect-square relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 md:w-80 md:h-80 relative">
                        {/* <i className="fas fa-handshake text-[#FFD700] text-[160px] md:text-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i> */}
                        <img
                          src="/icons/fa6-solid_handshake.svg"
                          alt=""
                          width="240"
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                        <div className="absolute inset-0 bg-[#FFD700]/20 blur-[100px] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-[#FFD700]/20 animate-spin-slow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-[#FFD700]/10 animate-spin-slower absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#FFD700] font-inter mb-6">
                Why Choose PreMD+
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="bg-black p-8 md:p-12 rounded-lg border border-[#FFD700]/20">
                <div
                  key={currentReview}
                  className="text-center mb-6 review-animation"
                >
                  <h3 className="text-3xl font-bold text-[#FFD700] font-inter mb-4">
                    {reviews[currentReview].achievement}
                  </h3>
                  <div className="text-[#FFD700] mb-6 text-2xl">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="text-white text-xl font-inter mb-6">
                    "{reviews[currentReview].text}"
                  </p>
                  <p className="text-gray-300 text-lg font-inter">
                    {reviews[currentReview].reviewer}
                  </p>
                </div>

                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={() =>
                      setCurrentReview(
                        (prev) => (prev - 1 + reviews.length) % reviews.length
                      )
                    }
                    className="text-[#FFD700] hover:text-[#FFE44D] transition-colors p-2"
                    aria-label="Previous review"
                  >
                    <i className="fas fa-chevron-left text-xl"></i>
                  </button>
                  <div className="flex gap-2">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentReview(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentReview === index
                            ? "bg-[#FFD700]"
                            : "bg-[#FFD700]/20"
                        }`}
                        aria-label={`Go to review ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      setCurrentReview((prev) => (prev + 1) % reviews.length)
                    }
                    className="text-[#FFD700] hover:text-[#FFE44D] transition-colors p-2"
                    aria-label="Next review"
                  >
                    <i className="fas fa-chevron-right text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) rotate(45deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes spin-slower {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        .text-lg {
          animation: fadeIn 0.5s ease-out;
        }

        .review-animation {
          animation: fadeIn 0.5s ease-out;
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transform: translateY(0);
          transition: transform 0.2s ease;
        }

        .shine-effect:hover {
          transform: translateY(-1px);
        }

        .shine-effect:active {
          transform: translateY(0);
        }

        .shine-effect::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          transform: rotate(45deg);
          animation: shine 4s infinite;
        }

        .stagger-fade-in > * {
          opacity: 0;
          animation: fadeIn 0.3s ease-out forwards;
        }

        .stagger-fade-in > *:nth-child(1) {
          animation-delay: 0.1s;
        }
        .stagger-fade-in > *:nth-child(2) {
          animation-delay: 0.2s;
        }
        .stagger-fade-in > *:nth-child(3) {
          animation-delay: 0.3s;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slower {
          animation: spin-slower 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
