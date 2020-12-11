import React, { Suspense } from "react";

import { renderRoutes } from "react-router-config";

import { withStyles } from "@material-ui/styles";
import { LinearProgress } from "@material-ui/core";

import TopBar from "./components/TopBar";

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
  const { route, classes } = props;

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

export default withStyles(styles)(Auth);
