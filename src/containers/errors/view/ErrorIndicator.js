import React from "react";

import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  errorText: {
    color: theme.palette.text.primary,
  },
}));

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
