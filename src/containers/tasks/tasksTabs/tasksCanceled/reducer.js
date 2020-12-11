import {
  TASKS_CANCELED_LOADED,
  TASKS_CANCELED_LOADING,
  TASKS_CANCELED_ERROR,
  TASKS_CANCELED_ADD_PACK,
} from "./actionsTypes";

const initionState = {
  list: [],
  loaded: false,
  loading: false,
  error: false,
};

const tasksCanceledReducer = (state = initionState, action) => {
  switch (action.type) {
    case TASKS_CANCELED_LOADED:
      return {
        ...state,
        loaded: true,
      };

    case TASKS_CANCELED_LOADING:
      return {
        ...state,
        loading: true,
      };

    case TASKS_CANCELED_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case TASKS_CANCELED_ADD_PACK: {
      return {
        ...state,
        list: [...state.list, ...action.payload],
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default tasksCanceledReducer;
