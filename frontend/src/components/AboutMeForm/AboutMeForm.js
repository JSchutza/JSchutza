import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import { thunk_updatePersonalInfo } from "../../store/thunks/personal.js";



const AboutMeForm = () => {
  const [ firstname, setFirstName ] = useState('');
  const [ lastname, setLastName ] = useState('');
  const [ jobtitle, setJobTitle ] = useState('');
  const [ abouttext, setAboutText ] = useState('');
  const [ githublink, setGitHubLink ] = useState('');
  const [ linkedinlink, setLinkedinLink ] = useState('');
  const dispatch = useDispatch();




  const onSubmit = event => {
    event.preventDefault();
    dispatch(thunk_updatePersonalInfo({ firstname, lastname, jobtitle, abouttext, githublink, linkedinlink }));
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

        <br />
          <Button variant="primary" onClick={event => onSubmit(event)}> Update </Button>
      </form>
      </Container>
      </Jumbotron>
    </>
  )
};

export default AboutMeForm;
