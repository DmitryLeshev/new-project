import React, { Component } from "react";

import { connect } from "react-redux";
import { getProgramsList } from "./devicesProgramsAction";

import DevicesProgramsView from "./view/DevicesPrograms";
import cellsName from "./programsTableConfig";

class DevicesPrograms extends Component {
  componentDidMount() {
    console.log("Loading data...");
    this.props.getProgramsList(this.props.id);
  }

  render() {
    return (
      <DevicesProgramsView
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
    loading: state.combineDevices.programs.loading,
    error: state.combineDevices.programs.error,
    list: state.combineDevices.programs.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProgramsList: (id) => dispatch(getProgramsList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DevicesPrograms);
