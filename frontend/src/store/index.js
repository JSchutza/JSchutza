import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// reducer imports here
import { usersReducer } from './reducers/session.js';
import { personalInfoReducer } from './reducers/personal.js';
import { skillsReducer } from './reducers/skills.js';
import { projectsReducer } from './reducers/projects.js';
import { experiencesReducer } from './reducers/experiences.js';
import { educationsReducer }from "./reducers/educations.js";

// root reducer here
const rootReducer = combineReducers({
  usersReducer,
  personalInfoReducer,
  skillsReducer,
  projectsReducer,
  experiencesReducer,
  educationsReducer,


});





let enhancer;



if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk));
}




const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};




export default configureStore;
