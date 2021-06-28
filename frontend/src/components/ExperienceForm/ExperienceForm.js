import React, { useEffect, useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';




const ExperienceForm = () => {
  const [ title, setTitle ] = useState('');
  const [ companyname, setCompanyName ] = useState('');
  const [ startdate, setStartDate ] = useState('');
  const [ enddate, setEndDate ] = useState('');


  const onSubmit = event => {
    event.preventDefault();
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
            value={companyname}
            onChange={event => setCompanyName(event.target.value)}
          />
        </label>
            <br />

        <label>
          Start Date
          <Form.Control
            type="text"
            name="startdate"
            value={startdate}
            onChange={event => setStartDate(event.target.value)}
          />
        </label>
            <br />

        <label>
          End Date
          <Form.Control
            type="text"
            name="enddate"
            value={enddate}
            onChange={event => setEndDate(event.target.value)}
          />
        </label>


      </form>
        </Container>
      </Jumbotron>
    </>
  )
};

export default ExperienceForm;
