import React, { Suspense } from "react";

import { renderRoutes } from "react-router-config";

import { connect } from "react-redux";
import { compose } from "redux";
import {
  navBarClosed,
  navBarOpen,
  themeSettingsOpen,
} from "@src/App/appActions";
import { userLogsOut } from "@src/containers/authorization/authorizationAction";

import clsx from "clsx";
import { withStyles } from "@material-ui/styles";
import { LinearProgress } from "@material-ui/core";

import { TopBar, NavBar, ThemeSettings } from "./components";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  content: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    height: "100%",
    transition: theme.drawer.transition,
    backgroundColor: theme.palette.background.default,
  },
  contentShift: {
    width: `calc(100% - ${theme.drawer.width}px)`,
    marginLeft: theme.drawer.width,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
});

const Dashboard = (props) => {
  const {
    route,
    navBar,
    classes,
    navBarOpen,
    navBarClosed,
    themeSettingsOpen,
    userLogsOut,
  } = props;

  return (
    <React.Fragment>
      <TopBar
        navBar={navBar}
        navBarOpen={navBarOpen}
        navBarClosed={navBarClosed}
        themeSettingsOpen={themeSettingsOpen}
        userLogsOut={userLogsOut}
      />
      <NavBar navBar={navBar} navBarClosed={navBarClosed} />
      <ThemeSettings />
      <main className={classes.container}>
        <div
          className={clsx(classes.content, {
            [classes.contentShift]: navBar,
          })}
        >
          <Suspense fallback={<LinearProgress />}>
            {renderRoutes(route.routes)}
          </Suspense>
        </div>
      </main>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    navBar: state.app.navBar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navBarOpen: () => dispatch(navBarOpen()),
    navBarClosed: () => dispatch(navBarClosed()),
    themeSettingsOpen: () => dispatch(themeSettingsOpen()),
    userLogsOut: () => dispatch(userLogsOut()),
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Dashboard);
