// src/components/shared/FormComponents.js
import React from "react";

export const FormField = ({ label, error, children }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {children}
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

export const Button = ({ type = "button", variant = "primary", onClick, children }) => {
  const baseStyles = "px-6 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export const FormContainer = ({ children }) => (
  <div className="space-y-6 bg-white rounded-lg p-6 shadow-sm">
    {children}
  </div>
);

export const FormHeader = ({ title, description }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    {description && <p className="mt-2 text-gray-600">{description}</p>}
  </div>
);