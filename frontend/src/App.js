import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar";
import { useUser } from "./context/UserContext.js";




function App() {
  const dispatch = useDispatch();
  const [ loaded, setLoaded ] = useState(false);
  const { isUser } = useUser();





  useEffect(() => {
    setLoaded(true);
  }, [dispatch]);






  if (!loaded) {
    return null;
  }



  if (isUser === null) {
    return (
      <>
      <BrowserRouter>
        {/* <NavBar userStatus={false}/> */}
      </BrowserRouter>
      </>
    );
  }


if (isUser !== null) {
  return (
    <BrowserRouter>
      {/* <NavBar userStatus={true} /> */}

        <Switch>

        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
