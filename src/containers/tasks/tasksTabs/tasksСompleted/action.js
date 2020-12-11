import {
  TASKS_COMPLETED_LOADED,
  TASKS_COMPLETED_LOADING,
  TASKS_COMPLETED_ERROR,
  TASKS_COMPLETED_ADD_PACK,
} from "./actionsTypes";

import TasksStatus from "../../tasksStatusConfig";
import TasksService from "../../tasksService";

const tasksService = new TasksService();

export function tasksCompletedLoaded() {
  return {
    type: TASKS_COMPLETED_LOADED,
  };
}

export function tasksCompletedLoading() {
  return {
    type: TASKS_COMPLETED_LOADING,
  };
}

export function tasksCompletedError() {
  return {
    type: TASKS_COMPLETED_ERROR,
  };
}

export function tasksCompletedAddPack(tasks) {
  return {
    type: TASKS_COMPLETED_ADD_PACK,
    payload: tasks,
  };
}

export function tasksCompletedLoadingPack() {
  console.log("tasksCompletedLoadingPack start");
  return async (dispatch, getState) => {
    try {
      const { loaded } = getState().combineTasks.completed;
      console.log("state COMPLETED loaded: ", loaded);
      if (!loaded) {
        dispatch(tasksCompletedLoading());
        const tasks = await tasksService.getTasks(TasksStatus.COMPLETED);
        console.log("COMPLETED tasks: ", tasks);
        if (tasks.length < 100) {
          dispatch(tasksCompletedLoaded());
          console.log("Все таски 'COMPLETED' загрузились");
        }
        dispatch(tasksCompletedAddPack(tasks));
      } else {
        console.log("Все таски 'COMPLETED' уже загружены");
      }
    } catch (error) {
      console.error(error);
      dispatch(tasksCompletedError());
    }
  };
}
