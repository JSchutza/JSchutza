
import { useHistory } from 'react-router';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';


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
      <Button variant="primary" onClick={event => goBack(event)}> Back </Button>

        {the_type === 'aboutme' ?
          <Container>
            <h1>Update about me</h1>
              <AboutMeForm />
          </Container>
        : <></> }


        {the_type === 'skillsviewer' ?
          <Container>
            <h1>Update skills</h1>
              <SkillsViewerForm />
          </Container>
        : <></>}


        {the_type === 'projectviewer' ?
          <Container>
            <h1>Update projects</h1>
              <ProjectViewerForm />
          </Container>
        : <></>}


        {the_type === 'resume' ?
          <Container>
            <h1>Update resume</h1>
              <ResumeForm />
          </Container>
      : <></>}

    </>
  )
};



export default UpdateInfo;
