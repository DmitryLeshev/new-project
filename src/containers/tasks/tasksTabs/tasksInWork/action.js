import {
  TASKS_IN_WORK_LOADED,
  TASKS_IN_WORK_LOADING,
  TASKS_IN_WORK_ERROR,
  TASKS_IN_WORK_ADD_PACK,
} from "./actionsTypes";

import TasksStatus from "../../tasksStatusConfig";
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
      console.log("state IN_WORK loaded: ", loaded);
      if (!loaded) {
        dispatch(tasksInWorkLoading());
        const tasks = await tasksService.getTasks(TasksStatus.IN_WORK);
        console.log("IN_WORK tasks: ", tasks);
        if (tasks.length < 100) {
          dispatch(tasksInWorkLoaded());
          console.log("Все таски 'IN_WORK' загрузились");
        }
        dispatch(tasksInWorkAddPack(tasks));
      } else {
        console.log("Все таски 'IN_WORK' уже загружены");
      }
    } catch (error) {
      console.error(error);
      dispatch(tasksInWorkError());
    }
  };
}
