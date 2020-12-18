import React, { Component } from "react";
import { withRouter } from "react-router";

import { compose } from "redux";
import { connect } from "react-redux";
import { resetAllDevices } from "./devicesTabsAction";

import DevicesTabsView from "./view/DevicesTabs";

import tabsConfig from "./devicesTabsConfig";

class DevicesTabs extends Component {
  state = {
    selectedTab: 0,
  };
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

  componentDidMount() {
    const selectedTab = this.getSelectedTab();
    this.setState({ selectedTab });
  }

  componentDidUpdate(prevProps) {
    console.log("Devices Tabs componentDidUpdate...");
    if (prevProps.match.params.id !== this.props.match.params.id) {
      console.log("Switch device");
      this.props.resetAllDevices();
    }
  }

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
    resetAllDevices: () => dispatch(resetAllDevices()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(DevicesTabs);
