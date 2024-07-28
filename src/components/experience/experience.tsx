"use client";
import React from 'react';

const Skills = () => {
  const expInfo = [
    {
        year: "May-2024 - Present",
        role:"Full Stack Developer",
        title: "Bidfox.ai",
        desc: "Description ",
      },
    {
      year: "May 2023 - October 2023",
      role:"Frontend Developer",
      title: "Seclookup",
      desc: "Description",
    },
  ];

  return (
    <div id="skills" className="w-full py-16 text-white px-4">
      <div className="w-full mx-auto flex justify-center items-center mt-[-30px]">
        <h1 className="md:text-4xl sm:text-3xl text-xl text-[#00df9a] font-bold mx-auto">
          Experience
        </h1>
      </div>
      <div className="grid auto-rows-auto gap-10 justify-center items-center mt-10">
        {expInfo.map((exp, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-2">
            <div className="text-sm font-medium text-gray-300 text-end pr-10">{exp.year}</div>
            <div>
              <div className="font-bold">{exp.title}</div>
              <div className="text-gray-400">{exp.role}</div>
              <div className="pt-2 text-gray-400">{exp.desc}</div>
            </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Skills;
