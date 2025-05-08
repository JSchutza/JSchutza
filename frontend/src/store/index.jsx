import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// reducer imports here
import { usersReducer } from './reducers/session.jsx';
import { personalInfoReducer } from './reducers/personal.jsx';
import { skillsReducer } from './reducers/skills.jsx';
import { projectsReducer } from './reducers/projects.jsx';
import { experiencesReducer } from './reducers/experiences.jsx';
import { educationsReducer }from "./reducers/educations.jsx";

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



if (import.meta.env.MODE === "production") {
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
