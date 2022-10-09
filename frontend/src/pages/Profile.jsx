import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.auth);
  return status === "loading" ? (
    <Spinner />
  ) : (
    <div className="pt-12 bg-white dark:bg-gray-800 h-screen">
      <div className="mx-12 md:mx-24 lg:mx-32">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-2 mt-12">
          <div className="border-2 rounded-lg px-3 py-4 dark:bg-slate-700">
            <div className="flex flex-col items-center justify-center">
              <div className="my-5 ">
                <Link
                  to={`/${user?.programmer?.slug}`}
                  className="flex items-center px-2 py-1 border rounded-full bg-green-200 dark:bg-gray-800 dark:text-slate-200"
                >
                  <span>Edit</span>
                  <BiEdit className="ml-2 text-xl" />
                </Link>
              </div>
              <div>
                <img
                  src={user?.programmer?.avatar}
                  className="mx-auto rounded-full w-48 h-48 border-2 border-emerald-800 my-4"
                  alt=""
                />
                <h1 className="text-3xl text-center dark:text-slate-200 font-bold">
                  {user?.programmer?.first_name} {user?.programmer?.last_name}
                </h1>
                <p className="text-xl text-gray-500 dark:text-slate-200 font-medium capitalize text-center my-3">
                  {user?.programmer?.speciality}
                </p>
                <p className="text-center font-medium dark:text-slate-200">
                  Lives in - {user?.programmer?.address}
                </p>

                <div className="my-10 flex items-center justify-evenly dark:text-slate-200">
                  {user?.programmer?.git ? (
                    <a
                      href={`${user?.programmer?.git}/`}
                      className="text-4xl text-blue-900 dark:text-slate-200"
                    >
                      <BsGithub />
                    </a>
                  ) : (
                    ""
                  )}
                  {user?.programmer?.twitter ? (
                    <a
                      href={`${user?.programmer?.twitter}`}
                      className="text-4xl text-blue-900 dark:text-slate-200"
                    >
                      <BsTwitter />
                    </a>
                  ) : (
                    ""
                  )}
                  {user?.programmer?.website ? (
                    <a
                      href={`${user?.programmer?.website}/`}
                      className="text-4xl text-blue-900 dark:text-slate-200"
                    >
                      <FaGlobeAmericas />
                    </a>
                  ) : (
                    ""
                  )}

                  {user?.programmer?.linkedIn ? (
                    <a
                      href={`${user?.programmer?.linkedIn}/`}
                      className="text-4xl text-blue-900 dark:text-slate-200"
                    >
                      <BsLinkedin />
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-start-2 lg:col-span-4 ml-10">
            <div className="dark:text-slate-200">
              <h1 className="text-4xl uppercase mb-2 leading-8 font-bold">
                About
              </h1>
              <p className="text-gray-600 text-xl indent-8 text-justify dark:text-slate-200">
                {user?.programmer?.about}
              </p>
            </div>

            <div className="dark:text-slate-200 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl uppercase mb-2 leading-8 font-bold">
                    Skills
                  </h1>
                </div>
                <div>
                  <Link
                    to={`/new/skill`}
                    className="flex items-center px-4 py-1 border rounded-full bg-green-200 dark:bg-gray-800 dark:text-slate-200"
                  >
                    <span>Add Skill</span>
                    <AiOutlinePlus className="ml-2 text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
