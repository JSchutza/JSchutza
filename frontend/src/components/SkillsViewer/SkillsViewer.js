import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';





const SkillsViewer = ({ isAdmin = false }) => {
  return (
    <>
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
                    <ListGroup.Item> JavaScript </ListGroup.Item>
                    <ListGroup.Item> Python </ListGroup.Item>
                    <ListGroup.Item> PHP </ListGroup.Item>
                    <ListGroup.Item> HTML </ListGroup.Item>
                    <ListGroup.Item> CSS </ListGroup.Item>
                    <ListGroup.Item> SQL </ListGroup.Item>
                    <ListGroup.Item> React </ListGroup.Item>
                    <ListGroup.Item> Redux </ListGroup.Item>
                    <ListGroup.Item> Express </ListGroup.Item>
                    <ListGroup.Item> Flask </ListGroup.Item>
                    <ListGroup.Item> Django </ListGroup.Item>
                    <ListGroup.Item> Node.js </ListGroup.Item>
                    <ListGroup.Item> WordPress </ListGroup.Item>
                    <ListGroup.Item> JSON </ListGroup.Item>
                    <ListGroup.Item> Bash Script </ListGroup.Item>
                    <ListGroup.Item> Shell Script </ListGroup.Item>
                    <ListGroup.Item> Git </ListGroup.Item>
                    <ListGroup.Item> Windows </ListGroup.Item>
                    <ListGroup.Item> Linux </ListGroup.Item>
                    <ListGroup.Item> Docker </ListGroup.Item>
                    <ListGroup.Item> Go </ListGroup.Item>
                    <ListGroup.Item> C++ </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
      </Container>
    </div>

      {isAdmin ? <div></div> : <></>}
    </>
  )
};

export default SkillsViewer;
