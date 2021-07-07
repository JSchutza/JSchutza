import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'




const UpdateSkillButton = ({ skillId }) => {

  const onUpdate = event => {
    event.preventDefault();
  }



  return (
    <>
      <Container>
        <Button variant="primary" onClick={event => onUpdate(event)}> Update </Button>
      </Container>
    </>
  )
};

export default UpdateSkillButton;
