import React, { Component } from "react";

import { connect } from "react-redux";
import { tasksInWorkLoadingPack } from "./tasksInWorkAction";

import TasksInWorkView from "./view/TasksInWork";

class TasksInWork extends Component {
  componentDidMount() {
    this.props.tasksInWorkLoadingPack();
  }
  render() {
    return (
      <TasksInWorkView
        tasks={this.props.tasks}
        selectedTask={this.props.getTaskById(this.props.tasks)}
      />
    );
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
