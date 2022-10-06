import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import FormInput from "../components/FormInput";

const Profile = () => {
  // programmers state
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [git, setGit] = useState("");
  const [website, setWebsite] = useState("");
  const [avatar, setAvatar] = useState("");

  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="pt-12 bg-zinc-50 dark:bg-gray-800 w-full h-screen">
      <div className="mx-12 md:mx-24 lg:mx-32 grid grid-cols-1 md:grid-cols-2">
        <div className="mt-10 ml-6 bg-white dark:bg-slate-700 rounded-lg shadow-sm p-8">
          <Accordion
            open={open === 1}
            className="my-4 text-gray-600 dark:text-slate-200"
          >
            <AccordionHeader onClick={() => handleOpen(1)}>
              <h1 className="text-2xl mb-2">Personal Information</h1>
            </AccordionHeader>
            <AccordionBody>
              <div className="">
                <form className="my-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <FormInput type="file" label="Avatar" name="avatar" />
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
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your place..."
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            className="my-4 text-gray-600 dark:text-slate-200"
          >
            <AccordionHeader onClick={() => handleOpen(2)}>
              How to use Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            className="my-4 text-gray-600 dark:text-slate-200"
          >
            <AccordionHeader onClick={() => handleOpen(3)}>
              What can I do with Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
        </div>
        <div>user container</div>
      </div>
    </div>
  );
};

export default Profile;
