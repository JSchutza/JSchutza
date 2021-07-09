import { GET_PROJECTS, CREATE_PROJECT, DELETE_PROJECT } from '../types';



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




export {
  getProjects,
  createProject,
  deleteProject,



}
