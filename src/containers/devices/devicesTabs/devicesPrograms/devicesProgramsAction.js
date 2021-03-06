import {
  PROGRAMS_LOADING,
  PROGRAMS_LOADED,
  PROGRAMS_ERROR,
  PROGRAMS_RESET,
  PROGRAMS_ADD_LIST,
} from "./actionsTypes";

import DevicesService from "../../devicesService";
const devicesService = new DevicesService();

export function programsLoading() {
  return {
    type: PROGRAMS_LOADING,
  };
}

export function programsLoaded() {
  return {
    type: PROGRAMS_LOADED,
  };
}

export function programsError() {
  return {
    type: PROGRAMS_ERROR,
  };
}

export function programsReset() {
  return {
    type: PROGRAMS_RESET,
  };
}

export function programsAddList(list) {
  return {
    type: PROGRAMS_ADD_LIST,
    payload: list,
  };
}

export function getProgramsList(id) {
  return async (dispatch, getState) => {
    try {
      let { loaded } = getState().combineDevices.programs;
      if (!loaded) {
        dispatch(programsLoading());
        const res = await devicesService.getDeviceDetailsPrograms(id);
        console.log("res: ", res);
        if (!res.status) throw new Error("Не корректный запрос");
        if (!res.msg.length) {
          console.warn("Данные в процессе сбора");
          dispatch(programsLoaded());
        } else {
          dispatch(programsAddList(res.msg.map(_transformProgram)));
        }
      } else {
        console.log("Данные уже загружены");
      }
    } catch (error) {
      dispatch(programsError());
      console.error(error);
    }
  };
}

const _transformProgram = (program) => {
  return {
    icon: program.icon,
    instTst: new Date(program.instTst * 1000).toLocaleDateString(),
    location: program.location,
    name: program.name,
    publisher: program.publisher,
    version: program.version,
  };
};
