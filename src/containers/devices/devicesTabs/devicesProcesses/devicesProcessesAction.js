import {
  PROCESSES_LOADING,
  PROCESSES_LOADED,
  PROCESSES_ERROR,
  PROCESSES_RESET,
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

export function processesReset() {
  return {
    type: PROCESSES_RESET,
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
        console.log("res: ", res);

        if (!res.status) throw new Error("Не корректный запрос");
        if (!res.msg.length) {
          console.warn("Данные в процессе сбора");
          dispatch(processesLoaded());
        } else {
          dispatch(processesAddList(res.msg.map(_transformProcess)));
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

const _transformProcess = (process) => {
  return {
    name: process.name,
    user: process.user,
    path: process.path,
    pid: process.pid,
    startTst: new Date(process.startTst * 1000).toLocaleDateString(),
    stopTst: new Date(process.stopTst * 1000).toLocaleDateString(),
  };
};
