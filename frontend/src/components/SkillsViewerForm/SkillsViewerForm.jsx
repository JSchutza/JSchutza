import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';



import DeleteSkillButton from "../DeleteSkillButton";
import UpdateSkillButton from "../UpdateSkillButton";


import { thunk_createSkills } from "../../store/thunks/skills.jsx";



const SkillsViewerForm = () => {
  const [ title, setTitle ] = useState('');
  const [ percentage, setPercent ] = useState(0);
  const [ img, setImg ] = useState('');
  const currentSkills = useSelector(store => store.skillsReducer.skills)
  const dispatch = useDispatch();




  const onSubmit = event => {
    event.preventDefault();
    const payload = { title, percentage, img };
    dispatch(thunk_createSkills(payload));
  }




  return (
    <>
      {/* display list of the current skills in db with delete / remove button next to each */}
      {currentSkills === null ?
          <></>
      :
          Object.values(currentSkills).map(eachSkill => (
            <>
              <Container>
                <ListGroup.Item>
                    {eachSkill.title}
                  <DeleteSkillButton skillId={eachSkill.id} />
                  <UpdateSkillButton skillId={eachSkill.id} />
                </ListGroup.Item>
              </Container>
              <br />
            </>
          ))
      }



      <Jumbotron fluid>
        <Container>
          <form onSubmit={onSubmit}>
            <label>
              Title
              <Form.Control
                type="text"
                name="title"
                value={title}
                  onChange={event => setTitle(event.target.value)}
              />
            </label>
              <br />

            <label>
              Percentage
              <Form.Control
                type="number"
                name="percentage"
                value={percentage}
                onChange={event => setPercent(event.target.value)}
              />
            </label>
              <br />

            <label>
              Icon
              <Form.Control
                type="text"
                name="icon"
                value={img}
                onChange={event => setImg(event.target.value)}
              />
            </label>

              <br />
              <Button variant="primary" onClick={event => onSubmit(event)}> Create </Button>

          </form>
        </Container>
      </Jumbotron>
    </>
  )
};

export default SkillsViewerForm;
