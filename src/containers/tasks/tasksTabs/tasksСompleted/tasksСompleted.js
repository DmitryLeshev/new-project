import React, { Component } from "react";

import TasksСompletedVeiw from "./view/TasksСompleted";

class TasksСompleted extends Component {
  componentDidMount() {
    console.log("componentDidMount TasksСompleted");
  }
  render() {
    return <TasksСompletedVeiw />;
  }
}

export default TasksСompleted;
