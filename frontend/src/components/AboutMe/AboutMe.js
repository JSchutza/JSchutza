import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import personalImg from "../../icons/Profile_Pic.jpg";



const AboutMe = ({ isAdmin=false }) => {
  return (
    <>
      <Jumbotron fluid>
        <Container>

          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link href="https://github.com/JSchutza">Github</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="https://www.linkedin.com/in/joshua-schutza-559819ba/">Linkedin</Nav.Link>
            </Nav.Item>
          </Nav>




          <h1>Joshua Schutza</h1>
            <Image src={personalImg} fluid />
          <h2>Software Engineer - Leader - Advocate</h2>


          <h2>About Me</h2>

        </Container>
      </Jumbotron>

      {isAdmin ? <div></div> : <></> }
    </>
  )
};

export default AboutMe;
