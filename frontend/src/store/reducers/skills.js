
import { GET_SKILLS, CREATE_SKILL, DELETE_SKILL, UPDATE_SKILL } from '../types'




// reducers
const skillsReducer = (state = { skills: null, errors: null }, action) => {
  switch (action.type) {
    case GET_SKILLS:
      return { ...action.skills };
    case CREATE_SKILL:
      return { skills: { ...state.skills, ...action.skills } };
    case DELETE_SKILL:
      const id = action.skillId;
      delete state.skills[id];
      return { ...state };
    case UPDATE_SKILL:
      return { skills: { ...state.skills, ...action.skills } };


    // case REMOVE_USER:
    //   return { user: null, errors: null };
    // case VALIDATION_ERRORS:
    //   return { user: null, errors: action.errors };
    // case CLEAR_ERRORS:
    //   return { user: null, errors: null };
    default:
      return state;
  }
}






export {
  skillsReducer,

}
