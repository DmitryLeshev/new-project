import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App/App";

import "react-vis/dist/style.css";
import "@assets/css/index.css";

// import TasksService from "./containers/tasks/tasksService";
// import AuthorizationService from "./containers/authorization/authorizationService";
// import DevicesService from "./containers/devices/devicesService";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));

// ReactDOM.render(<h1>Blablabla</h1>, document.getElementById("root"));
