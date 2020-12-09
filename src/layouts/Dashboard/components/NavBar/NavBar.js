import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

import { connect } from "react-redux";
import { navBarClosed } from "@redux/app/appActions";

import clsx from "clsx";
import {
  Avatar,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import useStyles from "./styles";

import Navigation from "@components/Navigation";
import navigationConfig from "./navigationConfig";
import imgAvatar from "@assets/images/img_avatar.png";

const NavBar = (props) => {
  const { navBar, navBarClosed } = props;
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  // console.log("mobileDevice: ", mobileDevice, theme.breakpoints.down("sm"));

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

function mapStateToProps(state) {
  return {
    navBar: state.app.navBar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navBarClosed: () => dispatch(navBarClosed()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
