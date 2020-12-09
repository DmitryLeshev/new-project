import React, { Suspense } from "react";

import { Redirect } from "react-router";
import { renderRoutes } from "react-router-config";

import { connect } from "react-redux";
import { compose } from "redux";

import { withStyles } from "@material-ui/styles";
import { LinearProgress } from "@material-ui/core";

import { TopBar } from "./components";

const styles = (theme) => ({
  content: {
    overflowY: "auto",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    backgroundColor: theme.palette.background.default,
  },
});

const Auth = (props) => {
  const { route, authorized, classes } = props;

  if (authorized) {
    console.log("Перенаправляем на главную страницу");
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <TopBar />
      <main className={classes.content}>
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </main>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    authorized: state.authorization.authorized,
  };
}

export default compose(connect(mapStateToProps), withStyles(styles))(Auth);
