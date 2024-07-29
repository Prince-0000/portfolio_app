"use client";
import { useEffect, useState } from "react";
const ProjectDetail = () => {
  const [projectData, setProjectData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const data = localStorage.getItem("selectedProject");
    if (data) {
      setProjectData(JSON.parse(data));
    } else {
      // Handle case where no data is found
      console.error("No project data found");
    }
    setLoading(false);
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!projectData) {
    return <p>No project details available</p>;
  }
  return (
    <div className="p-8 text-white">
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-2 col-span-4">
        {/* col1 */}
        <div>
          {" "}
          <img
            src={projectData.image}
            alt={projectData.title}
            className="w-full h-auto mb-4"
          />
        </div>
        {/* col2*/}
        <div className="flex flex-col px-2">
          {/* row1 */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{projectData.title}</h1>
          </div>
          {/* row2 */}
          <div>
            {" "}
            <p className="text-xl mb-4">{projectData.description}</p>
          </div>
          <div className="mt-3 mb-6">
                  {projectData.tech.map((value:string, index:number) => (
                    <div
                      key={index}
                      className="text-sm mr-2 md:mt-0 sm:mb-0 mb-3 border-2 border-[#38705e] text-gray-200 px-2 py-1 inline-block rounded-full"
                    >
                      {value}
                    </div>
                  ))}
                </div>
          {/* row3 */}
          <div className="flex sm:flex-row flex-col justify-start items-start">
            <button className="bg-[#00DF9A] w-[200px] rounded-md font-medium sm:mr-3 sm:my-6 py-3 text-black">
              <a href={projectData.liveUrl} target="_blank" rel="noreferrer">
                {" "}
                Live Demo
              </a>
            </button>
            <button className="bg-[#00DF9A] w-[200px] rounded-md font-medium sm:ml-3 sm:my-6 my-4 py-3 p-4 text-black">
              <a href={projectData.codeUrl} target="_blank" rel="noreferrer">
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;
