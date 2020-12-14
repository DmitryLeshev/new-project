import React, { Component } from "react";

import { connect } from "react-redux";

import { getDetailsScreens, screensChangeSelectedUser } from "./action";

import DevicesScreensView from "./view/DevicesScreens";

class DevicesScreens extends Component {
  componentDidMount() {
    const { id, loadedPage, loaded, getDetailsScreens } = this.props;
    if (!loaded) {
      getDetailsScreens(id, loadedPage);
    }
  }

  appendItems = () => {
    console.log("appendItems");
    const { id, loadedPage, loaded, getDetailsScreens, loading } = this.props;
    if (!loaded || !loading) {
      getDetailsScreens(id, loadedPage);
    }
  };

  render() {
    const {
      id,
      loading,
      error,
      users,
      selectedUser,
      screenshots,
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
        appendItems={this.appendItems}
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDetailsScreens: (id, selectedUserValue) =>
      dispatch(getDetailsScreens(id, selectedUserValue)),
    screensChangeSelectedUser: (id, selectedUser) =>
      dispatch(screensChangeSelectedUser(id, selectedUser)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DevicesScreens);
