import React, { useEffect, useState } from "react";





const ProjectViewerForm = () => {
  const [ projectname, setProjectName ] = useState('');
  const [ projectimg, setProjectImg ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ livelink, setLiveLink ] = useState('');
  const [ githublink, setGithubLink ] = useState('');
  const [ usedtechnology, setUsedTechnology ] = useState('');




  const onSubmit = event => {
    event.preventDefault();
  }



  return (
    <>
    <form onSubmit={onSubmit}>

    <label>
      Project Name
      <input
        type="text"
        name='projectname'
        value={projectname}
        onChange={event => setProjectName(event.target.value)}
      />
    </label>

    <label>
      Project Img
      <input
        type="text"
        name='projectimg'
        value={projectimg}
        onChange={event => setProjectImg(event.target.value)}
      />
    </label>

    <label>
      Description
      <input
        type="text"
        name='description'
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
    </label>

    <label>
      Live Link
      <input
        type="text"
        name='livelink'
        value={livelink}
        onChange={event => setLiveLink(event.target.value)}
      />
    </label>

    <label>
      Github Link
      <input
        type="text"
        name='githublink'
        value={githublink}
        onChange={event => setGithubLink(event.target.value)}
      />
    </label>

    <label>
      Used Technology
      <textarea
        name='usedtechnology'
        value={usedtechnology}
        onChange={event => setUsedTechnology(event.target.value)}
      />
    </label>

    </form>
    </>
  )
};

export default ProjectViewerForm;
