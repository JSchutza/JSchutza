import { GET_EDUCATIONS, CREATE_EDUCATIONS } from '../types'



const getEducations = (educations) => ({
  type: GET_EDUCATIONS,
  educations
});



const createEducation = (educations) => ({
  type: CREATE_EDUCATIONS,
  educations
});




export {
  getEducations,
  createEducation,


}
