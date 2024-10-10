"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HomeSection: React.FC = () => {
  return (
    <section className="min-h-screen  text-white flex flex-col justify-center items-center text-center">
      <div className="grid grid-cols-1">
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-pink-700 ">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Nátally",
                1000,
                "Software Engineer Intern",
                1000,
                "Biomedical Informatics student",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

      <p className="text-lg text-gray-400 mt-4">
        Welcome to my portfolio, where you can explore my journey, projects, and what drives me forward in the{" "}
        <span className="text-pink-600">&lt;tech world&gt;</span>
      </p>
      </div>
    </section>
  );
};

export default HomeSection;
