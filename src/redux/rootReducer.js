import { combineReducers } from "redux";

import authorizationReducer from "../containers/authorization/authorizationReducer";
import appReducer from "../App/appReducer";
import combineDevicesReducers from "../containers/devices/devicesReducer";
import combineTasksReducer from "../containers/tasks/tasksReducer";
// import devicesReducer from "./devices/devicesReducer";

export default combineReducers({
  authorization: authorizationReducer,
  app: appReducer,
  combineDevices: combineDevicesReducers,
  combineTasks: combineTasksReducer,
  // devices: devicesReducer,
});
