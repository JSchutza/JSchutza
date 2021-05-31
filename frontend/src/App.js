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




function App() {
  const dispatch = useDispatch();
  const [ loaded, setLoaded ] = useState(false);
  const { isUser } = useUser();





  useEffect(() => {
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

          </Switch>
      </BrowserRouter>
      );
  }
}

export default App;