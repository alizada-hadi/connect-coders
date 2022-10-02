import React, { useState, useEffect } from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { change_password } from "../features/auth/authSlice";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPasswordConfirm = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [new_password, setNew_password] = useState("");
  const [re_new_password, setRe_new_password] = useState("");
  const navigate = useNavigate();

  const { status } = useSelector((state) => state.auth);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      uid: params.uid,
      token: params.token,
      new_password,
      re_new_password,
    };
    dispatch(change_password(data));
  };

  useEffect(() => {
    if (status === "succeeded") {
      toast.success("Password changed successfully ");
    }
  }, [status]);
  return (
    <div className="flex items-center justify-around flex-col md:flex-row ">
      <div className="md:1/8"></div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/4 w-full bg-gray-100  mx-8 my-24 p-8 rounded-lg drop-shadow-md">
        <h2 className="text-2xl font-Nunito font-semibold mb-3">
          Create new password
        </h2>
        <form onSubmit={submitHandler}>
          <FormInput
            label="new password"
            type="password"
            name="new_password"
            value={new_password}
            onChange={(e) => setNew_password(e.target.value)}
            placeholder="********"
          />
          <FormInput
            label="re-type password"
            type="password"
            name="re_new_password"
            value={re_new_password}
            onChange={(e) => setRe_new_password(e.target.value)}
            placeholder="********"
          />
          {status === "loading" ? (
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Processing...
            </button>
          ) : status === "succeeded" ? (
            navigate("/signin")
          ) : (
            <Button type="submit" label="Change Password" />
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordConfirm;
