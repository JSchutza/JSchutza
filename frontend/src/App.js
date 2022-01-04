import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import Footer from './components/Footer';


import AboutMe from "./components/AboutMe";
import SkillsViewer from "./components/SkillsViewer";
import ProjectViewer from "./components/ProjectViewer";
import Resume from "./components/Resume";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import UpdateInfo from "./components/UpdateInfo";



import Container from 'react-bootstrap/Container';

import { useUser } from "./context/UserContext.js";


import './sass/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const MainApp = () => {
  return (
    <>
      <Intro />
      <Footer />
    </>
  )
};



const AdminApp = () => {
  return (
    <>
      <Container>
        <h1>Admin Dashboard</h1>
      </Container>

      <AboutMe isAdmin={true} />
      <SkillsViewer isAdmin={true} />
      <ProjectViewer isAdmin={true} />
      <Resume isAdmin={true} />
    </>
  )
};






const App = () => {
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
  if (!isUser) {
    return (
      <>
      <BrowserRouter>
        <NavBar userStatus={false}/>

        <Switch>
          <Route path="/" exact>
            <Sidebar />
            <MainApp />
          </Route>

          <Route path='/resume' exact>
            <Resume />
          </Route>

          <Route path='/login' exact>
            <LoginForm />
            <Footer />
          </Route>

        </Switch>
      </BrowserRouter>
      </>
    );
  };






  // if I am logged in -- give access to admin site so I can update things
  return (
    <BrowserRouter>
      <NavBar userStatus={true} />

        <Switch>
          <Route path='/' exact>
            <AdminApp />
          </Route>

          <Route path='/aboutme' exact>
            <Container>
              <h1>'Admin' About </h1>
            </Container>

            <Container>
              <UpdateInfo the_type={'aboutme'} />
            </Container>
          </Route>

          <Route path='/skillsviewer' exact>
            <Container>
              <h1>'Admin' Skills</h1>
            </Container>
            <Container>
              <UpdateInfo the_type={'skillsviewer'} />
            </Container>
          </Route>

          <Route path='/projectviewer' exact>
            <Container>
              <h1>'Admin' Project</h1>
            </Container>
            <Container>
              <UpdateInfo the_type={'projectviewer'} />
            </Container>
          </Route>

          <Route path='/resume' exact>
            <Container>
              <h1>'Admin' Resume</h1>
            </Container>
            <Container>
              <UpdateInfo the_type={'resume'} />
            </Container>
          </Route>

        </Switch>
    </BrowserRouter>
    );
}

export default App;
