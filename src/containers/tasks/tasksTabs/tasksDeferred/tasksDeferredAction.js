import {
  TASKS_DEFERRED_LOADING,
  TASKS_DEFERRED_LOADED,
  TASKS_DEFERRED_ERROR,
  TASKS_DEFERRED_ADD_PACK,
} from "./actionsTypes";

import { TasksStatus, _transformTask } from "../../tasksTabsConfig";
import TasksService from "../../tasksService";

const tasksService = new TasksService();

export function tasksDeferredLoading() {
  return {
    type: TASKS_DEFERRED_LOADING,
  };
}
export function tasksDeferredLoaded() {
  return {
    type: TASKS_DEFERRED_LOADED,
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
      if (!loaded) {
        dispatch(tasksDeferredLoading());
        const res = await tasksService.getTasks(TasksStatus.DEFERRED);
        console.log("DEFERRED tasks: ", res);
        if (res.length < 100) {
          dispatch(tasksDeferredLoaded());
          console.log("Все таски 'DEFERRED' загрузились");
        }
        dispatch(tasksDeferredAddPack(res.map(_transformTask)));
      } else {
        console.log("Все таски 'DEFERRED' уже загружены");
      }
    } catch (error) {
      console.error(error);
      dispatch(tasksDeferredError());
    }
  };
}
