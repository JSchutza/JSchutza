import React, { useEffect, useState } from "react";





const SkillsViewerForm = () => {
  const [ title, setTitle ] = useState('');
  const [ percentage, setPercent ] = useState(0);



  const onSubmit = event => {
    event.preventDefault();
  }



  return (
    <>
      {/* display list of the current skills in db with delete / remove button next to each */}




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
        Percentage
        <input
          type="number"
          name="percentage"
          value={percentage}
          onChange={event => setPercent(event.target.value)}
        />
      </label>
    </form>
    </>
  )
};

export default SkillsViewerForm;
