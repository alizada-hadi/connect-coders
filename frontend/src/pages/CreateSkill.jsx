import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const CreateSkill = () => {
  const dispatch = useDispatch();
  return (
    <div className="pt-12 dark:bg-gray-800 h-screen">
      <div className="max-w-4xl p-8 shadow-inner mx-auto mt-12 border-2 rounded-lg bg-white">
        <Link to={"/profile"} className="block">
          <span className="">
            <AiOutlineArrowLeft className="text-6xl bg-green-200 p-4 rounded-full hover:shadow-md dark:bg-gray-800 dark:text-slate-200" />
          </span>
        </Link>
        <div className="my-6 mx-12">
          <form>
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                First name
              </label>
              <input
                type="text"
                name="first_name"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your name"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateSkill;
