import {
  PORTS_LOADING,
  PORTS_LOADED,
  PORTS_ERROR,
  PORTS_ADD_LIST,
} from "./actionsTypes";

import DevicesService from "../../devicesService";
const devicesService = new DevicesService();

export function portsLoading() {
  return {
    type: PORTS_LOADING,
  };
}

export function portsLoaded() {
  return {
    type: PORTS_LOADED,
  };
}

export function portsError() {
  return {
    type: PORTS_ERROR,
  };
}

export function portsAddList(list) {
  return {
    type: PORTS_ADD_LIST,
    payload: list,
  };
}

export function getPortsList(id) {
  return async (dispatch, getState) => {
    try {
      let { loaded } = getState().combineDevices.programs;
      if (!loaded) {
        dispatch(portsLoading());
        const res = await devicesService.getDeviceDetailsPorts(id);
        console.log("res: ", res);
        if (!res.status) throw new Error("Не корректный запрос");
        if (!res.msg.length) {
          console.warn("Данные в процессе сбора");
          dispatch(portsLoaded());
        } else {
          console.log(res.msg);
          dispatch(portsAddList(res.msg));
        }
      } else {
        console.log("Данные уже загружены");
      }
    } catch (error) {
      dispatch(portsError());
      console.error(error);
    }
  };
}

// const _transformPort = (program) => {
//   return {
//     icon: program.icon,
//     instTst: new Date(program.instTst * 1000).toLocaleDateString(),
//     location: program.location,
//     name: program.name,
//     publisher: program.publisher,
//     version: program.version,
//   };
// };
