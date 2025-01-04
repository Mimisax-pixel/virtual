import React from "react";
import anchor from "../assets/data.png";
import anchor1 from "../assets/message.png";
import anchor2 from "../assets/calendar.png";
import itinerary from "../assets/itinerary.png";
import research from "../assets/onlineresearch.png";

const Industries = () => {
  return (
    <div className="bg-slate-900 py-16 px-8">
      <div className="container mx-auto px-6 lg:px-24 text-center">
        <div className="mb-12">
          <h3 className="font-bold text-3xl text-white uppercase mb-2">
            Services
          </h3>
          <h2 className="text-2xl font-semi-bold text-white mb-4">
            These are the services I offer as a virtual Assistant.
          </h2>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 ">
        <div className="bg-gray-50 rounded-lg shadow-lg p-6">
          <img
            src={anchor}
            alt="anchor image"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Data Entry
          </h3>
          <p className="text-gray-600 mb-4">
            I accurately input and organize data to maintain consistency and
            efficiency. I ensure all records are up-to-date and error-free. This
            streamlines processes and saves valuable time. You can trust me to
            handle sensitive information securely.
          </p>
        </div>
        <div className=" bg-gray-50 rounded-lg shadow-lg p-6">
          <img
            src={anchor1}
            alt="anchor image"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Email Management
          </h3>
          <p className="text-gray-600 mb-4">
            I organize and prioritize your inbox to ensure important emails are
            addressed promptly. I manage responses, sort messages, and minimize
            clutter. This streamlines communication and saves you time. You’ll
            always stay on top of your correspondence.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg shadow-lg p-6">
          <img
            src={anchor2}
            alt="anchor image"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Calendar Management
          </h3>
          <p className="text-gray-600 mb-4">
            I handle scheduling to keep your day structured and efficient. I
            coordinate meetings, appointments, and reminders seamlessly. This
            eliminates conflicts and ensures you never miss important events.
            Your time is managed effectively.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg shadow-lg p-6">
          <img
            src={itinerary}
            alt="anchor image"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Travel Itinerary
          </h3>
          <p className="text-gray-600 mb-4">
            I plan every detail of your trips, from bookings to schedules. I
            ensure smooth travel arrangements tailored to your preferences. This
            minimizes stress and maximizes convenience. Your travel experience
            will always be seamless.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg shadow-lg p-6">
          <img
            src={research}
            alt="anchor image"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Online Research
          </h3>
          <p className="text-gray-600 mb-4">
            I provide detailed, reliable research tailored to your needs. I
            gather actionable insights from credible sources. This helps you
            make informed decisions quickly. My research saves you time and
            effort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Industries;
