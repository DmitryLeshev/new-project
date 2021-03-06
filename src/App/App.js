import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import getRoutes from "../routes";

import { connect } from "react-redux";
import { userCheckStatus } from "@src/containers/authorization/authorizationAction";
import { appReady } from "@src/App/appActions";

import ScrollReset from "@components/ScrollReset";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import {
  defaultThemeLight,
  defaultThemeDark,
  testThemeLight,
  testThemeDark,
} from "../theme";

import Loader from "@src/components/Loader/Loader";

class App extends Component {
  state = {
    routes: null,
  };
  componentDidMount() {
    this.switchRoutes();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.authorized !== this.props.authorized) this.switchRoutes();
  }

  switchRoutes = async () => {
    await this.props.userCheckStatus();
    const routes = getRoutes(this.props.authorized);
    this.setState({ routes });
    this.props.appReady();
  };

  themeProvider = () => {
    const { darkMode, appTheme } = this.props;
    if (appTheme === "default") {
      return darkMode ? defaultThemeDark : defaultThemeLight;
    } else if (appTheme === "test") {
      return darkMode ? testThemeDark : testThemeLight;
    }
  };

  render() {
    if (!this.props.ready) {
      return <Loader />;
    }
    return (
      <ThemeProvider theme={this.themeProvider()}>
        <CssBaseline />
        <ScrollReset />
        {renderRoutes(this.state.routes)}
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authorized: state.authorization.authorized,
    ready: state.app.ready,
    darkMode: state.app.darkMode,
    appTheme: state.app.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userCheckStatus: () => dispatch(userCheckStatus()),
    appReady: () => dispatch(appReady()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
