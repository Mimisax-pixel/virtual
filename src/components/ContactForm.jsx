import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactOptions = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-black">
        Connect With Me
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* WhatsApp */}
        <a
          href="https://wa.me/+2349060733273" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 md:bg-slate-900 md:hover:bg-green-600 hover:bg-green-600 text-white flex flex-col items-center gap-2 p-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 w-full md:w-1/3 text-center animate-slide-in"
        >
          <WhatsAppIcon fontSize="large" />
          <div>
            <h3 className="text-lg font-bold m-3">WhatsApp</h3>
            <p className="text-sm font-semi-bold">In need of a fast response or consultation? We're here to chat.</p>
            <p className="text-sm mt-2">+2349060733273</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:wiseonu@gmail.com" 

          className="bg-blue-800 hover:bg-blue-600 text-white flex flex-col items-center gap-2 p-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 w-full md:w-1/3 text-center animate-slide-in"
        >
          <EmailIcon fontSize="large" />
          <div>
            <h3 className="text-lg font-bold m-3 lg:text-2xl">Email</h3>
            <p className="text-sm font-semi-bold">For professional inquiries or ongoing support, I am just an email away.</p>
            <p className="text-sm font-bold mt-2 underline lg:text-1xl ">wiseonu@gmail.com</p>
          </div>
        </a>

        {/* Phone Call */}
        <a
          href="tel:+2349060733273" 
          className="bg-slate-900 md:bg-slate-900 md:hover:bg-yellow-600 hover:bg-yellow-600 text-white flex flex-col items-center gap-2 p-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 w-full md:w-1/3 text-center animate-slide-in"
        >
          <PhoneIcon fontSize="large" />
          <div>
            <h3 className="text-lg font-bold m-3 lg:text-2xl">Phone</h3>
            <p className="text-sm lg:text-1xl font-semi-bold">Let's discuss your next project! I am active!</p>
            <p className="text-sm mt-2">+2349060733273</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactOptions;
