import React from 'react';
import { useHistory } from 'react-router';
import AboutMeForm from "../AboutMeForm";
import SkillsViewerForm from "../SkillsViewerForm";
import ProjectViewerForm from "../ProjectViewerForm";
import ResumeForm from "../ResumeForm";


const UpdateInfo = ({ the_type }) => {
  const history = useHistory();


  const goBack = event => {
    event.preventDefault();
    history.push('/');
  }




  return (
    <>
    <div>
        <a href='/' onClick={event => goBack(event)}> Back </a>
    </div>


    <div>
        {the_type === 'aboutme' ? <div>
          <h1>Update about me</h1>
              <AboutMeForm />
        </div> : <></>}
    </div>


    <div>
        {the_type === 'skillsviewer' ? <div>
          <h1>Update skillsviewer</h1>
              <SkillsViewerForm />
        </div> : <></>}
    </div>


    <div>
        {the_type === 'projectviewer' ? <div>
          <h1>Update projectviewer</h1>
              <ProjectViewerForm />
        </div> : <></>}
    </div>


    <div>
        {the_type === 'resume' ? <div>
          <h1>Update resume</h1>
              <ResumeForm />
        </div> : <></>}
    </div>

    </>
  )
};



export default UpdateInfo;
