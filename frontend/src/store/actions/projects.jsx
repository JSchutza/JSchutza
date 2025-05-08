import { GET_PROJECTS, CREATE_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from '../types';



const getProjects = (projects) => ({
  type: GET_PROJECTS,
  projects
});



const createProject = (project) => ({
  type: CREATE_PROJECT,
  project
});



const deleteProject = (projectId) => ({
  type: DELETE_PROJECT,
  projectId
});



const updateProject = (project) => ({
  type: UPDATE_PROJECT,
  project
});



export {
  getProjects,
  createProject,
  deleteProject,
  updateProject,



}
