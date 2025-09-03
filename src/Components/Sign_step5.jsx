import React, { useState, useEffect } from "react";

export default function StepOtpCountdown({ email, setOtpStep }) {
  const [time, setTime] = useState(30);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  return (
    <div>
      <h2 className="text-xl font-semibold">Verification</h2>
      <p className="text-sm text-gray-500 mt-1">
        We’ve sent a 6-digit verification code to your email
        <br />
        (<span className="font-medium">{email}</span>). Please enter it below to verify your account
      </p>

      {/* Disabled OTP boxes just to match design */}
      <div className="flex justify-between mt-4">
        {Array(6).fill("").map((_, idx) => (
          <input
            key={idx}
            type="text"
            disabled
            className="w-10 h-12 text-center text-lg border rounded-md bg-gray-100"
          />
        ))}
      </div>

      {/* Countdown */}
      <p className="text-sm text-center mt-4">
        Didn’t get the code?{" "}
        {time > 0 ? (
          <span className="text-gray-400">Resend in {time}s</span>
        ) : (
          <button
            onClick={() => setOtpStep(1)}
            className="text-purple-600 font-medium"
          >
            Resend OTP
          </button>
        )}
      </p>

      <button
        disabled
        className="w-full bg-gray-300 text-white py-3 mt-4 rounded-md cursor-not-allowed"
      >
        Submit
      </button>
    </div>
  );
}
