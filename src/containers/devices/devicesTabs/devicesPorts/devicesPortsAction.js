import {
  PORTS_LOADING,
  PORTS_LOADED,
  PORTS_ERROR,
  PORTS_RESET,
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

export function portsReset() {
  return {
    type: PORTS_RESET,
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
          dispatch(portsAddList(res.msg.map(_transformPort)));
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

const _transformDate = (date) => {
  const getSeconds = new Date(date * 1000).getSeconds();
  const getMinutes = new Date(date * 1000).getMinutes();
  const getHours = new Date(date * 1000).getHours();
  const getDay = new Date(date * 1000).getDate();
  const getMonth = new Date(date * 1000).getMonth() + 1;

  return `${getDay}.${getMonth} - ${getHours}:${getMinutes}:${getSeconds}`;
};

const _transformPort = (port) => {
  return {
    pid: port.pid,
    appName: port.appName,
    protocol: port.protocol,
    localAddr: port.localAddr,
    foreignAddr: port.foreignAddr,
    state: port.state,
    startTst: _transformDate(port.startTst),
    stopTst: _transformDate(port.stopTst),
    // startTst: new Date(port.startTst * 1000).toLocaleDateString(),
    // stopTst: new Date(port.stopTst * 1000).toLocaleDateString(),
  };
};
