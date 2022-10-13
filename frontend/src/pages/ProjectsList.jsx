import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchProjects } from "../features/projects/projectsSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import ProjectCard from "../components/ProjectCard";

const ProjectsList = () => {
  const dispatch = useDispatch();
  const { projects, status } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return status === "loading" ? (
    <Spinner />
  ) : (
    <div className="h-screen bg-white dark:bg-gray-800">
      <div className="pt-12">
        <div className="h-80 bg-slate-100 dark:bg-slate-700">
          <h1 className="text-center font-Roboto text-5xl pt-10 capitalize dark:text-slate-200">
            programmers best{" "}
            <span className="uppercase font-bold leading-10">Projects</span>
          </h1>
          <div className="w-full px-10 flex-col flex gap-3 md:flex-row md:px-0 items-center justify-center mt-4 md:mt-16">
            <input
              type="text"
              className="w-full md:w-[25rem] lg:w-[35rem] h-16 rounded-lg text-lg pl-3 focus:outline-none focus:ring focus:ring-blue-300 dark:text-slate-200 dark:bg-gray-800"
              placeholder="Search by names, skills, projects"
            />
            <button className="h-16 bg-white w-full md:w-48 md:ml-1 hover:border-2 border-slate-700 dark:hover:border-slate-200 rounded-lg text-xl flex items-center justify-center dark:text-slate-200 dark:bg-gray-800">
              <span>Search</span>
              <AiOutlineSearch className="ml-2 text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-12 md:mx-24 lg:mx-32">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-2 mt-6">
          <div className="">Side bar</div>
          <div className="md:col-start-2 md:col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
