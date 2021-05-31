import React from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import defaultImg from "../../icons/default_img.JPG";



const ProjectViewer = () => {
  return (
    <>
    <div>
      <Container>

          <Container>
            <h1> Projects </h1>
          </Container>

        <CardColumns>
          <Card>
            <Card.Img variant="top" src={defaultImg} />
            <Card.Body>
              <Card.Title> Book Organizer </Card.Title>
              <Card.Text>
                A app to help authors create and organize books they are currently writing and to connect authors to other aspiring authors.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://book-organizer.herokuapp.com/">
                <small className="text-muted">Live</small>
              </a>
                <br />
              <a href="https://github.com/JSchutza/Book_Organizer">
                <small className="text-muted">GitHub</small>
              </a>
            </Card.Footer>
          </Card>



          <Card>
            <Card.Img variant="top" src={defaultImg} />
            <Card.Body>
              <Card.Title> Remind Me </Card.Title>
              <Card.Text>
                Application to allow developers to efficiently write notes about code.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://remind----me.herokuapp.com/">
                <small className="text-muted">Live</small>
              </a>

              <br />

              <a href="https://github.com/JSchutza/Remind_Me">
                <small className="text-muted">GitHub</small>
              </a>
            </Card.Footer>
          </Card>



          <Card>
            <Card.Img variant="top" src={defaultImg} />
            <Card.Body>
              <Card.Title> Instagram_Clone </Card.Title>
              <Card.Text>
                A clone of the Instagram platform, allows users to post photos and connect.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://instagram--me.herokuapp.com/">
                <small className="text-muted">Live</small>
              </a>

              <br />

              <a href="https://github.com/JSchutza/Instagram_Clone">
                <small className="text-muted">GitHub</small>
              </a>
            </Card.Footer>
          </Card>



          <Card>
            <Card.Img variant="top" src={defaultImg} />
            <Card.Body>
              <Card.Title> Podemic </Card.Title>
              <Card.Text>
                Application used to discover, review, and save the most recent podcasts.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://podemic.herokuapp.com/">
                <small className="text-muted">Live</small>
              </a>

              <br />

              <a href="https://github.com/JSchutza/Good_Pods">
                <small className="text-muted">GitHub</small>
              </a>
            </Card.Footer>
          </Card>



          <Card>
            <Card.Img variant="top" src={defaultImg} />
            <Card.Body>
              <Card.Title> Median </Card.Title>
              <Card.Text>
                A clone of the user driven publishing platform Medium.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://median-article-app.herokuapp.com/users">
                <small className="text-muted">Live</small>
              </a>

              <br />

              <a href="https://github.com/jxnprince/Median">
                <small className="text-muted">GitHub</small>
              </a>
            </Card.Footer>
          </Card>


        </CardColumns>
      </Container>
    </div>
    </>
  )
};

export default ProjectViewer;
