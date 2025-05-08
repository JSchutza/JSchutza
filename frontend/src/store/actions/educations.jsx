import { GET_EDUCATIONS, CREATE_EDUCATIONS, DELETE_EDUCATIONS, UPDATE_EDUCATIONS } from '../types'



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



const updateEducation = (educations) => ({
  type: UPDATE_EDUCATIONS,
  educations
});



export {
  getEducations,
  createEducation,
  deleteEducation,
  updateEducation,



}
