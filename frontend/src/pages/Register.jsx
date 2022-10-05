import React, { useState, useEffect } from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { register, reset } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import Alerts from "../components/Alerts";
import { toast } from "react-toastify";
import Img from "../assets/image.jpg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const { status, user, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { email, username, password, re_password: confirmPassword };
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match ");
    }
    dispatch(register(data));
  };

  useEffect(() => {
    if (user || status === "succeeded") {
      setMessage(
        "We have sent you a confirmation email. Please check your inbox "
      );
      reset();
    } else {
      setMessage("");
    }
  }, [user]);

  return status === "loading" ? (
    <Spinner />
  ) : (
    <div className="flex w-full items-center justify-around flex-col md:flex-row bg-zinc-50 dark:bg-gray-800 ">
      <div className="w-full h-screen dark:bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=""></div>
          <div className="w-full md:w-[30%] shadow-md dark:bg-gray-700 bg-white h-[91%] md:absolute right-0 top-[3.2rem]">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-500">
                Register for free
              </h2>
              <form onSubmit={submitHandler} className=" mt-10">
                <FormInput
                  label="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="youremail@gmail.com"
                />
                <FormInput
                  label="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your Name"
                />
                <FormInput
                  label="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*************"
                />
                <FormInput
                  label="confirm password"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="*************"
                />
                <div>
                  <p className="mb-2 ml-2">
                    Already have an account?{" "}
                    <Link to={"/signin"} className="text-blue-800">
                      Sign in
                    </Link>
                  </p>
                </div>
                <Button type="submit" label="Sign up" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
