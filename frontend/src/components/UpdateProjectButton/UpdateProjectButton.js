import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';


// import { thunk_updateSkill } from "../../store/thunks/skills.js";





const UpdateProjectButton = ({ projectId }) => {
  const dispatch = useDispatch();
  const prevInfo = useSelector(store => store.projectsReducer.projects[projectId]);

  const [ showform, setShowform ] = useState(false);
  const [ description, setDescription ] = useState(prevInfo.description);
  const [ projectname, setProjectname ] = useState(prevInfo.project_name);
  const [ usedtechnology, setUsedTechnology ] = useState(prevInfo.used_tech);
  const [ img, setImg] = useState(prevInfo.project_img);
  const [ livelink, setLiveLink ] = useState(prevInfo.live_link);
  const [ githublink, setGithubLink ] = useState(prevInfo.github_link);






  const onSubmit = event => {
    event.preventDefault();
    // const payload = { title, percentage };
    // dispatch(thunk_updateSkill(projectId, payload));
  }




  const onUpdate = event => {
    event.preventDefault();
    setShowform(true);
  }


  const hideForm = event => {
    event.preventDefault();
    setShowform(false);
  }


  if (showform) {
    return (
      <>
        <Container>
          <Button variant="primary" onClick={event => hideForm(event)}> Close </Button>
        </Container>

        <Container>
          <form onSubmit={onSubmit}>

            <label>
              Project Name
              <Form.Control
                type="text"
                name="projectname"
                value={projectname}
                onChange={event => setProjectname(event.target.value)}
              />
            </label>
            <br />

            <label>
              Project img
              <Form.Control
                type="text"
                name="img"
                value={img}
                onChange={event => setImg(event.target.value)}
              />
            </label>
            <br />

            <label>
              Project live link
              <Form.Control
                type="text"
                name="livelink"
                value={livelink}
                onChange={event => setLiveLink(event.target.value)}
              />
            </label>
            <br />

            <label>
              Project github link
              <Form.Control
                type="text"
                name="githublink"
                value={githublink}
                onChange={event => setGithubLink(event.target.value)}
              />
            </label>
            <br />

            <label>
              Description
              <Form.Control
                as="textarea"
                name="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </label>
            <br />

            <label>
              Used Tech
              <Form.Control
                as="textarea"
                name="usedtechnology"
                value={usedtechnology}
                onChange={event => setUsedTechnology(event.target.value)}
              />
            </label>
            <br />

            <Button variant="primary" onClick={event => onSubmit(event)}> Update </Button>
          </form>
        </Container>
      </>
    )
  }


  return (
    <>
      <Container>
        <Button variant="primary" onClick={event => onUpdate(event)}> Update </Button>
      </Container>
    </>
  )
};

export default UpdateProjectButton;
