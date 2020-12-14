import {
  PROGRAMS_LOADING,
  PROGRAMS_LOADED,
  PROGRAMS_ERROR,
  PROGRAMS_ADD_LIST,
} from "./actionsTypes";

const initionState = {
  loading: false,
  loaded: false,
  error: false,
  list: [],
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

    default:
      return state;
  }
};

export default devicesProgramsReducer;
