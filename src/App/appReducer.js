import {
  APP_READY,
  NAV_BAR_OPEN,
  NAV_BAR_CLOSED,
  THEME_SETTINGS_OPEN,
  THEME_SETTINGS_CLOSED,
  DARK_MODE_CHANGE,
  SWITCH_THEME,
} from "./appActionsTypes";

const initionState = {
  ready: false,
  navBar: true,
  themeSettings: false,
  darkMode: false,
  theme: "default",
};

const appReducer = (state = initionState, action) => {
  switch (action.type) {
    case APP_READY:
      return {
        ...state,
        ready: true,
      };
    case NAV_BAR_OPEN:
      return {
        ...state,
        navBar: true,
      };
    case NAV_BAR_CLOSED:
      return {
        ...state,
        navBar: false,
      };
    case THEME_SETTINGS_OPEN:
      return {
        ...state,
        themeSettings: true,
      };
    case THEME_SETTINGS_CLOSED:
      return {
        ...state,
        themeSettings: false,
      };
    case DARK_MODE_CHANGE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case SWITCH_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
