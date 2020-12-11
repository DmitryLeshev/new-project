import React, { Component } from "react";

import { connect } from "react-redux";

import TasksView from "./view/Tasks";
import tabs from "./tasksTabsConfig";
class Tasks extends Component {
  render() {
    return <TasksView tabs={tabs} />;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
