import React, { useEffect } from "react";
import { get_user } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  // const dispatch = useDispatch();
  // const { access } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   const token = access.access;
  //   const data = { token };
  //   if (access) {
  //     dispatch(get_user(data));
  //   }
  // }, [access, dispatch]);
  return <div>This ids the main page of this web app</div>;
};

export default Home;
