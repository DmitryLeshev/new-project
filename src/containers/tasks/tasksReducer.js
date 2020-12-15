import { combineReducers } from "redux";
import tasksInWorkReducer from "./tasksTabs/tasksInWork/tasksInWorkReducer";
import tasksСompletedReducer from "./tasksTabs/tasksСompleted/reducer";
import tasksCanceledReducer from "./tasksTabs/tasksCanceled/reducer";
import tasksDeferredReducer from "./tasksTabs/tasksDeferred/reducer";

export default combineReducers({
  inWork: tasksInWorkReducer,
  completed: tasksСompletedReducer,
  canceled: tasksCanceledReducer,
  deferred: tasksDeferredReducer,
});
