import React, { useState } from "react";
import StepCredentials from "../Components/Sign_step3";
import OtpVerification from "../Components/Sign_step4";

export default function AuthFlow() {
  const [showOtp, setShowOtp] = useState(false);

  return (
    <div className="relative min-h-screen bg-white flex items-start justify-center py-10">
      {/* Background form (blur a tiny bit when OTP open) */}
      <div className={`w-full max-w-md ${showOtp ? "blur-[1.5px] pointer-events-none" : ""}`}>
        <StepCredentials
          onBack={() => {/* navigate back if needed */}}
          onSubmit={() => setShowOtp(true)}
        />
      </div>

      {/* OTP overlay (separate section) */}
      {showOtp && (
        <OtpVerification
          email="example@company.com"          // pass real email if you have it
          onClose={() => setShowOtp(false)}
          onVerified={(code) => {
            // handle verified code here
            console.log("Verified OTP:", code);
            setShowOtp(false);
          }}
        />
      )}
    </div>
  );
}
