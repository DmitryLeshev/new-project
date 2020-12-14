import React from "react";
import { Link as RouterLink } from "react-router-dom";

import clsx from "clsx";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";

import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    transition: theme.drawer.transition,
  },
  topBarShift: {
    width: `calc(100% - ${theme.drawer.width}px)`,
    marginLeft: theme.drawer.width,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  brend: {
    marginLeft: theme.spacing(1),
    fontWeight: 700,
    color: theme.palette.common.white,
  },
  rightContent: {
    marginLeft: "auto",
    marginRight: theme.spacing(1),
  },
  menuIcon: {
    width: 30,
    height: 30,
    color: theme.palette.common.white,
  },
  iconButton: {
    marginRight: theme.spacing(2),
  },
  settingsIcon: {
    width: 30,
    height: 30,
    color: theme.palette.common.white,
  },
  notificationsIcon: {
    width: 30,
    height: 30,
    color: theme.palette.common.white,
  },
}));

const TopBar = (props) => {
  const {
    navBarOpen,
    navBarClosed,
    themeSettingsOpen,
    navBar,
    userLogsOut,
  } = props;

  const classes = useStyles();

  function toggleMenu() {
    if (navBar) {
      navBarClosed();
    } else {
      navBarOpen();
    }
  }

  return (
    <AppBar
      className={clsx(classes.root, { [classes.topBarShift]: navBar })}
      color="primary"
      position="relative"
    >
      <Toolbar>
        <IconButton onClick={() => toggleMenu()}>
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <Typography
          className={classes.brend}
          variant="h4"
          component={RouterLink}
          to="/"
        >
          АСА ИБ
        </Typography>

        <IconButton className={classes.rightContent}>
          <NotificationsIcon className={classes.notificationsIcon} />
        </IconButton>

        <IconButton className={classes.iconButton} onClick={themeSettingsOpen}>
          <SettingsIcon className={classes.settingsIcon} />
        </IconButton>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => userLogsOut()}
        >
          Выйти
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
