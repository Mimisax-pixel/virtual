import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const updatedDate = new Date().toLocaleDateString();

  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">&copy; {currentYear} Mimisaxpixel</p>
        <p className="text-sm mt-2">Last Updated: {updatedDate}</p>
        <div className="mt-4">
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 duration-200 mx-2"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 duration-200 mx-2"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
