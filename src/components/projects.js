import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "College MIS",
      description:
        "Optimized administrative workflows using Java and MySQL.",
      link: "#", // Replace with the live demo or GitHub link
    },
    {
      title: "Attendance System",
      description:
        "Automated image-based attendance system using Python and OpenCV.",
      link: "#", // Replace with the live demo or GitHub link
    },
    {
      title: "Dayyan's ChatGPT",
      description:
        "AI-powered chatbot using Python, integrated with Discord. Implemented OpenAI API for responses.",
      link: "#", // Replace with the live demo or GitHub link
    },
    {
      title: "Weather Monitoring System",
      description:
        "Real-time weather app using Flask backend and React frontend. Integrated with Open WeatherMap API.",
      link: "#", // Replace with the live demo or GitHub link
    },
    {
      title: "React Todo App",
      description:
        "A simple and effective task management app built with React.js.",
      video: "react.mp4", // Path to video file in public/videos/
    },
    {
      title: "Habib's Cricket Club Website",
      description:
        "A responsive website for a cricket club built using HTML, CSS, and JavaScript.",
      video: "cricket.mp4", // Path to video file in public/videos/
    },
    {
      title: "Chat App",
      description:
        "A real-time chat application using React and Node.js. Features user authentication, message threading, and notifications.",
      link: "https://justchat-two.vercel.app/",
    },
    {
      title: "Cryptocurrency App",
      description:
        "A cryptocurrency tracking app using React and Chakra UI. Fetches real-time data using external APIs.",
      link: "https://react-crypto-app-sandy.vercel.app/coins/",
    },
    {
      title: "Weather App",
      description:
        "A responsive weather application utilizing React.js. Provides real-time weather data and 7-day forecasts.",
      link: "https://weather-app-pi-lyart.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <p className="text-center mb-8">
          Check out all my projects on{" "}
          <a
            href="https://github.com/AbdulDayyan1/All-Projects-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-bold"
          >
            GitHub
          </a>
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p>{project.description}</p>
              {project.video ? (
                <video
                  controls
                  className="w-full rounded-lg mt-4"
                  src={`${process.env.PUBLIC_URL}/videos/${project.video}`} // Correct path to videos in the public folder
                  alt={project.title}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline mt-4 block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
