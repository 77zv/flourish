"use client";
import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

function MainComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stage: "",
    field: "",
    topics: [],
    availability: {
      days: [],
      times: [],
    },
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.stage) newErrors.stage = "Current stage is required";
    if (!formData.field) newErrors.field = "Field of study is required";
    if (!formData.topics.length)
      newErrors.topics = "Please select at least one topic";
    if (
      !formData.availability.days.length ||
      !formData.availability.times.length
    ) {
      newErrors.availability = "Please select your availability";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  // const saveData = async (data) => {
  //   try {
  //     const docRef = await addDoc(collection(db, "consultQueryUser"), {
  //       ...data,
  //       createdAt: new Date(),
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  const saveData = async (alldata) => {
    try {
      const res = await fetch("/api/saveUser", {
        method: "POST",
        body: JSON.stringify(alldata),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log("Response:", data);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Here you would integrate with your backend
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Send confirmation email
      const emailContent = `
        Dear ${formData.name},
        
        Thank you for scheduling a consultation with PreMD+. 
        
        Your consultation details:
        Date: ${
          selectedDate
            ? new Date(selectedDate).toLocaleDateString()
            : "To be confirmed"
        }
        Topics: ${formData.topics.join(", ")}
        
        We'll be in touch shortly to confirm your appointment.
        
        Best regards,
        PreMD+ Team
      `;

      await saveData(formData);

      // Simulate email sending
      console.log("Sending email:", emailContent);

      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({
        ...errors,
        submit: "There was an error submitting your request. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-roboto bg-black text-white">
      {/* <Header /> */}

      <main className="pt-[60px] px-4 md:px-6 pb-8 md:pb-12">
        <div className="max-w-3xl mx-auto">
          {!submitted ? (
            <div className="bg-[#1A1A1A] p-6 md:p-12 rounded-lg border border-[#FFD700]/20 shadow-xl">
              <div className="mb-8 bg-black/50 rounded-lg p-4">
                <div className="flex justify-between items-center gap-2">
                  {[
                    { name: "Name", icon: "user" },
                    { name: "Stage", icon: "graduation-cap" },
                    { name: "Field", icon: "book" },
                    { name: "Topics", icon: "list" },
                    { name: "Schedule", icon: "calendar" },
                    { name: "Details", icon: "pencil-alt" },
                  ].map((stepInfo, index) => (
                    <button
                      key={index}
                      onClick={() => index + 1 <= step && setStep(index + 1)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 text-sm md:text-base step-transition ${
                        step === index + 1
                          ? "bg-[#FFD700] text-black font-bold step-active"
                          : index + 1 < step
                          ? "text-[#FFD700] hover:bg-[#FFD700]/10 cursor-pointer"
                          : "text-gray-400 cursor-not-allowed"
                      }`}
                      disabled={index + 1 > step}
                    >
                      <i className={`fas fa-${stepInfo.icon}`}></i>
                      <span className="hidden md:inline">{stepInfo.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-12">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-5xl font-bold text-[#FFD700] font-inter mb-4">
                    Book Your Strategy Call
                  </h1>
                  <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-gray-300 font-inter">
                    <i className="fas fa-user-md text-[#FFD700]"></i>
                    <p>Speak with a MD Candidate</p>
                  </div>
                </div>

                <div className="mb-8 bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <i className="fas fa-clock text-[#FFD700] text-2xl mt-1"></i>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        45-Minute Strategy Session
                      </h3>
                      <p className="text-gray-300">
                        One-on-one consultation with a current MD candidate
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#FFD700] text-lg mt-1"></i>
                      <p className="text-gray-300">
                        Personalized medical school roadmap based on your
                        background
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#FFD700] text-lg mt-1"></i>
                      <p className="text-gray-300">
                        Strategic application timeline planning
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#FFD700] text-lg mt-1"></i>
                      <p className="text-gray-300">
                        Expert insights on school selection strategy
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#FFD700] text-lg mt-1"></i>
                      <p className="text-gray-300">
                        Actionable next steps for your medical journey
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-[#FFD700]/10 rounded-lg">
                    <p className="text-[#FFD700] font-semibold mb-2">
                      🌟 Limited Time Offer
                    </p>
                    <p className="text-white">
                      Book now and receive a complimentary follow-up call.
                    </p>
                  </div>
                </div>

                {step === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h2 className="text-2xl font-bold text-white font-inter mb-4 progress-step active">
                      Let's get started with your details
                    </h2>
                    <div className="space-y-4">
                      <div className="form-field rounded-md">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          required
                          className="w-full bg-black rounded-md px-4 py-3 text-white font-inter text-lg outline-none"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="form-field rounded-md">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          required
                          className="w-full bg-black rounded-md px-4 py-3 text-white font-inter text-lg outline-none"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div className="form-field rounded-md">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Enter your phone number"
                          required
                          className="w-full bg-black rounded-md px-4 py-3 text-white font-inter text-lg outline-none"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (formData.name && formData.email && formData.phone) {
                          setStep(2);
                        } else {
                          validateForm();
                        }
                      }}
                      className={`w-full bg-[#FFD700] text-black font-bold py-3 px-6 rounded-md transition-colors text-xl font-inter ${
                        formData.name && formData.email && formData.phone
                          ? "hover:bg-[#FFE44D]"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      Continue
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h2 className="text-2xl font-bold text-white font-inter mb-4 progress-step active">
                      Hi {formData.name}, tell us about your current stage
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["K-12", "Undergraduate", "Post-Graduate"].map(
                        (stage) => (
                          <button
                            key={stage}
                            onClick={() => {
                              setFormData({ ...formData, stage });
                              setStep(3);
                            }}
                            className={`option-select p-6 bg-black border rounded-lg transition-colors text-center ${
                              formData.stage === stage
                                ? "border-[#FFD700] bg-[#FFD700]/10"
                                : "border-[#FFD700]/20 hover:border-[#FFD700]"
                            }`}
                          >
                            <h3 className="text-lg font-bold text-white mb-2">
                              {stage}
                            </h3>
                          </button>
                        )
                      )}
                    </div>
                    <div className="flex justify-between gap-4">
                      <button
                        onClick={() => setStep(1)}
                        className="px-6 py-3 rounded-md border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors"
                      >
                        <i className="fas fa-arrow-left mr-2"></i>
                        Back
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        disabled={!formData.stage}
                        className={`flex-1 bg-[#FFD700] text-black font-bold py-3 px-6 rounded-md transition-colors text-xl font-inter ${
                          formData.stage
                            ? "hover:bg-[#FFE44D]"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h2 className="text-2xl font-bold text-white font-inter mb-4">
                      What's your field of study?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["Sciences", "Arts"].map((field) => (
                        <button
                          key={field}
                          onClick={() => {
                            setFormData({ ...formData, field });
                            setStep(4);
                          }}
                          className={`p-6 bg-black border rounded-lg transition-colors text-center ${
                            formData.field === field
                              ? "border-[#FFD700] bg-[#FFD700]/10"
                              : "border-[#FFD700]/20 hover:border-[#FFD700]"
                          }`}
                        >
                          <h3 className="text-lg font-bold text-white mb-2">
                            {field}
                          </h3>
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between gap-4">
                      <button
                        onClick={() => setStep(2)}
                        className="px-6 py-3 rounded-md border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors"
                      >
                        <i className="fas fa-arrow-left mr-2"></i>
                        Back
                      </button>
                      <button
                        onClick={() => setStep(4)}
                        disabled={!formData.field}
                        className={`flex-1 bg-[#FFD700] text-black font-bold py-3 px-6 rounded-md transition-colors text-xl font-inter ${
                          formData.field
                            ? "hover:bg-[#FFE44D]"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h2 className="text-2xl font-bold text-white font-inter mb-4">
                      What would you like to discuss? (Select all that apply)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "General",
                        "MCAT",
                        "CASPER",
                        "Application",
                        "Interview",
                      ].map((topic) => (
                        <button
                          key={topic}
                          onClick={() => {
                            const topics = formData.topics || [];
                            const newTopics = topics.includes(topic)
                              ? topics.filter((t) => t !== topic)
                              : [...topics, topic];
                            setFormData({ ...formData, topics: newTopics });
                          }}
                          className={`p-6 bg-black border rounded-lg transition-colors text-center ${
                            formData.topics?.includes(topic)
                              ? "border-[#FFD700] bg-[#FFD700]/10"
                              : "border-[#FFD700]/20 hover:border-[#FFD700]"
                          }`}
                        >
                          <h3 className="text-lg font-bold text-white mb-2">
                            {topic}
                          </h3>
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between gap-4">
                      <button
                        onClick={() => setStep(3)}
                        className="px-6 py-3 rounded-md border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors"
                      >
                        <i className="fas fa-arrow-left mr-2"></i>
                        Back
                      </button>
                      <button
                        onClick={() => setStep(5)}
                        disabled={!formData.topics?.length}
                        className={`flex-1 bg-[#FFD700] text-black font-bold py-3 px-6 rounded-md transition-colors text-xl font-inter ${
                          formData.topics?.length
                            ? "hover:bg-[#FFE44D]"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h2 className="text-2xl font-bold text-white font-inter mb-4">
                      When are you typically available?
                    </h2>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h3 className="text-[#FFD700] mb-3">Days</h3>
                        {["Weekday", "Weekend"].map((day) => (
                          <label key={day} className="flex items-center mb-3">
                            <input
                              type="checkbox"
                              checked={formData.availability?.days?.includes(
                                day
                              )}
                              onChange={() => {
                                const days = formData.availability?.days || [];
                                const newDays = days.includes(day)
                                  ? days.filter((d) => d !== day)
                                  : [...days, day];
                                setFormData({
                                  ...formData,
                                  availability: {
                                    ...formData.availability,
                                    days: newDays,
                                  },
                                });
                              }}
                              className="mr-2"
                            />
                            <span className="text-white">{day}</span>
                          </label>
                        ))}
                      </div>
                      <div>
                        <h3 className="text-[#FFD700] mb-3">Times</h3>
                        {["AM", "PM"].map((time) => (
                          <label key={time} className="flex items-center mb-3">
                            <input
                              type="checkbox"
                              checked={formData.availability?.times?.includes(
                                time
                              )}
                              onChange={() => {
                                const times =
                                  formData.availability?.times || [];
                                const newTimes = times.includes(time)
                                  ? times.filter((t) => t !== time)
                                  : [...times, time];
                                setFormData({
                                  ...formData,
                                  availability: {
                                    ...formData.availability,
                                    times: newTimes,
                                  },
                                });
                              }}
                              className="mr-2"
                            />
                            <span className="text-white">{time}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between gap-4">
                      <button
                        onClick={() => setStep(4)}
                        className="px-6 py-3 rounded-md border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors"
                      >
                        <i className="fas fa-arrow-left mr-2"></i>
                        Back
                      </button>
                      <button
                        onClick={() => setStep(6)}
                        disabled={
                          !formData.availability?.days?.length ||
                          !formData.availability?.times?.length
                        }
                        className={`flex-1 bg-[#FFD700] text-black font-bold py-3 px-6 rounded-md transition-colors text-xl font-inter ${
                          formData.availability?.days?.length &&
                          formData.availability?.times?.length
                            ? "hover:bg-[#FFE44D]"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {step === 6 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h2 className="text-2xl font-bold text-white font-inter mb-4">
                      Any specific questions or concerns?
                    </h2>
                    <textarea
                      name="comments"
                      rows="4"
                      placeholder="Share any specific questions or concerns you'd like to discuss..."
                      className="w-full bg-black border border-[#FFD700] rounded-md px-4 py-3 text-white font-inter"
                      value={formData.comments}
                      onChange={handleChange}
                    />
                    <div className="bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg p-4 mb-6">
                      <p className="text-white text-lg">
                        <i className="fas fa-check-circle text-[#FFD700] mr-2"></i>
                        A current MD will review your information and call you
                        to discuss your medical school journey
                      </p>
                    </div>
                    <div className="flex justify-between gap-4">
                      <button
                        onClick={() => setStep(5)}
                        className="px-6 py-3 rounded-md border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors"
                      >
                        <i className="fas fa-arrow-left mr-2"></i>
                        Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="flex-1 bg-[#FFD700] text-black font-bold py-3 px-6 rounded-md hover:bg-[#FFE44D] transition-colors text-xl font-inter"
                      >
                        Submit Request
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-[#1A1A1A] p-8 rounded-lg text-center success-animation">
              <i className="fas fa-check-circle text-[#FFD700] text-5xl mb-4"></i>
              <h2 className="text-2xl font-bold text-white font-inter mb-4">
                Thank you for booking your strategy call!
              </h2>
              <div className="space-y-4">
                <div className="bg-[#FFD700]/10 rounded-lg p-4">
                  <h3 className="text-[#FFD700] font-bold mb-2">Next Steps:</h3>
                  <ul className="text-gray-300 text-left space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-envelope-open text-[#FFD700] mt-1"></i>
                      <span>Check your email for confirmation details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-calendar-check text-[#FFD700] mt-1"></i>
                      <span>Review your calendar invitation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-phone text-[#FFD700] mt-1"></i>
                      <span>
                        Expect a call within 24 hours to confirm your
                        appointment
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-300">
                  We've sent a confirmation email to{" "}
                  <span className="text-[#FFD700]">{formData.email}</span>
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-6 px-6 py-3 bg-[#FFD700]/10 text-[#FFD700] rounded-md hover:bg-[#FFD700]/20 transition-colors"
                >
                  <i className="fas fa-redo mr-2"></i>
                  Book Another Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* <Footer /> */}
      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .step-transition {
          transition: all 0.3s ease;
        }

        .step-active {
          animation: stepActivate 0.4s ease-out;
        }

        @keyframes stepActivate {
          0% {
            transform: scale(0.9);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .input-focus-effect {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .input-focus-effect:focus {
          border-color: #ffd700;
          box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
        }

        .success-animation {
          animation: successPop 0.5s ease-out;
        }

        @keyframes successPop {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .progress-step {
          position: relative;
        }

        .progress-step::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #ffd700;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .progress-step.active::after {
          transform: scaleX(1);
        }

        .form-field {
          position: relative;
          border: 1px solid rgba(255, 215, 0, 0.1);
        }

        .form-field::after {
          content: "";
          position: absolute;
          inset: -1px;
          border: 1px solid #ffd700;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .form-field:focus-within::after {
          opacity: 1;
        }

        .option-select {
          position: relative;
          overflow: hidden;
        }

        .option-select::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 215, 0, 0.1),
            transparent
          );
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }

        .option-select:hover::before {
          transform: translateX(100%);
        }

        * {
          -webkit-tap-highlight-color: transparent;
        }

        html {
          -webkit-overflow-scrolling: touch;
        }

        button:active {
          transform: scale(0.98);
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        ::-webkit-scrollbar-thumb {
          background: #ffd700;
          border-radius: 4px;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: white;
          -webkit-box-shadow: 0 0 0px 1000px black inset;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
