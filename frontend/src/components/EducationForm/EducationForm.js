import React, { useEffect, useState } from "react";





const EducationForm = () => {
  const [ educationtitle, setEducationTitle ] = useState('');
  const [ schoolname, setSchoolName ] = useState('');
  const [ startyear, setStartYear ] = useState('');
  const [ endyear, setEndYear ] = useState('');


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
          <input
            type="text"
            name="schoolname"
            value={schoolname}
            onChange={event => setSchoolName(event.target.value)}
          />
        </label>

        <label>
          Start Year
          <input
            type="text"
            name="startyear"
            value={startyear}
            onChange={event => setStartYear(event.target.value)}
          />
        </label>

        <label>
          End Year
          <input
            type="text"
            name="endyear"
            value={endyear}
            onChange={event => setEndYear(event.target.value)}
          />
        </label>


      </form>
    </>
  )
};

export default EducationForm;
