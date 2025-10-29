import React, { useState } from "react";
import { LogOut, UserCircle, Upload, Download } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analysisData, setAnalysisData] = useState(null); // State to store the analysis results
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    // Clear previous analysis when a new file is selected
    setAnalysisData(null);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5001/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }

      // The backend now returns JSON, not a PDF blob
      const data = await response.json();
      setAnalysisData(data); // Store the analysis data in state
      alert("Analysis complete! See the dashboard below.");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to analyze data. Please check the console for details.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPdf = async () => {
    if (!analysisData) {
      alert("Please upload and analyze a file first!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5001/download-pdf", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `sales_report_${new Date().toISOString().slice(0, 10)}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Failed to download PDF report. Please try again.");
    }
  };

  const navigateToProfile = () => {
    navigate('/Profile');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 w-screen h-[60%]">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center bg-blue-700 text-white px-10 py-4 shadow-md w-[100%] h-full">
        <h1 className="text-2xl font-bold">📊 Business Forecast Dashboard</h1>
        <div className="flex items-center gap-6">
          <Link to="/Profile">
            <UserCircle
              size={28}
              className="cursor-pointer hover:text-yellow-300 transition-colors"
            />
          </Link>
          <Link
            to="/login"
            className="flex items-center gap-2 bg-red-500 hover:bg-red-800 px-4 py-2 rounded-xl shadow-md"
          >
            <LogOut size={18} />
            Logout
          </Link>
        </div>
      </header>

      {/* Main Content */}
<<<<<<< HEAD
      <main className="flex-2 p-10 md:p-20">
        {/* File Upload & Download Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center text-black mb-10">
          <h2 className="text-xl font-semibold mb-4">Upload Data & Get Report</h2>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="file"
              onChange={handleFileChange}
              className="mb-4 md:mb-0"
              disabled={loading}
            />
            <button
              onClick={handleUpload}
                 className="w-full rounded-xl bg-black-400 px-4 py-2 text-white-200 font-semibold shadow-md hover:bg-blue-700 transition text-center bg-black"

              disabled={loading || !file}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <Upload size={18} /> Analyze Data
                </>
              )}
            </button>
            <button
              onClick={handleDownloadPdf}
             className="w-full rounded-xl bg-black-400 px-4 py-2 text-white-200 font-semibold shadow-md hover:bg-blue-700 transition text-center bg-black"
              disabled={!analysisData}
            >
              <Download size={18} /> Download PDF
            </button>
          </div>
          {file && (
            <p className="mt-3 text-sm text-gray-600">
              Selected: <span className="font-medium">{file.name}</span>
            </p>
          )}
        </div>
        
        {/* Display Analysis Results */}
        {analysisData && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {/* Summary Card */}
            <div className="bg-white shadow-lg rounded-2xl p-6 text-black flex flex-col">
              <h2 className="text-xl font-semibold mb-4 text-blue-800">Key Insights & Forecast</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>Most Sold Product:</strong> <span className="text-green-600 font-semibold">{analysisData.top_product}</span></p>
                <p><strong>Top Customer Group:</strong> <span className="text-green-600 font-semibold">{analysisData.top_age_cat}</span></p>
                <p><strong>Peak Season:</strong> <span className="text-green-600 font-semibold">{analysisData.top_season}</span></p>
                <p><strong>Next Season's Recommendation:</strong> Stock up on <span className="text-red-600 font-semibold">{analysisData.recommended_product}</span>, with an estimated <span className="font-semibold">{Math.round(analysisData.recommended_qty)} units</span>.</p>
              </div>
              <div className="mt-4 border-t pt-4">
                <h3 className="text-lg font-medium text-blue-800 mb-2">AI-Powered Executive Summary</h3>
                <p className="text-sm italic text-gray-600 leading-relaxed">{analysisData.summary}</p>
              </div>
            </div>

            {/* Charts Section */}
            <div className="bg-white shadow-lg rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-800">Visual Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysisData.charts.bar && (
                  <div className="flex flex-col items-center">
                    <h3 className="text-md font-medium text-gray-700 mb-2">Top 5 Products</h3>
                    <img src={`http://127.0.0.1:5001/static/${analysisData.charts.bar}`} alt="Top 5 Products Chart" className="w-full h-auto rounded-md shadow-sm" />
                  </div>
                )}
                {analysisData.charts.pie && (
                  <div className="flex flex-col items-center">
                    <h3 className="text-md font-medium text-gray-700 mb-2">Sales by Age Group</h3>
                    <img src={`http://127.0.0.1:5001/static/${analysisData.charts.pie}`} alt="Age Group Pie Chart" className="w-full h-auto rounded-md shadow-sm" />
                  </div>
                )}
                {analysisData.charts.season && (
                  <div className="flex flex-col items-center">
                    <h3 className="text-md font-medium text-gray-700 mb-2">Sales by Season</h3>
                    <img src={`http://127.0.0.1:5001/static/${analysisData.charts.season}`} alt="Season Sales Chart" className="w-full h-auto rounded-md shadow-sm" />
                  </div>
                )}
                {analysisData.charts.trend && (
                  <div className="flex flex-col items-center col-span-1 md:col-span-2">
                    <h3 className="text-md font-medium text-gray-700 mb-2">Monthly Sales Trend</h3>
                    <img src={`http://127.0.0.1:5001/static/${analysisData.charts.trend}`} alt="Monthly Sales Trend Chart" className="w-full h-auto rounded-md shadow-sm" />
                  </div>
                )}
              </div>
            </div>

            {/* Forecast Table Section */}
            <div className="bg-white shadow-lg rounded-2xl p-6 col-span-1 lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-blue-800">Forecast and Recommendations</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Predicted Sales</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth %</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommendation</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {analysisData.forecast_data.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.product}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Math.round(item.predicted_sales)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.growth_percent.toFixed(1)}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.recommendation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
=======
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
>>>>>>> def3e78f27afcbb35fd551dd8aba37271f03c71d
      </main>
    </div>
  );
}