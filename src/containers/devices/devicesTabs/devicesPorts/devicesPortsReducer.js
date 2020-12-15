import {
  PORTS_LOADING,
  PORTS_LOADED,
  PORTS_ERROR,
  PORTS_ADD_LIST,
} from "./actionsTypes";

const initionState = {
  loading: false,
  loaded: false,
  error: false,
  list: [],
};

const devicesPortsReducer = (state = initionState, action) => {
  switch (action.type) {
    case PORTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case PORTS_LOADED: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case PORTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case PORTS_ADD_LIST: {
      return {
        ...state,
        loading: false,
        list: [...state.list, ...action.payload],
      };
    }

    default:
      return state;
  }
};

export default devicesPortsReducer;
