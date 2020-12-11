import React, { Component } from "react";

import TasksDeferredView from "./view/TasksDeferred";

class TasksDeferred extends Component {
  componentDidMount() {
    console.log("componentDidMount TasksDeferred");
  }
  render() {
    return <TasksDeferredView />;
  }
}

export default TasksDeferred;
