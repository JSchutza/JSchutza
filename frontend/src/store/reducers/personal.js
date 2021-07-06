
import { GET_PERSONAL_INFO, UPDATE_PERSONAL_INFO } from '../types'




// reducers
const personalInfoReducer = (state = { user: null, errors: null }, action) => {
  switch (action.type) {
    case GET_PERSONAL_INFO:
      return { user: action.personalInfo };
    case UPDATE_PERSONAL_INFO:
      return { ...state, ...action.personalInfo };

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
  personalInfoReducer,

}
