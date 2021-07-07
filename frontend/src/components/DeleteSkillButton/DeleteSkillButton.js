import React from 'react';

import { useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'



import { thunk_deleteSkill }  from "../../store/thunks/skills.js";






const DeleteSkillButton = ({ skillId }) => {
  const dispatch = useDispatch();




  const onDelete = event => {
    event.preventDefault();
    dispatch(thunk_deleteSkill(skillId));
  }



  return (
    <>
      <Container>
        <Button variant="outline-danger" onClick={event => onDelete(event)}> Delete </Button>
      </Container>
    </>
  )
};

export default DeleteSkillButton;
