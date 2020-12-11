import {
  DEVICES_LIST_LOADING,
  DEVICES_LIST_LOADED,
  DEVICES_LIST_ERROR,
  DEVICES_LIST_ADD,
} from "./devicesListActionTypes";

import DevicesService from "../devicesService";
const devicesService = new DevicesService();

export function devicesListLoading() {
  return {
    type: DEVICES_LIST_LOADING,
  };
}

export function devicesListLoaded() {
  return {
    type: DEVICES_LIST_LOADED,
  };
}
export function devicesListAdd(devices) {
  return {
    type: DEVICES_LIST_ADD,
    payload: devices,
  };
}
export function devicesListError() {
  return {
    type: DEVICES_LIST_ERROR,
  };
}

export function getDevicesList() {
  return async (dispatch, getState) => {
    try {
      const { loaded } = getState().combineDevices.list;
      if (!loaded) {
        dispatch(devicesListLoading());
        const devices = await devicesService.getAllDevices();
        if (devices) {
          dispatch(devicesListAdd(devices));
          dispatch(devicesListLoaded());
        } else {
          throw new Error("Нету списка");
        }
      } else {
        console.log("Список устройств уже полностью загружен");
      }
    } catch (error) {
      console.error("error: ", error);
      console.error("error.message: ", error.message);
      dispatch(devicesListError());
    }
  };
}
