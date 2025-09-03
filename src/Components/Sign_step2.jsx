import React from "react";
import { ArrowLeft } from "lucide-react"; // icon package (lucide-react)

export default function StepContactInfo({ setStep }) {
  return (
    <div className="relative w-full min-h-screen px-6 py-8 text-center left-8">
      {/* Back button fixed at top-left */}
      <div
        className="absolute top-6 left-6 flex items-center cursor-pointer"
        onClick={() => setStep(1)}
      >
        <ArrowLeft className="w-4 h-4 mr-2 text-gray-700" />
        <span className="text-sm text-gray-700">Back</span>
      </div>

      {/* Form section (with margin from top to avoid overlap with back button) */}
      <form className="space-y-4 w-full max-w-md mx-auto mt-15 left-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* Contact Person Name */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1 text-left">Contact Person Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Designation */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1 text-left">Contact Person Designation</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Contact Phone */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1 text-left">Contact Phone</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Next button */}
        <button
          type="button"
          onClick={() => setStep(3)}
           className={`w-full py-2 px-4 rounded-lg font-semibold text-white 
             bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
             hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 
             transition-all duration-300 `}
        >
          Next →
        </button>
      </form>
    </div>
  );
}
