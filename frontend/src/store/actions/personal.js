import { GET_PERSONAL_INFO } from '../types'



const getPersonalInfo = (personalInfo) => ({
  type: GET_PERSONAL_INFO,
  personalInfo
});



export {
  getPersonalInfo,


}
