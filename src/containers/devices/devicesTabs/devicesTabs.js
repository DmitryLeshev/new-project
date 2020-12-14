import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { compose } from "redux";

import DevicesTabsView from "./view/DevicesTabs";

import tabsConfig from "./devicesTabsConfig";

class DevicesTabs extends Component {
  getDeviceById = () => {
    const { id } = this.props.match.params;
    const { devices } = this.props;
    if (devices) {
      return devices.find((device) => device.id === Number(id));
    } else return null;
  };

  getSelectedTab = () => {
    const { tab } = this.props.match.params;
    if (tab) {
      return tabsConfig.find((tabItem) => tabItem.value === tab).id;
    } else return null;
  };

  render() {
    const { id, tab } = this.props.match.params;
    return (
      <DevicesTabsView
        id={id}
        tab={tab}
        device={this.getDeviceById()}
        tabsConfig={tabsConfig}
        selectedTab={this.getSelectedTab()}
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
    // getDevicesList: () => dispatch(getDevicesList()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(DevicesTabs);
