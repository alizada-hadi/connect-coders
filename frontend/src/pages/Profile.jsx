import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profile } from "../features/auth/authSlice";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGithub,
} from "react-icons/ai";
import { BsGlobe, BsFillPencilFill } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, access } = useSelector((state) => state.auth);
  // programmers state
  const [first_name, setFirst_name] = useState(
    user ? user?.programmer?.first_name : ""
  );
  const [last_name, setLast_name] = useState(
    user ? user?.programmer?.last_name : ""
  );
  const [phone, setPhone] = useState(user ? user?.programmer?.phone : "");
  const [address, setAddress] = useState(user ? user?.programmer?.address : "");
  const [about, setAbout] = useState(user ? user?.programmer?.about : "");
  const [git, setGit] = useState(user ? user?.programmer?.git : "");
  const [gender, setGender] = useState(user ? user?.programmer?.gender : "");
  const [website, setWebsite] = useState(user ? user?.programmer?.website : "");
  const [avatar, setAvatar] = useState(user ? user?.programmer?.avatar : "");

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const token = access.access;
    const data = {
      first_name,
      last_name,
      phone,
      address,
      about,
      git,
      website,
      avatar,
      gender,
      token,
    };
    dispatch(profile(data));
  };

  const changeGenderHandler = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="pt-12 bg-zinc-50 dark:bg-gray-800 w-full h-screen">
      <div className="mx-12 md:mx-24 lg:mx-32 grid grid-cols-1 md:grid-cols-2 ">
        <div className="mt-10 ml-6 bg-white dark:bg-slate-700 rounded-lg shadow-sm p-8 ">
          <form className="my-2" onSubmit={submitHandler}>
            <h1 className="text-3xl font-semibold mb-4 dark:text-slate-200">
              Personal Information
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FormInput
                label="first name"
                value={first_name}
                type="text"
                name="first_name"
                placeholder="Your Name"
                onChange={(e) => setFirst_name(e.target.value)}
              />
              <FormInput
                label="last name"
                value={last_name}
                type="text"
                name="last_name"
                placeholder="Your Name"
                onChange={(e) => setLast_name(e.target.value)}
              />
              <FormInput
                label="phone number"
                value={phone}
                type="tel"
                name="phone"
                placeholder="+93-7859-58189"
                onChange={(e) => setPhone(e.target.value)}
              />
              <div>
                <span className="text-gray-700 font-semibold">Gender</span>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="Male"
                      checked={gender == "Male"}
                      onChange={changeGenderHandler}
                    />
                    <span className="ml-2">Male</span>
                  </label>

                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="Female"
                      checked={gender == "Female"}
                      onChange={changeGenderHandler}
                    />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </div>
              <FormInput
                label="Git hub"
                value={git}
                type="tel"
                name="git"
                placeholder="alizada/hadi"
                onChange={(e) => setGit(e.target.value)}
              />
              <FormInput
                label="website"
                value={website}
                type="tel"
                name="website"
                placeholder="https://www.hdi.com"
                onChange={(e) => setWebsite(e.target.value)}
              />
              <FormInput
                label="Git hub"
                value={git}
                type="tel"
                name="git"
                placeholder="alizada/hadi"
                onChange={(e) => setGit(e.target.value)}
              />
              <FormInput
                type="file"
                label="Avatar"
                name="avatar"
                onChange={handleUploadImage}
              />
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your Address
                </label>
                <textarea
                  id="address"
                  rows="2"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your place..."
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="about"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Bio/About
                </label>
                <textarea
                  id="about"
                  rows="2"
                  name="about"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="about yourself..."
                ></textarea>
              </div>
            </div>
            <Button type="submit" label="Save" />
          </form>
        </div>
        {user?.programmer ? (
          <div className="mt-10 ml-6 bg-white dark:bg-slate-700 dark:text-slate-200 rounded-lg shadow-sm p-8 border">
            <div className="block">
              <img
                src={user.programmer.avatar}
                className="mx-auto w-32 h-32 rounded-full border-2 border-slate-500 p-1"
                alt=""
              />
            </div>
            <div className="flex mt-16 ml-2 space-x-1">
              <div className="px-3 border-r">
                <div className="flex items-center">
                  <AiOutlineUser className="text-2xl mr-3" />
                  <span className="text-lg font-medium">
                    {user.programmer.first_name} {user.programmer.last_name}
                  </span>
                </div>
                <div className="flex items-center mt-3">
                  <AiOutlineMail className="text-2xl mr-3" />
                  <span className="text-lg font-medium">{user.email}</span>
                </div>
                <div className="flex items-center mt-3">
                  <AiOutlinePhone className="text-2xl mr-3" />
                  <span className="text-lg font-medium">
                    {user.programmer.phone}
                  </span>
                </div>
                <div className="flex items-center mt-3">
                  <AiOutlineGithub className="text-2xl mr-3" />
                  <span className="text-lg font-medium text-blue-600">
                    <a href={`https://www.github.com${user.programmer.git}`}>
                      {user.programmer.git}
                    </a>
                  </span>
                </div>
                <div className="flex items-center mt-3">
                  <BsGlobe className="text-2xl mr-3" />
                  <span className="text-lg font-medium">
                    {user.programmer.website}
                  </span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineLocationMarker className="text-2xl mr-3" />
                  <span className="text-lg font-medium">
                    {user.programmer.address}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="ml-3 text-2xl">
                  <BsFillPencilFill />
                </h3>
                <p className="px-3 mt-2 text-justify">
                  {user.programmer.about}
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Profile;
