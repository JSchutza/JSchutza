import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { UserProvider } from "./context/UserContext.jsx";
import { SidebarProvider } from './context/SideBarContext.jsx';

import App from './App.jsx';
import configureStore from "./store/index.jsx";

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
