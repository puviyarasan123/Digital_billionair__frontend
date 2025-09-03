import React, { useState, useRef } from "react";

export default function StepOtp({ email, setOtpStep, onSuccess }) {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (val, idx) => {
    if (/^[0-9]?$/.test(val)) {
      const newOtp = [...otp];
      newOtp[idx] = val;
      setOtp(newOtp);

      // Move to next input if value is entered
      if (val && idx < 5) {
        inputsRef.current[idx + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1].focus();
    }
  };

  const handleSubmit = () => {
    if (otp.join("").length === 6) {
      onSuccess();
    } else {
      alert("Please enter complete OTP");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Verification</h2>
      <p className="text-sm text-gray-500 mt-1">
        We’ve sent a 6-digit verification code to your email
        <br />
        (<span className="font-medium">{email}</span>). Please enter it below to verify your account
      </p>

      {/* OTP Inputs */}
      <div className="flex justify-between mt-4">
        {otp.map((digit, idx) => (
          <input
            key={idx}
            type="text"
            value={digit}
            maxLength="1"
            ref={(el) => (inputsRef.current[idx] = el)}
            onChange={(e) => handleChange(e.target.value, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className="w-10 h-12 text-center text-lg border rounded-md focus:outline-purple-500"
          />
        ))}
      </div>

      {/* Resend link → goes to countdown */}
      <p className="text-sm text-center mt-4">
        Didn’t get the code?{" "}
        <button
          className="text-purple-600 font-medium"
          onClick={() => setOtpStep(2)}
        >
          Resend OTP
        </button>
      </p>

      <button
        onClick={handleSubmit}
 className={`w-full py-2 px-4 rounded-lg font-semibold text-white 
             bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
             hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 
             transition-all duration-300 `}      >
        Submit
      </button>
    </div>
  );
}
