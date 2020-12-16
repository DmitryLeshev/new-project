import {
  TASKS_IN_WORK_LOADED,
  TASKS_IN_WORK_LOADING,
  TASKS_IN_WORK_ERROR,
  TASKS_IN_WORK_ADD_PACK,
} from "./actionsTypes";

import { TasksStatus, _transformTask } from "../../tasksTabsConfig";
import TasksService from "../../tasksService";

const tasksService = new TasksService();

export function tasksInWorkLoaded() {
  return {
    type: TASKS_IN_WORK_LOADED,
  };
}

export function tasksInWorkLoading() {
  return {
    type: TASKS_IN_WORK_LOADING,
  };
}

export function tasksInWorkError() {
  return {
    type: TASKS_IN_WORK_ERROR,
  };
}

export function tasksInWorkAddPack(tasks) {
  return {
    type: TASKS_IN_WORK_ADD_PACK,
    payload: tasks,
  };
}

export function tasksInWorkLoadingPack() {
  console.log("tasksInWorkLoadingPack start");
  return async (dispatch, getState) => {
    try {
      const { loaded } = getState().combineTasks.inWork;
      if (!loaded) {
        dispatch(tasksInWorkLoading());
        const res = await tasksService.getTasks(TasksStatus.IN_WORK);
        console.log("IN_WORK tasks: ", res);
        if (res.length < 100) {
          dispatch(tasksInWorkLoaded());
          console.log("Все таски 'IN_WORK' загрузились");
        }
        dispatch(tasksInWorkAddPack(res.map(_transformTask)));
      } else {
        console.log("Все таски 'IN_WORK' уже загружены");
      }
    } catch (error) {
      console.error(error);
      dispatch(tasksInWorkError());
    }
  };
}
