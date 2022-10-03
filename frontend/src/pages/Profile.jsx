import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_user } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import FormInput from "../components/FormInput";

const Profile = () => {
  const dispatch = useDispatch();
  const access = JSON.parse(localStorage.getItem("tokens"));
  const { user } = useSelector((state) => state.auth);
  const [first_name, setFirst_name] = useState(
    user ? user?.programmer?.first_name : ""
  );
  const [last_name, setLast_name] = useState(
    user ? user?.programmer?.last_name : ""
  );
  useEffect(() => {
    const token = access.access;
    const data = { token };
    dispatch(get_user(data));
  }, []);
  return (
    <div className="mx-24 mt-12">
      <p className="text-3xl">Profile page</p>
      <div>
        <form className="w-full">
          <div className="flex flex-items-center">
            <div className="w-1/2">
              <FormInput
                type="text"
                label="first name"
                value={first_name}
                name="first_name"
                onChange={(e) => setFirst_name(e.target.value)}
                placeholder="First name"
              />
            </div>
            <div className="w-1/2">
              <FormInput
                type="text"
                label="first name"
                value={first_name}
                name="first_name"
                onChange={(e) => setFirst_name(e.target.value)}
                placeholder="First name"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
