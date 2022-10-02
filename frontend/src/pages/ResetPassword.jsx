import React, { useState, useEffect } from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { reset_password } from "../features/auth/authSlice";
import Alerts from "../components/Alerts";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { status, error } = useSelector((state) => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(reset_password({ email }));
  };

  useEffect(() => {
    if (status === "succeeded") {
      setMessage("Check your inbox ");
    } else {
      setMessage("");
    }
  }, [status]);

  return (
    <div className="flex items-center justify-around flex-col md:flex-row ">
      <div className="md:1/8"></div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/4 w-full bg-gray-100  mx-8 my-24 p-8 rounded-lg drop-shadow-md">
        <h2 className="text-2xl font-Nunito font-semibold mb-3">
          Reset Password
        </h2>
        <div className="my-2">
          {message ? <Alerts type="info" message={message} /> : ""}
        </div>
        <form onSubmit={submitHandler}>
          <FormInput
            label="reset password"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="youremail@gmail.com"
          />

          {status === "loading" ? (
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Processing...
            </button>
          ) : (
            <Button type="submit" label="Reset" />
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
