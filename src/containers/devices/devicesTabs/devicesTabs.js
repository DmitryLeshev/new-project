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
    if (!devices) return null;
    return devices.find((device) => device.id === Number(id));
  };

  getSelectedTab = () => {
    const { tab, id } = this.props.match.params;
    if (!tab) return null;
    const selectedTab = tabsConfig.find((tabItem) => tabItem.value === tab);
    if (selectedTab === undefined) {
      return this.props.history.push(`/devices/${id}/information`);
    }
    return selectedTab.id;
  };

  render() {
    return (
      <DevicesTabsView
        id={this.props.match.params.id}
        tab={this.props.match.params.tab}
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
