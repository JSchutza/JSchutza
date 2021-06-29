import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AboutMe from "./components/AboutMe";
import SkillsViewer from "./components/SkillsViewer";
import ProjectViewer from "./components/ProjectViewer";
import Resume from "./components/Resume";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import { useUser } from "./context/UserContext.js";
import UpdateInfo from "./components/UpdateInfo";
import { thunk_getPersonalInfo } from './store/thunks/personal.js';
import { thunk_getSkills } from "./store/thunks/skills.js";
import { thunk_getProjects } from "./store/thunks/projects.js";
import { thunk_getExperiences } from "./store/thunks/experiences.js";



function App() {
  const dispatch = useDispatch();
  const [ loaded, setLoaded ] = useState(false);
  const { isUser } = useUser();




  useEffect(() => {
    dispatch(thunk_getPersonalInfo());
    dispatch(thunk_getSkills());
    dispatch(thunk_getProjects());
    dispatch(thunk_getExperiences());
    setLoaded(true);
  }, [dispatch]);




  if (!loaded) {
    return null;
  }



  // if it is an Employer or anyone who is not me
  if (isUser === null) {
    return (
      <>
      <BrowserRouter>
        <NavBar userStatus={false}/>

        <Switch>
          <Route path="/" exact>
              <AboutMe />
              <SkillsViewer />
              <ProjectViewer />
          </Route>

          <Route path='/resume' exact>
              <Resume />
          </Route>

          <Route path='/login' exact>
              <LoginForm />
          </Route>

        </Switch>

      </BrowserRouter>
      </>
    );
  }



// if I am logged in -- give access to admin site so I can update things
  if (isUser !== null) {
    return (
      <BrowserRouter>
        <NavBar userStatus={true} />

          <Switch>
            <Route path='/' exact>
              <h1>Admin Dashboard</h1>
                <AboutMe isAdmin={true} />
                <SkillsViewer isAdmin={true} />
                <ProjectViewer isAdmin={true} />
                <Resume isAdmin={true} />
            </Route>

            <Route path='/aboutme' exact>
              <h1>'Admin' About Me</h1>
                <UpdateInfo the_type={'aboutme'} />
            </Route>

            <Route path='/skillsviewer' exact>
              <h1>'Admin' Skills Viewer</h1>
                <UpdateInfo the_type={'skillsviewer'} />
            </Route>

            <Route path='/projectviewer' exact>
              <h1>'Admin' Project Viewer</h1>
                <UpdateInfo the_type={'projectviewer'} />
            </Route>

            <Route path='/resume' exact>
              <h1>'Admin' Resume</h1>
                <UpdateInfo the_type={'resume'} />
            </Route>

          </Switch>
      </BrowserRouter>
      );
  }
}

export default App;
