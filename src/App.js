import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import routes from "./routes";

import { connect } from "react-redux";
import { userCheckStatus } from "./containers/authorization/authorizationAction";

import ScrollReset from "@components/ScrollReset";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import {
  // defaultThemeLight,
  // defaultThemeDark,
  // testThemeLight,
  testThemeDark,
} from "./theme";

class App extends Component {
  componentDidMount() {
    console.log("App componentDidMount userCheckStatus");
    this.props.userCheckStatus();
  }
  componentDidUpdate() {
    console.log("App componentDidMount userCheckStatus");
  }

  render() {
    return (
      <ThemeProvider theme={testThemeDark}>
        <CssBaseline />
        <ScrollReset />
        {renderRoutes(routes)}
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authorized: state.authorization.authorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userCheckStatus: () => dispatch(userCheckStatus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
