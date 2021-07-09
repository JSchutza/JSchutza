import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';


// import { thunk_updateSkill } from "../../store/thunks/skills.js";





const UpdateProjectButton = ({ projectId }) => {
  const dispatch = useDispatch();
  // const prevInfo = useSelector(store => store.skillsReducer.skills[projectId]);

  // const [showform, setShowform] = useState(false);
  // const [title, setTitle] = useState(prevInfo.title);
  // const [percentage, setPercent] = useState(prevInfo.percentage);





  // const onSubmit = event => {
  //   event.preventDefault();
  //   const payload = { title, percentage };
  //   dispatch(thunk_updateSkill(projectId, payload));
  // }




  // const onUpdate = event => {
  //   event.preventDefault();
  //   setShowform(true);
  // }


  // const hideForm = event => {
  //   event.preventDefault();
  //   setShowform(false);
  // }


  // if (showform) {
  //   return (
  //     <>
  //       <Container>
  //         <Button variant="primary" onClick={event => hideForm(event)}> Close </Button>
  //       </Container>

  //       <Container>
  //         <form onSubmit={onSubmit}>
  //           <label>
  //             Title
  //             <Form.Control
  //               type="text"
  //               name="title"
  //               value={title}
  //               onChange={event => setTitle(event.target.value)}
  //             />
  //           </label>
  //           <br />

  //           <label>
  //             Percentage
  //             <Form.Control
  //               type="number"
  //               name="percentage"
  //               value={percentage}
  //               onChange={event => setPercent(event.target.value)}
  //             />
  //           </label>

  //           <br />
  //           <Button variant="primary" onClick={event => onSubmit(event)}> Update </Button>
  //         </form>
  //       </Container>
  //     </>
  //   )
  // }


  return (
    <>
      <Container>
        {/* <Button variant="primary" onClick={event => onUpdate(event)}> Update </Button> */}
        <Button variant="primary" onClick={event => event.preventDefault()}> Update </Button>
      </Container>
    </>
  )
};

export default UpdateProjectButton;
