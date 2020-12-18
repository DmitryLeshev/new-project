import { programsReset } from "./devicesPrograms/devicesProgramsAction";
import { portsReset } from "./devicesPorts/devicesPortsAction";
import { processesReset } from "./devicesProcesses/devicesProcessesAction";
import { screensReset } from "./devicesScreens/devicesScreensAction";

export function resetAllDevices() {
  console.log("resetAllDevices");
  return (dispatch) => {
    dispatch(programsReset());
    dispatch(portsReset());
    dispatch(processesReset());
    dispatch(screensReset());
  };
}
