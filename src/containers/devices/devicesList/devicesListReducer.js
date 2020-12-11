import {
  DEVICES_LIST_LOADING,
  DEVICES_LIST_LOADED,
  DEVICES_LIST_ADD,
  DEVICES_LIST_ERROR,
} from "./devicesListActionTypes";

const initionState = {
  loading: false,
  loaded: false,
  error: false,
  devices: [],
};

const devicesListReducer = (state = initionState, action) => {
  switch (action.type) {
    case DEVICES_LIST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DEVICES_LIST_LOADED:
      return {
        ...state,
        loaded: true,
      };
    case DEVICES_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case DEVICES_LIST_ADD:
      return {
        ...state,
        loading: false,
        devices: [...state.devices, ...action.payload],
      };

    default:
      return state;
  }
};

export default devicesListReducer;
