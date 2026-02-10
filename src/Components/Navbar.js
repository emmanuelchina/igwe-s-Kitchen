
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-5 py-2 sticky top-0 relative z-[9999]">
  
      <div className="flex justify-between items-center">
    
        <div className="w-20 h-10 ">
          <img
            src="/img/igwe-logo.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>

       
        <button
          className="text-gray-800 md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>


        <div className="hidden md:flex space-x-6 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive
                  ? "bg-orange-800 text-white"
                  : "text-gray-800 hover:bg-orange-800 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/viewmore"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive
                  ? "bg-orange-800 text-white"
                  : "text-gray-800 hover:bg-orange-800 hover:text-white"
              }`
            }
          >
       Menu
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive
                  ? "bg-orange-800 text-white"
                  : "text-gray-800 hover:bg-orange-800 hover:text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

   
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-2 md:hidden font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive
                  ? "bg-orange-800 text-white"
                  : "text-gray-800 hover:bg-orange-800 hover:text-white"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/viewmore"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive
                  ? "bg-orange-800 text-white"
                  : "text-gray-800 hover:bg-orange-800 hover:text-white"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
       Meun
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive
                  ? "bg-orange-800 text-white"
                  : "text-gray-800 hover:bg-orange-800 hover:text-white"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}