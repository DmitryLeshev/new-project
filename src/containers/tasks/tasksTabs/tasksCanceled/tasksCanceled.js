import React, { Component } from "react";

import TasksCanceledView from "./view/TasksCanceled";

class TasksCanceled extends Component {
  componentDidMount() {
    console.log("componentDidMount TasksCanceled");
  }
  render() {
    return <TasksCanceledView />;
  }
}

export default TasksCanceled;
