import React, { useState } from "react";
import img1 from "../assets/mainimg.png"; // Full left side image
import img2 from "../assets/logo.png"; // Logo
import { Eye, EyeOff } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", email); // session store
        navigate("/dashboard");
      } else {
        setError(data.error || "Email or password is not matched");
      }
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-screen h-screen bg-white">
      {/* Left Section - Full Image */}
      <div className="w-full md:w-[45%] h-64 md:h-full">
        <img src={img1} alt="Illustration" className="w-full h-full" />
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-6 md:px-20 lg:px-32 py-10 h-full">
        {/* Logo */}
        <img src={img2} alt="Logo" className="w-20 md:w-30 mb-3" />

        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Welcome Back
        </h2>
        <p className="text-gray-500 mb-8 text-sm md:text-base">
          Please login to your account
        </p>

        {/* Form */}
        <form className="w-full max-w-sm" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-100 text-black
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Password field with show/hide toggle */}
          <div className="relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-black
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex justify-end text-sm mb-6">
            <a
              href="/Forgot_passwordflow"
              className="text-purple-600 hover:underline"
            >
              Forgot Password ?
            </a>
          </div>

          <button
            type="submit"
            className="w-full block py-2 px-4 rounded-lg font-semibold text-white 
                       bg-purple-500 hover:bg-purple-600
                       transition-all duration-300 text-center"
          >
            Submit
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-sm mt-4">{error}</p>
        )}

        <p className="text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a
            href="/Signup"
            className="text-purple-600 font-semibold hover:underline"
          >
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}
