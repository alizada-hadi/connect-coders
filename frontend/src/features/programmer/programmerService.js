import axios from "axios";

const fetch_programmers = async () => {
  const response = await axios.get("/api/programmers/");
  return response.data;
};

const programmerService = {
  fetch_programmers,
};

export default programmerService;
