import DevicesScreens from "./devicesScreens/devicesScreens";
import DevicesInformation from "./devicesInformation/devicesInformation";
import DevicesPrograms from "./devicesPrograms/devicesPrograms";
import DevicesProcesses from "./devicesProcesses/devicesProcesses";
import DevicesPorts from "./devicesPorts/devicesPorts";
import DevicesBrowser from "./devicesBrowser/devicesBrowser";
import DevicesResponsible from "./devicesResponsible/devicesResponsible";
import DevicesLogs from "./devicesLogs/devicesLogs";
import DevicesEntry from "./devicesEntry/devicesEntry";

const tabs = [
  {
    value: "information",
    label: "Информация",
    id: 0,
    component: DevicesInformation,
  },
  { value: "programs", label: "Программы", id: 1, component: DevicesPrograms },
  {
    value: "screens",
    label: "Снимки экрана",
    id: 2,
    component: DevicesScreens,
  },
  { value: "ports", label: "Порты", id: 3, component: DevicesPorts },
  { value: "browser", label: "Браузеры", id: 4, component: DevicesBrowser },
  { value: "processes", label: "Процессы", id: 5, component: DevicesProcesses },
  {
    value: "responsible",
    label: "Ответственные",
    id: 6,
    component: DevicesResponsible,
  },
  { value: "logs", label: "Логи", id: 7, component: DevicesLogs },
  {
    value: "entry",
    label: "Точки авторизации",
    id: 8,
    component: DevicesEntry,
  },
];

export default tabs;
