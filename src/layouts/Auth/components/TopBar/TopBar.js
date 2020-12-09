import React from "react";
import { Link as RouterLink } from "react-router-dom";

import clsx from "clsx";
import useStyles from "./styles";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root)} color="primary" position="relative">
      <Toolbar>
        <Typography
          className={classes.brend}
          variant="h2"
          component={RouterLink}
          to="/"
        >
          АСА ИБ
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
