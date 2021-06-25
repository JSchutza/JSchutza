import React, { useEffect, useState } from "react";





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
      <form onSubmit={onSubmit}>

        <label>
          Title
          <input
            type="text"
            name="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </label>

        <label>
          Company Name
          <input
            type="text"
            name="companyname"
            value={companyname}
            onChange={event => setCompanyName(event.target.value)}
          />
        </label>

        <label>
          Start Date
          <input
            type="text"
            name="startdate"
            value={startdate}
            onChange={event => setStartDate(event.target.value)}
          />
        </label>

        <label>
          End Date
          <input
            type="text"
            name="enddate"
            value={enddate}
            onChange={event => setEndDate(event.target.value)}
          />
        </label>


      </form>
    </>
  )
};

export default ExperienceForm;
