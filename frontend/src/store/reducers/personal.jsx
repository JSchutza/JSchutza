
import { GET_PERSONAL_INFO, UPDATE_PERSONAL_INFO } from '../types'




// reducers
const personalInfoReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case GET_PERSONAL_INFO:
      return { ...state, user: action.personalInfo.user  };

    case UPDATE_PERSONAL_INFO:
      return { ...state, ...action.personalInfo };

    default:
      return state;
  }
}






export {
  personalInfoReducer,

}
