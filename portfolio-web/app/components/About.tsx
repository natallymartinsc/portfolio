"use client";
import React from "react";

const About = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0  flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            Hi, I am Nátally! I am a biomedical informatics student at the
            Federal University of Health Sciences of Porto Alegre, with a
            passion for combining technology and healthcare. Currently, I am a
            software engineering intern, working to deepen my skills in backend
            and frontend development, particularly using .NET, C#, and Angular.
            Beyond programming, I am fascinated by bioinformatics and
            computational biology, exploring protein structure prediction and
            phylogenetics. I am also working on personal projects like app
            development and building my programming portfolio. In my free time,
            I enjoy learning new things, practicing crochet, and listening to
            podcasts. 
            <br />
            Over the years, I have been involved in interdisciplinary
            projects that merge biology and technology, looking for innovative
            solutions to problems that can achieve better outcomes through
            technology. I am excited to see where my passion for science and
            computing will take me in the future, and I am determined to embrace
            new challenges and keep evolving in the tech field.
          </p>
        </div>
        <div className="mt-8"></div>
      </div>
    </section>
  );
};

export default About;
