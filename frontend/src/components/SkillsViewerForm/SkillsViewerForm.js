import React, { useEffect, useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'




const SkillsViewerForm = () => {
  const [ title, setTitle ] = useState('');
  const [ percentage, setPercent ] = useState(0);



  const onSubmit = event => {
    event.preventDefault();
  }



  return (
    <>
      {/* display list of the current skills in db with delete / remove button next to each */}


      <Jumbotron fluid>
        <Container>
    <form onSubmit={onSubmit}>
      <label>
        Title
        <Form.Control
          type="text"
          name="title"
          value={title}
            onChange={event => setTitle(event.target.value)}
        />
      </label>
    <br />

      <label>
        Percentage
        <Form.Control
          type="number"
          name="percentage"
          value={percentage}
          onChange={event => setPercent(event.target.value)}
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

export default SkillsViewerForm;
