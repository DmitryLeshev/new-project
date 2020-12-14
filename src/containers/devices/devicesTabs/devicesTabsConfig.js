import DevicesScreens from "./devicesScreens/devicesScreens";
import DevicesInformation from "./devicesInformation/devicesInformation";
import DevicesPrograms from "./devicesPrograms/devicesPrograms";

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
  { value: "ports", label: "Порты", id: 3, component: DevicesScreens },
  { value: "browser", label: "Браузеры", id: 4, component: DevicesScreens },
  { value: "processes", label: "Процессы", id: 5, component: DevicesScreens },
  {
    value: "responsible",
    label: "Ответственные",
    id: 6,
    component: DevicesScreens,
  },
  { value: "logs", label: "Логи", id: 7, component: DevicesScreens },
  {
    value: "entry",
    label: "Точки авторизации",
    id: 8,
    component: DevicesScreens,
  },
];

export default tabs;
