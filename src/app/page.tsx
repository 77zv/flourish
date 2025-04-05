"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

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
  "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8",
  "Grade 9", "Grade 10", "Grade 11", "Grade 12", "Freshman", "Sophomore", "Junior", "Senior",
  "Postgraduate", "Professional"
];

const subjectOptions = [
  { key: "A", value: "Mathematics" },
  { key: "B", value: "Chemistry" },
  { key: "C", value: "Biology" },
  { key: "D", value: "Physics" },
  { key: "E", value: "Biochemistry" },
  { key: "F", value: "English" },
  { key: "G", value: "Coding" },
  { key: "H", value: "Other" }
];

const classesPerWeekOptions = ["1", "2", "3", ">3"];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const { register, control, handleSubmit } = useForm<FormData>();

  useEffect(() => {
    // Small delay to ensure smooth initial mount
    const timer = setTimeout(() => {
      // Just for timing purposes, no state needed
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    nextStep();
  };

  const formSteps = [
    // Step 0: Welcome screen
    <motion.div
      key="welcome"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ 
        duration: 0.9, 
        ease: "easeOut",
        exit: { duration: 1.2 }
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
        className="bg-[#036450] text-white px-8 py-3 rounded hover:bg-opacity-90 transition-all"
        onClick={nextStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 1.1 }}
      >
        Get Started
        <span className="ml-2 text-xs">press Enter ↵</span>
      </motion.button>
      
      <motion.div 
        className="mt-4 flex items-center text-[#555555]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 1.3 }}
      >
        <span className="inline-block w-3 h-3 bg-[#555555] rounded-full mr-2"></span>
        <span>Takes 1 minute</span>
      </motion.div>
    </motion.div>,

    // Step 1: Personal info
    <motion.div
      key="personal-info"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        exit: { duration: 1.2 }
      }}
      className="w-full max-w-lg"
    >
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-[#171717]">Let&apos;s Get Started</h2>
        <p className="text-gray-600">Some basic information so we know how to address you.</p>
      </motion.div>
      
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <label className="block mb-2 text-[#333333]">First name</label>
        <input
          {...register("firstName")}
          className="w-full p-2 border-b-2 border-gray-300 focus:border-[#036450] outline-none text-xl text-gray-700 bg-white"
          placeholder="Jane"
        />
      </motion.div>
      
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        <label className="block mb-2 text-[#333333]">Last name</label>
        <input
          {...register("lastName")}
          className="w-full p-2 border-b-2 border-gray-300 focus:border-[#036450] outline-none text-xl text-gray-700 bg-white"
          placeholder="Smith"
        />
      </motion.div>
      
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
      >
        <label className="block mb-2 text-[#333333]">Phone number</label>
        <div className="flex">
          <div className="mr-2 p-2 border border-gray-300 rounded">
            <span className="flex items-center">
              <span className="inline-block w-6 h-4 bg-red-500 relative overflow-hidden rounded">
                <span className="absolute inset-0 flex justify-center items-center text-white text-xs">🍁</span>
              </span>
              <span className="ml-1">▼</span>
            </span>
          </div>
          <input
            {...register("phoneNumber")}
            className="flex-1 p-2 border-b-2 border-gray-300 focus:border-[#036450] outline-none text-xl text-gray-700 bg-white"
            placeholder="(506) 234-5678"
          />
        </div>
      </motion.div>
      
      <motion.button
        onClick={nextStep}
        className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
      >
        OK
        <span className="ml-2 text-xs">press Enter ↵</span>
      </motion.button>
    </motion.div>,

    // Step 2: Email
    <motion.div
      key="email"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        exit: { duration: 1.2 }
      }}
      className="w-full max-w-lg"
    >
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-[#171717]">What is your email?*</h2>
      </motion.div>
      
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <input
          {...register("email")}
          className="w-full p-2 border-b-2 border-gray-300 focus:border-[#036450] outline-none text-xl text-gray-700 bg-white"
          placeholder="name@example.com"
          type="email"
        />
      </motion.div>
      
      <motion.button
        onClick={nextStep}
        className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        OK
        <span className="ml-2 text-xs">press Enter ↵</span>
      </motion.button>
    </motion.div>,

    // Step 3: Grade level
    <motion.div
      key="grade-level"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        exit: { duration: 1.2 }
      }}
      className="w-full max-w-lg"
    >
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-[#171717]">What grade level is the student*</h2>
        <p className="text-gray-600">We support all levels of education.</p>
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
          render={({ field }) => (
            <>
              <div className="relative">
                <input
                  {...field}
                  className="w-full p-2 border-b-2 border-gray-300 focus:border-[#036450] outline-none text-xl text-gray-700 bg-white"
                  placeholder="Type or select an option"
                  autoComplete="off"
                  onClick={() => document.getElementById('dropdown')?.classList.toggle('hidden')}
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700">▼</span>
              </div>
              <div id="dropdown" className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto hidden">
                {gradeOptions.map((option, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                    onClick={() => {
                      field.onChange(option);
                      document.getElementById('dropdown')?.classList.add('hidden');
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </>
          )}
        />
      </motion.div>
      
      <motion.button
        onClick={nextStep}
        className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        OK
      </motion.button>
    </motion.div>,

    // Step 4: Subjects
    <motion.div
      key="subjects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        exit: { duration: 1.2 }
      }}
      className="w-full max-w-lg"
    >
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-[#171717]">Which subjects you seek to develop*</h2>
        <p className="text-gray-600">We support all levels of education.</p>
        <p className="text-sm text-[#036450] mt-2">Choose as many as you like</p>
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
                ? selectedSubjects.filter(s => s !== subject.value)
                : [...selectedSubjects, subject.value];
              setSelectedSubjects(newSelected);
            }}
          >
            <span className={`inline-flex items-center justify-center w-6 h-6 mr-3 border rounded ${
              selectedSubjects.includes(subject.value) ? 'bg-[#036450] text-white border-[#036450]' : 'border-gray-300'
            }`}>
              {subject.key}
            </span>
            {subject.value}
          </div>
        ))}
      </motion.div>
      
      <motion.button
        onClick={() => {
          nextStep();
        }}
        className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        OK
        <span className="ml-2 text-xs">press Enter ↵</span>
      </motion.button>
    </motion.div>,

    // Step 5: Virtual classes
    <motion.div
      key="virtual-classes"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        exit: { duration: 1.2 }
      }}
      className="w-full max-w-lg"
    >
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-[#171717]">Do you want virtual classes*</h2>
        <p className="text-gray-600">Get coaching from a teacher across the globe.</p>
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
          render={({ field }) => (
            <>
              <div 
                className="border border-gray-200 rounded p-3 cursor-pointer hover:border-[#036450] flex items-center bg-white text-gray-700"
                onClick={() => field.onChange("Yes")}
              >
                <span className={`inline-flex items-center justify-center w-6 h-6 mr-3 border rounded ${
                  field.value === "Yes" ? 'bg-[#036450] text-white border-[#036450]' : 'border-gray-300'
                }`}>
                  Y
                </span>
                Yes
              </div>
              <div 
                className="border border-gray-200 rounded p-3 cursor-pointer hover:border-[#036450] flex items-center bg-white text-gray-700"
                onClick={() => field.onChange("No")}
              >
                <span className={`inline-flex items-center justify-center w-6 h-6 mr-3 border rounded ${
                  field.value === "No" ? 'bg-[#036450] text-white border-[#036450]' : 'border-gray-300'
                }`}>
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
        className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        OK
      </motion.button>
    </motion.div>,

    // Step 6: In-person classes
    <motion.div
      key="in-person-classes"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        exit: { duration: 1.2 }
      }}
      className="w-full max-w-lg"
    >
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-[#171717]">Do you want in-person classes*</h2>
        <p className="text-gray-600">We run our live sessions in North York, Toronto</p>
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
                className="border border-gray-200 rounded p-3 cursor-pointer hover:border-[#036450] flex items-center bg-white text-gray-700"
                onClick={() => field.onChange("Yes")}
              >
                <span className={`inline-flex items-center justify-center w-6 h-6 mr-3 border rounded ${
                  field.value === "Yes" ? 'bg-[#036450] text-white border-[#036450]' : 'border-gray-300'
                }`}>
                  Y
                </span>
                Yes
              </div>
              <div 
                className="border border-gray-200 rounded p-3 cursor-pointer hover:border-[#036450] flex items-center bg-white text-gray-700"
                onClick={() => field.onChange("No")}
              >
                <span className={`inline-flex items-center justify-center w-6 h-6 mr-3 border rounded ${
                  field.value === "No" ? 'bg-[#036450] text-white border-[#036450]' : 'border-gray-300'
                }`}>
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
        className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        OK
      </motion.button>
    </motion.div>,

    // Step 7: Classes per week
    <motion.div
      key="classes-per-week"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        exit: { duration: 1.2 }
      }}
      className="w-full max-w-lg"
    >
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-[#171717]">How many classes/week interest you?</h2>
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
          render={({ field }) => (
            <>
              <div className="relative">
                <input
                  {...field}
                  className="w-full p-2 border-b-2 border-gray-300 focus:border-[#036450] outline-none text-xl text-gray-700 bg-white"
                  placeholder="Type or select an option"
                  autoComplete="off"
                  onClick={() => document.getElementById('classes-dropdown')?.classList.toggle('hidden')}
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700">▼</span>
              </div>
              <div id="classes-dropdown" className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto hidden">
                {classesPerWeekOptions.map((option, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                    onClick={() => {
                      field.onChange(option);
                      document.getElementById('classes-dropdown')?.classList.add('hidden');
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </>
          )}
        />
      </motion.div>
      
      <motion.button
        onClick={nextStep}
        className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        OK
      </motion.button>
    </motion.div>,

    // Step 8: Comments
    <motion.div
      key="comments"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        exit: { duration: 1.2 }
      }}
      className="w-full max-w-lg"
    >
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-[#171717]">Any comments or questions?</h2>
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
      
      <motion.button
        onClick={handleSubmit(onSubmit)}
        className="bg-[#036450] text-white px-8 py-2 rounded hover:bg-opacity-90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        Submit
      </motion.button>
    </motion.div>,

    // Step 9: Thank you
    <motion.div
      key="thank-you"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        exit: { duration: 1.2 }
      }}
      className="text-center"
    >
      <motion.h1 
        className="text-5xl font-bold mb-6 text-[#171717]"
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
  ];

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
          >
            {formSteps[currentStep]}
          </AnimatePresence>
        </motion.div>
        {currentStep > 0 && currentStep < formSteps.length - 1 && (
          <motion.div 
            className="mt-8 flex justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex space-x-2">
              {Array.from({ length: formSteps.length - 2 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-8 rounded-full ${
                    index < currentStep ? "bg-[#036450]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-500">
              {currentStep}/{formSteps.length - 2}
            </div>
          </motion.div>
        )}
      </form>
    </div>
  );
}
