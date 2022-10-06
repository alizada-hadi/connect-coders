import React, { useEffect } from "react";
import { get_user } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  return (
    <div className="h-screen bg-zinc-50 dark:bg-gray-800">
      <div className="relative">
        <div className="h-80 bg-slate-200 dark:bg-slate-700 drop-shadow-sm relative z-10">
          <h1 className="text-center font-Nunito text-5xl pt-10 capitalize dark:text-slate-200">
            We are connecting the{" "}
            <span className="uppercase font-bold leading-10">programmers</span>
          </h1>
          <div className="w-full px-10 flex-col flex gap-3 md:flex-row md:px-0 items-center justify-center mt-4 md:mt-16">
            <input
              type="text"
              className="w-full md:w-[25rem] lg:w-[35rem] h-16 rounded-lg text-lg pl-3 focus:outline-none focus:ring focus:ring-blue-300 dark:text-slate-200 dark:bg-gray-800"
              placeholder="Search by names, skills, projects"
            />
            <button className="h-16 bg-white w-full md:w-48 md:ml-1 rounded-lg text-xl flex items-center justify-center dark:text-slate-200 dark:bg-gray-800">
              <span>Search</span>
              <AiOutlineSearch className="ml-2 text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
