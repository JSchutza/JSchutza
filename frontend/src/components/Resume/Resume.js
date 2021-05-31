import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'






const Resume = () => {
  return (
    <>
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
          <p>JavaScript, Python, PHP, HTML, CSS, SQL, React, Redux, Express, Flask, Django, Node.js, WordPress, Markdown,  JSON, Go, C++, Bash script, Shell script, Git, Windows, Linux, Docker</p>
        </Container>


      <Container>
          <h5>Book Organizer  (React, Flask, AWS)</h5>
          <p>An application to assist authors in creating and organizing books they are writing.</p>
          live | github

Leveraged AWS for character image uploads, reducing server load and allowing for image storage scalability.
Incorporated React and Redux to create a splash page animation that is non-resource intensive, resulting in an improved user experience.
Designed a RESTful API with Flask-SQLAlchemy and Flask to create dry, readable, and maintainable code.
      </Container>


      <Container>
          <h5>Remind Me (React, Express, Sequelize)</h5>
          <p>Application to allow developers to efficiently write notes about code.</p>
          live | github

Leveraged a React markdown parser to allow users to write notes in a markdown language.
Incorporated Redux and unidirectional data flow, resulting in a dynamic application that displays and manipulates data created by the user.
Used HTML5 and CSS3 to construct an responsive UI, allowing for an improved user experience and ensuring availability to mobile devices.
      </Container>



      <Container>
          <h5>Podemic  (Pug, Express, Sequelize)</h5>
          <p>Application used to discover, review, and save the most recent podcasts.</p>
          live | github

Leveraged Git, Github, Heroku, and Agile methodologies to successfully meet all required project MVP’s, as well as successful application hosting.
Created an API endpoint and vanilla JavaScript code to serve and display users’ information and saved podcasts.
Utilized the Sequelize ORM and Postgres relational database to allow users to create accounts, and save podcasts.
      </Container>



      <Container>
          <h5>Instagram_Clone  (React, Flask, AWS)</h5>
          <p>A clone of the Instagram platform, allows users to post photos and connect.</p>
          live | github

Created dynamic seeder data with Flask, Flask-Migrate, and Alembic, giving the application realistic data with which visitors can interact.
Incorporated Redux and a normalized store for users’ posts, resulting in a predictable and consistent application state.
Utilized Heroku and Docker to create an lightweight Heroku container, containing application dependencies and allowing users to access the site.
      </Container>



      <Container>
          <h5>EXPERIENCE</h5>
      </Container>



      <Container>
          <h5>Self Taught Software Engineer</h5>
          <p>Freelance  Sep 2019 - Nov 2020</p>

Created software with PHP, JavaScript, and Python through tutorials, research, and dedicated trial and error.
Contributed 1,867 times to more than fifty personal repositories on GitHub.
Built custom WordPress templates using PHP and CSS.
      </Container>




      <Container>
          <h5>HR Operations Specialist</h5>
          <p>UBS Financial Services  Sep 2018 - Sep 2019</p>

Maintained employee records for all North American External Staff members while meeting service level agreements.
Reported application errors and data inconsistencies with the IT team, improving case completion time and data accuracy.
Triaged cases to coworkers through the use of the SNOW case management system.
Won HR Hackathon contest with five other coworkers, improving communication and collaboration within UBS.
      </Container>



      <Container>
          <h5>Currey Ingram Academy</h5>
          <p>Summer Treatment Program Counselor	 June 2018 - July 2018</p>

Collected and analyzed data on students’ behavior, resulting in the creation of personalized treatment plans.
Evaluated treatment plans for students in order to identify areas of growth, allowing for continuous development of student behavior.
Directed students while utilizing a points-based system designed to reinforce attention and proper social behavior.
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
