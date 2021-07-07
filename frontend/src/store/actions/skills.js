import { GET_SKILLS, CREATE_SKILL } from '../types'



const getSkills = (skills) => ({
  type: GET_SKILLS,
  skills
});




const createSkills = (skills) => ({
  type: CREATE_SKILL,
  skills
})



export {
  getSkills,
  createSkills,


}
