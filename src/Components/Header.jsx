import { useState } from "react";
import { ChevronDown } from "lucide-react";
import img1 from "../assets/dbimg.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 z-50">
      {/* Full width flex container */}
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={img1} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Nav Links */}
        <nav className="flex gap-6">
          <a href="#" className="text-gray-700 font-medium hover:text-purple-600">
            JOBS
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-purple-600">
            APPLICANTS
          </a>
        </nav>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-purple-600 font-medium"
          >
            <span>Pegasus Nexus</span>
            <ChevronDown size={18} />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
