import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/thunks/session.js';
import ToolTip from "../ToolTip";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


import styles from "./loginform.module.css"

import { IoIosPower } from "react-icons/io";





const LoginForm = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const dispatch = useDispatch();


  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(login(email, password));
  }



  return(
    <>
    <div>
      <form onSubmit={onSubmit}>
          <Jumbotron fluid>
            <Container>
            <Form.Control type="email" placeholder="name@example.com" />

            <Form.Control type="password" placeholder="Password" />

          <ToolTip content={"Enter"}>
              <IoIosPower />
          </ToolTip>
        </Container>
      </Jumbotron>
      </form>
    </div>
    </>
  )


};




export default LoginForm;
