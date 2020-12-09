import { TEST } from "./tasksActionTypes";

const initionState = {
  list: null,
};

const tasksReducer = (state = initionState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        list: ["test"],
      };

    default:
      return state;
  }
};

export default tasksReducer;
