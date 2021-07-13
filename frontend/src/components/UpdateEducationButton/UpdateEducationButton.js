import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';


// import { thunk_updateProject } from "../../store/thunks/projects.js";





const UpdateEducationButton = ({ educationId }) => {
  const dispatch = useDispatch();
  // const prevInfo = useSelector(store => store.projectsReducer.projects[educationId]);

  const [showform, setShowform] = useState(false);

  // const [project_name, setProjectname] = useState(prevInfo?.project_name);
  // const [project_img, setImg] = useState(prevInfo?.project_img);
  // const [description, setDescription] = useState(prevInfo?.description);
  // const [live_link, setLiveLink] = useState(prevInfo?.live_link);
  // const [github_link, setGithubLink] = useState(prevInfo?.github_link);
  // const [used_tech, setUsedTechnology] = useState(prevInfo?.used_tech);






  const onSubmit = event => {
    event.preventDefault();
    // const payload = { project_name, project_img, description, live_link, github_link, used_tech };
    // dispatch(thunk_updateProject(educationId, payload));
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
                name="project_name"
                // value={project_name}
                // onChange={event => setProjectname(event.target.value)}
              />
            </label>
            <br />

            <label>
              Project img
              <Form.Control
                type="text"
                name="project_img"
                // value={project_img}
                // onChange={event => setImg(event.target.value)}
              />
            </label>
            <br />

            <label>
              Project live link
              <Form.Control
                type="text"
                name="live_link"
                // value={live_link}
                // onChange={event => setLiveLink(event.target.value)}
              />
            </label>
            <br />

            <label>
              Project github link
              <Form.Control
                type="text"
                name="github_link"
                // value={github_link}
                // onChange={event => setGithubLink(event.target.value)}
              />
            </label>
            <br />

            <label>
              Description
              <Form.Control
                as="textarea"
                name="description"
                // value={description}
                // onChange={event => setDescription(event.target.value)}
              />
            </label>
            <br />

            <label>
              Used Tech
              <Form.Control
                as="textarea"
                name="used_tech"
                // value={used_tech}
                // onChange={event => setUsedTechnology(event.target.value)}
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

export default UpdateEducationButton;
