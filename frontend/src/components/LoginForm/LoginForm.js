
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/thunks/session.js';
import { useHistory } from "react-router-dom";
import ToolTip from "../ToolTip";


import styles from "./loginform.module.css"

import { IoIosPower } from "react-icons/io";




const LoginForm = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();


  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
    history.push('/');
  }



  return(
    <div className={styles.login_wrap} >
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
          <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          />
          <br />

          <ToolTip content={"Enter"}>
            <button> <IoIosPower /> </button>
          </ToolTip>
      </form>
    </div>
  )


};




export default LoginForm;
