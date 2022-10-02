import React, { useState, useEffect } from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { register, reset } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import Alerts from "../components/Alerts";
import { toast } from "react-toastify";

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
    <div className="flex items-center justify-around flex-col md:flex-row ">
      <div className="md:1/8"></div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/4 w-full bg-gray-100  mx-8 my-24 p-8 rounded-lg drop-shadow-md">
        <h2 className="text-2xl font-Nunito font-semibold mb-3">Register</h2>
        <div className="my-2">
          {message ? <Alerts type="info" message={message} /> : ""}
        </div>
        <form onSubmit={submitHandler}>
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
  );
};

export default Register;
