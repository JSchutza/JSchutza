
import { useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'



import { thunk_deleteEducation } from "../../store/thunks/educations.jsx";






const DeleteEducationButton = ({ educationId }) => {
  const dispatch = useDispatch();




  const onDelete = event => {
    event.preventDefault();
    dispatch(thunk_deleteEducation(educationId));
  }



  return (
    <>
      <Container>
        <Button variant="outline-danger" onClick={event => onDelete(event)}> Delete </Button>
      </Container>
    </>
  )
};

export default DeleteEducationButton;
