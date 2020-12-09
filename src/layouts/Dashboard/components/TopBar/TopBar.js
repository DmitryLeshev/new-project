import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { connect } from "react-redux";
import {
  navBarOpen,
  navBarClosed,
  themeSettingsOpen,
} from "@redux/app/appActions";
import { userLogsOut } from "@containers/authorization/authorizationAction";

import clsx from "clsx";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";

import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";

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

        <IconButton onClick={themeSettingsOpen}>
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

function mapStateToProps(state) {
  return {
    navBar: state.app.navBar,
    authorized: state.authorization.authorized,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navBarOpen: () => dispatch(navBarOpen()),
    navBarClosed: () => dispatch(navBarClosed()),
    themeSettingsOpen: () => dispatch(themeSettingsOpen()),
    userLogsOut: () => dispatch(userLogsOut()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
