import {
  APP_READY,
  NAV_BAR_OPEN,
  NAV_BAR_CLOSED,
  THEME_SETTINGS_OPEN,
  THEME_SETTINGS_CLOSED,
  DARK_MODE_CHANGE,
  SWITCH_THEME,
} from "./appActionsTypes";

export function appReady() {
  return {
    type: APP_READY,
  };
}

export function navBarOpen() {
  return {
    type: NAV_BAR_OPEN,
  };
}

export function navBarClosed() {
  return {
    type: NAV_BAR_CLOSED,
  };
}

export function themeSettingsOpen() {
  return {
    type: THEME_SETTINGS_OPEN,
  };
}

export function themeSettingsClosed() {
  return {
    type: THEME_SETTINGS_CLOSED,
  };
}

export function darkModeChange() {
  return {
    type: DARK_MODE_CHANGE,
  };
}

export function switchTheme(theme) {
  return {
    type: SWITCH_THEME,
    payload: theme,
  };
}
