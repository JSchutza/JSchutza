import { GET_EXPERIENCES, CREATE_EXPERIENCES } from '../types'



const getExperiences = (experiences) => ({
  type: GET_EXPERIENCES,
  experiences
});



const createExperiences = (experiences) => ({
  type: CREATE_EXPERIENCES,
  experiences
});






export {
  getExperiences,
  createExperiences,


}
