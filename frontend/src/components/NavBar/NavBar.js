import React from 'react';
import { useHistory } from "react-router-dom";
// import LogoutButton from "../LogoutButton"
import styles from "./navbar.module.css";
import { useDispatch } from "react-redux"
import { FiLogIn } from 'react-icons/fi'
import Nav from 'react-bootstrap/Nav'

import ToolTip from "../ToolTip";










const NavBar = ({ userStatus }) => {
  const dispatch = useDispatch();
  const history = useHistory();



  const showLoginForm = (event) => {
    event.preventDefault();
    history.push('/login');
  }


  const showHome = event => {
    event.preventDefault();
    history.push('/');
  }


  const showResume = event => {
    event.preventDefault();
    history.push("/resume");
  }



  if (userStatus === false){
    return (
      <>
      <div>
          <Nav justify variant="tabs" defaultActiveKey="/">

            <Nav.Item>
              <ToolTip content={'Login'} >
                <Nav.Link href="/login" onClick={event => showLoginForm(event)}> <FiLogIn /> </Nav.Link>
              </ToolTip>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/" onClick={event => showHome(event)}> Home </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/resume" onClick={event => showResume(event)}> Resume </Nav.Link>
            </Nav.Item>

          </Nav>
      </div>
    </>
    );
  }





  return (
    <>
    <div>
      <nav className={styles.nav}>
      </nav>
    </div>
    </>
  );


};





export default NavBar;
