import React, { useEffect, useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';



const AboutMeForm = () => {
  const [ firstname, setFirstName ] = useState('');
  const [ lastname, setLastName ] = useState('');
  const [ jobtitle, setJobTitle ] = useState('');
  const [ abouttext, setAboutText ] = useState('');
  const [ githublink, setGitHubLink ] = useState('');
  const [ linkedinlink, setLinkedinLink ] = useState('');




  const onSubmit = event => {
    event.preventDefault();
  }




  return (
    <>
      <Jumbotron fluid>
      <Container>
      <form onSubmit={onSubmit}>
        <label>
          First Name
          <Form.Control
            type="text"
            name="firstname"
            value={firstname}
            onChange={event => setFirstName(event.target.value)}
          />
        </label>
        <br />

        <label>
          Last Name
          <Form.Control
            type="text"
            name="lastname"
            value={lastname}
            onChange={event => setLastName(event.target.value)}
          />
        </label>
        <br />

        <label>
          Job Title
          <Form.Control
            type="text"
            name="jobtitle"
            value={jobtitle}
            onChange={event => setJobTitle(event.target.value)}
          />
        </label>
        <br />

        <label>
          About Text
          <textarea
            name="abouttext"
            value={abouttext}
            onChange={event => setAboutText(event.target.value)}
          />
        </label>
        <br />

        <label>
          GitHub Link
          <Form.Control
            type="text"
            name="githublink"
            value={githublink}
            onChange={event => setGitHubLink(event.target.value)}
          />
        </label>
        <br />

        <label>
          Linkedin Link
          <Form.Control
            type="text"
            name="linkedinlink"
            value={linkedinlink}
            onChange={event => setLinkedinLink(event.target.value)}
          />
        </label>


      </form>
      </Container>
      </Jumbotron>
    </>
  )
};

export default AboutMeForm;
