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



        <Container>
          <h5>SKILLS</h5>

          <ListGroup horizontal>
            {skillInfo === null ?
                <ListGroup.Item> Loading skills </ListGroup.Item>
              :
                Object.values(skillInfo).map(eachSkill => (
                  <>
                    <ListGroup.Item> {eachSkill.title} </ListGroup.Item>
                  </>
                ))
            }
          </ListGroup>
        </Container>



        {projectInfo === null ?

          <Container>
            <h2>Loading Project information ... </h2>
          </Container>

          :

            Object.values(projectInfo).map(eachProject => (
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
                {/* this will map over each associated bullet point for a project */}

                {/* <ListGroup>
                  <ListGroup.Item>
                    Leveraged AWS for character image uploads, reducing server load and allowing for image storage scalability.
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Incorporated React and Redux to create a splash page animation that is non-resource intensive, resulting in an improved user experience.
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Designed a RESTful API with Flask-SQLAlchemy and Flask to create dry, readable, and maintainable code.
                  </ListGroup.Item>
                </ListGroup> */}
              </Container>
          ))
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

    </>
  )

};





export default Resume;
