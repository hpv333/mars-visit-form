// src/components/ProgressBar.js
import React from "react";

const steps = [
  { label: "Personal Info", description: "Basic Details" },
  { label: "Travel Details", description: "Journey Planning" },
  { label: "Health & Safety", description: "Medical Information" }
];

const ProgressBar = ({ step }) => {
  return (
    <div className="mb-12 px-4">
      {/* Main progress bar */}
      <div className="relative pt-8">
        {/* Background line */}
        <div className="absolute top-12 left-0 w-full h-1 bg-gray-200 -z-1" />
        
        {/* Progress line */}
        <div 
          className="absolute top-12 left-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 transition-all duration-500 ease-in-out"
          style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
        />

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Step circle */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full border-4 transition-all duration-500 
                  ${step > i + 1 
                    ? 'bg-red-600 border-red-600 text-white' 
                    : step === i + 1
                    ? 'bg-white border-red-600 text-red-600'
                    : 'bg-white border-gray-300 text-gray-300'
                  }
                  ${step >= i + 1 ? 'transform scale-110' : ''}
                `}
              >
                {step > i + 1 ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-lg font-semibold">{i + 1}</span>
                )}
              </div>

              {/* Step label */}
              <div className="absolute mt-16 w-32 text-center">
                <p 
                  className={`text-sm font-semibold mb-1 
                    ${step >= i + 1 ? 'text-red-600' : 'text-gray-400'}`}
                >
                  {s.label}
                </p>
                <p 
                  className={`text-xs 
                    ${step >= i + 1 ? 'text-gray-600' : 'text-gray-400'}`}
                >
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress text */}
      <div className="mt-24 text-center">
        <p className="text-sm text-gray-500">
          Step {step} of {steps.length}
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;