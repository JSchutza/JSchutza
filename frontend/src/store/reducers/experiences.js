
import { GET_EXPERIENCES, CREATE_EXPERIENCES, DELETE_EXPERIENCES } from '../types'




// reducers
const experiencesReducer = (state = { experiences: null, errors: null }, action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
      return { ...action.experiences };
    case CREATE_EXPERIENCES:
      return { experiences: { ...state.experiences, ...action.experiences } };
    case DELETE_EXPERIENCES:
      const id = action.experienceId;
      delete state.experiences[id];
      return { ...state };
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
  experiencesReducer,

}
