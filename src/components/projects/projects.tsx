"use client";
import Card from "./card";
import Dukaan from "@/assests/grocery.png";
import Counterfeit from "@/assests/counterfiet.png";
import Workout from "@/assests/workout.png";
import Movie from "@/assests/movie.png";
import Voice from "@/assests/voice.png"
import Health from "@/assests/health.png"
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";

const Projects = () => {
  const projects = [
    {
      image: Voice,
      title: "Movie Recommendation App",
      liveUrl: "https://virtual-girlfriend-mauve.vercel.app",
      codeUrl: "https://github.com/Prince-0000/movies_frontend"
    },
    {
      image: Movie,
      title: "Movie Recommendation App",
      liveUrl: "https://filmfusion-neon.vercel.app",
      codeUrl: "https://github.com/Prince-0000/movies_frontend"
    },
    {
      image: Health,
      title: "Health Predictor",
      liveUrl: "https://predoctor.vercel.app",
      codeUrl: "https://github.com/Prince-0000/health_frontend"
    },
    {
      image: Dukaan,
      title: "Grocery App",
      liveUrl: "https://dukaann.vercel.app",
      codeUrl: "https://github.com/Prince-0000/grocery_web_app"
    },
    {
      image: Counterfeit,
      title: "Counterfeit",
      liveUrl: "",
      codeUrl: "https://github.com/Prince-0000/Counterfeit"
    },
  ];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    if (slider !== null) slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    if (slider !== null) slider.scrollLeft += 500;
  };

  return (
    <div id="project" className="relative bg-white flex flex-col items-center">
      <h1 className="md:text-4xl mt-10 z-10 bg-white sm:text-3xl text-xl text-black font-bold mx-auto">
        PROJECTS
      </h1>

      <div
        id="slider"
        className="mt-[-3rem] w-full bg-white py-[7rem] px-4 overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
      >
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer bg-white opacity-50 hover:opacity-100">
          <BsFillArrowLeftSquareFill onClick={slideLeft} size={30} />
        </div>
        <div className="px-[2rem] w-full mx-auto grid grid-flow-col auto-cols-max gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
            />
          ))}
        </div>
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer bg-white opacity-50 hover:opacity-100">
          <BsFillArrowRightSquareFill onClick={slideRight} size={30} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
