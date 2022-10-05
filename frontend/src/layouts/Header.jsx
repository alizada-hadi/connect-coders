import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight, BsMoonStars, BsSun } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/auth/authSlice";
import { changeTheme } from "../features/ui/UISlice";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { access } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleChangeTheme = () => {
    setDarkMode(!darkMode);
    dispatch(changeTheme(darkMode));
  };
  const handleClick = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();
  return (
    <div className="w-full h-[50px] fixed bg-zinc-100 dark:bg-gray-800 drop-shadow-sm">
      <nav className="flex items-center justify-between mx-12 md:mx-20 lg:mx-32">
        <div className="flex items-center">
          <div className="flex items-center">
            <div>
              <h1 className="text-4xl dark:text-slate-100 font-semibold text-slate-500 mr-12">
                CC
              </h1>
            </div>
            <div className=" ">
              <ul className="ml-12 hidden dark:text-slate-100 text-lg md:flex">
                <li>
                  <Link to={"/"} className="flex items-center">
                    <AiOutlineHome className="mr-2" />
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-items">
          <button
            onClick={() => handleChangeTheme()}
            className="mr-8 border rounded-md transition ease-out duration-300 px-3 mt-1"
          >
            {darkMode ? <BsMoonStars /> : <BsSun className="text-white" />}
          </button>
          <Link
            to={"/signup"}
            className="flex items-center bg-cyan-600 px-4 py-2 mt-1 font-medium rounded-md text-slate-100 hover:bg-transparent hover:border-2 hover:text-slate-800 border-gray-800 ease-out duration-100"
          >
            Get Started <BsArrowRight className="ml-2" />
          </Link>
        </div>
        <div
          className="md:hidden cursor-pointer text-xl mt-2"
          onClick={handleClick}
        >
          {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
      </nav>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-100 w-full px-12"}>
        <li className="my-2 text-center border-b">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="my-2 text-center border-b">
          <Link to={"/"}>Home</Link>
        </li>
        <Link
          to={"/signup"}
          className="flex items-center my-8 bg-cyan-600 px-4 py-2 font-medium rounded-md text-slate-100 hover:bg-transparent hover:border-2 hover:text-slate-800 border-gray-800 ease-out duration-100"
        >
          Get Started <BsArrowRight className="ml-2" />
        </Link>
      </ul>
    </div>
  );
};

export default Header;
