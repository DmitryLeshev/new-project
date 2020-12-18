import {
  PROCESSES_LOADING,
  PROCESSES_LOADED,
  PROCESSES_ERROR,
  PROCESSES_ADD_LIST,
  PROCESSES_RESET,
} from "./actionsTypes";

const initionState = {
  list: [],
  loading: false,
  loaded: false,
  error: false,
};

const devicesProcessesReducer = (state = initionState, action) => {
  switch (action.type) {
    case PROCESSES_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case PROCESSES_LOADED: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case PROCESSES_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case PROCESSES_ADD_LIST: {
      return {
        ...state,
        loading: false,
        list: [...state.list, ...action.payload],
      };
    }

    case PROCESSES_RESET: {
      return {
        loading: false,
        loaded: false,
        error: false,
        list: [],
      };
    }

    default:
      return state;
  }
};

export default devicesProcessesReducer;
