import React from "react";

export default function JoinCompanyPage({ setStep }) {
  return (
    <>
      <form className="space-y-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* Company Name */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">Company Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Company Website */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">
              Company Website (optional)
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* State */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">State</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">City</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Industry */}
          <div className="flex flex-col">
  <label className="text-sm text-gray-700 mb-1">Industry</label>
  <select
    className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
    defaultValue=""
  >
    <option value="" disabled hidden>
    </option>
    <option value="tech">Tech</option>
    <option value="finance">Finance</option>
    <option value="healthcare">Healthcare</option>
  </select>
</div>

          {/* Company Size */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">Company Size</label>
            <select
    className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
    defaultValue=""
  >
    <option value="" disabled hidden>
    </option>
              <option>1-10</option>
              <option>11-50</option>
              <option>51-200</option>
              <option>200+</option>
            </select>
          </div>
        </div>

        {/* Next button */}
        <button
          type="button"
          onClick={() => setStep(2)}
          className={`w-full py-2 px-4 rounded-lg font-semibold text-white 
             bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
             hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 
             transition-all duration-300 `}
        >
          Next →
        </button>
      </form>

      {/* Sign In */}
      <div className="text-center mt-6 text-sm">
        Do you have an account?{" "}
        <a
          href="/login"
          className="text-purple-600 font-medium hover:underline"
        >
          Sign In
        </a>
      </div>

      {/* Note */}
      <p className="mt-4 text-center text-xs text-gray-400">
        Note : All job postings are subject to verification and must comply
        with our posting guidelines. Misuse may lead to account suspension
      </p>
    </>
  );
}
