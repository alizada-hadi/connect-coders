import axios from "axios";

const signup = async (data) => {
  const response = await axios.post("/accounts/auth/users/", data);
  return response.data;
};

// login

const signin = async (data) => {
  const response = await axios.post("/accounts/auth/jwt/create/", data);
  if (response.data) {
    localStorage.setItem("tokens", JSON.stringify(response.data));
  }
  return response.data;
};

const get_user = async (data) => {
  const { token } = data;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("/accounts/user/", config);
  if (response.data) {
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  }
  return response.data;
};
// activate user
const activate = async (data) => {
  const response = await axios.post("/accounts/auth/users/activation/", data);
  return response.data;
};

// reset password

const reset_password = async (email) => {
  const response = await axios.post(
    "/accounts/auth/users/reset_password/",
    email
  );
  return response.data;
};

const change_password = async (data) => {
  const response = await axios.post(
    "/accounts/auth/users/reset_password_confirm/",
    data
  );
  return response.data;
};

const authService = {
  signup,
  activate,
  signin,
  reset_password,
  change_password,
  get_user,
};

export default authService;
