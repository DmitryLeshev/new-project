import {
  TASKS_DEFERRED_LOADING,
  TASKS_DEFERRED_LOADED,
  TASKS_DEFERRED_ERROR,
  TASKS_DEFERRED_ADD_PACK,
} from "./actionsTypes";

const initionState = {
  tasks: [],
  loading: false,
  loaded: false,
  error: false,
};

const tasksDeferredReducer = (state = initionState, action) => {
  switch (action.type) {
    case TASKS_DEFERRED_LOADING:
      return {
        ...state,
        loading: true,
      };

    case TASKS_DEFERRED_LOADED:
      return {
        ...state,
        loaded: true,
      };

    case TASKS_DEFERRED_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case TASKS_DEFERRED_ADD_PACK: {
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

export default tasksDeferredReducer;
