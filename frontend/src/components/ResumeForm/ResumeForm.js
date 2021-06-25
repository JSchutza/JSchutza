import React, { useEffect, useState } from "react";





const ResumeForm = () => {
  const [ educationtitle, setEducationTitle ] = useState(null);


  const onSubmit = event => {
    event.preventDefault();
  }



  return (
    <>
    <form onSubmit={onSubmit}>

    <label>
      Education Title
      <input
        type="text"
        name="educationtitle"
        value={educationtitle}
        onChange={event => setEducationTitle(event.target.value)}
      />
    </label>

    <label>
      School Name
    </label>

    <label>
      Start Year
    </label>

    <label>
      End Year
    </label>


    </form>
    </>
  )
};

export default ResumeForm;
