import React, { useEffect, useState } from "react";
import EducationForm from "../EducationForm";
import ExperienceForm from "../ExperienceForm";




const ResumeForm = () => {


  const onSubmit = event => {
    event.preventDefault();
  }



  return (
    <>
      <EducationForm />
      <ExperienceForm />
    </>
  )
};

export default ResumeForm;
