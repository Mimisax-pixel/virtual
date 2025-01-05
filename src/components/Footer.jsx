import React from "react";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const updatedDate = new Date().toLocaleDateString();

  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          &copy; {currentYear} Mimisaxpixel
        </p>
        <p className="text-sm mt-2">Last Updated: {updatedDate}</p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/wisdomonukak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
            aria-label="LinkedIn"
          >
            <LinkedIn fontSize="large" />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Mimisax-pixel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-500"
            aria-label="GitHub"
          >
            <GitHub fontSize="large" />
          </a>

          {/* Email Icon */}
          <a
            href="mailto:wiseonu@gmail.com"
            className="text-white hover:text-red-500"
            aria-label="Email"
          >
            <Email fontSize="large" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
