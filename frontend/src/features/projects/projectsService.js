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

const fetchProjects = async () => {
  const response = await axios.get("/api/projects/");
  return response.data;
};

const updateProject = async (data) => {
  const { slug, token } = data;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `/api/project/${slug}/update/`,
    data,
    config
  );
  return response.data;
};

const deleteProject = async (data) => {
  const { slug, token } = data;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`/api/project/${slug}/delete/`, config);
  return response.data;
};

const projectsService = {
  createProject,
  fetchProjects,
  updateProject,
  deleteProject,
};

export default projectsService;
