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
    let data = [];
    return <DevicesProgramsView data={data} cellsName={cellsName} />;
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.combineDevices.programs.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProgramsList: (id) => dispatch(getProgramsList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DevicesPrograms);
