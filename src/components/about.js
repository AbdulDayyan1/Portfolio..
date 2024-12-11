import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto flex flex-col items-center text-center">
        <img
          src="your-profile-pic.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-6"
        />
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I am Habib Abdul Dayyan, a BTech IT Engineering student passionate
          about web development, software engineering, and innovative
          solutions. With expertise in React, Python, and Java, I thrive on
          creating intuitive and efficient web applications.
        </p>
      </div>
    </section>
  );
};

export default About;
