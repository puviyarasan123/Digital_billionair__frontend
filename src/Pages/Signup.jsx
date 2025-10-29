import React, { useState } from "react";
import img1 from "../assets/mainimg.png";
import { Link } from "react-router-dom";

export default function BusinessRegistration() {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    sector: "",
    location: "",
    password: "",
    confirmpassword: "",
  });

   const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // clear error on change
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match!");
    return;
  }

  try {
    const res = await fetch("http://127.0.0.1:5000/Signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message);
      setFormData({
        businessName: "",
        ownerName: "",
        email: "",
        phone: "",
        sector: "",
        location: "",
        password: "",
      });
    } else {
      setError(data.error);
    }
  } catch (err) {
    setError("Server error. Try again later.");
  }
};

  return (
    <div className="flex flex-col md:flex-row w-screen h-screen bg-white">
      <div className="w-full h-full max-w-2xl rounded-2xl bg-white shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Business Registration
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-12 sm:grid-cols-2 text-black">
          {/* Business Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter business name"
            />
          </div>

          {/* Owner Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Owner Name
            </label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter owner name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="example@business.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="+91 98765 43210"
            />
          </div>

          {/* Sector */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business Sector
            </label>
            <select
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              <option value="">Select sector</option>
              <option value="Retail">Retail</option>
              <option value="Finance">Finance</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Manufacturing">Manufacturing</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="City, State"
            />
          </div>

           {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="********"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="********"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="sm:col-span-2 text-center text-red-600 font-medium">
              {error}
            </div>
          )}

          {/* Buttons */}
      <div className="sm:col-span-2 flex flex-col md:flex-row gap-4">
        {/* Back to Login (Link) */}
        <Link
          to="/login"
          className="w-full rounded-xl bg-black-600 px-4 py-2 text-white-200 font-semibold shadow-md hover:bg-blue-700 transition text-center bg-black"
        >
          Back to Login
        </Link>
            <button
            type="submit"
              className="w-full rounded-xl bg-black-600 px-4 py-2 text-white-200 font-semibold shadow-md hover:bg-blue-700 transition text-center bg-black"
            >
Register Business
            </button>
          </div>
        </form>
          </div>
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center bg-white px-3 md:px-10  py-3 h-full">
           <img
                src={img1}
                alt="Illustration"
                className="w-full h-full"
              />
      
      </div>
    </div>
  );
}
