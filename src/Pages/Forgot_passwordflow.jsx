import React, { useState } from "react";
import img1 from "../assets/mainimg.png";
import img2 from "../assets/dbimg.png";
import StepEmail from "../Components/Forgot_password";
import StepOtp from "../Components/Otp_enter";
import StepReset from "../Components/Reset_password";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Left Section */}
      <div className="w-full md:w-1/2 h-auto md:h-screen">
        <img
          src={img1}
          alt="Illustration"
          className="w-full h-full mx-auto mb-4 px-4 py-3"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-8 md:px-20 lg:px-32">
        {/* Logo */}
        <img src={img2} alt="Logo" className="w-60 mb-6" />

        {/* Render Steps */}
        {step === 1 && (
          <StepEmail
            email={email}
            setEmail={setEmail}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <StepOtp
            email={email}
            otp={otp}
            setOtp={setOtp}
            onNext={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <StepReset
            onBackToLogin={() => (window.location.href = "/login")}
          />
        )}
      </div>
    </div>
  );
}
