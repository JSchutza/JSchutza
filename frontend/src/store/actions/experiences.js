import { GET_EXPERIENCES, CREATE_EXPERIENCES, DELETE_EXPERIENCES } from '../types'



const getExperiences = (experiences) => ({
  type: GET_EXPERIENCES,
  experiences
});



const createExperiences = (experiences) => ({
  type: CREATE_EXPERIENCES,
  experiences
});



const deleteExperiences = (experienceId) => ({
  type: DELETE_EXPERIENCES,
  experienceId
});



export {
  getExperiences,
  createExperiences,
  deleteExperiences,


}
