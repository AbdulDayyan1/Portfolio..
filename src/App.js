import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
