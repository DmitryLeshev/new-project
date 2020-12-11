import React, { Component } from "react";
import { withRouter } from "react-router";

import { compose } from "redux";
import { connect } from "react-redux";
import { getDevicesList } from "./devicesListAction";

import DevicesListView from "./view/DevicesList";
class DevicesList extends Component {
  componentDidMount() {
    this.props.getDevicesList();
  }

  render() {
    return (
      <DevicesListView
        devices={this.props.devices}
        id={this.props.match.params.id}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    devices: state.combineDevices.list.devices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDevicesList: () => dispatch(getDevicesList()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(DevicesList);
