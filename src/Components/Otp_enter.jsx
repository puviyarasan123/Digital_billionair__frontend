import React, { useState } from "react";
import axios from "axios";

export default function StepOtp({ email, otp, setOtp, onNext }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (value, index) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.post("http://localhost:5000/verify-otp", {
        email,
        otp: otp.join(""),
      });

      alert(res.data.message); // "OTP verified"
      onNext();
    } catch (err) {
      setError(err.response?.data?.error || "Invalid OTP");
    } finally {
      setLoading(false);
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
                       bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          />
        ))}
      </div>

      {/* Submit */}
      <button
        type="button"
        disabled={otp.some((digit) => !digit) || loading}
        onClick={handleSubmit}
        className={`w-full rounded-xl bg-black-400 px-4 py-2 text-white-200 font-semibold shadow-md hover:bg-blue-700 transition text-center bg-black
          ${loading
            ? "bg-gray-400 cursor-not-allowed"
            : otp.every((digit) => digit)
            ? "bg-purple-600 hover:bg-purple-700"
            : "bg-gray-300 cursor-not-allowed"}`}
      >
        {loading ? "Verifying..." : "Submit"}
      </button>

      {error && <p className="text-red-500 mt-3">{error}</p>}

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
