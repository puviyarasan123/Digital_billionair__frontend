import React from "react";

export default function StepOtp({ email, otp, setOtp, onNext }) {
  const handleChange = (value, index) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900">Enter your OTP</h2>
      <p className="text-gray-500 mb-8 text-center">
        We sent a code to <span className="font-semibold">{email}</span>
      </p>

      {/* OTP Input */}
      <div className="flex gap-3 mb-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            maxLength="1"
            className="w-12 h-12 text-center text-lg font-semibold rounded-lg 
                       bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        ))}
      </div>

      {/* Submit */}
      <button
        type="button"
        disabled={otp.some((digit) => !digit)}
        onClick={onNext}
        className={`w-full py-2 px-4 rounded-lg font-semibold text-white 
             bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
             hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 
             transition-all duration-300
          ${otp.every((digit) => digit)
            ? "bg-purple-600 hover:bg-purple-700"
            : "bg-gray-300 cursor-not-allowed"}`}
      >
        Submit
      </button>

      {/* Back to login */}
      <div className="flex items-center gap-2 mt-6 text-sm self-start">
        <span className="text-lg">←</span>
        <a href="/login" className="text-black hover:underline">
          Back to login
        </a>
      </div>
    </>
  );
}
