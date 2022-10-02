import axios from "axios";

const access = JSON.parse(localStorage.getItem("tokens"));

const get_programmer_profile = async (token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("/api/programmer/get/profile/", config);
  if (response.data) {
    localStorage.setItem("profile", JSON.stringify(response.data));
  }
  return response.data;
};

const programmer_profile = async (data) => {
  const { token } = data;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("/api/programmer/profile/", config, data);
  if (response.data) {
    localStorage.setItem("profile", JSON.stringify(response.data));
  }
  return response.data;
};

const programmersService = {
  programmer_profile,
  get_programmer_profile,
};

export default programmersService;
