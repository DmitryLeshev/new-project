import {
  PROCESSES_LOADING,
  PROCESSES_LOADED,
  PROCESSES_ERROR,
  PROCESSES_ADD_LIST,
} from "./actionsTypes";

import DevicesService from "../../devicesService";
const devicesService = new DevicesService();

export function processesLoading() {
  return {
    type: PROCESSES_LOADING,
  };
}

export function processesLoaded() {
  return {
    type: PROCESSES_LOADED,
  };
}

export function processesError() {
  return {
    type: PROCESSES_ERROR,
  };
}

export function processesAddList(list) {
  return {
    type: PROCESSES_ADD_LIST,
    payload: list,
  };
}

export function getProcessesList(id) {
  return async (dispatch, getState) => {
    try {
      let { loaded } = getState().combineDevices.programs;
      if (!loaded) {
        dispatch(processesLoading());
        const res = await devicesService.getDeviceDetailsProcesses(id);
        if (!res.status) throw new Error("Не корректный запрос");
        if (!res.msg.length) {
          console.warn("Данные в процессе сбора");
          dispatch(processesLoaded());
        } else {
          console.log(res.msg);
          dispatch(processesAddList(res.msg));
        }
      } else {
        console.log("Данные уже загружены");
      }
    } catch (error) {
      dispatch(processesError());
      console.error(error);
    }
  };
}
