
import { useHistory } from "react-router-dom";
import { logout } from "../../store/thunks/session.js";

import styles from "./navbar.module.css";
import { useDispatch } from "react-redux";
import { FiLogIn } from 'react-icons/fi';
import Nav from 'react-bootstrap/Nav';

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



  const initLogout = event => {
    event.preventDefault();
    dispatch(logout());
    history.push("/");
  }




  // if I am not logged-in as a admin
  if (userStatus === false){
    return (
      <div>
          <Nav justify variant="tabs" defaultActiveKey="/login">

            <Nav.Item>
              <ToolTip content={'Login'} >
                <Nav.Link href="/login" onClick={event => showLoginForm(event)}> <FiLogIn /> </Nav.Link>
              </ToolTip>
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
    <div>
        <Nav justify variant="tabs" defaultActiveKey="/">

          <Nav.Item>
            <ToolTip content={'Logout'} >
              <Nav.Link href="/logout" onClick={event => initLogout(event)}> <FiLogIn /> </Nav.Link>
            </ToolTip>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/" onClick={event => showHome(event)}> Home </Nav.Link>
          </Nav.Item>

        </Nav>
    </div>
  );


};





export default NavBar;
