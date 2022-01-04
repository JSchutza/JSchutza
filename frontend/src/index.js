import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { UserProvider } from "./context/UserContext.js";
import { SidebarProvider } from './context/SideBarContext.js';

import App from './App';
import configureStore from "./store";

const store = configureStore();



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider >
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </UserProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
