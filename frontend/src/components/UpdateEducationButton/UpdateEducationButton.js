import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';


import { thunk_updateEducation } from "../../store/thunks/educations.js";





const UpdateEducationButton = ({ educationId }) => {
  const dispatch = useDispatch();
  const prevInfo = useSelector(store => store.educationsReducer.educations[educationId]);

  const [showform, setShowform] = useState(false);

  const [ title, setEducationTitle ] = useState(prevInfo?.title);
  const [ instution_name, setSchoolName ] = useState(prevInfo?.instution_name);
  const [start_year, setStartYear] = useState(prevInfo?.start_year.split(' ')[3]);
  const [end_year, setEndYear] = useState(prevInfo?.end_year.split(' ')[3]);






  const onSubmit = event => {
    event.preventDefault();
    const payload = { title, instution_name, start_year, end_year }
    dispatch(thunk_updateEducation(educationId, payload));
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
