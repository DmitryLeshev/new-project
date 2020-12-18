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
    scroll: true,
  },
  {
    value: "programs",
    label: "Программы",
    id: 1,
    component: DevicesPrograms,
    scroll: true,
  },
  {
    value: "screens",
    label: "Снимки экрана",
    id: 2,
    component: DevicesScreens,
    scroll: false,
  },
  {
    value: "ports",
    label: "Порты",
    id: 3,
    component: DevicesPorts,
    scroll: true,
  },
  {
    value: "browser",
    label: "Браузеры",
    id: 4,
    component: DevicesBrowser,
    scroll: true,
  },
  {
    value: "processes",
    label: "Процессы",
    id: 5,
    component: DevicesProcesses,
    scroll: true,
  },
  {
    value: "responsible",
    label: "Ответственные",
    id: 6,
    component: DevicesResponsible,
    scroll: true,
  },
  { value: "logs", label: "Логи", id: 7, component: DevicesLogs, scroll: true },
  {
    value: "entry",
    label: "Точки авторизации",
    id: 8,
    component: DevicesEntry,
    scroll: true,
  },
];

export default tabs;
