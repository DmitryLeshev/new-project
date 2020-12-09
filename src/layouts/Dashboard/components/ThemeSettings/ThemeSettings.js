import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { connect } from "react-redux";
// import {
//   themeSettingsOpen,
//   themeSettingsClosed,
//   darkModeChange,
//   switchTheme,
// } from "@redux/app/appActions";

import { ContentsTitle, PaletteColors, ModesThemes } from "./components";

import { Divider, Drawer } from "@material-ui/core";
import useStyles from "./styles";

const ThemeSettings = (props) => {
  const {
    themeSettings,
    themeSettingsClosed,
    switchTheme,
    darkModeChange,
    darkMode,
  } = props;
  const classes = useStyles();
  return (
    <Drawer anchor={"right"} open={themeSettings} onClose={themeSettingsClosed}>
      <div className={classes.root}>
        <Scrollbars>
          <div className={classes.content}>
            <ContentsTitle />

            <Divider />

            <PaletteColors switchTheme={switchTheme} />

            <Divider />

            <ModesThemes darkModeChange={darkModeChange} darkMode={darkMode} />
          </div>
        </Scrollbars>
      </div>
    </Drawer>
  );
};

function mapStateToProps(state) {
  return {
    // themeSettings: state.app.themeSettings,
    // darkMode: state.app.darkMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // themeSettingsOpen: () => dispatch(themeSettingsOpen()),
    // themeSettingsClosed: () => dispatch(themeSettingsClosed()),
    // darkModeChange: () => dispatch(darkModeChange()),
    // switchTheme: (theme) => dispatch(switchTheme(theme)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSettings);
