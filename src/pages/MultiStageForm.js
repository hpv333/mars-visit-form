// src/pages/MultiStageForm.js
import React, { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import TravelPreferences from "../components/TravelPreferences";
import HealthSafety from "../components/HealthSafety";
import ProgressBar from "../components/ProgressBar";

const MultiStageForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
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
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ProgressBar step={step} />
        
        {step === 1 && (
          <PersonalInfo 
            formData={formData} 
            setFormData={setFormData} 
            nextStep={nextStep} 
          />
        )}
        
        {step === 2 && (
          <TravelPreferences
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        
        {step === 3 && (
          <HealthSafety
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
          />
        )}
      </div>
    </div>
  );
};

export default MultiStageForm;