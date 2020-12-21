import React, { Component } from "react";

import { connect } from "react-redux";

import {
  getDetailsScreens,
  screensChangeSelectedUser,
  screensGetDateFilter,
  screensGetFullyScreenshot,
} from "./devicesScreensAction";

import DevicesScreensView from "./view/DevicesScreens";

class DevicesScreens extends Component {
  componentDidMount() {
    const { id, loaded, getDetailsScreens } = this.props;
    if (!loaded) {
      getDetailsScreens(id);
      getDetailsScreens(id);
    }
  }

  appendItems = () => {
    const { id, loaded, getDetailsScreens, loading } = this.props;
    if (!loaded || !loading) {
      getDetailsScreens(id);
      getDetailsScreens(id);
    }
  };

  filterScreenshots = (dateStart, dateEnd) => {
    const { screensGetDateFilter, getDetailsScreens, id } = this.props;
    console.log("dateStart: ", dateStart, "dateEnd: ", dateEnd);
    const dateFilter = {
      dateStart,
      dateEnd,
    };
    screensGetDateFilter(dateFilter);
    getDetailsScreens(id);
  };

  getFullyScreenshot = (screenId) => {
    const { id, screensGetFullyScreenshot } = this.props;
    screensGetFullyScreenshot(id, screenId);
  };

  render() {
    const {
      id,
      loading,
      error,
      users,
      selectedUser,
      screenshots,
      fullyScreenshot,
      screensChangeSelectedUser,
    } = this.props;

    return (
      <DevicesScreensView
        id={id}
        loading={loading}
        error={error}
        users={users}
        selectedUser={selectedUser}
        screenshots={screenshots}
        screensChangeSelectedUser={screensChangeSelectedUser}
        fullyScreenshot={fullyScreenshot}
        appendItems={this.appendItems}
        filterScreenshots={this.filterScreenshots}
        getFullyScreenshot={this.getFullyScreenshot}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.combineDevices.screens.loading,
    loaded: state.combineDevices.screens.loaded,
    error: state.combineDevices.screens.error,
    loadedPage: state.combineDevices.screens.loadedPage,
    users: state.combineDevices.screens.users,
    selectedUser: state.combineDevices.screens.selectedUser,
    screenshots: state.combineDevices.screens.screenshots,
    fullyScreenshot: state.combineDevices.screens.fullyScreenshot,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDetailsScreens: (id, dateStart, dateEnd) =>
      dispatch(getDetailsScreens(id, dateStart, dateEnd)),
    screensChangeSelectedUser: (id, selectedUser) =>
      dispatch(screensChangeSelectedUser(id, selectedUser)),
    screensGetDateFilter: (dateFilter) =>
      dispatch(screensGetDateFilter(dateFilter)),
    screensGetFullyScreenshot: (id, screenId) =>
      dispatch(screensGetFullyScreenshot(id, screenId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DevicesScreens);
