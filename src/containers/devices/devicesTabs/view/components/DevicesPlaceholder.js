import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  inner: {
    textAlign: "center",
  },
  title: {
    margin: theme.spacing(4, 0, 1, 0),
  },
}));

const DevicesPlaceholder = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <Typography className={classes.title} variant="h4">
          Выберите устройство
        </Typography>
        <Typography variant="subtitle1">
          Тут можно ещё что-то написать
        </Typography>
      </div>
    </div>
  );
};

export default DevicesPlaceholder;
