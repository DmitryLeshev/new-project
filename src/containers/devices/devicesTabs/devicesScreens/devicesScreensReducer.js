import {
  SCREENS_GET_USERS,
  SCREENS_GET_SELECTED_USER,
  SCREENS_GET_LOADED_PAGE,
  SCREENS_LOADING_SCREENSHOTS_PACK,
  SCREENS_ADD_SCREENSHOTS_PACK,
  SCREENS_LOADED,
  SCREENS_ERROR,
  SCREENS_RESET_DATA,
  SCREENS_RESET,
  SCREENS_DATE_FILTER,
  SCREENS_ADD_FULLY_SCREENSHOT,
} from "./actionsTypes";

const initionState = {
  screenshots: [],
  loading: false,
  loaded: false,
  error: false,
  loadedPage: 0,
  users: null,
  selectedUser: null,
  dateFilter: {
    dateStart: 0,
    dateEnd: 0,
  },
  fullyScreenshot: null,
};

const devicesScreensReducer = (state = initionState, action) => {
  switch (action.type) {
    case SCREENS_GET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case SCREENS_GET_SELECTED_USER: {
      return {
        ...state,
        selectedUser: action.payload,
      };
    }

    case SCREENS_GET_LOADED_PAGE: {
      return {
        ...state,
        loadedPage: action.payload,
      };
    }

    case SCREENS_LOADING_SCREENSHOTS_PACK: {
      return {
        ...state,
        loading: true,
      };
    }

    case SCREENS_ADD_SCREENSHOTS_PACK: {
      return {
        ...state,
        loading: false,
        screenshots: [...state.screenshots, ...action.payload],
      };
    }

    case SCREENS_LOADED: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case SCREENS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case SCREENS_RESET_DATA: {
      return {
        ...state,
        screenshots: [],
        loadedPage: 0,
      };
    }

    case SCREENS_RESET: {
      return {
        loading: false,
        loaded: false,
        error: false,
        loadedPage: 0,
        users: null,
        selectedUser: null,
        screenshots: [],
      };
    }

    case SCREENS_DATE_FILTER: {
      return {
        ...state,
        dateFilter: action.payload,
        loading: false,
        loaded: false,
        error: false,
        loadedPage: 0,
        users: null,
        selectedUser: null,
        screenshots: [],
      };
    }

    case SCREENS_ADD_FULLY_SCREENSHOT: {
      return {
        ...state,
        fullyScreenshot: action.payload,
      };
    }

    default:
      return state;
  }
};

export default devicesScreensReducer;
