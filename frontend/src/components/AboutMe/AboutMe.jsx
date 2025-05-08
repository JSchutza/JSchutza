import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'

import AboutBackup from "../AboutBackup";

import { thunk_getPersonalInfo } from '../../store/thunks/personal.jsx';




import styles from "./aboutme.module.css";



const AboutMe = ({ isAdmin=false }) => {
  const personalImg = 'https://joshuaschutzapersonal.s3.amazonaws.com/profile_img.JPG';
  const history = useHistory();
  const aboutInfo = useSelector(store => store.personalInfoReducer.user);
  const [ isHidden, setIsHidden ] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(thunk_getPersonalInfo());
  },[dispatch]);



  useEffect(() => {
    if(!isHidden) {
      setIsHidden(true);
    }

    if (!isAdmin) {
      setIsHidden(false);
    }
  },[]);


  const handleUpdate = event => {
    event.preventDefault();
    history.push('/aboutme');
  }


  const handleShow = event => {
    event.preventDefault();
    setIsHidden(false);
  }



  const handleHide = event => {
    event.preventDefault();
    setIsHidden(true);
  }


  if (!aboutInfo) return ( <AboutBackup /> );




  return (
    <div>
        {isAdmin ?
        <div className={styles.update_button_wrap} >
          <Container>
            <Button variant="primary" onClick={event => handleUpdate(event)}> Update </Button>
          </Container>
        </div>
        : null }


      {isHidden ?
          <div className={styles.about_button_wrap} >
            <Container>
              <Button variant="outline-dark" onClick={event => handleShow(event)}> <h1> About </h1> </Button>
            </Container>
          </div>
      :
        <div>
        <Jumbotron fluid>
          <Container>
            {isAdmin ?
              <Container>
                <Button variant="outline-danger" onClick={event => handleHide(event)}> <h5> Close </h5> </Button>
              </Container>
              :
              null }


              <Nav fill variant="tabs" className="justify-content-center">
              <Nav.Item>
                <Nav.Link href={aboutInfo.github_link}>Github</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href={aboutInfo.linkedin_link}>Linkedin</Nav.Link>
              </Nav.Item>
              </Nav>

            <div className={styles.about_name} >
              <h1>{aboutInfo.firstname} {aboutInfo.lastname}</h1>

              <div className={styles.profile_img} >
                {aboutInfo.avatar === null ? <Image src={personalImg} fluid /> : <Image src={aboutInfo.avatar} fluid /> }
              </div>
            </div>

            <div className={styles.about_jobtitle}>
              <h2>{aboutInfo.jobtitle}</h2>
            </div>

          </Container>
        </Jumbotron>


        <Jumbotron fluid>
          <Container>
            <div className={styles.about_info_title}>
              <h2>About Me</h2>
            </div>

            <div className={styles.about_info_text}>
              <p>{aboutInfo.about_text}</p>
            </div>
          </Container>
        </Jumbotron>
      </div>
    }

    </div>
  )
};

export default AboutMe;
