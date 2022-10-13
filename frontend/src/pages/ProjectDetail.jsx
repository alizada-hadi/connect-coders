import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProgrammers } from "../features/programmer/programmerSlice";
import { fetchProjects } from "../features/projects/projectsSlice";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import Badge from "../components/Badge";
import { RiShareBoxLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const ProjectDetail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { projects, status } = useSelector((state) => state.projects);
  const { programmers } = useSelector((state) => state.programmers);

  const project = projects.find((project) => project.slug === slug);
  const programmer = programmers.find(
    (programmer) => programmer.id === project.programmer
  );

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchProgrammers());
  }, [dispatch]);
  return status === "loading" ? (
    <Spinner />
  ) : (
    <div className="pt-12 dark:bg-gray-800">
      <div className="mx-12 md:mx-24 lg:mx-32">
        <div className="grid grid-cols-1 md:grid-cols-4 ">
          <div className="mt-10">
            <h1 className="uppercase text-3xl font-bold font-Roboto text-gray-700 mb-4 dark:text-slate-200">
              Technologies & Tools
            </h1>
            <div className="grid grid-cols-4 my-2">
              {project?.techs.map((tech, index) => (
                <Badge key={index} item={tech.name} bgColor="#cbd5e1" />
              ))}
            </div>

            <div className="mt-16 flex flex-col space-y-2">
              <a href={`${project.live_preview_link}`}>
                <div className="flex items-center text-xl text-blue-400">
                  <RiShareBoxLine className="mr-2 text-2xl" />
                  <span>Live Preview</span>
                </div>
              </a>
              <a href={`${project.source_code_link}`}>
                <div className="flex items-center text-xl text-blue-400">
                  <BsGithub className="mr-2 text-2xl" />
                  <span>Source Code</span>
                </div>
              </a>
            </div>
          </div>
          <div className="md:col-start-2 md:col-span-4">
            <div className="mt-10 ml-48">
              <div className="mb-8">
                <img
                  src={project.cover_photo}
                  className="rounded-lg w-full h-[35rem]"
                  alt=""
                />
              </div>
              <h5 className="text-blue-400 text-xl font-Roboto font-medium dark:text-slate-200">
                {programmer?.first_name} {programmer?.last_name} The{" "}
                {programmer?.speciality}
              </h5>

              <div className="flex items-center space-x-4">
                <div className="mt-10 flex flex-col items-center">
                  <button className="dark:text-slate-200">
                    <BiUpArrow className="text-4xl text-gray-500" />
                  </button>
                  <div className="text-3xl font-bold text-gray-600 dark:text-slate-200">
                    0
                  </div>
                  <button className="dark:text-slate-200">
                    <BiDownArrow className="text-4xl text-gray-500" />
                  </button>
                </div>
                <div>
                  <h1 className="mt-10 text-4xl text-gray-700 font-semibold font-Roboto capitalize dark:text-slate-200">
                    {project?.title}
                  </h1>
                </div>
              </div>

              <h3 className="mt-7 uppercase text-2xl font-bold text-gray-700 dark:text-slate-200">
                About Project
              </h3>
              <p className="mt-4 text-justify text-lg text-gray-600 indent-4 dark:text-slate-200">
                {project?.description}
              </p>

              <hr className="my-12" />

              <h3 className="uppercase text-2xl font-bold text-gray-700 dark:text-slate-200">
                comment
              </h3>
              <form className="mt-3 mb-12">
                <div className="mr-32">
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button className="px-8 py-3 rounded-md border bg-gray-800 hover:bg-white hover:border-gray-800 text-white hover:text-gray-800 mt-3">
                  Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
