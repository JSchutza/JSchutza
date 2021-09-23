import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'



import { thunk_createEducation } from "../../store/thunks/educations.js";





const EducationForm = () => {
  const [ title, setEducationTitle ] = useState('');
  const [ instution_name, setSchoolName ] = useState('');
  const [ start_year, setStartYear ] = useState('');
  const [ end_year, setEndYear ] = useState('');

  const dispatch = useDispatch();


  const onSubmit = event => {
    event.preventDefault();
    const payload = { title, instution_name, start_year, end_year }
    dispatch(thunk_createEducation(payload));
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
            value={title}
            onChange={event => setEducationTitle(event.target.value)}
          />
        </label>
          <br />

        <label>
          School Name
          <Form.Control
            type="text"
            name="schoolname"
            value={instution_name}
            onChange={event => setSchoolName(event.target.value)}
          />
        </label>
            <br />

        <label>
          Start Year
          <Form.Control
            type="text"
            name="startyear"
            value={start_year}
            onChange={event => setStartYear(event.target.value)}
          />
        </label>
            <br />

        <label>
          End Year
          <Form.Control
            type="text"
            name="endyear"
            value={end_year}
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
