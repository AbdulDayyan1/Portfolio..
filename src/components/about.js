import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto flex flex-col items-center text-center">
        <img
          src="/pic.jpg " // Correct path to the image in the public folder
          alt="Profile"
          className="w-32 h-32 rounded-full mb-6"
        />
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I am <strong>Habib Abdul Dayyan</strong>, a passionate BTech IT Engineering student specializing in web development, software engineering, and innovative technology solutions. With strong expertise in modern web technologies like React, Node.js, and Django, along with proficiency in Python, Java, and JavaScript, I am dedicated to creating seamless, efficient, and user-centric web applications. I continuously strive to explore new tools and technologies to solve real-world problems, providing high-quality software that enhances user experience and drives innovation.
        </p>
      </div>
    </section>
  );
};

export default About;
