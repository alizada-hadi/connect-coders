import axios from "axios";

const fetch_programmers = async () => {
  const response = await axios.get("/api/programmers/");
  return response.data;
};

const addSkill = async (data) => {
  const { token } = data;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("api/skill/create/", data, config);
  return response.data;
};

const programmerService = {
  fetch_programmers,
  addSkill,
};

export default programmerService;
