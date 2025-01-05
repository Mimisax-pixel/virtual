import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ setShowContactForm }) => {
  const [menu, setMenu] = useState(false);

  // Navigation items for smooth scrolling
  const items = [
    { id: "home", text: "Home" },
    { id: "services", text: "Services" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Connect" },
  ];

  return (
    <div className=" text-white w-full fixed top-0 z-50 bg-slate-900">
      {/* Desktop Navbar */}
      <div className="container mx-auto p-4 lg:justify-around hidden md:flex justify-between items-center">
        <div className="text-xl md:text-3xl lg:text-4xl font-bold flex items-center gap-1">
          <span className="text-blue-600 md:text-blue-600 lg:text-blue-600">MIMI</span>
          <span className="text-blue-800">DEV</span>
        </div>
        <div className="hidden md:flex space-x-6 items-center list-none text-lg">
          {items.map(({ id, text }) => (
            <ScrollLink
              key={id}
              to={id}
              smooth={true}
              duration={500}
              offset={-70} // Adjust for fixed navbar height
              className="hover:text-blue-800 duration-200 cursor-pointer"
            >
              {text}
            </ScrollLink>
          ))}
        </div>
        <button
          onClick={() => setShowContactForm(true)}
          className="text-lg bg-blue-700 px-4 py-2 rounded hover:text-yellow-100 text-white font-semibold animate-slide-in lg:hidden"
        >
          Get In Touch
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="flex w-full justify-between items-center md:hidden p-2 shadow-sm">
        <div className="text-xl font-bold flex items-center gap-2">
          <span className="text-blue-600">MIMI</span>
          <span className="text-blue-800">DEV</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div onClick={() => setMenu(!menu)} className="cursor-pointer">
            {menu ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="bg-slate-900 shadow-md w-full absolute top-14 left-0 z-10">
          <ul className="flex flex-col items-start p-4 space-y-4">
            {items.map(({ id, text }) => (
              <ScrollLink
                key={id}
                to={id}
                smooth={true}
                duration={500}
                offset={-70} // Adjust for fixed navbar height
                onClick={() => setMenu(false)} // Close menu on click
                className="text-lg hover:text-blue-800 duration-200 cursor-pointer"
              >
                {text}
              </ScrollLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
