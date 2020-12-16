import TasksTabInWork from "./tasksTabs/tasksInWork/tasksInWork";
import TasksTabDeferred from "./tasksTabs/tasksDeferred/tasksDeferred";
import TasksTabCanceled from "./tasksTabs/tasksCanceled/tasksCanceled";
import TasksTabСompleted from "./tasksTabs/tasksСompleted/tasksСompleted";

export const tabsConfig = [
  { value: "in-work", label: "В работе", id: 0, component: TasksTabInWork },
  {
    value: "deferred",
    label: "Отложенные",
    id: 1,
    component: TasksTabDeferred,
  },
  {
    value: "canceled",
    label: "Отмененные",
    id: 2,
    component: TasksTabCanceled,
  },
  {
    value: "completed",
    label: "Завершенные",
    id: 3,
    component: TasksTabСompleted,
  },
];

export const TasksStatus = {
  IN_WORK: 1,
  DEFERRED: 2,
  CANCELED: 3,
  COMPLETED: 4,
};

export const _transformTask = (task) => {
  return {
    id: task.id,
    type: task.type,
    typeIcon: task.class,
    crt: task.crt,
    entityType: task.entityType,
    entityId: task.entityId,
    responsible: task.responsible,
    createTst: new Date(task.createTst * 1000).toLocaleDateString(),
  };
};
