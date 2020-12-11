import { combineReducers } from "redux";
import tasksСompletedReducer from "./tasksTabs/tasksСompleted/reducer";
import tasksCanceledReducer from "./tasksTabs/tasksCanceled/reducer";
import tasksDeferredReducer from "./tasksTabs/tasksDeferred/reducer";
import tasksInWorkReducer from "./tasksTabs/tasksInWork/reducer";

export default combineReducers({
  completed: tasksСompletedReducer,
  canceled: tasksCanceledReducer,
  deferred: tasksDeferredReducer,
  inWork: tasksInWorkReducer,
});
