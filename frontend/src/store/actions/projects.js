import { GET_PROJECTS, CREATE_PROJECT } from '../types';



const getProjects = (projects) => ({
  type: GET_PROJECTS,
  projects
});



const createProject = (project) => ({
  type: CREATE_PROJECT,
  project
});



export {
  getProjects,
  createProject,



}
