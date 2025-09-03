import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ArrowLeft } from "lucide-react";

export default function StepCredentials({ onSubmit, setStep }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    onSubmit(email);
  };

  return (
    <div className="relative w-full min-h-screen px-1 py-8">
      {/* Back button fixed at top-left */}
     <div
  className="absolute top-1 left-1 flex items-center cursor-pointer"
  onClick={() => setStep(2)} // go back to Step 2
>
  <ArrowLeft className="w-4 h-4 mr-2 text-gray-700" />
  <span className="text-sm text-gray-700">Back</span>
</div>


      <form
        className="space-y-4 w-full mt-1"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {/* Company Email */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Company Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
 className={`w-full py-2 px-4 rounded-lg font-semibold text-white 
             bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
             hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 
             transition-all duration-300 `}        >
          Submit →
        </button>

        {/* Note */}
        <p className="text-xs text-center text-gray-500 mt-3">
          Note: All job postings are subject to verification and must comply with
          our posting guidelines. Misuse may lead to account suspension.
        </p>
      </form>
    </div>
  );
}
