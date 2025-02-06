// src/pages/MultiStageForm.js
import React, { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import TravelPreferences from "../components/TravelPreferences";
import HealthSafety from "../components/HealthSafety";
import ProgressBar from "../components/ProgressBar";

const initialFormState = {
  // Personal Info
  fullName: "",
  email: "",
  phone: "",
  
  // Travel Preferences
  departureDate: "",
  returnDate: "",
  
  // Health & Safety
  healthDeclaration: "",
  emergencyContact: "",
};

const MultiStageForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormState);

  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep(step + 1);
  };

  const prevStep = () => {
    window.scrollTo(0, 0);
    setStep(step - 1);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setStep(1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (data) => {
    const finalData = { ...formData, ...data };
    console.log("Form submitted:", finalData);
    alert("Application submitted successfully!");
    resetForm();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo 
            formData={formData} 
            setFormData={setFormData} 
            nextStep={nextStep} 
          />
        );
      case 2:
        return (
          <TravelPreferences
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <HealthSafety
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ProgressBar step={step} />
        {renderStep()}
        
        {/* Reset Form Button */}
        <div className="mt-8 text-center">
          <button
            onClick={resetForm}
            className="text-gray-600 hover:text-red-600 underline focus:outline-none"
          >
            Start New Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStageForm;