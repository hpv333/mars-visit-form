// src/components/HealthSafety.js
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormField, Button, FormContainer, FormHeader } from "./shared/FormComponents";

const schema = yup.object().shape({
  healthDeclaration: yup
    .string()
    .required("Health declaration is required")
    .min(10, "Please provide more detailed health information"),
  emergencyContact: yup
    .string()
    .required("Emergency contact is required")
    .min(10, "Please provide complete emergency contact information"),
});

const HealthSafety = ({ formData, setFormData, prevStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const finalData = { ...formData, ...data };
    setFormData(finalData);
    
    // Here you would typically send the data to your backend
    console.log("Final form submission:", finalData);
    alert("Application submitted successfully! We will contact you soon.");
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormHeader 
          title="Health & Safety Information"
          description="Please provide important health information and emergency contact details for your Mars journey."
        />

        <div className="bg-yellow-50 p-4 rounded-md mb-6">
          <p className="text-sm text-yellow-800">
            ⚕️ Your health and safety are our top priority. Please be thorough and honest in your health declaration.
          </p>
        </div>

        <FormField label="Health Declaration" error={errors.healthDeclaration?.message}>
          <textarea
            {...register("healthDeclaration")}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="Please describe any medical conditions, allergies, medications, or health concerns that we should be aware of..."
          />
        </FormField>

        <FormField label="Emergency Contact" error={errors.emergencyContact?.message}>
          <input
            {...register("emergencyContact")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="Name, relationship, and contact number"
          />
        </FormField>

        <div className="flex justify-between pt-4">
          <Button onClick={prevStep} variant="secondary">
            Previous
          </Button>
          <Button type="submit" variant="primary">
            Submit Application
          </Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default HealthSafety;