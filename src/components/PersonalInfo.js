// src/components/PersonalInfo.js
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormField, Button, FormContainer, FormHeader } from "./shared/FormComponents";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^(\+\d{1,3}[- ]?)?\d{10,}$/, "Invalid phone number format"),
});

const PersonalInfo = ({ formData, setFormData, nextStep }) => {
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
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <FormContainer>
      {/* Mars Introduction */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Mars Visit Application</h1>
        <div className="bg-red-50 rounded-lg p-6 text-left shadow-sm">
          <h2 className="text-xl font-semibold text-red-800 mb-3">Your Journey to the Red Planet Begins Here</h2>
          <div className="space-y-3 text-gray-700">
            <p>Join the exclusive group of interplanetary travelers on a journey to Mars. 
               This once-in-a-lifetime opportunity allows you to experience:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Experience Mars' unique landscape and 0.38g gravity</li>
              <li>Stay in state-of-the-art habitation facilities</li>
              <li>Contribute to groundbreaking research and exploration</li>
              <li>Witness Earth rise from another planet</li>
            </ul>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormHeader 
          title="Personal Information"
          description="Please provide your contact details for the application process."
        />

        <FormField label="Full Name" error={errors.fullName?.message}>
          <input
            {...register("fullName")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="John Doe"
          />
        </FormField>

        <FormField label="Email Address" error={errors.email?.message}>
          <input
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="john@example.com"
          />
        </FormField>

        <FormField label="Phone Number" error={errors.phone?.message}>
          <input
            {...register("phone")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="+1 (555) 000-0000"
          />
        </FormField>

        <div className="flex justify-end pt-4">
          <Button type="submit" variant="primary">
            Continue to Travel Details
          </Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default PersonalInfo;