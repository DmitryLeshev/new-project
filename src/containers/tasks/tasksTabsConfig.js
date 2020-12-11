import TasksTabInWork from "./tasksTabs/tasksInWork/tasksInWork";
import TasksTabDeferred from "./tasksTabs/tasksDeferred/tasksDeferred";
import TasksTabCanceled from "./tasksTabs/tasksCanceled/tasksCanceled";
import TasksTabСompleted from "./tasksTabs/tasksСompleted/tasksСompleted";

const tabs = [
  { label: "В работе", id: 0, component: TasksTabInWork },
  { label: "Отложенные", id: 1, component: TasksTabDeferred },
  { label: "Отмененные", id: 2, component: TasksTabCanceled },
  { label: "Завершенные", id: 3, component: TasksTabСompleted },
];

export default tabs;
