import { GET_SKILLS, CREATE_SKILL, DELETE_SKILL } from '../types'



const getSkills = (skills) => ({
  type: GET_SKILLS,
  skills
});




const createSkills = (skills) => ({
  type: CREATE_SKILL,
  skills
});



const deleteSkill = (skillId) => ({
  type: DELETE_SKILL,
  skillId
});



export {
  getSkills,
  createSkills,
  deleteSkill,


}
