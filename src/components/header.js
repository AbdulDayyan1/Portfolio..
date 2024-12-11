import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Habib Abdul Dayyan</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
