"use client";
import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

function MainComponent() {
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  const handleGetStarted = () => {
    setShowConsultModal(true);
  };

  return (
    <div className="font-roboto bg-black text-white">
      {/* <Header onGetStarted={handleGetStarted} /> */}

      <main className="pt-[60px]">
        <section className="bg-black text-white py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-0">
              <h1 className="text-5xl md:text-6xl font-bold font-inter mb-6">
                <span className="text-white">Master</span>{" "}
                <span className="text-[#FFD700]">CASPer</span>
              </h1>
              <div className="inline-block bg-[#FFD700] text-black px-4 py-1 rounded-full text-sm font-bold mb-6">
                NEW FORMAT '25-'26
              </div>
              <div className="text-2xl md:text-3xl font-bold space-y-2 mb-8">
                <p className="text-[#FFD700]"></p>
                <p className="text-white"></p>
              </div>

              <div className="bg-black rounded-lg p-4 md:p-8 mb-0">
                <h2 className="text-2xl md:text-3xl font-bold font-inter text-[#FFD700] mb-6">
                  Computer-Based Assessment for Sampling Personal
                  Characteristics
                </h2>

                <p className="text-center text-gray-300 text-lg md:text-xl mb-8">
                  An online situational judgment test used by medical schools
                  and other programs to evaluate applicants' non-cognitive
                  skills:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-[1000px] mx-auto">
                  <div className="bg-black aspect-square md:aspect-[4/3] p-4 rounded-xl border border-white/20 hover:border-white/40 transition-colors flex flex-col items-center justify-center">
                    <i className="fas fa-heart text-[#FFD700] text-2xl md:text-3xl mb-3"></i>
                    <h4 className="text-white font-inter font-bold text-lg md:text-xl text-center">
                      Empathy
                    </h4>
                  </div>

                  <div className="bg-black aspect-square md:aspect-[4/3] p-4 rounded-xl border border-white/20 hover:border-white/40 transition-colors flex flex-col items-center justify-center">
                    <i className="fas fa-balance-scale text-[#FFD700] text-2xl md:text-3xl mb-3"></i>
                    <h4 className="text-white font-inter font-bold text-lg md:text-xl text-center">
                      Ethics
                    </h4>
                  </div>

                  <div className="bg-black aspect-square md:aspect-[4/3] p-4 rounded-xl border border-white/20 hover:border-white/40 transition-colors flex flex-col items-center justify-center">
                    <i className="fas fa-comments text-[#FFD700] text-2xl md:text-3xl mb-3"></i>
                    <h4 className="text-white font-inter font-bold text-lg md:text-xl text-center">
                      Discourse
                    </h4>
                  </div>

                  <div className="bg-black aspect-square md:aspect-[4/3] p-4 rounded-xl border border-white/20 hover:border-white/40 transition-colors flex flex-col items-center justify-center">
                    <i className="fas fa-brain text-[#FFD700] text-2xl md:text-3xl mb-3"></i>
                    <h4 className="text-white font-inter font-bold text-lg md:text-xl text-center">
                      Inquiry
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <section className="py-8 bg-gradient-to-r from-[#111] to-black">
              <div className="max-w-7xl mx-auto">
                <div className="bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-trophy text-[#FFD700] text-4xl"></i>
                    <div>
                      <h3 className="text-2xl font-bold font-inter text-white">
                        Learn from the Best
                      </h3>
                      <p className="text-xl text-[#FFD700]">
                        All our teachers scored in the 4th Quartile
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-300 text-lg font-inter">
                      So can you.
                    </p>
                    <button
                      onClick={handleGetStarted}
                      className="shine-effect bg-[#FFD700] text-black px-6 py-2 rounded-md font-bold font-inter hover:bg-[#FFE44D] transition-colors"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-12">
              <h2 className="text-3xl font-bold font-inter text-[#FFD700] mb-8">
                Key Response Elements
              </h2>
              <div className="bg-black p-8 rounded-lg border border-[#FFD700]/20">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <i className="fas fa-bullseye text-[#FFD700] mt-1"></i>
                      <div>
                        <h3 className="text-xl font-bold font-inter text-white mb-2">
                          Clarity
                        </h3>
                        <p className="text-gray-300">
                          Communicate your reasoning concisely and logically
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <i className="fas fa-heart text-[#FFD700] mt-1"></i>
                      <div>
                        <h3 className="text-xl font-bold font-inter text-white mb-2">
                          Empathy
                        </h3>
                        <p className="text-gray-300">
                          Acknowledge all perspectives in a scenario
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <i className="fas fa-puzzle-piece text-[#FFD700] mt-1"></i>
                      <div>
                        <h3 className="text-xl font-bold font-inter text-white mb-2">
                          Problem-Solving
                        </h3>
                        <p className="text-gray-300">
                          Propose realistic and ethical solutions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <i className="fas fa-user-tie text-[#FFD700] mt-1"></i>
                      <div>
                        <h3 className="text-xl font-bold font-inter text-white mb-2">
                          Professionalism
                        </h3>
                        <p className="text-gray-300">
                          Maintain neutrality and avoid judgmental language
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-12">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold font-inter text-[#FFD700] mb-8">
                  Sample Scenarios & Responses
                </h2>

                <div className="space-y-8">
                  <div className="bg-black p-8 rounded-lg border border-[#FFD700]/20">
                    <h3 className="text-2xl font-bold font-inter text-white mb-4">
                      Scenario 1: Handling a Difficult Team Member
                    </h3>
                    <p className="text-gray-300 mb-6">
                      One member of your study group, Sue, is showing up
                      unprepared and not contributing. She blames it on a paper
                      she had to write, but others had the same paper and showed
                      up prepared. How would you handle this situation?
                    </p>
                    <button
                      onClick={() => setShowAnswer1(!showAnswer1)}
                      className="bg-[#FFD700] text-black px-6 py-2 rounded-md font-bold font-inter hover:bg-[#FFE44D] transition-colors mb-4"
                    >
                      {showAnswer1 ? "Hide Answer" : "Show Answer"}
                    </button>
                    {showAnswer1 && (
                      <div className="bg-[#111] p-6 rounded-lg border border-[#FFD700]/10">
                        <h4 className="text-xl font-bold font-inter text-[#FFD700] mb-4">
                          Sample Answer:
                        </h4>
                        <p className="text-gray-300">
                          I would first acknowledge the frustration of the group
                          members and stress the importance of collaboration and
                          respect in the team. Then, I would have a private
                          conversation with Sue in a non-confrontational manner
                          to understand her perspective. I would ask open-ended
                          questions about her challenges and explore whether
                          external factors are contributing to her inability to
                          prepare. It's essential to avoid jumping to
                          conclusions and focus on solutions. If Sue requires
                          support, such as time management resources or peer
                          assistance, I would suggest these to help her
                          contribute better. Simultaneously, I would encourage
                          the group to maintain a supportive environment to
                          ensure everyone works effectively together moving
                          forward.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="bg-black p-8 rounded-lg border border-[#FFD700]/20">
                    <h3 className="text-2xl font-bold font-inter text-white mb-4">
                      Scenario 2: Customer Requesting a Refund Without a Receipt
                    </h3>
                    <p className="text-gray-300 mb-6">
                      A customer at your retail store wants a refund without a
                      receipt, explaining she needs the money for her child's
                      prescription. Store policy prohibits this. What do you do?
                    </p>
                    <button
                      onClick={() => setShowAnswer2(!showAnswer2)}
                      className="bg-[#FFD700] text-black px-6 py-2 rounded-md font-bold font-inter hover:bg-[#FFE44D] transition-colors mb-4"
                    >
                      {showAnswer2 ? "Hide Answer" : "Show Answer"}
                    </button>
                    {showAnswer2 && (
                      <div className="bg-[#111] p-6 rounded-lg border border-[#FFD700]/10">
                        <h4 className="text-xl font-bold font-inter text-[#FFD700] mb-4">
                          Sample Answer:
                        </h4>
                        <p className="text-gray-300">
                          This is a sensitive situation where empathy and
                          professionalism must be balanced with adherence to
                          policy. I would start by expressing understanding and
                          empathy for the customer's situation, acknowledging
                          how difficult it must be. However, I would also
                          explain that store policies are in place to ensure
                          fairness and consistency for all customers and cannot
                          be overridden. I would explore alternative solutions,
                          such as checking if the purchase can be verified
                          through another method, like a credit card transaction
                          or rewards account. Additionally, I would inform her
                          about local resources or charities that might assist
                          with medical expenses. If possible, I would escalate
                          the situation to a manager for further review,
                          ensuring the customer feels heard and respected.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="bg-black p-8 rounded-lg border border-[#FFD700]/20">
                    <h3 className="text-2xl font-bold font-inter text-white mb-4">
                      Scenario 3: Leadership in a Meaningful Endeavor
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Please share a meaningful and rewarding endeavor you have
                      pursued. What made it fulfilling for you? How have you
                      demonstrated leadership in that role?
                    </p>
                    <button
                      onClick={() => setShowAnswer3(!showAnswer3)}
                      className="bg-[#FFD700] text-black px-6 py-2 rounded-md font-bold font-inter hover:bg-[#FFE44D] transition-colors mb-4"
                    >
                      {showAnswer3 ? "Hide Answer" : "Show Answer"}
                    </button>
                    {showAnswer3 && (
                      <div className="bg-[#111] p-6 rounded-lg border border-[#FFD700]/10">
                        <h4 className="text-xl font-bold font-inter text-[#FFD700] mb-4">
                          Sample Answer:
                        </h4>
                        <p className="text-gray-300">
                          One of the most meaningful endeavors I've pursued was
                          organizing a food drive for a local shelter during the
                          holiday season. I noticed a need in our community and
                          took the initiative to coordinate with local
                          businesses, schools, and volunteers to collect
                          donations. What made this experience fulfilling was
                          seeing the community come together for a shared cause
                          and knowing the impact it had on families in need. It
                          was heartwarming to deliver the food and see the
                          gratitude from those who benefited. As the leader of
                          the initiative, I delegated tasks to team members,
                          such as advertising, coordinating donation pick-ups,
                          and sorting items. I ensured everyone felt valued and
                          motivated by fostering clear communication and
                          celebrating milestones along the way. This experience
                          taught me the importance of organization and empathy
                          in leadership, as well as the power of collaboration
                          in achieving a common goal.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="bg-black text-white py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold font-inter text-center text-[#FFD700] mb-12">
              Test Format
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black p-8 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <i className="fas fa-video text-[#FFD700] text-3xl"></i>
                  <h3 className="text-2xl font-bold font-inter text-white">
                    Video Response
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <i className="fas fa-list text-[#FFD700] mt-1"></i>
                    <span className="text-gray-300">
                      6 total scenarios (2 word-based + 4 video-based)
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <i className="fas fa-question-circle text-[#FFD700] mt-1"></i>
                    <span className="text-gray-300">
                      2 questions per scenario, shown one at a time
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <i className="fas fa-clock text-[#FFD700] mt-1"></i>
                    <span className="text-gray-300">
                      1 minute per response (2 minutes total per scenario)
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <i className="fas fa-hourglass-start text-[#FFD700] mt-1"></i>
                    <span className="text-gray-300">
                      30 seconds prep time before each response
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <i className="fas fa-webcam text-[#FFD700] mt-1"></i>
                    <span className="text-gray-300">
                      Record your responses through webcam
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <i className="fas fa-ban text-[#FFD700] mt-1"></i>
                    <span className="text-gray-300">
                      No re-recording or playback allowed
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <i className="fas fa-clock text-[#FFD700] mt-1"></i>
                    <span className="text-gray-300">
                      Total section time: ~15-20 minutes
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-black p-8 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <i className="fas fa-keyboard text-[#FFD700] text-3xl"></i>
                  <h3 className="text-2xl font-bold font-inter text-white">
                    Typed Response
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <i className="fas fa-list text-[#FFD700] mt-1"></i>
                    <span className="text-gray-300">
                      8 total scenarios (3 word-based + 5 video-based)
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <i className="fas fa-question-circle text-[#FFD700] mt-1"></i>
                    <span className="text-gray-300">
                      3 questions per scenario, all shown at once
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <i className="fas fa-clock text-[#FFD700] mt-1"></i>
                    <span className="text-gray-300">
                      5 minutes per scenario for all responses
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <i className="fas fa-edit text-[#FFD700] mt-1"></i>
                    <span className="text-gray-300">
                      Type responses in text boxes provided
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <i className="fas fa-pen text-[#FFD700] mt-1"></i>
                    <span className="text-gray-300">
                      Can edit responses within time limit
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <i className="fas fa-spell-check text-[#FFD700] mt-1"></i>
                    <span className="text-gray-300">
                      Basic spell-check available
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <i className="fas fa-clock text-[#FFD700] mt-1"></i>
                    <span className="text-gray-300">
                      Total section time: ~45-50 minutes
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#111]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black p-8 rounded-lg border border-[#FFD700]/20">
                <i className="fas fa-brain text-[#FFD700] text-4xl mb-4"></i>
                <h3 className="text-[#FFD700] text-2xl font-bold font-inter mb-4">
                  Practice Scenarios
                </h3>
                <p className="text-gray-300 font-inter">
                  Access realistic CASPer scenarios and practice with timed
                  responses to build confidence
                </p>
              </div>

              <div className="bg-black p-8 rounded-lg border border-[#FFD700]/20">
                <i className="fas fa-users text-[#FFD700] text-4xl mb-4"></i>
                <h3 className="text-[#FFD700] text-2xl font-bold font-inter mb-4">
                  Expert Feedback
                </h3>
                <p className="text-gray-300 font-inter">
                  Receive personalized feedback from experienced medical
                  professionals
                </p>
              </div>

              <div className="bg-black p-8 rounded-lg border border-[#FFD700]/20">
                <i className="fas fa-chart-line text-[#FFD700] text-4xl mb-4"></i>
                <h3 className="text-[#FFD700] text-2xl font-bold font-inter mb-4">
                  Performance Tracking
                </h3>
                <p className="text-gray-300 font-inter">
                  Monitor your progress with detailed analytics and improvement
                  metrics
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#111] p-8 md:p-12 rounded-lg border border-[#FFD700]/20">
              <h2 className="text-3xl md:text-4xl font-bold font-inter text-[#FFD700] mb-6">
                Why Choose Our CASPer Prep?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#FFD700] mt-1 mr-4"></i>
                      <span className="text-gray-300 font-inter">
                        Comprehensive scenario database with regular updates
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#FFD700] mt-1 mr-4"></i>
                      <span className="text-gray-300 font-inter">
                        One-on-one mentoring sessions with 4Q Scorers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#FFD700] mt-1 mr-4"></i>
                      <span className="text-gray-300 font-inter">
                        Detailed answer frameworks and strategies
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#FFD700] mt-1 mr-4"></i>
                      <span className="text-gray-300 font-inter">
                        Flexible study schedules to fit your needs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#FFD700] mt-1 mr-4"></i>
                      <span className="text-gray-300 font-inter">
                        Mock tests under exam conditions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#FFD700] mt-1 mr-4"></i>
                      <span className="text-gray-300 font-inter">
                        Performance analytics and improvement tracking
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button
                  onClick={handleGetStarted}
                  className="shine-effect bg-[#FFD700] text-black px-8 py-3 rounded-md font-bold font-inter text-xl hover:bg-[#FFE44D] transition-colors"
                >
                  Start Your Prep Today
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}

      {showConsultModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-[#111] p-8 rounded-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold font-inter text-[#FFD700]">
                Schedule Consultation
              </h3>
              <button
                onClick={() => setShowConsultModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-black border border-[#FFD700]/20 rounded px-4 py-2 text-white font-inter"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-black border border-[#FFD700]/20 rounded px-4 py-2 text-white font-inter"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-black border border-[#FFD700]/20 rounded px-4 py-2 text-white font-inter"
                ></textarea>
              </div>
              <button
                type="submit"
                className="shine-effect w-full bg-[#FFD700] text-black px-6 py-2 rounded-md font-bold font-inter hover:bg-[#FFE44D] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx global>{`
        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: 0.5s;
        }

        .shine-effect:hover::before {
          left: 100%;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
