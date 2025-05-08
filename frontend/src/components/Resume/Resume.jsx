import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'

import { thunk_getPersonalInfo } from '../../store/thunks/personal.jsx';
import { thunk_getSkills } from "../../store/thunks/skills.jsx";
import { thunk_getProjects } from "../../store/thunks/projects.jsx";
import { thunk_getExperiences } from "../../store/thunks/experiences.jsx";
import { thunk_getEducations } from "../../store/thunks/educations.jsx";

import { defaultResumeData } from "./data.jsx";


import styles from "./resume.module.css";




const Resume = ({ isAdmin=false }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const aboutInfo = useSelector(store => store.personalInfoReducer.user);
  const skillInfo = useSelector(store => store.skillsReducer.skills);
  const projectInfo = useSelector(store => store.projectsReducer.projects);
  const experienceInfo = useSelector(store => store.experiencesReducer.experiences);
  const educationInfo = useSelector(store => store.educationsReducer.educations);

  const [ isHidden, setIsHidden ] = useState(false);


  useEffect(() => {
    if (!aboutInfo) dispatch(thunk_getPersonalInfo());
    if (!skillInfo) dispatch(thunk_getSkills());
    if (!projectInfo) dispatch(thunk_getProjects());
    if (!experienceInfo) dispatch(thunk_getExperiences());
    if (!educationInfo) dispatch(thunk_getEducations());
  },[dispatch]);



  useEffect(() => {
    if (!isHidden) {
      setIsHidden(true);
    }

    if (!isAdmin) {
      setIsHidden(false);
    }
  }, []);




  const handleUpdate = event => {
    event.preventDefault();
    history.push('/resume');
  }




  const handleShow = event => {
    event.preventDefault();
    setIsHidden(false);
  }



  const handleHide = event => {
    event.preventDefault();
    setIsHidden(true);
  }






  return (
    <div className={styles.main_wrap}>
      {isAdmin ?
        <div className={styles.update_button_wrap}>
        <Container>
          <Button variant="primary" onClick={event => handleUpdate(event)}> Update </Button>
        </Container>
      </div>
      : null }


      {isHidden ?
        <div className={styles.resume_button_wrap}>
          <Container>
            <Button variant="outline-dark" onClick={event => handleShow(event)}> <h1> Resume </h1> </Button>
          </Container>
      </div>
        :

        <>
          {isAdmin ?
            <Container>
              <Button variant="outline-danger" onClick={event => handleHide(event)}> <h5> Close </h5> </Button>
            </Container>
            : null }


        <div className={styles.outward_name_wrap} >
          {aboutInfo === null ?
            <Container>
              <h1>{defaultResumeData.aboutInfo.firstname} {defaultResumeData.aboutInfo.lastname}</h1>

              <Nav className="justify-content-center">
                <Nav.Item>
                  <Nav.Link href={defaultResumeData.aboutInfo.github_link}>Github</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href={defaultResumeData.aboutInfo.linkedin_link}>Linkedin</Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
          :
            <Container>
              <h1>{aboutInfo.firstname} {aboutInfo.lastname}</h1>

              <Nav className="justify-content-center">
                <Nav.Item>
                  <Nav.Link href={aboutInfo.github_link}>Github</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href={aboutInfo.linkedin_link}>Linkedin</Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
          }
        </div>




        <div className={styles.outward_skills_wrap} >
        <Container>
          <h2>SKILLS</h2>

            {skillInfo === null ?
                <div className={styles.outward_skills_eachskill} >
                    {defaultResumeData.defaultSkillData.map(defaultSkill => (
                      <li>{defaultSkill}</li>
                    ))}
                </div>
              :

              <div className={styles.outward_skills_eachskill} >
                {Object.values(skillInfo).map(eachSkill => (
                  <li> {eachSkill.title} </li>
                ))}
              </div>
            }
        </Container>
        </div>




        {projectInfo === null ?

          <div className={styles.outward_projects_wrap} >
            <Container>
            <h2>Projects</h2>

            {defaultResumeData.defaultProjectData.map(defaultProject => (
              <div className={styles.outward_eachproject} >
                <Container>
                  <h5> {defaultProject.project_name}  ({defaultProject.used_tech})</h5>
                  <p>{defaultProject.description}</p>

                <Nav variant="pills">
                  <Nav.Item>
                      <Nav.Link href={defaultProject.live_link}> Live </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link href={defaultProject.github_link}> Github </Nav.Link>
                  </Nav.Item>
                </Nav>
                </Container>
              </div>
              ))}
              </Container>
            </div>
          :
            <div className={styles.outward_projects_wrap} >
            <Container>
            <h2>Projects</h2>

            {Object.values(projectInfo).map(eachProject => (
              <div className={styles.outward_eachproject} >
              <Container>
                <h5> {eachProject.project_name}  ({eachProject.used_tech})</h5>
                <p>{eachProject.description}</p>

              <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link href={eachProject.live_link}> Live </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={eachProject.github_link}> Github </Nav.Link>
                </Nav.Item>
              </Nav>
              </Container>
              </div>
          ))}
          </Container>
        </div>
      }




      <div className={styles.outward_experience_wrap} >
      <Container>
          <h2>EXPERIENCE</h2>

        {experienceInfo === null ?
          <div className={styles.outward_eachexperience} >
            {defaultResumeData.defaultExperienceData.map(defaultExperience => (
            <Container>
              <h5>{defaultExperience.title}</h5>
              <p>{defaultExperience.company_name}  {defaultExperience.start_date} - {defaultExperience.end_date}</p>
            </Container>
          ))}
          </div>
        :
          <div className={styles.outward_eachexperience} >
          {Object.values(experienceInfo).map(eachExperience => (
            <Container>
              <h5>{eachExperience.title}</h5>
              <p>{eachExperience.company_name}  {eachExperience.start_date} - {eachExperience.end_date}</p>
            </Container>
          ))}
          </div>
        }
      </Container>
      </div>






      <div className={styles.outward_education_wrap} >
      <Container>
          <h2>EDUCATION</h2>

        {educationInfo === null ?
          <div className={styles.outward_eacheducation} >
            {defaultResumeData.defaultEducationData.map(defaultEducation => (
              <Container>
                  <h5>{defaultEducation.title}</h5>
                  <p>{defaultEducation.instution_name}   |   {defaultEducation.start_year} - {defaultEducation.end_year}</p>
              </Container>
              ))}
          </div>
        :
          <div className={styles.outward_eacheducation} >
            {Object.values(educationInfo).map(eachEducation => (
              <Container>
                  <h5>{eachEducation.title}</h5>
                  <p>{eachEducation.instution_name}   |   {eachEducation.start_year} - {eachEducation.end_year}</p>
              </Container>
              ))}
          </div>
        }
      </Container>
      </div>



    <Container>
      <Button variant="primary"> Download </Button>
    </Container>

    </>
    }
      </div>
  )

};





export default Resume;
