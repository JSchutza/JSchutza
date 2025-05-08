

import { useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'



import { thunk_deleteExperiences } from "../../store/thunks/experiences.jsx";






const DeleteExperienceButton = ({ experienceId }) => {
  const dispatch = useDispatch();




  const onDelete = event => {
    event.preventDefault();
    dispatch(thunk_deleteExperiences(experienceId));
  }



  return (
    <>
      <Container>
        <Button variant="outline-danger" onClick={event => onDelete(event)}> Delete </Button>
      </Container>
    </>
  )
};

export default DeleteExperienceButton;
