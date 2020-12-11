import React from "react";
import { Link as RouterLink } from "react-router-dom";

import clsx from "clsx";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    transition: theme.drawer.transition,
    width: "100%",
  },

  brend: {
    marginLeft: theme.spacing(1),
    fontWeight: 700,
    color: theme.palette.common.white,
  },
}));

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
