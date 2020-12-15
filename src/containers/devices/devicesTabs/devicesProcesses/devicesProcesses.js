import React, { Component } from "react";

import { connect } from "react-redux";
import { getProcessesList } from "./devicesProcessesAction";

import DevicesProcessesView from "./view/DevicesProcesses";
import cellsName from "./processesTableConfig";

class DevicesProcesses extends Component {
  componentDidMount() {
    console.log("Loading data...");
    this.props.getProcessesList(this.props.id);
  }

  render() {
    return (
      <DevicesProcessesView
        loading={this.props.loading}
        error={this.props.error}
        list={this.props.list}
        cellsName={cellsName}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.combineDevices.processes.loading,
    error: state.combineDevices.processes.error,
    list: state.combineDevices.processes.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProcessesList: (id) => dispatch(getProcessesList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DevicesProcesses);
