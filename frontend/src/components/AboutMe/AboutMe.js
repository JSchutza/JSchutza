import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import personalImg from "../../icons/Profile_Pic.jpg"


const AboutMe = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Joshua Schutza</h1>
            <Image src={personalImg} fluid />
          <h2>Software Engineer - Leader - Advocate</h2>
        </Container>
      </Jumbotron>
    </>
  )
};

export default AboutMe;
