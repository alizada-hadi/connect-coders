import React from "react";
import Avatar from "../assets/users/avatar-2.jpg";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to={"/"}>
      <div className="bg-white rounded-md border-2 dark:bg-slate-700 dark:border-gray-500 hover:shadow-md hover:shadow-outline">
        <div className="flex flex-col">
          <img
            src={Avatar}
            className="mx-auto rounded-full w-32 h-32 my-2"
            alt=""
          />
          <h2 className="text-2xl text-center dark:text-slate-200 mb-4">
            Hadi Alizada
          </h2>
          <p className="px-3 text-justify indent-8 text-gray-700 dark:text-slate-200">
            I am a self-tought full stack developer with 4 years of solid
            experience in this field. So far I have made many and various type
            of web based applications and...{" "}
          </p>
          <div className="grid grid-cols-3 items-center my-3 px-3 gap-2">
            <div class="text-sm px-3 py-1 bg-slate-200 text-gray-800 rounded-full dark:bg-gray-800 dark:text-slate-200">
              HTML
            </div>
            <div class="text-sm px-3 py-1 bg-slate-200 text-gray-800 rounded-full dark:bg-gray-800 dark:text-slate-200">
              Python
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
