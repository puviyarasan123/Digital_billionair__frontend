import { useState } from "react";
import { ChevronDown, User } from "lucide-react";
import img1 from "../assets/dbimg.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="w-full px-6 py-3 flex items-center justify-between">
        {/* Left Section: Logo + Nav */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <img src={img1} alt="Logo" className="h-12 w-auto" />

          {/* Nav Links */}
          <nav className="flex gap-8">
            <a
              href="#"
              className="text-sm font-semibold text-gray-800 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 after:scale-x-100 after:transition-transform"
            >
              JOBS
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-gray-800 hover:text-purple-600 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              APPLICANTS
            </a>
          </nav>
        </div>

        {/* Right Section: Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-purple-600 font-medium"
          >
            <User size={18} className="text-purple-600" />
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
