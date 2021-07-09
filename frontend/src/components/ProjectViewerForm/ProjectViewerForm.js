import React, { useEffect, useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import DeleteProjectButton from "../DeleteProjectButton";

import { useDispatch, useSelector } from "react-redux";

import { thunk_createProject } from "../../store/thunks/projects.js";





const ProjectViewerForm = () => {
  const [ projectname, setProjectName ] = useState('');
  const [ projectimg, setProjectImg ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ livelink, setLiveLink ] = useState('');
  const [ githublink, setGithubLink ] = useState('');
  const [ usedtechnology, setUsedTechnology ] = useState('');

  const currentProjects = useSelector(store => store.projectsReducer.projects);

  const dispatch = useDispatch();



  const onSubmit = event => {
    event.preventDefault();
    const payload = { projectname, projectimg, description, livelink, githublink, usedtechnology };
    dispatch(thunk_createProject(payload));
  }



  return (
    <>
    {/* shows current projects that can be deleted and updated */}

      {currentProjects !== null ?
        Object.values(currentProjects).map(eachProject => (
          <>
            <Container>
              <h3>{eachProject.project_name}</h3>
            </Container>

            <Container>
              {/* update project button component */}
            </Container>

            <Container>
              <DeleteProjectButton projectId={eachProject.id} />
            </Container>
          </>
        ))
      :
      <></>
      }






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
            <Button variant="primary" onClick={event => onSubmit(event)}> Create </Button>
    </form>
        </Container>
    </Jumbotron>
    </>
  )
};

export default ProjectViewerForm;
