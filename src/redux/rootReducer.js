import { combineReducers } from "redux";
import authorizationReducer from "../containers/authorization/authorizationReducer";
import appReducer from "./app/appReducer";
// import tasksReducer from "./tasks/tasksReducer";
// import devicesReducer from "./devices/devicesReducer";
// import combineDevicesReducers from "./devices/devicesRootReducer";

export default combineReducers({
  authorization: authorizationReducer,
  app: appReducer,
  // tasks: tasksReducer,
  // devices: devicesReducer,
  // combineDevices: combineDevicesReducers,
});
