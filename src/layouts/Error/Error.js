import React, { Suspense } from "react";
import { renderRoutes } from "react-router-config";

import useStyles from "./styles";
import { LinearProgress } from "@material-ui/core";

const Error = (props) => {
  const { route } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.content}>
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default Error;
