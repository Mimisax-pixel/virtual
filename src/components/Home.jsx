import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import anchor from "../assets/wizy.png";

const About = () => {
  return (
    <div className="bg-slate-900 text-white py-10 pt-12 px-5 md:pt-12 sm:pt-12 sm:px-10 lg:px-40 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Image Section - Display on top for mobile */}
      <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-lg flex-shrink-0 md:order-none order-first mb-5 md:mb-0 lg:mt-12">
        <img
          src={anchor}
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-5 lg:pt-14 md:pt-14">
        <h3 className="text-lg md:text-xl lg:text-2xl inline-block px-2 py-1 rounded-md">
          Hello, I am <span className="bg-blue-700 rounded-md px-2 py-1 inline-block font-bold">Wisdom Onukak</span>
        </h3>
        <h4 className="text-3xl md:text-4xl lg:text-4xl font-bold">
          A certified ALX Virtual Assistant
        </h4>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
          I specialize in providing seamless administrative support to businesses and professionals, allowing them to focus on their core activities. I bring a unique blend of skills that ensure tasks are handled efficiently and with precision.
        </p>

        {/* Social Media Section */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
          <a
            href="https://web.facebook.com/me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-800 text-white px-6 py-2 rounded-lg shadow-md font-semibold hover:bg-blue-600 transition-all duration-200"
          >
            <FacebookIcon />
            Facebook
          </a>
          <a
            href="https://github.com/Mimisax-pixel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md font-semibold hover:bg-blue-700 transition-all duration-200"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/wisdomonukak"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md font-semibold hover:bg-blue-400 transition-all duration-200"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
        <hr className="border-2 border-blue-800 my-4" />
      </div>
    </div>
  );
};

export default About;
