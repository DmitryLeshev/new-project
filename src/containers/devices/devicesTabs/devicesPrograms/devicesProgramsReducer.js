import {
  PROGRAMS_LOADING,
  PROGRAMS_LOADED,
  PROGRAMS_ERROR,
  PROGRAMS_ADD_LIST,
  PROGRAMS_RESET,
} from "./actionsTypes";

const initionState = {
  list: [],
  loading: false,
  loaded: false,
  error: false,
};

const devicesProgramsReducer = (state = initionState, action) => {
  switch (action.type) {
    case PROGRAMS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case PROGRAMS_LOADED: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case PROGRAMS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case PROGRAMS_ADD_LIST: {
      return {
        ...state,
        loading: false,
        list: [...state.list, ...action.payload],
      };
    }

    case PROGRAMS_RESET: {
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

export default devicesProgramsReducer;
