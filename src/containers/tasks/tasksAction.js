import { TEST } from "./tasksActionTypes.js";

import TasksService from "@services/TasksService";
const tasksService = new TasksService();

export function test() {
  tasksService.getAllTasks();
  tasksService.getTaskById(1519);
  return {
    type: TEST,
  };
}

test();
