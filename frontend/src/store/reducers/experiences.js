
import { GET_EXPERIENCES, CREATE_EXPERIENCES } from '../types'




// reducers
const experiencesReducer = (state = { experiences: null, errors: null }, action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
      return { ...action.experiences };
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
