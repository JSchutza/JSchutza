import { GET_PERSONAL_INFO, UPDATE_PERSONAL_INFO } from '../types'



const getPersonalInfo = (personalInfo) => ({
  type: GET_PERSONAL_INFO,
  personalInfo
});


const updatePersonalInfo = (personalInfo) => ({
  type: UPDATE_PERSONAL_INFO,
  personalInfo
});


export {
  getPersonalInfo,
  updatePersonalInfo,


}
