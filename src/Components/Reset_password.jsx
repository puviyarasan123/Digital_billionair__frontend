import React, { useState } from "react";
import axios from "axios";

export default function StepReset({ email, onBackToLogin }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || password !== confirm) return;

    try {
      setLoading(true);
      setError("");

      const res = await axios.post("http://localhost:5000/reset-password", {
        email,
        newPassword: password,
      });

      alert(res.data.message); // "Password reset successful ✅"
      onBackToLogin();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
      <p className="text-gray-500 mb-8 text-center">
        Please enter your new password below
      </p>

      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-100 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-100 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
        />

        <button
          type="submit"
          disabled={!password || !confirm || password !== confirm || loading}
          className={`w-full rounded-xl bg-black-400 px-4 py-2 text-white-200 font-semibold shadow-md hover:bg-blue-700 transition text-center bg-black
            ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : password && confirm && password === confirm
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-gray-300 cursor-not-allowed"}`}
        >
          {loading ? "Resetting..." : "Submit"}
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
