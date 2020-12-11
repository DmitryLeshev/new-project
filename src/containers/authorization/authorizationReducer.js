import { LOG_IN, LOG_OUT } from "./authorizationActionTypes";

const initionState = {
  authorized: false,
};

const appReducer = (state = initionState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        authorized: true,
      };
    case LOG_OUT:
      return {
        ...state,
        authorized: false,
      };
    default:
      return state;
  }
};

export default appReducer;
