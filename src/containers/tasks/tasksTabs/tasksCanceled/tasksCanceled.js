import React, { Component } from "react";

import { connect } from "react-redux";
import { tasksCanceledLoadingPack } from "./tasksCanceledAction";

import TasksCanceledView from "./view/TasksCanceled";

class TasksCanceled extends Component {
  componentDidMount() {
    this.props.tasksCanceledLoadingPack();
  }
  render() {
    return (
      <TasksCanceledView
        tasks={this.props.tasks}
        selectedTask={this.props.getTaskById(this.props.tasks)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.combineTasks.canceled.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tasksCanceledLoadingPack: () => dispatch(tasksCanceledLoadingPack()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksCanceled);
