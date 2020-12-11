import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { compose } from "redux";

import DevicesTabsView from "./view/DevicesTabs";

class DevicesTabs extends Component {
  render() {
    const { id, tab } = this.props.match.params;
    const { devices } = this.props;
    let device;
    if (devices) device = devices.find((d) => d.id === Number(id));
    return <DevicesTabsView device={device} id={id} tab={tab} />;
  }
}

const mapStateToProps = (state) => {
  return {
    devices: state.combineDevices.list.devices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getDevicesList: () => dispatch(getDevicesList()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(DevicesTabs);
