import React, { useEffect, useState } from "react";
import EducationForm from "../EducationForm";




const ResumeForm = () => {


  const onSubmit = event => {
    event.preventDefault();
  }



  return (
    <>
      <EducationForm />
    </>
  )
};

export default ResumeForm;
