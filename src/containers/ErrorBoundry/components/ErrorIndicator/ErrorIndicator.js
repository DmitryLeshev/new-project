import React from "react";

import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const ErrorIndicator = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.errorText} variant="h1">
        Что-то пошло не так
      </Typography>
    </div>
  );
};

export default ErrorIndicator;
