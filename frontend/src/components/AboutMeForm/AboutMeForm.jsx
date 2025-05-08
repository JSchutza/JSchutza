import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import { thunk_updatePersonalInfo } from "../../store/thunks/personal.jsx";



const AboutMeForm = () => {
  const [ firstname, setFirstName ] = useState('');
  const [ lastname, setLastName ] = useState('');
  const [ jobtitle, setJobTitle ] = useState('');
  const [ about_text, setAboutText ] = useState('');
  const [ github_link, setGitHubLink ] = useState('');
  const [ linkedin_link, setLinkedinLink ] = useState('');
  const dispatch = useDispatch();




  const onSubmit = event => {
    event.preventDefault();
    const payload = { firstname, lastname, jobtitle, about_text, github_link, linkedin_link };
    dispatch(thunk_updatePersonalInfo(payload));
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
            value={about_text}
            onChange={event => setAboutText(event.target.value)}
          />
        </label>
        <br />

        <label>
          GitHub Link
          <Form.Control
            type="text"
            name="githublink"
            value={github_link}
            onChange={event => setGitHubLink(event.target.value)}
          />
        </label>
        <br />

        <label>
          Linkedin Link
          <Form.Control
            type="text"
            name="linkedinlink"
            value={linkedin_link}
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
