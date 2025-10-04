import React, { useState } from "react";
import { LogOut, UserCircle, Upload, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }
    console.log("Uploading file:", file.name);
    // TODO: send file to backend API (Flask/Node)
  };

  const handleDownload = () => {
    console.log("Downloading result...");
    // TODO: trigger result download from backend
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50  w-screen h-[60%]">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center bg-blue-700 text-white px-10 py-4 shadow-md w-[100%] h-full ">
        <h1 className="text-2xl font-bold">📊 Business Forecast Dashboard</h1>
        <div className="flex items-center gap-6">
          <UserCircle size={28} className="cursor-pointer hover:text-gray-200" />
         <Link
  to="/login"
  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl shadow-md"
>
  <LogOut size={18} />
  Logout
</Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-2 p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* File Upload Section */}
          <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col items-center justify-center text-black">
            <h2 className="text-xl font-semibold mb-4">Upload Data File</h2>
            <input
              type="file"
              onChange={handleFileChange}
              className="mb-4"
            />
            <button
              onClick={handleUpload}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 shadow-md"
            >
              <Upload size={18} /> Upload
            </button>
            {file && (
              <p className="mt-3 text-sm text-gray-600">
                Selected: <span className="font-medium">{file.name}</span>
              </p>
            )}
          </div>

          {/* Result Download Section */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-black">
            <h2 className="text-xl font-semibold mb-4">Download Forecast Result</h2>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 shadow-md"
            >
              <Download size={18} /> Download Result
            </button>
            <p className="mt-3 text-sm text-gray-600">
              Get the processed forecast data (PDF Format).
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
