import React from "react";
import { FaReact, FaPython, FaJava, FaNodeJs } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Node.js", icon: <FaNodeJs /> },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-2xl"
            >
              <div className="text-blue-500 text-6xl mb-4">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
