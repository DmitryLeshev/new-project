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
    i18nkey: "info-tab",
    value: "information",
    label: "Информация",
    id: 0,
    component: DevicesInformation,
    scroll: true,
  },
  {
    i18nkey: "programs-tab",
    value: "programs",
    label: "Программы",
    id: 1,
    component: DevicesPrograms,
    scroll: true,
  },
  {
    i18nkey: "screens-tab",
    value: "screens",
    label: "Снимки экрана",
    id: 2,
    component: DevicesScreens,
    scroll: false,
  },
  {
    i18nkey: "ports-tab",
    value: "ports",
    label: "Порты",
    id: 3,
    component: DevicesPorts,
    scroll: true,
  },
  {
    i18nkey: "browser-tab",
    value: "browser",
    label: "Браузеры",
    id: 4,
    component: DevicesBrowser,
    scroll: true,
  },
  {
    i18nkey: "proc-tab",
    value: "processes",
    label: "Процессы",
    id: 5,
    component: DevicesProcesses,
    scroll: true,
  },
  {
    i18nkey: "resp-tab",
    value: "responsible",
    label: "Ответственные",
    id: 6,
    component: DevicesResponsible,
    scroll: true,
  },

  {
    i18nkey: "logs-tab",
    value: "logs",
    label: "Логи",
    id: 7,
    component: DevicesLogs,
    scroll: true,
  },
  {
    i18nkey: "ap-tab",
    value: "entry",
    label: "Точки авторизации",
    id: 8,
    component: DevicesEntry,
    scroll: true,
  },
];

export default tabs;
