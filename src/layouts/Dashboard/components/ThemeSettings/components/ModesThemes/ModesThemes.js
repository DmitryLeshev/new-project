import React from "react";

import { Switch, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modesThemes: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  modesThemeTitle: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
  switch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-beetwen",
  },
  switchItem: {
    textAlign: "center",
  },
}));

const ModesThemes = (props) => {
  const { darkMode, darkModeChange } = props;
  const classes = useStyles();

  return (
    <div className={classes.modesThemes}>
      <Typography className={classes.modesThemeTitle} variant="h5">
        Режим темы
      </Typography>

      <div className={classes.switch}>
        <Typography className={classes.switchItem} variant="button">
          Светлая тема
        </Typography>
        <Switch checked={darkMode} onChange={() => darkModeChange()} />
        <Typography className={classes.switchItem} variant="button">
          Тёмная тема
        </Typography>
      </div>
    </div>
  );
};

export default ModesThemes;
