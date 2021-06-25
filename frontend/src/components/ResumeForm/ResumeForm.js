import React, { useEffect, useState } from "react";





const ResumeForm = () => {
  const [ skillChoice, setSkillChoice ] = useState(null);
  const [ projectChoice, setProjectChoice ] = useState(null);
  const [ experienceChoice, setExperienceChoice ] = useState(null);
  const [ educationChoice, setEducationChoice ] = useState(null);


  const onSubmit = event => {
    event.preventDefault();
  }



  return (
    <>
    <form onSubmit={onSubmit}>

    <label>
      Confirm Skills
    </label>

    <label>
      Confirm Skills
    </label>

    <label>
      Confirm Skills
    </label>

    <label>
      Confirm Skills
    </label>

    </form>
    </>
  )
};

export default ResumeForm;
