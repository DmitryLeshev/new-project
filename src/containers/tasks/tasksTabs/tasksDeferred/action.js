import {
  TASKS_DEFERRED_LOADED,
  TASKS_DEFERRED_LOADING,
  TASKS_DEFERRED_ERROR,
  TASKS_DEFERRED_ADD_PACK,
} from "./actionsTypes";

import TasksStatus from "../../tasksStatusConfig";
import TasksService from "../../tasksService";

const tasksService = new TasksService();

export function tasksDeferredLoaded() {
  return {
    type: TASKS_DEFERRED_LOADED,
  };
}

export function tasksDeferredLoading() {
  return {
    type: TASKS_DEFERRED_LOADING,
  };
}

export function tasksDeferredError() {
  return {
    type: TASKS_DEFERRED_ERROR,
  };
}

export function tasksDeferredAddPack(tasks) {
  return {
    type: TASKS_DEFERRED_ADD_PACK,
    payload: tasks,
  };
}

export function tasksDeferredLoadingPack() {
  console.log("tasksDeferredLoadingPack start");
  return async (dispatch, getState) => {
    try {
      const { loaded } = getState().combineTasks.deferred;
      console.log("state DEFERRD loaded: ", loaded);
      if (!loaded) {
        dispatch(tasksDeferredLoading());
        const tasks = await tasksService.getTasks(TasksStatus.DEFERRD);
        console.log("DEFERRD tasks: ", tasks);
        if (tasks.length < 100) {
          dispatch(tasksDeferredLoaded());
          console.log("Все таски 'DEFERRD' загрузились");
        }
        dispatch(tasksDeferredAddPack(tasks));
      } else {
        console.log("Все таски 'DEFERRD' уже загружены");
      }
    } catch (error) {
      console.error(error);
      dispatch(tasksDeferredError());
    }
  };
}
