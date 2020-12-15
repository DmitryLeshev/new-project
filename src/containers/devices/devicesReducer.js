import { combineReducers } from "redux";
import devicesListReducer from "./devicesList/devicesListReducer";
import devicesInformationReducer from "./devicesTabs/devicesInformation/devicesInformationReducer";
import devicesProgramsReducer from "./devicesTabs/devicesPrograms/devicesProgramsReducer";
import devicesScreensReducer from "./devicesTabs/devicesScreens/devicesScreensReducer";
import devicesPortsReducer from "./devicesTabs/devicesPorts/devicesPortsReducer";
import devicesBrowserReducer from "./devicesTabs/devicesBrowser/devicesBrowserReducer";
import devicesProcessesReducer from "./devicesTabs/devicesProcesses/devicesProcessesReducer";
import devicesResponsibleReducer from "./devicesTabs/devicesResponsible/devicesResponsibleReducer";
import devicesEntryReducer from "./devicesTabs/devicesEntry/devicesEntryReducer";
import devicesHeaderReducer from "./devicesTabs/devicesHeader/devicesHeaderReducer";
import devicesLogsReducer from "./devicesTabs/devicesLogs/devicesLogsReducer";

export default combineReducers({
  list: devicesListReducer,
  information: devicesInformationReducer,
  programs: devicesProgramsReducer,
  screens: devicesScreensReducer,
  ports: devicesPortsReducer,
  browser: devicesBrowserReducer,
  processes: devicesProcessesReducer,
  responsible: devicesResponsibleReducer,
  entry: devicesEntryReducer,
  header: devicesHeaderReducer,
  logs: devicesLogsReducer,
});
