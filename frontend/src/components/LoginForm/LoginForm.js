
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/thunks/session.js';
import { useHistory } from "react-router-dom";


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
        <label>Email</label>
        <input
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
          <br />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          />
          <br />

          <button> <IoIosPower /> </button>
      </form>
    </div>
  )


};




export default LoginForm;
