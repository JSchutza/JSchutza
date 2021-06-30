import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

import defaultImg from "../../icons/default_img.JPG";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


const ProjectViewer = ({ isAdmin = false }) => {
  const history = useHistory();
  const projectInfo = useSelector(store => store.projectsReducer.projects);
  const [isHidden, setIsHidden] = useState(false);




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
      {isAdmin ?
        <Container>
          <a href="/" onClick={event => handleUpdate(event)}> Update </a>
        </Container>
      :
        <></>
      }


      {isHidden ?
          <Container>
          <Button variant="outline-dark" onClick={event => handleShow(event)}> <h1> Projects </h1> </Button>
          </Container>
        :
          <Container>

          <Container>
            <Button variant="outline-danger" onClick={event => handleHide(event)}> <h5> Close </h5> </Button>
          </Container>


              <Container>
                <h1> Projects </h1>
              </Container>


            <CardColumns>
              {projectInfo === null ?
                  <p></p>
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
    </>
  )
};

export default ProjectViewer;
