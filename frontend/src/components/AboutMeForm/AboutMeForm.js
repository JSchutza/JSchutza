import React, { useEffect, useState } from "react";





const AboutMeForm = () => {
  const [ firstname, setFirstName ] = useState('');
  const [ lastname, setLastName ] = useState('');
  const [ jobtitle, setJobTitle ] = useState('');
  const [ abouttext, setAboutText ] = useState('');
  const [ githublink, setGitHubLink ] = useState('');
  const [ linkedinlink, setLinkedinLink ] = useState('');




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

        <label>
          Job Title
          <input
            type="text"
            name="jobtitle"
            value={jobtitle}
            onChange={event => setJobTitle(event.target.value)}
          />
        </label>

        <label>
          About Text
          <textarea
            name="abouttext"
            value={abouttext}
            onChange={event => setAboutText(event.target.value)}
          />
        </label>

        <label>
          GitHub Link
          <input
            type="text"
            name="githublink"
            value={githublink}
            onChange={event => setGitHubLink(event.target.value)}
          />
        </label>

        <label>
          Linkedin Link
          <input
            type="text"
            name="linkedinlink"
            value={linkedinlink}
            onChange={event => setLinkedinLink(event.target.value)}
          />
        </label>



      </form>
    </>
  )
};

export default AboutMeForm;
