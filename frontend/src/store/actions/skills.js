import { GET_SKILLS, CREATE_SKILL } from '../types'



const getSkills = (skills) => ({
  type: GET_SKILLS,
  skills
});




const createSkills = (skill) => ({
  type: CREATE_SKILL,
  skill
})



export {
  getSkills,
  createSkills,


}
