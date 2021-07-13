
import { GET_EDUCATIONS, CREATE_EDUCATIONS } from '../types'




// reducers
const educationsReducer = (state = { educations: null, errors: null }, action) => {
  switch (action.type) {
    case GET_EDUCATIONS:
      return { ...action.educations };
    case CREATE_EDUCATIONS:
      return { educations: { ...state.educations, ...action.educations } };
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
  educationsReducer,

}
