import React, { Component } from "react";

import { connect } from "react-redux";
import { tasksDeferredLoadingPack } from "./tasksDeferredAction";

import TasksDeferredView from "./view/TasksDeferred";

class TasksDeferred extends Component {
  componentDidMount() {
    this.props.tasksDeferredLoadingPack();
  }
  render() {
    return (
      <TasksDeferredView
        tasks={this.props.tasks}
        selectedTask={this.props.getTaskById(this.props.tasks)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.combineTasks.deferred.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tasksDeferredLoadingPack: () => dispatch(tasksDeferredLoadingPack()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksDeferred);
