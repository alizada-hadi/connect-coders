import axios from "axios";

const createProject = async (data) => {
  const { token } = data;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("/api/project/create/", data, config);
  return response.data;
};

const projectsService = {
  createProject,
};

export default projectsService;
