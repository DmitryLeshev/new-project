import {
  LOADING_SUCCESS,
  LOADING_ERROR,
  NAV_BAR_OPEN,
  NAV_BAR_CLOSED,
  THEME_SETTINGS_OPEN,
  THEME_SETTINGS_CLOSED,
  DARK_MODE_CHANGE,
  SWITCH_THEME,
} from "./actionsTypes";

const initionState = {
  loading: true,
  error: false,
  authorized: true,
  navBar: true,
  themeSettings: false,
  darkMode: false,
  theme: "default",
};

const appReducer = (state = initionState, action) => {
  switch (action.type) {
    case LOADING_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case LOADING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
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
