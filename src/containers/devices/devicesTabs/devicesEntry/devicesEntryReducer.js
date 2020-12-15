// import {
//   PORTS_LOADING,
//   PORTS_LOADED,
//   PORTS_ERROR,
//   PORTS_ADD_LIST,
// } from "./actionsTypes";

const initionState = {
  loading: false,
  loaded: false,
  error: false,
  devicesBrowser: [],
};

const devicesBrowserReducer = (state = initionState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default devicesBrowserReducer;
