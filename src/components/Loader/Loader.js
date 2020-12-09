import React from "react";

import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2">Loading...</Typography>;
    </div>
  );
};

export default Loader;
