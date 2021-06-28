
import { GET_SKILLS } from '../types'




// reducers
const skillsReducer = (state = { skills: null, errors: null }, action) => {
  switch (action.type) {
    case GET_SKILLS:
      return { ...action.skills };
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