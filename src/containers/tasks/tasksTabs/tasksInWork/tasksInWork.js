import React, { Component } from "react";

import { connect } from "react-redux";
import { tasksInWorkLoadingPack } from "./action";

import TasksInWorkView from "./view/TasksInWork";

class TasksInWork extends Component {
  componentDidMount() {
    console.log("componentDidMount TasksInWork");
    this.props.tasksInWorkLoadingPack();
  }
  render() {
    return <TasksInWorkView tasks={this.props.tasks} />;
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.combineTasks.inWork.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tasksInWorkLoadingPack: () => dispatch(tasksInWorkLoadingPack()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksInWork);
