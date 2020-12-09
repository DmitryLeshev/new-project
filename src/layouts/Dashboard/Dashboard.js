import React, { Suspense } from "react";

import { Redirect } from "react-router";
import { renderRoutes } from "react-router-config";

import { connect } from "react-redux";
import { compose } from "redux";

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
  const { route, navBar, authorized, classes } = props;

  if (!authorized) {
    console.log("Перенаправляем на страницу авторизации");
    return <Redirect to="/authorization" />;
  }

  return (
    <React.Fragment>
      <TopBar />
      <NavBar />
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
    authorized: state.authorization.authorized,
  };
}

export default compose(connect(mapStateToProps), withStyles(styles))(Dashboard);
