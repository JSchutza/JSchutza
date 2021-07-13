import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';

import EducationForm from "../EducationForm";
import ExperienceForm from "../ExperienceForm";
import UpdateEducationButton from "../UpdateEducationButton";
import DeleteEducationButton from "../DeleteEducationButton";
import UpdateExperienceButton from "../UpdateExperienceButton";



import { useSelector } from "react-redux";


const ResumeForm = () => {

  const currentEducationInFo = useSelector(store => store.educationsReducer.educations);
  const currentExperienceInFo = useSelector(store => store.experiencesReducer.experiences);


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
            <UpdateEducationButton educationId={each.id} />
            <DeleteEducationButton educationId={each.id} />
          </>
        ))
      :
      <></>
      }

      <EducationForm />


      <Container>
        <h2> current experience info </h2>
      </Container>

      {currentExperienceInFo !== null ?
        Object.values(currentExperienceInFo).map(each => (
          <>
          <Container>
              <h3>{each.title}</h3>
              <h4>{each.company_name}</h4>
              <p>{each.start_date}</p>
              <p>{each.end_date}</p>
          </Container>
            <UpdateExperienceButton />
          {/* delete button */}
          </>
        ))
        :
        <></>
      }

      <ExperienceForm />
    </>
  )
};

export default ResumeForm;
