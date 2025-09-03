import React from "react";

export default function StepEmail({ email, setEmail, onNext }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900">Forget Password</h2>
      <p className="text-gray-500 mb-8 text-center">
        No worries, we'll send you reset instructions
      </p>

      <form
        className="w-full max-w-sm"
        onSubmit={(e) => {
          e.preventDefault();
          if (email) onNext();
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email ID"
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-100 
                     focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          disabled={!email}
          className={`w-full py-2 px-4 rounded-lg font-semibold text-white 
             bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
             hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 
             transition-all duration-300 
            ${email
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
