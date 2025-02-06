// src/components/TravelPreferences.js
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormField, Button, FormContainer, FormHeader } from "./shared/FormComponents";

const schema = yup.object().shape({
  departureDate: yup
    .date()
    .required("Departure date is required")
    .min(new Date(), "Departure date must be in the future"),
  returnDate: yup
    .date()
    .required("Return date is required")
    .min(yup.ref("departureDate"), "Return date must be after departure date")
});

const TravelPreferences = ({ formData, setFormData, nextStep, prevStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  const onSubmit = (data) => {
    // Format dates before saving
    const formattedData = {
      ...data,
      departureDate: data.departureDate,
      returnDate: data.returnDate
    };
    setFormData({ ...formData, ...formattedData });
    nextStep();
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    // Save current form data even when going back
    const currentFormData = {
      departureDate: document.getElementById('departureDate').value,
      returnDate: document.getElementById('returnDate').value
    };
    setFormData({ ...formData, ...currentFormData });
    prevStep();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormHeader 
          title="Travel Details"
          description="Please select your preferred travel dates for the Mars journey."
        />

        <div className="bg-blue-50 p-4 rounded-md mb-6">
          <p className="text-sm text-blue-800">
            🚀 Travel time to Mars typically takes 7-9 months each way. Plan your stay accordingly.
          </p>
        </div>

        <FormField label="Departure Date" error={errors.departureDate?.message}>
          <input
            id="departureDate"
            type="date"
            {...register("departureDate")}
            defaultValue={formData.departureDate}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          />
        </FormField>

        <FormField label="Return Date" error={errors.returnDate?.message}>
          <input
            id="returnDate"
            type="date"
            {...register("returnDate")}
            defaultValue={formData.returnDate}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          />
        </FormField>

        <div className="flex justify-between pt-4">
          <Button type="button" onClick={handlePrevious} variant="secondary">
            Previous
          </Button>
          <Button type="submit" variant="primary">
            Continue to Health & Safety
          </Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default TravelPreferences;