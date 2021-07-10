import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';

import EducationForm from "../EducationForm";
import ExperienceForm from "../ExperienceForm";


import { useSelector } from "react-redux";


const ResumeForm = () => {

  const currentEducationInFo = useSelector(store => store.educationsReducer.educations);


  const onSubmit = event => {
    event.preventDefault();
  }



  return (
    <>
    {/* show current education information */}
      <Container>
        <h2> current education info </h2>
      </Container>

      {currentEducationInFo !== null ?
        Object.values(currentEducationInFo).map(each => (
          <>
            <Container>
              <h3> {each.instution_name} </h3>
              <h4> {each.title} </h4>
              <p>{each.start_year}</p>
              <p>{each.end_year}</p>
            </Container>
            {/* update button */}
            {/* delete button */}
          </>
        ))
      :
      <></>
      }

      <EducationForm />
      <ExperienceForm />
    </>
  )
};

export default ResumeForm;
