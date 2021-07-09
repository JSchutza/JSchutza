
import { GET_PROJECTS, CREATE_PROJECT } from '../types'




// reducers
const projectsReducer = (state = { projects: null, errors: null }, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return { ...action.projects };
    case CREATE_PROJECT:
      return { projects: { ...state.projects, ...action.projects } };
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
  projectsReducer,

}
