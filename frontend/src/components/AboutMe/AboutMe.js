import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import personalImg from "../../icons/Profile_Pic.jpg";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";




const AboutMe = ({ isAdmin=false }) => {
  const history = useHistory();
  const aboutInfo = useSelector(store => store.personalInfoReducer.user);

  const handleUpdate = event => {
    event.preventDefault();
    history.push('/aboutme');
  }




  return (
    <>
      {isAdmin ? <div>
        <a href="/" onClick={event => handleUpdate(event)}> Update </a>
      </div> : <></>}


      <Jumbotron fluid>
        <Container>

          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link href={aboutInfo?.github_link}>Github</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href={aboutInfo?.linkedin_link}>Linkedin</Nav.Link>
            </Nav.Item>
          </Nav>




          <h1>{aboutInfo?.firstname} {aboutInfo?.lastname}</h1>
          {aboutInfo?.avatar === null ?
            <Image src={personalImg} fluid />
            :
            <Image src={aboutInfo?.avatar} fluid />
          }

          {aboutInfo?.jobtitle === null ?
            <h2>Software Engineer - Leader - Advocate</h2>
            :
            <h2>{aboutInfo?.jobtitle}</h2>
          }

          <h2>About Me</h2>
          {aboutInfo?.about_text === null ?
            <p>
              I am a determined individual who is working towards a career as a leader, visionary, and advocate.
              One of my many objectives is to impact the workforce through developing individuals and drawing out their strengths.
              I am seeking a working and learning opportunity that will utilize my research skills and natural ability to see
                growth and potential within people and businesses.
            </p>
          :
            <p>{aboutInfo?.about_text}</p>
          }


        </Container>
      </Jumbotron>


    </>
  )
};

export default AboutMe;
