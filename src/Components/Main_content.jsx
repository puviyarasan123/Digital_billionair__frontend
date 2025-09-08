import React from "react";
import img1 from "../assets/dashboard.png";

export default function Main_content() {
  return (
    <div className="flex flex-col w-screen h-screen bg-white py-30 text-center">
      {/* Heading */}
      <div className="w-full text-left px-30">
        <h2 className="text-2xl font-bold text-gray-900">Recent Job Posts</h2>
        <p className="text-gray-500 mt-1">
          Quick view of your latest openings.
        </p>
      </div>

      {/* Illustration */}
      <div className="mt-8">
        <img
          src={img1} // 👈 replace with your job illustration image
          alt="No jobs illustration"
          className="w-72 mx-auto"
        />
      </div>

      {/* Empty State Text */}
      <div className="text-center mt-6">
        <h3 className="text-lg font-semibold text-gray-800">No job posts yet</h3>
        <p className="text-gray-500 mt-1 max-w-sm mx-auto">
          Create your first job post to start attracting candidates.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-md shadow-sm transition center">
          Post New Job
        </button>
      </div>
    </div>
  );
}
