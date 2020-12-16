import {
  TASKS_IN_WORK_LOADED,
  TASKS_IN_WORK_LOADING,
  TASKS_IN_WORK_ERROR,
  TASKS_IN_WORK_ADD_PACK,
} from "./actionsTypes";

const initionState = {
  tasks: [],
  loading: false,
  loaded: false,
  error: false,
};

const tasksInWorkReducer = (state = initionState, action) => {
  switch (action.type) {
    case TASKS_IN_WORK_LOADING:
      return {
        ...state,
        loading: true,
      };

    case TASKS_IN_WORK_LOADED:
      return {
        ...state,
        loaded: true,
      };

    case TASKS_IN_WORK_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case TASKS_IN_WORK_ADD_PACK: {
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

export default tasksInWorkReducer;
