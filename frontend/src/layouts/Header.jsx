import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/auth/authSlice";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { access } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const toggleHandler = () => {
    const menu = window.document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      setToggle(!toggle);
    } else {
      menu.classList.add("hidden");
      setToggle(!toggle);
    }
  };
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(reset());
    localStorage.removeItem("tokens");
    localStorage.removeItem("profile");
    navigate("/signin");
  };

  useEffect(() => {
    if (!access) {
      navigate("/signin");
    }
  }, [access, navigate]);

  return (
    <div className="w-full h-12">
      <div className="flex items-start justify-between md:mx-12 lg:mx-24 py-2">
        <div className="mr-10">logo</div>
        <div className="hidden w-full md:block" id="menu">
          <div className="flex justify-between  flex-col md:flex-row">
            <ul className="flex flex-col md:flex-row ">
              <li className="sm:ml-0">
                <Link to={"/signin"}>Home</Link>
              </li>
            </ul>
            <ul className="flex items-center flex-col md:flex-row">
              {access ? (
                <>
                  <li className="mr-4">
                    <Link to={"/profile"} className="">
                      Profile
                    </Link>
                  </li>
                  <li className="mr-4">
                    <button
                      onClick={logoutHandler}
                      className="flex items-center btn md:border-2 md:border-slate-500 md:rounded-lg p-2"
                    >
                      <span className="mr-1">Sign out</span>
                      <MdLogin className="text-lg" />
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="mr-4">
                    <Link
                      to={"/signin"}
                      className="flex items-center btn md:border-2 md:border-slate-500 md:rounded-lg p-2"
                    >
                      <span className="mr-1">Login</span>
                      <MdLogin className="text-lg" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"/signup"} className="flex items-center btn">
                      <span className="mr-1">Register</span>
                      <BiUserPlus className="text-lg" />
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div
          className="md:hidden mr-4 cursor-pointer text-xl text-gray-500 font-semibold"
          onClick={toggleHandler}
        >
          {toggle ? <FaTimes /> : <BsList />}
        </div>
      </div>
    </div>
  );
};

export default Header;
