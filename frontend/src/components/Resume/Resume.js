import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";





const Resume = ({ isAdmin = false }) => {
  const history = useHistory();


  const handleUpdate = event => {
    event.preventDefault();
    history.push('/resume');
  }


  return (
    <>
      {isAdmin ? <div>
        <a href="/" onClick={event => handleUpdate(event)}> Update </a>
      </div> : <></>}


    <div>
        <Container>
          <h1> Joshua Schutza </h1>

          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link href="https://github.com/JSchutza">Github</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="https://www.linkedin.com/in/joshua-schutza-559819ba/">Linkedin</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>



        <Container>
          <h5>SKILLS</h5>

          <ListGroup horizontal>
            <ListGroup.Item> JavaScript </ListGroup.Item>
            <ListGroup.Item> Python </ListGroup.Item>
            <ListGroup.Item> PHP </ListGroup.Item>
            <ListGroup.Item> HTML </ListGroup.Item>
            <ListGroup.Item> CSS </ListGroup.Item>
          </ListGroup>

          <ListGroup horizontal>
            <ListGroup.Item> SQL </ListGroup.Item>
            <ListGroup.Item> React </ListGroup.Item>
            <ListGroup.Item> Redux </ListGroup.Item>
            <ListGroup.Item> Express </ListGroup.Item>
            <ListGroup.Item> Flask </ListGroup.Item>
          </ListGroup>


          <ListGroup horizontal>
            <ListGroup.Item> Django </ListGroup.Item>
            <ListGroup.Item> Node.js </ListGroup.Item>
            <ListGroup.Item> WordPress </ListGroup.Item>
            <ListGroup.Item> Markdown </ListGroup.Item>
            <ListGroup.Item> JSON </ListGroup.Item>
          </ListGroup>



          <ListGroup horizontal>
            <ListGroup.Item> Go </ListGroup.Item>
            <ListGroup.Item> C++ </ListGroup.Item>
            <ListGroup.Item> Bash Script </ListGroup.Item>
            <ListGroup.Item> Shell Script </ListGroup.Item>
            <ListGroup.Item> Git </ListGroup.Item>
          </ListGroup>


          <ListGroup horizontal>
            <ListGroup.Item> Windows </ListGroup.Item>
            <ListGroup.Item> Linux </ListGroup.Item>
            <ListGroup.Item> Docker </ListGroup.Item>
          </ListGroup>

        </Container>



      <Container>
          <h5>Book Organizer  (React, Flask, AWS)</h5>
          <p>An application to assist authors in creating and organizing books they are writing.</p>

          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link href="https://book-organizer.herokuapp.com/"> live </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://github.com/JSchutza/Book_Organizer"> github </Nav.Link>
            </Nav.Item>
          </Nav>

          <ListGroup>
            <ListGroup.Item>
              Leveraged AWS for character image uploads, reducing server load and allowing for image storage scalability.
            </ListGroup.Item>

            <ListGroup.Item>
              Incorporated React and Redux to create a splash page animation that is non-resource intensive, resulting in an improved user experience.
            </ListGroup.Item>

            <ListGroup.Item>
              Designed a RESTful API with Flask-SQLAlchemy and Flask to create dry, readable, and maintainable code.
            </ListGroup.Item>
          </ListGroup>

      </Container>


      <Container>
          <h5>Remind Me (React, Express, Sequelize)</h5>
          <p>Application to allow developers to efficiently write notes about code.</p>

          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link href="https://remind----me.herokuapp.com/"> live </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://github.com/JSchutza/Remind_Me"> github </Nav.Link>
            </Nav.Item>
          </Nav>

          <ListGroup>
            <ListGroup.Item>
              Leveraged a React markdown parser to allow users to write notes in a markdown language.
            </ListGroup.Item>

            <ListGroup.Item>
              Incorporated Redux and unidirectional data flow, resulting in a dynamic application that displays and manipulates data created by the user.
            </ListGroup.Item>

            <ListGroup.Item>
              Used HTML5 and CSS3 to construct an responsive UI, allowing for an improved user experience and ensuring availability to mobile devices.
            </ListGroup.Item>
          </ListGroup>
      </Container>



      <Container>
          <h5>Podemic  (Pug, Express, Sequelize)</h5>
          <p>Application used to discover, review, and save the most recent podcasts.</p>

          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link href="https://podemic.herokuapp.com/"> live </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://github.com/JSchutza/Good_Pods"> github </Nav.Link>
            </Nav.Item>
          </Nav>

          <ListGroup>
            <ListGroup.Item>
              Leveraged Git, Github, Heroku, and Agile methodologies to successfully meet all required project MVP’s, as well as successful application hosting.
            </ListGroup.Item>

            <ListGroup.Item>
              Created an API endpoint and vanilla JavaScript code to serve and display users’ information and saved podcasts.
            </ListGroup.Item>

            <ListGroup.Item>
              Utilized the Sequelize ORM and Postgres relational database to allow users to create accounts, and save podcasts.
            </ListGroup.Item>
          </ListGroup>

      </Container>



      <Container>
          <h5>Instagram_Clone  (React, Flask, AWS)</h5>
          <p>A clone of the Instagram platform, allows users to post photos and connect.</p>

          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link href="https://instagram--me.herokuapp.com/"> live </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://github.com/JSchutza/Instagram_Clone"> github </Nav.Link>
            </Nav.Item>
          </Nav>

          <ListGroup>
            <ListGroup.Item>
              Created dynamic seeder data with Flask, Flask-Migrate, and Alembic, giving the application realistic data with which visitors can interact.
            </ListGroup.Item>

            <ListGroup.Item>
              Incorporated Redux and a normalized store for users’ posts, resulting in a predictable and consistent application state.
            </ListGroup.Item>

            <ListGroup.Item>
              Utilized Heroku and Docker to create an lightweight Heroku container, containing application dependencies and allowing users to access the site.
            </ListGroup.Item>
          </ListGroup>

      </Container>



      <Container>
          <h5>EXPERIENCE</h5>
      </Container>



      <Container>
          <h5>Self Taught Software Engineer</h5>
          <p>Freelance  Sep 2019 - Nov 2020</p>

          <ListGroup>
            <ListGroup.Item>
              Created software with PHP, JavaScript, and Python through tutorials, research, and dedicated trial and error.
            </ListGroup.Item>

            <ListGroup.Item>
              Contributed 1,867 times to more than fifty personal repositories on GitHub.
            </ListGroup.Item>

            <ListGroup.Item>
              Built custom WordPress templates using PHP and CSS.
            </ListGroup.Item>
          </ListGroup>

      </Container>




      <Container>
          <h5>HR Operations Specialist</h5>
          <p>UBS Financial Services  Sep 2018 - Sep 2019</p>

          <ListGroup>
            <ListGroup.Item>
              Maintained employee records for all North American External Staff members while meeting service level agreements.
            </ListGroup.Item>

            <ListGroup.Item>
              Reported application errors and data inconsistencies with the IT team, improving case completion time and data accuracy.
            </ListGroup.Item>

            <ListGroup.Item>
              Triaged cases to coworkers through the use of the SNOW case management system.
            </ListGroup.Item>

            <ListGroup.Item>
              Won HR Hackathon contest with five other coworkers, improving communication and collaboration within UBS.
            </ListGroup.Item>
          </ListGroup>

      </Container>



      <Container>
          <h5>Currey Ingram Academy</h5>
          <p>Summer Treatment Program Counselor	 June 2018 - July 2018</p>

          <ListGroup>
            <ListGroup.Item>
              Collected and analyzed data on students’ behavior, resulting in the creation of personalized treatment plans.
            </ListGroup.Item>

            <ListGroup.Item>
              Evaluated treatment plans for students in order to identify areas of growth, allowing for continuous development of student behavior.
            </ListGroup.Item>

            <ListGroup.Item>
              Directed students while utilizing a points-based system designed to reinforce attention and proper social behavior.
            </ListGroup.Item>
          </ListGroup>

      </Container>



      <Container>
          <h5>EDUCATION</h5>
      </Container>



      <Container>
          <h5>Full Stack Development</h5>
          <p>App Academy   |   2020 - 2021</p>
      </Container>



      <Container>
          <h5>BS Entertainment Industry Studies</h5>
          <p>Belmont University |  2013 - 2018</p>
      </Container>



    <Container>
          <Button variant="primary"> Download </Button>
    </Container>
    </div>


    </>
  )

};





export default Resume;
