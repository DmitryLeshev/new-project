import { combineReducers } from "redux";
import tasksInWorkReducer from "./tasksTabs/tasksInWork/tasksInWorkReducer";
import tasksСompletedReducer from "./tasksTabs/tasksСompleted/tasksСompletedReducer";
import tasksCanceledReducer from "./tasksTabs/tasksCanceled/tasksCanceledReducer";
import tasksDeferredReducer from "./tasksTabs/tasksDeferred/tasksDeferredReducer";

export default combineReducers({
  inWork: tasksInWorkReducer,
  completed: tasksСompletedReducer,
  canceled: tasksCanceledReducer,
  deferred: tasksDeferredReducer,
});
