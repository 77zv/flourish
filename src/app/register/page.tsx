"use client";

import { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { api } from "~/trpc/react";

// Define types for the backend schema
type GradeLevel = 
  | "GRADE_1" | "GRADE_2" | "GRADE_3" | "GRADE_4" | "GRADE_5" | "GRADE_6" 
  | "GRADE_7" | "GRADE_8" | "GRADE_9" | "GRADE_10" | "GRADE_11" | "GRADE_12" 
  | "FRESHMAN" | "SOPHOMORE" | "JUNIOR" | "SENIOR" | "POSTGRADUATE" | "PROFESSIONAL";

type Subject = 
  | "MATHEMATICS" | "CHEMISTRY" | "BIOLOGY" | "PHYSICS" 
  | "BIOCHEMISTRY" | "ENGLISH" | "CODING" | "OTHER";

type FormData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  gradeLevel: string;
  subjects: string[];
  virtualClasses: string;
  inPersonClasses: string;
  classesPerWeek: string;
  comments: string;
};

const gradeOptions = [
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
  "Freshman",
  "Sophomore",
  "Junior",
  "Senior",
  "Postgraduate",
  "Professional",
];

const subjectOptions = [
  { key: "A", value: "Mathematics" },
  { key: "B", value: "Chemistry" },
  { key: "C", value: "Biology" },
  { key: "D", value: "Physics" },
  { key: "E", value: "Biochemistry" },
  { key: "F", value: "English" },
  { key: "G", value: "Coding" },
  { key: "H", value: "Other" },
];

// const classesPerWeekOptions = ["1", "2", "3", "4", "5", "6", "7"];
const MAX_CLASSES_PER_WEEK = 7;

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [showErrors, setShowErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    mode: "onTouched",
    reValidateMode: "onSubmit",
  });
  const lastStepChangeRef = useRef(0);
  const submitFormMutation = api.user.submitForm.useMutation({
    onSuccess: () => {
      setIsSubmitting(false);
      setSubmitError(null);
      nextStep();
    },
    onError: (error) => {
      setIsSubmitting(false);
      setSubmitError(error.message || "Failed to submit form. Please try again.");
    },
  });

  // Monitor current step changes
  useEffect(() => {
    console.log("Current step changed to:", currentStep);
  }, [currentStep]);

  useEffect(() => {
    // Small delay to ensure smooth initial mount
    const timer = setTimeout(() => {
      // Just for timing purposes, no state needed
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Update the subjects value in the form when selectedSubjects changes
  useEffect(() => {
    setValue("subjects", selectedSubjects);
  }, [selectedSubjects, setValue]);

  const nextStep = async () => {
    // Prevent duplicate transitions by checking last execution time
    const now = Date.now();
    if (now - lastStepChangeRef.current < 500) {
      console.log("Prevented duplicate step change");
      return;
    }

    setShowErrors(true); // Show errors when user attempts to proceed

    // Validate current step before proceeding
    let isValid = true;
    switch (currentStep) {
      case 1:
        isValid = await trigger(["firstName", "lastName", "phoneNumber"]);
        break;
      case 2:
        isValid = await trigger("email");
        break;
      case 3:
        isValid = await trigger("gradeLevel");
        break;
      case 4:
        isValid = selectedSubjects.length > 0;
        break;
      case 5:
        isValid = await trigger("virtualClasses");
        break;
      case 6:
        isValid = await trigger("inPersonClasses");
        break;
      case 7:
        isValid = await trigger("classesPerWeek");
        break;
    }

    if (!isValid) {
      return;
    }

    setShowErrors(false); // Reset error display for next step
    lastStepChangeRef.current = now;
    setCurrentStep((prev) => prev + 1);
    console.log("Moving to step:", currentStep + 1);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      
      // Convert form data to match the backend schema
      const formattedData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        gradeLevel: data.gradeLevel.toUpperCase().replace(" ", "_") as GradeLevel,
        subjects: data.subjects.map(subject => 
          subject.toUpperCase().replace(" ", "_")
        ) as Subject[],
        virtualClasses: data.virtualClasses === "Yes",
        inPersonClasses: data.inPersonClasses === "Yes",
        classesPerWeek: parseInt(data.classesPerWeek),
        comments: data.comments || "",
      };
      
      // Submit the form data to the backend
      await submitFormMutation.mutateAsync(formattedData);
      
      // The nextStep will be called in the onSuccess callback
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      setSubmitError("An unexpected error occurred. Please try again.");
    }
  };

  // Instead of an array of JSX elements, let's use a function to render the current step
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              exit: { duration: 1.2 },
            }}
            className="flex flex-col items-center justify-center text-center"
          >
            <motion.h1
              className="text-6xl font-bold mb-4 text-[#171717]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            >
              Flourish Institute
            </motion.h1>

            <motion.p
              className="text-xl mb-8 text-[#333333]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.7 }}
            >
              We turn the dreams of our students into a reality.
            </motion.p>

            <motion.button
              className="bg-[#036450] text-white px-8 py-3 rounded hover:bg-opacity-90 transition-all font-black text-shadow-sm"
              style={{ fontWeight: 900, letterSpacing: "0.02em" }}
              onClick={nextStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 1.1 }}
              type="button"
            >
              <span className="tracking-wide">Get Started</span>
            </motion.button>

            <motion.div
              className="mt-4 flex items-center text-[#555555]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 1.3 }}
            >
              <motion.div
                className="relative w-3 h-3 inline-flex justify-center items-center rounded-full border border-[#555555] mr-2"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <motion.div
                  className="absolute top-[3px] bg-[#555555] w-[1px] h-[3px] origin-bottom"
                  style={{ transformOrigin: "bottom center" }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute top-[4px] bg-[#555555] w-[0.5px] h-[2px] origin-bottom"
                  style={{ transformOrigin: "bottom center" }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
              <span>Takes 1 minute</span>
            </motion.div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            key="personal-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              exit: { duration: 1.2 },
            }}
            className="w-full max-w-lg"
          >
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <span className="text-[#036450] mr-2">1→</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#171717]">
                Let&apos;s Get Started
              </h2>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <p className="text-gray-600">
                Some basic information so we know how to address you.
              </p>
            </motion.div>

            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <label className="block mb-2 font-medium">
                Student first name*
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                className={`w-full p-2 border-b-2 ${
                  errors.firstName && showErrors
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:border-[#036450] outline-none text-xl text-gray-700 bg-white`}
                placeholder="Jane"
                style={{ color: "#333333" }}
              />
              {errors.firstName && showErrors && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </motion.div>

            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            >
              <label className="block mb-2 font-medium">
                Student last name*
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className={`w-full p-2 border-b-2 ${
                  errors.lastName && showErrors
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:border-[#036450] outline-none text-xl text-gray-700 bg-white`}
                placeholder="Smith"
                style={{ color: "#333333" }}
              />
              {errors.lastName && showErrors && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </motion.div>

            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            >
              <label className="block mb-2 font-medium">Phone number*</label>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <div>
                    <PhoneInput
                      country={"ca"}
                      value={field.value}
                      onChange={field.onChange}
                      inputClass={`w-full p-2 border-b-2 ${
                        errors.phoneNumber && showErrors
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:border-[#036450] outline-none text-xl text-gray-700 bg-white`}
                      containerClass="w-full"
                      buttonClass={`border ${
                        errors.phoneNumber && showErrors
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded`}
                      dropdownClass="bg-white border border-gray-300 rounded shadow-lg"
                      searchClass="w-full p-2 border-b border-gray-300"
                      enableSearch={true}
                      disableSearchIcon={true}
                      searchPlaceholder="Search country..."
                      inputProps={{
                        placeholder: "Phone number",
                        style: { color: "#333333" },
                      }}
                    />
                    {errors.phoneNumber && showErrors && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
            >
              <motion.button
                onClick={nextStep}
                className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90 font-black text-shadow-sm"
                style={{ fontWeight: 900, letterSpacing: "0.02em" }}
                type="button"
              >
                <span className="tracking-wide">OK</span>
              </motion.button>
            </motion.div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="email"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              exit: { duration: 1.2 },
            }}
            className="w-full max-w-lg"
          >
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <span className="text-[#036450] mr-2">2→</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#171717]">
                What is your email?*
              </h2>
            </motion.div>

            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full p-2 border-b-2 ${
                  errors.email && showErrors
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:border-[#036450] outline-none text-xl text-gray-700 bg-white`}
                placeholder="name@example.com"
                type="email"
                style={{ color: "#333333" }}
              />
              {errors.email && showErrors && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              <motion.button
                onClick={nextStep}
                className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90 font-black text-shadow-sm"
                style={{ fontWeight: 900, letterSpacing: "0.02em" }}
                type="button"
              >
                <span className="tracking-wide">OK</span>
              </motion.button>
            </motion.div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="grade-level"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              exit: { duration: 1.2 },
            }}
            className="w-full max-w-lg"
          >
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <span className="text-[#036450] mr-2">3→</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#171717]">
                What grade level is the student*
              </h2>
            </motion.div>

            <motion.div
              className="mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <Controller
                name="gradeLevel"
                control={control}
                rules={{ required: "Grade level is required" }}
                render={({ field }) => (
                  <>
                    <div className="relative">
                      <input
                        {...field}
                        className={`w-full p-2 border-b-2 ${
                          errors.gradeLevel && showErrors
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:border-[#036450] outline-none text-xl text-gray-700 bg-white`}
                        placeholder="Type or select an option"
                        autoComplete="off"
                        onClick={() =>
                          document
                            .getElementById("dropdown")
                            ?.classList.toggle("hidden")
                        }
                      />
                      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700">
                        ▼
                      </span>
                    </div>
                    <div
                      id="dropdown"
                      className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto hidden"
                    >
                      {gradeOptions.map((option, index) => (
                        <div
                          key={index}
                          className="p-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                          onClick={() => {
                            field.onChange(option);
                            document
                              .getElementById("dropdown")
                              ?.classList.add("hidden");
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                    {errors.gradeLevel && showErrors && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.gradeLevel.message}
                      </p>
                    )}
                  </>
                )}
              />
            </motion.div>

            <motion.button
              onClick={nextStep}
              className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90 font-black text-shadow-sm"
              style={{ fontWeight: 900, letterSpacing: "0.02em" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              type="button"
            >
              OK
            </motion.button>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="subjects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              exit: { duration: 1.2 },
            }}
            className="w-full max-w-lg"
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#171717]">
                Which subjects you seek to develop*
              </h2>
              <p className="text-gray-600">
                We support all levels of education.
              </p>
              <p className="text-sm text-[#036450] mt-2">
                Choose as many as you like
              </p>
            </motion.div>

            <motion.div
              className="mb-6 grid grid-cols-1 gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              {subjectOptions.map((subject) => (
                <div
                  key={subject.key}
                  className="border border-gray-200 rounded p-3 cursor-pointer hover:border-[#036450] flex items-center bg-white text-gray-700"
                  onClick={() => {
                    const newSelected = selectedSubjects.includes(subject.value)
                      ? selectedSubjects.filter((s) => s !== subject.value)
                      : [...selectedSubjects, subject.value];
                    setSelectedSubjects(newSelected);
                  }}
                >
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 mr-3 border rounded ${
                      selectedSubjects.includes(subject.value)
                        ? "bg-[#036450] text-white border-[#036450]"
                        : "border-gray-300"
                    }`}
                  >
                    {subject.key}
                  </span>
                  {subject.value}
                </div>
              ))}
            </motion.div>

            {selectedSubjects.length === 0 && showErrors && (
              <p className="mt-1 text-sm text-red-500">
                Please select at least one subject
              </p>
            )}

            <motion.button
              onClick={() => {
                // Register subjects with the form before proceeding
                setValue("subjects", selectedSubjects);
                nextStep();
              }}
              className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90 font-black text-shadow-sm"
              style={{ fontWeight: 900, letterSpacing: "0.02em" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              type="button"
            >
              OK
            </motion.button>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="virtual-classes"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              exit: { duration: 1.2 },
            }}
            className="w-full max-w-lg"
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#171717]">
                Do you want virtual classes*
              </h2>
              <p className="text-gray-600">
                Get coaching from a teacher across the globe.
              </p>
            </motion.div>

            <motion.div
              className="mb-6 grid grid-cols-1 gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <Controller
                name="virtualClasses"
                control={control}
                rules={{ required: "Please select an option" }}
                render={({ field }) => (
                  <>
                    <div
                      className={`border ${
                        errors.virtualClasses && showErrors
                          ? "border-red-500"
                          : "border-gray-200"
                      } rounded p-3 cursor-pointer hover:border-[#036450] flex items-center bg-white text-gray-700`}
                      onClick={() => field.onChange("Yes")}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 mr-3 border rounded ${
                          field.value === "Yes"
                            ? "bg-[#036450] text-white border-[#036450]"
                            : "border-gray-300"
                        }`}
                      >
                        Y
                      </span>
                      Yes
                    </div>
                    <div
                      className={`border ${
                        errors.virtualClasses && showErrors
                          ? "border-red-500"
                          : "border-gray-200"
                      } rounded p-3 cursor-pointer hover:border-[#036450] flex items-center bg-white text-gray-700`}
                      onClick={() => field.onChange("No")}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 mr-3 border rounded ${
                          field.value === "No"
                            ? "bg-[#036450] text-white border-[#036450]"
                            : "border-gray-300"
                        }`}
                      >
                        N
                      </span>
                      No
                    </div>
                    {errors.virtualClasses && showErrors && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.virtualClasses.message}
                      </p>
                    )}
                  </>
                )}
              />
            </motion.div>

            <motion.button
              onClick={nextStep}
              className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90 font-black text-shadow-sm"
              style={{ fontWeight: 900, letterSpacing: "0.02em" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              type="button"
            >
              OK
            </motion.button>
          </motion.div>
        );

      case 6:
        return (
          <motion.div
            key="in-person-classes"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              exit: { duration: 1.2 },
            }}
            className="w-full max-w-lg"
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#171717]">
                Do you want in-person classes*
              </h2>
              <p className="text-gray-600">
                We run our live sessions in North York, Toronto
              </p>
            </motion.div>

            <motion.div
              className="mb-6 grid grid-cols-1 gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <Controller
                name="inPersonClasses"
                control={control}
                render={({ field }) => (
                  <>
                    <div
                      className={`border ${
                        errors.inPersonClasses && showErrors
                          ? "border-red-500"
                          : "border-gray-200"
                      } rounded p-3 cursor-pointer hover:border-[#036450] flex items-center bg-white text-gray-700`}
                      onClick={() => field.onChange("Yes")}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 mr-3 border rounded ${
                          field.value === "Yes"
                            ? "bg-[#036450] text-white border-[#036450]"
                            : "border-gray-300"
                        }`}
                      >
                        Y
                      </span>
                      Yes
                    </div>
                    <div
                      className={`border ${
                        errors.inPersonClasses && showErrors
                          ? "border-red-500"
                          : "border-gray-200"
                      } rounded p-3 cursor-pointer hover:border-[#036450] flex items-center bg-white text-gray-700`}
                      onClick={() => field.onChange("No")}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 mr-3 border rounded ${
                          field.value === "No"
                            ? "bg-[#036450] text-white border-[#036450]"
                            : "border-gray-300"
                        }`}
                      >
                        N
                      </span>
                      No
                    </div>
                  </>
                )}
              />
            </motion.div>

            <motion.button
              onClick={nextStep}
              className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90 font-black text-shadow-sm"
              style={{ fontWeight: 900, letterSpacing: "0.02em" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              type="button"
            >
              OK
            </motion.button>
          </motion.div>
        );

      case 7:
        return (
          <motion.div
            key="classes-per-week"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              exit: { duration: 1.2 },
            }}
            className="w-full max-w-lg"
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#171717]">
                How many classes/week interest you?*
              </h2>
            </motion.div>

            <motion.div
              className="mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <Controller
                name="classesPerWeek"
                control={control}
                rules={{ required: "Please select the number of classes" }}
                render={({ field }) => (
                  <>
                    <div className="relative">
                      <input
                        {...field}
                        className={`w-full p-2 border-b-2 ${
                          errors.classesPerWeek && showErrors
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:border-[#036450] outline-none text-xl text-gray-700 bg-white`}
                        placeholder="Type or select an option"
                        autoComplete="off"
                        onClick={() =>
                          document
                            .getElementById("classes-dropdown")
                            ?.classList.toggle("hidden")
                        }
                      />
                      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700">
                        ▼
                      </span>
                    </div>
                    <div
                      id="classes-dropdown"
                      className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto hidden"
                    >
                      {Array.from(
                        { length: MAX_CLASSES_PER_WEEK },
                        (_, index) => (
                          <div
                            key={index}
                            className="p-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                            onClick={() => {
                              field.onChange(index + 1);
                              document
                                .getElementById("classes-dropdown")
                                ?.classList.add("hidden");
                            }}
                          >
                            {index + 1}
                          </div>
                        )
                      )}
                    </div>
                    {errors.classesPerWeek && showErrors && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.classesPerWeek.message}
                      </p>
                    )}
                  </>
                )}
              />
            </motion.div>

            <motion.button
              onClick={nextStep}
              className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90 font-black text-shadow-sm"
              style={{ fontWeight: 900, letterSpacing: "0.02em" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              type="button"
            >
              OK
            </motion.button>
          </motion.div>
        );

      case 8:
        return (
          <motion.div
            key="comments"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              exit: { duration: 1.2 },
            }}
            className="w-full max-w-lg"
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#171717]">
                Any comments or questions?
              </h2>
            </motion.div>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <textarea
                {...register("comments")}
                className="w-full p-3 border border-gray-300 rounded focus:border-[#036450] outline-none min-h-[100px] text-gray-700 bg-white"
                placeholder="Your comments here..."
              />
            </motion.div>

            {submitError && (
              <motion.div
                className="mb-4 p-3 bg-red-100 text-red-700 rounded"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitError}
              </motion.div>
            )}

            <motion.button
              onClick={handleSubmit(onSubmit)}
              className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90 font-black text-shadow-sm"
              style={{ fontWeight: 900, letterSpacing: "0.02em" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </motion.button>
          </motion.div>
        );

      case 9:
        return (
          <motion.div
            key="thank-you"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              exit: { duration: 1.2 },
            }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-6 text-[#171717]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Thank you!
            </motion.h1>

            <motion.p
              className="text-xl mb-4 text-[#333333]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              We&apos;ll be in touch with you shortly.
            </motion.p>

            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              Your journey with Flourish Institute is about to begin!
            </motion.p>
          </motion.div>
        );

      default:
        return null; // If somehow we get an invalid step, just return nothing
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl">
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => console.log("Exit animation completed")}
          >
            <div key={`step-${currentStep}`}>{renderCurrentStep()}</div>
          </AnimatePresence>
        </motion.div>
      </form>
    </div>
  );
}
