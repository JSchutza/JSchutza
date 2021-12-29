import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


import { thunk_getProjects } from "../../store/thunks/projects.js";


import { defaultProjectData } from "./data.js";


import styles from "./projectviewer.module.css";



const ProjectViewer = ({ isAdmin=false }) => {
  const defaultImg = 'https://joshuaschutzapersonal.s3.amazonaws.com/default_project_img.JPG'
  const history = useHistory();
  const dispatch = useDispatch();
  const projectInfo = useSelector(store => store.projectsReducer.projects);
  const [isHidden, setIsHidden] = useState(false);


  useEffect(() => {
    dispatch(thunk_getProjects());
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
    history.push('/projectviewer');
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
        <div className={styles.projects_button_wrap} >
          <Container>
            <Button variant="outline-dark" onClick={event => handleShow(event)}> <h1> Projects </h1> </Button>
          </Container>
      </div>
        :
          <Container>

          {isAdmin ?
            <Container>
              <Button variant="outline-danger" onClick={event => handleHide(event)}> <h5> Close </h5> </Button>
            </Container>
            :
            <></>
          }

              <Container>
                <h1> Projects </h1>
              </Container>


            <CardColumns>
              {projectInfo === null ?
                defaultProjectData.map(defaultProject => (
                  <>
                    <Card>
                      <Card.Img variant="top" src={defaultImg} />
                      <Card.Body>
                        <Card.Title> {defaultProject.project_name} </Card.Title>
                        <Card.Text>
                          {defaultProject.description}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <a href={defaultProject.live_link}>
                          <small className="text-muted">Live</small>
                        </a>
                        <br />

                        <a href={defaultProject.github_link}>
                          <small className="text-muted">GitHub</small>
                        </a>
                      </Card.Footer>
                    </Card>
                  </>
                ))
                :
                  Object.values(projectInfo).map(eachProject => (
                    <>
                  <Card>
                    <Card.Img variant="top" src={defaultImg} />
                    <Card.Body>
                          <Card.Title> {eachProject.project_name} </Card.Title>
                      <Card.Text>
                            {eachProject.description}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <a href={eachProject.live_link}>
                        <small className="text-muted">Live</small>
                      </a>
                      <br />

                      <a href={eachProject.github_link}>
                        <small className="text-muted">GitHub</small>
                      </a>
                    </Card.Footer>
                  </Card>
                    </>
                  ))
              }

        </CardColumns>
      </Container>
    }
      </div>
    </>
  )
};

export default ProjectViewer;
