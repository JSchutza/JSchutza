import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';



const SkillsViewer = ({ isAdmin = false }) => {
  const history = useHistory();
  const skillInfo = useSelector(store => store.skillsReducer.skills);


  const handleUpdate = event => {
    event.preventDefault();
    history.push('/skillsviewer');
  }


  return (
    <>
      {isAdmin ? <div>
        <a href="/" onClick={event => handleUpdate(event)}> Update </a>
      </div> : <></>}


    <div>
      <Container >
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
    </div>

    </>
  )
};

export default SkillsViewer;
