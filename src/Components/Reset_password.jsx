import React, { useState } from "react";

export default function StepReset({ onBackToLogin }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && confirm && password === confirm) {
      alert("Password Reset Successful ✅");
      onBackToLogin();
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
                     focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-100 
                     focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          disabled={!password || !confirm || password !== confirm}
          className={`w-full py-2 px-4 rounded-lg font-semibold text-white 
             bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
             hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 
             transition-all duration-300
            ${password && confirm && password === confirm
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-gray-300 cursor-not-allowed"}`}
        >
          Submit
        </button>
      </form>

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
