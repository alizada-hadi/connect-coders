import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetch_profile,
  update_profile,
} from "../features/programmers/programmersSlice";
import Spinner from "../components/Spinner";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const Profile = () => {
  const { access } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem("profile"));
  const [first_name, setFirst_name] = useState(user ? user?.first_name : "");
  const [last_name, setLast_name] = useState(user ? user?.last_name : "");
  const [phone, setPhone] = useState(user ? user?.phone : "");
  const [address, setAddress] = useState(user ? user?.address : "");
  const [about, setAbout] = useState(user ? user?.about : "");
  const [gender, setGender] = useState(user ? user?.gender : "");
  const [git, setGit] = useState(user ? user?.git : "");
  const [website, setWebsite] = useState(user ? user?.website : "");
  const [avatar, setAvatar] = useState(user ? user?.avatar : "");
  const [email, setEmail] = useState(user ? user.user?.email : "");
  const [username, setUsername] = useState(user ? user.user?.username : "");

  const dispatch = useDispatch();
  useEffect(() => {
    const token = access.access;
    dispatch(fetch_profile(token));
  }, [dispatch]);

  const handleFileUpload = (e) => {
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
      gender,
      avatar,
      token,
      email,
      username,
    };
    dispatch(update_profile(data));
  };

  return (
    <div className="w-full">
      <div className="mx-24">
        <h2 className="text-3xl">Update Profile</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <form className="mt-10" onSubmit={submitHandler}>
              <div className="flex items-center flex-wrap gap-4">
                <FormInput
                  className="w-full"
                  type="text"
                  name="first_name"
                  label="first name"
                  value={first_name}
                  onChange={(e) => setFirst_name(e.target.value)}
                />
                <FormInput
                  className="w-full"
                  type="text"
                  name="last_name"
                  label="last name"
                  value={last_name}
                  onChange={(e) => setLast_name(e.target.value)}
                />
                <FormInput
                  className="w-full"
                  type="text"
                  name="phone"
                  label="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div>
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Address
                  </label>
                  <textarea
                    name="address"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    cols="30"
                    rows="2"
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
                    name="about"
                    id="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    cols="30"
                    rows="2"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="About yourself..."
                  ></textarea>
                </div>

                <div className="w-1/2">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Gender
                  </label>
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input
                        id="inline-radio"
                        type="radio"
                        value={gender}
                        name="inline-radio-group"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender == "Male"}
                      />
                      <label
                        onClick={() => setGender("Male")}
                        htmlFor="inline-radio"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Male
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        id="inline-2-radio"
                        type="radio"
                        value={gender}
                        name="inline-radio-group"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender == "Female"}
                      />
                      <label
                        onClick={() => setGender("Female")}
                        htmlFor="inline-2-radio"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    for="file_input"
                  >
                    Upload Image
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    name="avatar"
                    onChange={handleFileUpload}
                    type="file"
                  />
                </div>
                <FormInput
                  className="w-full"
                  type="text"
                  name="git"
                  label="Git Hub"
                  value={git}
                  onChange={(e) => setGit(e.target.value)}
                />
                <FormInput
                  className="w-full"
                  type="text"
                  name="website"
                  label="Website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              <Button type="submit" label="Save" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
