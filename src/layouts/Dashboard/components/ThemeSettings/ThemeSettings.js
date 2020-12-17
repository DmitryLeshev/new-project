import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { useTranslation } from "react-i18next";

import { connect } from "react-redux";
import {
  themeSettingsOpen,
  themeSettingsClosed,
  darkModeChange,
  switchTheme,
} from "@src/App/appActions";

import { ContentsTitle, PaletteColors, ModesThemes } from "./components";

import { Button, Divider, Drawer, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.drawer.width,
    height: "100%",
    transition: theme.drawer.transition,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
}));

const ThemeSettings = (props) => {
  const {
    themeSettings,
    themeSettingsClosed,
    switchTheme,
    darkModeChange,
    darkMode,
  } = props;
  const classes = useStyles();

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

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

            <Button
              variant="outlined"
              color="secondary"
              onClick={() => changeLanguage("en")}
            >
              EN
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => changeLanguage("ru")}
            >
              RU
            </Button>

            <div>{t("device-page.protected")}</div>
            <div>{t("user-page.login")}</div>
          </div>
        </Scrollbars>
      </div>
    </Drawer>
  );
};

function mapStateToProps(state) {
  return {
    themeSettings: state.app.themeSettings,
    darkMode: state.app.darkMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    themeSettingsOpen: () => dispatch(themeSettingsOpen()),
    themeSettingsClosed: () => dispatch(themeSettingsClosed()),
    darkModeChange: () => dispatch(darkModeChange()),
    switchTheme: (theme) => dispatch(switchTheme(theme)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSettings);
