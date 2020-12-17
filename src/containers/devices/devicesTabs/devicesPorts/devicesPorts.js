import React, { Component } from "react";

import { connect } from "react-redux";
import { getPortsList } from "./devicesPortsAction";

import DevicesPortsView from "./view/DevicesPorts";
import cellsName from "./portsTableConfig";

class DevicesPorts extends Component {
  componentDidMount() {
    this.props.getPortsList(this.props.id);
  }

  render() {
    return (
      <DevicesPortsView
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
    loading: state.combineDevices.ports.loading,
    error: state.combineDevices.ports.error,
    list: state.combineDevices.ports.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPortsList: (id) => dispatch(getPortsList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DevicesPorts);
