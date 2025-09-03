import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import img1 from "../assets/mainimg.png"; // Left side image
import img2 from "../assets/dbimg.png";   // Logo

// Step components
import StepCompanyInfo from "../Components/Sign_step1";
import StepContactInfo from "../Components/Sign_step2";
import StepCredentials from "../Components/Sign_step3";
import StepOtp from "../Components/Sign_step4";
import StepOtpCountdown from "../Components/Sign_step5";
import StepSuccess from "../Components/Sign_step6";

export default function JoinCompanyPage() {
  const [step, setStep] = useState(1);
  const [showOtp, setShowOtp] = useState(false);
  const [otpStep, setOtpStep] = useState(1);
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleSubmitCredentials = (enteredEmail) => {
    setEmail(enteredEmail);
    setShowOtp(true);
    setOtpStep(1);
  };

  const handleOtpSuccess = () => {
    setOtpStep(3);
    setTimeout(() => {
      setShowOtp(false);
      navigate("/login"); // ✅ redirect to login page
    }, 2000);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full relative">
      {/* Left Section */}
      <div className="w-full md:w-[45%] h-auto md:h-screen">
        <img
          src={img1}
          alt="Illustration"
          className="w-full h-full mx-auto mb-4 px-4 py-3"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[50%] flex flex-col justify-center items-center bg-white px-6 sm:px-12 md:px-16 lg:px-24">
        <img src={img2} alt="Logo" className="w-60 mb-6" />
        <h2 className="text-2xl font-bold text-center mb-2">Join as a Company</h2>
        <p className="text-center text-gray-500 mb-6">
          Post jobs, manage applicants, and hire smarter
        </p>

        {/* Render Steps */}
        {step === 1 && <StepCompanyInfo setStep={setStep} />}
        {step === 2 && <StepContactInfo setStep={setStep} />}
        {step === 3 && (
          <StepCredentials setStep={setStep} onSubmit={handleSubmitCredentials} />
        )}
        {/* step === 4 would go to profile setup */}
      </div>

      {/* OTP Modal */}
      {showOtp && (
        <div className="absolute inset-0 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm sm:max-w-md relative">
            {otpStep === 1 && (
              <StepOtp
                email={email}
                setOtpStep={setOtpStep}
                onSuccess={handleOtpSuccess}
              />
            )}
            {otpStep === 2 && (
              <StepOtpCountdown
                email={email}
                setOtpStep={setOtpStep}
              />
            )}
            {otpStep === 3 && (
              <StepSuccess
                message="OTP Verified Successfully! Redirecting to login..."
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
