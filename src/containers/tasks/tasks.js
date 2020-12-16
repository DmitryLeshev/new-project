import React, { Component } from "react";
import { withRouter } from "react-router";

import { compose } from "redux";
import { connect } from "react-redux";

import TasksView from "./view/Tasks";
import { tabsConfig } from "./tasksTabsConfig";
class Tasks extends Component {
  getTaskById = (tasks) => {
    const { id } = this.props.match.params;
    if (!tasks) return null;
    return tasks.find((task) => task.id === Number(id));
  };

  getSelectedTab = () => {
    const { status } = this.props.match.params;
    if (!status) return null;
    const selectedTab = tabsConfig.find((tabItem) => tabItem.value === status);
    if (selectedTab === undefined) {
      return this.props.history.push("/tasks/in-work");
    }
    return selectedTab.id;
  };

  render() {
    return (
      <TasksView
        tabsConfig={tabsConfig}
        paramsStatus={this.props.match.params.status}
        paramsId={this.props.match.params.id}
        getTaskById={this.getTaskById}
        selectedTab={this.getSelectedTab()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Tasks);
