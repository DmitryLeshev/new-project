import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

import clsx from "clsx";
import {
  Avatar,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
  makeStyles,
} from "@material-ui/core";

import Navigation from "@components/Navigation";
import navigationConfig from "./navigationConfig";
import imgAvatar from "@assets/images/img_avatar.png";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    zIndex: 1000,
    width: theme.drawer.width,
    height: "100%",
    transition: theme.drawer.transition,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    boxShadow: theme.shadows[4],
  },
  rootMobile: {
    width: theme.drawer.width,
    transition: theme.drawer.transition,
  },
  navBarShift: {
    transform: `translateX(-${theme.drawer.width}px)`,
  },
  content: {
    padding: theme.spacing(2),
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
  },
  avatar: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: theme.spacing(1),
  },
  divider: {
    backgroundColor: theme.palette.common.divider,
    marginTop: theme.spacing(2),
  },
  navigation: {
    marginTop: theme.spacing(2),
  },
}));

const NavBar = (props) => {
  const { navBar, navBarClosed } = props;
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  function renderContent() {
    return (
      <div className={classes.content}>
        <div className={classes.profile}>
          <Avatar
            alt="Person"
            className={classes.avatar}
            component={RouterLink}
            src={imgAvatar}
            to="/profile"
          />
          <Typography className={classes.name} variant="h4">
            Mister Rico
          </Typography>
          <Typography variant="body2">Admin</Typography>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.navigation}>
          {navigationConfig.map((list) => (
            <Navigation
              component="nav"
              key={list.title}
              pages={list.pages}
              title={list.title}
            />
          ))}
        </div>
      </div>
    );
  }

  function mobileContent() {
    return (
      <Drawer anchor={"left"} open={navBar} onClose={() => navBarClosed()}>
        <div className={classes.rootMobile}>{renderContent()}</div>
      </Drawer>
    );
  }

  function desktopContent() {
    return (
      <div className={clsx(classes.root, { [classes.navBarShift]: !navBar })}>
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
          {renderContent()}
        </Scrollbars>
      </div>
    );
  }

  if (mobileDevice) {
    return mobileContent();
  } else {
    return desktopContent();
  }
};

export default NavBar;
