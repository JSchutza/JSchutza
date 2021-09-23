import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import styles from "./skillsviewer.module.css";


const SkillsViewer = ({ isAdmin = false }) => {
  const history = useHistory();
  const skillInfo = useSelector(store => store.skillsReducer.skills);
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
    history.push('/skillsviewer');
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
      <div className={styles.update_button_wrap} >
        <Container>
          <Button variant="primary" onClick={event => handleUpdate(event)}> Update </Button>
        </Container>
      </div>
        :
          <></>
      }


      {isHidden ?
        <div className={styles.skills_button_wrap}>
        <Container>
          <Button variant="outline-dark" onClick={event => handleShow(event)}> <h1> Skills </h1> </Button>
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

            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <Button variant="primary">
                    <h1>Skills</h1>
                  </Button>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ListGroup variant="flush">
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
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
        </Container>
      }
      </div>
    </>
  )
};

export default SkillsViewer;
