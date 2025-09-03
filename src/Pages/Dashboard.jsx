import Header from "../Components/Header";
import img1 from "../assets/Dashboard.png";
import Main from "../Components/Main_content";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Section */}
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-120">
      {/* Heading */}
      <div className="w-full text-center">
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
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-md shadow-sm transition">
          Post New Job
        </button>
      </div>
    </div>
    </div>
  );
}
