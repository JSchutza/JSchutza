
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';


import personalImg from "../../icons/Profile_Pic.jpg";

import styles from "./aboutbackup.module.css";



const AboutBackup = () => {


  return (
    <>
      <div className={styles.main_wrap} >

          <Jumbotron fluid>
            <Container>
              <Nav fill variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link href='https://github.com/JSchutza' >Github</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="https://www.linkedin.com/in/joshua-schutza-559819ba/" >Linkedin</Nav.Link>
                </Nav.Item>
              </Nav>


              <h1>Joshua Schutza </h1>
              <Image src={personalImg} fluid />


              <h2>Online Instructional Assistant</h2>
              <h2>About Me</h2>
              <p>
                I am a determined individual who is working towards a career as a leader, visionary, and advocate.
                One of my many objectives is to impact the workforce through developing individuals and drawing out their strengths.
                I am seeking a working and learning opportunity that will utilize my research skills and natural ability to see growth
                and potential within people and businesses.
              </p>

            </Container>
          </Jumbotron>
      </div>
    </>
  )
};

export default AboutBackup;
