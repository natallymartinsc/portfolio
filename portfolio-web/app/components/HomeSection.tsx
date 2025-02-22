"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HomeSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 text-center">
        <h1 className="text-white mb-4 text-[60px] sm:text-[66px] lg:text-[70px] lg:leading-normal font-extrabold">
          <span className="bg-clip-text bg-gradient-to-r from-primary-100 to-secondary-600 text-pink-700">
            Hello, I&apos;m{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Nátally",
              1000,
              "Software Engineer",
              1000,
              "Biomedical Informatics",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-lg text-gray-400 mt-4">
          Welcome to my portfolio, where you can explore my journey, projects,
          and what drives me forward in the{" "}
          <span className="text-pink-600">&lt;tech world&gt;</span>
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
