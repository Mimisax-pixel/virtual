import React from "react";
import work from "../assets/travel.png";
import anchor from "../assets/research.png";
import meeting from "../assets/meeting.png";

const Project = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Travel Itinerary",
      description: "During my training, I had the privilege of working on a client Itinerary.",
      workImage: work,
      link: "https://docs.google.com/presentation/d/1udkztAJrSrwiCAmxPXswJz2GrEDrePsymdjKl2EQfWI/edit?usp=sharing"
    },
    {
      id: 2,
      title: "Meeting Agenda",
      description: "This was a Fundraising event, a client reached out to me to draft out a meeting plan, also, I went ahead in a zoom meeting link for my client.",
      workImage: meeting,
      link: "https://docs.google.com/document/d/1iEXhoWXcmLyDPnTtz84cYDpHu5rnNf6IcbLinC49zwI/edit?usp=drive_link"
    },
    {
      id: 3,
      title: "Research on Parks and Cities in California",
      description: "",
      workImage: anchor,
      link: "https://docs.google.com/spreadsheets/d/1XJvgqQyqVpYhGaqaoIV1PpOqmdih0W1_M3L5P_mn1Q8/edit?usp=sharing",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-slate-900">
      <h3 className="text-white font-bold text-3xl text-center uppercase mb-2">
        Projects
      </h3>
      <p className="text-2xl text-white font-semi-bold text-center mb-12">
        Explore the stories behind my work, and see how I can help you find
        solutions and inspiration for your project.
      </p>

      {caseStudies.map((study, index) => (
        <div
          key={study.id}
          className={`flex flex-col lg:flex-row items-center justify-between mb-16 lg:mb-24 ${
            index % 2 === 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="lg:w-1/2">
            <img
              src={study.workImage}
              alt={study.title}
              className="w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left px-4">
            <h3 className="text-2xl text-white font-semibold mb-4">{study.title}</h3>
            <p className="text-lg text-white mb-4">{study.description}</p>
            {study.link && (
              <a
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Spreadsheet
              </a>
            )}
          </div>
        </div>
      ))}
      <hr className="border-2 border-blue-800 my-4" />
    </div>
  );
};

export default Project;
