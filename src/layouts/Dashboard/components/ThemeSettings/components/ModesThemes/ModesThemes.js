import React from "react";

import useStyles from "./styles";
import { Switch, Typography } from "@material-ui/core";

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
