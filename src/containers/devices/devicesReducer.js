import { combineReducers } from "redux";
import devicesBrowserReducer from "./devicesTabs/devicesBrowser/reducer";
import devicesEntryReducer from "./devicesTabs/devicesEntry/reducer";
import devicesHeaderReducer from "./devicesTabs/devicesHeader/reducer";
import devicesInformationReducer from "./devicesTabs/devicesInformation/reducer";
import devicesListReducer from "./devicesTabs/devicesList/reducer";
import devicesLogsReducer from "./devicesTabs/devicesLogs/reducer";
import devicesPortsReducer from "./devicesTabs/devicesPorts/reducer";
import devicesProcessesReducer from "./devicesTabs/devicesProcesses/reducer";
import devicesProgramsReducer from "./devicesTabs/devicesPrograms/reducer";
import devicesResponsibleReducer from "./devicesTabs/devicesResponsible/reducer";
import devicesScreensReducer from "./devicesTabs/devicesScreens/reducer";

export default combineReducers({
  browser: devicesBrowserReducer,
  entry: devicesEntryReducer,
  header: devicesHeaderReducer,
  information: devicesInformationReducer,
  list: devicesListReducer,
  logs: devicesLogsReducer,
  ports: devicesPortsReducer,
  processes: devicesProcessesReducer,
  programs: devicesProgramsReducer,
  responsible: devicesResponsibleReducer,
  screens: devicesScreensReducer,
});
