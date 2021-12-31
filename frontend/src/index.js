import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { UserProvider } from "./context/UserContext.js";

import App from "./App";

import configureStore from "./store";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const store = configureStore();





ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider >
        <App />
      </UserProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
