import React, { useState, useEffect } from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { login, get_user } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, status, error, access } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { email, password };
    dispatch(login(data));
  };
  useEffect(() => {
    if (error) {
      toast.error("Invalid email or password ");
    }
  }, [error]);
  useEffect(() => {
    if (user || status === "succeeded") {
      toast.success("Logged in");
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    const token = access.access;
    const data = { token };
    if (access) {
      dispatch(get_user(data));
    }
  }, [access, dispatch]);

  return status === "loading" ? (
    <Spinner />
  ) : (
    <div className="flex items-center justify-around flex-col md:flex-row ">
      <div className="md:1/8"></div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/4 w-full bg-gray-100  mx-8 my-24 p-8 rounded-lg drop-shadow-md">
        <h2 className="text-2xl font-Nunito font-semibold mb-3">Login</h2>
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
            label="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*************"
          />
          <div className="flex justify-between flex-wrap">
            <div className="mb-2 ml-3 text-sm text-blue-800">
              <Link to="/reset-password">Forgot password?</Link>
            </div>
            <div>
              <p className="mb-2 text-sm">
                Don't have an account?{" "}
                <Link to={"/signup"} className="text-blue-800">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          <Button type="submit" label="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
