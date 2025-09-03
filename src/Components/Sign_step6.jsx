import React from "react";
import { CheckCircle } from "lucide-react";

export default function StepSuccess() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
      <CheckCircle size={48} className="text-green-500 mb-3" />
      <h2 className="text-lg font-semibold">Verification Successful</h2>
      <p className="text-sm text-gray-500 mt-1">
        Your account is ready. Let’s set up your company profile.
      </p>
    </div>
  );
}
