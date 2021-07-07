import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'




const DeleteSkillButton = ({ skillId }) => {

  const onDelete = event => {
    event.preventDefault();
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
