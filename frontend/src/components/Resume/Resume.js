import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./resume.module.css";


const Resume = ({ isAdmin = false }) => {
  const history = useHistory();
  const aboutInfo = useSelector(store => store.personalInfoReducer.user);
  const skillInfo = useSelector(store => store.skillsReducer.skills);
  const projectInfo = useSelector(store => store.projectsReducer.projects);
  const experienceInfo = useSelector(store => store.experiencesReducer.experiences);
  const educationInfo = useSelector(store => store.educationsReducer.educations);

  const [ isHidden, setIsHidden ] = useState(false);

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
    <>
    <div className={styles.main_wrap}>
      {isAdmin ?
        <div className={styles.update_button_wrap}>
        <Container>
          <Button variant="primary" onClick={event => handleUpdate(event)}> Update </Button>
        </Container>
      </div>
      :
        <></>
      }


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
            :
            <></>
          }


        <div className={styles.outward_name_wrap} >
        <Container>
          <h1>{aboutInfo?.firstname} {aboutInfo?.lastname}</h1>

          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link href={aboutInfo?.github_link}>Github</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href={aboutInfo?.linkedin_link}>Linkedin</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
        </div>


        <div className={styles.outward_skills_wrap} >
        <Container>
          <h2>SKILLS</h2>

            {skillInfo === null ?
                <div> Loading skills </div>
              :

              <div className={styles.outward_skills_eachskill}>
                {Object.values(skillInfo).map(eachSkill => (
                  <li> {eachSkill.title} </li>
                ))}
              </div>
            }
        </Container>
        </div>


        {projectInfo === null ?

          <Container>
            <h2>Loading Project information ... </h2>
          </Container>

          :
          <div>
            <Container>
            <h2>Projects</h2>
            {Object.values(projectInfo).map(eachProject => (
              <div>
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



      <Container>
          <h5>EXPERIENCE</h5>
      </Container>


        {experienceInfo === null ?
          <Container>
            <h2>Loading Experiences ... </h2>
          </Container>
        :
            Object.values(experienceInfo).map(eachExperience => (
              <Container>

                <h5>{eachExperience.title}</h5>
                <p>{eachExperience.company_name}  {eachExperience.start_date} - {eachExperience.end_date}</p>


                {/* map for associated bulletpoint objects  */}
              {/* <ListGroup>
                <ListGroup.Item>
                Created software with PHP, JavaScript, and Python through tutorials, research, and dedicated trial and error.
                </ListGroup.Item>

                <ListGroup.Item>
                Contributed 1,867 times to more than fifty personal repositories on GitHub.
                </ListGroup.Item>

                <ListGroup.Item>
                Built custom WordPress templates using PHP and CSS.
                </ListGroup.Item>
              </ListGroup> */}

              </Container>
            ))
        }






      <Container>
          <h5>EDUCATION</h5>
      </Container>


        {educationInfo === null ?
          <Container>
            <h2>Loading Education Information ... </h2>
          </Container>
        :
          Object.values(educationInfo).map(eachEducation => (
            <>
              <Container>
                  <h5>{eachEducation.title}</h5>
                <p>{eachEducation.instution_name}   |   {eachEducation.start_year} - {eachEducation.end_year}</p>
              </Container>
            </>
          ))
        }


    <Container>
          <Button variant="primary"> Download </Button>
    </Container>

    </>
    }
      </div>
    </>
  )

};





export default Resume;
