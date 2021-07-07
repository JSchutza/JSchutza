import React, { useEffect, useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'




const ProjectViewerForm = () => {
  const [ projectname, setProjectName ] = useState('');
  const [ projectimg, setProjectImg ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ livelink, setLiveLink ] = useState('');
  const [ githublink, setGithubLink ] = useState('');
  const [ usedtechnology, setUsedTechnology ] = useState('');




  const onSubmit = event => {
    event.preventDefault();
  }



  return (
    <>
      <Jumbotron fluid>
        <Container>
    <form onSubmit={onSubmit}>

    <label>
      Project Name
      <Form.Control
        type="text"
        name='projectname'
        value={projectname}
        onChange={event => setProjectName(event.target.value)}
      />
    </label>
    <br />

    <label>
      Project Img
      <Form.Control
        type="text"
        name='projectimg'
        value={projectimg}
        onChange={event => setProjectImg(event.target.value)}
      />
    </label>
      <br />

    <label>
      Description
      <Form.Control
        type="text"
        name='description'
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
    </label>
      <br />

    <label>
      Live Link
      <Form.Control
        type="text"
        name='livelink'
        value={livelink}
        onChange={event => setLiveLink(event.target.value)}
      />
    </label>
      <br />

    <label>
      Github Link
      <Form.Control
        type="text"
        name='githublink'
        value={githublink}
        onChange={event => setGithubLink(event.target.value)}
      />
    </label>
      <br />

    <label>
      Used Technology
      <textarea
        name='usedtechnology'
        value={usedtechnology}
        onChange={event => setUsedTechnology(event.target.value)}
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

export default ProjectViewerForm;
