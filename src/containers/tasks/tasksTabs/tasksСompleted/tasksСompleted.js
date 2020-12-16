import React, { Component } from "react";

import { connect } from "react-redux";
import { tasksCompletedLoadingPack } from "./tasksСompletedAction";

import TasksСompletedView from "./view/TasksСompleted";

class TasksСompleted extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    this.props.tasksCompletedLoadingPack();
  }
  render() {
    return (
      <TasksСompletedView
        tasks={this.props.tasks}
        selectedTask={this.props.getTaskById(this.props.tasks)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.combineTasks.completed.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tasksCompletedLoadingPack: () => dispatch(tasksCompletedLoadingPack()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksСompleted);
