import {
  TASKS_CANCELED_LOADED,
  TASKS_CANCELED_LOADING,
  TASKS_CANCELED_ERROR,
  TASKS_CANCELED_ADD_PACK,
} from "./actionsTypes";

import { TasksStatus, _transformTask } from "../../tasksTabsConfig";
import TasksService from "../../tasksService";

const tasksService = new TasksService();

export function tasksCanceledLoaded() {
  return {
    type: TASKS_CANCELED_LOADED,
  };
}

export function tasksCanceledLoading() {
  return {
    type: TASKS_CANCELED_LOADING,
  };
}

export function tasksCanceledError() {
  return {
    type: TASKS_CANCELED_ERROR,
  };
}

export function tasksCanceledAddPack(tasks) {
  return {
    type: TASKS_CANCELED_ADD_PACK,
    payload: tasks,
  };
}

export function tasksCanceledLoadingPack() {
  console.log("tasksCanceledLoadingPack start");
  return async (dispatch, getState) => {
    try {
      const { loaded } = getState().combineTasks.canceled;
      console.log("state CANCELED loaded: ", loaded);
      if (!loaded) {
        dispatch(tasksCanceledLoading());
        const tasks = await tasksService.getTasks(TasksStatus.CANCELED);
        console.log("CANCELED tasks: ", tasks);
        if (tasks.length < 100) {
          dispatch(tasksCanceledLoaded());
          console.log("Все таски 'CANCELED' загрузились");
        }
        dispatch(tasksCanceledAddPack(tasks.map(_transformTask)));
      } else {
        console.log("Все таски 'CANCELED' уже загружены");
      }
    } catch (error) {
      console.error(error);
      dispatch(tasksCanceledError());
    }
  };
}
