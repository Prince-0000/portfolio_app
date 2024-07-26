"use client"
import Card from "./card";
import Dukaan from "@/assests/grocery.png";
import Counterfiet from "@/assests/counterfiet.png";
import Workout from "@/assests/workout.png";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";

const Projects = () => {
    const slideLeft = () => {
    var slider = document.getElementById("slider");
    if(slider!==null)
      slider.scrollLeft = slider.scrollLeft - 500;
  };
    const slideRight = () => {
    var slider = document.getElementById("slider");
    if(slider!==null)
      slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div id="project" className="relative bg-white flex flex-col items-center">
      <h1 className="md:text-4xl mt-10 z-10 bg-white sm:text-3xl text-xl text-black font-bold mx-auto">
        PROJECTS
      </h1>

      <div
        id="slider"
        className=" mt-[-3rem] w-full bg-white py-[7rem] px-4 overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
      >
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer bg-white opacity-50 hover:opacity-100">
          <BsFillArrowLeftSquareFill onClick={slideLeft} size={30} />
        </div>
        <div className="px-[2rem] w-full mx-auto grid grid-flow-col auto-cols-max gap-8">
          <Card
            image={Workout}
            title="Workout App"
            liveUrl=""
            codeUrl="https://github.com/Prince-0000/workout_web"
          />
          <Card
            image={Workout}
            title="Workout App"
            liveUrl=""
            codeUrl="https://github.com/Prince-0000/workout_web"
          />
          <Card
            image={Dukaan}
            title="Grocery App"
            liveUrl="https://dukaann.vercel.app/"
            codeUrl="https://github.com/Prince-0000/grocery_web_app"
          />
          <Card
            image={Counterfiet}
            title="Counterfiet"
            liveUrl=""
            codeUrl="https://github.com/Prince-0000/Counterfeit"
          />
          <Card
            image={Workout}
            title="Workout App"
            liveUrl=""
            codeUrl="https://github.com/Prince-0000/workout_web"
          />
        </div>
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer bg-white opacity-50 hover:opacity-100">
              <BsFillArrowRightSquareFill onClick={slideRight} size={30} />
            </div>
      </div>
    </div>
  );
};

export default Projects;
