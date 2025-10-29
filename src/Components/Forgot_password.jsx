import React, { useState } from "react";
import axios from "axios";

export default function StepEmail({ email, setEmail, onNext }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      setLoading(true);
      setError("");

      const res = await axios.post("http://localhost:5000/forgot-password", {
        email,
      });

      alert(res.data.message); // "OTP sent to your email"
      onNext(); // Move to OTP step
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900">Forget Password</h2>
      <p className="text-gray-500 mb-8 text-center">
        No worries, we'll send you reset instructions
      </p>

      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email ID"
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-100 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
        />

        <button
          type="submit"
          disabled={!email || loading}
          className={`w-full rounded-xl bg-black-400 px-4 py-2 text-white-200 font-semibold shadow-md hover:bg-blue-700 transition text-center bg-black
            ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : email
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-gray-300 cursor-not-allowed"}`}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

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
