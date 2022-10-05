import React, { useEffect } from "react";
import { get_user } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  return (
    <div className="h-screen bg-zinc-50 dark:bg-gray-800">
      This ids the main page of this web app
    </div>
  );
};

export default Home;
