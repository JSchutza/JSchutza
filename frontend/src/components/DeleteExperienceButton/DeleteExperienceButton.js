import React from 'react';

import { useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'



// import { thunk_deleteProject } from "../../store/thunks/projects.js";






const DeleteExperienceButton = ({ projectId }) => {
  const dispatch = useDispatch();




  const onDelete = event => {
    event.preventDefault();
    // dispatch(thunk_deleteProject(projectId));
  }



  return (
    <>
      <Container>
        <Button variant="outline-danger" onClick={event => onDelete(event)}> Delete </Button>
      </Container>
    </>
  )
};

export default DeleteExperienceButton;
