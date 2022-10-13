import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProgrammers } from "../features/programmer/programmerSlice";
import Badge from "./Badge";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const dispatch = useDispatch();
  const { programmers } = useSelector((state) => state.programmers);
  const programmer = programmers.find(
    (programmer) => programmer.id === project.programmer
  );

  useEffect(() => {
    dispatch(fetchProgrammers());
  }, [dispatch]);
  return (
    <div className="border rounded-lg hover:shadow-md">
      <Link to={`/project/${project.slug}`}>
        <img
          src={project.cover_photo}
          alt=""
          className="object-fill w-full h-48 rounded-lg"
        />
      </Link>
      <div className="px-4 py-2 ">
        <Link to={`/project/${project.slug}`}>
          <h1 className="text-2xl mt-3 font-medium hover:text-blue-500 text-gray-700 font-Roboto dark:text-slate-200">
            {project?.title.substring(0, 20)}
          </h1>
        </Link>
        <p className="capitalize text-green-600 text-md mb-3">
          by {programmer?.first_name} {programmer?.last_name}
        </p>

        <p className="text-justify indent-4 text-gray-700 dark:text-slate-200">
          {project?.description.substring(0, 70)}...
        </p>
        <div className="grid grid-cols-3 my-1">
          {project?.techs.map((tech, index) => (
            <Badge key={index} item={tech.name} bgColor="#dbeafe" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
