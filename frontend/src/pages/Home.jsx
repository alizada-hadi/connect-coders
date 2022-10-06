import React, { useEffect } from "react";
import { get_user } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  return (
    <div className="h-screen bg-zinc-50 dark:bg-gray-800">
      <div className="pt-12">
        <div className="h-80 bg-slate-200 dark:bg-slate-700 drop-shadow-sm">
          <h1 className="text-center font-Nunito text-5xl pt-10 capitalize">
            We are connecting the{" "}
            <span className="uppercase font-bold">programmers</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
