import {
  TASKS_COMPLETED_LOADING,
  TASKS_COMPLETED_LOADED,
  TASKS_COMPLETED_ERROR,
  TASKS_COMPLETED_ADD_PACK,
} from "./actionsTypes";

const initionState = {
  tasks: [],
  loading: false,
  loaded: false,
  error: false,
};

const tasksCompletedReducer = (state = initionState, action) => {
  switch (action.type) {
    case TASKS_COMPLETED_LOADING:
      return {
        ...state,
        loading: true,
      };

    case TASKS_COMPLETED_LOADED:
      return {
        ...state,
        loaded: true,
      };

    case TASKS_COMPLETED_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case TASKS_COMPLETED_ADD_PACK: {
      return {
        ...state,
        tasks: [...state.tasks, ...action.payload],
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default tasksCompletedReducer;
