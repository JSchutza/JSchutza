import { GET_EDUCATIONS, CREATE_EDUCATIONS, DELETE_EDUCATIONS } from '../types'



const getEducations = (educations) => ({
  type: GET_EDUCATIONS,
  educations
});



const createEducation = (educations) => ({
  type: CREATE_EDUCATIONS,
  educations
});



const deleteEducation = (educationId) => ({
  type: DELETE_EDUCATIONS,
  educationId
});




export {
  getEducations,
  createEducation,
  deleteEducation,



}
