import React from 'react';
import { NavLink } from "react-router-dom";
// import LogoutButton from "../LogoutButton"
import styles from "./navbar.module.css";
import { useDispatch } from "react-redux"
import { FiLogIn } from 'react-icons/fi'


import ToolTip from "../ToolTip";



const NavBar = ({ userStatus }) => {
  const dispatch = useDispatch();


  const showLoginForm = (event) => {
    event.preventDefault();

  }


  if (userStatus === false){
    return (
      <>
      <div>
        <nav className={styles.nav}>
            <ToolTip content={'Login'} >
              <li> <a href='/' onClick={(event) => showLoginForm(event)} > <FiLogIn /> </a> </li>
            </ToolTip>
        </nav>
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
