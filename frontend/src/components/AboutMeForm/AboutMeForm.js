import React, { useEffect, useState } from "react";





const AboutMeForm = () => {
  const [ firstname, setFirstName ] = useState('');
  const [ lastname, setLastName ] = useState('');




  const onSubmit = event => {
    event.preventDefault();
  }




  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={event => setFirstName(event.target.value)}
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={event => setLastName(event.target.value)}
          />
        </label>
      </form>
    </>
  )
};

export default AboutMeForm;
