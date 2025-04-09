"use client";
import React from "react";
import Header from "../../components/header";

function MainComponent() {
  const [activeProvince, setActiveProvince] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortConfig, setSortConfig] = React.useState({
    key: null,
    direction: "ascending",
  });
  const [expandedSchool, setExpandedSchool] = React.useState(null);
  const [showBookingForm, setShowBookingForm] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [compareMode, setCompareMode] = React.useState(false);
  const [selectedSchools, setSelectedSchools] = React.useState([]);
  const [showSchoolModal, setShowSchoolModal] = React.useState(false);
  const [selectedSchool, setSelectedSchool] = React.useState(null);
  const [bookingData, setBookingData] = React.useState({
    full_name: "",
    email: "",
    phone: "",
    gpa: "",
    mcat_score: "",
    university: "",
    program: "",
    year: "",
    comments: "",
  });
  const handleSchoolClick = (school) => {
    if (compareMode) {
      if (selectedSchools.includes(school)) {
        setSelectedSchools(selectedSchools.filter((s) => s !== school));
      } else if (selectedSchools.length < 3) {
        setSelectedSchools([...selectedSchools, school]);
      }
    } else {
      setSelectedSchool(school);
      setShowSchoolModal(true);
    }
  };
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowBookingForm(false);
    }
  };
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await fetch("/api/bookings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (data.success) {
        setShowBookingForm(false);
        setBookingData({
          full_name: "",
          email: "",
          phone: "",
          gpa: "",
          mcat_score: "",
          university: "",
          program: "",
          year: "",
          comments: "",
        });
      } else {
        console.error("Booking failed:", data.error);
      }
    } catch (error) {
      console.error("Error creating booking:", error);
    } finally {
      setIsProcessing(false);
    }
  };
  const provinces = {
    ontario: {
      name: "Ontario",
      color: "bg-[#12171D]",
    },
    britishColumbia: {
      name: "British Columbia",
      color: "bg-[#12171D]",
    },
    quebec: {
      name: "Quebec",
      color: "bg-[#12171D]",
    },
    alberta: {
      name: "Alberta",
      color: "bg-[#12171D]",
    },
    other: {
      name: "Other Provinces",
      color: "bg-[#12171D]",
    },
  };
  const schools = [
    {
      name: "University of Toronto - Temerty Faculty of Medicine",
      province: "ontario",
      gpa: "3.6 (competitive GPA: 3.8+)",
      mcat: "Minimum 125 in 3 of 4 sections",
      notes: "Emphasis on research and GPA",
      expanded: false,
    },
    {
      name: "McMaster University - Michael G. DeGroote School of Medicine",
      province: "ontario",
      gpa: "3.0 (competitive GPA: 3.7+)",
      mcat: "Only CARS section considered; competitive score: 127+",
      notes: "CARS, GPA, and CASPer each consist of a third of the evaluation",
      expanded: false,
    },
    {
      name: "Western University - Schulich School of Medicine & Dentistry",
      province: "ontario",
      gpa: "3.7 required in two best years",
      mcat: "Minimum BBFLS: 127, CARS: 127, CPBS: 127, PSBB: 126",
      notes: "Strong focus on leadership, research, and community service.",
      expanded: false,
    },
    {
      name: "Queen's University - School of Medicine",
      province: "ontario",
      gpa: "3.0",
      mcat: "Minimum 505 (125 in each section)",
      notes: "Lottery for interview once minimum GPA and MCAT scores are met.",
      expanded: false,
    },
    {
      name: "Northern Ontario School of Medicine (NOSM)",
      province: "ontario",
      gpa: "3.0 (competitive GPA: 3.8+)",
      mcat: "Not required",
      notes:
        "Dedicated to rural and underserved communities. Preference for students from rural communities.",
      expanded: false,
    },
    {
      name: "University of Ottawa - Faculty of Medicine",
      province: "ontario",
      gpa: "3.5 in last 3 years (competitive GPA: 3.8+)",
      mcat: "Not required",
      notes: "French stream offered. Regional preference for Ottawa.",
      expanded: false,
    },
    {
      name: "Toronto Metropolitan University - Faculty of Medicine",
      province: "ontario",
      gpa: "3.3",
      mcat: "Not required",
      notes: "Preference for students from or with a connection to Brampton.",
      expanded: false,
    },
    {
      name: "University of British Columbia - Faculty of Medicine",
      province: "britishColumbia",
      gpa: "75% (competitive: 90%+)",
      mcat: "Minimum BBFLS: 124, CARS: 124, CPBS: 124, PSBB: 124",
      notes: "Offers adjusted GPA (see website for more information).",
      expanded: false,
    },
    {
      name: "McGill University - Faculty of Medicine and Health Sciences",
      province: "quebec",
      gpa: "3.5 (competitive: 3.8+)",
      mcat: "Required for out-of-province applicants; competitive score: 510+",
      notes: "Offers bilingual English/French programs.",
      expanded: false,
    },
    {
      name: "Université de Montréal - Faculté de Médecine",
      province: "quebec",
      gpa: "R score of 32 (CEGEP students)",
      mcat: "Not required",
      notes: "French-language program.",
      expanded: false,
    },
    {
      name: "Université Laval - Faculté de Médecine",
      province: "quebec",
      gpa: "R score of 32 (CEGEP students)",
      mcat: "Not required",
      notes: "French-language program.",
      expanded: false,
    },
    {
      name: "Université de Sherbrooke - Faculté de Médecine",
      province: "quebec",
      gpa: "R score of 32 (CEGEP students)",
      mcat: "Not required",
      notes: "French-language program with a focus on collaborative medicine.",
      expanded: false,
    },
    {
      name: "University of Alberta - Faculty of Medicine & Dentistry",
      province: "alberta",
      gpa: "3.3 (competitive: 3.7+)",
      mcat: "Minimum score: 495; competitive score: 510+",
      notes: "Focus on leadership and research.",
      expanded: false,
    },
    {
      name: "University of Calgary - Cumming School of Medicine",
      province: "alberta",
      gpa: "3.2 (competitive: 3.8+)",
      mcat: "Competitive scores vary annually",
      notes: "Offers a three-year MD program.",
      expanded: false,
    },
    {
      name: "Dalhousie University - Faculty of Medicine",
      province: "other",
      gpa: "3.3 (competitive: 3.7+)",
      mcat: "Minimum BBFLS: 124, CARS: 124, CPBS: 124",
      notes: "Preference for Maritime residents.",
      expanded: false,
    },
    {
      name: "Memorial University - Faculty of Medicine",
      province: "other",
      gpa: "3.3 (competitive: 3.7+)",
      mcat: "Minimum total: 495; competitive score: 510+",
      notes: "Emphasis on rural healthcare.",
      expanded: false,
    },
    {
      name: "University of Manitoba - Max Rady College of Medicine",
      province: "other",
      gpa: "3.3 (competitive: 3.7+)",
      mcat: "Competitive scores vary annually",
      notes: "Preference for Manitoba residents.",
      expanded: false,
    },
    {
      name: "University of Saskatchewan - College of Medicine",
      province: "other",
      gpa: "3.3 (competitive: 3.7+)",
      mcat: "Competitive scores vary annually",
      notes: "Emphasis on underserved communities.",
      expanded: false,
    },
  ];
  const filteredSchools = schools.filter((school) => {
    const matchesProvince =
      activeProvince === "all" || school.province === activeProvince;
    const matchesSearch =
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.notes.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesProvince && matchesSearch;
  });
  const sortedSchools = [...filteredSchools].sort((a, b) => {
    if (!sortConfig.key) return 0;

    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });
  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "ascending"
        ? "descending"
        : "ascending";
    setSortConfig({ key, direction });
  };
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-roboto bg-black text-white">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@500&700&display=swap"
        rel="stylesheet"
      />
      <Header onGetStarted={() => setShowBookingForm(true)} />
      <main className="pt-[60px]">
        <div className="max-w-7xl mx-auto p-4 font-roboto bg-black relative">
          <h1 className="text-6xl font-bold text-center mb-8 text-white animate-slide-in">
            Medical Schools in Canada
          </h1>
          <p
            className="text-[#B0B8C2] text-center mb-8 max-w-3xl mx-auto animate-slide-in"
            style={{ animationDelay: "0.2s" }}
          >
            Below are the minimum requirements for medical schools in Canada.
            Keep in mind, these requirements are subject to change. To be truly
            competitive, you'll typically need a GPA of 3.9+, a 128+ on the MCAT
            CARS section, and standout extracurriculars tailored to your unique
            strengths and passions.
          </p>
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search schools..."
              className="w-full p-3 border-2 border-[#F4C542] rounded-lg shadow-md bg-[#12171D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD644] focus:border-[#FFD644] transition-all search-focus"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveProvince("all")}
              className={`px-4 py-2 rounded-lg transition-all filter-tag ${
                activeProvince === "all"
                  ? "bg-[#F4C542] text-black hover:bg-[#E3B43C]"
                  : "border border-[#F4C542] text-white hover:bg-[#F4C542] hover:text-black"
              }`}
            >
              All Provinces
            </button>
            {Object.entries(provinces).map(([key, { name }]) => (
              <button
                key={key}
                onClick={() => setActiveProvince(key)}
                className={`px-4 py-2 rounded-lg transition-all filter-tag ${
                  activeProvince === key
                    ? "bg-[#F4C542] text-black hover:bg-[#E3B43C]"
                    : "border border-[#F4C542] text-white hover:bg-[#F4C542] hover:text-black"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto rounded-lg shadow-lg directory-card">
            <table className="w-full border-collapse bg-[#12171D]">
              <thead className="bg-[#0A0E12] text-white border-b border-[#1C252E]">
                <tr>
                  {compareMode && (
                    <th className="p-4 text-left rounded-tl-lg">Select</th>
                  )}
                  <th
                    className={`p-4 text-left ${
                      !compareMode ? "rounded-tl-lg" : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <i className="fas fa-graduation-cap mr-2 text-[#F4C542]"></i>
                      School Name
                    </div>
                  </th>
                  <th className="p-4 text-left">
                    <div className="flex items-center">
                      <i className="fas fa-calculator mr-2 text-[#F4C542]"></i>
                      GPA Requirement
                    </div>
                  </th>
                  <th className="p-4 text-left">
                    <div className="flex items-center">
                      <i className="fas fa-book mr-2 text-[#F4C542]"></i>
                      MCAT Requirement
                    </div>
                  </th>
                  <th className="p-4 text-left rounded-tr-lg">
                    <div className="flex items-center">
                      <i className="fas fa-info-circle mr-2 text-[#F4C542]"></i>
                      Additional Notes
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedSchools.map((school, index) => (
                  <tr
                    key={school.name}
                    className={`border-b border-[#1C252E] hover:bg-[#1C252E] transition-all cursor-pointer bg-[#12171D] directory-card ${
                      compareMode && selectedSchools.includes(school)
                        ? "bg-[#1C252E]"
                        : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleSchoolClick(school)}
                  >
                    {compareMode && (
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={selectedSchools.includes(school)}
                          onChange={() => handleSchoolClick(school)}
                          className="w-5 h-5 rounded border-[#F4C542] text-[#F4C542] focus:ring-[#F4C542]"
                        />
                      </td>
                    )}
                    <td className="p-4 font-medium text-white">
                      {school.name}
                    </td>
                    <td className="p-4 text-white">{school.gpa}</td>
                    <td className="p-4 text-white">{school.mcat}</td>
                    <td className="p-4 text-white">{school.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {compareMode && selectedSchools.length > 0 && (
            <div className="mt-8 p-6 bg-[#12171D] rounded-lg border border-[#F4C542] animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-4">Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedSchools.map((school) => (
                  <div
                    key={school.name}
                    className="p-4 bg-[#0F141A] rounded-lg"
                  >
                    <h4 className="text-lg font-bold text-[#F4C542] mb-2">
                      {school.name}
                    </h4>
                    <p className="text-white">
                      <span className="font-semibold">GPA:</span> {school.gpa}
                    </p>
                    <p className="text-white">
                      <span className="font-semibold">MCAT:</span> {school.mcat}
                    </p>
                    <p className="text-white text-sm mt-2">{school.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div
            className="mt-8 p-4 bg-[#12171D] rounded-lg border border-[#FFD644]/20 animate-slide-in"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-[#B0B8C2] flex items-center justify-center">
              <i className="fas fa-info-circle mr-2 text-[#FFD644]"></i>
              Note: Requirements may change. Please verify with individual
              schools.
            </p>
          </div>
          <div
            className="mt-16 text-center animate-slide-in"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Excel?
            </h3>
            <p className="text-lg text-[#B0B8C2] mb-8">
              Get personalized guidance for your academic journey
            </p>
            <button
              onClick={() => setShowBookingForm(true)}
              className="bg-[#F4C542] text-black px-8 py-4 rounded-md text-lg font-bold hover:bg-[#E3B43C] transition-all"
            >
              Book Your Consultation
              {/* ($99) */}
            </button>
          </div>

          {showBookingForm && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50 animate-fade-in"
              onClick={handleBackgroundClick}
            >
              <div
                className="bg-[#12171D] p-8 rounded-xl max-w-lg w-full border border-[#F4C542] shadow-lg transform transition-all duration-300 ease-out animate-fade-in my-8 mx-4 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold text-white mb-4 text-center">
                  Book Your 45-Minute MD Consultation
                </h2>
                <div className="mb-6 space-y-2">
                  <p className="text-[#B0B8C2] text-center">
                    Get expert guidance on:
                  </p>
                  <ul className="text-[#B0B8C2] list-disc list-inside space-y-1 text-sm text-center">
                    <li>Application strategy review</li>
                    <li>School selection guidance</li>
                    <li>Personal statement feedback</li>
                    <li>Interview preparation tips</li>
                  </ul>
                </div>
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="full_name"
                    placeholder="Full Name"
                    value={bookingData.full_name}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        full_name: e.target.value,
                      })
                    }
                    className="w-full p-3 bg-[#1C252E] border border-[#F4C542] rounded-lg text-white placeholder-[#B0B8C2] focus:ring-2 focus:ring-[#F4C542]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={bookingData.email}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, email: e.target.value })
                    }
                    className="w-full p-3 bg-[#1C252E] border border-[#F4C542] rounded-lg text-white placeholder-[#B0B8C2] focus:ring-2 focus:ring-[#F4C542]"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={bookingData.phone}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, phone: e.target.value })
                    }
                    className="w-full p-3 bg-[#1C252E] border border-[#F4C542] rounded-lg text-white placeholder-[#B0B8C2] focus:ring-2 focus:ring-[#F4C542]"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="gpa"
                      placeholder="GPA"
                      value={bookingData.gpa}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, gpa: e.target.value })
                      }
                      className="w-full p-3 bg-[#1C252E] border border-[#F4C542] rounded-lg text-white placeholder-[#B0B8C2]"
                    />
                    <select
                      name="mcat_score"
                      value={bookingData.mcat_score}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          mcat_score: e.target.value,
                        })
                      }
                      className="w-full p-3 bg-[#1C252E] border border-[#F4C542] rounded-lg text-white focus:ring-2 focus:ring-[#F4C542]"
                    >
                      <option value="">MCAT Score</option>
                      <option value="Not Taken">Not Taken</option>
                      <option value="500+">500+</option>
                      <option value="510+">510+</option>
                      <option value="520+">520+</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="university"
                    placeholder="University"
                    value={bookingData.university}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        university: e.target.value,
                      })
                    }
                    className="w-full p-3 bg-[#1C252E] border border-[#F4C542] rounded-lg text-white placeholder-[#B0B8C2]"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="program"
                      placeholder="Program"
                      value={bookingData.program}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          program: e.target.value,
                        })
                      }
                      className="w-full p-3 bg-[#1C252E] border border-[#F4C542] rounded-lg text-white placeholder-[#B0B8C2]"
                    />
                    <input
                      type="text"
                      name="year"
                      placeholder="Year"
                      value={bookingData.year}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, year: e.target.value })
                      }
                      className="w-full p-3 bg-[#1C252E] border border-[#F4C542] rounded-lg text-white placeholder-[#B0B8C2]"
                    />
                  </div>
                  <textarea
                    name="comments"
                    placeholder="Comments (Optional)"
                    value={bookingData.comments}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        comments: e.target.value,
                      })
                    }
                    className="w-full p-3 bg-[#1C252E] border border-[#F4C542] rounded-lg text-white placeholder-[#B0B8C2] min-h-[100px] focus:ring-2 focus:ring-[#F4C542]"
                  ></textarea>
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-[#F4C542] text-black py-4 rounded-lg font-bold hover:bg-[#E3B43C] disabled:opacity-50 transition-all"
                    >
                      {isProcessing ? "Processing..." : "Book Consultation"}
                    </button>
                  </div>
                </form>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="mt-4 w-full text-[#B0B8C2] hover:text-white transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {showSchoolModal && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50 animate-fade-in"
              onClick={() => setShowSchoolModal(false)}
            >
              <div
                className="bg-[#12171D] p-8 rounded-xl max-w-4xl w-full border border-[#F4C542] shadow-lg transform transition-all duration-300 ease-out animate-fade-in my-8 mx-4 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedSchool && (
                  <div className="text-white">
                    <h2 className="text-3xl font-bold mb-6">
                      {selectedSchool.name}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#F4C542]">
                          Admission Requirements
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <span className="font-semibold">GPA:</span>{" "}
                            {selectedSchool.gpa}
                          </li>
                          <li>
                            <span className="font-semibold">MCAT:</span>{" "}
                            {selectedSchool.mcat}
                          </li>
                          <li>
                            <span className="font-semibold">
                              Additional Info:
                            </span>{" "}
                            {selectedSchool.notes}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#F4C542]">
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          <li>Application Deadline: October 1, 2025</li>
                          <li>Program Duration: 4 years</li>
                          <li>Class Size: ~100 students</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href={`https://www.${selectedSchool.name
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "")}.edu`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#F4C542] text-black px-6 py-3 rounded-md font-bold hover:bg-[#E3B43C] transition-all"
                      >
                        Visit Website
                      </a>
                      <button
                        onClick={() => (window.location.href = "/consultation")}
                        className="border border-[#F4C542] text-white px-6 py-3 rounded-md font-bold hover:bg-[#F4C542] hover:text-black transition-all"
                      >
                        Get Application Help
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        /* Search bar focus animation */
        .search-focus {
          transition: all 0.3s ease;
        }

        .search-focus:focus {
          transform: scale(1.02);
          box-shadow: 0 0 20px rgba(255, 215, 0);
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
