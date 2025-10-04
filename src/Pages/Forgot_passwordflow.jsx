import React, { useState } from "react";
import img1 from "../assets/mainimg.png";
import img2 from "../assets/logo.png";
import StepEmail from "../Components/Forgot_password";
import StepOtp from "../Components/Otp_enter";
import StepReset from "../Components/Reset_password";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));

  return (
    <div className="flex flex-col md:flex-row w-screen h-screen bg-white">
      {/* Left Section */}
      <div className="w-full md:w-[45%] h-64 md:h-full">
        <img src={img1} alt="Illustration" className="w-full h-full" />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-6 md:px-20 lg:px-32 py-10 h-full">
        <img src={img2} alt="Logo" className="w-20 md:w-30 mb-3" />

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
            email={email}
            onBackToLogin={() => (window.location.href = "/login")}
          />
        )}
      </div>
    </div>
  );
}
