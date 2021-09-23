import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


import { thunk_createExperiences } from "../../store/thunks/experiences.js";



const ExperienceForm = () => {
  const [ title, setTitle ] = useState('');
  const [ company_name, setCompanyName ] = useState('');
  const [ start_date, setStartDate ] = useState('');
  const [ end_date, setEndDate ] = useState('');

  const dispatch = useDispatch();



  const onSubmit = event => {
    event.preventDefault();
    // ***    I will need to format the start_date and end_date
    const payload = { title, company_name, start_date, end_date };
    dispatch(thunk_createExperiences(payload));
  }



  return (
    <>
      <Jumbotron fluid>
        <Container>
    <h2>Work Experience</h2>
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
          Company Name
          <Form.Control
            type="text"
            name="companyname"
            value={company_name}
            onChange={event => setCompanyName(event.target.value)}
          />
        </label>
            <br />

        <label>
          Start Date
          <Form.Control
            type="text"
            name="startdate"
            value={start_date}
            onChange={event => setStartDate(event.target.value)}
            placeholder="2021"
          />
        </label>
            <br />

        <label>
          End Date
          <Form.Control
            type="text"
            name="enddate"
            value={end_date}
            onChange={event => setEndDate(event.target.value)}
            placeholder="2021"
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

export default ExperienceForm;
