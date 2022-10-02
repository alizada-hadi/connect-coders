import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { activate } from "../features/auth/authSlice";
import { useParams, useNavigate } from "react-router-dom";

const Activate = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate("");
  const { status, error } = useSelector((state) => state.auth);

  const activateHandler = () => {
    const data = { uid: params.uid, token: params.token };
    dispatch(activate(data));
  };
  return (
    <div className="flex items-center justify-around flex-col md:flex-row ">
      <div className="md:1/8"></div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/4 w-full bg-gray-100  mx-8 my-24 p-8 rounded-lg drop-shadow-md">
        <h2 className="text-2xl font-Nunito font-semibold mb-3">
          Activate Account
        </h2>
        <button
          className="px-4 py-2 mt-4 bg-blue-800 text-white text-xl hover:bg-white hover:text-blue-800 hover:border-2 hover:border-blue-800 transition ease-in-out duration-500 rounded-md h-14 w-full"
          onClick={activateHandler}
        >
          {status === "loading"
            ? "Processing..."
            : status === "succeeded"
            ? navigate("/signin")
            : "Activate"}
        </button>
      </div>
    </div>
  );
};

export default Activate;
