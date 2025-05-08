import React from 'react';
import { useHistory } from "react-router-dom";
import { logout } from "../../store/thunks/session.jsx";

import styles from "./navbar.module.css";
import { useDispatch } from "react-redux";
import { FiLogIn } from 'react-icons/fi';
import Nav from 'react-bootstrap/Nav';




const NavBar = ({ userStatus }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const overRideStyle = ` .nav-tabs .nav-link { margin-bottom: -1px; border: 1px solid transparent;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    background-color: #292246;
  } .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
      color: #fff;
      background-color: #292246;
      border-color: #292246 #292246 #292246;
  }`


  const showLoginForm = (event) => {
    event.preventDefault();
    history.push('/login');
  }


  const showHome = event => {
    event.preventDefault();
    history.push('/');
  }



  const initLogout = event => {
    event.preventDefault();
    dispatch(logout());
    history.push("/");
  }




  // if I am not logged-in as a admin
  if (userStatus === false){
    return (
      <div className={styles.nav_wrap} >
        <style type="text/css"> {overRideStyle} </style>

          <Nav justify variant="tabs" defaultActiveKey="/" >

            <Nav.Item>
              <Nav.Link href="/login" onClick={event => showLoginForm(event)}> <FiLogIn /> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/" onClick={event => showHome(event)}> Home </Nav.Link>
            </Nav.Item>
          </Nav>
      </div>
    );
  }




  // if I am logged in as a admin
  return (
    <div className={styles.nav_wrap} >
      <style type="text/css"> {overRideStyle} </style>

        <Nav justify variant="tabs" defaultActiveKey="/">

          <Nav.Item>
            <Nav.Link href="/logout" onClick={event => initLogout(event)}> <FiLogIn /> </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/" onClick={event => showHome(event)}> Home </Nav.Link>
          </Nav.Item>

        </Nav>
    </div>
  );


};





export default NavBar;
