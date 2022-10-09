import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";

const ProgrammerDetail = () => {
  const { id } = useParams();
  const { programmers } = useSelector((state) => state.programmers);
  const programmer = programmers.find((item) => item.id == id);
  return (
    <div className=" dark:bg-gray-800">
      <div className="pt-12 mx-12 md:mx-24 lg:mx-32">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-2 mt-12">
          <div className="border-2 rounded-lg px-3 py-4 dark:bg-slate-700">
            <img
              src={programmer.avatar}
              className="mx-auto rounded-full w-48 h-48 border-2 border-emerald-800 my-4"
              alt=""
            />
            <h1 className="text-3xl text-center dark:text-slate-200 font-bold">
              {programmer.first_name} {programmer.last_name}
            </h1>
            <h3 className="text-3xl text-center dark:text-slate-200 font-bold capitalize">
              developer
            </h3>
            <p className="text-xl dark:text-slate-200 font-medium capitalize text-center my-3">
              Full stack developer
            </p>
            <p className="text-center font-medium dark:text-slate-200">
              Lives in - {programmer.address}
            </p>

            <div className="my-10 flex items-center justify-evenly dark:text-slate-200">
              <a
                href={"/"}
                className="text-4xl text-blue-900 dark:text-slate-200"
              >
                <BsGithub />
              </a>
              <a
                href={"/"}
                className="text-4xl text-blue-900 dark:text-slate-200"
              >
                <BsTwitter />
              </a>
              <a
                href={"/"}
                className="text-4xl text-blue-900 dark:text-slate-200"
              >
                <FaGlobeAmericas />
              </a>
            </div>
            <button className=" w-full h-16 border-2 rounded-lg mt-5 text-xl hover:bg-slate-800 hover:border-slate-200 hover:text-slate-200 transition ease-out duration-500 dark:text-slate-200 ">
              Send Message
            </button>
          </div>
          <div className="lg:col-start-2 lg:col-span-4 ml-10">
            <div className="dark:text-slate-200">
              <h1 className="text-4xl uppercase mb-2 leading-8 font-bold">
                About
              </h1>
              <p className="text-gray-600 text-xl indent-8 text-justify dark:text-slate-200">
                {programmer.about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammerDetail;
