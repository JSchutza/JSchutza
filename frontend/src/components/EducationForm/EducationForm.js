import React, { useEffect, useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'




const EducationForm = () => {
  const [ educationtitle, setEducationTitle ] = useState('');
  const [ schoolname, setSchoolName ] = useState('');
  const [ startyear, setStartYear ] = useState('');
  const [ endyear, setEndYear ] = useState('');


  const onSubmit = event => {
    event.preventDefault();
  }



  return (
    <>
      <Jumbotron fluid>
        <Container>
      <h2>Education</h2>
      <form onSubmit={onSubmit}>

        <label>
          Education Title
          <Form.Control
            type="text"
            name="educationtitle"
            value={educationtitle}
            onChange={event => setEducationTitle(event.target.value)}
          />
        </label>
          <br />

        <label>
          School Name
          <Form.Control
            type="text"
            name="schoolname"
            value={schoolname}
            onChange={event => setSchoolName(event.target.value)}
          />
        </label>
            <br />

        <label>
          Start Year
          <Form.Control
            type="text"
            name="startyear"
            value={startyear}
            onChange={event => setStartYear(event.target.value)}
          />
        </label>
            <br />

        <label>
          End Year
          <Form.Control
            type="text"
            name="endyear"
            value={endyear}
            onChange={event => setEndYear(event.target.value)}
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

export default EducationForm;
